document
  .querySelector('#profileForm button')
  .addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.profile-top').style.backgroundImage = 'none';
    document.querySelector('.profile-top').style.backgroundColor = 'teal';
    document.querySelector('body').style.backgroundImage =
      'url(./images/bg-intro-desktop.png)';

    const name = document.querySelector('#nameInput').value;
    const age = document.querySelector('#ageInput').value;
    const city = document.querySelector('#cityInput').value;

    document.querySelector(
      '.profile .name'
    ).innerHTML = `${name} <span class="age">${age}</span>`;
    document.querySelector('.profile .city').textContent = city;

    document.querySelector('#nameInput').value = '';
    document.querySelector('#ageInput').value = '';
    document.querySelector('#cityInput').value = '';
  });
