//--------------------------------------------------------------
// Create an HTML table using Javascript
function createTable(id, rows, columns){
   var body = document.body;
   var tbl  = document.createElement('table');
   tbl.id = id;

   for(var i = 0; i < rows; i++){
       var tr = tbl.insertRow();
       for(var j = 0; j < columns; j++){
               var td = tr.insertCell();
               //td.appendChild(document.createTextNode('Cell'));
       }
   }
   body.appendChild(tbl);
}
//--------------------------------------------------------------
// Allow only one checkbox to be checked. It clears all others when one is checked.
function selectOnlyThis(element, fieldString) {
   var targetString = '*[id^=' + fieldString + ']';
   //alert(targetString);
   var genderTypes = document.querySelectorAll(targetString);
   //var genderTypes = document.querySelectorAll('*[id^="gender_"]');
   for (var i = 0; i < genderTypes.length; i++) {
           document.getElementById(genderTypes[i].id).checked = false;
   }
   //document.getElementById(id).checked = true;
   element.checked = true;
}