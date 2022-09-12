var txtArea;
var curIndex = null;
var curInterval = null;
var started;

window.onload = (e) => {
    txtArea = document.getElementById("text-area");
    document.getElementById("animation").onchange = onChangeAnimation;
    document.getElementById("start").onclick = onClickStart;
    document.getElementById("stop").onclick = onClickStop;
    document.getElementById("turbo").onchange = onChangeTurbo;
    document.getElementById("fontsize").onchange = onChangeFontSize;
}

function onChangeAnimation(){
    let selectAnimation = document.getElementById("animation");
    txtArea.value = ANIMATIONS[selectAnimation.value];
}

function onClickStart(){    
    curIndex = 0;
    curInterval = setInterval(startAnimation, (document.getElementById("turbo").checked) ? 50 : 250);
    started = true;
    disableElement();
}

function onClickStop(){
    console.log("stop");
    clearInterval(curInterval);
    onChangeAnimation();
    started = false;
    disableElement();
}

function onChangeTurbo(){
    if(!started) return;

    clearInterval(curInterval);
    curInterval = setInterval(startAnimation, (document.getElementById("turbo").checked) ? 50 : 250);
}

function onChangeFontSize(){
    switch (fontsize.value) {
        case "Tiny":
            txtArea.style.fontSize = '7pt';
            break;
        case "Small":
            txtArea.style.fontSize = '10pt';
            break;
        case "Medium":
            txtArea.style.fontSize = '12pt';
            break;
        case "Large":
            txtArea.style.fontSize = '16pt';
            break;
        case "Extra Large":
            txtArea.style.fontSize = '24pt';
            break;
        case "XXL":
            txtArea.style.fontSize = '32pt';
            break;
        default:
            txtArea.style.fontSize = '12pt';
            break;
    }
}

function startAnimation(){
    let txtArray = ANIMATIONS[document.getElementById("animation").value].split("=====\n");
    txtArea.value = txtArray[curIndex];
    curIndex++;
    if(curIndex == txtArray.length){
        curIndex = 0;
    }
}

function disableElement(){
    btnStart = document.getElementById("start");
    btnStop = document.getElementById("stop");
    selectAnimation = document.getElementById("animation");
    btnStart.disabled = started;
    btnStop.disabled = !started;
    selectAnimation.disabled = started;
}

