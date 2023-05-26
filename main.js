Webcam.set({
    width:450,
    height:500,
    image_format:"png",
    png_quality:90
})
var barcelona = document.getElementById("charmander")
Webcam.attach(barcelona)
var city = ml5.imageClassifier("teachablemachine.withgoogle.com/models/9hRgyqZsn/model.json",modelocargado)
function modelocargado(){
    console.log("Cargado")
}