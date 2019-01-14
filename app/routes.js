/* globals appRoot */

const sitemapurls = [
    { url: '/',  changefreq: 'monthly', priority: 1 },
    { url: '/about',  changefreq: 'weekly',  priority: 0.7 },
];

module.exports = function(app, staticDir) {

    //user function routes
    var users = require('./users');

    app.use('/users', users);

    //generate the sitemap on request
    app.get('/sitemap.xml', function(req, res) {
        var sm = require('sitemap');
        var sitemap = sm.createSitemap ({
          hostname: 'https://elthelas.com',
          cacheTime: 600000,        // 600 sec - cache purge period 
        urls: sitemapurls
        });
        sitemap.toXML( function (err, xml) {
            if (err) {
                return res.status(500).end();
            }
            res.header('Content-Type', 'application/xml');
            res.send( xml );
        });
    });  

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendFile(appRoot+'/index.html'); // load our public/index.html file
    });
};
