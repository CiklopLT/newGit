$("#signin_btn").click(function() {
	
	click_time = new Date().getTime();
    	if (click_time && (click_time - last_click_time) < 1000) {
    	alert ("kazka");
        e.stopImmediatePropagation();
        e.preventDefault();
        return false;
    	}
    	last_click_time = click_time;
	
	var user = $("#user_signin").val();
	var pass = $("#pass_signin").val();
	window.user = user;
	
	if ((user != "")&&(pass != "")){
	
	$.post( "http://pogo.lt/total/data.php" , {user: user, pass: pass} ).done (function( data ) { 
		if (data == "ALLOWED") {
			$("#signin").hide(); 
			$("#userspan").text(window.user);  
			$("#submitbet").show();
			
//-------------------Užpildoma dienos statistika--------------------------------------------------
	$.post( "http://pogo.lt/total/part.php" , {today: window.today}).done (function( data ) { 
	
	var part = jQuery.parseJSON( data );
	
	for (var i = 0; i < part['user'].length; i++)
	{
		if (part['user'][i] == window.user) {var bgcolor = "bgcolor='#E6E6E6'";}
		else {var bgcolor = "bgcolor='#FFF'";}
		
	$("#represent_part tr:last").after("<tr align='center'" + bgcolor + "><td>" + part['user'][i] +"</td><td>" + part['correct'][i] +"</td><td>" + part['diff'][i] +"</td><td>" + part['end'][i] +"</td><td>" + part['total_pts'][i] + "</td></tr>");
	}
});	
//--------------------Dienos statistikos pildymo pabaiga------------------------------------


//-------------------Užpildoma bendra statistika--------------------------------------------------
	$.post( "http://pogo.lt/total/part.php" , {today: "ALL"}).done (function( data ) { 
	
	var part = jQuery.parseJSON( data );
	
	for (var i = 0; i < part['user'].length; i++)
	{
		if (part['user'][i] == window.user) {var bgcolor = "bgcolor='#E6E6E6'";}
		else {var bgcolor = "bgcolor='#FFF'";}
		
	$("#represent_part_all tr:last").after("<tr align='center'" + bgcolor + "><td>" + part['user'][i] +"</td><td>" + part['correct'][i] +"</td><td>" + part['diff'][i] +"</td><td>" + part['end'][i] +"</td><td>" + part['total_pts'][i] + "</td></tr>");
	}
	
});	
//--------------------Bendros statistikos pildymo pabaiga------------------------------------			
			}
		else {alert("Neteisingi prisijungimo duomenys");}	
	});
	}
	else {alert("Neteisingi prisijungimo duomenys");}
	


});	



$("#register_btn").click(function() {
	$("#signin").hide();  
	$("#register").show();
});	

$("#day_stats_btn").click(function() {
	$("#submitbet").hide();  
	$("#day_stats").show();
	});

$("#back_day").click(function() {
	$("#day_stats").hide();
	$("#submitbet").show();  
	});	
	
$("#total_stats_btn").click(function() {
	$("#submitbet").hide();  
	$("#total_stats").show();
	});

$("#back_total").click(function() {
	$("#total_stats").hide();
	$("#submitbet").show();  
	});	
	
$("#back_bets").click(function() {
	$("#userbets").hide();
	$("#submitbet").show();  
	});			
