document.addEventListener('DOMContentLoaded', () => {
    // alert("test");
    let jsonTekst = `
        {
            "fornavn": "bamse",
            "alder": 40,
            "erTyk": true
        }
    `;
    // console.log(json);

    let data = JSON.parse(jsonTekst);
    console.log(data);






    // let person = {
    //     fornavn: "bamse",
    //     alder: 40
    // }

    // console.log(person);


})