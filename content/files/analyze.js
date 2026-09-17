(function () {
var acclog_cgi_url = 'http://okinawa-lrmi.com/analyze/acclog.cgi';
create_beacon();
function create_beacon() {
	var img = document.createElement("img");
	img.src = acclog_cgi_url + "?referrer=" + document.referrer + "&width=" + screen.width + "&height=" + screen.height + "&color=" + screen.colorDepth + "&epoch=" + new Date().getTime();
}
})();