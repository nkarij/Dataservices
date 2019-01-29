document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    let finishedFetchesCount = 0;
    let timersCount = 0;
    let data1;
    let data2;
    let data3;

    fetch("https://api.exchangeratesapi.io/latest")
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

    fetch("https://aws.random.cat/meow")
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

    fetch("https://random.dog/woof.json")
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
            console.log(data1.date);
            console.log(data2.file);
            console.log(data3.url);

            // her kan gøres noget med data2s api-data:
            // her kan gøres noget med data3s api-data:
            console.log("alle færdige");
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