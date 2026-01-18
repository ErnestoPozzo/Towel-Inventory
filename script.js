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
storedSelection = "dada";
storedNumber = 0;
storageTowels = 114;
dirtyTowels = 0;
checkInTowels = 0;
guestTowels = 0;
htoTowels = 0;
rsrTowels = 0;
storageDisplay.textContent = storageTowels;

towelCalculator();
setterButton.addEventListener('click', () => {
    storedSelection = eventSelect.value;
    storedNumber = numberSelect.value;
    settingNumber();
    switch (storedSelection){
        case 1:
            console.log(`Ingreso ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 2:
            console.log(`Salida ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 3:
            console.log(`Ingreso Rosario ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 4:
            console.log(`Salida Rosario ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 5:
            console.log(`Ingreso HTO ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 6:
            console.log(`Salida HTO ${storedSelection}`);
            console.log(`Cantidad: ${storedNumber}`);
            break;
        case 7:
            console.log(`Permanente ${storedSelection}`);
            console.log(`Cantidad ${storedNumber}`);
            break;
        default:
            console.log("NOT WORKING");
    }
})
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
