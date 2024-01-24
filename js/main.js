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

// // stampo in console i dati che mi servono di tutti gli oggetti dell'atrray
// for (let employy of team) {
//   console.log(employy.name, employy.role, employy.image);
// }

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

for (let i = 0; i < team.length; i++) {
  generateCard(i);
}
