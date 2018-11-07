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
