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
    const scrollStep = window.scrollY / 15;
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
    var useremail = document.getElementById("useremail");
    var valid_txt = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    //(알파벳,숫자)@(알파벳,숫자).(알파벳,숫자)

    if(valid_txt.test(useremail.value)==false){

        alert("이메일 주소가 올바르지 않습니다.");
        useremail.focus();
        return;
    }

}