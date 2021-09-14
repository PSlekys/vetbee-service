const express = require('express');
const cors = require('cors');

const { port } = require('./config');

const { pets, medications, logs, prescriptions } = require('./routes/v1');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/v1/pets/', pets);
app.use('/v1/meds/', medications);
app.use('/v1/logs/', logs);
app.use('/v1/prescriptions/', prescriptions);

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.all('*', (req, res) => {
  res.status(404).send({ error: 'Page not found' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
