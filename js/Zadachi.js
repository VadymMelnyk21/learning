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

// -- Numbers -- //
const btnContainer = document.querySelector('.numbersInteractyv__btn-container');
const array = document.querySelector('.numbersInteractyv__array');
const total = document.querySelector('.numbersInteractyv__total');
const clear = document.querySelector('.numbersInteractyv__btn-clear');
const show = document.querySelector('.numbersInteractyv__btn-show');

let numbersArray = [];

btnContainer.addEventListener('click', currentNumber);
clear.addEventListener('click', clearArray);
show.addEventListener('click', showTotal);

function currentNumber(e) {
    const btnContent = e.target.textContent;

    if (e.target.nodeName !== 'BUTTON') {
        // console.log('ne to');
        return;
    }
    numbersArray.push(Number(btnContent));
    // console.log(numbersArray);
    addArray(numbersArray)
}

function addArray(arrayRef) {
    array.innerHTML = arrayRef;
}

function clearArray() {
    numbersArray = [];
    array.innerHTML = '';
    total.innerHTML = '';
}

function showTotal() {
    const numbers = numbersArray;

    for (let i = 0; i < numbers.length; i += 1) {
        if (i) {
            const currentValue = numbers[i];
            const previousValue = numbers[i - 1];

            if (currentValue !== previousValue + 1) {
                numbers[i] = previousValue + 1;
            }
        }
    }
    showTotalNumber(numbers);
    // console.log(numbersArray);
}

function showTotalNumber(value) {
    total.innerHTML = value;
}

// console.log(numbersArray);
// const numbers = [1, 2, 3, 1, 5, 6, 1, 1, 9];

// for (let i = 0; i < numbers.length; i += 1) {
//     if (i) {
//         const currentValue = numbers[i];
//         const previousValue = numbers[i - 1];

//         if (currentValue !== previousValue + 1) {
//             numbers[i] = previousValue + 1;
//         }
//     }
// }
// console.log(numbers);
