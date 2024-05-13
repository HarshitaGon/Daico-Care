const img = document.querySelector('.pbox');
const profile = document.querySelector('.profile');
const medi = document.querySelector('#medi');
const detail = document.querySelector('#detail');
const health = document.querySelector('.health');
const chart = document.querySelector('.chart');
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const heart = document.querySelector(".heart");
const kcal = document.querySelector(".kcal");
const stress = document.querySelector(".stress");
const steps = document.querySelector(".steps");

img.addEventListener("dblclick", () => {
    profile.showModal();
});

document.addEventListener("click", () => {
    profile.close();
});

medi.addEventListener("mouseenter", () => {
    detail.showModal();
});

document.addEventListener("mouseenter", () => {
    detail.close();
});

chart.addEventListener("mouseenter", () => {
    health.showModal();
});

document.addEventListener("click", () => {
    health.close();
});

heart.addEventListener("mouseenter", () => {
    box1.showModal();
});

heart.addEventListener("mouseleave", () => {
    box1.close();
});

kcal.addEventListener("mouseenter", () => {
    box2.showModal();
});

kcal.addEventListener("mouseleave", () => {
    box2.close();
});

stress.addEventListener("mouseenter", () => {
    box3.showModal();
});

stress.addEventListener("mouseleave", () => {
    box3.close();
});

steps.addEventListener("mouseenter", () => {
    box4.showModal();
});

steps.addEventListener("mouseleave", () => {
    box4.close();
});
