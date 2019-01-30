document.addEventListener('DOMContentLoaded', () => {
    // alert("test");
    // on click display load-wrap as block
    let btnLoad = document.querySelector(".open-animation");
    let animation = document.querySelector("#data-loader");
    btnLoad.addEventListener('click', function(){
        // spørg hvornår jer er færdig med at fetche (er lavet)
        // når jeg er færdig med at fetche display load as none
        showLoad();

        let finishedFetchesCount = 0;
        let timersCount = 0;
        let data1;
        let data2;
        let data3;
        // her har jeg hentet API-json og sat det i en lokal json-fil, for at skåne serveren
        fetch("data/slow-load.json")
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

        fetch("data/random-cat.json")
        // mellem-then() skal altid skrives på denne/samme måde
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            data2 = data;
            tjekTimers();
        });
        timersCount++;

        fetch("data/random-dog.json")
        // mellem-then() skal altid skrives på denne/samme måde
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            data3 = data;
            tjekTimers();
        });
        timersCount++;

        function tjekTimers(){
            finishedFetchesCount++;
            if(finishedFetchesCount == timersCount){
                // her kan gøres noget med data1s api-data:
                console.log(data1);
                console.log(data2);
                console.log(data3);
                // her kan gøres noget med data2s api-data:
                // her kan gøres noget med data3s api-data:
                console.log("alle færdige");
                hideLoad();
            }
            
        }

        function showLoad(){
            animation.style.display = "block";
        }

        function hideLoad(){
            animation.style.display = "none";
            btnLoad.style.display = "none";
        }

    })

    
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