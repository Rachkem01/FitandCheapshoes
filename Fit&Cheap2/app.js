const menwrap = document.querySelector('.menwrap')
const womenwrap = document.querySelector('.womenwrap')
const girlwrap = document.querySelector('.girlswrap')
const boywrap = document.querySelector('.boywrap')
const accountwrap = document.querySelector('.accountwrap')
const morewrap = document.querySelector('.morewrap')
const men = document.getElementById('men')
const women = document.getElementById('women')
const girls = document.getElementById('girls')
const boys = document.getElementById('boys')
const more = document.getElementById('more')
const drop = document.getElementById('drop')
const account = document.getElementById('account')
const imgdisplay = document.querySelector('.img_display')

men.addEventListener("mouseover", ()=>{
    menwrap.classList.toggle('active')
});
men.addEventListener("mouseout", ()=>{
    menwrap.classList.remove('active')
});

women.addEventListener("mouseover", ()=>{
    womenwrap.classList.toggle('active')
})
women.addEventListener("mouseout", ()=>{
    womenwrap.classList.remove('active')
});

girls.addEventListener("mouseover", ()=>{
    girlwrap.classList.toggle('active')
})
girls.addEventListener("mouseout", ()=>{
    girlwrap.classList.remove('active')
});
boys.addEventListener("mouseover", ()=>{
    boywrap.classList.toggle('active')
})
boys.addEventListener("mouseout", ()=>{
    boywrap.classList.remove('active')
});

more.addEventListener("mouseover", ()=>{
    morewrap.classList.toggle('active')
})
more.addEventListener("mouseout", ()=>{
    morewrap.classList.remove('active')
})
drop.addEventListener("click", ()=>{
    accountwrap.classList.toggle('active')
    
})
account.addEventListener("click", ()=>{
    menwrap.classList.remove('active')
})

