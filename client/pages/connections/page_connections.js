// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  var nems = [
    "Neil Kim Park", "John Neal", "Johnny Gonzalez", "Ricky Mouse", "Carl Johnson", "Mike Pulaski", "Jamaal Wallace", "Sasha Vucevic", "Maria Cristina Barbosa", "Luke Gromfort"
  ];
  
  Template.pageConnections.helpers({
    items: [
      {fullname: Fake.fromArray(nems), img: "images/pics/kim.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/pics/man2.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/pics/man.jpg"},
      {fullname: Fake.fromArray(nems), img: "http://globalemag.com/wp-content/uploads/2014/04/Indian-Model-Parineeti-Chopra-Biography-And-Profile-006.jpg"},
      {fullname: Fake.fromArray(nems), img: "http://f9view.com/wp-content/uploads/2013/07/Demi-Lovato-Song-List-Profile-Pics.jpg"},
      {fullname: Fake.fromArray(nems), img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Dr_Johnny_Hon.profile_shot.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/pics/man.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "http://f9view.com/wp-content/uploads/2013/07/Demi-Lovato-Song-List-Profile-Pics.jpg"}
    ]
  });

  Template.pageMembers.helpers({
    items: [
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"},
      {fullname: Fake.fromArray(nems), img: "images/baby.jpg"}
    ]
  });

  Template.pageConnections.onRendered(function() {
    $('#nav-by-types').owlCarousel({
        margin: 5,
        dots: false,
        responsive:{
          0:{
            items:2,
            stagePadding: 15,          
          },
          400: {
            items:3,
            stagePadding: 15,
          },
          768: {
            items: 6,
            stagePadding: 0
          }
        }
    });

  });

  Template.pageMembers.onRendered(function() {
    $('#nav-by-types').owlCarousel({
        margin: 5,
        dots: false,
        responsive:{
          0:{
            items:2,
            stagePadding: 15,          
          },
          400: {
            items:3,
            stagePadding: 15,
          },
          768: {
            items: 6,
            stagePadding: 0
          }
        }
    });

  }); 

}