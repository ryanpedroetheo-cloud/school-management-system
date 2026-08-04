const readline = require("readline-sync");

function ask(message) {
    return readline.question(message);
}

function pause() {
    readline.question("\nPressione ENTER para continuar...");
}

function clearScreen() {
    console.clear();
}

function showHeader(title) {
    console.clear();
    console.log("================================");
    console.log(title);
    console.log("================================");
}

module.exports = {
    ask,
    pause,
    clearScreen,
    showHeader
};