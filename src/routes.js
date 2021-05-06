const notesPost = (app, db) => {
    app.post('/notes', (req, res) => {
        // We'll create the note here
        res.send('Hello')
    })
}

module.exports = (app, db) => notesPost(app, db);