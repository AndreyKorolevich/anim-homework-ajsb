import Button from './Button';
import CallbackChat from './CallbackChat';
import Liker from './Liker';

const secondTask = document.querySelector('.second');
const button = new Button();
const callbackChart = new CallbackChat(secondTask);
const liker = new Liker();
button.hiddenText();
callbackChart.createLayout();
liker.start();
