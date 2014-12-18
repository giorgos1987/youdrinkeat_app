/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
/** 
 * This function runs once the page is loaded, but intel is not yet active 
 *

var windowHeight;
var init = function () {
    windowHeight=window.innerHeight;
    var currentpic = document.getElementById("slideshowpicid");  
    currentpic.onload=alignImageMiddle;
};

window.addEventListener("load", init, false);  

**
 * Prevent Default Scrolling 
 *
var preventDefaultScroll = function(event) 
{
    // Prevent scrolling on this element
    event.preventDefault();
    window.scroll(0,0);
    return false;
};
    
window.document.addEventListener("touchmove", preventDefaultScroll, false);

/**
 * Device Ready Code 
 * This event handler is fired once the JavaScript bridge library is ready
 **/

     var canvas;
     var canvasNew;
      var canvasWidth;
      var ctx;


var windowHeight;
var init = function () {
    windowHeight=window.innerHeight;
    var currentpic = document.getElementById("slideshowpicid");
    currentpic.onload=alignImageMiddle;
};

//window.addEventListener("load", init, false); 

function onDeviceReady()
{
    //lock orientation
    intel.xdk.device.setRotateOrientation("portrait");
    intel.xdk.device.setAutoRotate(false);
        
    //manage power
    intel.xdk.device.managePower(true,false);

    //hide splash screen
    
    
   // updateSize();
    
    
    intel.xdk.device.hideSplashScreen();
    
    
     $("#logout").hide();
    
    $("#upload").hide();
    $("#sharefcb").hide();
}
 function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }   
document.addEventListener("intel.xdk.device.ready",onDeviceReady,false); 
  
//var image1= new Image();

//Event listener for camera
document.addEventListener("intel.xdk.camera.picture.add",onSuccess); 
document.addEventListener("intel.xdk.camera.picture.busy",onSuccess); 
document.addEventListener("intel.xdk.camera.picture.cancel",onSuccess); 
var picturecount=0;
var watermarkObj;
function onSuccess(event) 
{
    if (event.success === true)
    {
       var imagesrc = intel.xdk.camera.getPictureURL(event.filename);
      ///////  var pic1 = document.getElementById("photoone");
      
        
        
       // var att=document.createAttribute("src");
       // att.value= event.filename.toString;//imagesrc.toString;
        
        // create image 
    /* image1 = document.createElement('img');
     image1.src=intel.xdk.camera.getPictureURL(event.filename);
     image1.id= "new";
        image1.height= window.innerHeight;
        image1.width= window.innerWidth;*/
  //  $('#photo').src =  image1src;
        
    document.getElementById("photo").src=imagesrc;//.setAttributeNode(att);
     
   
             
    }
    else
    {
        if (event.message !== undefined)
        {
            alert(event.message);
        }
        else
        {
            alert("error capturing picture");
        }
    }
}
/*
//This function creates the slideshow of the captured pictures.
function makeslideshow()
{
    var changebutton = document.getElementById("buttonid");
    var pic1 = document.getElementById("photoone");
   // var pic2 = document.getElementById("phototwo");
  //  var pic3 = document.getElementById("photothree");
    pic1.className="hide";
  //  pic2.className="hide";
  //  pic3.className="hide"; 
    changebutton.innerHTML="Take Picture";   
    changebutton.className="button hide";
    document.getElementById("imagecontent").className="show";
    var currentpic = document.getElementById("slideshowpicid");
    currentpic.src=pic1.src;
}

function alignImageMiddle(){
    var currentpic = document.getElementById("slideshowpicid");  
    var height = window.innerHeight;
    currentpic.style.marginTop=(height-currentpic.offsetHeight)/2+"px";
}

/**
 * The following functions could be a single function that moves forwards or backwards.
 * For the demo we want users to be able to see exactly what is going on
 *

//Move to the next picture.  If we are at the last picture, we jump to the first.
function Next()
{
    var pic1 = document.getElementById("photoone");
    var pic2 = document.getElementById("phototwo");
    var pic3 = document.getElementById("photothree");
    var currentpic = document.getElementById("slideshowpicid");
    var currentsrc = currentpic.src;

    if(currentsrc===pic1.src)
    {
        document.getElementById("slideshowpicid").src=pic2.src;  
    }
    else if(currentsrc===pic2.src)
    {
        document.getElementById("slideshowpicid").src=pic3.src;
    }
    else
    {
        document.getElementById("slideshowpicid").src=pic1.src;
    }
    
}

//Move to previous picture.  If we are at the first picutre, we jump to the last.
function Previous()
{
    var pic1 = document.getElementById("photoone");
    var pic2 = document.getElementById("phototwo");
    var pic3 = document.getElementById("photothree");

    var currentsrc = document.getElementById("slideshowpicid").src;

     if(currentsrc===pic1.src)
    {
       document.getElementById("slideshowpicid").src=pic3.src; 
    }
    else if(currentsrc===pic2.src)
    {
        document.getElementById("slideshowpicid").src=pic1.src;
    }
    else
    {
       document.getElementById("slideshowpicid").src=pic2.src;
    }

}*/

//Functionality to end the slideshow
/*
function endslideshow()
{
    document.getElementById("imagecontent").className="hide";
    picturecount=0;

    var pic1 = document.getElementById("photoone");
    var pic2 = document.getElementById("phototwo");
    var pic3 = document.getElementById("photothree");
    var changebutton = document.getElementById("buttonid");
    
    pic1.className="";
    pic2.className="";
    pic3.className="";  

    pic1.src="images/EmptyBox-Phone.png";
    pic2.src="images/EmptyBox-Phone.png";
    pic3.src="images/EmptyBox-Phone.png";
    
    changebutton.onclick=takepicture;  
    changebutton.className="button";
}
*/
//Camera button functionality
function takepicture()
{
    intel.xdk.camera.takePicture(70, true, "jpg");
} 

//choose watermark
function getwatermark(){}


//
function importImage(){
  intel.xdk.camera.importPicture();


}

// Converts canvas to an image
function convertCanvasToImage(canvas) {
	var image = new Image();
	image.src = canvas.toDataURL("image/jpg");
	return image;
}


// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
	var canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
    context.translate(canvas.width/2, canvas.height/2);
    contextR = canvasTag.getContext("2d");
     contextR.rotate(90 * (Math.PI / 180));
	contextR.drawImage(image, -(canvas.width/2), -(canvas.height/2), canvas.width/2, canvas.height/2);


	return canvas;
}

var strName;
 
//upload watermarked pic to php server 
function uploadpic(){
  /*      $.ajax({
  type: "POST",
  url: "http://youdrinkeat.com/uploadfromapp.php",
  data: { 
     imgBase64: img.src;//dataURL
  }
}).done(function(o) {
  console.log('saved'); 
  // If you want the file to be visible in the browser 
  // - please modify the callback in javascript. All you
  // need is to return the url to the file, you just saved 
  // and than put the image in your browser.
});*/
   
    var canvfinal = document.getElementById("canvasid");
    strName  = '';
 ////////////// douleuei   var canvfinal = document.getElementById("canvasid");
   //youdecanvas");//youdecanvas");//.getElementsByTagName("canvas");
    
   strName= randomString();
      alert(strName);

  //19-5 ok 
    var iisrc =  canvfinal.toDataURL();
   
    //POST method example imgBase64
intel.xdk.device.getRemoteData("http://youdrinkeat.com/uploadfromapp.php","POST","img="+iisrc+"&strName="+strName,"success_handler","error_handler");
    
    
     
}

function error_handler(){
	$("#sharefcb").hide();
 document.getElementById("uploadStatus").innerHTML = "<font color='#9ea9b5'>Image doesn't uploaded .Please try again.</font>";

}

function success_handler(){
 
$("#sharefcb").show();
     document.getElementById("uploadStatus").innerHTML = "<font color='#9ea9b5'>Image uploaded .Now you can share to facebook.</font>" ;
    
}









function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
      




   function gotPic(data1) {
        window.resolveLocalFileSystemURI(data1, function(entry) {
 
        var reader = new FileReader();
            
        reader.onloadend = function(evt) {
            var byteArray = new Uint8Array(evt.target.result);
            var output = new Array( byteArray.length );
            var i = 0;
            var n = output.length;
            while( i < n ) {
                output[i] = byteArray[i];
                i++;
            }                
            var parseFile = new Parse.File("mypic.jpg", output);
 
            parseFile.save().then(function(ob) {
                    navigator.notification.alert("Got it!", null);
                    console.log(JSON.stringify(ob));
                }, function(error) {
                    console.log("Error");
                    console.log(error);
                });
                
        }
            
        reader.onerror = function(evt) {
              console.log('read error');
              console.log(JSON.stringify(evt));
          }
            
        entry.file(function(s) {
            reader.readAsArrayBuffer(s);
        }, function(e) {
            console.log('ee');
        });
            
    });

   }

 

function getQRcode(){


intel.xdk.device.scanBarcode();


}

var imageQRsrc;

document.addEventListener("intel.xdk.device.barcode.scan",function(evt){
        intel.xdk.notification.beep(1);
        if (evt.success == true) {
                //successful scan
                console.log(evt.codedata);
            
         imageQRsrc =   evt.codedata ;
            
            /*
                if (evt.codedata == "http://www.sampleurl.com/fake.html")
                {
                        //in the XDK
                }
                else
                {
                        alert(evt.codedata);
                }*/
        }else {
                //failed scan
                console.log("failed scan");
        }
},false);






var previousConnectionState = "";
document.addEventListener("intel.xdk.device.connection.update",function(e){
        if (previousConnectionState != intel.xdk.device.connection)
        {
                previousConnectionState = intel.xdk.device.connection;
               // debug(intel.xdk.device.connection);
                alert("No internet connection");
        }
        setTimeout("intel.xdk.device.updateConnection();",2000);  //after we get an update on the connection, check again 2 seconds later
},false);






























function updateUploadProgress(bytesSent,totalBytes)
{
   if(totalBytes>0)
        currentProgress=(bytesSent/totalBytes)*100;
   document.getElementById("uploadStatus").innerHTML=currentProgress+"%";
}

document.addEventListener("intel.xdk.file.upload.busy",uploadBusy);
document.addEventListener("intel.xdk.file.upload",uploadComplete);
document.addEventListener("intel.xdk.file.upload.cancel",uploadCancelled);

function uploadBusy(evt)
{
   alert("Sorry, a file is already being uploaded");
}

function uploadComplete(evt)
{
   if(evt.success==true)
   {
      alert("File "+evt.localURL+" was uploaded");
   }
   else {
      alert("Error uploading file "+evt.message);
   }
}

function uploadCancelled(evt)
{
    alert("File upload was cancelled "+evt.localURL);
}       








function initializeCanvas(){


   var windowHeight=window.innerHeight;
    
   var windowWidth=window.innerWidth;
    var currentcanv = document.getElementById("canvasid");
    
    
    currentcanv.style.maxWidth=windowWidth;
    currentcanv.style.maxHeight=windowHeight;
    currentcanv.style.minWidth=windowWidth;
    currentcanv.style.minHeight=windowHeight;
    
   // currentcanv.setAttribute("width",windowWidth );
   //currentcanv.setAttribute("height",windowHeight );

}







		
