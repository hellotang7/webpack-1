import './x.scss'
import './y.less'
import './z.styl'
import png from './assets/1.png'
console.log('hi');

const div = document.getElementById('app')

div.innerHTML = `
<img src="${png}">
`
const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
      const fn = module.default
      fn()
    },()=>{})
}

div.appendChild(button)