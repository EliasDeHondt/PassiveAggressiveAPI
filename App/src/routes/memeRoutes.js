/**
    * @author  EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

const express = require('express');
const router = express.Router();

const noPhrases = [
    "Nope, not happening. 🚫",
    "Sorry, but that's not going to work. 😬",
    "Your idea? Not really my thing. 🙅‍♂️",
    "I don't see that happening, honestly. 😐",
    "No thanks. Try somewhere else. 🛑",
    "Denied! Try again, maybe? 😏",
    "Nah, that's a hard pass. 💥",
    "Not in this timeline, friend. ⏳",
    "Big no energy here. 😴",
    "Error 404: Approval not found. 🖥️"
];

const yesPhrases = [
    "Absolutely, yes! 🎉",
    "Sure, why not? 😎",
    "Yes, that'll do. ✅",
    "Fine, let's do it! 🚀",
    "Okay, you got it. 💪",
    "Heck yeah, let's roll! 🛹",
    "Approved! You're a legend! 🏆",
    "Yup, I'm all in! 😄",
    "Meme-worthy yes! 🌟",
    "Let's make it happen, captain! ⚡"
];

function getRandomPhrase(list) {
    if (!Array.isArray(list) || list.length === 0) throw new Error('Phrase list is invalid or empty');
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function sendResponse(res, phrases, status = 'success') {
    try {
        const phrase = getRandomPhrase(phrases);
        res.status(200).json({
            status,
            message: phrase,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Internal server error: ' + error.message,
            timestamp: new Date().toISOString()
        });
    }
}

router.get('/no', (req, res) => {
    sendResponse(res, noPhrases);
});

router.get('/yes', (req, res) => {
    sendResponse(res, yesPhrases);
});

router.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Endpoint not found. 😕',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;