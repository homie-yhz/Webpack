import './css/style.css'
import vueIcon from './img/logo.png'
import { printMe } from './print'

let div = document.createElement('div')
let img = document.createElement('img')
let divHtml = '白扯 '
div.classList.add('red')
img.src = vueIcon
div.append(divHtml)
document.body.append(div)
document.body.append(img)
console.log(printMe())
