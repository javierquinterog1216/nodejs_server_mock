// Requiring express in our server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
//node index.js

// Defining get request at '/' route
app.get('/', function(req, res) {
res.json(
    [{"CodigoEmpleado":13049964,"IdTipoDocumento":2,"NroIdentificacion":13049964,"PrimerNombre":"Karee","SegundoNombre":"Dion","PrimerApellido":"Simm","SegundoApellido":"Friatt","Telefono":"639-751-6556","Dirección":"6581 Birchwood Terrace","Email":"dfriatt0@joomla.org","Estado":true,"IdEmpleado":1,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":38330052,"IdTipoDocumento":2,"NroIdentificacion":38330052,"PrimerNombre":"Yanaton","SegundoNombre":"Silvia","PrimerApellido":"Keat","SegundoApellido":"Hagergham","Telefono":"336-326-1226","Dirección":"731 Weeping Birch Way","Email":"shagergham1@chicagotribune.com","Estado":true,"IdEmpleado":2,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":5228096,"IdTipoDocumento":1,"NroIdentificacion":5228096,"PrimerNombre":"Melisenda","SegundoNombre":"Millisent","PrimerApellido":"Nizard","SegundoApellido":"Tanswill","Telefono":"199-102-1161","Dirección":"31 Oneill Park","Email":"mtanswill2@accuweather.com","Estado":true,"IdEmpleado":3,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":8631555,"IdTipoDocumento":3,"NroIdentificacion":8631555,"PrimerNombre":"Rica","SegundoNombre":"Chas","PrimerApellido":"McIllrick","SegundoApellido":"Insko","Telefono":"778-825-7509","Dirección":"180 Birchwood Terrace","Email":"cinsko3@slideshare.net","Estado":true,"IdEmpleado":4,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":27031949,"IdTipoDocumento":1,"NroIdentificacion":27031949,"PrimerNombre":"Kai","SegundoNombre":"Libbey","PrimerApellido":"Jaegar","SegundoApellido":"Pinson","Telefono":"812-398-1480","Dirección":"4579 Charing Cross Plaza","Email":"lpinson4@opera.com","Estado":true,"IdEmpleado":5,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":38736285,"IdTipoDocumento":1,"NroIdentificacion":38736285,"PrimerNombre":"Jeno","SegundoNombre":"Dudley","PrimerApellido":"Pelos","SegundoApellido":"Thraves","Telefono":"629-472-2771","Dirección":"6460 Monument Circle","Email":"dthraves5@elegantthemes.com","Estado":true,"IdEmpleado":6,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":23694265,"IdTipoDocumento":2,"NroIdentificacion":23694265,"PrimerNombre":"Oliver","SegundoNombre":"Ruddie","PrimerApellido":"Winspur","SegundoApellido":"Plowes","Telefono":"148-568-1086","Dirección":"98 Spenser Place","Email":"rplowes6@ucoz.com","Estado":true,"IdEmpleado":7,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":2526825,"IdTipoDocumento":3,"NroIdentificacion":2526825,"PrimerNombre":"Kamilah","SegundoNombre":"Alva","PrimerApellido":"Toffolo","SegundoApellido":"Waggitt","Telefono":"812-347-6847","Dirección":"41 Southridge Trail","Email":"awaggitt7@liveinternet.ru","Estado":true,"IdEmpleado":8,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":15032040,"IdTipoDocumento":3,"NroIdentificacion":15032040,"PrimerNombre":"Libbi","SegundoNombre":"Stephi","PrimerApellido":"Rozier","SegundoApellido":"Boyer","Telefono":"573-750-6880","Dirección":"7 Morning Lane","Email":"sboyer8@who.int","Estado":true,"IdEmpleado":9,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":19390894,"IdTipoDocumento":3,"NroIdentificacion":19390894,"PrimerNombre":"Turner","SegundoNombre":"Beaufort","PrimerApellido":"Cornier","SegundoApellido":"Guillot","Telefono":"254-946-5972","Dirección":"580 Helena Terrace","Email":"bguillot9@bloomberg.com","Estado":true,"IdEmpleado":10,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12120646,"IdTipoDocumento":3,"NroIdentificacion":12120646,"PrimerNombre":"Corina","SegundoNombre":"Dulcinea","PrimerApellido":"Gilliard","SegundoApellido":"O'Hogertie","Telefono":"772-986-0795","Dirección":"181 Dorton Alley","Email":"dohogertiea@arstechnica.com","Estado":true,"IdEmpleado":11,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":17771022,"IdTipoDocumento":1,"NroIdentificacion":17771022,"PrimerNombre":"Megen","SegundoNombre":"Delcine","PrimerApellido":"Worthing","SegundoApellido":"Petrillo","Telefono":"546-391-3710","Dirección":"18 Haas Trail","Email":"dpetrillob@bloglines.com","Estado":true,"IdEmpleado":12,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":22799004,"IdTipoDocumento":3,"NroIdentificacion":22799004,"PrimerNombre":"Dedra","SegundoNombre":"Herschel","PrimerApellido":"McCurlye","SegundoApellido":"Streeter","Telefono":"681-204-6240","Dirección":"031 Fisk Road","Email":"hstreeterc@sciencedirect.com","Estado":true,"IdEmpleado":13,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":5775601,"IdTipoDocumento":1,"NroIdentificacion":5775601,"PrimerNombre":"Rafaelita","SegundoNombre":"Lisa","PrimerApellido":"Abbe","SegundoApellido":"Ingarfield","Telefono":"361-877-6191","Dirección":"599 Fieldstone Drive","Email":"lingarfieldd@friendfeed.com","Estado":true,"IdEmpleado":14,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":21443862,"IdTipoDocumento":3,"NroIdentificacion":21443862,"PrimerNombre":"Vicky","SegundoNombre":"Egbert","PrimerApellido":"McIlory","SegundoApellido":"McBeith","Telefono":"562-357-4868","Dirección":"70 Sunbrook Point","Email":"emcbeithe@cornell.edu","Estado":true,"IdEmpleado":15,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":1304088,"IdTipoDocumento":1,"NroIdentificacion":1304088,"PrimerNombre":"Iosep","SegundoNombre":"Gothart","PrimerApellido":"Aronov","SegundoApellido":"Rosebotham","Telefono":"608-694-5275","Dirección":"6 Londonderry Plaza","Email":"grosebothamf@github.io","Estado":true,"IdEmpleado":16,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":22235079,"IdTipoDocumento":3,"NroIdentificacion":22235079,"PrimerNombre":"Marty","SegundoNombre":"Olive","PrimerApellido":"Spadari","SegundoApellido":"Willgrass","Telefono":"874-243-3269","Dirección":"57453 Forest Center","Email":"owillgrassg@naver.com","Estado":true,"IdEmpleado":17,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":9122023,"IdTipoDocumento":2,"NroIdentificacion":9122023,"PrimerNombre":"Anabel","SegundoNombre":"Bertram","PrimerApellido":"Cawsy","SegundoApellido":"Geeve","Telefono":"539-724-6689","Dirección":"52859 Hermina Place","Email":"bgeeveh@hostgator.com","Estado":true,"IdEmpleado":18,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":36628446,"IdTipoDocumento":2,"NroIdentificacion":36628446,"PrimerNombre":"Loretta","SegundoNombre":"Arnoldo","PrimerApellido":"Yurenev","SegundoApellido":"Argontt","Telefono":"463-646-2809","Dirección":"031 Ridge Oak Lane","Email":"aargontti@usatoday.com","Estado":true,"IdEmpleado":19,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":22656211,"IdTipoDocumento":2,"NroIdentificacion":22656211,"PrimerNombre":"Dacie","SegundoNombre":"Barnabe","PrimerApellido":"Fairbank","SegundoApellido":"Coucha","Telefono":"692-473-1139","Dirección":"74 Sundown Point","Email":"bcouchaj@parallels.com","Estado":true,"IdEmpleado":20,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":29687005,"IdTipoDocumento":2,"NroIdentificacion":29687005,"PrimerNombre":"Levey","SegundoNombre":"Merralee","PrimerApellido":"Demongeot","SegundoApellido":"Jentet","Telefono":"844-437-4757","Dirección":"812 Crowley Park","Email":"mjentetk@shinystat.com","Estado":true,"IdEmpleado":21,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":10362351,"IdTipoDocumento":3,"NroIdentificacion":10362351,"PrimerNombre":"Evanne","SegundoNombre":"Virginia","PrimerApellido":"Onn","SegundoApellido":"Fausset","Telefono":"360-329-5324","Dirección":"9361 Barby Place","Email":"vfaussetl@pagesperso-orange.fr","Estado":true,"IdEmpleado":22,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":40414511,"IdTipoDocumento":3,"NroIdentificacion":40414511,"PrimerNombre":"Gwenette","SegundoNombre":"Reina","PrimerApellido":"Dmitrievski","SegundoApellido":"McQuin","Telefono":"164-104-4934","Dirección":"2 Derek Drive","Email":"rmcquinm@eepurl.com","Estado":true,"IdEmpleado":23,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":36701306,"IdTipoDocumento":3,"NroIdentificacion":36701306,"PrimerNombre":"Donetta","SegundoNombre":"Sim","PrimerApellido":"Grinsdale","SegundoApellido":"Haquard","Telefono":"125-370-8742","Dirección":"1856 Arrowood Junction","Email":"shaquardn@skyrock.com","Estado":true,"IdEmpleado":24,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":24869779,"IdTipoDocumento":3,"NroIdentificacion":24869779,"PrimerNombre":"Hatti","SegundoNombre":"Alexandre","PrimerApellido":"Lodin","SegundoApellido":"Talton","Telefono":"387-884-2570","Dirección":"7571 Birchwood Crossing","Email":"ataltono@cyberchimps.com","Estado":true,"IdEmpleado":25,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":8544184,"IdTipoDocumento":3,"NroIdentificacion":8544184,"PrimerNombre":"Junina","SegundoNombre":"Burk","PrimerApellido":"Guillot","SegundoApellido":"Cussins","Telefono":"813-642-0753","Dirección":"31 Ridgeview Court","Email":"bcussinsp@blinklist.com","Estado":true,"IdEmpleado":26,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":36374538,"IdTipoDocumento":2,"NroIdentificacion":36374538,"PrimerNombre":"Eva","SegundoNombre":"Dniren","PrimerApellido":"Linklater","SegundoApellido":"Leer","Telefono":"442-275-3226","Dirección":"6 Merchant Crossing","Email":"dleerq@google.cn","Estado":true,"IdEmpleado":27,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":26241563,"IdTipoDocumento":1,"NroIdentificacion":26241563,"PrimerNombre":"Jennilee","SegundoNombre":"Norina","PrimerApellido":"Boothe","SegundoApellido":"Dugood","Telefono":"171-425-1456","Dirección":"8429 Farwell Point","Email":"ndugoodr@networksolutions.com","Estado":true,"IdEmpleado":28,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":25530368,"IdTipoDocumento":1,"NroIdentificacion":25530368,"PrimerNombre":"Reider","SegundoNombre":"Norene","PrimerApellido":"Tessington","SegundoApellido":"Palliser","Telefono":"550-975-6914","Dirección":"7416 Northwestern Avenue","Email":"npallisers@nyu.edu","Estado":true,"IdEmpleado":29,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":23685389,"IdTipoDocumento":1,"NroIdentificacion":23685389,"PrimerNombre":"Kingsly","SegundoNombre":"Odelia","PrimerApellido":"Rathke","SegundoApellido":"Rustich","Telefono":"516-755-2206","Dirección":"0547 Raven Plaza","Email":"orusticht@shareasale.com","Estado":true,"IdEmpleado":30,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":41962488,"IdTipoDocumento":2,"NroIdentificacion":41962488,"PrimerNombre":"Sibley","SegundoNombre":"Rolando","PrimerApellido":"Wemyss","SegundoApellido":"Pietrasik","Telefono":"186-773-6475","Dirección":"92312 Bobwhite Park","Email":"rpietrasiku@ycombinator.com","Estado":true,"IdEmpleado":31,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":42943957,"IdTipoDocumento":2,"NroIdentificacion":42943957,"PrimerNombre":"Phillida","SegundoNombre":"Deeanne","PrimerApellido":"Maffioni","SegundoApellido":"Marzelo","Telefono":"320-422-7238","Dirección":"497 Del Mar Trail","Email":"dmarzelov@fc2.com","Estado":true,"IdEmpleado":32,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":37034308,"IdTipoDocumento":1,"NroIdentificacion":37034308,"PrimerNombre":"Quintin","SegundoNombre":"Alisa","PrimerApellido":"Simcock","SegundoApellido":"Gobbet","Telefono":"430-803-3506","Dirección":"282 Crest Line Parkway","Email":"agobbetw@odnoklassniki.ru","Estado":true,"IdEmpleado":33,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":46670921,"IdTipoDocumento":3,"NroIdentificacion":46670921,"PrimerNombre":"Tailor","SegundoNombre":"Odell","PrimerApellido":"Salzberger","SegundoApellido":"Ferruzzi","Telefono":"426-166-0664","Dirección":"7 Hudson Street","Email":"oferruzzix@tiny.cc","Estado":true,"IdEmpleado":34,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":27121892,"IdTipoDocumento":1,"NroIdentificacion":27121892,"PrimerNombre":"Guillermo","SegundoNombre":"Helaine","PrimerApellido":"Birdseye","SegundoApellido":"Brosetti","Telefono":"731-422-5425","Dirección":"51 Sloan Pass","Email":"hbrosettiy@surveymonkey.com","Estado":true,"IdEmpleado":35,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":19755914,"IdTipoDocumento":1,"NroIdentificacion":19755914,"PrimerNombre":"Shea","SegundoNombre":"Jacky","PrimerApellido":"Aleksidze","SegundoApellido":"Emlyn","Telefono":"202-492-5444","Dirección":"2044 Shoshone Junction","Email":"jemlynz@amazon.co.jp","Estado":true,"IdEmpleado":36,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":10340082,"IdTipoDocumento":2,"NroIdentificacion":10340082,"PrimerNombre":"Durand","SegundoNombre":"Dukey","PrimerApellido":"Miebes","SegundoApellido":"Lashmore","Telefono":"951-797-4314","Dirección":"914 Dryden Alley","Email":"dlashmore10@cornell.edu","Estado":true,"IdEmpleado":37,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":45874659,"IdTipoDocumento":2,"NroIdentificacion":45874659,"PrimerNombre":"Rhianon","SegundoNombre":"Cyrus","PrimerApellido":"Pestricke","SegundoApellido":"Fradgley","Telefono":"422-379-4389","Dirección":"6 Thierer Parkway","Email":"cfradgley11@earthlink.net","Estado":true,"IdEmpleado":38,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":26382802,"IdTipoDocumento":3,"NroIdentificacion":26382802,"PrimerNombre":"Lonna","SegundoNombre":"Conni","PrimerApellido":"Wilkowski","SegundoApellido":"Dredge","Telefono":"239-848-1979","Dirección":"4 High Crossing Crossing","Email":"cdredge12@liveinternet.ru","Estado":true,"IdEmpleado":39,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":26185839,"IdTipoDocumento":2,"NroIdentificacion":26185839,"PrimerNombre":"Karlie","SegundoNombre":"Auberon","PrimerApellido":"Frame","SegundoApellido":"Redmore","Telefono":"395-524-0662","Dirección":"352 Fisk Trail","Email":"aredmore13@blinklist.com","Estado":true,"IdEmpleado":40,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":30348353,"IdTipoDocumento":3,"NroIdentificacion":30348353,"PrimerNombre":"Izabel","SegundoNombre":"Claudianus","PrimerApellido":"Monks","SegundoApellido":"Capener","Telefono":"930-345-1883","Dirección":"003 Village Junction","Email":"ccapener14@cdbaby.com","Estado":true,"IdEmpleado":41,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12499889,"IdTipoDocumento":3,"NroIdentificacion":12499889,"PrimerNombre":"Lilith","SegundoNombre":"Lev","PrimerApellido":"Abrahamoff","SegundoApellido":"Cockerham","Telefono":"725-386-0787","Dirección":"4 Redwing Circle","Email":"lcockerham15@sbwire.com","Estado":true,"IdEmpleado":42,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":38534409,"IdTipoDocumento":3,"NroIdentificacion":38534409,"PrimerNombre":"Gottfried","SegundoNombre":"Garek","PrimerApellido":"MacKibbon","SegundoApellido":"Fane","Telefono":"354-848-7469","Dirección":"993 Fremont Way","Email":"gfane16@posterous.com","Estado":true,"IdEmpleado":43,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12101548,"IdTipoDocumento":1,"NroIdentificacion":12101548,"PrimerNombre":"Karia","SegundoNombre":"Neils","PrimerApellido":"Jewster","SegundoApellido":"Larkworthy","Telefono":"846-359-4425","Dirección":"467 Haas Avenue","Email":"nlarkworthy17@plala.or.jp","Estado":true,"IdEmpleado":44,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":19077681,"IdTipoDocumento":3,"NroIdentificacion":19077681,"PrimerNombre":"Raymond","SegundoNombre":"Hanson","PrimerApellido":"Tym","SegundoApellido":"Brettor","Telefono":"609-154-0532","Dirección":"539 Dapin Street","Email":"hbrettor18@thetimes.co.uk","Estado":true,"IdEmpleado":45,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":28105825,"IdTipoDocumento":2,"NroIdentificacion":28105825,"PrimerNombre":"Betsey","SegundoNombre":"Goldi","PrimerApellido":"Weald","SegundoApellido":"Seater","Telefono":"845-747-5197","Dirección":"84 Carberry Plaza","Email":"gseater19@reference.com","Estado":true,"IdEmpleado":46,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":40093326,"IdTipoDocumento":1,"NroIdentificacion":40093326,"PrimerNombre":"Jenny","SegundoNombre":"Vail","PrimerApellido":"Benez","SegundoApellido":"Sandbach","Telefono":"166-926-7220","Dirección":"8 Granby Point","Email":"vsandbach1a@cnn.com","Estado":true,"IdEmpleado":47,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":10006990,"IdTipoDocumento":3,"NroIdentificacion":10006990,"PrimerNombre":"Dion","SegundoNombre":"Bastien","PrimerApellido":"Wickins","SegundoApellido":"Dimberline","Telefono":"716-823-4333","Dirección":"569 Barby Terrace","Email":"bdimberline1b@tamu.edu","Estado":true,"IdEmpleado":48,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":35882110,"IdTipoDocumento":1,"NroIdentificacion":35882110,"PrimerNombre":"Davina","SegundoNombre":"Cassie","PrimerApellido":"Stidston","SegundoApellido":"Humby","Telefono":"635-680-7364","Dirección":"6 Westridge Place","Email":"chumby1c@slideshare.net","Estado":true,"IdEmpleado":49,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":2342075,"IdTipoDocumento":1,"NroIdentificacion":2342075,"PrimerNombre":"Gladi","SegundoNombre":"Adam","PrimerApellido":"Cowerd","SegundoApellido":"Lumly","Telefono":"498-220-3383","Dirección":"1 Macpherson Hill","Email":"alumly1d@ftc.gov","Estado":true,"IdEmpleado":50,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":38120071,"IdTipoDocumento":3,"NroIdentificacion":38120071,"PrimerNombre":"Burlie","SegundoNombre":"Abie","PrimerApellido":"Pessler","SegundoApellido":"Mibourne","Telefono":"860-616-8083","Dirección":"707 Haas Crossing","Email":"amibourne1e@google.it","Estado":true,"IdEmpleado":51,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":2523747,"IdTipoDocumento":3,"NroIdentificacion":2523747,"PrimerNombre":"Dennison","SegundoNombre":"Ardis","PrimerApellido":"Dowd","SegundoApellido":"Cowlin","Telefono":"646-149-0411","Dirección":"4 Dayton Hill","Email":"acowlin1f@boston.com","Estado":true,"IdEmpleado":52,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":48611246,"IdTipoDocumento":3,"NroIdentificacion":48611246,"PrimerNombre":"Chick","SegundoNombre":"Sella","PrimerApellido":"Ambage","SegundoApellido":"Kruse","Telefono":"657-607-7731","Dirección":"98 Sage Avenue","Email":"skruse1g@canalblog.com","Estado":true,"IdEmpleado":53,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":22886856,"IdTipoDocumento":1,"NroIdentificacion":22886856,"PrimerNombre":"Maurizio","SegundoNombre":"Lonni","PrimerApellido":"Bendel","SegundoApellido":"Smeath","Telefono":"244-791-2314","Dirección":"0374 Golden Leaf Drive","Email":"lsmeath1h@google.ca","Estado":true,"IdEmpleado":54,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":39753690,"IdTipoDocumento":3,"NroIdentificacion":39753690,"PrimerNombre":"Nico","SegundoNombre":"Harri","PrimerApellido":"McNay","SegundoApellido":"Poluzzi","Telefono":"644-488-6786","Dirección":"9770 Kings Road","Email":"hpoluzzi1i@fastcompany.com","Estado":true,"IdEmpleado":55,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":24255455,"IdTipoDocumento":2,"NroIdentificacion":24255455,"PrimerNombre":"Ester","SegundoNombre":"Lorette","PrimerApellido":"Jealous","SegundoApellido":"Gripton","Telefono":"797-634-6007","Dirección":"63422 Hoepker Circle","Email":"lgripton1j@ted.com","Estado":true,"IdEmpleado":56,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12958008,"IdTipoDocumento":2,"NroIdentificacion":12958008,"PrimerNombre":"Christy","SegundoNombre":"Nolie","PrimerApellido":"McElhinney","SegundoApellido":"Dyment","Telefono":"941-967-1062","Dirección":"5 Atwood Avenue","Email":"ndyment1k@go.com","Estado":true,"IdEmpleado":57,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":43424310,"IdTipoDocumento":3,"NroIdentificacion":43424310,"PrimerNombre":"Genevieve","SegundoNombre":"Con","PrimerApellido":"Ubsdell","SegundoApellido":"Lovstrom","Telefono":"290-251-3293","Dirección":"1556 Brickson Park Trail","Email":"clovstrom1l@mit.edu","Estado":true,"IdEmpleado":58,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":11214979,"IdTipoDocumento":1,"NroIdentificacion":11214979,"PrimerNombre":"Ilse","SegundoNombre":"Heywood","PrimerApellido":"Patching","SegundoApellido":"Forst","Telefono":"783-332-4382","Dirección":"85713 Dawn Plaza","Email":"hforst1m@eventbrite.com","Estado":true,"IdEmpleado":59,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":30864395,"IdTipoDocumento":3,"NroIdentificacion":30864395,"PrimerNombre":"Ema","SegundoNombre":"Alisun","PrimerApellido":"Gallally","SegundoApellido":"Pude","Telefono":"570-672-3927","Dirección":"4 Dixon Crossing","Email":"apude1n@qq.com","Estado":true,"IdEmpleado":60,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":3657862,"IdTipoDocumento":3,"NroIdentificacion":3657862,"PrimerNombre":"Kym","SegundoNombre":"Herb","PrimerApellido":"Quinby","SegundoApellido":"Farren","Telefono":"609-601-6941","Dirección":"452 Lunder Hill","Email":"hfarren1o@naver.com","Estado":true,"IdEmpleado":61,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":18981829,"IdTipoDocumento":2,"NroIdentificacion":18981829,"PrimerNombre":"Angela","SegundoNombre":"Dorotea","PrimerApellido":"Coytes","SegundoApellido":"Richardet","Telefono":"650-656-2011","Dirección":"1751 Laurel Terrace","Email":"drichardet1p@ovh.net","Estado":true,"IdEmpleado":62,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":17024482,"IdTipoDocumento":3,"NroIdentificacion":17024482,"PrimerNombre":"Mirna","SegundoNombre":"Maurene","PrimerApellido":"Sextie","SegundoApellido":"Rylett","Telefono":"492-553-2514","Dirección":"2870 Autumn Leaf Avenue","Email":"mrylett1q@sourceforge.net","Estado":true,"IdEmpleado":63,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":42329029,"IdTipoDocumento":3,"NroIdentificacion":42329029,"PrimerNombre":"Sondra","SegundoNombre":"Dyna","PrimerApellido":"Darnody","SegundoApellido":"Kesby","Telefono":"879-298-9399","Dirección":"638 2nd Avenue","Email":"dkesby1r@columbia.edu","Estado":true,"IdEmpleado":64,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":2780021,"IdTipoDocumento":1,"NroIdentificacion":2780021,"PrimerNombre":"Lishe","SegundoNombre":"Amalea","PrimerApellido":"Attkins","SegundoApellido":"Tupp","Telefono":"652-658-7953","Dirección":"1 Boyd Road","Email":"atupp1s@moonfruit.com","Estado":true,"IdEmpleado":65,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":18966025,"IdTipoDocumento":3,"NroIdentificacion":18966025,"PrimerNombre":"Roberto","SegundoNombre":"Jerrilyn","PrimerApellido":"Oaten","SegundoApellido":"Mills","Telefono":"798-214-1485","Dirección":"75093 Colorado Road","Email":"jmills1t@t.co","Estado":true,"IdEmpleado":66,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":29556251,"IdTipoDocumento":1,"NroIdentificacion":29556251,"PrimerNombre":"Sigfried","SegundoNombre":"Hercules","PrimerApellido":"Littrik","SegundoApellido":"Halbard","Telefono":"266-151-1336","Dirección":"86164 Sachs Circle","Email":"hhalbard1u@techcrunch.com","Estado":true,"IdEmpleado":67,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":48791639,"IdTipoDocumento":3,"NroIdentificacion":48791639,"PrimerNombre":"Davita","SegundoNombre":"Annabelle","PrimerApellido":"Roadknight","SegundoApellido":"Armour","Telefono":"692-873-7780","Dirección":"39612 Norway Maple Terrace","Email":"aarmour1v@storify.com","Estado":true,"IdEmpleado":68,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":43923516,"IdTipoDocumento":2,"NroIdentificacion":43923516,"PrimerNombre":"Fin","SegundoNombre":"Neron","PrimerApellido":"Bane","SegundoApellido":"Buckhurst","Telefono":"249-761-6948","Dirección":"2 Clove Road","Email":"nbuckhurst1w@telegraph.co.uk","Estado":true,"IdEmpleado":69,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":46828873,"IdTipoDocumento":2,"NroIdentificacion":46828873,"PrimerNombre":"Delly","SegundoNombre":"Lorrayne","PrimerApellido":"Eastway","SegundoApellido":"Worshall","Telefono":"849-421-3642","Dirección":"3 American Ash Road","Email":"lworshall1x@cnbc.com","Estado":true,"IdEmpleado":70,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":43283427,"IdTipoDocumento":2,"NroIdentificacion":43283427,"PrimerNombre":"Lind","SegundoNombre":"Brockie","PrimerApellido":"Dallinder","SegundoApellido":"Bozward","Telefono":"590-569-1195","Dirección":"4288 Manley Plaza","Email":"bbozward1y@google.com.au","Estado":true,"IdEmpleado":71,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":15070213,"IdTipoDocumento":1,"NroIdentificacion":15070213,"PrimerNombre":"Jacky","SegundoNombre":"Ula","PrimerApellido":"Ulster","SegundoApellido":"Bertenshaw","Telefono":"310-858-2555","Dirección":"64 Knutson Drive","Email":"ubertenshaw1z@ifeng.com","Estado":true,"IdEmpleado":72,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12184958,"IdTipoDocumento":1,"NroIdentificacion":12184958,"PrimerNombre":"Maryjane","SegundoNombre":"Worth","PrimerApellido":"Piggott","SegundoApellido":"Braizier","Telefono":"598-452-8147","Dirección":"95 Waubesa Crossing","Email":"wbraizier20@ftc.gov","Estado":true,"IdEmpleado":73,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":42134470,"IdTipoDocumento":1,"NroIdentificacion":42134470,"PrimerNombre":"Dodi","SegundoNombre":"Jessee","PrimerApellido":"Devinn","SegundoApellido":"Orford","Telefono":"948-893-9985","Dirección":"40114 Reindahl Point","Email":"jorford21@umn.edu","Estado":true,"IdEmpleado":74,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":24228251,"IdTipoDocumento":3,"NroIdentificacion":24228251,"PrimerNombre":"Glynda","SegundoNombre":"Katheryn","PrimerApellido":"Kilius","SegundoApellido":"Huckerby","Telefono":"426-750-1382","Dirección":"2 North Junction","Email":"khuckerby22@hexun.com","Estado":true,"IdEmpleado":75,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":47577460,"IdTipoDocumento":3,"NroIdentificacion":47577460,"PrimerNombre":"Britni","SegundoNombre":"Fran","PrimerApellido":"Stonier","SegundoApellido":"Standbridge","Telefono":"558-888-0209","Dirección":"03 Crest Line Alley","Email":"fstandbridge23@narod.ru","Estado":true,"IdEmpleado":76,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":27206654,"IdTipoDocumento":1,"NroIdentificacion":27206654,"PrimerNombre":"Borden","SegundoNombre":"Diena","PrimerApellido":"Houltham","SegundoApellido":"Buncher","Telefono":"427-411-8020","Dirección":"21 Clyde Gallagher Court","Email":"dbuncher24@sourceforge.net","Estado":true,"IdEmpleado":77,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":30728811,"IdTipoDocumento":1,"NroIdentificacion":30728811,"PrimerNombre":"Magdalene","SegundoNombre":"Elbertine","PrimerApellido":"Brightie","SegundoApellido":"Downing","Telefono":"638-492-4363","Dirección":"87 Blackbird Circle","Email":"edowning25@hp.com","Estado":true,"IdEmpleado":78,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":37444977,"IdTipoDocumento":3,"NroIdentificacion":37444977,"PrimerNombre":"Rubia","SegundoNombre":"Irvin","PrimerApellido":"Crossfield","SegundoApellido":"Lorden","Telefono":"810-762-4500","Dirección":"18 Crowley Trail","Email":"ilorden26@utexas.edu","Estado":true,"IdEmpleado":79,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":39102926,"IdTipoDocumento":2,"NroIdentificacion":39102926,"PrimerNombre":"Harland","SegundoNombre":"Lamar","PrimerApellido":"Ricards","SegundoApellido":"McPharlain","Telefono":"710-113-3864","Dirección":"69349 Brown Hill","Email":"lmcpharlain27@time.com","Estado":true,"IdEmpleado":80,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":23010772,"IdTipoDocumento":3,"NroIdentificacion":23010772,"PrimerNombre":"Janek","SegundoNombre":"Lina","PrimerApellido":"Dawid","SegundoApellido":"Sanja","Telefono":"366-377-3129","Dirección":"7871 Gulseth Point","Email":"lsanja28@hexun.com","Estado":true,"IdEmpleado":81,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":15545321,"IdTipoDocumento":2,"NroIdentificacion":15545321,"PrimerNombre":"Rolph","SegundoNombre":"Winona","PrimerApellido":"Ansett","SegundoApellido":"Kybert","Telefono":"775-609-7855","Dirección":"87016 Clarendon Alley","Email":"wkybert29@e-recht24.de","Estado":true,"IdEmpleado":82,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":46364121,"IdTipoDocumento":3,"NroIdentificacion":46364121,"PrimerNombre":"Franky","SegundoNombre":"Andra","PrimerApellido":"Tann","SegundoApellido":"Thowless","Telefono":"974-269-3191","Dirección":"1229 Knutson Street","Email":"athowless2a@msu.edu","Estado":true,"IdEmpleado":83,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":19499148,"IdTipoDocumento":2,"NroIdentificacion":19499148,"PrimerNombre":"Kessia","SegundoNombre":"Chevy","PrimerApellido":"Ralling","SegundoApellido":"Cochet","Telefono":"878-262-9046","Dirección":"288 Boyd Parkway","Email":"ccochet2b@simplemachines.org","Estado":true,"IdEmpleado":84,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":8785031,"IdTipoDocumento":2,"NroIdentificacion":8785031,"PrimerNombre":"Nicoline","SegundoNombre":"Reeta","PrimerApellido":"Musico","SegundoApellido":"Gannan","Telefono":"888-596-6331","Dirección":"93 Elmside Drive","Email":"rgannan2c@auda.org.au","Estado":true,"IdEmpleado":85,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":10098124,"IdTipoDocumento":1,"NroIdentificacion":10098124,"PrimerNombre":"Roxane","SegundoNombre":"Ax","PrimerApellido":"Dunkerley","SegundoApellido":"Faunt","Telefono":"772-196-4736","Dirección":"8264 Center Lane","Email":"afaunt2d@taobao.com","Estado":true,"IdEmpleado":86,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":11108113,"IdTipoDocumento":1,"NroIdentificacion":11108113,"PrimerNombre":"Carlyle","SegundoNombre":"Ulysses","PrimerApellido":"Smeath","SegundoApellido":"McMurtyr","Telefono":"347-576-9297","Dirección":"3566 7th Plaza","Email":"umcmurtyr2e@mail.ru","Estado":true,"IdEmpleado":87,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":13387341,"IdTipoDocumento":3,"NroIdentificacion":13387341,"PrimerNombre":"Rickie","SegundoNombre":"Briant","PrimerApellido":"Andreassen","SegundoApellido":"Nellies","Telefono":"493-520-5457","Dirección":"6072 Pine View Alley","Email":"bnellies2f@ustream.tv","Estado":true,"IdEmpleado":88,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":44654224,"IdTipoDocumento":1,"NroIdentificacion":44654224,"PrimerNombre":"Mycah","SegundoNombre":"Valry","PrimerApellido":"Oppery","SegundoApellido":"Babon","Telefono":"730-271-1041","Dirección":"3531 Loeprich Way","Email":"vbabon2g@hibu.com","Estado":true,"IdEmpleado":89,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":38587821,"IdTipoDocumento":3,"NroIdentificacion":38587821,"PrimerNombre":"Prudi","SegundoNombre":"Eunice","PrimerApellido":"Chedgey","SegundoApellido":"Birk","Telefono":"332-172-9257","Dirección":"244 Toban Pass","Email":"ebirk2h@gnu.org","Estado":true,"IdEmpleado":90,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":20455790,"IdTipoDocumento":1,"NroIdentificacion":20455790,"PrimerNombre":"Mag","SegundoNombre":"Ulberto","PrimerApellido":"Sandes","SegundoApellido":"Bannon","Telefono":"141-246-3402","Dirección":"54 Jenifer Place","Email":"ubannon2i@scientificamerican.com","Estado":true,"IdEmpleado":91,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":14663845,"IdTipoDocumento":1,"NroIdentificacion":14663845,"PrimerNombre":"Valli","SegundoNombre":"Fanya","PrimerApellido":"Sandeland","SegundoApellido":"Cottie","Telefono":"925-513-4488","Dirección":"53780 Northland Street","Email":"fcottie2j@jugem.jp","Estado":true,"IdEmpleado":92,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":12134165,"IdTipoDocumento":1,"NroIdentificacion":12134165,"PrimerNombre":"Sawyere","SegundoNombre":"Benny","PrimerApellido":"Mendel","SegundoApellido":"Stranio","Telefono":"204-251-8418","Dirección":"05 Truax Terrace","Email":"bstranio2k@merriam-webster.com","Estado":true,"IdEmpleado":93,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":25945235,"IdTipoDocumento":1,"NroIdentificacion":25945235,"PrimerNombre":"Abbott","SegundoNombre":"Melessa","PrimerApellido":"Rubica","SegundoApellido":"Fardy","Telefono":"178-394-1141","Dirección":"333 Bonner Street","Email":"mfardy2l@cbsnews.com","Estado":true,"IdEmpleado":94,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":27340441,"IdTipoDocumento":3,"NroIdentificacion":27340441,"PrimerNombre":"Marybelle","SegundoNombre":"Lonny","PrimerApellido":"Tuberfield","SegundoApellido":"Pinnick","Telefono":"584-494-2040","Dirección":"545 7th Park","Email":"lpinnick2m@earthlink.net","Estado":true,"IdEmpleado":95,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":24997518,"IdTipoDocumento":1,"NroIdentificacion":24997518,"PrimerNombre":"Bryn","SegundoNombre":"Netty","PrimerApellido":"Macauley","SegundoApellido":"McKew","Telefono":"207-771-3428","Dirección":"72398 Meadow Ridge Court","Email":"nmckew2n@ovh.net","Estado":true,"IdEmpleado":96,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":1393326,"IdTipoDocumento":1,"NroIdentificacion":1393326,"PrimerNombre":"Addie","SegundoNombre":"Michaela","PrimerApellido":"Foden","SegundoApellido":"Cann","Telefono":"497-944-6775","Dirección":"80161 Ramsey Crossing","Email":"mcann2o@booking.com","Estado":true,"IdEmpleado":97,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":49127100,"IdTipoDocumento":2,"NroIdentificacion":49127100,"PrimerNombre":"Tris","SegundoNombre":"Tremain","PrimerApellido":"Loveman","SegundoApellido":"Lorant","Telefono":"853-952-6036","Dirección":"356 Bultman Place","Email":"tlorant2p@hatena.ne.jp","Estado":true,"IdEmpleado":98,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":22342682,"IdTipoDocumento":2,"NroIdentificacion":22342682,"PrimerNombre":"Nessa","SegundoNombre":"Jenifer","PrimerApellido":"Ghilardi","SegundoApellido":"Kondratovich","Telefono":"271-691-9140","Dirección":"4 Coolidge Drive","Email":"jkondratovich2q@freewebs.com","Estado":true,"IdEmpleado":99,"IdSede":1,"CodigoProyecto":"010C_IMP"},
{"CodigoEmpleado":29450888,"IdTipoDocumento":2,"NroIdentificacion":29450888,"PrimerNombre":"Irita","SegundoNombre":"Rosemonde","PrimerApellido":"Hincks","SegundoApellido":"Debenham","Telefono":"902-922-4011","Dirección":"54 Fair Oaks Hill","Email":"rdebenham2r@discuz.net","Estado":true,"IdEmpleado":100,"IdSede":1,"CodigoProyecto":"010C_IMP"}]
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
