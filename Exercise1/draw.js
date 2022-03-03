var imgInput = document.getElementById('img');

imgInput.addEventListener('change',function(events){
    if(events.target.files){
         let imgFile = events.target.files[0];//Here we get the image file

         var reader = new FileReader();
         reader.readAsDataURL(imgFile);

         reader.onloadend = function (events){

          var myImage = new Image();//create image object
          myImage.src = events.target.result;//assigns converted image to image object
          myImage.onload = function(){

              var myCanvas = document.getElementById("canvasUploadImg");//Create a canvas objecy
              myCanvas.width = myImage.width; //assigns image's width
              myCanvas.height = myImage.height;//assigns image's height
              var myContext = myCanvas.getContext("2d");//Create contect object
              myContext.drawImage(myImage,0 ,0);//Draw the image on canvas
          }
         }
    }
});

