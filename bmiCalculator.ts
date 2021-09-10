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




/*
interface bmiValues {
    heigth: number;
    weigth: number;
}

const parseArguments = (args: Array<string>): bmiValues => {
    if (args.length < 4) throw new Error('Not enough arguments');
    if (args.length > 4) throw new Error('Too many arguments');

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            heigth: Number(args[2]),
            weigth: Number(args[3])
        }
    } else {
        throw new Error('Provided values were not numbers!');
    }
}

const multiplicator = (heigth: number, weigth: number, printText: string) => {
    console.log(printText, weigth / (heigth * heigth));
}

try {
    const { heigth, weigth } = parseArguments(process.argv);
    multiplicator(heigth, weigth, `Multiplied ${heigth} and ${weigth}, the result is:`);
} catch (e) {
    console.log('Error, something bad happened, message: ', e.message);
}
*/