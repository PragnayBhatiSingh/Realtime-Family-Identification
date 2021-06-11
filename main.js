function setup() {
    canvas = createCanvas(250, 250);
    canvas.position(500, 90);
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_ON-rumj0/model.json", modal_loaded);
}

function modal_loaded() {
    console.log("Teachable Machine Is Loaded");
}

function draw() {
    image(video, 0, 0, 250, 250);

    classifier.classify(video, got_results);

}

function got_results(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
