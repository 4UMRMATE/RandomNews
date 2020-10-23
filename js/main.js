document.addEventListener("DOMContentLoaded", () => {
    let dot   = document.querySelectorAll(".dot"),
        slide = document.querySelectorAll(".news-main"),
        sliderIndex = 1;
    
    showSlides(sliderIndex)

    document.addEventListener("keydown", function(event) {
        if (event.key == "ArrowLeft") {
            showSlides(sliderIndex - 1);
            --sliderIndex;
        } else if (event.key == "ArrowRight") {
            showSlides(sliderIndex + 1)
            ++sliderIndex;
        }
    }, true)

    //  currentSlide();

    dot.forEach((elem) => {
        elem.addEventListener("click", function clickButton() {
            let thisValue = this.attributes.value.value;
            sliderIndex = dot[thisValue].attributes.value.value;
            showSlides(sliderIndex)
        })
    })

    function showSlides(n) {
        for (i = 0; i < 3; i++) {
            dot[i].className = dot[i].className.replace(" active-dot", "");
        }
        dot[n].className += " active-dot";

        for (i = 0; i < 3; i++) {
            slide[i].style.display = "none";
        }
        slide[n].style.display = "flex"
    }

    /*
    function currentSlide() {
        let activeDot = dot[sliderIndex],
            activeSlide = slide[sliderIndex];

        activeSlide.style.display = "flex";
        activeDot.className += " active-dot";
    }
    */
});