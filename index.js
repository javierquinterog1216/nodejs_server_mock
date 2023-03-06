// Requiring express in our server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//node index.js

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json(
	[{
  "CodigoEmpleado": 13816694,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 13816694,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Joellyn",
  "SegundoNombre": "Christabel",
  "PrimerApellido": "Wissbey",
  "SegundoApellido": "Thirsk",
  "Telefono": "541-351-5791",
  "Dirección": "8 Kinsman Street",
  "Email": "cthirsk0@marketwatch.com",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010C_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Joellyn.Wissbey",
  "ClaveUsuario": "gtWcDBP",
  "ValidarLDAPUsuario": true
}, {
  "CodigoEmpleado": 28390433,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 28390433,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Irena",
  "SegundoNombre": "Germana",
  "PrimerApellido": "Boustred",
  "SegundoApellido": "Sallery",
  "Telefono": "737-391-5924",
  "Dirección": "3 Mcguire Trail",
  "Email": "gsallery1@123-reg.co.uk",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010C_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Irena.Boustred",
  "ClaveUsuario": "InMh2Qnh1A",
  "ValidarLDAPUsuario": true
}, {
  "CodigoEmpleado": 1491094,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 1491094,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Emmye",
  "SegundoNombre": "Shaine",
  "PrimerApellido": "Everest",
  "SegundoApellido": "De Antoni",
  "Telefono": "669-993-6492",
  "Dirección": "26 Pond Place",
  "Email": "sdeantoni2@quantcast.com",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010C_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Emmye.Everest",
  "ClaveUsuario": "qHUU7e1",
  "ValidarLDAPUsuario": true
}, {
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
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010C_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Birgitta.Rosenstiel",
  "ClaveUsuario": "q6z9ENMEVPg",
  "ValidarLDAPUsuario": true
}, {
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
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010C_IMP"
    }
  ],
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
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010A_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Diahann.Buddleigh",
  "ClaveUsuario": "USJrEic",
  "ValidarLDAPUsuario": true
}, {
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
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010A_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Janetta.Jerram",
  "ClaveUsuario": "11RT3f3AWH",
  "ValidarLDAPUsuario": true
}, {
  "CodigoEmpleado": 22905772,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 22905772,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Brittani",
  "SegundoNombre": "Dev",
  "PrimerApellido": "Stollman",
  "SegundoApellido": "Allmann",
  "Telefono": "156-982-1889",
  "Dirección": "5960 Melody Junction",
  "Email": "dallmann2@mac.com",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010A_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Brittani.Stollman",
  "ClaveUsuario": "CeK4kDT",
  "ValidarLDAPUsuario": true
}, {
  "CodigoEmpleado": 37746178,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 37746178,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Kele",
  "SegundoNombre": "Tammie",
  "PrimerApellido": "Goodlake",
  "SegundoApellido": "Markwelley",
  "Telefono": "867-192-8184",
  "Dirección": "9 Birchwood Road",
  "Email": "tmarkwelley3@livejournal.com",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010A_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Kele.Goodlake",
  "ClaveUsuario": "cLPHaV",
  "ValidarLDAPUsuario": true
}, {
  "CodigoEmpleado": 1311243,
  "DescripcionTipoidentificacion": "Cedula",
  "NroIdentificacion": 1311243,
  "DescripcionCargo": "0028 - OFICIAL",
  "PrimerNombre": "Hewe",
  "SegundoNombre": "Seward",
  "PrimerApellido": "Wotton",
  "SegundoApellido": "Spuffard",
  "Telefono": "744-524-6145",
  "Dirección": "87 Buell Way",
  "Email": "sspuffard4@tinyurl.com",
  "Estado": true,
  "Sede": "MEDELLIN",
  "Proyecto": [
    {
      "NombreProyecto": "ENEL CODENSA SOC-SOT ZONA SUR",
      "Codigo": "010A_IMP"
    }
  ],
  "PerfilUsuario": "REVISOR",
  "NombreUsuario": "Hewe.Wotton",
  "ClaveUsuario": "GD1GGi1HkxuC",
  "ValidarLDAPUsuario": true
}]
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
