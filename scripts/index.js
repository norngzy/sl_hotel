/**
    * GitHub Repository Phishing Alert Appeal & Project Verification
    이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
    *PROJECT: Portfolio Prototype
    * WARNING: This script does not process real transactions or user credentials.
    * All functions are for demonstration purposes only.
*/

const heroBnr = document.querySelector('.hero');
const roomSlide = document.querySelector('.room_swiper');
const offerSlide = document.querySelector('.offer_swiper');
const tabMain = document.querySelectorAll('.dining_main_tap a');
const restTab = document.querySelectorAll('.restaurant .dining_sub_tap a');
const lounTab = document.querySelectorAll('.loungebar .dining_sub_tap a');
const diningC = document.querySelectorAll('.contents_bg');
console.log(heroBnr,roomSlide,offerSlide,tabMain,restTab,lounTab,diningC);

const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    //autoplay:{delay:5000,},
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


//레스토랑
diningC[1].style.display = 'none'; /* ly */
diningC[2].style.display = 'none'; /* ps */
diningC[3].style.display = 'none'; /* ari */
diningC[4].style.display = 'none'; /* conti */
//라운지
diningC[5].style.display = 'none'; /* library */
diningC[6].style.display = 'none'; /* distillers */
diningC[7].style.display = 'none'; /* exe_lounge */
//베이커리
diningC[8].style.display = 'none';

//라운지서브탭메뉴
lounTab[0].style.display ='none';
lounTab[1].style.display ='none';
lounTab[2].style.display ='none';

tabMain[0].addEventListener('click', function(e) { //레스토랑
    e.preventDefault();
    // 1. diningC 제어: 0번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 0) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. restTab 제어: 모두 inline
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'inline';
    }
    // 3. lounTab 제어: 모두 none
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 4. 활성화 클래스 제어
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
tabMain[1].addEventListener('click', function(e) { //라운지&바
    e.preventDefault();
    // 1. diningC 제어: 5번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 5) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 제어: 모두 inline
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'inline';
    }
    // 3. restTab 제어: 모두 none
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'none';
    }
    // 4. 활성화 클래스 제어: 1번째만 active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 1) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
tabMain[2].addEventListener('click', function(e) { //베이커리
    e.preventDefault();
    // 1. diningC 제어: 8번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 8) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. restTab 모두 숨기기
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'none';
    }
    // 3. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 4. 활성화 클래스 제어: 2번째만 active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 2) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});

//레스토랑서브탭
restTab[0].addEventListener('click', function(e) { //더파크뷰
    e.preventDefault();
    // 1. diningC 제어: 0번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 0) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 3. restTab 활성화 클래스 제어: 0번째만 active
    for (let i = 0; i < restTab.length; i++) {
        if (i === 0) {
            restTab[i].classList.add('active');
        } else {
            restTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 0번째(레스토랑) active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
restTab[1].addEventListener('click', function(e) { //라연
    e.preventDefault();
    // 1. diningC 제어: 1번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 1) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 3. restTab 활성화 클래스 제어: 1번째만 active
    for (let i = 0; i < restTab.length; i++) {
        if (i === 1) {
            restTab[i].classList.add('active');
        } else {
            restTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 레스토랑(0번) active 유지
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
restTab[2].addEventListener('click', function(e) { //팔선
    e.preventDefault();
    // 1. diningC 제어: 2번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 2) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 3. restTab 활성화 클래스 제어: 2번째만 active
    for (let i = 0; i < restTab.length; i++) {
        if (i === 2) {
            restTab[i].classList.add('active');
        } else {
            restTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 레스토랑(0번) active 유지
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
restTab[3].addEventListener('click', function(e) { //아리아께
    e.preventDefault();
    // 1. diningC 제어: 3번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 3) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 3. restTab 활성화 클래스 제어: 3번째만 active
    for (let i = 0; i < restTab.length; i++) {
        if (i === 3) {
            restTab[i].classList.add('active');
        } else {
            restTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 레스토랑(0번) active 유지
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
restTab[4].addEventListener('click', function(e) { //콘티
    e.preventDefault();
    // 1. diningC 제어: 4번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 4) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. lounTab 모두 숨기기
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'none';
    }
    // 3. restTab 활성화 클래스 제어: 4번째만 active
    for (let i = 0; i < restTab.length; i++) {
        if (i === 4) {
            restTab[i].classList.add('active');
        } else {
            restTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 레스토랑(0번) active 유지
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 0) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});

//라운지 서브탭
lounTab[0].addEventListener('click', function(e) { //라이브러리
    e.preventDefault();
    // 1. diningC 제어: 5번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 5) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. 탭 메뉴 노출 제어: lounTab은 보이고, restTab은 숨김
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'inline';
    }
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'none';
    }
    // 3. lounTab 활성화 클래스 제어: 0번째만 active
    for (let i = 0; i < lounTab.length; i++) {
        if (i === 0) {
            lounTab[i].classList.add('active');
        } else {
            lounTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 라운지(1번) active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 1) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
lounTab[1].addEventListener('click', function(e) { //디스틸러스
    e.preventDefault();
    // 1. diningC 제어: 6번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 6) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. 탭 메뉴 노출 제어
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'inline';
    }
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'none';
    }
    // 3. lounTab 활성화 클래스 제어: 1번째만 active
    for (let i = 0; i < lounTab.length; i++) {
        if (i === 1) {
            lounTab[i].classList.add('active');
        } else {
            lounTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 라운지(1번) active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 1) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});
lounTab[2].addEventListener('click', function(e) { //이그제큐티브
    e.preventDefault();
    // 1. diningC 제어: 7번째만 flex, 나머지는 none
    for (let i = 0; i < diningC.length; i++) {
        if (i === 7) {
            diningC[i].style.display = 'flex';
        } else {
            diningC[i].style.display = 'none';
        }
    }
    // 2. 탭 메뉴 노출 제어
    for (let i = 0; i < lounTab.length; i++) {
        lounTab[i].style.display = 'inline';
    }
    for (let i = 0; i < restTab.length; i++) {
        restTab[i].style.display = 'none';
    }
    // 3. lounTab 활성화 클래스 제어: 2번째만 active
    for (let i = 0; i < lounTab.length; i++) {
        if (i === 2) {
            lounTab[i].classList.add('active');
        } else {
            lounTab[i].classList.remove('active');
        }
    }
    // 4. tabMain 활성화 클래스 제어: 라운지(1번) active
    for (let i = 0; i < tabMain.length; i++) {
        if (i === 1) {
            tabMain[i].classList.add('active');
        } else {
            tabMain[i].classList.remove('active');
        }
    }
});