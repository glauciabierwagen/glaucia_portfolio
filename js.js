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

let mensagem = document.querySelector(".message") ;

// mostra a mensagem
function showMessage(){   
   message.style.display = "block";   
 }
// esconde a mensagem
function hideMessage(){
  message.style.display = "none"; 
}