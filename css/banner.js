let prevSlide = null;
let nextSlide = null;

document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.getElementById('carouselInner');
    let items = document.querySelectorAll('.nox2');
    const totalItems = items.length;

    // 复制第一项放到最后，复制最后一项放到最前面
    const firstItemClone = items[0].cloneNode(true);
    const lastItemClone = items[totalItems - 1].cloneNode(true);
    carouselInner.appendChild(firstItemClone);
    carouselInner.insertBefore(lastItemClone, items[0]);

    let currentIndex = 1;

    function updateCarousel() {
        const offset = -currentIndex * 50; // 每个项目的宽度是50%
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    nextSlide = function () {
        currentIndex++;
        if (currentIndex > totalItems) {
            currentIndex = 1;
            carouselInner.style.transition = 'none';
            updateCarousel();
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out';
                currentIndex = 1;
                updateCarousel();
            }, 10);
        } else {
            updateCarousel();
        }
    };

    prevSlide = function () {
        currentIndex--;
        if (currentIndex < 1) {
            currentIndex = totalItems;
            carouselInner.style.transition = 'none';
            updateCarousel();
            setTimeout(() => {
                carouselInner.style.transition = 'transform 0.5s ease-in-out';
                currentIndex = totalItems;
                updateCarousel();
            }, 10);
        } else {
            updateCarousel();
        }
    };

    // 初始化内容
    for (let i = 0; i < totalItems; i++) {
        carouselInner.appendChild(items[i].cloneNode(true));
    }
    updateCarousel();

    setInterval(nextSlide, 3000); // 自动播放
});