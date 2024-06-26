const topSlider = document.querySelector(".top-banner .slider");
const nextBtn = document.querySelector(".top-banner .next");
const prevBtn = document.querySelector(".top-banner .prev");
let activeIndex = 0;

nextBtn.addEventListener("click", () => {
    activeIndex = activeIndex === 2 ? 0 : activeIndex + 1;
    topSlider.style.translate = `-${100 * activeIndex}%`;
});
prevBtn.addEventListener("click", () => {
    activeIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    topSlider.style.translate = `-${100 * activeIndex}%`;
});

setInterval(() => {
    activeIndex = activeIndex === 2 ? 0 : activeIndex + 1;
    topSlider.style.translate = `-${100 * activeIndex}%`;
}, 3600);
