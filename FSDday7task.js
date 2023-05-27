// 1. Solving problems using array functions on the rest countries' data.
// a) Get all the countries from the Asia continent /region using the Filter function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let result = data.filter((element)=>{
        return element.region==="Asia";
    })
    console.log(result);
}

// b) Get all the countries with a population of less than 2 lakhs using Filter function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let result = data.filter((element)=>{
        return element.population<200000;
    })
    console.log(result);
}

// c) Print the following details name, capital, flag using forEach function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    data.forEach((element)=>{
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    })
}

// d) Print the total population of countries using reduce function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let popul = data.filter((element)=>{
        return element.population;
    })
    let arr = [];
    popul.forEach((elem)=>{
        arr.push(elem.population);
    })
    let result = arr.reduce((accu, curr)=>{
        return accu+curr;
    })
    console.log(result);
}

// e) Print the country which uses US Dollars as currency.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let res = data.filter((elem)=>{
        return elem.currencies;
    })
    let result = res.filter((element)=>{
        return element.currencies[0].code === "USD";
    })
    console.log(result);
}