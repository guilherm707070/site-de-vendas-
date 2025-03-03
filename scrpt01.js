let preveButton =document.getElementById("prev");
let nexteButton =document.getElementById("next");
let conteiner = document.querySelector(".conteiner");
let item = document.querySelectorAll(".list .item");
let indicador = document.querySelector(".indicator");
let dots = indicador.querySelectorAll('ul li');
let list =conteiner.querySelector(".list")


let active =0 
let firstPosition =0
let lastPosition = item.length-1

preveButton.onclick = () =>{
   /*  list.style.setProperty("--calculetion", -1) */
    active = active - 1 <firstPosition? lastPosition :active -1
    setEslaider()
    item [active].classList.add('acttive')

    
}

nexteButton.onclick = () =>{
   
    /* list.style.setProperty("--calculetion", 1) */
    active = active + 1 >lastPosition?0:active+1
    setEslaider()
    item [active].classList.add('acttive')




}

function setEslaider(){
    let itemOld = conteiner.querySelector('.list .item.acttive')
    itemOld.classList.remove('acttive')

    
    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.number').innerHTML="0" + (active+1)
};


function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
  }