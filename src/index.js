<<<<<<< HEAD
import './css/style.css'
import vueIcon from './img/logo.png'
import printMe from './print'

let div = document.createElement('div')
let divHtml = '你好'
div.append(divHtml)
div.classList.add('red')
div.onclick = printMe
document.body.append(div)

// 新增一个img标签 然后 将 图片引入
let img = document.createElement('img')
img.src = vueIcon
document.body.append(img)
=======
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
>>>>>>> a05ecc8865471fbb13c22df94436ad190a7be1bd
