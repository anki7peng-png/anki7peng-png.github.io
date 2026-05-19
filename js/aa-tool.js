// A一下 Web Tool - AA Expense Splitting Calculator
(function () {
  const AVATAR_COLORS = ['#8690a4', '#8c8cb4', '#7694a6', '#a8968a', '#9482a0', '#b47686', '#6a9892', '#a49488'];

  let members = [];
  let expenses = [];
  let memberCounter = 0;

  // ===== Calculation (ported from A一下/utils/calc.js) =====

  function calculateSummary(expenses, members) {
    const balance = {};
    members.forEach(m => { balance[m.id] = { name: m.name, paid: 0, shouldPay: 0 }; });

    expenses.forEach(exp => {
      const amount = parseFloat(exp.amount) || 0;
      if (amount <= 0) return;
      if (balance[exp.paidBy]) balance[exp.paidBy].paid += amount;

      const splitMembers = exp.splitType === 'custom' && exp.splitAmong.length > 0
        ? exp.splitAmong : members.map(m => m.id);
      const perPerson = Math.floor(amount * 100 / splitMembers.length) / 100;
      splitMembers.forEach(id => { if (balance[id]) balance[id].shouldPay += perPerson; });
    });

    return Object.keys(balance).map(id => {
      const b = balance[id];
      const net = Math.round((b.paid - b.shouldPay) * 100) / 100;
      return { id, name: b.name, paid: Math.round(b.paid * 100) / 100, shouldPay: Math.round(b.shouldPay * 100) / 100, net };
    });
  }

  function calculateTransfers(summary) {
    const debtors = [], creditors = [];
    summary.forEach(item => {
      if (item.net < 0) debtors.push({ ...item, remaining: Math.abs(item.net) });
      else if (item.net > 0) creditors.push({ ...item, remaining: item.net });
    });
    const transfers = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
      const amount = Math.min(debtors[i].remaining, creditors[j].remaining);
      if (amount > 0.01) {
        transfers.push({
          from: debtors[i].name, fromId: debtors[i].id,
          to: creditors[j].name, toId: creditors[j].id,
          amount: Math.round(amount * 100) / 100
        });
      }
      debtors[i].remaining -= amount;
      creditors[j].remaining -= amount;
      if (debtors[i].remaining < 0.01) i++;
      if (creditors[j].remaining < 0.01) j++;
    }
    return transfers;
  }

  // ===== Helpers =====

  function getColor(index) { return AVATAR_COLORS[index % AVATAR_COLORS.length]; }
  function getInitial(name) { return name ? name.charAt(0).toUpperCase() : '?'; }
  function fmtMoney(n) { return parseFloat(n || 0).toFixed(2); }
  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  // ===== DOM Rendering =====

  function renderMembers() {
    const container = document.getElementById('aa-members-input');
    if (!container) return;

    container.innerHTML = members.map((m, i) => `
      <div class="aa-member-input-wrap">
        <span class="aa-member-dot-sm" style="background:${getColor(i)}">${getInitial(m.name)}</span>
        <input class="aa-member-input" type="text" placeholder="成员姓名" value="${esc(m.name)}" maxlength="8" data-id="${m.id}" />
        <button class="aa-member-del-btn" data-id="${m.id}" title="移除">×</button>
      </div>
    `).join('');

    // Bind events
    container.querySelectorAll('.aa-member-input').forEach(input => {
      input.oninput = () => {
        const m = members.find(m => m.id === input.dataset.id);
        if (m) m.name = input.value;
      };
      input.onkeydown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addMember();
        }
      };
    });

    container.querySelectorAll('.aa-member-del-btn').forEach(btn => {
      btn.onclick = () => removeMember(btn.dataset.id);
    });

    updatePayerSelects();
  }

  function updatePayerSelects() {
    document.querySelectorAll('.aa-expense-payer').forEach(select => {
      const currentVal = select.value;
      select.innerHTML = '<option value="">选择付款人</option>' +
        members.filter(m => m.name.trim()).map(m =>
          `<option value="${m.id}" ${m.id === currentVal ? 'selected' : ''}>${esc(m.name)}</option>`
        ).join('');
    });
  }

  function renderExpenses() {
    const container = document.getElementById('aa-expenses');
    if (!container) return;

    const namedMembers = members.filter(m => m.name.trim());

    container.innerHTML = expenses.map((exp, i) => `
      <div class="aa-expense-card" data-index="${i}">
        <div class="aa-expense-row">
          <input class="aa-expense-desc" type="text" placeholder="费用说明（如：打车、门票）" value="${esc(exp.description)}" maxlength="20" data-index="${i}" />
          <div class="aa-expense-amount-wrap">
            <span class="aa-expense-currency">¥</span>
            <input class="aa-expense-amount" type="number" step="0.01" min="0" placeholder="0.00" value="${exp.amount}" data-index="${i}" />
          </div>
          <button class="aa-expense-delete" data-index="${i}" title="删除费用">×</button>
        </div>
        <div class="aa-expense-row aa-expense-meta">
          <div class="aa-expense-field">
            <label>付款人</label>
            <select class="aa-expense-payer" data-index="${i}">
              <option value="">选择付款人</option>
              ${namedMembers.map(m => `<option value="${m.id}" ${m.id === exp.paidBy ? 'selected' : ''}>${esc(m.name)}</option>`).join('')}
            </select>
          </div>
          <div class="aa-expense-field">
            <label>分摊方式</label>
            <div class="aa-split-options">
              <button class="aa-split-btn ${exp.splitType === 'all' ? 'active' : ''}" data-index="${i}" data-type="all">全员均摊</button>
              <button class="aa-split-btn ${exp.splitType === 'custom' ? 'active' : ''}" data-index="${i}" data-type="custom">部分分摊</button>
            </div>
          </div>
        </div>
        ${exp.splitType === 'custom' ? `
        <div class="aa-split-members">
          ${namedMembers.map(m => `
            <button class="aa-split-tag ${(exp.splitAmong || []).includes(m.id) ? 'active' : ''}" data-exp-index="${i}" data-member-id="${m.id}">${esc(m.name)}</button>
          `).join('')}
        </div>` : ''}
      </div>
    `).join('');

    // Bind events
    container.querySelectorAll('.aa-expense-desc').forEach(el => {
      el.oninput = () => { expenses[parseInt(el.dataset.index)].description = el.value; };
    });
    container.querySelectorAll('.aa-expense-amount').forEach(el => {
      el.oninput = () => { expenses[parseInt(el.dataset.index)].amount = el.value; };
    });
    container.querySelectorAll('.aa-expense-payer').forEach(el => {
      el.onchange = () => { expenses[parseInt(el.dataset.index)].paidBy = el.value; };
    });
    container.querySelectorAll('.aa-expense-delete').forEach(btn => {
      btn.onclick = () => { expenses.splice(parseInt(btn.dataset.index), 1); renderExpenses(); };
    });
    container.querySelectorAll('.aa-split-btn').forEach(btn => {
      btn.onclick = () => {
        const idx = parseInt(btn.dataset.index);
        expenses[idx].splitType = btn.dataset.type;
        if (btn.dataset.type === 'all') expenses[idx].splitAmong = [];
        renderExpenses();
      };
    });
    container.querySelectorAll('.aa-split-tag').forEach(btn => {
      btn.onclick = () => {
        const expIdx = parseInt(btn.dataset.expIndex);
        const memberId = btn.dataset.memberId;
        const arr = expenses[expIdx].splitAmong || [];
        const idx = arr.indexOf(memberId);
        if (idx >= 0) arr.splice(idx, 1); else arr.push(memberId);
        expenses[expIdx].splitAmong = arr;
        renderExpenses();
      };
    });
  }

  function renderResult(summary, transfers) {
    const resultEl = document.getElementById('aa-result');
    if (!resultEl) return;
    resultEl.style.display = 'block';

    const transferHtml = transfers.length > 0
      ? transfers.map(t => `
        <div class="aa-transfer-item">
          <div class="aa-transfer-person">
            <span class="aa-transfer-dot" style="background:${getColor(members.findIndex(m => m.id === t.fromId))}">${getInitial(t.from)}</span>
            <span>${esc(t.from)}</span>
          </div>
          <div class="aa-transfer-arrow">
            <span class="aa-transfer-amount">¥${fmtMoney(t.amount)}</span>
            <span class="aa-transfer-line">→</span>
          </div>
          <div class="aa-transfer-person">
            <span class="aa-transfer-dot" style="background:${getColor(members.findIndex(m => m.id === t.toId))}">${getInitial(t.to)}</span>
            <span>${esc(t.to)}</span>
          </div>
        </div>
      `).join('')
      : '<p class="aa-no-transfer">所有费用已均摊，无需转账</p>';

    const summaryHtml = summary.map(s => {
      const netClass = s.net >= 0 ? 'positive' : 'negative';
      const netLabel = s.net >= 0 ? '可收' : '应付';
      return `
        <div class="aa-summary-item">
          <div class="aa-summary-left">
            <span class="aa-transfer-dot" style="background:${getColor(members.findIndex(m => m.id === s.id))}">${getInitial(s.name)}</span>
            <span class="aa-summary-name">${esc(s.name)}</span>
          </div>
          <div class="aa-summary-right">
            <span class="aa-summary-detail">付了 <strong>¥${fmtMoney(s.paid)}</strong></span>
            <span class="aa-summary-detail">应付 <strong>¥${fmtMoney(s.shouldPay)}</strong></span>
            <span class="aa-summary-net ${netClass}">${netLabel} ¥${fmtMoney(Math.abs(s.net))}</span>
          </div>
        </div>
      `;
    }).join('');

    resultEl.innerHTML = `
      <div class="aa-result-section">
        <h4 class="aa-result-title">💡 最优转账方案</h4>
        <div class="aa-transfer-list">${transferHtml}</div>
      </div>
      <div class="aa-result-section">
        <h4 class="aa-result-title">📊 每人明细</h4>
        <div class="aa-summary-list">${summaryHtml}</div>
      </div>
    `;

    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // ===== Actions =====

  function addMember() {
    if (members.length >= 20) return;
    memberCounter++;
    members.push({ id: 'm_' + memberCounter, name: '' });
    renderMembers();
    const inputs = document.querySelectorAll('#aa-members-input .aa-member-input');
    if (inputs.length) inputs[inputs.length - 1].focus();
  }

  function removeMember(id) {
    members = members.filter(m => m.id !== id);
    expenses.forEach(exp => {
      if (exp.paidBy === id) exp.paidBy = '';
      if (exp.splitAmong) exp.splitAmong = exp.splitAmong.filter(mid => mid !== id);
    });
    renderMembers();
    renderExpenses();
  }

  function addExpense() {
    if (expenses.length >= 50) return;
    expenses.push({ description: '', amount: '', paidBy: '', splitType: 'all', splitAmong: [] });
    renderExpenses();
  }

  function calculate() {
    const namedMembers = members.filter(m => m.name.trim());
    if (namedMembers.length < 2) { alert('请至少添加2位已命名的成员'); return; }

    const validExpenses = expenses.filter(e => e.amount && parseFloat(e.amount) > 0 && e.paidBy);
    if (validExpenses.length === 0) { alert('请添加至少一笔有效的费用（需填写金额和付款人）'); return; }

    const summary = calculateSummary(validExpenses, namedMembers);
    const transfers = calculateTransfers(summary);
    renderResult(summary, transfers);
  }

  function reset() {
    members = [];
    expenses = [];
    memberCounter = 0;
    const resultEl = document.getElementById('aa-result');
    if (resultEl) { resultEl.style.display = 'none'; resultEl.innerHTML = ''; }
    addMember();
  }

  // ===== Init =====

  function init() {
    const addMemberBtn = document.getElementById('aa-add-member');
    const addExpenseBtn = document.getElementById('aa-add-expense');
    const calcBtn = document.getElementById('aa-calculate');
    const resetBtn = document.getElementById('aa-reset');

    if (addMemberBtn) addMemberBtn.onclick = addMember;
    if (addExpenseBtn) addExpenseBtn.onclick = addExpense;
    if (calcBtn) calcBtn.onclick = calculate;
    if (resetBtn) resetBtn.onclick = reset;

    addMember();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
