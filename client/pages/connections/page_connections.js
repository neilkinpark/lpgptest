// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageConnections.helpers({
    items: [
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']})    
    ]
  });

  Template.pageMembers.helpers({
    items: [
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']})    
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