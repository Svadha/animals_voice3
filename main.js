https://teachablemachine.withgoogle.com/models/x-V5b-hxr/
function start()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fEoy4klB5/model.json",modelReady);

}
function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results)
{
    if (error){
        console.error(error);

    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()* 255) + 1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255) + 1;
         
        document.getElementById("voice").innerHTML="I can hear - " +  results[0].label;
        
        document.getElementById("voice").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_r+")";
        
       
        img1 = document.getElementById('img');
        

        if (results[0].label=="Dog")
        {
            img1.src ="https://img.freepik.com/premium-vector/cute-little-dog-cartoon-isolated-white-background_29190-4196.jpg?w=2000";
            
            
        }
        else if (results[0].label =="Cat")
        {
            img1.src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80";
            
        }
        
        else {
            img1.src='https://i.postimg.cc/jjP0wbjN/ear-removebg-preview-1.png';
            
        }
    }
   
}