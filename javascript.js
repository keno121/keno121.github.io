var quotes = [
'Sarma',
'Pljeskavice sa pirom',
'Grah',
'Meso na rostilju',
'Paprikas',
'Pleska',
'Maslanica sa mesom',
'Burek',
'Krompirusa',
'Meso i Krompir',
'Piletina i riza',
'Sataras',
'Corbu',
'Pogaca krompir i sir',
'Makarone i meso'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
