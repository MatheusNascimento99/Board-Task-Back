
function routes(app) {
    app.use('/usuario', require('./usuario.js'));
    app.use('/tarefa', require('./tarefa.js'));
    return;
}

module.exports = routes;