const heroBnr = document.querySelector('.hero');
const roomSlide = document.querySelector('.room_swiper');
console.log(heroBnr,roomSlide);

const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    navigation:{
        prevEl:'.hero .prev',
        nextEl:'.hero .next',
    },
});

const roomSwiper = new Swiper(roomSlide,{
    loop:true,
    navigation:{
        prevEl:'.room_swiper .prev',
        nextEl:'.room_swiper .next',
    },
});