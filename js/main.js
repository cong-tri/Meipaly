$(".slick").slick({
  infinite: true,
  slidesToShow: 5,
  speed: 1100,
  arrows: false,
  dots: true,
}),
  $('[data-fancybox="gallery"]').fancybox({ loop: true }),
  $(".counter").countUp();
function checkForm(){
      var email = document.getElementById("email").value;
      var username = document.getElementById("username").value;
      var feedback = document.getElementById("feedback").value;
      if (!email || !username || !feedback) {
        alert(
          "Username, Email, Feedback must be required!"
        );
        return false;
      }
      alert("Congratulation! Your feedback information has been sent successfully!");
      return true;
}

