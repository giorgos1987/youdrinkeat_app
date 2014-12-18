
			///////////////////////////////pure    
			                              /* HTML 5 geolocation. */  
			                             navigator.geolocation.getCurrentPosition(function(data) {
			                                var lat = data['coords']['latitude'];
			                                var lng = data['coords']['longitude'];
			                              // var  lat = "38.24664";
			                              // var  lng = "21.73457";
			
			
			                               //////////////////////////////json start /////////////  
			                                 $.getJSON('https://api.foursquare.com/v2/venues/search?client_id=5JCQU0YRIMHEVCV2PZ03A0M45VZY1RMCCHO1AESIS02HCOUG&client_secret=_MYSECRET_PSSWD_&v=20130815&ll='+lat+','+lng,
			                                function(data) {
			                                    $.each(data.response.venues, function(i,venues){
			                                        content = "<option value='"+i+"'>"+ venues.name +"</option>";//      '<p>' + venues.name + '</p>';
			                                        $(content).appendTo("#names");
			                                   });
			                            });/////json ends//////////////////////////////////////
			
			
			
			
			                             });    //////pure javascript HTML 5 geolocation. ///////////////////////////////////////////// 
			
			           
			
			                       
			
			                                               //select change text watermark 
			                            //when select user different text
			                            //var make=document.getElementById("names");
			                            //make.addEventListener('change', function(){
			                            //    setselectionvalue(this.value)
			                            //}, false);     
			
			                            //function returnText() { 
			                            //   wtrm_txt =   $("#names option:selected").text();
			                             // return wtrm_txt;
			                            //}
		
