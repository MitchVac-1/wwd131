

document.getElementById('intro').style.backgroundColor ='#f2c556'

document.querySelector('em').style.backgroundColor = '#acbfcc'

document.querySelector('em').textContent = 'USS Voyager Starship'

let starship_imp = document.createElement('img')
starship_imp.setAttribute('src', 'https://bit.ly/3RfG4sY')
let img_div = document.querySelector('#starship')
img_div.appendChild = starship_imp

starship_imp.classList.add('rounded')
