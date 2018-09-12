import _ from 'lodash';
import './style.css';
import Unsplash from './stefan-cosma-521680-unsplash.jpg';
function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myImg = new Image();
  myImg.src = Unsplash;

  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
