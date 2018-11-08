import './css/style.css'
import vueIcon from './img/logo.png'
import printMe from './print'

let div = document.createElement('div')
let img = document.createElement('img')
let divHtml = '改变'
div.classList.add('red')
img.src = vueIcon
div.append(divHtml)
div.onclick = printMe
document.body.append(div)
document.body.append(img)
