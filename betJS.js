
$("#bet").click(function() {
	
	var code = $("#daycode").val();
	
	$.post( "http://pogo.lt/total/daycode.php" , {date: today, code: code} ).done (function( data ) { 
		if (data == "ALLOWED") {
			
			
$.post( "http://pogo.lt/total/matches.php" , {today: window.today, user: window.user}).done (function( data ) { 

	var select_result = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select>";
	
	var matches = jQuery.parseJSON( data );
	
	for (var i = 0; i < matches['team1'].length; i++)
	{
		if (matches['result1'][i] == "30") {tempResult1 = "<select id='result1" + i + "'>" + select_result; tempButton = "<td><input type='button' class='bet_btn'  id='bet" + i + "' value='Pateikti spėjimą' /></td>"} else { tempResult1 = matches['result1'][i]; tempButton = "<td>&nbsp;</td>"}
		
		if (matches['result2'][i] == "30") {tempResult2 = "<select id='result2" + i + "'>" + select_result} else { tempResult2 = matches['result2'][i];}
		
		$("#represent_bets").append("<tr><td align='right'><img class='flag flag-" + matches['flag1'][i] +"' /></td><td id='team1" + i + "'>" + matches['team1'][i] +"</td><td align='center'>" + tempResult1 +"</td><td align='center'>" + tempResult2 +"</td><td id='team2" + i + "'>" + matches['team2'][i] +"<td align='left'><img class='flag flag-" + matches['flag2'][i] +"' /></td></td>" + tempButton + "</tr>");
	}
	
	
	
$(".bet_btn").click(function() {
	
var id = $(this).attr("id").substring(parseInt($(this).attr("id").length) - 1, $(this).attr("id").length);
var result1 = $("#result1" + id).val();
var result2 = $("#result2" + id).val();
var matchcode = $("#team1" + id).html() + $("#team2" + id).html();

 $.post( "http://pogo.lt/total/bets.php" , {result1: result1, result2: result2, id: id, today: window.today, user: window.user, matchcode: matchcode}).done (function( data ) { 
 alert (data);
		});
});

		
});	
					
			$("#submitbet").hide();  
			$("#userbets").show();}
		else {alert("Neteisingas dienos kodas!");}	
	});

});	


