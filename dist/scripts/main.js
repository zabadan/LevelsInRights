$(document).click(function(t){!$(t.target).closest("#historywrap").length&&$("#historymenu").is(":visible")&&$("#historymenu").hide()}),$("#historybtn").click(function(){$("#historymenu").toggle()});