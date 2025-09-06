const checkbox = document.getElementById("switch");

checkbox.addEventListener("change", () => {
  document.querySelectorAll("*").forEach((el) => {
    el.classList.toggle("dark", checkbox.checked);
  });
});

const parallax = document.querySelector(".my-img");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const moveX = (e.clientX - innerWidth / 2) * 0.03; // чувствительность по X
  const moveY = (e.clientY - innerHeight / 2) * 0.03; // чувствительность по Y

  parallax.style.transform = `translate(calc(${moveX}px), calc(${moveY}px))`;
});

function setupCardFlip() {
  const moreButtons = document.querySelectorAll(".stack-more");
  const returnButtons = document.querySelectorAll(".stack-return");

  // Обработчик для кнопки "Подробнее"
  moreButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const card = this.closest(".stack-card");
      card.classList.add("flipped");
    });
  });

  // Обработчик для кнопки "Назад"
  returnButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const card = this.closest(".stack-card");
      card.classList.remove("flipped");
    });
  });

  // Закрытие при клике вне карточки
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".stack-card")) {
      document.querySelectorAll(".stack-card.flipped").forEach((card) => {
        card.classList.remove("flipped");
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupCardFlip();
});
