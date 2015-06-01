if (Meteor.isClient) {
  // This code only runs on the client
  Template.pageInbox.helpers({ 
    message:[
      { name: "John Neal", msg: "Hello World." },
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

}