// CRIAR UM NOVO ARRAY APENAS COM NÚMEROS PARES E DIVISÍVEIS POR 5 USANDO O FILTER

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter((number) => {
    if(number % 2 == 0 && number % 5 == 0) 
    return number
})

console.log(newList)