var jsbin = {
  'root': '//code.h5jun.com',
  'shareRoot': '//code.h5jun.com',
  'runner': '//code.h5jun.com/runner',
  'static': 'https:////code.h5jun.com',
  'version': '3.40.2',
  user: {},
};

(function () {
  if (jsbin.user && jsbin.user.name) {
    $('.loggedout').hide();
    var menu = $('.loggedin').show();
    var html = $('#profile-template').text();
    var $html = $(html.replace(/({.*?})/g, function (all, match) {
      var key = match.slice(1, -1).trim(); // ditch the wrappers
      return jsbin.user[key] || '';
    }));
    if (jsbin.user.pro) {
      document.documentElement.className += ' pro';
      $html.find('.gopro').remove();
    } else {
      $html.find('.pro').remove();
    }
    $('#control .loggedin').append($html);
  } else {
    $('.loggedin').hide();
    $('.loggedout').show();
  }
})();
