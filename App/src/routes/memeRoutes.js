/**
    * @author  EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

const express = require('express');
const router = express.Router();

const noPhrases = [
    "Nope, not happening.",
    "Sorry, but that's not going to work.",
    "Your idea? Not really my thing.",
    "I don't see that happening, honestly.",
    "No thanks. Try somewhere else."
];

const yesPhrases = [
    "Absolutely, yes!",
    "Sure, why not?",
    "Yes, that'll do.",
    "Fine, let's do it!",
    "Okay, you got it."
];

function getRandomPhrase(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

router.get('/no', (req, res) => {
    const phrase = getRandomPhrase(noPhrases);
    res.json({ message: phrase });
});

router.get('/yes', (req, res) => {
    const phrase = getRandomPhrase(yesPhrases);
    res.json({ message: phrase });
});

module.exports = router;