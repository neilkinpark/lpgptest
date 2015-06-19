var newsDummy = [
	{ title: "Pfingsten Partners offloads TPC Wire & Cable to Audax Group", img: "http://www.sterlingbahamas.com/wp-content/uploads/2014/07/finance.jpg" },
  { title: "LBO France sell cargo handler WFS to Platinum Equity", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/plane-silhouette-1414861-m-e1411643540882_7.jpg"},
  { title: "Allianz RE in €600m investment for Dutch commercial investor Vesteda", img: "https://coursera-course-photos.s3.amazonaws.com/f7/1ce330c24e11e3b581516b3b1ac593/timemoney.jpg"},
  { title: "LDC buys minority Aspin Group stake for £25m", img: "http://blog.mint.com/wp-content/uploads/2013/02/Exposing-the-Dark-Side-of-the-Personal-Finance-Industry.jpg"},
  { title: "SVP brings in Lloyds banker Guthrie", img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/handshake-616726-m1-e1411577326610_52.jpg"},
  { title: Fake.sentence(5), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/melbourne_8.jpg"},
  { title: Fake.sentence(4), img: "http://www.allfinancesites.com/news/gallery/finance/how_to_write_a_resume_for_a_finance_job.jpg"},
  { title: Fake.sentence(8), img: "http://lpgp-uat.mrkt.it/sites/lpgp-uat.mrkt.it/files/uk-flag-e1430908021906_1.jpg"},
	{ title: "Nigeria's Verod Capital taps Fund II for Union Trustees MBO", img: "http://www.tepav.org.tr/upload/pics/pic1358171347r727780.jpg"}
];

if (Meteor.isClient) {
  Template.boxRowNews.helpers({
    items: [
      { id: "Deal", title: "Deal News", news: lpgpFakeNews(25), cssclass: "active"},  
      { id: "Fund", title: "Fund News", news: lpgpFakeNews(18)},
      { id: "People", title: "People News", news: lpgpFakeNews(16)},
      { id: "Features", title: "Features", news: lpgpFakeNews(12)},
      { id: "LP", title: "LP Profiles", news: lpgpFakeNews(6)},
      { id: "Knowledge", title: "Knowledge Bank", news: lpgpFakeNews(3)}
    ]
  });
 
  Template.pageNewsArticle.helpers({
    img: "http://www.1wallpaperhd.com/wp-content/uploads/Financial/FTP1/1280x720/Finance%20bill%20Wallpaper%2003%201280x720.jpg",
    title: "LBO France sell cargo handler WFS to Platinum Equity",
    body : [
      { p: Fake.paragraph(5)  },
      { p: Fake.paragraph(15)  },
      { p: Fake.paragraph(10)  },
      { p: Fake.paragraph(7)  },
      { p: Fake.paragraph(15)  }
    ]
  }); 

  Template.pageNews.onRendered(function() {
    var owl = $(".owl-news");

    owl.owlCarousel({
        loop:true,
        nav: true,
        dots: false,
        responsive:{
            0:{
              items:1
            },
            400: {
              items:2
            },           
            600:{
              items:3
            },
            800:{
              items:4
            },
            1000:{
              items:5
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

