
const Handlebars =require("handlebars")



subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"] ;
punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];


const randomArry ={
 subRandom : subjects[Math.floor(Math.random()*7)],
 punRandom : punchlines[Math.floor(Math.random()*7)]
};

const source ="{{subRandom}} is great to {{punRandom}}";
const template= Handlebars.compile(source);
const result = template(randomArry)

console.log(result);