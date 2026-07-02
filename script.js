const introText = document.getElementById("introText");
const birthdayArea = document.getElementById("birthdayArea");
const birthdayImg = document.getElementById("birthdayImg");
const message = document.getElementById("message");
const actionBtn = document.getElementById("actionBtn");

let step = 1;

setTimeout(() => {
  introText.classList.add("fade-out");

  setTimeout(() => {
    introText.style.display = "none";

    setTimeout(() => {
      birthdayArea.classList.remove("hidden");
    }, 500);
  }, 1000);
}, 1000);

actionBtn.addEventListener("click", () => {
  if (step === 1) {
    birthdayImg.src = "assets/birthday_2.png";
    message.textContent = "선물을 받아야겠지?";
    actionBtn.textContent = "선물 줘봐라";
    step = 2;
    return;
  }

  if (step === 2) {
    birthdayImg.src = "assets/birthday_3.png";
    message.textContent = "두구두구... 선물이 나오는 중...";
    actionBtn.style.display = "none";

    setTimeout(() => {
      birthdayImg.src = "assets/birthday_4.png";
    }, 1500);

    setTimeout(() => {
      birthdayImg.src = "assets/birthday_5.png";
    }, 3000);

    setTimeout(() => {
      birthdayImg.src = "assets/me.png";
      message.textContent = "내가 선물~ㅋㅋㅋ 하고 그냥 넘어갈 수 없지!";
      actionBtn.textContent = "도전!";
      actionBtn.style.display = "inline-block";
      step = 3;
    }, 4500);

    return;
  }

  if (step === 3) {
    window.location.href = "Sohee_Q1.html";
  }
});
