const items = document.querySelectorAll(".item");
const menus = document.querySelectorAll(".menu");
const overlay = document.querySelectorAll(".overlay");

const expand = (item, i) => {
    let overlay = item.childNodes[1];
    let menu = item.childNodes[3];

    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });
    //item
    gsap.killTweensOf(items);
    gsap.to(items, {
        width: item.clicked ? "10vw" : "8vw",
        duration: 1,
        ease: "elactic(1, .3)"
    });
    gsap.killTweensOf(item);
    item.clicked = !item.clicked;
    gsap.to(item, {
        width: item.clicked ? "65vw" : "15vw",
        duration: 1.5,
        ease: "elactic(1, .3)"
    })
}

items.forEach((item, i) => {
    item.clicked = false;
    item.childNodes[1].clicked = false;
    item.childNodes[3].clicked = false;
    item.addEventListener("click", () => expand(item, i));
});
//daki pra frente é meu 
var data = new Date()
var hora = data.getHours

if (hora <= 11) {
    document.body.style.background = '#eed37c'

} else if (hora <= 18) {
    document.body.style.background = '#f7b68c'
} else { document.body.style.background = '#2b1346' }