var page = require('webpage').create();
system = require("system");
var fname = 'report.pdf';

page.viewportSize = {width:800,height:600};
page.paperSize = {format: 'Letter', orientation: 'portrait', border: '0.5in'};

page.open(system.args[1], function(status){
t = Date.now();
z = Date.now();

    while(z-t<30000)
    {
        z = Date.now();
    }
    page.render(fname);
    phantom.exit();
});
