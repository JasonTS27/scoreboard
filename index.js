const container = document.querySelector('div')
// CAPITAL LETTERS AT START REQUIRED
let countries = [
        {name: "Cyprus",
        juryScore: 91, 
        score: 0, voted: false}, 
        {name: "Serbia",
        juryScore: 20, 
        score: 0, voted: false},
        {name: "Australia",
        juryScore: 134, 
        score: 0, voted: false}, 
        {name: "Montenegro",
        juryScore: 28, 
        score: 0, voted: false}, 
        {name: "Italy",
        juryScore: 82, 
        score: 0, voted: false}, 
        {name: "France",
        juryScore: 133, 
        score: 0, voted: false}, 
        {name: "Belgium",
        juryScore: 22, 
        score: 0, voted: false}, 
        {name: "Romania",
        juryScore: 41, 
        score: 0, voted: false}, 
        {name: "United Kingdom",
        juryScore: 10, 
        score: 0, voted: false}, 
        {name: "Austria",
        juryScore: 12, 
        score: 0, voted: false}, 
        {name: "Czechia",
        juryScore: 59, 
        score: 0, voted: false}, 
        {name: "Finland",
        juryScore: 147, 
        score: 0, voted: false}, 
        {name: "San Marino",
        juryScore: 5, 
        score: 0, voted: false}, 
        {name: "Albania",
        juryScore: 70, 
        score: 0, voted: false}, 
        {name: "Germany",
        juryScore: 31, 
        score: 0, voted: false}, 
        {name: "Greece",
        juryScore: 142, 
        score: 0, voted: false}, 
        {name: "Croatia",
        juryScore: 67, 
        score: 0, voted: false}, 
        {name: "Bulgaria",
        juryScore: 43, 
        score: 0, voted: false}, 
        {name: "Moldova",
        juryScore: 39, 
        score: 0, voted: false}, 
        {name: "Denmark",
        juryScore: 144, 
        score: 0, voted: false}, 
        {name: "Lithuania",
        juryScore: 30, 
        score: 0, voted: false}, 
        {name: "Georgia",
        juryScore: 31, 
        score: 0, voted: false}, 
        {name: "Armenia",
        juryScore: 28, 
        score: 0, voted: false}, 
        {name: "Malta",
        juryScore: 33, 
        score: 0, voted: false}, 
        {name: "Sweden",
        juryScore: 89, 
        score: 0, voted: false}, 
        {name: "Norway",
        juryScore: 35, 
        score: 0, voted: false},
    ];
setMap();
function setMap (arr = countries) {
container.innerHTML += arr.map(({name, score}) => {
    return `<div class="country-block" id="${name}-block">
        <div class="flag-box">
            <div class="flag" style="background-image: url(.//flags/${name.replace(" ", "_").replace("& ", "&_")}.png)">
            </div>
        </div>
        <p class="country">${name.toUpperCase()}</p>
        <div class="new-points" id="${name}-new-points"><p id="${name}-new-points-number"></p></div>
        <div class="total-points"><p id="${name}-total-score" class="score-number">0</p></div>
    </div>`
})
.join("")
}

// sort function, associated code, and first call
const selector = element => element.querySelector('p.score-number').innerText
const elements = [...document.querySelectorAll('.country-block')];
const parentElement = elements[0].parentNode;
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

function sort() {
elements.sort((elementA, elementB) => {
  const [firstElement, secondElement] = [elementB, elementA];
  const textOfFirstElement = selector(firstElement);
  const textOfSecondElement = selector(secondElement);
  return collator.compare(textOfFirstElement , textOfSecondElement)
}).forEach(element => {parentElement.appendChild(element)});}


let i;
let j;
let k;
let l;
let letsGo;
let results;
let assignedPoints;
juryScored = false;
publicScored = false;

function juryPoints() {
for (l = 0; l < countries.length; l++) {
document.getElementById(`${countries[l].name}-total-score`).innerText = countries[l].juryScore;}
juryScored = true;
setTimeout(() => {sort(), countries.sort((b, a) => {a.juryScore - b.juryScore});}, 1500)
}

getResults()
async function getResults() {
     const res = await fetch("#")
     results = await res.json();}

fetchScores()     
async function fetchScores() {
await getResults()
for ( j = 0; j < countries.length; j++) {
for (i = 0; i < results.length; i++) {
    let letsGo = Object.values(Object.values(results[i]).pop());
    letsGo.shift()
    if (publicScored == true) {return}
    if (letsGo[0] == countries[j].name) {countries[j].score += 12}
    if (letsGo[1] == countries[j].name) {countries[j].score += 10}
    if (letsGo[2] == countries[j].name) {countries[j].score += 8}
    if (letsGo[3] == countries[j].name) {countries[j].score += 7}
    if (letsGo[4] == countries[j].name) {countries[j].score += 6}
    if (letsGo[5] == countries[j].name) {countries[j].score += 5}
    if (letsGo[6] == countries[j].name) {countries[j].score += 4}
    if (letsGo[7] == countries[j].name) {countries[j].score += 3}
    if (letsGo[8] == countries[j].name) {countries[j].score += 2}
    if (letsGo[9] == countries[j].name) {countries[j].score += 1}
}}
publicScored = true}

async function assignPoints() {
await fetchScores()    
for (let k = countries.length - 1; k >= 0; k--) {
if (countries[k].voted != true) {
countries[k].voted = true;  
document.getElementById(`${countries[k].name}-new-points`).style = "background-image: linear-gradient(90deg, rgb(247, 214, 68), rgb(238, 222, 93))";
document.getElementById(`${countries[k].name}-new-points-number`).textContent = countries[k].score;  
setTimeout(() => {document.getElementById(`${countries[k].name}-new-points`).style = "background-image: transparent";
document.getElementById(`${countries[k].name}-new-points-number`).textContent = "";  
document.getElementById(`${countries[k].name}-block`).style = "background-image: linear-gradient(90deg, rgb(247, 214, 68), rgb(238, 222, 93))";
document.getElementById(`${countries[k].name}-total-score`).innerText = countries[k].score + countries[k].juryScore;}, 1500);
setTimeout(() => {sort()}, 3000)
return
}}}

document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
      ) 
    {if (juryScored != true) {
        juryPoints()
    }
    else {    
        assignPoints()}   
}}

