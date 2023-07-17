const button = document.getElementById("btn1");
function clog() {
    const url = "https://page-backend-api.onrender.com/datos"
    fetch(url)
        .then(res => res.text())
            .then(hola => {
                const arraydatos = JSON.parse(hola);
                console.log(arraydatos);
            })};

button.addEventListener("click", clog);

//--------------------------------------

const button2 = document.getElementById("btn2");
function clog2() {
    const data = {
        coders:{nombre:"jassed",
                apellido:"Pedro",
                coche : "toyota"}
        
    };
    const url = "https://page-backend-api.onrender.com/agregar-datos"
    
    fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => response.json())
    .then(data => {
    console.log('Respuesta del servidor:', data);
    })
};
button2.addEventListener("click", clog2);
