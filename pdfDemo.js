var page = require('webpage').create();
system = require("system");
var fname = 'report.pdf';

page.viewportSize = {width:800,height:600};
page.paperSize = {format: 'Letter', orientation: 'portrait', border: '0.5in'};

page.open(system.args[1], function(status){
    page.render(fname);
    phantom.exit();
});