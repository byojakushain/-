// 1. タイピングアニメーション
const words = ["Webエンジニア志望です。", "HTML/CSS/JSを学習中です。", "ものづくりが好きです。"];
const typingElement = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500; // 文字打ち終わり後の待機時間
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

// ページ読み込み時にタイピング開始
document.addEventListener("DOMContentLoaded", typeEffect);

// 2. ダークモード切り替え
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// 3. お問い合わせフォームの送信処理（デモ）
const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // ページリロードを防止
  const name = document.getElementById("name").value;
  formResult.textContent = `${name}様、メッセージを受け付けました！（※デモ送信）`;
  contactForm.reset();
});