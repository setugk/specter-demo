import './style.css';

const modal = document.getElementById('demoModal');
const open = document.getElementById('openDemo');
const close = document.getElementById('modalClose');

open?.addEventListener('click', () => { modal.hidden = false; });
close?.addEventListener('click', () => { modal.hidden = true; });
modal?.addEventListener('click', (e) => { if (e.target === modal) modal.hidden = true; });
