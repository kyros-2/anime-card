const heart = document.querySelectorAll('i.heart');

heart.forEach(function (ele) {
    ele.addEventListener('click', function () {
        ele.classList.toggle('active');
    })
})