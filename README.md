JCSS
====

JQuery based plugin to filter elements based on their css attribute values . So you can filter Jquery elements by css attribute . 
Gradually I ll add more features such ass filtering elements using greater or lesser operators , etc 

check the example below : 

http://jsfiddle.net/pnKzA/3/ 
 

   $("p").append("number of elements with 'block' attribute is : " + $("li:css(display,block)").length);

