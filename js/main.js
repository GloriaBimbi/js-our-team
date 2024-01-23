const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// console.log(team[0].name, team[0].role, team[0].image);
// console.log(team[1].name, team[1].role, team[1].image);
// console.log(team[2].name, team[2].role, team[2].image);
// console.log(team[3].name, team[3].role, team[3].image);
// console.log(team[4].name, team[4].role, team[4].image);
// console.log(team[5].name, team[5].role, team[5].image);

// recupero l'elemento html che mi serve
const cardContainer = document.getElementById("card-container");

// creo una funzione che genera una card con le chiavi di un singolo elemento dell'array di oggetti
function generateCard(elementNumber) {
  const card = `
        <div class="card">
            <img src="./img/${team[elementNumber].image}" alt="employy picture"/>
            <h3>${team[elementNumber].name}</h3>
            <span>${team[elementNumber].role}</span>
        </div>`;
  cardContainer.innerHTML += card;
}

// invocando la funzione creata, stampo sul DOM le informazioni di nome, ruolo e la stringa della foto

generateCard(0);
generateCard(1);
generateCard(2);
generateCard(3);
generateCard(4);
generateCard(5);
