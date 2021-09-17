
//import express, { Request, Response, NextFunction } from 'express';
import express, { Request, Response } from 'express';
import BmiValues from './bmiCalculator'

const app = express();

//Lasketaan bmi, hyödyntäen "bmiCalculator.ts" -moduulin funktiota
const calculeeraaBmii = (request: Request, response: Response) => {
    //Otetaan paino ja pituus URL:sta vastaan ja muutetaan integer tyyppisiksi
    const height = Number(request.query.height);
    const weight = Number(request.query.weight);

    //Pyydetään "bmiCalculator.ts" -moduulia/fileä laskemaan "bmi"
    const bmiResult = BmiValues.calculateBmi(height, weight);

    //Luodaan palautettava olio
    const result = {
        height: height,
        weight: weight,
        bmi: bmiResult
    }
    //Vastaus "jsonina"
    response.status(200).json(result);
}
//Tehdään get -tyyppinen pyyntö funktiolle "calculeeraaBmii"
app.get('/bmi?', calculeeraaBmii);

//Kerrotaan portti jota sovellus kuuntelee
const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
//app.get('/bmi?', getLocationsWithTimezones)
/*
//JOTTA EXPRESS TOIMII:
//"npm install express" -http asennus request pyyntöjä varten
//"npm install --save-dev @types/express" -express tyyppien asennus
import express from 'express';
import { BmiValues } from "./bmiCalculator";
import calculateBmi from "./bmiCalculator";
const app = express();
//Vie hiiri päälle jos kellertävä aaltoviiva alla ja katso ohje
//eli silloin jos jotain variaabelia ei käytetä, niin pitää ehdottaa
//variaabelin alle underscore (_req)


const getBmi = () => {
    const request = app.get(baseUrl)
    return request.then(response => response.data)
}

app.get('/hello', (req, res) => {

});
//Porttimääritys
const PORT = 3003;
//Portin kuunteluun
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

/*
//JOTTA EXPRESS TOIMII:
//"npm install express" -http asennus request pyyntöjä varten
//"npm install --save-dev @types/express" -express tyyppien asennus
import express from 'express';
const app = express();
//Vie hiiri päälle jos kellertävä aaltoviiva alla ja katso ohje
//eli silloin jos jotain variaabelia ei käytetä, niin pitää ehdottaa
//variaabelin alle underscore (_req)
app.get('/hello', (_req, res) => {
  res.send('fullstack');
});
//Porttimääritys
const PORT = 3003;
//Portin kuunteluun
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/