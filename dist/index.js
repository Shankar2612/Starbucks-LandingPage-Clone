const aboutTab = document.querySelector(".about-us");
const careersTab = document.querySelector(".careers");
const socialImpactTab = document.querySelector(".social-impact");
const businessTab = document.querySelector(".business");
const orderPickupTab = document.querySelector(".order-pickup");

const about = document.querySelector(".about-us-hidden");
const careers = document.querySelector(".careers-hidden");
const impact = document.querySelector(".social-impact-hidden");
const business = document.querySelector(".business-hidden");
const order = document.querySelector(".order-pickup-hidden");

const downArrowOne = document.querySelector(".about-icon");
const downArrowTwo = document.querySelector(".careers-icon");
const downArrowThree = document.querySelector(".social-icon");
const downArrowFour = document.querySelector(".business-icon");
const downArrowFive = document.querySelector(".order-icon");

let aboutOpen = false;
let careersOpen = false;
let impactOpen = false;
let businessOpen = false;
let orderOpen = false;

aboutTab.addEventListener("click", () => {
    if (!aboutOpen) {
        about.classList.add("transition-down");
        downArrowOne.classList.add("up");
        aboutOpen = true;
    } else {
        about.classList.remove("transition-down");
        downArrowOne.classList.remove("up");
        aboutOpen = false;
    }
})

careersTab.addEventListener("click", () => {
    if (!careersOpen) {
        careers.classList.add("transition-down");
        downArrowTwo.classList.add("up");
        careersOpen = true;
    } else {
        careers.classList.remove("transition-down");
        downArrowTwo.classList.remove("up");
        careersOpen = false;
    }
})

socialImpactTab.addEventListener("click", () => {
    if (!impactOpen) {
        impact.classList.add("transition-down");
        downArrowThree.classList.add("up");
        impactOpen = true;
    } else {
        impact.classList.remove("transition-down");
        downArrowThree.classList.remove("up");
        impactOpen = false;
    }
})

businessTab.addEventListener("click", () => {
    if (!businessOpen) {
        business.classList.add("transition-down");
        downArrowFour.classList.add("up");
        businessOpen = true;
    } else {
        business.classList.remove("transition-down");
        downArrowFour.classList.remove("up");
        businessOpen = false;
    }
})

orderPickupTab.addEventListener("click", () => {
    if (!orderOpen) {
        order.classList.add("transition-down");
        downArrowFive.classList.add("up");

        orderOpen = true;
    } else {
        order.classList.remove("transition-down");
        downArrowFive.classList.remove("up");
        orderOpen = false;
    }
})