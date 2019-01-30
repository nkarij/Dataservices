document.addEventListener('DOMContentLoaded', () => {

    /*http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8acbc6e8a7dc23dc79a92890a707d33b */
    
    let fetchUrl = "https://api.fda.gov/drug/event.json?limit=1";
    let apiKeyPhrase = "&api_key=";
    let apiKey = "Ss82U6dawooBqYzICJya4LXzrWzqIlNJDhdXJEX6";


    // alert("test");
    // on click display load-wrap as block
    let btnLoad = document.querySelector(".open-animation");
    let btnHide = document.querySelector(".close-animation");
    let animation = document.querySelector("#data-loader");

    btnLoad.addEventListener('click', function(){
        showLoad();
        loadData();
    });

    btnHide.addEventListener('click', function(){
        hideLoad();
    });   
    
    showLoad();
    loadData();

    function showLoad(){
        animation.style.display = "block";
    }

    function hideLoad(){
        animation.style.display = "none";
        // skjul buttons, når vi ikke længere tester
        // btnLoad.style.display = "none";
        // btnHide.style.display = "none";
    }

    function loadData(){
        // setTimeout(() =>{
        //     console.log("færdig");
        //     hideLoad();
        // }, 3000);
        let finishedFetchesCount = 0;
        let timersCount = 0;
        let data1;

        // her har jeg hentet API-json og sat det i en lokal json-fil, for at skåne serveren. udelad "", hvis variablerne allerede har "".
        fetch(fetchUrl + apiKeyPhrase + apiKey)
        // mellem-then() skal altid skrives på denne/samme måde
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            data1 = data;
            tjekTimers();
        });
        timersCount++;

        function tjekTimers(){
            finishedFetchesCount++;
            if(finishedFetchesCount == timersCount){
                // her kan manipuleres med data1s api-data:
                console.log(data1);
                console.log("fetch færdig");
                hideLoad();
            }
            
        }
    }
  

    
    // myFunction();

    // fetch("")
    // // mellem-then() skal altid skrives på denne/samme måde
    // .then((response)=>{
    //     // console.log(response);
    //     return response.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    // });
 
});