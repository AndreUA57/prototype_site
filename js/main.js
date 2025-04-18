function toggleLightbox(lightboxId) {
  const lightbox = document.getElementById(lightboxId);
  const overlay = document.getElementById('lightbox-overlay');

  if (lightbox.classList.contains('show') || overlay.classList.contains('show')) {
    lightbox.classList.remove('show');
    overlay.classList.remove('show');
  } else {
    lightbox.classList.add('show');
    overlay.classList.add('show');
  }

  console.log('toggleLightbox called for:', lightboxId);
}

$(document).ready(function() {
  document.getElementById('open-register-lightbox').addEventListener('click', function() {
    toggleLightbox('lightbox-register');
  });

  document.getElementById('open-login-lightbox').addEventListener('click', function() {
    toggleLightbox('lightbox-login');
  });

  document.getElementById('close-register-lightbox').addEventListener('click', function() {
    toggleLightbox('lightbox-register');
  });

  document.getElementById('close-login-lightbox').addEventListener('click', function() {
    toggleLightbox('lightbox-login');
  });

  // Виклик плагіну валідації для форми реєстрації
  $('#register-form').validate({
    rules: {
      'register-username': {
        required: true,
        minlength: 3
      },
      'register-email': {
        required: true,
        email: true
      },
      'register-password': {
        required: true,
        minlength: 8
      },
      'confirm-password': {
        required: true,
        equalTo: "#register-password"
      }
    },
    messages: {
      'register-username': {
        required: "Це поле обов'язкове для заповнення",
        minlength: "Мінімум 3 символи для імені користувача"
      },
      'register-email': {
        required: "Це поле обов'язкове для заповнення",
        email: "Введіть правильний email"
      },
      'register-password': {
        required: "Це поле обов'язкове для заповнення",
        minlength: "Мінімум 8 символів для пароля"
      },
      'confirm-password': {
        required: "Це поле обов'язкове для заповнення",
        equalTo: "Паролі не співпадають"
      }
    }
  });

  // Логіка відображення та закриття світлових вікон
  $('#open-register-lightbox').click(function() {
    $('#lightbox-register').fadeIn();
    $('#lightbox-overlay').fadeIn();
  });

  $('#open-login-lightbox').click(function() {
    $('#lightbox-login').fadeIn();
    $('#lightbox-overlay').fadeIn();
  });

  $('#close-register-lightbox, #close-login-lightbox').click(function() {
    $('#lightbox-register, #lightbox-login').fadeOut();
    $('#lightbox-overlay').fadeOut();
  });
});
