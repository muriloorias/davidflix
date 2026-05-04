let timeLeft = 30;
let timerInterval;
let lastUpdateTime = new Date();

const timerEl = document.getElementById('timer');
const onlineEl = document.getElementById('online-count');
const ratingEl = document.getElementById('rating');
const starsEl = document.getElementById('stars');
const lastUpdateEl = document.getElementById('last-update');

function updateReport() {
    const newOnline = Math.floor(Math.random() * 150) + 280; 
    const newRating = (Math.random() * 0.8 + 4.2).toFixed(1); 
    
    onlineEl.textContent = newOnline;
    ratingEl.textContent = newRating;
    
   
    const ratingNum = parseFloat(newRating);
    const fullStars = Math.floor(ratingNum);
    let starsHTML = '★'.repeat(fullStars);
    
    if (ratingNum % 1 >= 0.3) {
        starsHTML += '★';
    } else {
        starsHTML += '☆';
    }
    
    starsEl.innerHTML = starsHTML + '☆'.repeat(5 - Math.ceil(ratingNum));
    
    lastUpdateTime = new Date();
    lastUpdateEl.textContent = 'agora';
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 10) {
            timerEl.style.color = '#f87171';
        } else {
            timerEl.style.color = '#60a5fa';
        }
        
        if (timeLeft <= 0) {
            updateReport();
            startTimer(); 
        }
    }, 1000);
}


setInterval(() => {
    const secondsAgo = Math.floor((new Date() - lastUpdateTime) / 1000);
    if (secondsAgo > 5) {
        lastUpdateEl.textContent = `há ${secondsAgo}s`;
    }
}, 1000);


window.onload = function() {
    updateReport();
    startTimer();
};