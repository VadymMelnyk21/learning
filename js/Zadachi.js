// -- Равлик -- //
const ravlykRef = document.querySelector('.ravlykTotal');
const ravlykInput = document.querySelector('.lengthForm');
const functionRavlykPre = document.querySelector('.functionRavlykPre');
const RavEndRef = document.querySelector('.RavEnd')

let currentValue = '?';
let ravText = '';
let lastTex;

ravlykInput.addEventListener('submit', wellLength);

function wellLength(e) {
    e.preventDefault();
    const value = e.currentTarget.lengthWell.value.trim();
    if (Number(value) < 101) {
        const day = ravlykSpeed(value);
        currentValue = day;

        // lastTex = String(day)
        // const qwe = lastTex[lastTex.length - 1];
        // Number(qwe)
        // console.log(qwe);

        ravlykRef.innerHTML = currentValue;

        if (day === 1) {
            ravText = 'день'
            RavEndRef.innerHTML = ravText;
            return;
        }

        if (day > 1 && day < 5) {
            ravText = 'дні'
            RavEndRef.innerHTML = ravText;
            return;
        }
        if (day > 4) {
            ravText = 'днів'
            RavEndRef.innerHTML = ravText;
            return;
        }
    }
    if (Number(value) > 100) {
        alert('Максимальне значення може бути 100м.');
        return;
    }
}

function ravlykSpeed(length) {
    const up = 7;
    const down = 2;
    let totalDay = 0;
    let totalWay = 0;

    while (length >= totalDay) {
        totalDay += 1;
        totalWay += up;
        if (totalWay >= length) {
            return totalDay
        }
        totalWay -= down;
    }
}

functionRavlykPre.innerHTML = ravlykSpeed;


// const str = '12345';
// console.log(str[str.length - 1]);