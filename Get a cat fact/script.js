const URL = "https://catfact.ninja/fact";
// API endpoint to get a random cat fact
// const URL = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://cat-fact.herokuapp.com/users");

const factPara = document.querySelector('#fact');
const btn = document.querySelector('#btn');

const getFacts = async () =>{
    console.log("Fetching cat facts... ");
    let response = await fetch(URL);
    console.log(response); // JSON Format
    let data = await response.json();
    // factPara.innerText = data[0].text; 
    factPara.innerText = data.fact; 
    // console.log(data); // Logging the breed of the cat
};

// Promise Chaining:
// function getFacts() {
//     fetch(URL)
//     .then((response) =>{
//         return response.json();
//     })
//     .then((data) =>{
//         console.log(data); // Logging the data
//         factPara.innerText = data.fact;
//     })
// }

btn.addEventListener("click", getFacts);