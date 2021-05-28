
var myVar = setInterval(setColor, 2000);

function setColor() {
  var x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myVar);
}



$('.container').fsScroll()



$('.container').fsScroll({

timing:'smooth',
duration:1000,

selectors: {
    
        sections:'.sections',
    
        section:'.section',
    
        page:'.page',
    
        active:'.active'
    
      }}
    )
;




  $('.owl-carousel').owlCarousel({
        loop:true,
        dots:true,
        margin:20,
        autoplay:true,
        autoplayHoverPause: true ,
        slidetransition:'linear',
        
 

nav:true,
        autoplayTimeout: 1000,
       
      
      
        responsive:{
            0:{
                items:2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

   

    $(document).ready(function(){
       
})



