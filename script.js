const debug = document.getElementById("debug");
const storageDisplay = document.getElementById("storage");
const dirtyDisplay = document.getElementById("dirty");
const checkInDisplay = document.getElementById("checkIn");
const guestDisplay = document.getElementById("guest");
const htoDisplay = document.getElementById("HTO");
const rsrDisplay = document.getElementById("RSR");
const totalDisplay = document.getElementById("total");
const eventSelect = document.getElementById("event");
const numberSelect = document.getElementById("inputNumber");
const setterButton = document.getElementById("setter");
storedSelection = 0;
storedNumber = 0;
const boxes = {
    storageTowels: 100,
    dirtyTowels: 0,
    checkInTowels: 0,
    guestTowels: 14,
    htoTowels: 0,
    rsrTowels: 0,
    total:function(){
        totalDisplay.textContent = +this.storageTowels + +this.dirtyTowels + +this.checkInTowels + +this.guestTowels + +this.htoTowels + +this.rsrTowels;
    },
    start:function(){
        storageDisplay.textContent = this.storageTowels;
        guestDisplay.textContent = this.checkInTowels+this.guestTowels;
        this.total();
    },
};
const operations = {
    1: { type: "Ingreso", location: "", 
        calculation:function(number){
            const salida = +boxes.storageTowels - +number;
            const entrada = +boxes.checkInTowels + +number;
            boxes.storageTowels = salida;
            boxes.checkInTowels = entrada;
            storageDisplay.textContent = salida;
            checkInDisplay.textContent = entrada;
            console.log(`good`);
        }},
    2: { type: "Salida", location: "", 
        calculation:function(number){
            const salida = +boxes.guestTowels - +number;
            const entrada = +boxes.dirtyTowels + +number;
            boxes.guestTowels = salida;
            boxes.dirtyTowels = entrada;
            guestDisplay.textContent = salida;
            dirtyDisplay.textContent = entrada;
        }},
    3: { type: "Ingreso", location: "Rosario", 
        calculation: function(number){
            const salida = +boxes.rsrTowels - +number;
            const entrada = +boxes.storageTowels + +number;
            boxes.rsrTowels = salida;
            boxes.storageTowels = entrada;
            rsrDisplay.textContent = salida;
            storageDisplay.textContent = entrada;
        }},
    4: { type: "Salida", location: "Rosario", 
        calculation: function(number){
            const salida = +boxes.dirtyTowels - +number;
            const entrada = +boxes.rsrTowels + +number;
            boxes.dirtyTowels = salida;
            boxes.rsrTowels = entrada;
            dirtyDisplay.textContent = salida;
            rsrDisplay.textContent = entrada;
        }},
    5: { type: "Ingreso", location: "HTO", 
        calculation:function(number){
            const salida = +boxes.htoTowels - +number;
            const entrada = +boxes.storageTowels + +number;
            boxes.htoTowels = salida;
            boxes.storageTowels = entrada;
            htoDisplay.textContent = salida;
            storageDisplay.textContent = entrada;
        }},
    6: { type: "Salida", location: "HTO", 
        calculation:function(number){
             const salida = +boxes.dirtyTowels - +number;
             const entrada = +boxes.htoTowels + +number;
             boxes.dirtyTowels = salida;
             boxes.htoTowels = entrada;
             dirtyDisplay.textContent = salida;
             htoDisplay.textContent = entrada;
        }},
    7: { type: "Permanente", location: "", calculation:function(number){}}
};
boxes.start();
setterButton.addEventListener('click', () => {
    storedSelection = eventSelect.value;
    storedNumber = numberSelect.value;
    processOperation(storedSelection,storedNumber);
})
function processOperation(selection, number){
    const operation = operations[selection];
    if (operation) {
        const locationText = operation.location ? ` ${operation.location}` : '';
        console.log(`${operation.type}${locationText}`);
        console.log(`Cantidad: ${number}`);
        operation.calculation(number);
    } else {
        console.log("NOT WORKING");
}
}

