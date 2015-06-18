News = new Mongo.Collection("news");

Router.configure({
  layoutTemplate: 'pageloggedInBasic'
});

Router.route('/', function () {
  this.render('pageUnderCons');
});

Router.route('/temp-filter', function () {
  this.render('tempFilter');
});

Router.route('/login', function () {
  this.render('pageLogin');
});

Router.route('/password-reset', function () {
  this.render('pagePasswordReset');
});

Router.route('/page-404', function () {
  this.render('pageNotFound');
});

Router.route('/page-notifications', function () {
  this.render('pageNotifs');
});

Router.route('/inbox', function () {
  this.render('pageInbox');
});

Router.route('/message', function () {
  this.render('pageMessage');
});

Router.route('/new-message', function () {
  this.render('pageCreateMessage');
});

Router.route('/user-profile', function () {
  this.render('pageMyProfile');
});

Router.route('/lp-profile', function () {
  this.render('pageLPProfile');
});

Router.route('/gp-profile', function () {
  this.render('pageGPProfile');
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

Router.route('/access-denied-user', function(){
  this.render('pageRestrictedUser'); 
});

Router.route('/account-verification', function(){
  this.render('pageAccountVerification'); 
});

Router.route('/news', function(){
  this.render('pageNews'); 
});

Router.route('/help', function(){
  this.render('pageHelp'); 
});

if (Meteor.isClient) {
  Template.pageUnderCons.helpers({
  	links:[
  		{ link: "/secondaries", page: "Secondaries"},
      { link: "/news", page: "News"},
      { link: "/subscription-upgrade-request", page: "Subsription Upgrade Request"},
      { link: "/fund-profile", page: "Fund Open Room"},
      { link: "/page-results", page: "Search Results"},
      { link: "/page-notifications", page: "Notifications"},
      { link: "/access-denied", page: "Restricted Content"},
      { link: "/access-denied-user", page: "Restricted Content 2"},
      { link: "/account-verification", page: "Account Verification"},
      { link: "/page-404", page: "404"},
      { link: "/loadingdemo", page: "Loading state"}
  	]
  });
}