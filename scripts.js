// ハンバーガーメニューのトグル
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// ナビゲーションリンクをクリックしたときにハンバーガーメニューを閉じる
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// スムーズスクロール（JavaScriptによる調整）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            // ヘッダーの高さを動的に取得
            const headerHeight = document.querySelector('.header').offsetHeight;

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// アクティブなナビゲーションリンクをハイライト
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90; // ヘッダーの高さを少し多めに設定
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLi.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
            a.classList.add('active');
        }
    });
});
