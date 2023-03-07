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
    console.log(`Membro ${i + 1}:`);
    console.log(`Nome: ${teamMembers[i].nome}`);
    console.log(`Ruolo: ${teamMembers[i].ruolo}`);
    console.log(`Foto: ${teamMembers[i].foto}`);
}

/* Stampare le stesse informazioni su DOM sottoforma di stringhe */
const teamlist = document.getElementById("team-list");

for (let i = 0; i < teamMembers.length; i++) {
    /* mi crea i 6 div */
    const members = document.createElement("div");
    members.classList.add("member");
    teamlist.append(members);

    const name = document.createElement("p");
    name.innerHTML = `Nome: ${teamMembers[i].nome}`;
    members.append(name);

    const rule = document.createElement("p");
    rule.innerHTML = `Ruolo: ${teamMembers[i].ruolo}`;
    members.append(rule);

    const img = document.createElement("img");
    img.src = "img/" + teamMembers[i].foto;
    members.append(img);
}


