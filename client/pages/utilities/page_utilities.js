var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.pageNotFound.helpers({
    url: newURL
  });

  Template.pageLPDirectory.helpers({
    itemone: [
      { url: "news", img: "News.png", title: "News" },
      { url: "lp-magazine", img: "LP_Magazine.png", title: "LP Magazine" },
      { url: "lp-org-search", img: "LP_Connections.png", title: "LP Profiles" }
    ],
    itemtwo: [
      { url: "fund-profiles", img: "Fund_Profiles.png", title: "Fund Profiles" },
      { url: "fund-performance", img: "Fund_Performance.png", title: "Fund Performance" },
      { url: "secondaries", img: "Secondaries.png", title: "Secondaries" }
    ],
    itemthree: [
      { url: "fund-profiles", img: "Fund_Profiles.png", title: "Fund Profiles" },
      { url: "fund-performance", img: "Fund_Performance.png", title: "Fund Performance" },
      { url: "secondaries", img: "Secondaries.png", title: "Secondaries" }
    ]        
  });

  Template.pageBetaDashboard.helpers({
    item: [
      { url: "news-article", img: "News.png", title: "News" },
      { url: "news", img: "News_search.png", title: "News Search" },
      { url: "lp-org-search", img: "LP_Connections.png", title: "LP Profiles" }
    ]       
  });  

  Template.pageLogin.events({
  	"click .linkPSReset": function (event, template){
  	  window.location.href = '/password-reset';
  	  //Router.go('pagePasswordReset');
  	}
  });

  Template.pageLPSignup.events({
    "click #validEmail" : function() {
      $(".form-group.email").addClass("has-error");
      $(".alert-danger").toggleClass("hidden").find("p.msg").append("Please enter a valid email address.");
    },
    "click #validPassword" : function() {
      $(".form-group.password").addClass("has-error");
      $(".alert-danger").toggleClass("hidden").find("p.msg").append("Your passwords don't match.");
    }
  });

}