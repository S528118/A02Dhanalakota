function price(){

	
	var ttl1 = ($("[name=artistPrice]").val());
	if(ttl1<=0 || isNaN(ttl1))
	{
			window.alert("please enter a positve integer")
	}
	else
	{var ttl=  parseFloat($("[name=artist]:checked").val())*ttl1;
		document.getElementById("Total").innerHTML="Total Amount = "+ttl+"$";
	}
	
}