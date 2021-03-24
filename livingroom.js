    img = "";
    status = "";
    objects = [];
    
    function preload(){
        img = loadImage("livingroom.jpg");
    
      }
    
    function setup(){
        canvas = createCanvas(380,380);
        canvas.center();
        
        objectDetector = ml5.objectDetector("cocossd", modelLoaded);
        document.getElementById("status").innerHTML = "Status: object detecting";
    
        
    }
    
    function modelLoaded() {
        console.log("Model loaded");
        status = true;
        objectDetector.detect(img, gotResult);
    }
    
    function gotResult(error, results) {
        if (error) {
            console.error(error);
        }
            console.log(results);
            objects = results;
    }
    
    function draw() {
        image(img, 0, 0, 380, 380);
        
        if (status != "") {
            
            for (var i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status: object detected";
    
                document.getElementById("no_of_objects").innerHTML = "no of objects detected are" + objects.length;
                fill("#ff3300");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15 , objects[i].y + 15);
                noFill();
                stroke("#ff3300");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
    
        
        
        }


        function back() {
            window.location.assign("Index.html")
        }