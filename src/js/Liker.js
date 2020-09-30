export default class Liker {
  constructor() {
    this.like = document.querySelector('.like');

    this.showHeart = this.showHeart.bind(this);
  }

  start() {
    this.like.addEventListener('mousedown', this.showHeart);
  }

  showHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '&#10084';
    heart.classList.add('heart');
    this.like.appendChild(heart);
    const randomClass = Math.ceil(Math.random() * 4);
    let animationClass = null;
    switch (randomClass) {
      case 1:
        animationClass = 'animation-heart1';
        break;
      case 2:
        animationClass = 'animation-heart2';
        break;
      case 3:
        animationClass = 'animation-heart3';
        break;
      case 4:
        animationClass = 'animation-heart4';
        break;
      default:
        animationClass = 'animation-heart1';
        break;
    }
    heart.classList.add(animationClass);

    heart.addEventListener('animationend', () => {
      heart.remove();
    });
  }
}
