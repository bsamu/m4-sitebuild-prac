let arr = [
    {
        title: "Mango Bay",
        sub: "Mad Scientist Beer",
        text: "Pale Ale - American"
    },
    {
        title: "Távoli Galaxis",
        sub: "Rothbeer Brewery",
        text: "IPA - American"
    },
    {
        title: "Flying Rabbit AIPA",
        sub: "MONYO Brewing Co.",
        text: "IPA - American"
    },
    {
        title: "Liquid Cocaine",
        sub: "Mad Scientist Beer",
        text: "IPA - Imperial"
    },
    {
        title: "Organic Chocolate Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - English"
    },
    {
        title: "Bracia",
        sub: "Thornbridge Brewery",
        text: "Strong Ale - English"
    },
    {
        title: "Oatmeal Stout",
        sub: "Samuel Smith Old Brewery",
        text: "Stout - Oatmeal"
    },
    {
        title: "Black Tokyo Horizon",
        sub: "BrewDog",
        text: "Stout - American Imperial"
    },
    {
        title: "Vintage Ale",
        sub: "Fuller's",
        text: "Old Ale"
    },
    {
        title: "All the Leaves are Brown",
        sub: "Tempest Brewing Company",
        text: "Brown Ale - American"
    }
]

// const result = (item) => {
//     return `<div class="card">
//         <div class="index">${arr.indexOf(item) + 1}</div>
//     </div>`
// }
const beerCard = (item) => {
    return `
        <div class="card">
            <div class="index">${arr.indexOf(item) + 1}</div>
            <h2>${item.title}</h2>
            <div class="sub">${item.sub}</div>
            <div class="text">${item.text}</div>
            <button><span class="buttonText">details</span><span class="arrow material-icons">arrow_forward</span></button>
        </div>`
}
// console.log(result)
// <div class="index">${1 + 1}</div>

function loadEvent() {
    const container = document.querySelector("#container")
    // container.insertAdjacentHTML("beforeend", item)
    for (const item of arr) {
        container.insertAdjacentHTML("beforeend", beerCard(item))
    }

    console.log('the page has loaded');
}

window.addEventListener("load", loadEvent);