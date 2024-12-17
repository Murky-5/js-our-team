const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

let cardContainerElm = document.querySelector(".card_container")
const formElm = document.getElementById("form")
let inputElms = document.querySelectorAll(".info")
console.log(inputElms)
let cards = "";

function cardAdder(added) {for (let i = 0; i < added.length; i++) {
    let {name, role, email, img} = added[i]
    cards += `
      <div class="card d-flex">
        <div class="img_container">
          <img src="./${img}" alt="${name}">
        </div>
        <div class="info_container d-flex">
          <h3>${name.toUpperCase()}</h3>
          <p>${role}</p>
          <p>${email}</p>
        </div>
      </div>
    `
    cardContainerElm.innerHTML = cards
}}

for (let i = 0; i < teamMembers.length; i++) {
  let {name, role, email, img} = teamMembers[i]
  cards += `
    <div class="card d-flex">
      <div class="img_container">
        <img src="./${img}" alt="${name}">
      </div>
      <div class="info_container d-flex">
        <h3>${name.toUpperCase()}</h3>
        <p>${role}</p>
        <p>${email}</p>
      </div>
    </div>
  `
  cardContainerElm.innerHTML = cards
}


let {name, role, email, img} = {...teamMembers}
formElm.addEventListener("submit", (sub) => {
    sub.preventDefault()
    name = inputElms[0].value 
    role = inputElms[1].value
    email = inputElms[2].value
    img = inputElms[3].value

  let addedCard = {
    name,
    role,
    email,
    img,
  }

  for (let i = 0; i < 1; i++) {
    let {name, role, email, img} = addedCard
    cards += `
      <div class="card d-flex">
        <div class="img_container">
          <img src="${img}" alt="${name}">
        </div>
        <div class="info_container d-flex">
          <h3>${name.toUpperCase()}</h3>
          <p>${role}</p>
          <p>${email}</p>
        </div>
      </div>
    `
    cardContainerElm.innerHTML = cards
}
    teamMembers.push(addedCard)
})
