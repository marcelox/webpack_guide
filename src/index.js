// import _ from 'lodash';
import printMe from './print.js';
import './styles.css';
import { cube } from './math.js';

function component() {
  // let element = document.createElement('div');
  // var btn = document.createElement('button');
    var element = document.createElement('pre');

  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // btn.innerHTML = 'Click me and check the console';
  // btn.onclick = printMe;

  // element.appendChild(btn);

    element.innerHTML = [
        'Hello webpack again',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
  return element;
}

document.body.appendChild(component());

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }