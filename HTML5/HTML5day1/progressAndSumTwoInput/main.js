var inputNumber = document.getElementById("num");
var rang = document.getElementById("rang");
var sum = document.getElementsByTagName("span")[0];

inputNumber.addEventListener('input',function(){
    sum.innerText = `${parseInt(inputNumber.value) + parseInt(rang.value)}`;
})
rang.addEventListener('input',function(){
    sum.innerText = `${parseInt(inputNumber.value) + parseInt(rang.value)}`;
})

let progressValue = 0;

function updateProgress() {
    const progress = document.getElementById('progress');
    const progressValueElement = document.getElementById('progress-value');

    if (progressValue >= 100) {
        clearInterval(progressInterval);
        return;
    }

    progress.value = progressValue;
    progressValueElement.textContent = progressValue + '%';
    progressValue += 1;
}

const progressInterval = setInterval(updateProgress, 100);
