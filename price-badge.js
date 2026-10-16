/* price-badge.js — reads ?price= from URL and shows a floating badge */
(function () {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('price');
    if (!raw) return;
    const price = parseFloat(raw.replace(/[^0-9.]/g, ''));
    if (!price || price <= 0) return;

    const formatted = '₹' + price.toLocaleString('en-IN', { maximumFractionDigits: 0 });

    const badge = document.createElement('div');
    badge.textContent = '💰 Amount to Pay: ' + formatted;
    badge.setAttribute('aria-label', 'Amount to pay: ' + formatted);
    badge.style.cssText = [
      'position:fixed',
      'top:14px',
      'left:50%',
      'transform:translateX(-50%)',
      'background:linear-gradient(135deg,#2ecc71,#27ae60)',
      'color:#fff',
      'padding:12px 24px',
      'border-radius:50px',
      'font-size:16px',
      'font-weight:800',
      'font-family:inherit',
      'box-shadow:0 8px 24px rgba(46,204,113,0.45)',
      'z-index:99999',
      'pointer-events:none',
      'letter-spacing:0.3px',
      'animation:priceBadgeIn 0.4s ease'
    ].join(';');

    const style = document.createElement('style');
    style.textContent = '@keyframes priceBadgeIn{from{opacity:0;transform:translateX(-50%) translateY(-20px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
    document.head.appendChild(style);
    document.body.appendChild(badge);
  } catch (e) {
    console.warn('price-badge error:', e);
  }
})();
