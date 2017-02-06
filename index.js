const pug = require('pug');

module.exports = {
    handle: (req, res, app) => {
        res.render = (filepath, options = {}, status = 200) => {
            res.status(status).send(pug.renderFile(filepath, options));
        };
    }
};

