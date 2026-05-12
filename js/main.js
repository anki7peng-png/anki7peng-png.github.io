// 粒子效果配置
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#e0e5f2'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#2c6ef1',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        }
    },
    retina_detect: true
});

// 打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// 滚动动画
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// 图片数组 - 包含各种格式
const images = [
    'images/gallery1.jpg',
    'images/gallery2.jpg',
    'images/gallery3.jpg',
    'images/gallery4.jpg',
    'images/gallery5.jpg',
    'images/gallery6.jpg',
    'images/gallery7.jpg',
    'images/gallery8.jpg',
    'images/gallery9.jpg',
    'images/gallery10.jpg',
    'images/gallery11.jpg',
    'images/gallery12.jpg',
    'images/gallery13.JPG',
    'images/gallery14.JPG',
    'images/gallery15.jpg',
    'images/gallery16.jpg'
];

// 当前图片索引
let currentImageIndex = 0;

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('开始初始化...');
        console.log('particlesJS 是否存在:', typeof particlesJS);
        
        // 初始化主页粒子效果
        if (typeof particlesJS !== 'undefined') {
            console.log('初始化主页粒子效果...');
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffd700', '#ffd700']
                    },
                    shape: {
                        type: 'star',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        star: {
                            nb_sides: 5,
                            radius: 3
                        }
                    },
                    opacity: {
                        value: 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'bubble'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 200,
                            size: 8,
                            duration: 2,
                            opacity: 1,
                            speed: 3
                        }
                    }
                },
                retina_detect: true
            });
            console.log('主页粒子效果初始化完成');

            console.log('初始化gallery页面粒子效果...');
            // 初始化gallery页面粒子效果
            particlesJS('particles-js-gallery', {
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffd700', '#ffd700']
                    },
                    shape: {
                        type: 'star',
                        stroke: {
                            width: 0,
                            color: '#000000'
                        },
                        polygon: {
                            nb_sides: 5
                        },
                        star: {
                            nb_sides: 5,
                            radius: 2
                        }
                    },
                    opacity: {
                        value: 0.6,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 2,
                            size_min: 0.1,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        enable: true,
                        speed: 0.8,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'bubble'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 150,
                            size: 6,
                            duration: 2,
                            opacity: 1,
                            speed: 3
                        }
                    }
                },
                retina_detect: true
            });
            console.log('gallery页面粒子效果初始化完成');
        } else {
            console.error('particlesJS is not defined');
        }

        // 初始化打字机效果
        const typingText = document.querySelector('.typing-text');
        if (typingText) {
            typingText.textContent = '';
            typeWriter(typingText, '最会健身的AI训练师', 100);
        }

        initScrollAnimations();
        initializeGallery();
        initializeScrollEffects();
        initializeBackToTop();
        initializeCursorGlow();
        initializeAboutCarousel();
        initializeArticles(); // 初始化文章切换功能
    } catch (error) {
        console.error('初始化错误:', error);
    }
});

// 初始化图片画廊
function initializeGallery() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const scrollContainer = document.createElement('div');
    scrollContainer.className = 'gallery-scroll-container';
    galleryWrapper.appendChild(scrollContainer);

    // 只创建一个网格容器
    const gridContainer = document.createElement('div');
    gridContainer.className = 'gallery-grid';
    
    // 加载所有图片
    images.forEach((src, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        
        // 创建图片元素
        const img = document.createElement('img');
        img.loading = 'lazy';
        
        // 图片加载成功处理
        img.onload = function() {
            imgContainer.classList.add('loaded');
        };
        
        // 图片加载失败处理
        img.onerror = function() {
            console.error(`图片加载失败: ${src}`);
            imgContainer.classList.add('error');
        };
        
        // 设置图片属性
        img.src = src;
        img.alt = `Gallery Image ${index + 1}`;
        
        // 点击放大查看
        imgContainer.addEventListener('click', () => {
            if (!img.complete || img.naturalHeight === 0) {
                return;
            }
            
            const fullscreen = document.createElement('div');
            fullscreen.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            `;
            
            const fullImg = document.createElement('img');
            fullImg.src = src;
            fullImg.style.cssText = `
                max-width: 90%;
                max-height: 90vh;
                object-fit: contain;
                border-radius: 8px;
                transform: scale(0.9);
                transition: transform 0.3s ease;
            `;
            
            fullscreen.appendChild(fullImg);
            document.body.appendChild(fullscreen);
            
            requestAnimationFrame(() => {
                fullImg.style.transform = 'scale(1)';
            });
            
            fullscreen.addEventListener('click', () => {
                fullImg.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    document.body.removeChild(fullscreen);
                }, 300);
            });
        });
        
        imgContainer.appendChild(img);
        gridContainer.appendChild(imgContainer);
    });
    
    scrollContainer.appendChild(gridContainer);

    // 克隆网格用于无缝滚动
    const clonedGrid = gridContainer.cloneNode(true);
    scrollContainer.appendChild(clonedGrid);

    // 监听滚动动画结束事件，实现无缝循环
    scrollContainer.addEventListener('animationend', () => {
        scrollContainer.style.animation = 'none';
        scrollContainer.offsetHeight; // 触发重排
        scrollContainer.style.animation = 'scrollUpDown 40s linear infinite'; // 调整为40秒
    });
}

// 显示指定索引的图片
function showImage(index) {
    const images = document.querySelectorAll('.gallery-wrapper img');
    const dots = document.querySelectorAll('.gallery-dots .dot');
    
    images[currentImageIndex].classList.remove('active');
    dots[currentImageIndex].classList.remove('active');
    
    currentImageIndex = index;
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// 显示上一张图片
function showPreviousImage() {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(newIndex);
}

// 显示下一张图片
function showNextImage() {
    const newIndex = (currentImageIndex + 1) % images.length;
    showImage(newIndex);
}

// 初始化滚动效果
function initializeScrollEffects() {
    const nav = document.querySelector('.nav-container');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 导航栏始终保持显示，不再隐藏
        // 移除隐藏逻辑
        lastScrollTop = scrollTop;

        // 渐入效果
        const fadeElements = document.querySelectorAll('.about-content, .project-card, .gallery-container, .contact-form');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight * 0.8 && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    });
}

// 初始化返回顶部按钮
function initializeBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 玻璃滑块定位
function moveSliderTo(link, animate = true) {
    const slider = document.querySelector('.nav-slider');
    const nav = document.querySelector('.nav-container');
    if (!slider || !link || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    const padX = 6, padTop = 4, padBottom = 2;
    if (!animate) slider.style.transition = 'none';
    slider.style.left = (linkRect.left - navRect.left - padX) + 'px';
    slider.style.top = (linkRect.top - navRect.top - padTop) + 'px';
    slider.style.width = (linkRect.width + padX * 2) + 'px';
    slider.style.height = (linkRect.height + padTop + padBottom) + 'px';
    if (!animate) {
        slider.offsetHeight;
        slider.style.transition = '';
    }
}

// 初始化滑块位置
function initSlider() {
    const activeLink = document.querySelector('.nav-links a.active');
    if (activeLink) {
        requestAnimationFrame(() => moveSliderTo(activeLink, false));
    }
}

// 页面加载和窗口变化时初始化
document.addEventListener('DOMContentLoaded', initSlider);
window.addEventListener('resize', initSlider);

// SPA 页面切换
function navigateTo(pageId) {
    const currentPage = document.querySelector('.page.active');
    const targetPage = document.getElementById(pageId);
    if (!targetPage || currentPage === targetPage) return;

    // 更新导航高亮 + 滑块
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        moveSliderTo(activeLink);
    }

    // 淡出当前页
    currentPage.style.opacity = '0';
    setTimeout(() => {
        currentPage.classList.remove('active');
        currentPage.style.opacity = '';

        // 显示目标页（先透明）
        targetPage.style.opacity = '0';
        targetPage.classList.add('active');

        // 淡入
        requestAnimationFrame(() => {
            targetPage.style.opacity = '1';
        });

        window.scrollTo({ top: 0 });
    }, 250);
}

// 初始化导航点击
document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(this.dataset.page);
    });
});

// 导航栏滚动毛玻璃
window.addEventListener('scroll', () => {
    document.querySelector('.nav-container').classList.toggle('scrolled', window.scrollY > 50);
});

// 初始化鼠标跟随效果
function initializeCursorGlow() {
    const cursor = document.querySelector('.cursor-glow');
    let isHovering = false;

    // 鼠标移动时更新光晕位置
    document.addEventListener('mousemove', (e) => {
        cursor.style.opacity = '1';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';

        // 如果在可交互元素上，增加光晕大小
        if (isHovering) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    });

    // 监听可交互元素的悬停状态
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .social-icon');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            isHovering = true;
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        element.addEventListener('mouseleave', () => {
            isHovering = false;
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // 鼠标离开页面时隐藏光晕
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// 初始化关于我轮播图
function initializeAboutCarousel() {
    console.log('初始化轮播图...');
    const carousel = document.querySelector('.about-carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;
    let autoplayInterval;

    console.log(`找到 ${items.length} 张图片`);

    // 创建导航点
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            console.log(`点击导航点: ${index}`);
            showSlide(index);
            resetAutoplay();
        });
        dotsContainer.appendChild(dot);
    });

    // 添加按钮事件监听
    const prevButton = carousel.querySelector('.carousel-btn.prev');
    const nextButton = carousel.querySelector('.carousel-btn.next');
    
    console.log('上一张按钮:', prevButton ? '已找到' : '未找到');
    console.log('下一张按钮:', nextButton ? '已找到' : '未找到');

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            console.log('点击上一张');
            showPreviousSlide();
            resetAutoplay();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            console.log('点击下一张');
            showNextSlide();
            resetAutoplay();
        });
    }

    // 显示指定索引的幻灯片
    function showSlide(index) {
        if (!items[currentIndex] || !items[index]) {
            console.error('无效的幻灯片索引:', index);
            return;
        }
        
        console.log(`切换幻灯片: ${currentIndex} -> ${index}`);
        
        items[currentIndex].classList.remove('active');
        if (dotsContainer.children[currentIndex]) {
            dotsContainer.children[currentIndex].classList.remove('active');
        }
        
        currentIndex = index;
        
        items[currentIndex].classList.add('active');
        if (dotsContainer.children[currentIndex]) {
            dotsContainer.children[currentIndex].classList.add('active');
        }
    }

    // 显示上一张幻灯片
    function showPreviousSlide() {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        showSlide(newIndex);
    }

    // 显示下一张幻灯片
    function showNextSlide() {
        const newIndex = (currentIndex + 1) % items.length;
        showSlide(newIndex);
    }

    // 重置自动播放
    function resetAutoplay() {
        console.log('重置自动播放');
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
        startAutoplay();
    }

    // 开始自动播放
    function startAutoplay() {
        console.log('开始自动播放');
        // 确保之前的定时器被清除
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
        autoplayInterval = setInterval(() => {
            console.log('自动播放：下一张');
            showNextSlide();
        }, 3000); // 调整为3秒
    }

    // 初始化自动播放
    startAutoplay();

    // 鼠标悬停时暂停自动播放
    carousel.addEventListener('mouseenter', () => {
        console.log('鼠标进入：暂停自动播放');
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    });

    // 鼠标离开时恢复自动播放
    carousel.addEventListener('mouseleave', () => {
        console.log('鼠标离开：恢复自动播放');
        startAutoplay();
    });

    // 添加错误处理
    window.addEventListener('error', (e) => {
        console.error('轮播图错误:', e);
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    });

    // 检查图片加载状态
    items.forEach((img, index) => {
        if (img.complete) {
            console.log(`图片 ${index + 1} 已加载`);
        } else {
            img.addEventListener('load', () => {
                console.log(`图片 ${index + 1} 加载完成`);
            });
            img.addEventListener('error', () => {
                console.error(`图片 ${index + 1} 加载失败`);
            });
        }
    });
}

// 初始化文章切换功能
function initializeArticles() {
    const articleTitles = document.querySelectorAll('.article-title');
    const articles = document.querySelectorAll('.article');
    
    if (articleTitles.length === 0 || articles.length === 0) {
        console.log('未找到文章元素');
        return;
    }
    
    console.log(`找到 ${articleTitles.length} 个文章标题和 ${articles.length} 篇文章内容`);
    
    // 确保链接可点击
    articles.forEach(article => {
        const links = article.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                console.log(`设置链接: ${link.getAttribute('href')}`);
            }
        });
    });
    
    // 为每个文章标题添加点击事件
    articleTitles.forEach(title => {
        title.addEventListener('click', () => {
            const articleId = title.getAttribute('data-article');
            console.log(`点击文章标题: ${title.textContent}, ID: ${articleId}`);
            
            if (!articleId) {
                console.error('文章标题缺少data-article属性');
                return;
            }
            
            // 移除所有活动状态
            articleTitles.forEach(t => t.classList.remove('active'));
            articles.forEach(a => a.classList.remove('active'));
            
            // 设置当前选中的文章为活动状态
            title.classList.add('active');
            const activeArticle = document.getElementById(articleId);
            
            if (activeArticle) {
                activeArticle.classList.add('active');

                // 每次切换文章都滚动到顶部
                const articleContent = document.querySelector('.article-content');
                if (articleContent) {
                    articleContent.scrollTop = 0;
                }
            } else {
                console.error(`未找到ID为 ${articleId} 的文章内容`);
            }
        });
    });
    
    // 确保初始状态下第一篇文章是活动的
    if (articleTitles[0] && articles[0]) {
        articleTitles[0].classList.add('active');
        articles[0].classList.add('active');
    }
    
    console.log('文章切换功能初始化完成');
}

// ============ TTS 工具 ============
const TTS_API_BASE = 'https://token-plan-cn.xiaomimimo.com/v1';
const TTS_API_URL = TTS_API_BASE + '/chat/completions';
const DEFAULT_TTS_KEY = 'tp-c9t8mf6b2ejcorj83dokpcwnbkjp3wmt0w5qdl4o44hlnabi';

// API Key 管理：优先用后台设置的 key，否则用内置默认 key
function getApiKey() {
    return localStorage.getItem('anki_tts_api_key') || DEFAULT_TTS_KEY;
}

// 初始化 TTS 工具
function initTTS() {
    // Tab 切换
    document.querySelectorAll('.tts-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tts-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tts-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('panel-' + tab.dataset.model).classList.add('active');
        });
    });

    // 音色选择
    document.querySelectorAll('.voice-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.voice-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
        });
    });

    // 文件上传
    const audioFile = document.getElementById('audio-file');
    const uploadArea = document.getElementById('upload-area');
    const audioPreview = document.getElementById('audio-preview');
    const audioPlayer = document.getElementById('audio-player');
    const audioName = document.getElementById('audio-name');

    audioFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            audioPlayer.src = url;
            audioName.textContent = file.name;
            audioPreview.style.display = 'flex';
            uploadArea.style.display = 'none';
        }
    });

    // 拖拽上传
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--accent-primary)';
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = '';
    });

    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('audio/')) {
            audioFile.files = e.dataTransfer.files;
            audioFile.dispatchEvent(new Event('change'));
        }
    });
}

// 文件转 Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// 生成 TTS
async function generateTTS(mode) {
    const apiKey = getApiKey();
    if (!apiKey) {
        alert('请先填写并保存 API Key');
        return;
    }

    const loadingEl = document.getElementById('tts-loading');
    const resultEl = document.getElementById('tts-result');
    const audioEl = document.getElementById('tts-audio');
    const btn = document.getElementById('btn-' + mode);

    loadingEl.style.display = 'flex';
    resultEl.style.display = 'none';
    btn.disabled = true;

    try {
        let body;

        if (mode === 'preset') {
            const voice = document.querySelector('.voice-chip.active')?.dataset.voice || 'Calm_Woman';
            const text = document.getElementById('tts-text-preset').value.trim();
            if (!text) throw new Error('请输入要转换的文本');

            body = {
                model: 'mimo-v2.5-tts',
                messages: [
                    { role: 'user', content: '' },
                    { role: 'assistant', content: text }
                ],
                audio: { format: 'wav', voice: voice }
            };
        } else if (mode === 'design') {
            const desc = document.getElementById('voice-desc').value.trim();
            const text = document.getElementById('tts-text-design').value.trim();
            if (!desc) throw new Error('请描述你想要的声音');
            if (!text) throw new Error('请输入测试文本');

            body = {
                model: 'mimo-v2.5-tts-voicedesign',
                messages: [
                    { role: 'user', content: desc },
                    { role: 'assistant', content: text }
                ],
                audio: { format: 'wav' }
            };
        } else if (mode === 'clone') {
            const fileInput = document.getElementById('audio-file');
            const file = fileInput.files[0];
            if (!file) throw new Error('请上传参考音频文件');

            const text = document.getElementById('tts-text-clone').value.trim();
            if (!text) throw new Error('请输入要转换的文本');

            const base64 = await fileToBase64(file);
            const ext = file.name.split('.').pop().toLowerCase();
            const mimeMap = { wav: 'audio/wav', mp3: 'audio/mpeg', m4a: 'audio/mp4' };
            const mimeType = mimeMap[ext] || 'audio/wav';
            const dataUrl = `data:${mimeType};base64,${base64}`;

            body = {
                model: 'mimo-v2.5-tts-voiceclone',
                messages: [
                    { role: 'user', content: '' },
                    { role: 'assistant', content: text }
                ],
                audio: { format: 'wav', voice: dataUrl }
            };
        }

        const resp = await fetch(TTS_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey
            },
            body: JSON.stringify(body)
        });

        if (!resp.ok) {
            const errData = await resp.json().catch(() => null);
            throw new Error(errData?.error?.message || `请求失败: HTTP ${resp.status}`);
        }

        const data = await resp.json();
        const audioBase64 = data.choices?.[0]?.message?.audio?.data;
        if (!audioBase64) throw new Error('未收到音频数据');

        const audioBlob = base64ToBlob(audioBase64, 'audio/wav');
        const audioUrl = URL.createObjectURL(audioBlob);

        audioEl.src = audioUrl;
        resultEl.style.display = 'block';

        // 存储下载用
        window._ttsBlob = audioBlob;

    } catch (err) {
        alert('生成失败：' + err.message);
    } finally {
        loadingEl.style.display = 'none';
        btn.disabled = false;
    }
}

// Base64 转 Blob
function base64ToBlob(base64, mimeType) {
    const byteCharacters = atob(base64);
    const byteArray = new Uint8Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteArray[i] = byteCharacters.charCodeAt(i);
    }
    return new Blob([byteArray], { type: mimeType });
}

// 下载音频
function downloadAudio() {
    if (!window._ttsBlob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(window._ttsBlob);
    a.download = 'tts_output_' + Date.now() + '.wav';
    a.click();
}

// 页面加载时初始化 TTS
document.addEventListener('DOMContentLoaded', initTTS);

// 工具导航滚动
document.querySelectorAll('.tool-nav-item[data-tool]').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById('tool-' + item.dataset.tool);
        if (target) {
            const sticky = document.querySelector('.vibecoding-sticky');
            const offset = sticky ? sticky.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        document.querySelectorAll('.tool-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
}); 