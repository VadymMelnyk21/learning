const entryName = document.querySelector('[data-form]');
const answerRef = document.querySelector('.answer');

let currentName;
entryName.addEventListener('submit', messageDisplay);

function messageDisplay(e) {
    e.preventDefault();

    currentName = e.currentTarget.entrName.value.trim();
    if (currentName) {
        String.prototype.haveAreYou = function (name) {
            const value = prompt(`Привіт ${name} як все маєш?`);
            if (value !== null) {
                answerRef.insertAdjacentHTML('beforeend', `<li class="answer__item">${value}</>`);
            }
        }
        currentName.haveAreYou(currentName);
    }
    entryName.reset();
}


// function haveAreYou(name) {
//     console.log(`Привіт ${name} як все маєш`);
// }

// String.prototype.haveAreYou = function (name) {
//     console.log(`Привіт ${name} як все маєш`);
// }

// currentName.haveAreYou(currentName);
