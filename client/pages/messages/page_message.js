if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageInbox.helpers({ 
    message:[
      { name: "Stephanie Plarizan", msg: Fake.paragraph(1) },
      { name: "Jim Croce", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Desond Miles", msg: Fake.paragraph(1) },
      { name: "Jeter Arce", msg: Fake.paragraph(1) }
    ]
  });

  Template.pageMessage.helpers({ 
    message:[
      { sender: "John Neal", receiver: "me", msg: "Hello there.", date: "March 16" },
      { sender: "me", receiver: "John Neal", msg: "Im alright, how are you? " + Fake.paragraph(10), date: "March 20" }
    ]
  });  

}