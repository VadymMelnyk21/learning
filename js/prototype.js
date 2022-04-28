const currentName = 'Vadym';

function haveAreYou(name) {
    console.log(`Привіт ${name} як все маєш`);
}

String.prototype.haveAreYou = function (name) {
    console.log(`Привіт ${name} як все маєш`);
}

currentName.haveAreYou(currentName);