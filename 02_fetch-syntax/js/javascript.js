document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    fetch("data/person-Nanna.json")
    // mellem-then() skal altid skrives på denne/samme måde
    .then((response)=>{
        // console.log(response);
        return response.json();
    })
    .then((data)=>{
        console.log(data.basic.børn[1].efternavn);
    });

})