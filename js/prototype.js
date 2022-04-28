const entryName = document.querySelector('[data-form]');
let currentName;
entryName.addEventListener('submit', messageDisplay);

function messageDisplay(e) {
    e.preventDefault();

    currentName = e.currentTarget.entrName.value.trim();
    if (currentName) {
        String.prototype.haveAreYou = function (name) {
            alert(`Привіт ${name} як все маєш`);
        }
        currentName.haveAreYou(currentName);
    }
}


// function haveAreYou(name) {
//     console.log(`Привіт ${name} як все маєш`);
// }

// String.prototype.haveAreYou = function (name) {
//     console.log(`Привіт ${name} як все маєш`);
// }

// currentName.haveAreYou(currentName);
