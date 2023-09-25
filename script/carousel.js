(function() {
    "use strict";
    let screenWidth = window.outerWidth;
    const onresize = function(e) {
        screenWidth = e.target.outerWidth;
        showSlides();
     }
     window.addEventListener("resize", onresize);
    const slideParent = document.querySelector('.carousel-bgimg');
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slides = document.querySelectorAll('.carousel-bgimg > div');
    addDotsCon();
    addDots();
    const dots = document.querySelectorAll('.dot');
    let columnsNumber = 3; //set this number to how many slides are visible at a time - max of 3
    setFirstTwoSlides();
    const slide1 = document.querySelector('.slide1');
    const slide2 = document.querySelector('.slide2');
    let slideIndex = 1;
    slideParent.className += ' columns' + columnsNumber;
    showSlides(slideIndex);
     

    function addDotsCon() {
        slideParent.insertAdjacentHTML("afterend", "<div class='dotsCon'></div>");
    }

    function addDots() {
        const dotsCon = document.querySelector('.dotsCon');
        slides.forEach((newdots, index) => 
            dotsCon.insertAdjacentHTML('beforeend', `<button class="dot" data-slide-number="${index + 1}" aria-controls="${index + 1}" aria-label="Slide Tab ${index + 1} of ${slides.length}"></button>`)
        );
    }

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function setFirstTwoSlides() {
        slides[0].className += " slide1";
        slides[1].className += " slide2";
    }

    function showSlides(n) {
        slideParent.prepend(slide2);

        slideParent.prepend(slide1);

        if (n > slides.length) {slideIndex = 1}

        if (n < 1) {slideIndex = slides.length}

        slides.forEach(slide => { slide.style.display = 'none'; });

        dots.forEach(dot => { dot.className = dot.className.replace(' active', ''); });

        dots[slideIndex-1].className += " active";

        slides[slideIndex-1].style.display = "flex";

        // add slide 1 and 2 to the end for an infinite slide show
        if (screenWidth >= 600) {
            if (columnsNumber == 3) {
                if (slideIndex >= slides.length - 1) {
                    // console.log('slide 1');
                    slide1.style.display = "flex";
                    slideParent.append(slide1);
                } else {
                    slides[slideIndex+1].style.display = "flex";
                }
                if (slideIndex == (slides.length)) {
                    // console.log('slide 2');
                    slide2.style.display = "flex";
                    slideParent.append(slide2);
                } else {
                    slides[slideIndex].style.display = "flex";
                }
            }

            if (columnsNumber == 2) {
                if (slideIndex == (slides.length)) {
                    // console.log('slide 1');
                    slide1.style.display = "flex";
                    slideParent.append(slide1);
                } else {
                    slides[slideIndex].style.display = "flex";
                }
            }
        }
    }

    next.addEventListener('click', e => plusSlides(1));
    prev.addEventListener('click', e => plusSlides(-1));

    dots.forEach(dot => 
        dot.addEventListener('click', e => {
            let dotNumber = parseInt(dot.dataset.slideNumber)
            currentSlide(dotNumber)
        })
    );

    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const gestureZone = slideParent;

    gestureZone.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
        event.preventDefault();
    }, false);

    gestureZone.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        touchendY = event.changedTouches[0].screenY;
        handleGesture();
        event.preventDefault();
    }, false); 

    function handleGesture() {
        if (touchendX < touchstartX) {
            plusSlides(1);
        }
        
        if (touchendX > touchstartX) {
            plusSlides(-1);
        }
    }
}());