News = new Mongo.Collection("news");

Router.configure({
  layoutTemplate: 'pageloggedInBasic'
});

Router.route('/', function () {
  this.render('pageUnderCons');
});

Router.route('/user-profile', function () {
  this.render('pageLPProfile');
});

Router.route('/fund-profiles', function(){
  this.render('pageFundProfiles');
});

Router.route('/page-results', function(){
  this.render('pageResults');  
});

Router.route('/loadingdemo', function(){
  this.render('pageloadingdemo');  
});

Router.route('/fund-profile', function(){
  this.render('pageFundProfile'); 
});

Router.route('/fund-performance', function(){
  this.render('pageFundPerformance'); 
});

Router.route('/members', function(){
  this.render('pageMembers'); 
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

Router.route('/access-denied', function(){
  this.render('pageRestricted'); 
});

Router.route('/news', function(){
  this.render('pageNews'); 
});

if (Meteor.isClient) {
  Template.pageUnderCons.helpers({
  	links:[
  		{ link: "/secondaries", page: "Secondaries"},
      { link: "/news", page: "News"},
      { link: "/subscription-upgrade-request", page: "Subsription Upgrade Request"},
      { link: "/fund-profile", page: "Fund Open Room"},
      { link: "/page-results", page: "Search Results"},
      { link: "/access-denied", page: "Restricted Content"},
      { link: "/loadingdemo", page: "Loading state"}
  	]
  });
}