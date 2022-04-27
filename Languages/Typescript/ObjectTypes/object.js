var person = {
    name: 'Nick',
    age: 25,
    hobbies: ['Sports', 'Reading', 'Writing']
};
var favoritesActivities = ['Sports', 'Reading'];
var hobbies = person.hobbies;
var count = 0;
for (var _i = 0, hobbies_1 = hobbies; _i < hobbies_1.length; _i++) {
    var hobby = hobbies_1[_i];
    if (favoritesActivities.includes(hobby)) {
        count++;
    }
}
console.log(count);
console.log(person);
console.log(person.hobbies);
