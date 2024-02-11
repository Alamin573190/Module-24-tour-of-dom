const addededPlace =document.getElementById('addeded-place');
// console.log(addededPlace);
const li =document.createElement('li');
li.innerText='panihata';
addededPlace.appendChild(li);


// addeded new section in main tag
const mainSection =document.getElementById('main-section');
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText='My foods';
section.appendChild(h1);

const ul =document.createElement('ul');

const li1 =document.createElement('li');
li1.innerText='biriyany';
ul.appendChild(li1);

const li2 =document.createElement('li');
li2.innerText='burhani';
ul.appendChild(li2);

const li3 =document.createElement('li');
li3.innerText='barger';
ul.appendChild(li3);

section.appendChild(ul);


mainSection.appendChild(section);

// set inner html directly
const sectionDress =document.createElement('section');
sectionDress.innerHTML=`
<h1>my dress section</h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>shoes</li>
</ul>
`;
mainSection.appendChild(sectionDress);


