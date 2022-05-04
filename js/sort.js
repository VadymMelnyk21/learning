const createUser = function (name, age) {
    return {
        name,
        age,
        toString: function () {
            return `${this.name} is ${this.age} y.o`;
        },
        // -- додати -- //
        // valueOf() {
        //     return this.age;
        // },
        // -- або -- //
        // toString: function () {
        //   return `${this.age} is the age of ${this.name}.`;
        // },
    }
}

const users = [
    createUser('John', 21),
    createUser('Tory', 18),
    createUser('Kate', 23),
    createUser('Pete', 22),
]

users.sort((a, b) => a - b);

console.log(users);

const sort = [...users].sort((a, b) => a.age - b.age);
console.log(sort)