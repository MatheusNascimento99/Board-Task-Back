async function authDocProducao(req, res, next) {
    const { senhaDigitada } = req.body;
    if (req.headers.host.includes("localhost") || req.originalUrl !== "/doc/") {
        //usuário no localhost
        return next();
    }

    if (senhaDigitada === process.env.SWAGGER_SENHA_DOC) {
        //usuário digitou a senha certa
        return next();
    }

    if (senhaDigitada) {
        //usuário digitou a senha errada
        res.status(401).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
            <form method="post">
                <p style="color: red;">Senha Errada!</p>
                <label for="senhaDigitada">Senha da documentação:</label>
                <input type="password" name="senhaDigitada" id="senhaDigitada" />
                <button type="submit">Entrar</button>
            </form>
    `))
    } else {
        //usuário ainda não digitou a senha e está em modo produção
        res.status(200).set('Content-Type', 'text/html');
        res.send(Buffer.from(`
            <form method="post">
                <label for="senhaDigitada">Senha da documentação:</label>
                <input type="password" name="senhaDigitada" id="senhaDigitada" />
                <button type="submit">Entrar</button>
            </form>
        
            `))
    }


}

module.exports = authDocProducao;