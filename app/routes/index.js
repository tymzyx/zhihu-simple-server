let v1 = require('./v1');



module.exports = {
   router(app) {
       app.use('/api/v1', v1);
   }
};