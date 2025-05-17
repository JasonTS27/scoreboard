//check if votes assigned yet
let doneLatvia;
let doneUkraine;
let doneCroatia;
let donePoland;
let doneIreland;
let doneArmenia;
let doneAustralia;
let doneItaly;
let doneIceland;
let donePortugal;
let doneBelgium;
let doneCzechia;
let doneDenmark;
let doneGermany;
let doneGreece;
let doneSwitzerland;
let doneEstonia;
let doneNorway;
let doneSpain;
let doneAlbania;
let doneFrance;
let doneMalta;
let doneFinland;
let doneNetherlands;
let doneAustria;
let doneSweden;
let juryDone;

// accumulated points starting from jury votes
let poland;
let czechia;
let ireland;
let sweden;
let portugal;
let denmark;
let france;
let ukraine;
let switzerland;
let iceland;
let croatia;
let austria;
let greece;
let armenia;
let latvia;
let norway;
let malta;
let italy;
let estonia;
let finland;
let australia;
let albania;
let germany;
let spain;
let netherlands;
let belgium;

// televote assigned points
let polandNo = 0;
let czechiaNo = 0;
let irelandNo = 0;
let swedenNo = 0;
let portugalNo = 0;
let denmarkNo = 0;
let franceNo = 0;
let ukraineNo = 0;
let switzerlandNo = 0;
let icelandNo = 0;
let croatiaNo = 0;
let austriaNo = 0;
let greeceNo = 0;
let armeniaNo = 0;
let latviaNo = 0;
let norwayNo = 0;
let maltaNo = 0;
let italyNo = 0;
let estoniaNo = 0;
let finlandNo = 0;
let australiaNo = 0;
let albaniaNo = 0;
let germanyNo = 0;
let spainNo = 0;
let netherlandsNo = 0;
let belgiumNo = 0;
let assignedPoints;
let results

//prevent doubleclick
let canProgress = true;

// sort function, associated code, and first call
const selector = element => element.querySelector('p.score-number').innerText
const elements = [...document.querySelectorAll('.vote-box')];
const parentElement = elements[0].parentNode;
const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

function sort() {
elements.sort((elementA, elementB) => {
  const [firstElement, secondElement] = [elementB, elementA];
  const textOfFirstElement = selector(firstElement);
  const textOfSecondElement = selector(secondElement);
  return collator.compare(textOfFirstElement , textOfSecondElement)
}).forEach(element => parentElement.appendChild(element));}
sort()

// fetching and adding televote scores
getResults()
async function getResults() {
  const res = await fetch("https://fabform.io/f/submissions/uzSauBx")
  results = await res.json();
for (let i = 0 ; i < results.length; i++) {
    let letsGo = Object.values(Object.values(results[i]).pop());
  letsGo.shift()
  
  if (letsGo[0] === "Poland") {polandNo += 12};
  if (letsGo[1] === "Poland") {polandNo += 10};
  if (letsGo[2] === "Poland") {polandNo += 8};
  if (letsGo[3] === "Poland") {polandNo += 7};
  if (letsGo[4] === "Poland") {polandNo += 6};
  if (letsGo[5] === "Poland") {polandNo += 5};
  if (letsGo[6] === "Poland") {polandNo += 4};
  if (letsGo[7] === "Poland") {polandNo += 3};
  if (letsGo[8] === "Poland") {polandNo += 2};
  if (letsGo[9] === "Poland") {polandNo += 1};
  
  if (letsGo[0] === "Czechia") {czechiaNo += 12};
  if (letsGo[1] === "Czechia") {czechiaNo += 10};
  if (letsGo[2] === "Czechia") {czechiaNo += 8};
  if (letsGo[3] === "Czechia") {czechiaNo += 7};
  if (letsGo[4] === "Czechia") {czechiaNo += 6};
  if (letsGo[5] === "Czechia") {czechiaNo += 5};
  if (letsGo[6] === "Czechia") {czechiaNo += 4};
  if (letsGo[7] === "Czechia") {czechiaNo += 3};
  if (letsGo[8] === "Czechia") {czechiaNo += 2};
  if (letsGo[9] === "Czechia") {czechiaNo += 1};

  if (letsGo[0] === "Latvia") {latviaNo += 12};
  if (letsGo[1] === "Latvia") {latviaNo += 10};
  if (letsGo[2] === "Latvia") {latviaNo += 8};
  if (letsGo[3] === "Latvia") {latviaNo += 7};
  if (letsGo[4] === "Latvia") {latviaNo += 6};
  if (letsGo[5] === "Latvia") {latviaNo += 5};
  if (letsGo[6] === "Latvia") {latviaNo += 4};
  if (letsGo[7] === "Latvia") {latviaNo += 3};
  if (letsGo[8] === "Latvia") {latviaNo += 2};
  if (letsGo[9] === "Latvia") {latviaNo += 1};

  if (letsGo[0] === "Ukraine") {ukraineNo += 12};
  if (letsGo[1] === "Ukraine") {ukraineNo += 10};
  if (letsGo[2] === "Ukraine") {ukraineNo += 8};
  if (letsGo[3] === "Ukraine") {ukraineNo += 7};
  if (letsGo[4] === "Ukraine") {ukraineNo += 6};
  if (letsGo[5] === "Ukraine") {ukraineNo += 5};
  if (letsGo[6] === "Ukraine") {ukraineNo += 4};
  if (letsGo[7] === "Ukraine") {ukraineNo += 3};
  if (letsGo[8] === "Ukraine") {ukraineNo += 2};
  if (letsGo[9] === "Ukraine") {ukraineNo += 1};

  if (letsGo[0] === "Croatia") {croatiaNo += 12};
  if (letsGo[1] === "Croatia") {croatiaNo += 10};
  if (letsGo[2] === "Croatia") {croatiaNo += 8};
  if (letsGo[3] === "Croatia") {croatiaNo += 7};
  if (letsGo[4] === "Croatia") {croatiaNo += 6};
  if (letsGo[5] === "Croatia") {croatiaNo += 5};
  if (letsGo[6] === "Croatia") {croatiaNo += 4};
  if (letsGo[7] === "Croatia") {croatiaNo += 3};
  if (letsGo[8] === "Croatia") {croatiaNo += 2};
  if (letsGo[9] === "Croatia") {croatiaNo += 1};

  if (letsGo[0] === "Ireland") {irelandNo += 12};
  if (letsGo[1] === "Ireland") {irelandNo += 10};
  if (letsGo[2] === "Ireland") {irelandNo += 8};
  if (letsGo[3] === "Ireland") {irelandNo += 7};
  if (letsGo[4] === "Ireland") {irelandNo += 6};
  if (letsGo[5] === "Ireland") {irelandNo += 5};
  if (letsGo[6] === "Ireland") {irelandNo += 4};
  if (letsGo[7] === "Ireland") {irelandNo += 3};
  if (letsGo[8] === "Ireland") {irelandNo += 2};
  if (letsGo[9] === "Ireland") {irelandNo += 1};

  if (letsGo[0] === "Armenia") {armeniaNo += 12};
  if (letsGo[1] === "Armenia") {armeniaNo += 10};
  if (letsGo[2] === "Armenia") {armeniaNo += 8};
  if (letsGo[3] === "Armenia") {armeniaNo += 7};
  if (letsGo[4] === "Armenia") {armeniaNo += 6};
  if (letsGo[5] === "Armenia") {armeniaNo += 5};
  if (letsGo[6] === "Armenia") {armeniaNo += 4};
  if (letsGo[7] === "Armenia") {armeniaNo += 3};
  if (letsGo[8] === "Armenia") {armeniaNo += 2};
  if (letsGo[9] === "Armenia") {armeniaNo += 1};

  if (letsGo[0] === "Australia") {australiaNo += 12};
  if (letsGo[1] === "Australia") {australiaNo += 10};
  if (letsGo[2] === "Australia") {australiaNo += 8};
  if (letsGo[3] === "Australia") {australiaNo += 7};
  if (letsGo[4] === "Australia") {australiaNo += 6};
  if (letsGo[5] === "Australia") {australiaNo += 5};
  if (letsGo[6] === "Australia") {australiaNo += 4};
  if (letsGo[7] === "Australia") {australiaNo += 3};
  if (letsGo[8] === "Australia") {australiaNo += 2};
  if (letsGo[9] === "Australia") {australiaNo += 1};

  if (letsGo[0] === "Italy") {italyNo += 12};
  if (letsGo[1] === "Italy") {italyNo += 10};
  if (letsGo[2] === "Italy") {italyNo += 8};
  if (letsGo[3] === "Italy") {italyNo += 7};
  if (letsGo[4] === "Italy") {italyNo += 6};
  if (letsGo[5] === "Italy") {italyNo += 5};
  if (letsGo[6] === "Italy") {italyNo += 4};
  if (letsGo[7] === "Italy") {italyNo += 3};
  if (letsGo[8] === "Italy") {italyNo += 2};
  if (letsGo[9] === "Italy") {italyNo += 1};

  if (letsGo[0] === "Iceland") {icelandNo += 12};
  if (letsGo[1] === "Iceland") {icelandNo += 10};
  if (letsGo[2] === "Iceland") {icelandNo += 8};
  if (letsGo[3] === "Iceland") {icelandNo += 7};
  if (letsGo[4] === "Iceland") {icelandNo += 6};
  if (letsGo[5] === "Iceland") {icelandNo += 5};
  if (letsGo[6] === "Iceland") {icelandNo += 4};
  if (letsGo[7] === "Iceland") {icelandNo += 3};
  if (letsGo[8] === "Iceland") {icelandNo += 2};
  if (letsGo[9] === "Iceland") {icelandNo += 1};

  if (letsGo[0] === "Portugal") {portugalNo += 12};
  if (letsGo[1] === "Portugal") {portugalNo += 10};
  if (letsGo[2] === "Portugal") {portugalNo += 8};
  if (letsGo[3] === "Portugal") {portugalNo += 7};
  if (letsGo[4] === "Portugal") {portugalNo += 6};
  if (letsGo[5] === "Portugal") {portugalNo += 5};
  if (letsGo[6] === "Portugal") {portugalNo += 4};
  if (letsGo[7] === "Portugal") {portugalNo += 3};
  if (letsGo[8] === "Portugal") {portugalNo += 2};
  if (letsGo[9] === "Portugal") {portugalNo += 1};

  if (letsGo[0] === "Belgium") {belgiumNo += 12};
  if (letsGo[1] === "Belgium") {belgiumNo += 10};
  if (letsGo[2] === "Belgium") {belgiumNo += 8};
  if (letsGo[3] === "Belgium") {belgiumNo += 7};
  if (letsGo[4] === "Belgium") {belgiumNo += 6};
  if (letsGo[5] === "Belgium") {belgiumNo += 5};
  if (letsGo[6] === "Belgium") {belgiumNo += 4};
  if (letsGo[7] === "Belgium") {belgiumNo += 3};
  if (letsGo[8] === "Belgium") {belgiumNo += 2};
  if (letsGo[9] === "Belgium") {belgiumNo += 1};

  if (letsGo[0] === "Denmark") {denmarkNo += 12};
  if (letsGo[1] === "Denmark") {denmarkNo += 10};
  if (letsGo[2] === "Denmark") {denmarkNo += 8};
  if (letsGo[3] === "Denmark") {denmarkNo += 7};
  if (letsGo[4] === "Denmark") {denmarkNo += 6};
  if (letsGo[5] === "Denmark") {denmarkNo += 5};
  if (letsGo[6] === "Denmark") {denmarkNo += 4};
  if (letsGo[7] === "Denmark") {denmarkNo += 3};
  if (letsGo[8] === "Denmark") {denmarkNo += 2};
  if (letsGo[9] === "Denmark") {denmarkNo += 1};

  if (letsGo[0] === "Germany") {germanyNo += 12};
  if (letsGo[1] === "Germany") {germanyNo += 10};
  if (letsGo[2] === "Germany") {germanyNo += 8};
  if (letsGo[3] === "Germany") {germanyNo += 7};
  if (letsGo[4] === "Germany") {germanyNo += 6};
  if (letsGo[5] === "Germany") {germanyNo += 5};
  if (letsGo[6] === "Germany") {germanyNo += 4};
  if (letsGo[7] === "Germany") {germanyNo += 3};
  if (letsGo[8] === "Germany") {germanyNo += 2};
  if (letsGo[9] === "Germany") {germanyNo += 1};

  if (letsGo[0] === "Greece") {greeceNo += 12};
  if (letsGo[1] === "Greece") {greeceNo += 10};
  if (letsGo[2] === "Greece") {greeceNo += 8};
  if (letsGo[3] === "Greece") {greeceNo += 7};
  if (letsGo[4] === "Greece") {greeceNo += 6};
  if (letsGo[5] === "Greece") {greeceNo += 5};
  if (letsGo[6] === "Greece") {greeceNo += 4};
  if (letsGo[7] === "Greece") {greeceNo += 3};
  if (letsGo[8] === "Greece") {greeceNo += 2};
  if (letsGo[9] === "Greece") {greeceNo += 1};

  if (letsGo[0] === "Switzerland") {switzerlandNo += 12};
  if (letsGo[1] === "Switzerland") {switzerlandNo += 10};
  if (letsGo[2] === "Switzerland") {switzerlandNo += 8};
  if (letsGo[3] === "Switzerland") {switzerlandNo += 7};
  if (letsGo[4] === "Switzerland") {switzerlandNo += 6};
  if (letsGo[5] === "Switzerland") {switzerlandNo += 5};
  if (letsGo[6] === "Switzerland") {switzerlandNo += 4};
  if (letsGo[7] === "Switzerland") {switzerlandNo += 3};
  if (letsGo[8] === "Switzerland") {switzerlandNo += 2};
  if (letsGo[9] === "Switzerland") {switzerlandNo += 1};

  if (letsGo[0] === "Estonia") {estoniaNo += 12};
  if (letsGo[1] === "Estonia") {estoniaNo += 10};
  if (letsGo[2] === "Estonia") {estoniaNo += 8};
  if (letsGo[3] === "Estonia") {estoniaNo += 7};
  if (letsGo[4] === "Estonia") {estoniaNo += 6};
  if (letsGo[5] === "Estonia") {estoniaNo += 5};
  if (letsGo[6] === "Estonia") {estoniaNo += 4};
  if (letsGo[7] === "Estonia") {estoniaNo += 3};
  if (letsGo[8] === "Estonia") {estoniaNo += 2};
  if (letsGo[9] === "Estonia") {estoniaNo += 1};

  if (letsGo[0] === "Norway") {norwayNo += 12};
  if (letsGo[1] === "Norway") {norwayNo += 10};
  if (letsGo[2] === "Norway") {norwayNo += 8};
  if (letsGo[3] === "Norway") {norwayNo += 7};
  if (letsGo[4] === "Norway") {norwayNo += 6};
  if (letsGo[5] === "Norway") {norwayNo += 5};
  if (letsGo[6] === "Norway") {norwayNo += 4};
  if (letsGo[7] === "Norway") {norwayNo += 3};
  if (letsGo[8] === "Norway") {norwayNo += 2};
  if (letsGo[9] === "Norway") {norwayNo += 1};

  if (letsGo[0] === "Spain") {spainNo += 12};
  if (letsGo[1] === "Spain") {spainNo += 10};
  if (letsGo[2] === "Spain") {spainNo += 8};
  if (letsGo[3] === "Spain") {spainNo += 7};
  if (letsGo[4] === "Spain") {spainNo += 6};
  if (letsGo[5] === "Spain") {spainNo += 5};
  if (letsGo[6] === "Spain") {spainNo += 4};
  if (letsGo[7] === "Spain") {spainNo += 3};
  if (letsGo[8] === "Spain") {spainNo += 2};
  if (letsGo[9] === "Spain") {spainNo += 1};

  if (letsGo[0] === "Albania") {albaniaNo += 12};
  if (letsGo[1] === "Albania") {albaniaNo += 10};
  if (letsGo[2] === "Albania") {albaniaNo += 8};
  if (letsGo[3] === "Albania") {albaniaNo += 7};
  if (letsGo[4] === "Albania") {albaniaNo += 6};
  if (letsGo[5] === "Albania") {albaniaNo += 5};
  if (letsGo[6] === "Albania") {albaniaNo += 4};
  if (letsGo[7] === "Albania") {albaniaNo += 3};
  if (letsGo[8] === "Albania") {albaniaNo += 2};
  if (letsGo[9] === "Albania") {albaniaNo += 1};

  if (letsGo[0] === "France") {franceNo += 12};
  if (letsGo[1] === "France") {franceNo += 10};
  if (letsGo[2] === "France") {franceNo += 8};
  if (letsGo[3] === "France") {franceNo += 7};
  if (letsGo[4] === "France") {franceNo += 6};
  if (letsGo[5] === "France") {franceNo += 5};
  if (letsGo[6] === "France") {franceNo += 4};
  if (letsGo[7] === "France") {franceNo += 3};
  if (letsGo[8] === "France") {franceNo += 2};
  if (letsGo[9] === "France") {franceNo += 1};

  if (letsGo[0] === "Malta") {maltaNo += 12};
  if (letsGo[1] === "Malta") {maltaNo += 10};
  if (letsGo[2] === "Malta") {maltaNo += 8};
  if (letsGo[3] === "Malta") {maltaNo += 7};
  if (letsGo[4] === "Malta") {maltaNo += 6};
  if (letsGo[5] === "Malta") {maltaNo += 5};
  if (letsGo[6] === "Malta") {maltaNo += 4};
  if (letsGo[7] === "Malta") {maltaNo += 3};
  if (letsGo[8] === "Malta") {maltaNo += 2};
  if (letsGo[9] === "Malta") {maltaNo += 1};

  if (letsGo[0] === "Finland") {finlandNo += 12};
  if (letsGo[1] === "Finland") {finlandNo += 10};
  if (letsGo[2] === "Finland") {finlandNo += 8};
  if (letsGo[3] === "Finland") {finlandNo += 7};
  if (letsGo[4] === "Finland") {finlandNo += 6};
  if (letsGo[5] === "Finland") {finlandNo += 5};
  if (letsGo[6] === "Finland") {finlandNo += 4};
  if (letsGo[7] === "Finland") {finlandNo += 3};
  if (letsGo[8] === "Finland") {finlandNo += 2};
  if (letsGo[9] === "Finland") {finlandNo += 1};

  if (letsGo[0] === "Netherlands") {netherlandsNo += 12};
  if (letsGo[1] === "Netherlands") {netherlandsNo += 10};
  if (letsGo[2] === "Netherlands") {netherlandsNo += 8};
  if (letsGo[3] === "Netherlands") {netherlandsNo += 7};
  if (letsGo[4] === "Netherlands") {netherlandsNo += 6};
  if (letsGo[5] === "Netherlands") {netherlandsNo += 5};
  if (letsGo[6] === "Netherlands") {netherlandsNo += 4};
  if (letsGo[7] === "Netherlands") {netherlandsNo += 3};
  if (letsGo[8] === "Netherlands") {netherlandsNo += 2};
  if (letsGo[9] === "Netherlands") {netherlandsNo += 1};

  if (letsGo[0] === "Austria") {austriaNo += 12};
  if (letsGo[1] === "Austria") {austriaNo += 10};
  if (letsGo[2] === "Austria") {austriaNo += 8};
  if (letsGo[3] === "Austria") {austriaNo += 7};
  if (letsGo[4] === "Austria") {austriaNo += 6};
  if (letsGo[5] === "Austria") {austriaNo += 5};
  if (letsGo[6] === "Austria") {austriaNo += 4};
  if (letsGo[7] === "Austria") {austriaNo += 3};
  if (letsGo[8] === "Austria") {austriaNo += 2};
  if (letsGo[9] === "Austria") {austriaNo += 1};

  if (letsGo[0] === "Sweden") {swedenNo += 12};
  if (letsGo[1] === "Sweden") {swedenNo += 10};
  if (letsGo[2] === "Sweden") {swedenNo += 8};
  if (letsGo[3] === "Sweden") {swedenNo += 7};
  if (letsGo[4] === "Sweden") {swedenNo += 6};
  if (letsGo[5] === "Sweden") {swedenNo += 5};
  if (letsGo[6] === "Sweden") {swedenNo += 4};
  if (letsGo[7] === "Sweden") {swedenNo += 3};
  if (letsGo[8] === "Sweden") {swedenNo += 2};
  if (letsGo[9] === "Sweden") {swedenNo += 1};
}
assignedPoints = [latviaNo, ukraineNo, croatiaNo, polandNo, irelandNo, armeniaNo, australiaNo, italyNo, icelandNo, portugalNo, belgiumNo, czechiaNo, denmarkNo, germanyNo, greeceNo, switzerlandNo, estoniaNo, norwayNo, spainNo, albaniaNo, franceNo, maltaNo, finlandNo, netherlandsNo, austriaNo, swedenNo]
console.log(assignedPoints);
}
// turning setTimeout on again
function onTimeout () {
  canProgress = true;
  console.log("on")
}

// button to function and assigning points. Initial jury votes are stores in here
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    assignPoints();
  }
}
document.getElementById('blank-score').addEventListener("click", assignPoints);
function assignPoints () { 
  if (canProgress === true) {  
    canProgress = false;
    console.log("off");
    setTimeout(onTimeout, 1500);
if (juryDone !== true)  
{ poland = 2;
 czechia = 17;
 ireland = 4;
 sweden = 255;
 portugal = 15;
 denmark = 29;
 france = 99;
 ukraine = 0;
 switzerland = 35;
 iceland = 15;
 croatia = 0;
 austria = 233;
 greece = 32;
 armenia = 6;
 latvia = 0;
 norway = 56;
 malta = 108;
 italy = 11;
 estonia = 49;
 finland = 175;
 australia = 7;
 albania = 99;
 germany = 31;
 spain = 82;
 netherlands = 189;
 belgium = 17;
document.getElementById('poland-score').textContent = poland;
document.getElementById('ireland-score').textContent = ireland;
document.getElementById('france-score').textContent = france;
document.getElementById('denmark-score').textContent = denmark;
document.getElementById('portugal-score').textContent = portugal;
document.getElementById('czechia-score').textContent = czechia;
document.getElementById('finland-score').textContent = finland;
document.getElementById('croatia-score').textContent = croatia;
document.getElementById('australia-score').textContent = australia;
document.getElementById('albania-score').textContent = albania;
document.getElementById('iceland-score').textContent = iceland;
document.getElementById('sweden-score').textContent = sweden;
document.getElementById('armenia-score').textContent = armenia;
document.getElementById('austria-score').textContent = austria;
document.getElementById('ukraine-score').textContent = ukraine;
document.getElementById('germany-score').textContent = germany;
document.getElementById('spain-score').textContent = spain;
document.getElementById('switzerland-score').textContent = switzerland;
document.getElementById('netherlands-score').textContent = netherlands;
document.getElementById('estonia-score').textContent = estonia;
document.getElementById('belgium-score').textContent = belgium;
document.getElementById('greece-score').textContent = greece;
document.getElementById('norway-score').textContent = norway;
document.getElementById('latvia-score').textContent = latvia;
document.getElementById('italy-score').textContent = italy;
document.getElementById('malta-score').textContent = malta;
juryDone = true;
setTimeout(() => {sort();}, 2000);
return;}

  else if (doneLatvia !== 1)
  {latvia += assignedPoints[0];
    doneLatvia = 1;
    document.getElementById('televote-latvia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('latvia-p').textContent = assignedPoints[0];
    setTimeout(() => {
      document.getElementById('televote-latvia').style = "background-image: transparent";
    document.getElementById('latvia-p').textContent = "";
    document.getElementById('latvia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('latvia-score').textContent = latvia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }

  else if (doneUkraine !== 1)
  {ukraine += assignedPoints[1];
    doneUkraine = 1;
    document.getElementById('televote-ukraine').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('ukraine-p').textContent = assignedPoints[1];
    setTimeout(() => {
      document.getElementById('televote-ukraine').style = "background-image: transparent";
    document.getElementById('ukraine-p').textContent = "";
    document.getElementById('ukraine').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('ukraine-score').textContent = ukraine;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
else if (doneCroatia !== 1)
   {croatia += assignedPoints[2];
    doneCroatia = 1;
  document.getElementById('televote-croatia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('croatia-p').textContent = assignedPoints[2];
    setTimeout(() => {
      document.getElementById('televote-croatia').style = "background-image: transparent";
    document.getElementById('croatia-p').textContent = "";
    document.getElementById('croatia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('croatia-score').textContent = croatia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }

  else if (donePoland !== 1)
  {poland += assignedPoints[3];
    donePoland = 1;
  document.getElementById('televote-poland').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('poland-p').textContent = assignedPoints[3];
    setTimeout(() => {
      document.getElementById('televote-poland').style = "background-image: transparent";
    document.getElementById('poland-p').textContent = "";
    document.getElementById('poland').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('poland-score').textContent = poland;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneIreland !== 1)
  {ireland += assignedPoints[4];
    doneIreland = 1;
  document.getElementById('televote-ireland').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('ireland-p').textContent = assignedPoints[4];
    setTimeout(() => {
      document.getElementById('televote-ireland').style = "background-image: transparent";
    document.getElementById('ireland-p').textContent = "";
    document.getElementById('ireland').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('ireland-score').textContent = ireland;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneArmenia !== 1)
  {armenia += assignedPoints[5];
    doneArmenia = 1;
  document.getElementById('televote-armenia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('armenia-p').textContent = assignedPoints[5];
    setTimeout(() => {
      document.getElementById('televote-armenia').style = "background-image: transparent";
    document.getElementById('armenia-p').textContent = "";
    document.getElementById('armenia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('armenia-score').textContent = armenia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneAustralia !== 1)
  {australia += assignedPoints[6];
    doneAustralia = 1;
  document.getElementById('televote-australia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('australia-p').textContent = assignedPoints[6];
    setTimeout(() => {
      document.getElementById('televote-australia').style = "background-image: transparent";
    document.getElementById('australia-p').textContent = "";
    document.getElementById('australia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('australia-score').textContent = australia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneItaly !== 1)
  {italy += assignedPoints[7];
    doneItaly = 1;
  document.getElementById('televote-italy').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('italy-p').textContent = assignedPoints[7];
    setTimeout(() => {
      document.getElementById('televote-italy').style = "background-image: transparent";
    document.getElementById('italy-p').textContent = "";
    document.getElementById('italy').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('italy-score').textContent = italy;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneIceland !== 1)
  {iceland += assignedPoints[8];
    doneIceland = 1;
  document.getElementById('televote-iceland').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('iceland-p').textContent = assignedPoints[8];
    setTimeout(() => {
      document.getElementById('televote-iceland').style = "background-image: transparent";
    document.getElementById('iceland-p').textContent = "";
    document.getElementById('iceland').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('iceland-score').textContent = iceland;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (donePortugal !== 1)
  {portugal += assignedPoints[9];
    donePortugal = 1;
  document.getElementById('televote-portugal').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('portugal-p').textContent = assignedPoints[9];
    setTimeout(() => {
      document.getElementById('televote-portugal').style = "background-image: transparent";
    document.getElementById('portugal-p').textContent = "";
    document.getElementById('portugal').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('portugal-score').textContent = portugal;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneBelgium !== 1)
  {belgium += assignedPoints[10];
    doneBelgium = 1;
  document.getElementById('televote-belgium').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('belgium-p').textContent = assignedPoints[10];
    setTimeout(() => {
      document.getElementById('televote-belgium').style = "background-image: transparent";
    document.getElementById('belgium-p').textContent = "";
    document.getElementById('belgium').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('belgium-score').textContent = belgium;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneCzechia !== 1)
  {czechia += assignedPoints[11];
    doneCzechia = 1;
  document.getElementById('televote-czechia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('czechia-p').textContent = assignedPoints[11];
    setTimeout(() => {
      document.getElementById('televote-czechia').style = "background-image: transparent";
    document.getElementById('czechia-p').textContent = "";
    document.getElementById('czechia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('czechia-score').textContent = czechia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneDenmark !== 1)
  {denmark += assignedPoints[12];
    doneDenmark = 1;
  document.getElementById('televote-denmark').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('denmark-p').textContent = assignedPoints[12];
    setTimeout(() => {
      document.getElementById('televote-denmark').style = "background-image: transparent";
    document.getElementById('denmark-p').textContent = "";
    document.getElementById('denmark').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('denmark-score').textContent = denmark;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  else if (doneGermany !== 1)
  {germany += assignedPoints[13];
    doneGermany = 1;
  document.getElementById('televote-germany').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('germany-p').textContent = assignedPoints[13];
    setTimeout(() => {
      document.getElementById('televote-germany').style = "background-image: transparent";
    document.getElementById('germany-p').textContent = "";
    document.getElementById('germany').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('germany-score').textContent = germany;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneGreece !== 1)
  {greece += assignedPoints[14];
    doneGreece = 1;
  document.getElementById('televote-greece').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('greece-p').textContent = assignedPoints[14];
    setTimeout(() => {
      document.getElementById('televote-greece').style = "background-image: transparent";
    document.getElementById('greece-p').textContent = "";
    document.getElementById('greece').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('greece-score').textContent = greece;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneSwitzerland !== 1)
  {switzerland += assignedPoints[15];
    doneSwitzerland = 1;
  document.getElementById('televote-switzerland').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('switzerland-p').textContent = assignedPoints[15];
    setTimeout(() => {
      document.getElementById('televote-switzerland').style = "background-image: transparent";
    document.getElementById('switzerland-p').textContent = "";
    document.getElementById('switzerland').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('switzerland-score').textContent = switzerland;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneEstonia !== 1)
  {estonia += assignedPoints[16];
    doneEstonia = 1;
  document.getElementById('televote-estonia').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('estonia-p').textContent = assignedPoints[16];
    setTimeout(() => {
      document.getElementById('televote-estonia').style = "background-image: transparent";
    document.getElementById('estonia-p').textContent = "";
    document.getElementById('estonia').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('estonia-score').textContent = estonia;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneNorway !== 1)
  {norway += assignedPoints[17];
    doneNorway = 1;
  document.getElementById('televote-norway').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('norway-p').textContent = assignedPoints[17];
    setTimeout(() => {
      document.getElementById('televote-norway').style = "background-image: transparent";
    document.getElementById('norway-p').textContent = "";
    document.getElementById('norway').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('norway-score').textContent = norway;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneSpain !== 1)
  {spain += assignedPoints[18];
    doneSpain = 1;
  document.getElementById('televote-spain').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('spain-p').textContent = assignedPoints[18];
    setTimeout(() => {
      document.getElementById('televote-spain').style = "background-image: transparent";
    document.getElementById('spain-p').textContent = "";
    document.getElementById('spain').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('spain-score').textContent = spain;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneAlbania !== 1)
  {albania += assignedPoints[19];
    doneAlbania = 1;
  document.getElementById('televote-albania').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('albania-p').textContent = assignedPoints[19];
    setTimeout(() => {
      document.getElementById('televote-albania').style = "background-image: transparent";
    document.getElementById('albania-p').textContent = "";
    document.getElementById('albania').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('albania-score').textContent = albania;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneFrance !== 1)
  {france += assignedPoints[20];
    doneFrance = 1;
  document.getElementById('televote-france').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('france-p').textContent = assignedPoints[20];
    setTimeout(() => {
      document.getElementById('televote-france').style = "background-image: transparent";
    document.getElementById('france-p').textContent = "";
    document.getElementById('france').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('france-score').textContent = france;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900);
    return;
  }
  
  else if (doneMalta !== 1)
  {malta += assignedPoints[21];
    doneMalta = 1;
  document.getElementById('televote-malta').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('malta-p').textContent = assignedPoints[21];
    setTimeout(() => {
      document.getElementById('televote-malta').style = "background-image: transparent";
    document.getElementById('malta-p').textContent = "";
    document.getElementById('malta').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('malta-score').textContent = malta;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneFinland !== 1)
  {finland += assignedPoints[22];
    doneFinland = 1;
  document.getElementById('televote-finland').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('finland-p').textContent = assignedPoints[22];
    setTimeout(() => {
      document.getElementById('televote-finland').style = "background-image: transparent";
    document.getElementById('finland-p').textContent = "";
    document.getElementById('finland').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('finland-score').textContent = finland;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneNetherlands !== 1)
  {netherlands += assignedPoints[23];
    doneNetherlands = 1;
  document.getElementById('televote-netherlands').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('netherlands-p').textContent = assignedPoints[23];
    setTimeout(() => {
      document.getElementById('televote-netherlands').style = "background-image: transparent";
    document.getElementById('netherlands-p').textContent = "";
    document.getElementById('netherlands').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('netherlands-score').textContent = netherlands;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneAustria !== 1)
  {austria += assignedPoints[24];
    doneAustria = 1;
  document.getElementById('televote-austria').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('austria-p').textContent = assignedPoints[24];
    setTimeout(() => {
      document.getElementById('televote-austria').style = "background-image: transparent";
    document.getElementById('austria-p').textContent = "";
    document.getElementById('austria').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('austria-score').textContent = austria;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
  
  else if (doneSweden !== 1)
  {sweden += assignedPoints[25];
    doneSweden = 1;
  document.getElementById('televote-sweden').style = "background-image: linear-gradient(90deg, rgb(206, 73, 73), rgb(206, 71, 71))";
    document.getElementById('sweden-p').textContent = assignedPoints[25];
    setTimeout(() => {
      document.getElementById('televote-sweden').style = "background-image: transparent";
    document.getElementById('sweden-p').textContent = "";
    document.getElementById('sweden').style = "background-image: linear-gradient(90deg, rgb(8, 54, 107), rgb(38, 149, 182))";
    document.getElementById('sweden-score').textContent = sweden;
    }, 1700);
    setTimeout(() => {
    sort();}, 2900)
    return;
  }
}}
