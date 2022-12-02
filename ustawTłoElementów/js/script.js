
const  setBackground = () =>{
    let p1 = document.querySelector('.first')
    let p2 = document.querySelector('.last')
    console.log(p1)
    console.log(p2)
    p1.style.backgroundColor = 'red'
    p2.style.backgroundColor = 'yellow'
}    
let btnBackground = document.getElementById('set-background');


btnBackground.addEventListener('click', setBackground);

