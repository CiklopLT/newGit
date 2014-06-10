function onBodyLoad()
{       
    document.addEventListener("deviceready", onDeviceReady, false);
}function onDeviceReady()
{
	

	
jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

$("#tableContainer").center();	
	
	
$("#signin_btn").mousedown(function() {

	var user = $("#user_signin").val();
	var pass = $("#pass_signin").val();
	window.user = user;
	
	if ((user != "")&&(pass != "")){
	
	$.post( "http://pogo.lt/total/data.php" , {user: user, pass: pass} ).done (function( data ) { 
		if (data == "ALLOWED") {
			$("#signin").hide(); 
			$("#userspan").text(window.user);  
			$("#submitbet").show();
			
			day_stats();
			all_stats();
			}
		else {alert("Neteisingi prisijungimo duomenys");}	
	});
	}
	else {alert("Neteisingi prisijungimo duomenys");}
	

});	

//-------------------Užpildoma dienos statistika--------------------------------------------------
function day_stats() {
	
	$("#represent_part").empty();	
	$("#represent_part").append("<tr><td colspan='5'><span style='font-size:16px'>Dienos rezultatų lentelė</span></td><td width='10%'>&nbsp;</td></tr><tr><td colspan='4'>&nbsp;</td></tr><tr><th>Dalyvis&nbsp;</th><th>&nbsp;Tiksliai&nbsp;</th><th>&nbsp;Baigtis&nbsp;</th><th>&nbsp;Skirtumas&nbsp;</th><th>&nbsp;Dienos taškai&nbsp;</th></tr>");
	
	$.post( "http://pogo.lt/total/part.php" , {today: window.today}).done (function( data ) { 
	
	var part = jQuery.parseJSON( data );
	
	for (var i = 0; i < part['user'].length; i++)
	{
		if (part['user'][i] == window.user) {var bgcolor = "bgcolor='#00FFFF'";}
		else {var bgcolor = "bgcolor='#E6E6E6'";}
	
	$("#represent_part tr:last").after("<tr align='center' style='color:#333333'" + bgcolor + "><td>" + part['user'][i] +"</td><td>" + part['correct'][i] +"</td><td>" + part['diff'][i] +"</td><td>" + part['end'][i] +"</td><td>" + part['total_pts'][i] + "</td></tr>");
	}
});
}
//--------------------Dienos statistikos pildymo pabaiga------------------------------------


//-------------------Užpildoma bendra statistika--------------------------------------------------
function all_stats() {
	$("#represent_part_all").empty();	
	$("#represent_part_all").append("<tr><td colspan='5'><span style='font-size:16px'>Bendra rezultatų lentelė</span></td><td width='10%'>&nbsp;</td></tr><tr><td colspan='4'>&nbsp;</td></tr><tr><th>Dalyvis&nbsp;</th><th>&nbsp;Tiksliai&nbsp;</th><th>&nbsp;Baigtis&nbsp;</th><th>&nbsp;Skirtumas&nbsp;</th><th>&nbsp;Visi taškai&nbsp;</th></tr>");
	
	
	$.post( "http://pogo.lt/total/part.php" , {today: "ALL"}).done (function( data ) { 
	
	var part = jQuery.parseJSON( data );
	
	for (var i = 0; i < part['user'].length; i++)
	{
		if (part['user'][i] == window.user) {var bgcolor = "bgcolor='#00FFFF'";}
		else {var bgcolor = "bgcolor='#E6E6E6'";}
		
	$("#represent_part_all tr:last").after("<tr align='center' style='color:#333333'" + bgcolor + "><td>" + part['user'][i] +"</td><td>" + part['correct'][i] +"</td><td>" + part['diff'][i] +"</td><td>" + part['end'][i] +"</td><td>" + part['total_pts'][i] + "</td></tr>");
	}
	
});
}
//--------------------Bendros statistikos pildymo pabaiga------------------------------------	



$("#register_btn").click(function() {
	$("#signin").hide();  
	$("#register").show();
	$("#tableContainer").center();
});	

$("#day_stats_btn").click(function() {
	$("#submitbet").hide();  
	$("#day_stats").show();
	day_stats();
	});

$("#back_day").click(function() {
	$("#day_stats").hide();
	$("#submitbet").show();  
	});	
	
$("#total_stats_btn").click(function() {
	$("#submitbet").hide();  
	$("#total_stats").show();
	all_stats();
	});

$("#back_total").click(function() {
	$("#total_stats").hide();
	$("#submitbet").show(); 
	});	
	
$("#back_bets").click(function() {
	$("#userbets").hide();
	$("#submitbet").show();
	});			






$("#register_proceed").click(function() {
	
$("#main_form").submit();

});

$("#cancel").click(function() {
	
location.reload();

});



$("#bet").click(function() {
	
	var code = $("#daycode").val();
	
	$.post( "http://pogo.lt/total/daycode.php" , {date: today, code: code} ).done (function( data ) { 
		if (data == "ALLOWED") {
			
	$("#represent_bets").empty();	
	$("#represent_bets").append("<tr><td colspan='5'><table width='100%'><tr align='center'><td width='20%'><img src='http://pogo.lt/brasil2014/logo.fw.png' width='46' height='23'/></td><td width='60%'>Pogo Totalizatorius</td><td width='20%'><img src='http://pogo.lt/brasil2014/logo_brasil.fw.png' width='46' height='23'/></td></tr></table></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr>");		
$.post( "http://pogo.lt/total/matches.php" , {today: window.today, user: window.user}).done (function( data ) { 

	var select_result = "<option value='0'>0</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option></select>";
	
	var matches = jQuery.parseJSON( data );
	
	for (var i = 0; i < matches['team1'].length; i++)
	{
		if (matches['result1'][i] == "30") {tempResult1 = "<select id='result1" + i + "'>" + select_result; tempButton = "<a class='bet_btn'  id='bet" + i + "'>Pateikti spėjimą</a>"} else { tempResult1 = matches['result1'][i]; tempButton = "Jau spėta"}
		
		if (matches['result2'][i] == "30") {tempResult2 = "<select id='result2" + i + "'>" + select_result} else { tempResult2 = matches['result2'][i];}
		
		$("#represent_bets").append("<tr><table width='100%'>" +
		"<tr><td rowspan='2' valign='bottom' width='10%'>" + matches['time'][i] + "</td></tr>" +
		"<tr><td valign='bottom' width='10%'><img class='flag flag-" + matches['flag1'][i] +"' /></td>" +
		"<td rowspan='2' valign='center' align='center' width='15%'>" + tempResult1 +"</td>" +
		"<td rowspan='2' valign='center' align='center' width='15%'>" + tempResult2 +"</td>" +
		"<td align='left' valign='bottom' width='10%'><img class='flag flag-" + matches['flag2'][i] +"' /></td>" +
		"<td rowspan='2' valign='center' align='center' width='30%'>" + tempButton + "</td><td width='10%'>&nbsp;</td></tr>" +
		"<tr><td id='team1" + i + "' valign='top'>" + matches['team1'][i] +"</td>" +
		"<td id='team2" + i + "' valign='top'>" + matches['team2'][i] +"</td>" +
		"</table></tr>");
		
		$("#represent_bets").append("<tr><td>&nbsp;</td></tr>");
	}
	
	
	
$(".bet_btn").click(function() {
	
var id = $(this).attr("id").substring(parseInt($(this).attr("id").length) - 1, $(this).attr("id").length);
var result1 = $("#result1" + id).val();
var result2 = $("#result2" + id).val();
var matchcode = $("#team1" + id).html() + $("#team2" + id).html();

 $.post( "http://pogo.lt/total/bets.php" , {result1: result1, result2: result2, id: id, today: window.today, user: window.user, matchcode: matchcode}).done (function( ) { 
 $("#bet").click();
		});
});

		
});	
					
			$("#submitbet").hide();  
			$("#userbets").show();}
		else {alert("Neteisingas dienos kodas!");}	
	});

});	


form = $("#main_form");

    $("#main_form").validate({ 
        rules: {
            user: {
                required: true
            },
			pass: {
                required: true
            },
			pass2: {
				required: true,
      			equalTo: "#pass"
    		},
			name: {
                required: true
            },
			surname: {
                required: true
            },
			email: {
                required: true,
                email: true
            }			
        },

		 messages: {
    		user: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>"
    				},
			pass: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>"				
    				},
			pass2: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>",
				equalTo: "<span style='font-size:12px; color:#CCC'>  Slaptažodžių nesutapimas</span>"
    				},
			name: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>"
    				},
			surname: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>"
    				},
    		email: {
      			required: "<span style='font-size:12px; color:#CCC'>  Privalomas laukas</span>",
      			email: "<span style='font-size:12px; color:#CCC'>  Netinkamas formatas</span>"
    				}

  			},

        submitHandler: function ( form ) { 
        	var formData = $( "#main_form").serializeArray();
		formData.push({ name: "uuid", value: device.uuid });
        	
           $.post( "http://pogo.lt/total/new_reg.php" , formData ).done (function( data ) { 
           	alert (data); 
           	location.reload();
           	
		});
        }

    });


$.post( "http://pogo.lt/total/uuid.php" , {uuid: device.uuid}).done (function( data ) { 
           	
           	var userpass = jQuery.parseJSON( data );
           	
           	if (userpass['user'] != ""){
           	$("#user_signin").val(userpass['user'] );
           	$("#pass_signin").val(userpass['pass'] );
           	}
           	
		});    
   

}
