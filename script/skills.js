let seeMoreBtns = document.querySelectorAll('.moreBtn');
let seeLessBtns = document.querySelectorAll('.lessBtn');

seeLessBtns.forEach((lessBtn) => {
    lessBtn.addEventListener('click', function(){
        lessBtn.parentElement.classList.add('less');
    });
});
seeMoreBtns.forEach((moreBtn) => {
    moreBtn.addEventListener('click', function(){
        moreBtn.parentElement.classList.remove('less');
    });
});