for(var i = 1; i <= 100; i++){
    console.log(i)

    var output ="";

    if(i % 3 ==0){ output += "Fizz"}
    if(i % 5 ==0){ output += "Buzz"}

    if(output == ""){output = i;}

    document.getElementById("output").innerHTML += "<p>"+output+"</p>";
    console.log(output);
}
