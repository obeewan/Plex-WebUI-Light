var plexwebuilight_ha = function(){
	var path = chrome.extension.getURL( 'assets/plexwebuilight_ha.css' );
	var link = document.createElement( 'link' );
	link.setAttribute( 'rel', 'stylesheet' );
	link.setAttribute( 'href', path );
	document.getElementsByTagName( 'head' )[0].appendChild( link );
};
plexwebuilight_ha();