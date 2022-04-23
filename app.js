let btn = document.querySelector(".search-box__btn")

btn.addEventListener("click", function () {

    this.parentElement.classList.toggle('open');
})