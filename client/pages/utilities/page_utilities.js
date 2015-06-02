var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;

if (Meteor.isClient) {
  // This code only runs on the client
  
  Template.pageNotFound.helpers({
    url: newURL
  });

}