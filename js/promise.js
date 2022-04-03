// function promiseA() {
//     return new Promise((resolve, reject) => {
//         const random = Math.random() > 0.3;

//         setTimeout(() => {
//             // const isSuccess = true;
//             if (random) {
//                 resolve('🧙‍♂️Ура');
//             } else {
//                 reject('🤦Ганьба');
//             }
//         }, 500)
//     });
// };

// promiseA()
//     .then(user => window.alert(user))
//     .catch(error => window.alert(error))
//     .finally(pre => window.alert('👨‍🚀 dadada'));

// ////////////////////////////////////////////////////////////////

// const promiseB = (name) => {
//     return new Promise((resolve, reject) => {
//         const veselka = Math.random() > 0.2;
        
//         setTimeout(() => {
//             if (veselka) {
//                 resolve(`✔ Все буде файно ${name}`);
//             } else {
//                 reject(`❌ Шота не то ${name}`);
//             }
//         }, 200)
//     });
// };

// promiseB('Vadim')
//     .then(user => window.alert(user))
//     .catch(error => window.alert(error));

// ///////////////////////////////////////////////////////////////

function promiseC(name, surname) {
    return new Promise((resolve, reject) => {
        const ran = Math.random() < 0.4;

        if (ran) {
            resolve(`${name} ${surname} все буде файно ✔`);
        } else {
            reject(`${name} ${surname} шота не то ❌`);
        }
    });
};

promiseC('Vadim', 'Melnyk')
    .then(el => window.alert(el))
    .catch(vel => window.alert(vel))
    .finally(re => window.alert('Я працюю у будь якому випадку 🔵'));