
const base_url = window.location.origin;
const btn = document.getElementById("circulaBtn");
const number = document.getElementById("number");

number.addEventListener("input", (e) => {
    let valor = number.value.toUpperCase();
     
    if (valor.length > 8) {
        e.target.value = valor.slice(0, 8);
    } else if (valor.length === 3 && !valor.includes("-")) {
        e.target.value +="-";
    } else if (valor.length === 2 && valor.endsWith("-")) {
        e.target.value = valor.slice(0, -1);
    }

});

const enviarFormulario =   async  () => {
    const number = document.getElementById("number").value;
    const week = document.getElementById("week").value;
  
    const data = { number, week };

    const response = await fetch(`${base_url}/pico-placa`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const { result } = await response.json();
    alert(result);
};