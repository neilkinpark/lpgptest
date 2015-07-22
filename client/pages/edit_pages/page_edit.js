Template.userEditPageOne.events({
  "click #btn-next-1": function (event, template) {
    $("#page-two-mainlink").tab('show');
    event.preventDefault();
  },
  "click #btn-prev-2": function (event, template) {
    $("#page-one-mainlink").tab('show');
    event.preventDefault();
  },  
});