const pool = require("./pool");

async function createMessage(name, message) {
    await pool.query('INSERT INTO messages (name, message) VALUES ($1, $2)', [name, message]);
}

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages ORDER BY date DESC");
    return rows;
}

async function getByID(messageId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [messageId]);
    return rows[0];
}

module.exports = {
    createMessage,
    getAllMessages,
    getByID
};