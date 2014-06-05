$(document).ready(function () {
	
	
	form = $("#main");

    $("#main").validate({ 
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
           $.post( "http://pogo.lt/total/new_reg.php" , $("#main").serialize()).done (function( data ) { 
		});
        }
		
    });

});
