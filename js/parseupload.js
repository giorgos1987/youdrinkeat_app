
  $(function() {
    

    /* Set an event listener on the Choose File field.
    $('#fileselect').bind("change", function(e) {
      var files = e.target.files || e.dataTransfer.files;
      // Our file var now holds the selected file
      file = files[0];
    });*/

    // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
 //   $('#uploadbutton').click(
          $('#uploadbutton').click(function() {
        
             /*
               alert("upload button");
              
               // REST API

    var http = new XMLHttpRequest();
    var url = "https://api.parse.com/1/files/test.png";
    http.open("POST", url, true);
              
    /Send the proper header information along with the request                                                                                                                  
    http.setRequestHeader("Content-type", "text/plain");
    http.setRequestHeader("X-Parse-Application-Id", '******************APP ID');
    http.setRequestHeader("X-Parse-REST-API-Key", '**********PARSE KEY ******************');  
              
              
              var data = canvfinal.toDataURL();
    data = data.substring(data.indexOf(',')+1);
    console.log(data)

    var jsonData = { "base64":data,"_ContentType":"image/png" };

    http.onreadystatechange = function() {//Call a function when the state changes.                                                                                              
        if(http.readyState == 4 && http.status == 201) {
            var returnVals = JSON.parse(http.responseText);
            console.log(returnVals)
             alert("yay! it json");
        }
    };

    http.send(JSON.stringify(jsonData));

              
       
        };*/
      // uploadedImage.src = dataUrl; 
          
          var data1 = canvfinal.toDataURL();
           gotPic(data1);   
              
        
               
          
          
          
          };
 });
//
