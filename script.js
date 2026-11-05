// Register button: this is a training site, so nothing is sent anywhere.
// We just show a friendly message.
const registerButton = document.getElementById('register-button');
const registerMessage = document.getElementById('register-message');

if (registerButton && registerMessage) {
  registerButton.addEventListener('click', () => {
    registerMessage.textContent =
      'Thanks for your interest! This is a training site, so no registration is taken.';
  });
}
