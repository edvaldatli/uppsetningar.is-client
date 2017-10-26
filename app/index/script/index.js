$(document).ready(function(){
  // Press submit button and enter to submit login
  $(document).on('click keypress', function(e, callback){
    var target = $(e.target);
    if (target.is('#submit') || e.keyCode == 13) {
      // log in
      init();
    }
  })
})

var liEventListeners = function(){
  $('li').on('click', function(e){
    var eAttr = e.target.id;
    render(eAttr, '.rightside');
  })
}

var render = function(filename, element, callback){
  $.get('../templates/' + filename + '.js', function(data){
    var source = data;
    var template = Handlebars.compile(source);
    $(element).html(template);
  }).done(callback);
}

var init = function(){
  render('init', 'body');
  render('statistics', '.level');
  render('sidebar', '.sidebar', liEventListeners);
  render('home', '.rightside');
}
