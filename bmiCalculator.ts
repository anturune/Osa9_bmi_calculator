

import { Request } from 'express';
//Exportataan interface muiden moduulien käyttöön
//Ks. alla myös "calculateBmi" funktion export
export interface BmiValues {
    heigth: number,
    mass: number,
    bmi: string
}
//Määrittelee tulostuksen tyypin
//type Result = string;
/*
//process.argv parseri 
export const parseArgumentsit = (args: Array<string>): BmiValues => {
    console.log('argsArrayToNumbers', args)
    //Argument arraysta otetaan indeksit 2 ja kolme, koska indekseissä
    //0 ja 1 on tauhkaa
    let parsedValues = {
        heigth: Number(args[2]),
        mass: Number(args[3])
    }
    return parsedValues
}
*/

//Laskentatapahtuma ja mitä tulostetaan sekä virheen käsittely
//request ja response tulee expressin välityksellä selaimesta
export const calculateBmi = (request: Request) => {

    //Poimitaan url:sta pituus ja paino
    //esim. http://localhost:3003/bmi?height=190&weight=91
    const height = Number(request.query.height);
    const weight = Number(request.query.weight);

    if (height === 0) throw new Error('Can\'t divide by 0!');
    const heigthInMeters = height / 100;
    console.log('heigthInMeters', heigthInMeters);
    const bmi = weight / (heigthInMeters * heigthInMeters);
    console.log('bmi', bmi);

    //Bmi arvoihin perustuvat tulostukset
    if (bmi < 24) {
        const bmiResult = {
            heigth: height,
            mass: weight,
            bmi: 'Normal (healthy weight)'
        };
        //Palautetaan status ja json -muotoinen data selaimelle
        return bmiResult;
    } else {
        const bmiResult = {
            heigth: height,
            mass: weight,
            bmi: 'Overweigth'
        };
        return bmiResult;
    }
};

/*
try {
    const { heigth, mass } = parseArgumentsit(process.argv);
    console.log(calculateBmi(heigth, mass))
} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}
*/
export default {
    calculateBmi
};


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



