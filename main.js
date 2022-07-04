var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
function take_snapshot()
{
    console.log(img_id);


    Webcam.snap(function(data_url){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = 'img id="selfie1" src="'+data_url+'"/>';
        }
        {
            if(img_id=="selfie2"){
                document.getElementById("result2").innerHTML = 'img id="selfie2" src="'+data_url+'"/>';

        }
        {
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML = 'img id="selfie3" src="'+data_url+'"/>';
        }
    });
}


Webcam .set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90 
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam .snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/AbdfLbMYV/',modelLoaded);