// Buscando o button
const buttonConverter = document.getElementById("converter");

// Função para converter
const converter = () => {
    // Buscando elementos necessarios
    const input = document.getElementById("value").value;
    const selectFrom = document.getElementById("currencySelectFrom");
    const selectTo = document.getElementById("currencySelectTo");

    // Adicionando let's com os valores que seram convertidos
    const valueFrom = 1;
    let valueTo = 0;

    // Buscando saber quem vai ser chamado
    let optionFrom = selectFrom.value;
    let optionTo = selectTo.value;

    const real = "R$ Real";
    const dolar = "US$ Dolar";
    const euro = "€ Euro";
    const bitCoin = "₿ BitCoin";
    const ethereum = "Ξ Ethereum";

    // Procurando as converções

    // Conversão do real
    if (optionFrom === real && optionTo === dolar) {
        valueTo = 5; //dolar
    } 
    
    else if (optionFrom === real && optionTo === real) {
        valueTo = 1; //real
    } 
    
    else if (optionFrom === real && optionTo === euro) {
        valueTo = 4; //euro
    } 
    
    else if (optionFrom === real && optionTo === bitCoin) {
        valueTo = 10000; //bitCoin
    } 
    
    else if (optionFrom === real && optionTo === ethereum) {
        valueTo = 5000; //ethereum
    }
    // conversão do dolar
    
    else if (optionFrom === dolar && optionTo === dolar) {
        valueTo = 1; //dolar
    } 
    
    else if (optionFrom === dolar && optionTo === real) {
        valueTo = 0.5; //real
    } 
    
    else if (optionFrom === dolar && optionTo === euro) {
        valueTo = 1.5; //euro
    } 
    
    else if (optionFrom === dolar && optionTo === bitCoin) {
        valueTo = 10000; //bitCoin
    } 
    
    else if (optionFrom === dolar && optionTo === ethereum) {
        valueTo = 5000; //ethereum
    }
    // conversão do euro
    
    else if (optionFrom === euro && optionTo === dolar) {
        valueTo = 1; //dolar
    } 
    
    else if (optionFrom === euro && optionTo === real) {
        valueTo = 0.5; //real
    } 
    
    else if (optionFrom === euro && optionTo === euro) {
        valueTo = 1.5; //euro
    } 
    
    else if (optionFrom === euro && optionTo === bitCoin) {
        valueTo = 10000; //bitCoin
    } 
    
    else if (optionFrom === euro && optionTo === ethereum) {
        valueTo = 5000; //ethereum
    }
    // conversão do bitCoin
    
    else if (optionFrom === bitCoin && optionTo === dolar) {
        valueTo = 1; //dolar
    } 
    
    else if (optionFrom === bitCoin && optionTo === real) {
        valueTo = 0.5; //real
    } 
    
    else if (optionFrom === bitCoin && optionTo === euro) {
        valueTo = 1.5; //euro
    } 
    
    else if (optionFrom === bitCoin && optionTo === bitCoin) {
        valueTo = 10000; //bitCoin
    } 
    
    else if (optionFrom === bitCoin && optionTo === ethereum) {
        valueTo = 5000; //ethereum
    }
    // conversão do ethereum
    
    else if (optionFrom === ethereum && optionTo === dolar) {
        valueTo = 1; //dolar
    } 
    
    else if (optionFrom === ethereum && optionTo === real) {
        valueTo = 0.5; //real
    } 
    
    else if (optionFrom === ethereum && optionTo === euro) {
        valueTo = 1.5; //euro
    } 
    
    else if (optionFrom === ethereum && optionTo === bitCoin) {
        valueTo = 10000; //bitCoin
    } 
    
    else if (optionFrom === ethereum && optionTo === ethereum) {
        valueTo = 5000; //ethereum
    }
};

buttonConverter.addEventListener("click", converter)