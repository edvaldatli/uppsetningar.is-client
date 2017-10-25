$(document).ready(function(){
  // Press submit button and enter to submit login
  $(document).on('click keypress', function(e){
    var target = $(e.target);
    console.log(e.keyCode)
    if (target.is('#submit') || e.keyCode == 13) {
      $.get('../templates/home.js', function(data){
        var source = data;
        var template = Handlebars.compile(source);
        $('body').html(template);
      });
    }
  })
})
