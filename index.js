// Requiring express in our server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//node index.js

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json(
	[ {
      "CodigoEmpleado": 17969999,
      "DescripcionTipoidentificacion": "Cedula",
      "NroIdentificacion": 17969999,
      "DescripcionCargo": "0028 - OFICIAL",
      "PrimerNombre": "Birgitta",
      "SegundoNombre": "Darby",
      "PrimerApellido": "Rosenstiel",
      "SegundoApellido": "Probey",
      "Telefono": "386-869-8496",
      "Dirección": "2 Bonner Road",
      "Email": "dprobey3@people.com.cn",
      "Estado": true,
      "Sede": "MEDELLIN",
      "Proyecto": {
        "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
        "Codigo": "010C_IMP"
      },
      "PerfilUsuario": "REVISOR",
      "NombreUsuario": "Birgitta.Rosenstiel",
      "ClaveUsuario": "q6z9ENMEVPg",
      "ValidarLDAPUsuario": true
    },
    {
      "CodigoEmpleado": 40813222,
      "DescripcionTipoidentificacion": "Cedula",
      "NroIdentificacion": 40813222,
      "DescripcionCargo": "0028 - OFICIAL",
      "PrimerNombre": "Gladys",
      "SegundoNombre": "Rockey",
      "PrimerApellido": "Willett",
      "SegundoApellido": "McLenahan",
      "Telefono": "732-791-1414",
      "Dirección": "2140 Sachs Hill",
      "Email": "rmclenahan4@wsj.com",
      "Estado": true,
      "Sede": "MEDELLIN",
      "Proyecto": {
        "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
        "Codigo": "010C_IMP"
      },
      "PerfilUsuario": "REVISOR",
      "NombreUsuario": "Gladys.Willett",
      "ClaveUsuario": "y4AZ336OcL8",
      "ValidarLDAPUsuario": true
    },
    {
      "CodigoEmpleado": 12472919,
      "DescripcionTipoidentificacion": "Cedula",
      "NroIdentificacion": 12472919,
      "DescripcionCargo": "0028 - OFICIAL",
      "PrimerNombre": "Diahann",
      "SegundoNombre": "Deana",
      "PrimerApellido": "Buddleigh",
      "SegundoApellido": "Stuckow",
      "Telefono": "787-943-6951",
      "Dirección": "1 Nova Street",
      "Email": "dstuckow0@dmoz.org",
      "Estado": true,
      "Sede": "MEDELLIN",
      "Proyecto": {
        "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
        "Codigo": "010A_IMP"
      },
      "PerfilUsuario": "REVISOR",
      "NombreUsuario": "Diahann.Buddleigh",
      "ClaveUsuario": "USJrEic",
      "ValidarLDAPUsuario": true
    },
    {
      "CodigoEmpleado": 41119992,
      "DescripcionTipoidentificacion": "Cedula",
      "NroIdentificacion": 41119992,
      "DescripcionCargo": "0028 - OFICIAL",
      "PrimerNombre": "Janetta",
      "SegundoNombre": "Bernadina",
      "PrimerApellido": "Jerram",
      "SegundoApellido": "Jager",
      "Telefono": "999-277-2935",
      "Dirección": "3405 Bayside Terrace",
      "Email": "bjager1@csmonitor.com",
      "Estado": true,
      "Sede": "MEDELLIN",
      "Proyecto": {
        "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
        "Codigo": "010A_IMP"
      },
      "PerfilUsuario": "REVISOR",
      "NombreUsuario": "Janetta.Jerram",
      "ClaveUsuario": "11RT3f3AWH",
      "ValidarLDAPUsuario": true
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
