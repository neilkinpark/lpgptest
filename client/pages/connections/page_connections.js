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
}