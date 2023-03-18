//Nav section readjusting
let expandHorizonElement = document.querySelector(".js-expandHorizonButton");
let contentElement = document.querySelector(".js-contentContainer");
let menuElement = document.querySelector(".js-menu");
let mainHeaderElement = document.querySelector(".js-header");
let footerElement = document.querySelector(".js-footer");
let travelIntoSpaceElement = document.querySelector(".js-travelIntoSpaceButton");
let bodyElement = document.querySelector(".js-body");
let authorElement = document.querySelector(".js-headerAuthor");
//adjusting width of seperation lines
let line1Element = document.querySelector(".js-booksLine1");
let line2Element = document.querySelector(".js-booksLine2");
//Switching off an expansion of'unpublishedBooksImage'
let unpublishedImageElement = document.querySelector(".js-unpublishedImage");
//adjusting description of 2nd book
let descriptionLeftElement = document.querySelector(".js-booksDescriptionLeft")

expandHorizonElement.addEventListener("click", () => {
    if (contentElement.classList.contains("fullScreen")) {

        contentElement.classList.toggle("fullScreen");
        menuElement.classList.toggle("menuAlign");
        expandHorizonElement.innerText = "EXPAND THE HORIZON";
        line1Element.classList.toggle("extendLine1");
        line2Element.classList.toggle("extendLine2");
        unpublishedImageElement.classList.toggle("stillImage");
        mainHeaderElement.classList.toggle("expandTop");
        footerElement.classList.toggle("expandBottom");
        authorElement.classList.toggle("authorNameAdjust");
        descriptionLeftElement.classList.toggle("booksLeftDescriptionAdjust");
    }
    else {
        contentElement.classList.toggle("fullScreen");
        menuElement.classList.toggle("menuAlign")
        expandHorizonElement.innerText = "NARROW THE HORIZON";
        line1Element.classList.toggle("extendLine1");
        line2Element.classList.toggle("extendLine2");
        unpublishedImageElement.classList.toggle("stillImage");
        mainHeaderElement.classList.toggle("expandTop");
        footerElement.classList.toggle("expandBottom");
        authorElement.classList.toggle("authorNameAdjust");
        descriptionLeftElement.classList.toggle("booksLeftDescriptionAdjust");
    }
})

travelIntoSpaceElement.addEventListener("click", () => {
    bodyElement.classList.toggle("backgroundChange");
    contentElement.classList.toggle("exposeBackground");

    travelIntoSpaceElement.innerText = bodyElement.classList.contains("backgroundChange") ? "TRAVEL INTO CENTRAL STAR" : "TRAVEL INTO SPACE";
})