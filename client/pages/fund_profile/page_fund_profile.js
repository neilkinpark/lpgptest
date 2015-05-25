// 
if (Meteor.isClient) {
  // This code only runs on the client
  Template.boxKeyContacts.helpers({
    contacts: [
      { name: "John Neal Doe" },
      { name: "Sarah Pevitkin" },
      { name: "Annika Kournikova"},
      { name: "Gianis Antetuokompo" },
      { name: "Antonis Papodoupulus" }
    ]
  });

  Template.boxTeamBios.helpers({
    contacts: [
      { name: "Micheal Bean" },
      { name: "Stephano Serano" },
      { name: "Ray Roberts"}
    ]
  });

  Template.boxFundLatestNews.helpers({
    news: [
      { title: "Sample Fund conveys Limited Partner before the outraged dictatorship"},
      { title: "Sample Fund represents an intimate near a simultaneous cube"},
      { title: "Sample Fund recognizes Limited Partner into the unknown"},
      { title: "Limited Partner enters Sample Fund"},
      { title: "Sample Fund hopes for Limited Partner underneath the array"},
      { title: "Sample Fund connects with the march the tube boggles above Limited Partner"}
    ]
  });

  Template.boxFundBroadcasts.helpers({
    news: [
      { title: "Sample Fund represents an intimate near a simultaneous cube"},
      { title: "Sample Fund connects with the march the tube boggles above Limited Partner"},
      { title: "Sample Fund recognizes Limited Partner into the unknown"},
      { title: "Limited Partner enters Sample Fund"}
    ]
  });

  Template.boxFundPR.helpers({
    news: [
      { title: "Sample Fund hopes for Limited Partner underneath the array"},
      { title: "Sample Fund recognizes Limited Partner into the unknown"},
      { title: "Limited Partner enters Sample Fund"},
      { title: "Sample Fund represents an intimate near a simultaneous cube"},
      { title: "Sample Fund connects with the march the tube boggles above Limited Partner"}
    ]
  });

  Template.boxPortfolioCompanies.helpers({
    companies: [
      { name: "Sample Company"},
      { name: "HBO Industries"},
      { name: "San Miguel Group of Companies"},
      { name: "2k Sports"}
    ]
  });

  Template.boxHistoricalInvestments.helpers({
    companies: [
      { name: "Los Santos Vagos"},
      { name: "Top Rank Inc"},
      { name: "Groove Street Families"}
    ]
  });   
}