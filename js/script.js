// Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });


let removeInfo = document.querySelectorAll('.container-pic')
    
for(let removeText of removeInfo){
    
    removeText.onclick = function (event) {
        this.remove();
    
    
    }
      
}

let clicked = false;

document.querySelector('.container-pic').onclick = function (event){
    
    if(clicked == false) {
        let row = 
            `<div class="creative-skills row justify-content-center my-5 text-center">
                <div class="col-md-6 col-lg-4 py-3">
                    <img class="skill-pic" src="sneakers.jpeg" style="width: 360px" alt="sneaker">
                </div>
                
                
                <div class="col-md-6 col-lg-4 py-3">
                    <img class="skill-pic" src="funko.jpeg" style="width: 360px" alt="sneaker">
                </div>
                
                
                <div class="col-md-6 col-lg-4 py-3">
                    <img class="skill-pic" src="sneaker2.jpeg" style="width: 100%" alt="sneaker">
                </div>
            </div>`;

    document.querySelector('.container-pic').innerHTML += row; 
    document.querySelector('.pic-div').remove();
    clicked = true;
    } else {
       let row = 
       `<div class="pic-div row justify-content-center my-5 text-center">

            <div class="col-md-6 col-lg-4 py-3">
                <section class="section">
                    <span class=" fa-stack fa-4x">
                    <i class="float1 fas fa-square fa-stack-2x"></i>
                    <i class=" fas fa-palette fa-stack-1x fa-inverse" style="color: #a08351;"></i>
                </span>
                <h2>Painter</h2>
                <p class="lead">The sneaker is my canvas. With over a decade of experience painting has pushed the bounderies of my creativity.</p>
                </section>
                
            </div>

            <div class="col-md-6 col-lg-4 py-3">
                <section class="section">
                    <span class=" fa-stack fa-4x">
                        <i class="float1 fas fa-square fa-stack-2x"></i>
                        <i class=" fas fa-toolbox fa-stack-1x fa-inverse" style="color: #1f1e1e;"></i>
                    </span>
                    <h2>Sculpter</h2>
                    <p class="lead">Stepping out of my comfort zone. Molding clay figures has taught me the importance of structural foundation.</p>
                </section>
            </div>

            <div class="col-md-6 col-lg-4 py-3">
                <section class="section">
                    <span class=" fa-stack fa-4x">
                        <i class="float1 fas fa-square fa-stack-2x"></i>
                        <i class=" fas fa-money-check-alt fa-stack-1x fa-inverse" style="color: #01701c;"></i>
                    </span>
                    <h2>Sales Man</h2>
                    <p class="lead">Five years of sales has taught me timing is everything and you never get a second chance to make a first impression.</p>
                </section>
            </div>

        </div>`;

        document.querySelector('.container-pic').innerHTML += row;
        document.querySelector('.creative-skills').remove();
        clicked = false;
    }


}




