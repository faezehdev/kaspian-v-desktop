let filterBtn = document.querySelectorAll(".filterBtn")
filterBtn[0].classList.add("activeFilterBtn")
filterBtn.forEach(element => {
    element.addEventListener("click" , function(params) {
        $(".filterBtn").removeClass("activeFilterBtn")
        element.classList.add("activeFilterBtn")
    })
});