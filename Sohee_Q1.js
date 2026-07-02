const question = document.getElementById("question");
const answers = document.getElementById("answers");
const madImage = document.getElementById("madImage");

const yesSound = document.getElementById("yesSound");
const noSound = document.getElementById("noSound");

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function fail() {

    playSound(noSound);

    madImage.style.display = "block";

    setTimeout(() => {

        alert("아부지... 저 아부지 딸 맞쥬...?🥺");

        madImage.style.display = "none";

    }, 1000);

}

function checkBirth(choice) {

    if (choice !== 3) {

        fail();
        return;

    }

    playSound(yesSound);

    question.textContent = "소희의 출생지는?";

    answers.innerHTML = `

        <button onclick="checkPlace(1)">진주</button>

        <button onclick="checkPlace(2)">창원</button>

        <button onclick="checkPlace(3)">마산</button>

        <button onclick="checkPlace(4)">밀양</button>

        <button onclick="checkPlace(5)">김해</button>

    `;

}

function checkPlace(choice) {

    if (choice !== 2) {

        fail();
        return;

    }

    playSound(yesSound);

    setTimeout(() => {

        location.href = "Sohee_Q2.html";

    }, 700);

}