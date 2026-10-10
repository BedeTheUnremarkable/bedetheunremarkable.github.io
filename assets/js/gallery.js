(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.gallery a'));
  if (!links.length) { return; }

  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Photo viewer');
  box.hidden = true;
  box.innerHTML =
    '<button type="button" class="lb-close" aria-label="Close">&times;</button>' +
    '<button type="button" class="lb-prev" aria-label="Previous photo">&#8249;</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button type="button" class="lb-next" aria-label="Next photo">&#8250;</button>';
  document.body.appendChild(box);

  var img = box.querySelector('img');
  var cap = box.querySelector('figcaption');
  var closeBtn = box.querySelector('.lb-close');
  var current = 0;
  var opener = null;

  function show(i) {
    current = (i + links.length) % links.length;
    var a = links[current];
    img.src = a.href;
    img.alt = a.querySelector('img').alt;
    cap.textContent = a.getAttribute('data-caption') || '';
    var next = links[(current + 1) % links.length];
    new Image().src = next.href;
  }

  function open(i, trigger) {
    opener = trigger;
    show(i);
    box.hidden = false;
    document.body.classList.add('lb-open');
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    img.removeAttribute('src');
    document.body.classList.remove('lb-open');
    if (opener) { opener.focus(); }
  }

  links.forEach(function (a, i) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      open(i, a);
    });
  });

  closeBtn.addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
  box.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
  box.addEventListener('click', function (e) { if (e.target === box) { close(); } });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) { return; }
    if (e.key === 'Escape') { close(); }
    else if (e.key === 'ArrowLeft') { show(current - 1); }
    else if (e.key === 'ArrowRight') { show(current + 1); }
  });

  var startX = null;
  box.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (startX === null) { return; }
    var dx = e.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) { show(current + (dx < 0 ? 1 : -1)); }
  }, { passive: true });
})();
