const btn = document.getElementById("btn")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
let ayo = document.getElementById("ayo")
let iya = document.getElementById("iya")
let iyaa = document.getElementById("iyaa")

let number = generateRandomNumber();
let score = getScore();

let attempts = 0;
const maxAttempts = 20;

btn1.style.display = "none"

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function newScore(updateScore) {
    score = updateScore;
    localStorage.setItem('userScore', score)
}

function getScore() {
    let savedSCore = localStorage.getItem('userScore')
    return savedSCore ? parseInt(savedSCore) : 0;
}

function resetGame() {
    number = generateRandomNumber();
    attempts = 0;
    ayo.innerHTML = "Ayo Tebak Dulu Angka nya";
    btn.style.display = "block";
    btn1.style.display = "none";
}

btn.addEventListener('click', function(){
    let guest = document.getElementById("guest").value;
    if(guest == number) {
        ayo.innerHTML = `Tebakan Kamu Benar, Angka Tebakmu ${number}`;
        newScore(score + 1);
        resetGame();
        btn1.style.display = "block"
        btn.style.display = "none"
    } else if (guest < number) {
        ayo.innerHTML = "Tebakan Kamu Terlalu Kecil"
    };

    if(guest > number) {
        ayo.innerHTML = "Tebakan Kamu Terlalu Besar"
    }

    

    document.getElementById("guest").value = "";
            attempts++;
            
            iya.innerHTML = `sudah menjawab ${attempts} kali.`;   
            
            if (attempts >= maxAttempts) {
                
                setTimeout(function () {
                    iyaa.innerHTML += `Anda sudah mencoba sebanyak ${maxAttempts} kali. Mengulang permainan...`;
                    iya.style.display = "none"
                }, 2000);
                
                setTimeout(function () {
                    iya.style.display = "none"
                    iyaa.style.display = "none"
                    resetGame();
                }, 4000);
            }

    document.getElementById("btn1").addEventListener('click', function() {
        number = generateRandomNumber();
        ayo.innerHTML = "Ayo Tebak Dulu Angka nya"
        btn.style.display = "block"
        btn1.style.display = "none"
    })
    bebek.innerHTML = `Skor Anda : ${score}`
})

    function baten() {
        localStorage.clear();
        window.location.reload()
    }