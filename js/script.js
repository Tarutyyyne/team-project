const hamburgerBtn = document.getElementById('hamburger-btn')
const navMenu = document.getElementById('nav-menu')

hamburgerBtn.addEventListener('click', function() {
    // .is-activeクラスをボタンとメニューに付与・削除（トグル）
    hamburgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('is-active')

    // aria-expanded属性の値を現在の状態に応じて更新
    // getAttributeで現在の値を取得し、それが'true'であったかどうかの真偽値を得る
    const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';

    // 現在の状態の反対の値を設定する
    hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
});