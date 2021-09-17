
import express from 'express';
//import express from 'express';
//Importataan interface käyttöön
import BmiValues from './bmiCalculator';
//Middleware käytettäväksi välittämään HTTP -viestejä
//clientin ja palvelimen välillä
const app = express();


//Tehdään get -tyyppinen pyyntö funktiolle "calculateBmi",
//Joka on filessä "bmiCalculatro.ts"
app.get('/bmi?', (req, res) => {
    //Lähetetään request ja response
    const bmiResult = BmiValues.calculateBmi(req);
    res.send(bmiResult);

});

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