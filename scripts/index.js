const heroBnr = document.querySelector('.hero');
const roomSlide = document.querySelector('.room_swiper');
const offerSlide = document.querySelector('.offer_swiper');
const diningMain = document.querySelectorAll('.dining_main_tap a');
const diningContents = document.querySelectorAll('.dining_contents #mainslide');
console.log(heroBnr,roomSlide,offerSlide,diningMain,diningContents);

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

const offerSwiper = new Swiper(offerSlide,{
    loop:true,
    slidesPerView:3,
    slidesPerGroup:3,
    pagination:{
        el:'.offer_swiper .progressbar',
        type:'progressbar',
    },
});

//1.라운지,베이커리숨기기 
diningContents[1].style.display ='none';
diningContents[2].style.display ='none';
// 2. 탭제목 클릭시 변경 
diningMain[0].addEventListener('click',function(e){
    e.preventDefault();
    diningMain[0].classList.add('active');
    diningMain[1].classList.remove('active');
    diningMain[2].classList.remove('active');
    diningContents[0].style.display ='block';
    diningContents[1].style.display ='none';
    diningContents[2].style.display ='none';
})
diningMain[1].addEventListener('click',function(e){
    e.preventDefault();
    diningMain[1].classList.add('active');
    diningMain[0].classList.remove('active');
    diningMain[2].classList.remove('active');
    diningContents[1].style.display ='block';
    diningContents[0].style.display ='none';
    diningContents[2].style.display ='none';
})
diningMain[2].addEventListener('click',function(e){
    e.preventDefault();
    diningMain[2].classList.add('active');
    diningMain[0].classList.remove('active');
    diningMain[1].classList.remove('active');
    diningContents[2].style.display ='block';
    diningContents[0].style.display ='none';
    diningContents[1].style.display ='none';
})