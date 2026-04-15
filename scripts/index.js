const heroBnr = document.querySelector('.hero');
console.log(heroBnr);

const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    navigation:{
    prevEl:'.hero .prev',
    nextEl:'.hero .next',
    },
});