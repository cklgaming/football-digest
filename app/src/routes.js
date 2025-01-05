import decrypt from './db/decrypt.ts';
import encrypt from './db/encrypt.ts';
import express from 'express';

let loggedIn = false;
let userId;
let data;
let msg;

const router = express.Router();

router.get('/isLoggedIn', (req, res) => {
    if (loggedIn) {
        res.status(200).json({ message: 'Logged in.' });        
    } else {
        res.status(401).json({ message: 'Please log in.' });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let encrypted = [];
    encrypted = await encrypt(username, password);

    // PSQL database query. Update for use with Mongo

    //client.query('SELECT * FROM userLogin WHERE username = $1 AND password = $2', [encrypted[0], encrypted[1]], (err, result) => {
    //    if (err) {
    //        res.status(500).json({ message: 'Database error', error: err.message });
    //        return 2;
    //    }
    //
    //    if (result.rowCount > 0) {
    //        userId = result.rows.userId;
    //        loggedIn = true;
    //        res.status(200).json({ message: 'Login successful' });
    //    } else {
    //        res.status(401).json({ message: 'Invalid credentials' });
    //    }
    //});
});

export default router;
