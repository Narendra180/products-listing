export function calculateAndSetOptionsContainerPosition (styles) {
    const btnDomElement = document.querySelector("."+styles.btnContent);
    const optionsContainerDomElement = document.querySelector("."+styles["options-container"]);
    const leftValue = btnDomElement.offsetLeft + (btnDomElement.offsetWidth/2) - (optionsContainerDomElement.offsetWidth/2) + "px";
    const topValue = btnDomElement.offsetTop + btnDomElement.offsetHeight + 3 +  "px";
    optionsContainerDomElement.style.left = leftValue;
    optionsContainerDomElement.style.top = topValue;
}