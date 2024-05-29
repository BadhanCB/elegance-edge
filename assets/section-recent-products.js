const recentProductSlider = document.querySelector(
    ".recent-products .products"
);
const recentProductCardWidth = document.querySelector(
    ".recent-products .product-card"
).offsetWidth;

let isDraggingRecentProduct = false;
let recentProductStartX = 0;
let recentProductStartScrollLeft = 0;

const dragStartRecentProduct = (e) => {
    isDraggingRecentProduct = true;
    recentProductSlider.style.cursor = "grabbing";
    recentProductSlider.style.scrollBehavior = "auto";
    recentProductSlider.style.scrollSnapType = "none";
    recentProductSlider.classList.add("dragging");
    recentProductStartX = e.pageX;
    recentProductStartScrollLeft = recentProductSlider.scrollLeft;
};

const draggingRecentProduct = (e) => {
    if (!isDraggingRecentProduct) return;
    recentProductSlider.scrollLeft =
        recentProductStartScrollLeft - (e.pageX - recentProductStartX);
};

const dragEndRecentProduct = () => {
    isDraggingRecentProduct = false;
    recentProductSlider.style.cursor = "pointer";
    recentProductSlider.style.scrollBehavior = "smooth";
    recentProductSlider.style.scrollSnapType = "mandatory";
    recentProductSlider.classList.remove("dragging");
};

recentProductSlider.addEventListener("mousedown", dragStartRecentProduct);
recentProductSlider.addEventListener("mousemove", draggingRecentProduct);
recentProductSlider.addEventListener("mouseup", dragEndRecentProduct);
document
    .querySelector(".recent-products .prev")
    .addEventListener("click", () => {
        recentProductSlider.scrollLeft =
            recentProductSlider.scrollLeft - (recentProductCardWidth + 16);
    });
document
    .querySelector(".recent-products .next")
    .addEventListener("click", () => {
        recentProductSlider.scrollLeft =
            recentProductSlider.scrollLeft + (recentProductCardWidth + 16);
    });

recentProductSlider.addEventListener("touchstart", (e) => {
    recentProductSlider.style.scrollBehavior = "auto";
    recentProductSlider.style.scrollSnapType = "none";
    recentProductStartX = e.targetTouches[0].pageX;
    recentProductStartScrollLeft = recentProductSlider.scrollLeft;
});
recentProductSlider.addEventListener("touchmove", (e) => {
    recentProductSlider.scrollLeft =
        recentProductStartScrollLeft -
        (e.targetTouches[0].pageX - recentProductStartX);
});
