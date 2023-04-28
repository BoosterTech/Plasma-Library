{
    const travelIntoSpaceElement = document.querySelector(".js-travelIntoSpaceButton");
    const contentElement = document.querySelector(".js-contentContainer");
    const expandHorizonElement = document.querySelector(".js-expandHorizonButton");

    const onClickChangeBackground = () => {
        const bodyElement = document.querySelector(".js-body");

        bodyElement.classList.toggle("backgroundChange");
        contentElement.classList.toggle("exposeBackground");

        travelIntoSpaceElement.innerText = bodyElement.classList.contains("backgroundChange") ? "TRAVEL INTO CENTRAL STAR" : "TRAVEL INTO SPACE";
    }

    const onClickChangeScreenSize = () => {
        const menuElement = document.querySelector(".js-menu");
        const mainHeaderElement = document.querySelector(".js-header");
        const footerElement = document.querySelector(".js-footer");
        const authorElement = document.querySelector(".js-headerAuthor");
        const line1Element = document.querySelector(".js-booksLine1");
        const line2Element = document.querySelector(".js-booksLine2");
        const unpublishedImageElement = document.querySelector(".js-unpublishedImage");
        const descriptionLeftElement = document.querySelector(".js-booksDescriptionLeft");

        const changeScreenProperties = () => {
            contentElement.classList.toggle("fullScreen");
            menuElement.classList.toggle("menuAlign");
            line1Element.classList.toggle("extendLine1");
            line2Element.classList.toggle("extendLine2");
            unpublishedImageElement.classList.toggle("stillImage");
            mainHeaderElement.classList.toggle("expandTop");
            footerElement.classList.toggle("expandBottom");
            authorElement.classList.toggle("authorNameAdjust");
            descriptionLeftElement.classList.toggle("booksLeftDescriptionAdjust");
        }

        const narrowScreen = () => {
            changeScreenProperties();
            expandHorizonElement.innerText = "EXPAND THE HORIZON";
        }

        const expandScreen = () => {
            changeScreenProperties();
            expandHorizonElement.innerText = "NARROW THE HORIZON";
        }
        contentElement.classList.contains("fullScreen") ? narrowScreen() : expandScreen();
    }

    const init = () => {
        expandHorizonElement.addEventListener("click", onClickChangeScreenSize);
        travelIntoSpaceElement.addEventListener("click", onClickChangeBackground);
    }

    init();
}