const marvel_hero = ["IronMan", "Captain America", "SpiderMan"];
const Dc_hero = ["BatMan", "SuperMan", "WonderWomen"];

// marvel_hero.push(Dc_hero); 
// console.log(marvel_hero);


// const allHeros = marvel_hero.concat(Dc_hero);
// console.log(allHeros);


const all_new_hero = [...marvel_hero, ...Dc_hero];
// console.log(all_new_hero);


const another_array = [1,2,3, [4,5,6],6,7,[8,9,1,[3,4,5]]];

const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);


// console.log(Array.isArray("Gaurav"));
// console.log(Array.from("Gaurav"));
// console.log(Array.from({name: "Gaurav"})) // Intresting , it will return an empty array.


let s1 = 100;
let s2 = 200;
let s3 = 300;


console.log(Array.of(s1 , s2, s3));



