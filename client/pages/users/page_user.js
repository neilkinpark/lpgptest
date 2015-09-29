if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageGPProfile.helpers({ 
    contacts:[
      { name: "Stephanie Plarizan", img: "https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg" },
      { name: "Jeter Arce", img: "https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" },
      { name: "Jim Croce", img: "https://s3.amazonaws.com/uifaces/faces/twitter/jlantunez/128.jpg" },
      { name: "Desond Miles", img: "https://s3.amazonaws.com/uifaces/faces/twitter/ryanbattles/128.jpg" },
      { name: "Bordan Bognanovic", img: "https://s3.amazonaws.com/uifaces/faces/twitter/davidburlton/128.jpg" },
      { name: "Mila Kournikova", img: "https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/128.jpg" },
      { name: "William Putnam", img: "https://s3.amazonaws.com/uifaces/faces/twitter/jodyferry/128.jpg" },
      { name: "Jenny Wong", img: "https://s3.amazonaws.com/uifaces/faces/twitter/uxceo/128.jpg" }
    ]
  });

  Template.pageGPProfile.onRendered(function() {
    $('.listCarouselContact').owlCarousel({
        loop:true,
        margin: 15,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }                       
        }
    });

  });

}


