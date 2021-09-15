//Määrittelee case:n jota lasketaan
//type Operation = 'bmi';
interface BmiValues {
    heigth: number,
    mass: number
}
//Määrittelee tulostuksen tyypin
type Result = string;

//process.argv parseri
const parseArgumentsit = (args: Array<string>): BmiValues => {
    console.log('argsArrayToNumbers', args)
    //Argument arraysta otetaan indeksit 2 ja kolme, koska indekseissä
    //0 ja 1 on tauhkaa
    let parsedValues = {
        heigth: Number(args[2]),
        mass: Number(args[3])
    }
    return parsedValues
}


//Laskentatapahtuma ja mitä tulostetaan sekä virheen käsittely
const calculateBmi = (heigth: number, mass: number) => {
    if (heigth === 0) throw new Error('Can\'t divide by 0!');
    const heigthInMeters = heigth / 100;
    console.log('heigthInMeters', heigthInMeters)
    const bmi = mass / (heigthInMeters * heigthInMeters);
    console.log('bmi', bmi)
    if (bmi < 24) {
        return 'Normal (healthy weight)';
    } else {
        return 'Overweigth';
    }
}


try {
    const { heigth, mass } = parseArgumentsit(process.argv);
    console.log(calculateBmi(heigth, mass))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}




/*
//Määrittelee case:n jota lasketaan
type Operation = 'bmi';
//Määrittelee tulostuksen tyypin
type Result = string;
//Laskentatapahtuma ja mitä tulostetaan sekä virheen käsittely
const calculateBmi = (mass: number, height: number, op: Operation): Result => {
    switch (op) {
        case 'bmi':
            if (height === 0) throw new Error('Can\'t divide by 0!');
            const heigth = height / 100;
            const bmi = mass / (heigth * heigth);
            if (bmi < 24) {
                return 'Normal (healthy weight)';
            } else {
                return 'Liiku enemmän ja syö vähemmän';
            }

        default:
            throw new Error('Operation is not suitable for BMI calculations!');
    }
}

try {
    console.log(calculateBmi(65, 167, 'bmi'))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}
*/



