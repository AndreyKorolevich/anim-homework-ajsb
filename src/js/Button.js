export default class Button {
  constructor() {
    this.button = document.querySelector('.collapse');
    this.hidden = document.querySelector('.hidden');
  }

  hiddenText() {
    this.button.addEventListener('click', () => {
      this.hidden.classList.toggle('animation-hidden');
      this.hidden.classList.toggle('animation-show');
    });
  }
}
