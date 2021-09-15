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