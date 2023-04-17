function reveal() {
    var reveals = document.querySelectorAll(".appear");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("inview");
      } else {
        reveals[i].classList.remove("inview");
      }
    }
  }
  window.addEventListener("scroll", reveal);


  // JS

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElement1 = document.querySelectorAll('.fade');
hiddenElement1.forEach((el) => observer.observe(el));


const hiddenElement2 = document.querySelectorAll('.fadeIn');
hiddenElement2.forEach((el) => observer.observe(el));


const hiddenElement3 = document.querySelectorAll('.fadeLeftBlur');
hiddenElement3.forEach((el) => observer.observe(el));


const hiddenElement4 = document.querySelectorAll('.slideLeft');
hiddenElement4.forEach((el) => observer.observe(el));


const hiddenElement5 = document.querySelectorAll('.slideRight');
hiddenElement5.forEach((el) => observer.observe(el));


