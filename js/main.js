// header active
const header = document.querySelector('.header');
window.addEventListener('scroll', function() {
    const btn = document.querySelector('.btn_top');
    function handleScroll() {
        const isScrolled = window.scrollY > 0;
        header.classList.toggle("sticky", isScrolled);
        btn.classList.toggle("visible", isScrolled);
    }
    handleScroll()
});
const hdNav = document.querySelector('header .main_nav');
const hamOpen = document.querySelector('.menu_open_btn');
const hamClose = document.querySelector('.menu_close_btn');
hamOpen.addEventListener('click', function(event) {
    event.preventDefault();
    hdNav.classList.add('active')
});
hamClose.addEventListener('click', function(event) {
    event.preventDefault();
    hdNav.classList.remove('active')
});

// scroll top button
const btnTop = document.querySelector('.btn_top')
btnTop.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// 이메일 유효성 검사 & 팝업 제어
function join_user(){
    event.preventDefault();
    const useremail = document.getElementById("useremail");
    const validTxt = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]+$/; //(알파벳,숫자)@(알파벳,숫자).(알파벳,숫자)

    if(validTxt.test(useremail.value) == false){
        alert("이메일 주소가 올바르지 않습니다.");
        useremail.focus();
        return;
    } else {
        // 이메일 주소를 올바르게 작성했을 때
        const body = document.body;
        const popCont = document.querySelector('.sec05 .pop_wr');
        const popBg = document.querySelector('.sec05 .pop_wr .pop_bg');
        const popBtn = document.querySelector('.sec05 .pop_wr .exit_btn');

        // 팝업을 열 때마다 이벤트 리스너 재설정
        function togglePopup() {
            body.classList.toggle('scrollLock');
            popCont.classList.toggle('active');

            // 팝업이 열릴 때만 이벤트 리스너를 설정
            if (popCont.classList.contains('active')) {
                popBtn.addEventListener('click', closePopup);
                popBg.addEventListener('click', closePopup);
            } else {
                popBtn.removeEventListener('click', closePopup);
                popBg.removeEventListener('click', closePopup);
            }
        }

        // 팝업 닫기 함수
        function closePopup(event) {
            event.preventDefault();
            togglePopup();
        }

        // 처음에 팝업을 열 때
        togglePopup();
    }
}