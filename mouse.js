var gui = require('nw.gui');
var clipboard = gui.Clipboard.get();
gui.Window.get().show();

var menu = new gui.Menu();
menu.append(new gui.MenuItem({ label: 'copy Xpath' }));
menu.append(new gui.MenuItem({ label: 'copy css path' }));


function CopyXpath() {
    try {
    	clipboard.set(selectNode.xpath);
    	alert("Has been copied to clipboard!");
    } catch(e) {
    	alert("Replication fails");
    }		
}

function CopyCsspath() {
	try {
		clipboard.set(selectNode.Csspath)
		alert("Has been copied to clipboard!");
	} catch(e) {
		alert("Replication fails");
	}	
}

menu.items[0].click = CopyXpath;
menu.items[1].click = CopyCsspath;