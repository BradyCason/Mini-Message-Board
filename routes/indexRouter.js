const { Router } = require('express');
const router = Router();

let messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
})

router.get("/new", (req, res) => {
    res.render("form", { title: "New Message" })
})

router.post("/new", (req, res) => {
    messages.push({text: req.body.message,
        user: req.body.author,
        added: new Date()
    })
    res.redirect("/")
})

router.get('/message/:id', (req, res) => {
    const messageId = req.params.id;
    const message = messages[messageId];
    
    if (message) {
        res.render('messageDetail', { title: `ID: ${messageId} Details`, message: message });
    } else {
        res.status(404).send('Message not found');
    }
});

module.exports = router;