if (Meteor.isClient) {
  Template.pageLPOrgSearch.helpers({
  	orgs: [
  	  { org: Fake.sentence(3), img: "http://www.icvillar.es/img/logo_villar.gif" },
  	  { org: Fake.sentence(3), img: "http://images.vectorhq.com/images/previews/982/michael-jordan-nba-logo-psd-439185.png" },
  	  { org: Fake.sentence(2), img: "http://theworkinggamer.co.uk/wp-content/uploads/2014/05/NBA2K15-logo.png" },
  	  { org: "Smaller Than Desired Logo Org", img: "http://pbs.twimg.com/profile_images/519904806794571776/ahiBppBE_normal.png" },
  	  { org: "Large Square Logo Inc.", img: "http://www.stratuslive.com/Media/Default/images/Icon/Excel_Icon_2013.png" },
  	  { org: "Org No Image Uploaded Inc.", img: "http://lpgptest.meteor.com/images/default_logo.png" }
  	]
  });

  Template.boxInvestmentStrategies.helpers({
    ttype: [
      { img: "c.png", title: "Co-investments", css: "col-xs-offset-0 col-sm-offset-1"},
      { img: "d.png", title: "Direct Investments"},
      { img: "f.png", title: "Funds"}
    ],
    ttype2: [
      { img: "fof.png", title: "Funds of Funds"},
      { img: "s.png", title: "Secondaries"},
    ]    
  });

  Template.pageLPOrg.onRendered(function(){
    // Listen for resize changes
    checkForViewportChange();
    window.addEventListener('resize', function() {
      checkForViewportChange();
    }, false); 

    $('#nav-category').owlCarousel({
        margin: 5,
        dots: false,
        responsive:{
          0:{
            items:2,
            stagePadding: 15,          
          },
          400: {
            items:3,
            stagePadding: 0,
            autoWidth: true
          }
        }
    });       
  });  
}	




function checkForViewportChange () {

  var state = window.getComputedStyle(document.body,':before').content;

  this.lastState = this.lastState || "";  

  if (state != this.lastState) {  

    switch(state) {
        case '"xs"':
            //  code block
            $(".panel > .mobile-collapsed.collapse.in").collapse('toggle');
            console.log('xs = ' + state);
          break;
        case '"sm"':
            //  code block
            console.log('sm = ' + state);
          break;
        default:
          //  default code block
            console.log('lg = ' + state);
            $(".panel > .mobile-collapsed:not(.in)").collapse('toggle');
    }      

    this.lastState = state;
  }
}