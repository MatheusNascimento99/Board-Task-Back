
function routes(app) {
    app.use('/usuario', require('./usuario.js'));
    return;
}

module.exports = routes;