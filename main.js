Webcam.set({ 
    width:350,
     height:300,
     image_format : 'png',
      png_quality:90 });
       camera = document.getElementById("camera");
     Webcam.attach( '#camera' );

function take_snapshot(){
Webcam.snap(function(data_uri)

//webcam.snap is a predefined function of webcam.js used to take images from a webcam 
//data_uri that can be used to show preview of the image which generates after taking a snapshot.

{
    document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';

    // pass data_uri. So that this image gets updated with the selfie taken and gets displayed.
});
}

console.log('ml5 version: ' , ml5.version);

// ml5.js which is used to work with machine learning

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nu5wqznE7/model.json',modelLoaded);

//- imageClassifier is a predefined function of ml5.js that is used to trigger the ml5.js image classification function.

function modelLoaded(){
    console.log('modelLoaded');
}

function check(){
    img=document.getElementById('capture_image');
    classifier.classify(img,gotResult);
}

function gotResult(error, results){
if(error){
    console.error(error);

}

else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_accuracy_name").innerHTML=results[0].confidence.toFixed(3);
}
}
