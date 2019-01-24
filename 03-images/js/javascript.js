document.addEventListener('DOMContentLoaded', () => {
    // alert("test");

    let imageElement = document.querySelector("#image");
    let button = document.querySelector("#btn-fetch");

    function newImage() {
        fetch("https://aws.random.cat/meow")
        .then((response)=>{
            // console.log(response);
            return response.json();
        })
        .then((data)=>{
            imageElement.src = data.file;
            // console.log(data.file);
        });
    };

    button.addEventListener('click', ()=>{
        newImage();
    })





});