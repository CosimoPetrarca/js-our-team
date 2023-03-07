'Use Strict'

/* creo un array di oggetti */
const teamMembers = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }
];

/* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */
for (let i = 0; i < teamMembers.length; i++) {
    console.log(`Membro ${i+1}:`);
    console.log(`Nome: ${teamMembers[i].nome}`);
    console.log(`Ruolo: ${teamMembers[i].ruolo}`);
    console.log(`Foto: ${teamMembers[i].foto}`);
  }
  
