document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    var timer;
    function myTimer1(){
        console.log("timer 1");
        myTimer1.called = true;
        endFunction();
    }
    timer = window.setTimeout(myTimer1, 1000);

    function myTimer2(){
        console.log("timer 2");
        myTimer2.called = true;
        endFunction();
    }
    timer = window.setTimeout(myTimer2, 2000);

    function myTimer3(){
        console.log("timer 3");
        myTimer3.called = true;
        endFunction();
    }
    timer = window.setTimeout(myTimer3, 5000);
    
    function endFunction(){
        if((myTimer1.called == true) && (myTimer2.called == true) && (myTimer3.called == true)){
            console.log("timer end");
        }
    }


  

 


    // console.log("hej");



    
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