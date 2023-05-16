exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Um teste de variável local';
    next();
}

exports.outroMiddleware = (req, res, next) => {
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err &&  err.code === 'EBADCSRFTOKEN'){
        return res.send('Ban CSRF. ');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}