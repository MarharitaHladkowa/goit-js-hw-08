const boxesContainer = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

boxesContainer.addEventListener("click", () => {
  const newColor = getRandomHexColor(); // Генерируем новый цвет
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor; // Обновляем текстовое содержимое <span>
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
