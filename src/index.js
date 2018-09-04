import _ from 'lodash';
import './style.css';
import icon from './webpack.svg';

function component() {
  var element = document.createElement('div');
  var webpackImage = new Image();

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  webpackImage.src = icon;
  element.appendChild(webpackImage);
  
  return element;
}

document.body.appendChild(component());
