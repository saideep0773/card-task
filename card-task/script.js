document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    function collapseAllOptions() {
      document.querySelectorAll('.table-wrapper, .options').forEach(el => {
        el.style.maxHeight = '0px';
        el.style.overflow = 'hidden';
        el.style.transition = 'max-height 0.3s ease';
      });
    }

    // Remove highlighted class from all cards
    function removeAllHighlights() {
      cards.forEach(card => {
        card.classList.remove('highlighted');
      });
    }

    cards.forEach(card => {
      const radio = card.querySelector('input[type="radio"]');
      const options = card.querySelector('.table-wrapper') || card.querySelector('.options');


      if (card.classList.contains('highlighted') && options) {
        options.style.maxHeight = (options.scrollHeight + 24) + 'px';
        options.style.overflow = 'hidden';
        options.style.transition = 'max-height 0.3s ease';
      } else if (options) {
        options.style.maxHeight = '0px';
        options.style.overflow = 'hidden';
        options.style.transition = 'max-height 0.3s ease';
      }

      radio.addEventListener('change', function () {
        collapseAllOptions();
        removeAllHighlights();

        if (options) {
            options.style.maxHeight = (options.scrollHeight + 24) + 'px';
        }

        if (radio.checked) {
          card.classList.add('highlighted');
        }
      });
    });
  });

