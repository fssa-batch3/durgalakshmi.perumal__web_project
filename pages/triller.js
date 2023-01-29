//card//
let card
let img_card
let a_card

div_card = document.createElement("div")
div_card.setAttribute("class", "box-1")
console.log(div_card)

// card-img //
img_card = document.createElement("img")
img_card.setAttribute("src", "./../assets/images/sbook-1.png")
img_card.setAttribute("alt", "book-img")
img_card.setAttribute("class", "tb-1")
div_card.append(img_card)

//button-for-read//
a_card = document.createElement("a")
a_card.setAttribute("class", "tbtn-1")
div_card.append(a_card)

document.querySelector("body").append(div_card)
