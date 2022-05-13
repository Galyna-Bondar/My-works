
$(function() {
        $(".hamburger, #page_overlay, .sidemenu a").on('click', function(){
            $("#mobile_menu_wrap .hamburger").toggleClass("is-active");
            $("body").toggleClass("open");
        });
    });


  $(window).on('scroll', function(){
   
   if($(window).scrollTop()>$(".first_screen").height()){
       if(!$("header").hasClass("fixed_nav")){
          $("header").addClass("fixed_nav"); 
       }
   }else{
       if($("header").hasClass("fixed_nav")){
       $("header").removeClass("fixed_nav");
   }
 }
    
});


$(".main_menu a").on('click', function(e){
    e.preventDefault();

    const top = $($(this).attr("href")).offset().top-79;  
    $("html, body").animate({scrollTop:top+'px'}, 500);   

});


$(".arrow_wrap").on('click', function(e){
    e.preventDefault();

    const top = $(".arrow_wrap").offset().top;  
    $("html, body").animate({scrollTop:top+'px'}, 500);   

});









$(function(){
    $('#slider_first').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: true
    });
});




$(function getNews(){  
    $.ajax({
      url:'json_file/news.json',
      type:'get',
      dataType:'json',
          success:function(json){
            let html ='';
            json.forEach((el)=> {
                html += `
                    <div class="card_1_see cards">
                      <img width="100%"src="${el.pic}" alt="">

                        <div class="card_text">
                            <h4>${el.title}</h4>
                            <p>${el.description}</p>

                            <div class="author">
                                  <div class="athor_pic"> <img src="${el.avatar}" alt=""></div>
                                  <div class="name">${el.author}</div>
                                  <div class="date">${el.date}</div>
                            </div>
                        </div>
                      </div>`;
                  });

             $(".ajax").html(html);
             sliderInit($('#slider'));
          }
      });
  });


//$("#slider_2").slick({


    function sliderInit($slider_2){
        if(!$slider_2.hasClass('slick-initialized')) {

$("#slider_second").slick({
            speed:3000,
            slidesToShow: 3,
            dots: true,
            autoplay:true,
            autoplaySpeed: 250,
            responsive: [
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint:600,
                    settings:{
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint:400,
                    settings:{
                        slidesToShow: 1
                    }
                },

            ]
        });
    }
}




lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    thumbnail: true,
    zoom: true,
    actualSize: true,
    animateThumb: true,
    zoomFromOfigin: true,

  //  licenseKey: "0000-0000-000-0000",
   // speed: "500"
});




  $(function(){ 
      $("#init_map").on('click', function(){
   $(this).remove();

    
          var map = L.map('my_map').setView([40.71216442573062, -74.00905137419346], 13);
          L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          var myIcon = L.icon({
              iconUrl: 'assets/plugins/leaflet/images/Pin.png',
              iconAnchor: [12, 41],
              popupAnchor: [40, -21],
          });


        const marker =  L.marker([40.71216442573062, -74.00905137419346], {icon:myIcon}).addTo(map)
          .bindPopup(`
          <div class="map_popup">
           <img src="assets/images/new_york_popup.jpg"" alt="">
              <div class="map-info">
                  <b>New York City!!!<br>
                    Come to us!</b>
              </div>
          </div>
          `);

          marker.on('click', function(){
              document.getElementById('to_google_map').click();
          
         // window.location.href='https://www.google.com/maps/@40.6976684,-74.2605517,10z';
          })
      })  



      $("#registration_wrap").on('submit', function(e){
        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        $("#name").removeClass("error");
        $("#email").removeClass("error");

        if (name.length <=1) {
            $("#name").addClass("error");
            alert.danger('Please, enter your name!', true);
        }else if (email.length<=1){
            $("#email").addClass("error");
            alert.danger('Please, enter your email!', true);
        }
        else {
            $("#name").removeClass("error");
            $("#email").removeClass("error");
        }
    });



      $("#registration_wrap").on('submit', function(e){
          e.preventDefault();
  
       const BOT_TOKEN = '5040909885:AAGtPX_nug8vv5yK6dfzQ5G03PyJ6QVOu7g';
            /*
         @get_id_bot
         /get_id
         */
    
       const CHAT_ID ='-1001513438907';
       let text =encodeURI("<b>Name:</b> "+$("#name").val()+"\n<b>Email:</b> "+$("#email").val());


       $.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`, (json)=>{
          if(json.ok){
              $("#registration_wrap").trigger('reset');
              alert("Message successfully send");
          }else{
              alert(json.description);
          }

       });

      })




  });


/*
  $("#registration_wrap").on('submit', function(){
  
      if ($("#name").val() = '' ) {
        alert("Please, enter your name");
      }

      if ($("#email").val() = '' ) {
        alert("Please, enter your email");
      }

    });
*/