$(document).click(function (event) {
  var $target = $(event.target);

  if (!$target.closest('#historywrap').length && $('#historymenu').is(':visible')) {
    $('#historymenu').hide();
  }
});
$('#historybtn').click(function () {
  $('#historymenu').toggle();
});
$('.nav-arrow').click(function () {
  $('#historymenu').hide();
});
//# sourceMappingURL=main.js.map