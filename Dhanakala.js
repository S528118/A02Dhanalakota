function price(){

	var ttl=  parseFloat($("[name=artist]:checked").val())*parseInt($("[name=artistPrice]").val());

	document.getElementById("Total").innerHTML="Total Amount = "+ttl+"$";
}