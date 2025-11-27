const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Enable CORS
app.use(cors());

app.use(express.json()); // pour analyser le corps des requêtes JSON

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost/todoApp')
  .then(() => console.log('Connecté à la base de données MongoDB'))
  .catch((err) => console.log('Erreur de connexion à MongoDB:', err));

// Routes
app.get('/tasks', (req, res) => res.send([]));
app.post('/tasks', (req, res) => res.send({ message: 'Tâche ajoutée' }));

app.listen(5000, () => console.log('Serveur backend en cours d\'exécution sur le port 5000'));
