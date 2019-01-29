document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    let finishedTimerCount = 0;
    let timersCount = 0;

    setTimeout(() =>{
        console.log("test1");
        tjekTimers();
    }, 3000);
    timersCount++;

    setTimeout(() =>{
        console.log("test2");
        tjekTimers();
    }, 1000);
    timersCount++;

    setTimeout(() =>{
        console.log("test3");
        tjekTimers();
    }, 750);
    timersCount++;

    function tjekTimers(){
        finishedTimerCount++;
        if(finishedTimerCount == timersCount){
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