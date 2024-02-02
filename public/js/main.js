

//burger btn
let navbar = document.querySelector(".navbar")
if (window.innerWidth < 992) {
    navbar.classList.add("hidden")
} else {
    navbar.classList.remove("hidden")
}
window.addEventListener("resize", () => {
    if (window.innerWidth < 992) {
        navbar.classList.add("hidden")
        
    } else {
        navbar.classList.remove("hidden")
    }
})

let burger = document.querySelector(".burger")
burger.addEventListener("click", () => {
    navbar.classList.toggle("hidden")
})


//hover navHover
let allNavHover = document.querySelectorAll(".navHover")
let bar = document.querySelector(".bar")

bar.addEventListener("mouseover", (e) => {
    if (e.target.className.includes("navHover")) {
        e.target.classList.add("barHover")
        if (e.target == allNavHover[0]) {
            e.target.classList.remove("barHover")
        } 
        e.target.addEventListener("mouseout", () => {
            e.target.classList.remove("barHover")
        })
    }
})


//bouton navbar hover
let btnWhite = document.querySelector(".btnWhite")

btnWhite.addEventListener("mouseover", () => {
    btnWhite.classList.add("hoverWhite")
    btnWhite.addEventListener("mouseout", () => {
        btnWhite.classList.remove("hoverWhite")
    })
})


//navbar Drop
let navDrop = document.querySelector(".navDrop")
navDrop.style.cursor = "pointer"

navDrop.addEventListener("click", () => {
    let arrow = navDrop.querySelector(".arrow")
    let allLi = document.querySelectorAll(".drop li")
    console.log(allLi);
    arrow.classList.toggle("arrowTop")
    allLi.forEach(li => {
        li.classList.toggle("hidden")
    });
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

imgHero.animate([
    // key frames
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-5px)' },
    { transform: 'translateY(0px)' },
    { transform: 'translateY(5px)' },
    { transform: 'translateY(0px)' }
], {
    // sync options
    duration: 4000,
    // direction: "alternate",
    iterations: Infinity
});


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
    //change bgColor and font color of each div by its index in the colorPalette
    allServicesTitle[i].addEventListener("mouseover", () => {
        let icon = allServicesTitle[i].querySelector("i")
        allServicesTitle[i].style.backgroundColor = colorPalette[i]
        allServicesTitle[i].style.color = "white"
        icon.style.color = "white"
        //reset bgColor and font color
        allServicesTitle[i].addEventListener("mouseout", () => {
            allServicesTitle[i].style.backgroundColor = "white"
            allServicesTitle[i].style.color = "black"
            icon.style.color = colorPalette[i]
        })
    })
}

//carousel
let carBtn = document.querySelector(".carBtn")
let width = 0


if (window.innerWidth > 1400) {
    width = 34.5
} else if (window.innerWidth >= 1200 && window.innerWidth < 1500) {
    width = 33.8
} else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
    width = 52.5
} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
    width = 51
}else if (window.innerWidth >= 576 && window.innerWidth < 768) {
    width = 118
}

window.addEventListener("resize", () => {
    if (window.innerWidth > 1400) {
        width = 34.5
    } else if (window.innerWidth >= 1200 && window.innerWidth < 1500) {
        width = 33.8
    } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        width = 52.5
    } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        width = 51
    }else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        width = 118
    }
})

//button click
carBtn.addEventListener("click", (e) => {
    let allBtnRound = document.querySelectorAll(".btnRound")

    if (e.target.className.includes("btnRound")) {
        //remove bg of other buttons
        allBtnRound.forEach(btn => {
            if (btn.className.includes("fill")) {
                btn.classList.toggle("fill")
            }
        });
        //add bg to target
        e.target.classList.toggle("fill")
    }

    //translate all div
    for (let i = 0; i < allBtnRound.length; i++) {
        let allcarContainer = document.querySelectorAll(".carContainer")
        let pos = 0
        //multiply movement of each div by the index of allBtnRound
        if (allBtnRound[i].className.includes("fill")) {
            pos = width*i
            allcarContainer.forEach(carContainer => {
                carContainer.style.right = `${pos}%`
            });
            console.log(pos);
        }
    }
    
})

//translate each div each 8 seconds
setInterval(() => {
    let allcarContainer = document.querySelectorAll(".carContainer")
    //save the position of the first div
    let translation = parseInt(allcarContainer[0].style.right)

    let pos = 0
    if (isNaN(translation) || translation >= width*4) {
        //if pos isNaN or is equal to the 5th button pushed
        pos = width 
    } else {
        pos = width + translation
    }
    allcarContainer.forEach(carContainer => {
        carContainer.style.right = `${pos}%`
    });
}, 8000);



//tech
let techBtn = document.querySelector(".techBtn")
let alltechBtn = document.querySelectorAll(".techBtn button")
let allTechCore = document.querySelectorAll(".techCore")

techBtn.addEventListener("click", (e) => {
    if (e.target.localName == "button") {
        //remove border color from all div
        alltechBtn.forEach(btn => {
            if (btn.className == "select") {
                btn.classList.remove("select")

            }
        });
        
        //add border color to target
        e.target.classList.add("select") 

        //add display to selected tab
        for (let i = 0; i < alltechBtn.length; i++) {
            if (alltechBtn[i].className == "select") {
                allTechCore[i].classList.add("selected")
            } else {
                allTechCore[i].classList.remove("selected")
            }
        }

    }  
    
})



//pricing
let btnPurple = document.querySelector(".btnPurple")

btnPurple.addEventListener("click", (e) => {
    
    if (e.target == btnPurple) {
        e.target.firstElementChild.classList.toggle("btnMove")
        e.target.previousElementSibling.classList.toggle("purple")
        e.target.nextElementSibling.classList.toggle("purple")
    } else if (e.target.localName == "button") {
        e.target.classList.toggle("btnMove")
        e.target.parentElement.previousElementSibling.classList.toggle("purple")
        e.target.parentElement.nextElementSibling.classList.toggle("purple")
    }

    let allp = document.querySelectorAll(".pricingBtn p")
    let allPrice = document.querySelectorAll(".price")
    let allNum = document.querySelectorAll(".num")
    let tab1 = [0,19,29,49]
    let tab2 = [0, 190, 290, 490]
    for (let i = 0; i < allPrice.length; i++) {
        if (allp[0].className == "purple") {
            allNum[i].innerText = tab1[i]
            allPrice[i].innerText = "/ month"
        } else {
            allNum[i].innerText = tab2[i]
            allPrice[i].innerText = "/ year"
        }
    }
})



//cards
let allCard = document.querySelectorAll(".card")

allCard.forEach(card => {
    let cTitle = card.querySelector(".cTitle")
    let arrow = card.querySelector(".arrow")
    let cardText = card.querySelector(".cardText")

    //couleur blueue au hover
    card.addEventListener("mouseover", () => {
        cTitle.classList.add("blue")
        cTitle.classList.remove("basicGrey")

        arrow.classList.add("arrowBlue")
        arrow.classList.remove("arrowGrey")
    })

    // affiche le texte au clic
    cTitle.addEventListener("click", () => { 
        cardText.classList.toggle("hidden") 
        arrow.classList.toggle("arrowTop") 
    }) 

    //enleve la couleur bleue si le texte est cahé
    card.addEventListener("mouseout", () => {
        if (cardText.className.includes("hidden")) {
            cTitle.classList.remove("blue")
            cTitle.classList.add("basicGrey")
    
            arrow.classList.remove("arrowBlue")
            arrow.classList.add("arrowGrey")
        }
    })
});