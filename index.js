// Requiring express in our server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//node index.js

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json(
	[
		{
		  "CodigoEmpleado": 4386800,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 4386800,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Wernher",
		  "SegundoNombre": "Nikita",
		  "PrimerApellido": "Bursnoll",
		  "SegundoApellido": "Headington",
		  "Telefono": "726-522-7585",
		  "Dirección": "2 Blue Bill Park Court",
		  "Email": "nheadington0@aboutads.info",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 17136606,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 17136606,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Anselm",
		  "SegundoNombre": "Rubin",
		  "PrimerApellido": "Bassett",
		  "SegundoApellido": "Wickersley",
		  "Telefono": "157-144-2896",
		  "Dirección": "61 Monument Pass",
		  "Email": "rwickersley1@mac.com",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 35424883,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 35424883,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Whitaker",
		  "SegundoNombre": "Franz",
		  "PrimerApellido": "Shipsey",
		  "SegundoApellido": "Cookley",
		  "Telefono": "378-606-8073",
		  "Dirección": "040 Lyons Court",
		  "Email": "fcookley2@whitehouse.gov",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 23765002,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 23765002,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Dorette",
		  "SegundoNombre": "Park",
		  "PrimerApellido": "Stut",
		  "SegundoApellido": "Byrd",
		  "Telefono": "496-449-3986",
		  "Dirección": "6503 Barnett Park",
		  "Email": "pbyrd3@bigcartel.com",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 35639570,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 35639570,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Franzen",
		  "SegundoNombre": "Gibb",
		  "PrimerApellido": "Pauli",
		  "SegundoApellido": "Wozencroft",
		  "Telefono": "985-779-5179",
		  "Dirección": "676 Rusk Crossing",
		  "Email": "gwozencroft4@independent.co.uk",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 23021613,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 23021613,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Benedikta",
		  "SegundoNombre": "Barnie",
		  "PrimerApellido": "Delaney",
		  "SegundoApellido": "Skeermor",
		  "Telefono": "813-439-3884",
		  "Dirección": "00 Ronald Regan Park",
		  "Email": "bskeermor5@jalbum.net",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 28236626,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 28236626,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Pammie",
		  "SegundoNombre": "Marci",
		  "PrimerApellido": "Eames",
		  "SegundoApellido": "Fittall",
		  "Telefono": "295-369-6416",
		  "Dirección": "68 Havey Circle",
		  "Email": "mfittall6@cafepress.com",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 30908426,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 30908426,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Allison",
		  "SegundoNombre": "Charo",
		  "PrimerApellido": "Sewill",
		  "SegundoApellido": "O'Growgane",
		  "Telefono": "786-273-7562",
		  "Dirección": "8 Nelson Center",
		  "Email": "cogrowgane7@mit.edu",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 5097201,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 5097201,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Vonnie",
		  "SegundoNombre": "Collete",
		  "PrimerApellido": "Oakenfall",
		  "SegundoApellido": "Renachowski",
		  "Telefono": "908-150-4655",
		  "Dirección": "0193 Golf Course Junction",
		  "Email": "crenachowski8@toplist.cz",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		},
		{
		  "CodigoEmpleado": 12088616,
		  "DescripcionTipoidentificacion": "Cedula",
		  "NroIdentificacion": 12088616,
		  "DescripcionCargo": "0028 - OFICIAL",
		  "PrimerNombre": "Johan",
		  "SegundoNombre": "Finlay",
		  "PrimerApellido": "Haddeston",
		  "SegundoApellido": "Fahy",
		  "Telefono": "829-468-8727",
		  "Dirección": "261 Bashford Drive",
		  "Email": "ffahy9@com.com",
		  "Estado": true,
		  "Sede": "MEDELLIN",
		  "Proyecto": {
			"NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
			"Codigo": "010C"
		  }
		}
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
