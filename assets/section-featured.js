const featuredSlider = document.querySelector(".featured-products .products");
const featuredProductCardWidth = document.querySelector(
    ".featured-products .product-card"
).offsetWidth;

let isDraggingFeaturedProduct = false;
let featuredProductStartX = 0;
let featuredProductStartScrollLeft = 0;

const dragStartFeaturedProduct = (e) => {
    isDraggingFeaturedProduct = true;
    featuredSlider.style.cursor = "grabbing";
    featuredSlider.style.scrollBehavior = "auto";
    featuredSlider.style.scrollSnapType = "none";
    featuredProductStartX = e.pageX;
    featuredProductStartScrollLeft = featuredSlider.scrollLeft;
};

const draggingFeaturedProduct = (e) => {
    if (!isDraggingFeaturedProduct) return;
    featuredSlider.scrollLeft =
        featuredProductStartScrollLeft - (e.pageX - featuredProductStartX);
};

const dragEndFeaturedProduct = () => {
    isDraggingFeaturedProduct = false;
    featuredSlider.style.cursor = "pointer";
    featuredSlider.style.scrollBehavior = "smooth";
    featuredSlider.style.scrollSnapType = "mandatory";
};

featuredSlider.addEventListener("mousedown", dragStartFeaturedProduct);
featuredSlider.addEventListener("mousemove", draggingFeaturedProduct);
featuredSlider.addEventListener("mouseup", dragEndFeaturedProduct);
document
    .querySelector(".featured-products .prev")
    .addEventListener("click", () => {
        featuredSlider.scrollLeft =
            featuredSlider.scrollLeft - (featuredProductCardWidth + 16);
    });
document
    .querySelector(".featured-products .next")
    .addEventListener("click", () => {
        featuredSlider.scrollLeft =
            featuredSlider.scrollLeft + (featuredProductCardWidth + 16);
    });

featuredSlider.addEventListener("touchstart", (e) => {
    featuredSlider.style.scrollBehavior = "auto";
    featuredSlider.style.scrollSnapType = "none";
    featuredProductStartX = e.targetTouches[0].pageX;
    featuredProductStartScrollLeft = featuredSlider.scrollLeft;
});
featuredSlider.addEventListener("touchmove", (e) => {
    featuredSlider.scrollLeft =
        featuredProductStartScrollLeft -
        (e.targetTouches[0].pageX - featuredProductStartX);
});
