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

////////////////////////////////////////
// const Artem = 'Artem';
// String.prototype.__proto__ = Object.create(null, {
//     privet: {
//         value: function (name) {
//             console.log(`Ny privet ${name}`);
//         }
//     }
// })
// Artem.privet(Artem);


//////////////////////////////////////////////

const frigateProto = document.querySelector('[data-formFrigate-proto]');
const frigateObject = document.querySelector('[data-formFrigate-object]');
const shipProtoRef = document.querySelector('.shipProto');
const shipOriginalRef = document.querySelector('.shipOriginal');

const ship = {
    deck: 3,
    sail: 9,
}

const frigate = Object.create(ship);
frigate.gold = '200 песо';
frigate.crew = '50 чоловік';

frigateProto.addEventListener('submit', createParamProto);
frigateObject.addEventListener('submit', createParamObject)

function createParamProto(e) {
    e.preventDefault();

    const { entrValue, entrNumber } = e.currentTarget.elements;
    if (entrValue.value && entrNumber.value) {
        shipProtoRef.insertAdjacentHTML('beforeend', `<li>${entrValue.value
            }: ${entrNumber.value}, </li>`);
        frigateProto.reset();
    }
}

function createParamObject(e) {
    e.preventDefault();

    const { entrValue, entrNumber } = e.currentTarget.elements;
    if (entrValue.value && entrNumber.value) {
        shipOriginalRef.insertAdjacentHTML('beforeend', `<li>frigate.${entrValue.value
            }= '${entrNumber.value}', </li>`);
        frigateObject.reset();
    }
}


console.log(frigate);