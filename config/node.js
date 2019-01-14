/* globals MONGODB_URI, process, module */

module.exports = {
    'secretKey': '12345-67890-09876-54321',
}
    module.exports.port = process.env.PORT || 3000; 
    
    if(module.exports.port == 3000 || module.exports.port == 8080) { //we are in a local environment, provision config variables accordingly
        module.exports.mongoUrl = 'mongodb://0.0.0.0:27017/elthelas';
        module.exports.staticDir = "/voicestudioapp/dist";
        // module.exports.port = 8081;
    } else {
        console.log(process.env.MONGODB_URI);
        module.exports.mongoUrl = process.env.MONGODB_URI;
        module.exports.staticDir = '/voicestudioapp/dist';
    }