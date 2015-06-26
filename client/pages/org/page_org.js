if (Meteor.isClient) {
  Template.pageLPOrgSearch.helpers({
  	orgs: [
  	  { org: Fake.sentence(3) },
  	  { org: Fake.sentence(3) },
  	  { org: Fake.sentence(2) },
  	  { org: Fake.sentence(3) },
  	  { org: Fake.sentence(2) },
  	  { org: Fake.sentence(1) }
  	]
  });

  Template.boxInvestmentStrategies.helpers({
    ttype: [
      { img: "c.png", title: "Co-Invest", css: "col-xs-offset-0 col-sm-offset-1"},
      { img: "d.png", title: "Direct"},
      { img: "f.png", title: "Funds"},
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