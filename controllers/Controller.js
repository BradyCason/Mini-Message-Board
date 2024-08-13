const db = require("../db/queries");

exports.indexGet = (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: db.getAllMessages() });
}

exports.newGet = (req, res) => {
    res.render("form", { title: "New Message" })
}

exports.newPost = (req, res) => {
    db.createMessage(req.body.author, req.body.message);
    res.redirect("/")
}

exports.messageGet = (req, res) => {
    const messageId = req.params.id;
    const message = db.getByID(messageId);
    
    if (message) {
        res.render('messageDetail', { title: `ID: ${messageId} Details`, message: message });
    } else {
        res.status(404).send('Message not found');
    }
}