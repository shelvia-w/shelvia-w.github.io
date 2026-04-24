/* Shared list-rendering helper used by index.html, research.html, projects.html */
function renderItemList(items, containerId, type, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const arrowTpl     = document.getElementById('arrow-svg').content;
  const delayClasses = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'];
  const visible      = limit ? items.slice(0, limit) : items;
  const base         = window.SHELL_BASE || './';
  const linkLabel    = type === 'research' ? 'View research' : 'View project';

  visible.forEach((item, i) => {
    const a = document.createElement('a');
    a.href      = `${base}detail.html?id=${item.id}`;
    a.className = `list-item ${type}-item reveal ${delayClasses[i] || ''}`;
    a.setAttribute('role', 'listitem');

    const thumbHtml = item.image
      ? `<img src="${base}${item.image}" alt="" loading="lazy" />`
      : `<div class="item-thumb-fallback"></div>`;

    a.innerHTML = `
      <div class="list-item-left">
        <div class="item-thumb">${thumbHtml}</div>
        <div class="item-content">
          <h3 class="item-title">${item.title}</h3>
          <p class="item-desc">${item.desc}</p>
        </div>
      </div>
      <span class="item-link">${linkLabel}</span>`;

    a.querySelector('.item-link').appendChild(arrowTpl.cloneNode(true));
    container.appendChild(a);
  });
}
