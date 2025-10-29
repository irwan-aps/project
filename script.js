document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 3000; // Interval waktu (dalam milidetik), contoh: 3 detik

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, intervalTime);
});