/* Client-side access to querystring name=value pairs
	Version 1.3
	28 May 2008

	License (Simplified BSD):
	http://adamv.com/dev/javascript/qslicense.txt
*/
function Querystring(qs) { // optionally pass a querystring to parse
	this.params = {};

	if (qs == null) qs = location.search.substring(1, location.search.length);
	if (qs.length == 0) return;

// Turn <plus> back to <space>
// See: http://www.w3.org/TR/REC-html40/interact/forms.html#h-17.13.4.1
	qs = qs.replace(/\+/g, ' ');
	var args = qs.split('&'); // parse out name/value pairs separated via &

// split out each name=value pair
	for (var i = 0; i < args.length; i++) {
		var pair = args[i].split('=');
		var name = decodeURIComponent(pair[0]);

		var value = (pair.length==2)
			? decodeURIComponent(pair[1])
			: name;

		this.params[name] = value;
	}
}

Querystring.prototype.get = function(key, default_) {
	var value = this.params[key];
	return (value != null) ? value : default_;
}

Querystring.prototype.contains = function(key) {
	var value = this.params[key];
	return (value != null);
}

function parse_url (str, component) {
    // Parse a URL and return its components  
    // 
    // version: 1006.1915
    // discuss at: http://phpjs.org/functions/parse_url
    // +      original by: Steven Levithan (http://blog.stevenlevithan.com)
    // + reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note: Based on http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: blog post at http://blog.stevenlevithan.com/archives/parseuri
    // %          note: demo at http://stevenlevithan.com/demo/parseuri/js/assets/parseuri.js
    // %          note: Does not replace invaild characters with '_' as in PHP, nor does it return false with
    // %          note: a seriously malformed URL.
    // %          note: Besides function name, is the same as parseUri besides the commented out portion
    // %          note: and the additional section following, as well as our allowing an extra slash after
    // %          note: the scheme/protocol (to allow file:/// as in PHP)
    // *     example 1: parse_url('http://username:password@hostname/path?arg=value#anchor');
    // *     returns 1: {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}
    var  o   = {
        strictMode: false,
        key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
        q:   {
            name:   "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-protocol to catch file:/// (should restrict this)
        }
    };

    var m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    uri = {},
    i   = 14;
    while (i--) {uri[o.key[i]] = m[i] || "";}
    // Uncomment the following to use the original more detailed (non-PHP) script
    /*
        uri[o.q.name] = {};
        uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
        if ($1) uri[o.q.name][$1] = $2;
        });
        return uri;
    */

    switch (component) {
        case 'PHP_URL_SCHEME':
            return uri.protocol;
        case 'PHP_URL_HOST':
            return uri.host;
        case 'PHP_URL_PORT':
            return uri.port;
        case 'PHP_URL_USER':
            return uri.user;
        case 'PHP_URL_PASS':
            return uri.password;
        case 'PHP_URL_PATH':
            return uri.path;
        case 'PHP_URL_QUERY':
            return uri.query;
        case 'PHP_URL_FRAGMENT':
            return uri.anchor;
        default:
            var retArr = {};
            if (uri.protocol !== '') {retArr.scheme=uri.protocol;}
            if (uri.host !== '') {retArr.host=uri.host;}
            if (uri.port !== '') {retArr.port=uri.port;}
            if (uri.user !== '') {retArr.user=uri.user;}
            if (uri.password !== '') {retArr.pass=uri.password;}
            if (uri.path !== '') {retArr.path=uri.path;}
            if (uri.query !== '') {retArr.query=uri.query;}
            if (uri.anchor !== '') {retArr.fragment=uri.anchor;}
            return retArr;
    }
}

referer = document.referrer;

// Google
//referer = "http://www.google.com/search?hl=en&q=empreendedorismo+brasil+google&aq=f&aqi=&aql=&oq=&gs_rfai=";

// Yahoo
//referer = "http://br.search.yahoo.com/search?vc=&p=empreendedorismo+brasil+yahoo&toggle=1&cop=mss&ei=UTF-8&fr=yfp-t-707";

var referer_parsed = parse_url(referer);
var search_terms = null;
var params = null;

if(referer_parsed.host.indexOf('google') >=0 ) {
	qs = new Querystring(referer_parsed.query);
	search_terms = qs.get("q");
}


if(referer_parsed.host.indexOf('yahoo') >= 0) {
	qs = new Querystring(referer_parsed.query);
	search_terms = qs.get("p");
}

if(search_terms) {
	document.writeln('<div id="follow-me-on-twitter">Interessado em <strong>'+search_terms+'</strong>? <a href="http://twitter.com/rafaelp">Você deve me seguir no twitter <strong>aqui</strong>.</a></div>');
}
