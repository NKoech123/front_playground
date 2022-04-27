const person = {
    name: 'Nick',
    age:25,
    hobbies: ['Sports', 'Reading', 'Writing']
};


let favoritesActivities = ['Sports', 'Reading'];

const hobbies = person.hobbies;
let count = 0

// for (let i=0; i<hobbies.length;i++) another way
for (const hobby of hobbies){

    if (favoritesActivities.includes(hobby)) {
        count++

    }
}
console.log(count);

console.log(person);
console.log(person.hobbies);