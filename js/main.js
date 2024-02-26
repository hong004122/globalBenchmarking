(() => {
    function slideImgHeight() {
        const imgBox = document.querySelectorAll('#works ul li span');
        for (let i = 0; i < imgBox.length; i++) {
            const imgWidth = window.getComputedStyle(imgBox[i]).width;
            imgBox[i].style.height = imgWidth;
            imgBox[i].style.top = `calc(50% - ${imgWidth})`;
        }
    }

    function slideImgPrev() {
        const slideBox = document.querySelector('#works ul')
        const slide1 = document.querySelector('#works ul li.first.noMargin');
        const slide2 = document.querySelector('#works ul li.second');
        const slide3 = document.querySelector('#works ul li.last');

            slideBox.style.opacity = `0`;
            setTimeout(() => {
                slide1.classList.remove('first', 'noMargin');
                slide1.classList.add('last');
                slide2.classList.remove('second', 'active');
                slide2.classList.add('first', 'noMargin');
                slide3.classList.remove('last');
                slide3.classList.add('second', 'active');
                slideImgHeight();
                slideBox.style.opacity = `1`;
            }, 300);
        };

    function slideImgNext() {
        const slideBox = document.querySelector('#works ul');
        const slide1 = document.querySelector('#works ul li.first.noMargin');
        const slide2 = document.querySelector('#works ul li.second');
        const slide3 = document.querySelector('#works ul li.last');

            slideBox.style.opacity = `0`;
            setTimeout(() => {
                slide1.classList.remove('first', 'noMargin');
                slide1.classList.add('second', 'active');
                slide2.classList.remove('second', 'active');
                slide2.classList.add('last');
                slide3.classList.remove('last');
                slide3.classList.add('first', 'noMargin');
                slideImgHeight();
                slideBox.style.opacity = `1`;
            }, 200);
        };
        

    document.querySelector('.prev').addEventListener('click', slideImgPrev);
    document.querySelector('.next').addEventListener('click', slideImgNext);


    function menuOn() {
        const body = document.querySelector('body');
        const menuBtn = document.querySelector('.menuBtn');
        const menu = document.querySelector('.menu')
        const contents = document.querySelector('.wrap');
        menuBtn.addEventListener('click', function() {
            body.classList.add('menuOn');
            menu.classList.add('active');
            contents.classList.remove('normal')
            contents.classList.add('menuOn');
            menuOff();
        });
        
    }

    function menuOff() {
        const body = document.querySelector('body');
        const block = document.querySelector('.contentBlock');
        const contents = document.querySelector('.wrap');
        const menu = document.querySelector('.menu')
        const contentsClass = contents.classList;
        if(contentsClass.length === 2) {
            block.addEventListener('click', function() {
                contents.classList.remove('menuOn');
                contents.classList.add('normal');
                body.classList.remove('menuOn');
                menu.classList.remove('active');
            });
        }
    }

    function mobileVh() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }


    function btnActive() {
        const hireBtn = document.querySelectorAll('#hireMe ul li button');
        for (i = 0; i < hireBtn.length; i++) {
            hireBtn[i].addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }
        
    }

    function labelAni() {
        const hireInput = document.querySelectorAll('#hireMe fieldset ul li input');
        for (i = 0; i < 2; i++) {
            hireInput[i].addEventListener('focus', function() {
                this.previousElementSibling.classList.add('active');
            })
            hireInput[i].addEventListener('blur', function() {
                if(this.value === "") {
                    this.previousElementSibling.classList.remove('active');
                }
            })
        }
    }

    mobileVh();
    btnActive();
    labelAni();
    
    window.addEventListener('resize', () => {
        slideImgHeight();
        mobileVh();
    });

    window.addEventListener('DOMContentLoaded', () => {
        slideImgHeight();
        menuOn();
    });

})();