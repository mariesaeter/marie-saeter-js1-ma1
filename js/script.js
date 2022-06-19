const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = [(complain = complain())];

function complain() {
  console.log("Meow!");
}

// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.className = "subheading";

// Question 5
paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
const resultsContainer = document.querySelector(".results");

const color = "yellow";
resultsContainer.innerHTML += `
<p style="background: ${color}">New paragraph </p>
`;

// Question 7
function createlist(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

const catNames = createlist(cats);

// Question 8
const catContainer = document.querySelector(".cat-container");

let html = "";

function createcats(cats) {
  for (let i = 0; i < cats.length; i++) {
    let age = "Age unknown";
    if (cats[i].age) {
      age = cats[i].age;
    }

    html += `<div>
    <h5>${cats[i].name}</h5>
    <P>${age}</p>
    </div>`;
  }
  return html;
}

catContainer.innerHTML = createcats(cats);
