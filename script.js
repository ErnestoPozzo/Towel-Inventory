const debug = document.getElementById("debug");
const storageTowelsDisplay = document.getElementById("storage");
const dirtyTowelsDisplay = document.getElementById("dirty");
const checkInTowelsDisplay = document.getElementById("checkIn");
const guestTowelsDisplay = document.getElementById("guest");
const htoTowelsDisplay = document.getElementById("HTO");
const rsrTowelsDisplay = document.getElementById("RSR");
const totalTowelsDisplay = document.getElementById("total");
const eventSelected = document.getElementById("event");
const numberSelect = document.getElementById("inputNumber");
const setterButton = document.getElementById("setter");
const calculationDisplay = {
    storageTowels: 100,
    dirtyTowels: 0,
    checkInTowels: 0,
    guestTowels: 14,
    htoTowels: 0,
    rsrTowels: 0,
    total:function(){
        totalTowelsDisplay.textContent = +this.storageTowels + +this.dirtyTowels + +this.checkInTowels + +this.guestTowels + +this.htoTowels + +this.rsrTowels;
    },
    start:function(){
        storageTowelsDisplay.textContent = this.storageTowels;
        guestTowelsDisplay.textContent = this.checkInTowels+this.guestTowels;
        this.total();
    },
};
const operations = {
    1: { type: "Ingreso", location: "", 
        calculation:function(numberUserInput){
            const salida = +calculationDisplay.storageTowels - +numberUserInput;
            const entrada = +calculationDisplay.checkInTowels + +numberUserInput;
            calculationDisplay.storageTowels = salida;
            calculationDisplay.checkInTowels = entrada;
            storageTowelsDisplay.textContent = salida;
            checkInTowelsDisplay.textContent = entrada;
        }},
    2: { type: "Salida", location: "", 
        calculation:function(numberUserInput){
            const salida = +calculationDisplay.guestTowels - +numberUserInput;
            const entrada = +calculationDisplay.dirtyTowels + +numberUserInput;
            calculationDisplay.guestTowels = salida;
            calculationDisplay.dirtyTowels = entrada;
            guestTowelsDisplay.textContent = salida;
            dirtyTowelsDisplay.textContent = entrada;
        }},
    3: { type: "Ingreso", location: "Rosario", 
        calculation: function(numberUserInput){
            const salida = +calculationDisplay.rsrTowels - +numberUserInput;
            const entrada = +calculationDisplay.storageTowels + +numberUserInput;
            calculationDisplay.rsrTowels = salida;
            calculationDisplay.storageTowels = entrada;
            rsrTowelsDisplay.textContent = salida;
            storageTowelsDisplay.textContent = entrada;
        }},
    4: { type: "Salida", location: "Rosario", 
        calculation: function(numberUserInput){
            const salida = +calculationDisplay.dirtyTowels - +numberUserInput;
            const entrada = +calculationDisplay.rsrTowels + +numberUserInput;
            calculationDisplay.dirtyTowels = salida;
            calculationDisplay.rsrTowels = entrada;
            dirtyTowelsDisplay.textContent = salida;
            rsrTowelsDisplay.textContent = entrada;
        }},
    5: { type: "Ingreso", location: "HTO", 
        calculation:function(numberUserInput){
            const salida = +calculationDisplay.htoTowels - +numberUserInput;
            const entrada = +calculationDisplay.storageTowels + +numberUserInput;
            calculationDisplay.htoTowels = salida;
            calculationDisplay.storageTowels = entrada;
            htoTowelsDisplay.textContent = salida;
            storageTowelsDisplay.textContent = entrada;
        }},
    6: { type: "Salida", location: "HTO", 
        calculation:function(numberUserInput){
             const salida = +calculationDisplay.dirtyTowels - +numberUserInput;
             const entrada = +calculationDisplay.htoTowels + +numberUserInput;
             calculationDisplay.dirtyTowels = salida;
             calculationDisplay.htoTowels = entrada;
             dirtyTowelsDisplay.textContent = salida;
             htoTowelsDisplay.textContent = entrada;
        }},
    7: { type: "Permanente", location: "", 
        calculation:function(numberUserInput){
            const salida = +calculationDisplay.storageTowels - +numberUserInput;
            const entrada = +calculationDisplay.dirtyTowels + +numberUserInput;
            calculationDisplay.storageTowels = salida;
            calculationDisplay.dirtyTowels = entrada;
            storageTowelsDisplay.textContent = salida;
            dirtyTowelsDisplay.textContent = entrada;
        }}
};
calculationDisplay.start();
setterButton.addEventListener('click', () => {
    storedSelection = eventSelected.value;
    storedNumber = numberSelect.value;
    towelDistribution(storedSelection,storedNumber);
})
function processOperation(selection, num){
    const operation = operations[selection];
    if (operation) {
        const locationText = operation.location ? `${operation.location}` : '';
        console.log(`${operation.type}${locationText}`);
        console.log(`Cantidad: ${num}`);
        operation.calculation(num);
    } else {
        console.log("NOT WORKING");
    }
}
function towelDistribution(valueStoredSelection,valueStoredNumber){
    if (typeof valueStoredNumber === 'string' && isNaN(parseFloat(valueStoredNumber))) {
        alert("Escribe un numero");
        return;
    }
    const num = Number(valueStoredNumber);
    if (num <= 0) {
        alert("Escribe un numero mayor a 0")
        return;
    }
    processOperation(valueStoredSelection, num);
}

$(document).ready(function() {
  $('.js-example-basic-single').select2();
});
