document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    fetch("")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    });
 
});