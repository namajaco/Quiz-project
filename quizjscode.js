function begin(){
    document.getElementById("quizTitle").style.display = "inline-block";
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "none";
    document.getElementById("finish").style.display = "none";
}

function q1(){
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("q1").style.display = "inline-block";
}

function q2(){
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "inline-block";
}

function q3(){
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "inline-block";
}

function q4(){
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "inline-block";
}

function q5(){
    document.getElementById("q4").style.display = "none";
    document.getElementById("q5").style.display = "inline-block";
}

function finish(){
    document.getElementById("q5").style.display = "none";
    document.getElementById("finish").style.display = "inline-block";

    const q1As = document.querySelectorAll('input[name="q1Answers"]');
    let q1Value;
    for (const rb of q1As){
        if (rb.checked){
            q1Value = rb.value;
            break;
        }
    }

    const q2As = document.querySelectorAll('input[name="q2Answers"]')
    let q2Value;
    for (const rb of q2As){
        if (rb.checked){
            q2Value = rb.value;
            break;
        }
    }

    const q3As = document.querySelectorAll('input[name="q3Answers"]');
    let q3Value;
    for (const rb of q3As){
        if (rb.checked){
            q3Value = rb.value;
            break;
        }
    }

    const q4As = document.querySelectorAll('input[name="q4Answers"]');
    let q4Value;
    for (const rb of q4As){
        if (rb.checked){
            q4Value = rb.value;
            break;
        }
    }

    const q5As = document.querySelectorAll('input[name="q5Answers"]');
    let q5Value;
    for (const rb of q5As){
        if (rb.checked){
            q5Value = rb.value;
            break;
        }
    }
    
    let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
    results = total;

    if (results == 5){
        msg = "Purrfectly! 😻"
    } else if (results >= 4){
        msg = "Almeowst every time. 😸";
    } else if (results >= 2 && results < 4){
        msg = "With some trouble. 😺";
    } else if (results == 1){
        msg = "Almost none of the time. 😿";
    } else {
        msg = "Never! Be careful when you eat croissants! 🙀"
    }

    document.getElementById("results").innerHTML = msg
}

function refreshPage(){
    window.location.reload();
} 