document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.image-showcase').forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('active');
    });
  });
});
