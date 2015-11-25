Template.userEditPageOne.events({
  "click #btn-next-1": function (event, template) {
    $("#page-two-mainlink").tab('show');
    event.preventDefault();
  },
  "click #btn-prev-2": function (event, template) {
    $("#page-one-mainlink").tab('show');
    event.preventDefault();
  },
  "click #field-profilepic-ui": function (event, template) {
    event.preventDefault();
    $("#field-profilepic-real").click();
  },
  "change #field-profilepic-real": function (event, template) {
    $("#field-profilepic-ui").css('background-image', "url('http://www.canada.com/cms/binary/6385311.jpg')");
  }   
});

Template.userEditPageCp.helpers({
    checkBOne : [
      { text: "Corporate Investor" },
      { text: "Corporate Investor" },
      { text: "Development Finance Institution" },
      { text: "Endowment" },
      { text: "Foundation" },
      { text: "Government Agency / Sovereign Wealth Fund" },
      { text: "Insurance Company" },
      { text: "Investment Bank (investing from balance sheet)" },
      { text: "Investment Trust" },
      { text: "Private Pension / Retirement Fund" },
      { text: "Public Pension / Retirement Fund" },
      { text: "Single Family Office  " }    
    ]
  });

Template.fieldProfilepicFancy.helpers({
  img: "images/default_pic.png"
});

Template.userEditPageOne.onRendered(function(){
  
  $('select').selectpicker();

  $(document).on('change', '.btn-file :file', function() {
      var input = $(this),
          numFiles = input.get(0).files ? input.get(0).files.length : 1,
          label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
      input.trigger('fileselect', [numFiles, label]);
  });
  
  $(document).ready( function() {
      $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
          
          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;
          
          if( input.length ) {
              input.val(log);
          } else {
              if( log ) alert(log);
          }
          
      });
  });

});

Template.pageUserLPEdit.onRendered(function(){
  $('#nav-category').owlCarousel({
      margin: 5,
      dots: false,
      responsive:{
        0:{
          items:2,
          stagePadding: 15,          
        },
        500: {
          items:3,
          stagePadding: 15,
        },        
        768: {
          items: 5,
          stagePadding: 0
        }
      }
  });

  $('.tokenfield')

    .on('tokenfield:createtoken', function (e) {
      var data = e.attrs.value.split('|')
      e.attrs.value = data[1] || data[0]
      e.attrs.label = data[1] ? data[0] + ' (' + data[1] + ')' : data[0]
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
