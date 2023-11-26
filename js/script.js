const team = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', picture: 'img/wayne-barnett-founder-ceo.jpg'},
    {name: 'Angela Caroll', role: 'Chief Editor', picture: 'img/angela-caroll-chief-editor.jpg'},
    {name: 'Walter Gordon', role: 'Office Manager', picture: 'img/walter-gordon-office-manager.jpg'},
    {name: 'Angela Lopez', role: 'Social Media Manager', picture: 'img/angela-lopez-social-media-manager.jpg'},
    {name: 'Scott Estrada', role: 'Developer', picture: 'img/scott-estrada-developer.jpg'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', picture: 'img/barbara-ramos-graphic-designer.jpg'},
];

const wrapper = document.querySelector('.wrapper');
createCard(team, wrapper);

// ==== Functions ====

function createCard(cardInfo, wrapper) {
    for(let i = 0; i < cardInfo.length; i++) {
        const member = cardInfo[i];
        wrapper.innerHTML += 
        `
        <!-- Article ${i} -->
        <article class='card'>
            <div class='imgWrapper'>
                <img src="${member.picture}" alt='Picture of ${member.name}'>
            </div>
            <div class='infoWrapper'>
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        </article>
        `;
    }
}