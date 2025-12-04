 const menuIcon = document.querySelector(".hamburger-menu");
 const navbar = document.querySelector(".navbar");

 menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
 });

 
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

