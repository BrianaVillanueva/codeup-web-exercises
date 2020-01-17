



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



//---1.) Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.---//
//.filter takes in a function which receives an item and decides (returns boolean) whether the itm should make it or not.

let linguists = users.filter(user => user.languages.length >= 3);

console.log(linguists);

//---2.) Use .map to create an array of strings where each element is a user's email address---//

let mail = users.map((user) =>{
    return user.email;
});




console.log(mail);

//---3.) Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.---//

let years = users.reduce((yearsStack, user) => {
    return yearsStack + user.yearsOfExperience;
}, 0);

// console.log(years);

let yearsStack = 0;
for (let user of users) {
    yearsStack += user.yearsOfExperience;
}
console.log(years/users.length);
console.log(yearsStack);


//---4.) Use .reduce to get the longest email from the list of users.---//

//---5.) Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.---//

//---Bonus-Use .reduce to get the unique list of languages from the list of users.---//
//- second parameter is going to be an array so lets start w an empty array.

let knownLanguages = users
    .reduce((languages, knownLanguages) => {
        usersLang.languages.forEach(function (language) {
            if (languages.includes(language)){
            } else {
                languages.push(language);
            }
        });
        return languages
    }, []);

console.log(knownLanguages);

