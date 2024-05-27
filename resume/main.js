function myFunction(){
    while (1){

        var name=prompt("Password","");
        if (name === "guess"){
            document.getElementById("page").style.visibility = "";
            return;
        }
        alert("Incorrect")

    }

}
myFunction();