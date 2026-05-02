
            

let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark') {
        document.body.style.backgroundColor = 'black';
        document.querySelector('.page').style.backgroundColor = 'black';
        document.querySelector('.page').style.color = 'white';

        document.querySelector('h2').style.color = 'lightblue';
        document.querySelector('h2').style.borderBottom = '1px solid lightblue';

        logo.src = 'byui-logo-dark.png';
    } else {
        document.body.style.backgroundColor = 'white';
        document.querySelector('.page').style.backgroundColor = 'white';
        document.querySelector('.page').style.color = 'black';

        document.querySelector('h2').style.color = '#0066cc';
        document.querySelector('h2').style.borderBottom = '1px solid #0066cc';

        logo.src = 'byui-logo-blue.png';
    }
}
