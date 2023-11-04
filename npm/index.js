const users = [
    { user: 'fred',   age: 48 },
    { user: 'barney', age: 36 },
    { user: 'fred',   age: 40 },
    { user: 'barney', age: 34 }
];

users.sort((x,y) => x.age - y.age)
console.log(users)