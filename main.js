Webcam.set({
    width : 250,
    height :250,
    image_format :'png',
    png_quality: 60
});

camera = document.getElementById("webcam");
Webcam.attach('#camera');

function CAPTURE(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapshot").innerHTML='<img id="final_img" src="'+data_uri+'">';
    });
    }

