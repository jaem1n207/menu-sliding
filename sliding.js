const horizontalBar = document.getElementById('horizontal-underline');
const horizontalMenus = document.querySelectorAll('nav:first-of-type ul li');
const verticalBar = document.getElementById('vertical-underline');
const verticalMenus = document.querySelectorAll('nav:nth-of-type(2) ul li');

function showIndicatorToBottom(e, type) {
  const barType = type === 'vertical' ? verticalBar : horizontalBar;

  const leftPos = e.offsetLeft + 'px';
  const width = e.offsetWidth + 'px';
  const topPos = e.offsetTop + e.offsetHeight + 'px';
  barType.style.cssText = `left: ${leftPos}; width:${width}; top: ${topPos};`;
}

horizontalMenus.forEach((menu) =>
  menu.addEventListener('click', (e) => showIndicatorToBottom(e.currentTarget, 'horizontal'))
);
verticalMenus.forEach((menu) =>
  menu.addEventListener('click', (e) => showIndicatorToBottom(e.currentTarget, 'vertical'))
);
