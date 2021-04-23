// $(document).click(function(event) { 
//   var $target = $(event.target);
//   if(!$target.closest('#historywrap').length && 
//   $('#historymenu').is(':visible')) {
//     $('#historymenu').hide();
//   }        
// });

$('#historybtn').click(function(){
    $('#historymenu').toggle();
});


