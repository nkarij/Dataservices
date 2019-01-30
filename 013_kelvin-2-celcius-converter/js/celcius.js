document.addEventListener('DOMContentLoaded', () => {

    let kelvinOutputElement = document.querySelector("#kelvin-output"); 
    let kelvinInput = document.querySelector("#input-kelvin");

    kelvinInput.addEventListener('input', function(){

        let kelvinValue = this.value;

        function kToC(kelvin){
            if(kelvinValue == 0){
                // console.log("Kelvin er 0");
            }else{
                var kTemp = kelvin;
                var kToCel = kTemp -273;
                var message = kTemp + "K" + " is " + kToCel + "℃";
                // console.log(message);
                kelvinOutputElement.innerHTML = message;
            };
            }

        kToC(kelvinValue);

    });
    
    function kelvinToCelcius(kelvin){

    }

    

});