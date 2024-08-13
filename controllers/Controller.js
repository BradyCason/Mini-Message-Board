const db = require("../db/queries");

async function indexGet(req, res){
    const messages = await db.getAllMessages()
    res.render("index", { title: "Mini Messageboard", messages: messages });
}

function newGet(req, res){
    res.render("form", { title: "New Message" })
}

async function newPost(req, res){
    await db.createMessage(req.body.author, req.body.message);
    res.redirect("/")
}

async function messageGet(req, res){
    const messageId = req.params.id;
    const message = await db.getByID(messageId);
    
    if (message) {
        res.render('messageDetail', { title: `ID: ${messageId} Details`, message: message });
    } else {
        res.status(404).send('Message not found');
    }
}

module.exports = {
    indexGet,
    newGet,
    newPost,
    messageGet
}