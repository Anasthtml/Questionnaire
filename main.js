let check = document.getElementById('check');
let rbtn = document.getElementsByClassName('li');
let result = [];

check.addEventListener('click', func);
function func() {
    for(let i = 0; i < rbtn.length; i++) {
        let answers = rbtn[i].querySelectorAll('input[type=radio]');
        result.push(checkOneAnswer(answers));
    }
    printResult();
    result = [];
}

function checkOneAnswer(answers) {
    let result = null;
    let noAnswer = true;
    for(let i = 0; i < answers.length; i++) {
        let inTrue = (answers[i].getAttribute('data-true') !== null);
        if(answers[i].checked) {
            noAnswer = false;
            if(inTrue) {
                result = true;
            } else {
                result = false;
            }
        }
        else {
        if(inTrue) {
            result = false;
        }
    }
} 
    if(noAnswer) {
        result = null;
    }
    return result;
}

function printResult() {
    let trueAns = 0;
    let falseAns = 0;
    let noAns = 0;
    for(let i = 0; i < result.length; i++) {
        if(result[i] === true) {
            trueAns++;
        }
        else if(result[i] === false) {
            falseAns++;
        }
        else if(result[i] === null) {
            noAns++;
        }           
    }
    let allRes = trueAns + falseAns + noAns;
    let per = Math.round((trueAns / allRes) * 100);
    let msg = 'Правильных ответов: ' + trueAns + ' (' + per + '%)\n'
    + 'Неправильных ответов: ' + falseAns + '\n'
    + 'Без ответов: ' + noAns + '\n';
    alert(msg);
}


