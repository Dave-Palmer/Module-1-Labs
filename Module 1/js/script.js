const lager = document.querySelector('#lager')
const ipa = document.querySelector('#ipa')
const stout = document.querySelector('#stout')

const option = document.querySelector("#selector")
const button = document.querySelector("#butt")
const expandButton = document.querySelector("#expand")
const paragraph = document.querySelector(".hideme")

let lagerScore = 0
let ipaScore = 0
let stoutScore = 0


button.addEventListener('click', function (){
    if (option.value === "lager") {
        lagerScore += 1
        lager.textContent = lagerScore
        if (lagerScore > ipaScore && lagerScore > stoutScore) {
            lager.style.color = "green"
            ipa.style.color = "red"
            stout.style.color = "red"
        } 
        }
    
    else if (option.value === "ipa") {
        ipaScore += 1
        ipa.textContent = ipaScore
        if (ipaScore > lagerScore && ipaScore > stoutScore) {
            ipa.style.color = "green"
            lager.style.color = "red"
            stout.style.color = "red"
        } 
        }
    
    else if (option.value === "stout") {
        stoutScore += 1
        stout.textContent = stoutScore
        if (stoutScore > lagerScore && stoutScore > ipaScore) {
            stout.style.color = "green"
            lager.style.color = "red"
            ipa.style.color = "red"
        }
    }
    else {
        console.log("pick an option")
    }
})

expandButton.addEventListener('click', function () {
    paragraph.classList.toggle("show");

})