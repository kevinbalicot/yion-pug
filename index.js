const pug = require('pug');

module.exports = {
    type: 'renderer',
    handle: (req, res, app, next) => {
        res.render = (filepath, options = {}, status = 200, headers = {}) => {
            for (let name in headers) {
                res.set(name, headers[name]);
            }

            res.status(status).send(pug.renderFile(filepath, options));
        };

        next();
    }
};
