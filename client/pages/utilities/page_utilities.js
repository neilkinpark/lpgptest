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
      {
        col: [
          { url: "news", img: "news.png", imgh: "news_hover.png", title: "News & Views" },
          { url: "knowledge-bank", img: "knowledge_bank.png", imgh: "knowledge_bank_hover.png", title: "Knowledge Bank" },        
        ]
      },
      {
        col: [
          { url: "fund-profiles", img: "fund_profiles.png", imgh: "fund_profiles_hover.png", title: "Fund Profiles" },
          { url: "fund-performance", img: "fund_performance.png", imgh: "fund_performance_hover.png", title: "Fund Performance" }     
        ]         
      },      
      {
        col: [
          { url: "lp-org-search", img: "lp_directory.png", imgh: "lp_directory_hover.png", title: "Active LP Database" },
          { url: "lp-mag", img: "lp_magazine.png", imgh: "lp_magazine_hover.png", title: "Limited Partner Magazaine" },        
        ]       
      },
      {
        col: [
          { url: "ir-review", img: "ir_review.png", imgh: "ir_review_hover.png", title: "Fundraising & IR review" },
          { url: "about", img: "about.png", imgh: "about_hover.png", title: "About Us" }      
        ]         
      }      
    ]      
  }); 

  Template.pageBetaDashboard.onRendered(function() {

    resizedw();

    function resizedw(){
      // Haven't resized in 100ms!
        
      var windowH = $(window).outerHeight();
      var regionHeaderH = $("#regionHeader").outerHeight();
      var regionFooterH = $(".regionFooter").outerHeight();
      var regionMainH = windowH - regionHeaderH - regionFooterH - 20;
      $("#regionMain .flex-dash-icons").height(regionMainH);
      console.log(regionHeaderH + regionFooterH);
    }    

    var doit;
    window.onresize = function(){
      clearTimeout(doit);
      doit = setTimeout(resizedw, 100);
    };

  });

  Template.menuBetaDashboard.helpers({
    item: [
      { url: "/", img: "News.png", title: "Home" },
      { url: "news", img: "News.png", title: "News & Views" },
      { url: "knowledge-bank", img: "News_search.png", title: "Knowledge Bank" },
      { url: "lp-org-search", img: "LP_Connections.png", title: "Active LP Database" },
      { url: "fund-performance", img: "Fund_Performance.png", title: "Fund Performance" },
      { url: "lp-mag", img: "LP_Magazine.png", title: "Limited Partner Magazaine" },
      { url: "ir-review", img: "ir_REVIEW.png", title: "Fundraising and IR review" }
    ]       
  });   

  Template.pageLogin.events({
  	"click .linkPSReset": function (event, template){
  	  window.location.href = '/password-reset';
  	  //Router.go('pagePasswordReset');
  	}
  });

  Template.pageLogout.onRendered(function() {
    setTimeout(showMainScreen,4000);

    function showMainScreen() {
      $('#splash-screen').hide();
      $('#main-screen').fadeIn().removeClass('hidden');
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