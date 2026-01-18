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
const operations = {
    1: { type: "Ingreso", location: "" },
    2: { type: "Salida", location: "" },
    3: { type: "Ingreso", location: "Rosario" },
    4: { type: "Salida", location: "Rosario" },
    5: { type: "Ingreso", location: "HTO" },
    6: { type: "Salida", location: "HTO" },
    7: { type: "Permanente", location: "" }
};
storedSelection = "dada";
storedNumber = 0;
storageTowels = 114;
dirtyTowels = 0;
checkInTowels = 0;
guestTowels = 0;
htoTowels = 0;
rsrTowels = 0;
settingNumber();
towelCalculator();
setterButton.addEventListener('click', () => {
    storedSelection = eventSelect.value;
    storedNumber = numberSelect.value;
    settingNumber();
    processOperation(storedSelection,storedNumber);
})
function processOperation(selection, number){
    const operation = operations[selection];
    if (operation) {
        const locationText = operation.location ? ` ${operation.location}` : '';
        console.log(`${operation.type}${locationText}`);
        console.log(`Cantidad: ${storedNumber}`);
    } else {
        console.log("NOT WORKING");
}
}
function towelCalculator(){
    totalTowels = storageTowels+dirtyTowels+checkInTowels+guestTowels+htoTowels+rsrTowels;   
    totalDisplay.textContent = totalTowels;
}
function newCheckIn(){
    storageTowels = storageTowels - storedNumber;
    checkInTowels = checkInTowels + storedNumber;
    checkInDisplay.textContent = checkInTowels;
    storageDisplay.textContent = storageTowels;
}
function newCheckOut(){
    checkInTowels = checkInTowels - storedNumber;
    dirtyTowels = dirtyTowels + storedNumber;
    dirtyDisplay.textContent = dirtyTowels;
    checkInDisplay.textContent = checkInTowels;

}
function settingNumber(){
    storedSelection = Math.floor(Number(storedSelection));
    dirtyTowels = Math.floor(Number(dirtyTowels));
    checkInTowels = Math.floor(Number(checkInTowels));
    guestTowels = Math.floor(Number(guestTowels));
    htoTowels = Math.floor(Number(htoTowels));
    rsrTowels = Math.floor(Number(rsrTowels));
    storedNumber = Math.floor(Number(storedNumber));
    storageTowels = Math.floor(Number(storageTowels));
}
