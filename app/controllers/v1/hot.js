let Hots = require('../../models/hot');

module.exports = {
    getHot(req, res) {
        let {offset, type} = req.query;
        if (!offset || !type) {
            res.send({
                code: '0',
                name: 'ERROR_QUERY_TYPE',
				        message: '参数错误',
            });
            return;
        }
        Hots.find({hot_type: type}).gt('hot_id', parseInt(offset)).limit(5).exec(
            function (err, doc) {
                if (err) {
                    res.send({
                        code: '0',
                        name: 'ERROR_FIND',
                        message: err,
                    });
                    throw err;
                }
                res.send(doc)
            }
        )
    },
    testHot() {
        Hots.find({hot_type: 'month'}).$where(function() { return this.hot_id > 0 || this.hot_id < 20} ).exec(
            function (err, doc) {
                console.log(doc)
            }
        )
    }
};