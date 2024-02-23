// Teacher
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress);

// My
// const video = document.getElementById('video');
// const play = document.getElementById('play');
// const stop = document.getElementById('stop');
// const progress = document.getElementById('progress');
// const timestamp = document.getElementById('timestamp');

// play.addEventListener('click', () => {
//     const link = play.querySelector('i');
//     if (link.classList.contains('fa-play')) {
//         link.classList.add('fa-pause');
//         link.classList.remove('fa-play');
//         video.play();
//     } else {
//         link.classList.add('fa-play');
//         link.classList.remove('fa-pause');
//         video.pause();
//     }
// });

// stop.addEventListener('click', () => {
//     if (play.querySelector('i').classList.contains('fa-pause')) {
//         play.querySelector('i').classList.add('fa-play');
//         play.querySelector('i').classList.remove('fa-pause');
//     }
//     video.pause();
//     video.currentTime = 0;
// });


// function updateProgress(e) {
//     const { duration, currentTime } = e.srcElement;
//     const progressPersent = (currentTime / duration) * 100;
//     progress.value = progressPersent;
    
//     timestamp.innerText = `${Math.floor(video.currentTime)}`;
// };

// function setProgress(e) {
//     const width = this.clientWidth;
//     const clickX = e.offsetX;
//     const duration = video.duration;

//     video.currentTime = (clickX / width) * duration;
// }

// video.addEventListener('timeupdate', updateProgress);
// progress.addEventListener('click', setProgress);