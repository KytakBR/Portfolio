const checkbox = document.getElementById("themeToggle");

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
