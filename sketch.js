

// 오류방지
_tfengine.ENV.set('WEBGL_PACK', false);


// grab reference for needed elements
// .image
const image = document.querySelector('.image');
// .label-text
const labelText = document.querySelector('.label-text');
// .accuracy-text
const accuracyText = document.querySelector('.accuracy-text');
// .predict-btn
const predictBtn = document.querySelector('.predict-btn');
// .upload-btn will go here

// Loading our MobileNet model
const model = ml5.imageClassifier("MobileNet", modelReady);


// A variable to hold the image we want to classify

function modelReady(){

    console.log("MobileNet model Ready")

    predictBtn.disabled = false;
  /* then attach an 'click' eventListener to .predict-btn */
    predictBtn.addEventListener('click', predict);   
        
}

function predict(){

    model.predict(image, gotResults)
}


function gotResults(err, results){

    if(err){
        console.error(err);
    } else {
        console.log(results);
        const label = results[0].label.toUpperCase();
        const accuracy = (results[0].confidence * 100).toFixed(2);

        /* update .label-text and .accuracy-text */
        labelText.innerText = label;
        /* Careful Here: Use back-ticks ``, Not single quote '' or double quote "" */
        accuracyText.innerText = `Accuracy: ${accuracy}%`;
        
    }

}



