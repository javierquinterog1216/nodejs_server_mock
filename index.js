// Requiring express in our server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//node index.js

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json(
	[
		{"CodigoEmpleado":19937676,"TipoIdentificacion":"CC","NroIdentificacion":19937676,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Ciel","SegundoNombre":"Cordelia","PrimerApellido":"Fraczek","SegundoApellido":"Cuming","Telefono":"439-325-0286","Dirección":"5 Lakewood Circle","Email":"ccuming0@go.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":36666886,"TipoIdentificacion":"CC","NroIdentificacion":36666886,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Willi","SegundoNombre":"Morly","PrimerApellido":"Cowdray","SegundoApellido":"Drewitt","Telefono":"796-136-4591","Dirección":"652 Delaware Terrace","Email":"mdrewitt1@mapy.cz","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":7098072,"TipoIdentificacion":"CC","NroIdentificacion":7098072,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Gilberta","SegundoNombre":"Toddie","PrimerApellido":"Beet","SegundoApellido":"Fink","Telefono":"906-781-6341","Dirección":"67871 Hoard Crossing","Email":"tfink2@cmu.edu","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":9111550,"TipoIdentificacion":"CC","NroIdentificacion":9111550,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Violette","SegundoNombre":"Jonah","PrimerApellido":"Sheryn","SegundoApellido":"D'Agostini","Telefono":"453-237-6331","Dirección":"05 Fairfield Avenue","Email":"jdagostini3@over-blog.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":5826857,"TipoIdentificacion":"CC","NroIdentificacion":5826857,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Ricca","SegundoNombre":"Tabbatha","PrimerApellido":"Abbado","SegundoApellido":"Strangward","Telefono":"111-591-2624","Dirección":"23 Hansons Court","Email":"tstrangward4@loc.gov","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":37761321,"TipoIdentificacion":"CC","NroIdentificacion":37761321,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Llywellyn","SegundoNombre":"Gwenni","PrimerApellido":"Hutchens","SegundoApellido":"Aspinal","Telefono":"265-430-4288","Dirección":"1 Meadow Vale Way","Email":"gaspinal5@cloudflare.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":21600530,"TipoIdentificacion":"CC","NroIdentificacion":21600530,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Flemming","SegundoNombre":"Ertha","PrimerApellido":"Seldner","SegundoApellido":"Lared","Telefono":"884-351-9427","Dirección":"927 Hooker Lane","Email":"elared6@wired.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":7366751,"TipoIdentificacion":"CC","NroIdentificacion":7366751,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Viole","SegundoNombre":"Juliette","PrimerApellido":"McTerlagh","SegundoApellido":"Hazley","Telefono":"878-667-9989","Dirección":"3 Rigney Road","Email":"jhazley7@scribd.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":35697208,"TipoIdentificacion":"CC","NroIdentificacion":35697208,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Cort","SegundoNombre":"Dulciana","PrimerApellido":"Carletto","SegundoApellido":"Ditzel","Telefono":"385-745-2334","Dirección":"0678 Sundown Lane","Email":"dditzel8@bigcartel.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"},
		{"CodigoEmpleado":11352061,"TipoIdentificacion":"CC","NroIdentificacion":11352061,"DescripcionCargo":"0028 - OFICIAL","PrimerNombre":"Moyra","SegundoNombre":"Darelle","PrimerApellido":"Ellin","SegundoApellido":"McKilroe","Telefono":"521-276-5400","Dirección":"7 Dunning Park","Email":"dmckilroe9@nifty.com","Estado":true,"Sede":"MEDELLIN","NombreProyecto":"CLARO INTEGRAL"}
	]
);
});

// Defining get request at '/multiple' route
app.get('/multiple', function(req, res) {
res.json({
	number: 1,
	name: 'John',
	gender: 'male'
});
});

// Defining get request at '/array' route
app.get('/array', function(req, res) {
res.json([{
	number: 1,
	name: 'John',
	gender: 'male'
	},
	{
	number: 2,
	name: 'Ashley',
	gender: 'female'
	}
]);
});

// Setting the server to listen at port 3000
app.listen(PORT, function(req, res) {
console.log(`server started on port ${PORT}`);
});
