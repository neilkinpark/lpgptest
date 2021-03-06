News = new Mongo.Collection("news");

Router.configure({
  layoutTemplate: 'pageloggedInBasic'
});

Router.route('/dashboard', function () {
  this.render('pageLPDirectory');
});

Router.map( function () {
  this.route('pageBetaDashboard', {
    path: ['/beta-dashboard', '/'],

    onBeforeAction: function (pause) {
      this.render('pageBetaDashboard');
      $('body').addClass('pageBetaDashboard');
    },

    onStop: function() {
      $('body').removeClass('pageBetaDashboard');
    }        
  });
});

Router.route('/temp-filter', function () {
  this.render('tempFilter');
});

Router.route('/login', function () {
  this.render('pageLogin');
});

Router.route('/user-logout', function () {
  this.render('pageLogout');
});

Router.route('/signup', function () {
  this.render('pageSignup');
});

Router.route('/lp-signup', function () {
  this.render('pageLPSignup');
});

Router.route('/gp-signup', function () {
  this.render('pageGPSignup');
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

Router.route('/user-lpprofile-edit', function () {
  this.render('pageUserLPEdit');
});

Router.route('/user-gpprofile-edit', function () {
  this.render('pageUserGPEdit');
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

Router.route('/lp-org-search', function(){
  this.render('pageLPOrgSearch'); 
});

Router.route('/lp-org', function(){
  this.render('pageLPOrg'); 
});

Router.route('/offer-valuations', function(){
  this.render('pageOfferValuations'); 
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

Router.map( function () {
  this.route('pageKBank', {
    path: '/knowledge-bank',

    onBeforeAction: function (pause) {
      this.render('pageKBank');
      $('body').addClass('pageKBank');
      $('#regionHeader .link-kbank').addClass('active');
      console.log('hello');
    },

    onStop: function() {
      $('body').removeClass('pageKBank');
      $('#regionHeader .link-kbank').removeClass('active');
      console.log('k bye');
    }        
  });
});

Router.map( function () {
  this.route('pageKBankResults', {
    path: '/knowledge-bank-results',

    onBeforeAction: function (pause) {
      this.render('pageKBankResults');
      $('body').addClass('pageKBank');
      $('#regionHeader .link-kbank').addClass('active');
      console.log('hello');
    },

    onStop: function() {
      $('body').removeClass('pageKBank');
      $('#regionHeader .link-kbank').removeClass('active');
      console.log('k bye');
    }        
  });

  this.route('pageAbout', {
    path: '/about',

    onBeforeAction: function (pause) {
      this.render('pageAbout');
      $('body').addClass('pageAbout');
    },

    onStop: function() {
      $('body').removeClass('pageAbout');
    }        
  });  
});

Router.route('/news-article', function(){
  this.render('pageNewsArticle');
});

Router.route('/lp-profile-article', function(){
  this.render('pageLPProfileArticle');  
});

Router.route('/ir-review', function(){
  this.render('pageIrReview');  
});

Router.route('/help', function(){
  this.render('pageHelp'); 
});

Router.route('/invite', function(){
  this.render('pageInvite'); 
});

Router.route('/company-profile', function(){
  this.render('pageCompProfile'); 
});

if (Meteor.isClient) {
  Template.pageUnderCons.helpers({
  	links:[
      { link: "/beta-dashboard", page: "Beta Dashboard"},
      { link: "/dashboard", page: "LP Dashboard"},
      { link: "/user-gpprofile-edit", page: "GP Profile Edit"},
      { link: "/lp-signup", page: "LP Signup"},
      { link: "/gp-signup", page: "GP Signup"},
  		{ link: "/secondaries", page: "Secondaries"},
      { link: "/news", page: "News"},
      { link: "/lp-profile-article", page: "LP Profile Article"},
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

/* COLLECTIONS */
ValuedFunds = new Mongo.Collection("valuedfunds");

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}