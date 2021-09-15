
//Määritellään tyypit
interface ExerciseResult {
    inputData: Array<number>
};

//process.argv parseri
const parseArguments = (args: Array<string>): ExerciseResult => {

    //console.log('Argsit', args.length)

    //Filteröidään kaksi ensimmäistä indeksiä, koska niissä ei ole input dataa vaan seuraavaa:
    //C:\\Users\\astur\\Documents\\Fullstack\\Osa9\\bmi-calculator-Osa9\\node_modules\\ts-node\\dist\\bin.js',
    //'C:\\Users\\astur\\Documents\\Fullstack\\Osa9\\bmi-calculator-Osa9\\exerciseCalculator.ts'
    const argsFilteredTwoFirstIndexes = args.filter((value, index) => index > 1)

    //console.log('argsFilteredTwoFirstIndexes', argsFilteredTwoFirstIndexes.length)

    //Tsekataan, että syötettyjä arvoja on vähintään kahdessa indeksissä
    //target arvo ja yksi treenipäivä
    if (argsFilteredTwoFirstIndexes.length < 2) throw new Error('Not enough arguments');

    //Parseroidaan taulukko numeroiksi ja 
    let argsArrayToNumbers = argsFilteredTwoFirstIndexes.map(value => parseInt(value));
    //Tsekataan onko yhdessäkään indeksissä NaN -not a number value
    if (argsArrayToNumbers.findIndex(Number.isNaN) >= 0) throw new Error('All arguments are not numbers');

    console.log('argsArrayToNumbers', argsArrayToNumbers)
    let parsed = {
        inputData: argsArrayToNumbers
    }
    return parsed
}

//Ratingin määrittely 0-3 treenituntien mukaan
const rating = (treeniTunnit: number, target: number) => {

    if (treeniTunnit === 0) {
        return 0
    }
    if (treeniTunnit < target && treeniTunnit > 0) {
        return 1
    }
    if (treeniTunnit === target) {
        return 2
    }
    return 3
}

const ratingText = (treeniTunnit: number, target: number) => {
    if (rating(treeniTunnit, target) === 1) {
        return 'you should be more acive'
    }
    if (rating(treeniTunnit, target) === 2) {
        return 'not too bad but could be better'
    }
    if (success(treeniTunnit, target) && rating(treeniTunnit, target) === 3) {
        return 'excellent, you trained more than expected'
    }
    return 'you have not trained at all'


}

//Funktio onko treenimäärät riittävät eli jos on yhdenkin tunnin
//treenannut, niin menee seuraavaksi funktiolle "rating" laskemaan
//ratingille arvoa
const success = (treeniTunnit: number, target: number) => {
    if (treeniTunnit >= target) {
        return true
    }
    return false
}


//Tulosten laskenta, tyypitetty Arrayksi
const calculateExercises = (daysTrained: Array<number>) => {

    //console.log('Caclulate excercises', daysTrained)

    //Filteröidaan pois kaikki muut paitsi viikonpäivät indekisnumeron avulla.
    //Ensimmäisessä indexsissä on target arvo treenien määrälle
    const vainTreenitArray = daysTrained.filter((value, index) => index > 0);

    //Lasketaan treenituntien keskiarvo, summa reduce-metodilla
    const treenituntienSumma = vainTreenitArray.reduce((a, b) => a + b, 0);
    const treenituntienKeskiarvo = treenituntienSumma / vainTreenitArray.length

    //Lasketaan treenipäivät yhteen siten, että filtröidään 0 tunnin treenipäivät
    const countTrainingDays = vainTreenitArray.filter(day => day !== 0).length

    //Otetaan ensimmäisestä indexistä target, koska syötetään ensimmäisenä
    const targetTrainingHoursSetInInputs = daysTrained[0]


    //Muodostetaan tulostettava olio
    const result = {
        periodLength: vainTreenitArray.length,
        trainingDays: countTrainingDays,
        success: success(treenituntienSumma, targetTrainingHoursSetInInputs),
        rating: rating(treenituntienSumma, targetTrainingHoursSetInInputs),
        ratingDescription: ratingText(treenituntienSumma, targetTrainingHoursSetInInputs),
        target: targetTrainingHoursSetInInputs,
        average: treenituntienKeskiarvo,
        vainTreenitArray: vainTreenitArray
    }
    //Tulostetaan olio
    console.log(result);


}

try {
    //Tyypitetään parserilla
    const daysTrained = parseArguments(process.argv);
    //Lasketaan treenien palaute
    //console.log('daysTrained', daysTrained.inputData)
    console.log(calculateExercises(daysTrained.inputData))

} catch (e) {
    console.log('Something went wrong, error message: ', e.message);
}