// header active
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const btn = document.querySelector('.btn_top');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
        btn.classList.add('visible');
    } else {
        header.classList.remove('sticky');
        btn.classList.remove('visible');
    }
});

// scroll top button
const btnTop = document.querySelector('.btn_top')
btnTop.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToTop();
});

function scrollToTop() {
    const scrollStep = window.scrollY;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, -scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}


// 이메일 유효성 검사
function join_user(){
    event.preventDefault();
    const useremail = document.getElementById("useremail");
    const validTxt = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    //(알파벳,숫자)@(알파벳,숫자).(알파벳,숫자)

    if(validTxt.test(useremail.value)==false){
        alert("이메일 주소가 올바르지 않습니다.");
        useremail.focus();
        return;
    } else {
        // 이메일 주소를 올바르게 작성했을 때
        // console.log(useremail.value)

        const body = document.body;
        const form = document.getElementById("myForm");
        const popCont = document.querySelector('.sec05 .pop_wr');
        const popBg = document.querySelector('.sec05 .pop_wr .pop_bg');
        const popBtn = document.querySelector('.sec05 .pop_wr .exit_btn');

        function togglePopup(isActive) {
            body.classList.toggle('scrollLock', isActive);
            popCont.classList.toggle('active', isActive);
        }
        // 팝업 버튼 클릭시
        popBtn.addEventListener('click', function(event) {
            event.preventDefault();
            form.submit();
            togglePopup(false);
        });
        // 팝업 배경 클릭시
        popBg.addEventListener('click', function() {
            togglePopup(false);
        });

        // 처음에 팝업을 열 때
        togglePopup(true);
    }

}