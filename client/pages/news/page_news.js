var newsDummy = [
	{ title: "Pfingsten Partners offloads TPC Wire & Cable to Audax Group", img: "https://www.altassets.net/wp-content/uploads/2015/05/wire-cable-industrial-e1431941803560.jpg" },
  { title: "LBO France sell cargo handler WFS to Platinum Equity", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/plane-silhouette-1414861-m-e1411643540882_7.jpg"},
  { title: "Allianz RE in €600m investment for Dutch commercial investor Vesteda", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/dutch_4.jpg"},
  { title: "LDC buys minority Aspin Group stake for £25m", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/rail-track-train-e1430129497861_1.jpg"},
  { title: "SVP brings in Lloyds banker Guthrie", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/handshake-616726-m1-e1411577326610_52.jpg"},
  { title: Fake.sentence(5), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/melbourne_8.jpg"},
  { title: Fake.sentence(4), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/meeting-room-board-room-staff-executive-e1414139825510_10.jpg"},
  { title: Fake.sentence(8), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/uk-flag-e1430908021906_1.jpg"},
	{ title: "Nigeria's Verod Capital taps Fund II for Union Trustees MBO", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/bank-savings-e1430215940319_1.jpg"}
];

if (Meteor.isClient) {
  Template.pageNews.helpers({
  	newstypes: [
      { id: "Deal", 
      	title: "Deal News", 
      	news: lpgpFakeNews(8)
      },	
      { id: "Fund", title: "Fund News", news: lpgpFakeNews(28)},
      { id: "People", title: "People News", news: lpgpFakeNews(18)},
      { id: "Features", title: "Features", news: lpgpFakeNews(12)},
      { id: "LP", title: "LP Profiles", news: lpgpFakeNews(8)},
      { id: "Knowledge", title: "Knowledge Bank", news: lpgpFakeNews(3)}
  	]
  });

  Template.pageNews.onRendered(function() {
    var owl = $(".owl-news");

    owl.owlCarousel({
      loop:true,
      margin:0,
      responsive:{
          0:{
              items:1
          },
          400:{
              items:2
          },
          600: {
            items: 3
          },
          1000:{
              items:5
          },
          1600: {
            items: 8
          }
      }   
    });

  });
}

function lpgpFakeNews(len) {
	var news = [];
	for (var i = 0; i < len; i++) {
		news[i] = Fake.fromArray(newsDummy);
	};
	return news;
}

