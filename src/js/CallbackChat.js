export default class CallbackChat {
  constructor(container) {
    this.container = container;
    this.showChart = this.showChart.bind(this);
  }

  createLayout() {
    const button = document.createElement('div');
    button.classList.add('red-button');

    const box = document.createElement('div');
    const head = document.createElement('h3');
    const close = document.createElement('div');
    const textarea = document.createElement('textarea');
    const buttonSend = document.createElement('button');

    head.textContent = 'Text us';
    buttonSend.textContent = 'Send';
    close.innerHTML = '&#10006';

    box.classList.add('box');
    close.classList.add('close');
    textarea.classList.add('textarea');

    box.appendChild(close);
    box.appendChild(head);
    box.appendChild(textarea);
    box.appendChild(buttonSend);

    this.container.appendChild(button);
    this.container.appendChild(box);
    close.addEventListener('click', this.hiddenCard);
    button.addEventListener('click', this.showChart);
  }

  /* eslint-disable */
  showChart(event) {
    event.target.classList.add('hidden-button');
    document.querySelector('.box').classList.remove('box-hidden');
    document.querySelector('.box').classList.add('box-show');
  }

  hiddenCard() {
    document.querySelector('.box').classList.remove('box-show');
    document.querySelector('.box').classList.add('box-hidden');
    document.querySelector('.red-button').classList.remove('hidden-button');
  }
}
