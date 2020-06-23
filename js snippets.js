// js snippets


// remove all the options of a select box and then add one option and select it with jQuery


$('#mySelect')
    .find('option')
    .remove()
    .end()
    .append('<option value="whatever">text</option>')
    .val('whatever')
;


// select last option
var address
$(function() {
    $("select option:last").attr("selected", "selected");
    address.find("option").last().attr("selected", "selected");
});

// reset form
$('#form').trigger( "reset" );

// find option with text
$('#test').find('option[text="B"]').val();

// find option by value
$('#from-address').find('option[value="None"]').remove();

// append large html content

$('#from-address').append(`
		<p>this quotes support multi line</p>
		<p>this quotes support multi line</p>
		<p>this quotes support multi line</p>
		<p>this quotes support multi line</p>
	`)	

// watch multi elements realtime change
$('#from-primary-mobile,#search-from-primary-mobile').on("keyup change",function (e) { 
  // e.preventDefault();
  var primary_from_mobile = $('#from-primary-mobile').val();
  console.log(primary_from_mobile);
});