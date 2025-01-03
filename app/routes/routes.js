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

export default router;
