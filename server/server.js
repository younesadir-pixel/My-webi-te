const express = require('express');
const cors = require('cors');
const db = require('./db');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_fitness_park'; // In production, use .env

app.use(cors());
app.use(express.json());

// Middleware to authenticate Token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Mock Email Service
const sendConfirmationEmail = (email, firstname) => {
    console.log(`
    -------------------------------------------------------
    [MOCK EMAIL SERVICE] Sending email to: ${email}
    Subject: Bienvenue chez Fitness Park !
    Body: 
    Bonjour ${firstname},
    
    Bienvenue dans la team Fitness Park ! 
    Votre compte a été créé avec succès.
    Vous pouvez désormais accéder à votre espace membre pour suivre votre progression.
    
    Identifiant: ${email}
    
    Se dépasser, Se surpasser !
    -------------------------------------------------------
    `);
};

// Test route
app.get('/', (req, res) => {
    res.send('Fitness Park API is running');
});

// Register route
app.post('/api/register', async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ message: 'Veuillez remplir tous les champs.' });
    }

    try {
        // Check if user already exists
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length > 0) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert user
        const [result] = await db.query(
            'INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)',
            [firstname, lastname, email, hashedPassword]
        );

        const newUser = { id: result.insertId, firstname, lastname, email };

        // Generate Token
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '24h' });

        // Send Mock Email
        sendConfirmationEmail(email, firstname);

        res.status(201).json({
            message: 'Inscription réussie !',
            token,
            user: newUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

// Login route
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (rows.length === 0) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        const user = rows[0];

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
        }

        // Generate Token
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });

        res.json({
            message: 'Connexion réussie',
            token,
            user: {
                id: user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

// Profile route (Protected)
app.get('/api/profile', authenticateToken, async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, firstname, lastname, email, created_at FROM users WHERE id = ?', [req.user.id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Utilisateur non trouvé' });

        res.json(rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erreur serveur.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
