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
          { url: "ir-review", img: "ir_review.png", imgh: "ir_review_hover.png", title: "Fundraising & IR review" }  
        ]
      },
      {
        col: [
          { url: "fund-performance", img: "fund_performance.png", imgh: "fund_performance_hover.png", title: "Fund Performance" },
          { url: "fund-profiles", img: "fund_profiles.png", imgh: "fund_profiles_hover.png", title: "Fund Profiles" },
          { url: "connections", img: "connections.png", imgh: "connections_hover.png", title: "Connections & Members", notif: true  }   
        ]         
      },      
      {
        col: [
          { url: "lp-org-search", img: "lp_directory.png", imgh: "lp_directory_hover.png", title: "Active LP Database" },
          { url: "lp-mag", img: "lp_magazine.png", imgh: "lp_magazine_hover.png", title: "Limited Partner Magazine" } ,
          { url: "inbox", img: "messages.png", imgh: "messages_hover.png", title: "Message", cssclass: "icon-soon" }      
        ]       
      }         
    ]      
  }); 

  Template.pageBetaDashboard.events({
    "click .icon-soon a": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      //$('.icon-soon a').popover('hide');
      //$(this).popover('show');
      $('#modalSoon').modal('show')
    }
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

    $('.icon-soon aZZZZ').popover({
      content: 'coming soon',
      placement: 'bottom'
    });   
  });

  Template.menuBetaDashboard.helpers({
    item: [

          { url: "news", img: "news.png", imgh: "news_hover.png", title: "News & Views" },
          { url: "knowledge-bank", img: "knowledge_bank.png", imgh: "knowledge_bank_hover.png", title: "Knowledge Bank" },
          { url: "ir-review", img: "ir_review.png", imgh: "ir_review_hover.png", title: "Fundraising & IR review" },


          { url: "fund-performance", img: "fund_performance.png", imgh: "fund_performance_hover.png", title: "Fund Performance" },
          { url: "fund-profiles", img: "fund_profiles.png", imgh: "fund_profiles_hover.png", title: "Fund Profiles" },
          { url: "connections", img: "connections.png", imgh: "connections_hover.png", title: "Connections & Members"}, 
      

          { url: "lp-org-search", img: "lp_directory.png", imgh: "lp_directory_hover.png", title: "Active LP Database" },
          { url: "lp-mag", img: "lp_magazine.png", imgh: "lp_magazine_hover.png", title: "Limited Partner Magazine" },
          { url: "inbox", img: "messages.png", imgh: "messages_hover.png", title: "Message", cssclass: "icon-soon" }               
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

  Template.pageInvite.onRendered(function() {
  $('#tokenfield')

    .on('tokenfield:createtoken', function (e) {
      var data = e.attrs.value.split('|')
      e.attrs.value = data[1] || data[0]
      e.attrs.label = data[1] ? data[0] + ' (' + data[1] + ')' : data[0]
    })

    .on('tokenfield:createdtoken', function (e) {
      // Über-simplistic e-mail validation
      var re = /\S+@\S+\.\S+/
      var valid = re.test(e.attrs.value)
      if (!valid) {
        $(e.relatedTarget).addClass('invalid');
      }
    })

    .on('tokenfield:edittoken', function (e) {
      if (e.attrs.label !== e.attrs.value) {
        var label = e.attrs.label.split(' (');
        e.attrs.value = label[0] + '|' + e.attrs.value;
      }
    })

    .on('tokenfield:removedtoken', function (e) {
      alert('Item removed! Entered item (' + e.attrs.value + ') is not a valid email');
    })

    .tokenfield();
  });  

  Template.pageInvite.events({
    "submit form" : function(event, t) {
      event.preventDefault();
      val = $('#tokenfield').tokenfield('getTokens');
      $.each(val, function(index, token) {
        sendTo = token.value;

          Meteor.call('sendEmail',
            sendTo,
            'neil@ultro.co.uk',
            'Hello from Meteor!',
            'This is a test of Email.send.');        
      });

      alert("email sent!");
    }
  });  

}