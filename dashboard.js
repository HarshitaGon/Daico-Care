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

document.addEventListener("mouseleave", () => {
    detail.close();
});

chart.addEventListener("dblclick", () => {
    health.showModal();
});

document.addEventListener("click", () => {
    health.close();
});

heart.addEventListener("dblclick", () => {
    box1.showModal();
});

heart.addEventListener("click", () => {
    box1.close();
});

kcal.addEventListener("dblclick", () => {
    box2.showModal();
});

kcal.addEventListener("click", () => {
    box2.close();
});

stress.addEventListener("dblclick", () => {
    box3.showModal();
});

stress.addEventListener("click", () => {
    box3.close();
});

steps.addEventListener("dblclick", () => {
    box4.showModal();
});

steps.addEventListener("click", () => {
    box4.close();
});
