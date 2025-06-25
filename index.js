const card_1 = document.querySelector(".card__item_1");
const card_2 = document.querySelector(".card__item_2");
const card_3 = document.querySelector(".card__item_3");
const popup = document.querySelector(".popup");
const popupButtonExit = document.querySelector(".popup__button_exit");
const popupTitle = document.querySelector(".popup__title") ;
const popupImage = document.querySelector(".popup__image") ;
const popupText = document.querySelector(".popup__text") ;
const titleCard_1 = card_1.querySelector(".card_title") ;
const titleCard_2 = card_2.querySelector(".card_title") ;
const titleCard_3 = card_3.querySelector(".card_title") ;

console.log(titleCard_1)

card_1.addEventListener("click", function() {
    console.log("click card_1")
    popupTitle.textContent = titleCard_1.textContent;
    popupImage.src = "./img/foto5.jpg"
    popupText.textContent = `Ты слышишь, как хрустит гравий под колёсами, как шепчет трава, как река булькает у брода, 
      как шумит лес. Знаешь, где закат ложится на воду, где в поле есть одинокое дерево, под которым — лучший привал. 
      Велосипед учит видеть детали, чувствовать ритм — не города, а земли.`
    openPopup(popup);
})

card_2.addEventListener("click", function() {
    console.log("click card_2")
    popupTitle.textContent = titleCard_2.textContent;
    popupImage.src = "./img/foto11.jpg"
    popupText.textContent = `На машине ты спешишь. Пешком — устаёшь. А на велике... ты ловишь ветер в лицо, 
      лавируешь между улочек, замечаешь граффити, которых не видел годами. Город становится живым — дышит, шумит, 
      играет с тобой. Иногда, конечно, кидается ямами и маршрутками, но кто из нас идеален?`
    openPopup(popup);
})

card_3.addEventListener("click", function() {
    console.log("click card_3")
    popupTitle.textContent = titleCard_3.textContent;
    popupImage.src = "./img/foto7.jpg"
    popupText.textContent = `Река — это ориентир, это место для привала, это купание, даже если вода +14. 
      Это когда ты добрался до точки маршрута, бросил велик в траву, сел у берега, достал термос, и просто смотришь. 
      Потому что больше ничего не нужно.`          
    openPopup(popup);
})


function openPopup(elementPopup){
    elementPopup.classList.add("popup__opened")
}

function closePopup(elementPopup){
    elementPopup.classList.remove("popup__opened")
}

popupButtonExit.addEventListener("click", function(){
closePopup(popup)
})

