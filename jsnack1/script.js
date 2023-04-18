let numArr = []

for (let i = 0; i < 6; i++){
   let numUser = parseInt(prompt('Inserisci sei numeri'))

    if (numUser % 2 != 0){
        numArr [i] = numUser
    } 
}

console.log(numArr)