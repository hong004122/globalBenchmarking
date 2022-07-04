(() => {
    function slideImgHeight() {
        const imgBox = document.querySelectorAll('#works ul li span');
        console.log(imgBox);
        for (let i = 0; i < imgBox.length; i++) {
            const imgWidth = window.getComputedStyle(imgBox[i]).width;
            imgBox[i].style.height = imgWidth;
        }
    }
    slideImgHeight();
    window.addEventListener('resize', () => {
        slideImgHeight();
    })
})();