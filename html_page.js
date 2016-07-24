$(document).ready(function(){
	alert("Hello, this is loaded via ajax request.");
	var add=function(a,b){
		return a+b;
	};
	var multiply=function(a,b){
		return a*b;
	};
	var operation=function(a,b,callback)
	{
		alert(callback(a,b));
	};
	var doit=function()
	{
		var op=prompt('Add or multiply?');
		if(op==="Add" || op==="add" || op==="ADD")
		{
			var a=prompt("enter the value of a");
			var b=prompt("enter the value of b");
			operation(parseInt(a),parseInt(b),add);
		}
		else if(op==="Multiply" || op==="multiply" || op=="MULTIPLY")
		{
			var a=prompt("enter the value of a");
			var b=prompt("enter the value of b");
			operation(parseInt(a),parseInt(b),multiply);
		}
		else
		{
			alert("wrong choice. Enter add or multiply..");
			doit();
		}
	};
	doit();
});
