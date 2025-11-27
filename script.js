const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");

// モーダルを開く
openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
});

// モーダルを閉じる
closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

// 暗い部分をクリックして閉じる
overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
});

// ===== スライダー =====
let index = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

document.getElementById('next').addEventListener('click', () => {
    index++;
    if (index >= images.length) index = 0;
    updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
    index--;
    if (index < 0) index = images.length - 1;
    updateSlide();
});

function updateSlide() {
    slides.style.transform = `translateX(${-300 * index}px)`;
}
