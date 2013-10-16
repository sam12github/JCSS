//################## JCSS #######################

 jQuery(document).ready(function () {
     jQuery.expr[':'].css = function (elem, arge1, arge2) {
         // $("#new").append(elem);
         return jQuery(elem).css(arge2[3].split(",")[0]) === arge2[3].split(",")[1];

     };
    
 });
