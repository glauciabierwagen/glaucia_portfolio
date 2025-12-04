$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times")
    $("header").toggleClass("toggle")
  })

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times")
    $("header").removeClass("toggle")

    if ($(window).scrollTop() > 0) {
      $(".top").show()
    } else {
      $(".top").hide()
    }
  })

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault()

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    )
  })
})

const menuIcon = document.querySelector(".hamburger-menu");
 const navbar = document.querySelector(".navbar");

 menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
 });

const slideshow = document.querySelector('.slideshow')

setInterval(() => {

    const firstIcon = slideshow.firstElementChild

    firstIcon.classList.add('faded-out')

    const thirdIcon = slideshow.children[3]

    thirdIcon.classList.add('light')

    thirdIcon.previousElementSibling.classList.remove('light')

    setTimeout(() => {
        slideshow.removeChild(firstIcon)

        slideshow.appendChild(firstIcon)

        setTimeout(() => {
            firstIcon.classList.remove('faded-out')
        }, 500)
        
    }, 500)
    

}, 3000)
