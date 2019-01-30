document.addEventListener('DOMContentLoaded', () => {
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
    }

    function loadData(){
        // setTimeout skal erstattes af en fetch()
        setTimeout(() =>{
            console.log("færdig");
            hideLoad();
        }, 1500);
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