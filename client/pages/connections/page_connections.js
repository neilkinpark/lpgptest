// simple-todos.js
if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageConnections.helpers({
    lpconnectionsss: function(){
      var users;	
      for (var i = 0; i < 8; i++) {
      		users[i] =  Fake.user({fields: ['fullname']});
      	}
      return users;	
    },
    connections: [
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']})
    ],    
    lpconnections: [
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']}),
      Fake.user({fields: ['fullname']})            
    ]
  });
}