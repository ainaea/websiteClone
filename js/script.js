const heading = document.getElementById('heading');
const imaging = document.getElementById('imaging');
const listHost = document.getElementById('listHost');

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');


card1.addEventListener('click', ()=>{runAll(obj1)})
card2.addEventListener('click', ()=>{runAll(obj2)})
card3.addEventListener('click', ()=>{runAll(obj3)})
card4.addEventListener('click', ()=>{runAll(obj4)});
card5.addEventListener('click', ()=>{runAll(obj5)});
card6.addEventListener('click', ()=>{runAll(obj6)})

function runAll(pa) {
    setHeading(pa.heading);
    setImage(pa.imaging);
    listOrNot(pa.listing);
   }

function setHeading(pa) {
    heading.textContent = pa;
}
// setHeading('nkan nbe');

function setImage(pa) {
    imaging.src = pa;
}

//setImage('images/6.jpg');
function listOrNot(pa) {
    typeof(pa)=='string'? setNotList(pa): setList(pa);
}
// listOrNot([1,2,34]);

function setList(pa) {
    var listed ='<ul id="listing">'
    for (let i=0; i<pa.length; i++){
        listed += `<li>${pa[i]}</li>`;
    }
    listHost.innerHTML = listed + '</ul>';
}
// setList([1,2,3])

function setNotList(pa) {
    listHost.innerHTML = `<p>${pa}</p>`;
}
// setNotList('helloboys');

const obj1 = {
    heading: 'Configurable Dashboards',
    listing: ['Allow user to create their presets for their work options', 'Window for Recent Work List','Alerts and Notifications'],
    imaging: 'images/1.png'
}

const obj2 = {
    heading: 'GUI',
    listing: ['Well designed','Easy to navigate and let user retrieve', 'Information quickly in least clicks', 'Attractive & user friendly'],
    imaging: 'images/2.jpg'
}

const obj3 = {
    heading: 'Futuristic',
    listing: ['Highly scalable', 'Multilingual', 'Multiple themes for user selection to break the monotonous', 'Committed to future change request', 'Using Latest platform with latest back end database'],
    imaging: 'images/3.png'
}

const obj4 = {
    heading: 'Compliance with Regulations',
    listing: 'Compliance with internal and external regulations as per company SMS and relevant section of ISM codes, SOLAS, MARPOL, STCW, ILO, MLC and other conventions',
    imaging: 'images/4.png'
}

const obj5 = {
    heading: 'Uniform Approach',
    listing: 'Most of the forms have features which are similar in use in one or other way such as ‘Attachments’ and ‘Comment & Reply',
    imaging: 'images/5.jpg'
}

const obj6 = {
    heading: 'Powerful Search',
    listing: 'A powerful search tool with macro and micro levels',
    imaging: 'images/6.jpg'
}