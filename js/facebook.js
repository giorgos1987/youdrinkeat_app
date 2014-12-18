document.addEventListener("intel.xdk.facebook.dialog.complete",function(e) {
	console.log("News Feed Event Returned");
	if (e.success == true) {
		console.log("News feed updated successfully");
         document.getElementById("facebookStatus").innerHTML = "News feed updated successfully" ;
	} 
},false);

function logInToFacebook() {
	//alert("about to log into facebook");
	document.addEventListener("intel.xdk.facebook.login",function(e){
		if (e.success == true) 
		{ 
			console.log("Facebook Log in Successful"); 
			AppMobi.cache.setCookie("facebookLoggedIn", "true", -1);
            $("#FBlogin").hide();
            $("#logout").show();
            //new
            $("#upload").show();
		} 
		else 
		{ 
			console.log("Unsuccessful Login"); 
			AppMobi.cache.setCookie("facebookLoggedIn", "false", -1);
		}
	},false); 
	intel.xdk.facebook.login("publish_stream,publish_actions,offline_access");
    
    
    
	AppMobi.facebook.login("email,publish_stream,publish_checkins,photo_upload"); 
}

var canvf = document.getElementById("canvasid");
function postToWall()
{
    
    
     
    
 ////////////// douleuei   var canvfinal = document.getElementById("canvasid");
   //youdecanvas");//youdecanvas");//.getElementsByTagName("canvas");
 /////   canvf = document.getElementById("canvasid");
 ////   var data = canvf.toDataURL("image/jpg");
 ////     var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
//////  var decodedPng = Base64Binary.decode(encodedPng);
	
	var d=new Date();
	//document.write(d);
	var objParameters = {
        
		"picture": "http://youdrinkeat.com/images/app/"+strName+".png",////decodedPng, 
		"name": "youDrinkEat app.Share your drink eat moments to social media...",
		//"caption":"Todays workout: " + wodName + ": " + wodScore,
		"caption": d,
		//"description":"Using Dialogs to interact with users.",
		//"description":notes,
		//"link":"http://13stripescrossfit.com/"	// dont use, it redirects to maps app for some reason
		//"link":"http://www.facebook.com/pages/13-Stripes-CrossFit/207588189335019",
		//"properties":{"property1":"blue","property2":"quirky","property3":"moist"}
	}
	AppMobi.cache.setCookie("facebookLoggedIn", "true", -1);
	intel.xdk.facebook.showNewsFeedDialog(objParameters);
	
}

function logOutOfFacebook() {
	//alert("logging out of facebook");
	
	
	document.getElementById("facebookStatus").innerHTML = "trying to logout" ;
		
	document.addEventListener("intel.xdk.facebook.logout",function(e){
		if (e.success == true) 
		{
            document.getElementById("facebookStatus").innerHTML = "Logged out of Facebook" ;
			alert("Logged out of Facebook"); 
			console.log("Logged out of Facebook"); 
		} 
		else 
		{ 	
            document.getElementById("facebookStatus").innerHTML = "Unsuccessful Logout" ;
			console.log("Unsuccessful Logout");  
		 	alert("Unsuccessful Logout"); 
		}
	},false); 
	intel.xdk.facebook.logout();
    
      $("#logout").hide();
	  $("#FBlogin").show();
}

















