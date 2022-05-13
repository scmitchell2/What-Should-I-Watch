let horror = ["The Nun", "Hereditary", "Get Out"];

$(".horror").click(function() {

    // write your for loop here

   // for (let name of horror) {
     //   $(".horror-recommend").append("<p>" + name + "</p>");
//    }
    
     $(".horror-recommend").append("<p>" + horror[0] + "</p>");
    }
);

//declare your new array here

$(".comedy").click(function() {
    let comedy = ["Rush Hour 1", "Madea's Boo", "Deadpool"];
    for (let name of comedy) {
        $(".comedy-recommend").append("<p>" + name + "</p>");
    }
});

$(".action").click(function() {
            let action = ["Six Underground", "Bright", "Wonderwoman"];
            for (let name of action) {
                $(".action-recommend").append("<p>" + name + "</p>");
            }
});

