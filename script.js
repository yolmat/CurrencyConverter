// Buscando o button
const buttonConverter = document.getElementById('converter')

// Função para converter
const converter = async () => {
    // Buscando elementos necessarios
    const input = document.getElementById('value').value
    const selectFrom = document.getElementById('currencySelectFrom')
    const selectTo = document.getElementById('currencySelectTo')
    const textFrom = document.getElementById('convertFrom')
    const textTo = document.getElementById('convertTo')

    // Adicionando let's com os valores que seram convertidos
    const valueFrom = input
    let valueTo = 0

    // Buscando saber quem vai ser chamado
    let optionFrom = selectFrom.value
    let optionTo = selectTo.value

    let result = 0

    const real = 'R$ Real'
    const dolar = '$ Dolar'
    const euro = '€ Euro'

    // pegando dados ds API

    //Real

    const presentRealDolar = await fetch('https://economia.awesomeapi.com.br/last/BRL-USD').then(response => response.json())
    const presentRealEuro = await fetch('https://economia.awesomeapi.com.br/last/BRL-EUR').then(response => response.json())

    //Dolar

    const presentDolarReal = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(response => response.json())
    const presentDolarEuro = await fetch('https://economia.awesomeapi.com.br/last/USD-EUR').then(response => response.json())

    //Euro

    const presentEuroReal = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL').then(response => response.json())
    const presentEuroDolar = await fetch('https://economia.awesomeapi.com.br/last/EUR-USD').then(response => response.json())

    // Procurando as converções

    const valueRealDolar = presentRealDolar.BRLUSD.high
    const valueDolarReal = presentDolarReal.USDBRL.high

    const valueRealEuro = presentRealEuro.BRLEUR.high
    const valueEuroReal = presentEuroReal.EURBRL.high

    const valueDolarEuro = presentDolarEuro.USDEUR.high
    const valueEuroDolar = presentEuroDolar.EURUSD.high


    // Conversão do real
    if (optionFrom === real && optionTo === dolar) {
        valueTo = valueRealDolar //dolar
        console.log(valueTo)
    } 
    
    else if (optionFrom === real && optionTo === real) {
        valueTo = 1 //real
        console.log(valueTo)
    } 
    
    else if (optionFrom === real && optionTo === euro) {
        valueTo = valueRealEuro //euro
        console.log(valueTo)
    } 
    
    // conversão do dolar
    
    else if (optionFrom === dolar && optionTo === dolar) {
        valueTo = 1 //real
        console.log(valueTo)
    } 
    
    else if (optionFrom === dolar && optionTo === real) {
        valueTo = valueDolarReal //dolar
        console.log(valueTo)
    } 
    
    else if (optionFrom === dolar && optionTo === euro) {
        valueTo = valueDolarEuro //euro
        console.log(valueTo)
    } 
    
    // conversão do euro
    
    else if (optionFrom === euro && optionTo === dolar) {
        valueTo = valueEuroDolar //dolar
        console.log(valueTo)
    } 
    
    else if (optionFrom === euro && optionTo === real) {
        valueTo = valueEuroReal //real
        console.log(valueTo)
    } 
    
    else if (optionFrom === euro && optionTo === euro) {
        valueTo = 1 //euro
        console.log(valueTo)
    } 
    
    result = valueTo * valueFrom 


    // Mudando o texto TO

    if (optionTo === real) {
        textTo.innerHTML = new Intl.NumberFormat('pt-br', {
            style: 'currency', currency: 'BRL'
       }).format(result)

    }

    if (optionTo === dolar) {
        textTo.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
       }).format(result)
    }

    if (optionTo === euro) {
        textTo.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
       }).format(result)
    }

    // Mudando o texto FROM

    if (optionFrom === real) {
         textFrom.innerHTML = new Intl.NumberFormat('pt-br', {
             style: 'currency', currency: 'BRL'
        }).format(input)
    }

    if (optionFrom == dolar) {
        textFrom.innerHTML = new Intl.NumberFormat('en-us', {
            style: 'currency', currency: 'USD'
        }).format(input)
    }

    if (optionFrom == euro) {
        textFrom.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(input)
    }
}

buttonConverter.addEventListener('click', converter)