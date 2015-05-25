Router.configure({
  layoutTemplate: 'pageloggedInBasic'
});

Router.route('/', function () {
  this.render('pageUnderCons');
});

Router.route('/fund-profile', function(){
  this.render('pageFundProfile');	
});

Router.route('/connections', function(){
  this.render('pageConnections');	
});

Router.route('/secondaries', function(){
  this.render('pageSecondaries');	
});

Router.route('/subscription-upgrade-request', function(){
  this.render('pageSubsUpsReqs'); 
});

Router.route('/news', function(){
  this.render('pageNews'); 
});

if (Meteor.isClient) {
  Template.pageUnderCons.helpers({
  	links:[
  		{ link: "/secondaries", page: "Secondaries"},
      { link: "/news", page: "News"},
      { link: "/subscription-upgrade-request", page: "Subsription Upgrade Request"}
  	]
  });
}
