// Games extracted from Instagram screenshots
const games = [
    { name: "WWE 2K", img: "image/wwe2k.jpg" },
    { name: "Cricket 22", img: "image/cricket22.jpg" },
    { name: "Call of Duty: Modern Warfare III", img: "image/codmw3.jpg" },
    { name: "Elden Ring", img: "image/eldenring.jpg" },
    { name: "Hogwarts Legacy", img: "image/hogwarts.jpg" },
    { name: "Dragon’s Dogma 2", img: "image/dragonsdogma2.jpg" },
    { name: "The Last of Us Part I", img: "image/tlou1.jpg" },
    { name: "Marvel’s Spider-Man", img: "image/spiderman.jpg" },
    { name: "Spider-Man Miles Morales", img: "image/miles.jpg" },
    { name: "Ghost of Tsushima", img: "image/ghost.jpg" },
    { name: "The Crew Motorfest", img: "image/crew.jpg" },

    // Bundle Offers
    //{ name: "Any 3 Days Rent", img: "images/rent3.jpg" },
    //{ name: "Any 6 Days Rent", img: "images/rent6.jpg" },
    { name: "Blood and Glory", img: "image/Bag.jpg" },
    { name: "Any 10 Games – ₹2399", img: "image/10games.jpg" },
];

// Inject cards into grid
const grid = document.querySelector(".grid");

games.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${game.img}" alt="${game.name}">
        <h3>${game.name}</h3>
        <span class="dm-tag">DM for Price</span>
    `     ;

    grid.appendChild(card);
});
