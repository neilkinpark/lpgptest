var newsDummy = [
	{ title: "Pfingsten Partners offloads TPC Wire & Cable to Audax Group", img: "https://www.altassets.net/wp-content/uploads/2015/06/barrels-e1435228827175-300x300.jpg" },
  { title: "LBO France sell cargo handler WFS to Platinum Equity", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/plane-silhouette-1414861-m-e1411643540882_7.jpg"},
  { title: "Allianz RE in €600m investment for Dutch commercial investor Vesteda", img: "https://www.altassets.net/wp-content/uploads/2014/09/pipeline-1112653-m-e1410427438419.jpg"},
  { title: "LDC buys minority Aspin Group stake for £25m", img: "https://www.altassets.net/wp-content/uploads/2015/06/abraham-lincoln-716182_1280-e1435314392561.jpg"},
  { title: "SVP brings in Lloyds banker Guthrie", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/handshake-616726-m1-e1411577326610_52.jpg"},
  { title: Fake.sentence(5), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/melbourne_8.jpg"},
  { title: Fake.sentence(4), img: "https://www.altassets.net/wp-content/uploads/2015/06/africa-e1434708464298.jpg"},
  { title: Fake.sentence(8), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/uk-flag-e1430908021906_1.jpg"},
	{ title: "Nigeria's Verod Capital taps Fund II for Union Trustees MBO", img: "https://www.altassets.net/wp-content/uploads/2015/06/money-pile-e1434017478260.jpg"}
];

if (Meteor.isClient) {
  Template.boxRowNews.helpers({
    items: [
      { id: "Fund", title: "Fund News", news: lpgpFakeNews(18)},
      { id: "Deal", title: "Deal News", news: lpgpFakeNews(25), cssclass: "active"},  
      { id: "LP", title: "LP Profiles", news: lpgpFakeNews(6)},
      { id: "People", title: "People News", news: lpgpFakeNews(16)},
      { id: "Features", title: "Features", news: lpgpFakeNews(12)},
      { id: "Knowledge", title: "Knowledge Bank", news: lpgpFakeNews(3)}
    ]
  });

  Template.widgetNewsList.helpers({
    news: newsDummy
  });
 
  Template.pageKBankResults.helpers({
    news: newsDummy
  });
   
  Template.pageNewsArticle.helpers({
    img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/euros_24.jpg",
    title: "LBO France sell cargo handler WFS to Platinum Equity",
    body : [
      { p: Fake.paragraph(5)  },
      { p: Fake.paragraph(15)  },
      { p: Fake.paragraph(10)  },
      { p: Fake.paragraph(7)  },
      { p: Fake.paragraph(15)  }
    ]
  });

  Template.pageLPProfileArticle.helpers({
    img: "https://www.altassets.net/wp-content/uploads/2015/03/Donald_Pierce_Bio.jpg",
    title: "LP Profile: Donald Pierce, San Bernardino County Employees’ Retirement Association",
    body : [
      { p: Fake.paragraph(3)  },
      { p: Fake.paragraph(11)  },
      { p: Fake.paragraph(5)  },
      { p: Fake.paragraph(5)  },
      { p: Fake.paragraph(3)  }
    ]
  });

  Template.pageNews.onRendered(function() {
    var owl = $(".owl-news");

    owl.owlCarousel({
        stagePadding: 12,
        loop:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
              items:2
            },          
            600:{
              items:3
            },
            800:{
              items:4
            },
            1000: {
              items: 5
            }                     
        }
    });

  });

  Template.pageNewsArticle.events({
    "click #fs-option-1": function(event, template) {
      template.$(".fs-adjust-body").css("font-size", "12px");
    },    
    "click #fs-option-2": function(event, template) {
      template.$(".fs-adjust-body").css("font-size", "");
    },
    "click #fs-option-3": function(event, template) {
      template.$(".fs-adjust-body").css("font-size", "20px");
    },    
  });

}

function lpgpFakeNews(len) {
	var news = [];
	for (var i = 0; i < len; i++) {
		news[i] = Fake.fromArray(newsDummy);
	};
	return news;
}

