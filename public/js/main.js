
//bouton navbar hover
let btnWhite = document.querySelector(".btnWhite")

btnWhite.addEventListener("mouseover", () => {
    btnWhite.classList.add("hoverWhite")
    btnWhite.addEventListener("mouseout", () => {
        btnWhite.classList.remove("hoverWhite")
    })
})


//bouton hero hover
let btnWhite2 = document.querySelector(".btnWhite2")

btnWhite2.addEventListener("mouseover", () => {
    btnWhite2.classList.add("hoverBgWhite")
    btnWhite2.addEventListener("mouseout", () => {
        btnWhite2.classList.remove("hoverBgWhite")
    })
})


//image hero animation
let imgHero = document.querySelector(".headerImg img")


setInterval(() => {
    imgHero.style.bottom = "30px"
}, 1000);


//bouton gradient hover section voluptatem
let btnColor = document.querySelector(".btnColor")

btnColor.addEventListener("mouseover", () => {
    btnColor.classList.add("btnColorHover")
    btnColor.addEventListener("mouseout", () => {
        btnColor.classList.remove("btnColorHover")
    })
})

// services hover
let colorPalette = ["#47aefe", "#ffb300", "#e80168", "#ffbb2c", "#ff5828", "#0edbce"]
let allServicesTitle = document.querySelectorAll(".sContainer")

for (let i = 0; i < allServicesTitle.length; i++) {
    allServicesTitle[i].addEventListener("mouseover", () => {
        let icon = allServicesTitle[i].querySelector("i")
        allServicesTitle[i].style.backgroundColor = colorPalette[i]
        allServicesTitle[i].style.color = "white"
        icon.style.color = "white"

        allServicesTitle[i].addEventListener("mouseout", () => {
            allServicesTitle[i].style.backgroundColor = "white"
            allServicesTitle[i].style.color = "black"
            icon.style.color = colorPalette[i]
        })
    })
    
}