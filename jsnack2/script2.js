const nameArr = [
    'Marco',
    'Giovanni',
    'Leonardo',
    'Vincenzo',
]

const surnameArr = [
    'Di Falco',
    'Mazzini',
    'Palla',
    'Vespucci',
]

for (let i = 0; i < 4; i++){
    const randomName = Math.floor(Math.random() * nameArr.length)
    const randomSurname = Math.floor(Math.random() * surnameArr.length)

    const invitoName = nameArr[randomName]
    const invitoSurname = surnameArr[randomSurname]

    const invitoFinale = `${invitoName} ${invitoSurname}`
    console.log(invitoFinale)
}


