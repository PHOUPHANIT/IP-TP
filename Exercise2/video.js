    
    var canvas = document.getElementById('viewport');
    var video = document.createElement('video');
    var button = document.getElementById("button");
        video.autoplay = true

    navigator.mediaDevices.getUserMedia({audio: false,video: true})
    .then((stream)=> {
        video.srcObject = stream

    }).catch(err => {
       console.log('navigator.mediaDevices.getUserMedia error: ',err.message,err.name);

    })

    function onclickToRender() {
        
        (function loop() {

            canvas.getContext('2d').drawImage(video,0,0,canvas.width,canvas.height);
            setTimeout(loop,1000/30);
        
        })();
    
    }
    button.addEventListener("click", function(){
        if(video.paused){
          video.play();
          button.innerHTML = "Pause";
        } else {
                video.pause();          
                button.innerHTML = "Play";
                
        }
    });
      


