const fromHero = document.querySelector(".from-hero");
const footerBtn = document.querySelector(".footer__btn");
const headerBtn = document.querySelector(".header__btn");

function triggerAnimation() {
  // Удаляем класс активного состояния
  fromHero.classList.remove("active");

  // Запускаем перерисовку для принудительного сброса анимации
  void fromHero.offsetWidth; // Принудительная перерисовка

  // Добавляем класс активного состояния снова для запуска анимации
  fromHero.classList.add("active");
}

// Обработчик для headerBtn без задержки
headerBtn.addEventListener("click", triggerAnimation);

// Обработчик для footerBtn с задержкой в 700 мс
footerBtn.addEventListener("click", function () {
  setTimeout(triggerAnimation, 600); // Задержка 700 мс
});
