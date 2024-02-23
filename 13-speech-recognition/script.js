const audio = document.getElementById('audio');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();


// rec.lang = 'en-US';
rec.lang = 'uk-UA';
rec.continuous = true;

const audio2 = new Audio('./music/gimn_ukrani.mp3');
const div = document.querySelector('.audio');
div.appendChild(audio2);

rec.onresult = function (e) {
    // const acceptedColors = [
    //     'red',
    //     'blue',
    //     'green',
    //     'yellow',
    //     'pink',
    //     'brown',
    //     'purple',
    //     'orange',
    //     'black',
    //     'white',
    // ];
    const acceptedColors = [
        ['red', 'червоний'],
        ['blue', 'синій'],
        ['green', 'зелений'],
        ['yellow', 'жовтий'],
        ['pink', 'рожевий'],
        ['brown', 'коричневий'],
        ['purple', 'фіолетовий'],
        ['orange', 'оранжевий'],
        ['black', 'чорний'],
        ['white', 'білий'],
        ['white', 'слава україні'],
    ];

    
    for (let i = e.resultIndex; i < e.results.length; i++) {
        const script = e.results[i][0].transcript.toLowerCase().trim();
        // if (acceptedColors.includes(script)) {
        if (searchWord(acceptedColors, script)) {
            // document.body.style.backgroundColor = script;
            if (script === 'слава україні') {
                document.body.style.background = 'linear-gradient(to top, #eeff00, #eeff00 50%, #1100ff 50%)';
                document.querySelector('h1').innerText = 'Героям Слава!';
                audio2.play();
            } else {
                document.body.style.background = '';
                document.querySelector('h1').innerText = 'Назвіть колір';
                document.body.style.backgroundColor = searchWordEng(acceptedColors, script);
            }
        } else {
            // alert('Please say a color');
            alert('Будь-ласка, назвіть колір');
        }
    }
};

function searchWord(arr, search) {
    return arr.some(row => row.includes(search));
}

function searchWordEng(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === search) {
            return arr[i][0];
        }
    }
}

rec.start();