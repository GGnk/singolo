const MENU=document.getElementById('menu');
const TAGS=document.getElementById('tags');
const PORTFOLIO=document.getElementById('portfolio');
const PORT_IMG = document.getElementById('portfolio-img');
const FORM = document.getElementById('form');
const MODAL = document.getElementById('modal');

function showMobileMenu() {
    const mobileMenuEnter = document.querySelector('.enter-mobile-menu');
    const mobileMenuExit = document.querySelector('.exit-mobile-menu');
    const mobileMenuScreen = document.querySelector('.screen-mobile-menu');
    const mobileMenuNavigation = document.getElementById('mobile-navigation');
    const mobileLogo = document.getElementById('mini-logo');
  
    mobileMenuEnter.addEventListener('click', () => {
      document.querySelector('.screen-mobile-menu').classList.remove('hide-mm');
      document.querySelector('.window-mobile-menu').classList.remove('throw-mm');
      document.querySelector('.enter-mobile-menu').classList.add('icon-rotate');
      document.querySelector('.mobile-menu').classList.add('icon-rotate');
    });
  
    mobileMenuExit.addEventListener('click', () => {
      document.querySelector('.screen-mobile-menu').classList.add('hide-mm');
      document.querySelector('.window-mobile-menu').classList.add('throw-mm');
      document.querySelector('.mobile-menu').classList.remove('icon-rotate');
      document.querySelector('.enter-mobile-menu').classList.remove('icon-rotate');
    });
  
    mobileMenuNavigation.addEventListener('click', () => {
      if (event.target.tagName == 'A') {
        document.querySelector('.screen-mobile-menu').classList.add('hide-mm');
        document.querySelector('.window-mobile-menu').classList.add('throw-mm');
        document.querySelector('.mobile-menu').classList.remove('icon-rotate');
        document.querySelector('.enter-mobile-menu').classList.remove('icon-rotate');
      }
    });
  
    mobileMenuScreen.addEventListener('click', () => {
      document.querySelector('.screen-mobile-menu').classList.add('hide-mm');
      document.querySelector('.window-mobile-menu').classList.add('throw-mm');
      document.querySelector('.mobile-menu').classList.remove('icon-rotate');
      document.querySelector('.enter-mobile-menu').classList.remove('icon-rotate');
    });
  
    mobileLogo.addEventListener('click', () => {
      if (event.target.tagName == 'A') {
        document.querySelector('.screen-mobile-menu').classList.add('hide-mm');
        document.querySelector('.window-mobile-menu').classList.add('throw-mm');
        document.querySelector('.mobile-menu').classList.remove('icon-rotate');
        document.querySelector('.enter-mobile-menu').classList.remove('icon-rotate');
      }
    });
  }
  
//Menu
MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('navigation_active'));
    event.target.classList.add('navigation_active');
});

//Blackbox for phones
let blackbox1=document.querySelector('#blackbox1');
document.querySelector('#Phone1').onclick = function() {
    if(blackbox1.style.display==='none'||blackbox1.style.display===''){
        blackbox1.style.display='block';
    }
    else{
        blackbox1.style.display='none';
    }
}
blackbox1.onclick = function() {
    blackbox1.style.display='none';
}

let blackbox2=document.querySelector('#blackbox2');
document.querySelector('#Phone2').onclick = function() {
    if(blackbox2.style.display==='none'||blackbox2.style.display===''){
        blackbox2.style.display='block';
    }
    else{
        blackbox2.style.display='none';
    }
}
blackbox2.onclick = function() {
    blackbox2.style.display='none';
}

//Banner
document.querySelector('.banner__next-arrow').onclick = function(){
    let banner_item=document.querySelector('.banner__items');
    if(banner_item.children[0].style.left==='-100%'||banner_item.children[0].style.left===''){
        let counter = -100;
        let interval = setInterval(() => {
            counter-=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="-200%"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#648BF0';
        document.querySelector('.banner').style.borderBottom='7px solid #648BF0';
    }
    else if(banner_item.children[0].style.left==='-200%'){
        let counter = 0;
        let interval = setInterval(() => {
            counter-=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="-100%"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#F06C64';
        document.querySelector('.banner').style.borderBottom='7px solid #EA676B';
    }
    else if(banner_item.children[0].style.left==='0px'){
        let counter = 0;
        let interval = setInterval(() => {
            counter-=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="-100%"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#648BF0';
        document.querySelector('.banner').style.borderBottom='7px solid #648BF0';
    }
}

document.querySelector('.banner__prev-arrow').onclick = function(){
    let banner_item=document.querySelector('.banner__items');
    if(banner_item.children[0].style.left==='-100%'||banner_item.children[0].style.left===''){
        let counter = -100;
        let interval = setInterval(() => {
            counter+=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="0"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#648BF0';
        document.querySelector('.banner').style.borderBottom='7px solid #648BF0';
    }
    else if(banner_item.children[0].style.left==='-200%'){
        let counter = -200;
        let interval = setInterval(() => {
            counter+=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="-100%"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#F06C64';
        document.querySelector('.banner').style.borderBottom='7px solid #EA676B';
    }
    else if(banner_item.children[0].style.left==='0'){
        let counter = -200;
        let interval = setInterval(() => {
            counter+=1;
            banner_item.children[0].style.left=`${counter}%`;
            banner_item.children[1].style.left=`${counter}%`;
            banner_item.children[2].style.left=`${counter}%`;
            if(banner_item.children[0].style.left==="-100%"){
                clearInterval(interval);
                return;
            }
        }, 1);
        document.querySelector('.banner').style.backgroundColor='#F06C64';
        document.querySelector('.banner').style.borderBottom='7px solid #F06C64';
    }
}


//Tags on portfolio
TAGS.addEventListener('click', (event)=>{
    if(event.target.tagName==='BUTTON'){
        TAGS.querySelectorAll('button').forEach(el => el.classList.remove('tag_selected'));
        event.target.classList.add('tag_selected');

        let aa = Array.from(PORTFOLIO.querySelectorAll('article'));
        let cc = aa.splice(11,1);
        aa.forEach(el =>{
            document.querySelector('#portfolio-img').append(el);
        });
    }
});

//Images in portfolio
PORT_IMG.addEventListener('click', (event)=>{
    if(event.target.style.outline==='rgb(240, 108, 100) solid 5px'){
        event.target.style.outline='';
    }
    else if(event.target.classList.contains('portfolio__image')){
        PORT_IMG.querySelectorAll('img').forEach(el => el.style.outline='');
        event.target.style.outline = '5px solid #F06C64';
        event.target.style.outlineOffset = '-5px';
    }
});


//Modal and form
FORM.addEventListener('submit',(event)=>{
    event.preventDefault();
})

function change(){
        if (!FORM.querySelector("p:nth-child(1) > input").value == '' && /[A-z]@[A-z]/.test(FORM.querySelector("p:nth-child(2) > input").value)) {
            MODAL.classList.remove('modal_hidden');
            if (FORM.querySelector("p:nth-child(3) > input").value == '') {
                MODAL.querySelector('p:nth-child(3)').innerHTML = 'Без темы';
            } else {
                MODAL.querySelector('p:nth-child(3)').innerHTML = `Тема: ${FORM.querySelector("p:nth-child(3) > input").value}`;
            }
            if (FORM.querySelector("textarea").value == '') {
                MODAL.querySelector('p:nth-child(4)').innerHTML = 'Без описания';
            } else {
                MODAL.querySelector('p:nth-child(4)').innerHTML = `Описание: ${FORM.querySelector("textarea").value}`;
            }

        }
    };


MODAL.addEventListener('click', (event) =>{
    if(event.target.classList.contains('modal__button')){
        MODAL.classList.add('modal_hidden');
        FORM.querySelector("p:nth-child(1) > input").value='';
        FORM.querySelector("p:nth-child(2) > input").value='';
        FORM.querySelector("p:nth-child(3) > input").value='';
        FORM.querySelector("textarea").value='';
    }
});

showMobileMenu();