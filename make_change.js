/*Open the HTML and JavaScript files in this folder:
exercises_extra\ch04\change_maker\

Then, run the application to see the user interface shown above, although that interface won’t do anything until you develop the JavaScript for it.

In the JavaScript file, note that the $ function has already been coded.
Code an event handler named processEntries that gets the user’s entry and checks to make sure that it is a number between 0 and 99. If it isn’t, display an alert dialog box for the error. If it is valid, call a function named makeChange and pass it the user’s entry.
Code the makeChange function, which should have one parameter that accepts the user’s entry. This function shouldn’t return anything, but it should display the results in the text boxes for Quarters, Dimes, Nickels, and Pennies.
Code an onload event handler that attaches the processEntries event handler to the click event of the Make Change button. Then, test this application.*/

var $ = function(id) {
    return document.getElementById(id);
};
var processEntries = function ()
{ 
var cents = parseInt($("cents").value);

	$ ("quarters").value = "";
	$ ("dimes").value = "";
	$ ("nickels").value = "";
	$ ("pennies").value = "";
	

	
	if (isNaN (cents) || cents <= 0 || (cents) > 99) {
		alert ("Must be a number or greater than 0 and less than 99.");
};
	
var makeChange = function (cents)
	{
	if ($("cents").value > 24){
		var quarters = Math.floor(cents/25);
		var quartersQ = (quarters * 25);
		cents = cents - quartersQ;
		$("quarters").value = quarters}

	if ($("cents").value > 9){
		var dimes = Math.floor(cents/10);
		var dimesD = (dimes * 10);
		cents = cents - dimesD;
		$("dimes").value = dimes}

	if ($("cents").value > 4){
		var nickels = Math.floor(cents/5);
		var nickelsN = (nickels * 5);
		cents = cents - nickelsN;
		$("nickels").value = nickels}

	if ($("cents").value > 0) {
		var pennies = Math.floor(cents/1);
		var penniesP = (pennies * 1);
		cents = cents - penniesP;
		$("pennies").value = pennies}
}};





window.onload = function () {
$("calculate").onclick = processEntries;
$("calculate").onclick = makeChange;
//$()
}

