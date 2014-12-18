(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(document).on("click", "#sidebar_btn", function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_1"));  
        });
        $(document).on("click", ".uib_w_30", function(evt)
        {
        /* your code goes here */ 
        });
     
     $(document).on("click", "#uploadbutton", function(evt)
        {
     /*   
      //  var canv = document.getElementById("canvasid");
      var urlCa = canvfinal.toDataURL();
              
/////////////////////////////////        
      var blobBin = atob(urlCa.split(',')[1]);
            alert(blobBin.toString);
var array = [];
for(var i = 0; i < blobBin.length; i++) {
    array.push(blobBin.charCodeAt(i));
}
var file=new Blob([new Uint8Array(array)], {type: 'image/jpg'});
            
var formdata = new FormData();
formdata.append("myNewFileName", file);
        /////////////////////////////////
        
          alert(file.type);     
      //var encodedPng = urlCa.substring(urlCa.indexOf(',') + 1, urlCa.length);
//  var decodedPng = Base64Binary.decode(encodedPng);
        
      var serverUrl = "https://api.parse.com/1/files";

     $.ajax({
        type: "POST",
        beforeSend: function(request) {
          request.setRequestHeader("X-Parse-Application-Id", 'ndBZ3z3ljrNd8q1VmSdVzdZsUaMgW2FdJRQq04uk');
          request.setRequestHeader("X-Parse-REST-API-Key", 'KUjV6cCsAbSkOLmw4rp0vIPgaxRoixY08LpOGPYR');
          request.setRequestHeader("Content-Type", 'image/jpg');
        },
        url: serverUrl,
        data: formdata,
        processData: false,
        contentType: false,
        success: function(data) {
          alert("File available at: " + data.url);
        },
        error: function(data) {
          var obj = jQuery.parseJSON(data);
          alert(obj.error);
        }
      });
           */
             alert("upload button");
            var data1 = canvfinal.toDataURL();
           gotPic(data1);   
            /***********************************************888
              alert("upload button");
            
 
             
              // REST API
        var canv1s = document.getElementById("canvasid");

    var http = new XMLHttpRequest();
    var url = "https://api.parse.com/1/files/test.jpg";
    http.open("POST", url, true);
      alert(url);         
    //Send the proper header information along with the request                                                                                                                  
    http.setRequestHeader("Content-type", "text/plain");
    http.setRequestHeader("X-Parse-Application-Id", 'ndBZ3z3ljrNd8q1VmSdVzdZsUaMgW2FdJRQq04uk');
    http.setRequestHeader("X-Parse-REST-API-Key", 'KUjV6cCsAbSkOLmw4rp0vIPgaxRoixY08LpOGPYR');  
              
     //  alert(url);        
              var data1 = canv1s.toDataURL("image/jpg");
             alert("canvf.toDataURL()=");
 // alert(data1);
     
       //POST method example imgBase64
intel.xdk.device.getRemoteData("http://youdrinkeat.com/uploadfromapp.php","POST","img="+data1,"success_handler","error_handler");         
            
  data1 = data1.substring(data1.indexOf(',')+1,data1.length);
   
  alert(" data.substring(data.indexOf(',')+1)=");
          //  alert(data1);
    var jsonData = { "base64": data1, "_ContentType": "image/jpg" };
           //  alert(jsonData);
//Call a function when the state changes. 
    http.onreadystatechange = function() {                                  
        alert("onreadystatechange");                                                         
        if(http.readyState == 4 && http.status == 201) {
            var returnVals = JSON.parse(http.responseText);
           
             alert("it json");
        }
    };

    http.send(JSON.stringify(jsonData));
           //  alert(JSON.stringify(jsonData));

          
       
     //   };
    //   uploadedImage.src = dataUrl;  
            
        *************/    
            
            
        
            
            
            
            
            //end of button
    });
/*
 var http = new XMLHttpRequest();
    var url = "https://api.parse.com/1/files/test.png";
    http.open("POST", url, true);
        
       // /Send the proper header information along with the request                                                                                                                  
    http.setRequestHeader("Content-type", "text/plain");
    http.setRequestHeader("X-Parse-Application-Id", 'ndBZ3z3ljrNd8q1VmSdVzdZsUaMgW2FdJRQq04uk');
    http.setRequestHeader("X-Parse-REST-API-Key", 'KUjV6cCsAbSkOLmw4rp0vIPgaxRoixY08LpOGPYR');

    var data = canv.toDataURL();
    data = data.substring(data.indexOf(',')+1);
      
      var jsonData = { "base64":data,"_ContentType":"image/png" };
      
      http.onreadystatechange = function() {//Call a function when the state changes.                                                                                              
        if(http.readyState == 4 && http.status == 201) {
            var returnVals = JSON.parse(http.responseText);
            //console.log(returnVals);
        }
              http.send(JSON.stringify(jsonData));
 
        });
     
     */
}
 $(document).ready(register_event_handlers);
})();
