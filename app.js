const DB=[
/* ══ VERDURE ══ */
{id:1,name:'Spinaci crudi',cat:'Verdure',e:23,p:2.9,c:3.6,s:.4,f:.4,fi:2.2,sa:0,na:79,emoji:'🥬'},
{id:2,name:'Broccoli',cat:'Verdure',e:34,p:2.8,c:6.6,s:1.7,f:.4,fi:2.6,sa:0,na:33,emoji:'🥦'},
{id:3,name:'Carote',cat:'Verdure',e:41,p:.9,c:9.6,s:4.7,f:.2,fi:2.8,sa:0,na:69,emoji:'🥕'},
{id:4,name:'Pomodori',cat:'Verdure',e:18,p:.9,c:3.9,s:2.6,f:.2,fi:1.2,sa:0,na:5,emoji:'🍅'},
{id:5,name:'Zucchine',cat:'Verdure',e:17,p:1.2,c:3.1,s:2.5,f:.3,fi:1,sa:0,na:8,emoji:'🥒'},
{id:6,name:'Peperoni rossi',cat:'Verdure',e:31,p:1,c:6,s:4.2,f:.3,fi:2.1,sa:0,na:4,emoji:'🫑'},
{id:7,name:'Melanzane',cat:'Verdure',e:25,p:1,c:5.9,s:3.5,f:.2,fi:3,sa:0,na:2,emoji:'🍆'},
{id:8,name:'Cavolfiore',cat:'Verdure',e:25,p:1.9,c:5,s:1.9,f:.3,fi:2,sa:0,na:30,emoji:'🥦'},
{id:9,name:'Cipolla',cat:'Verdure',e:40,p:1.1,c:9.3,s:4.2,f:.1,fi:1.7,sa:0,na:4,emoji:'🧅'},
{id:10,name:'Aglio',cat:'Verdure',e:149,p:6.4,c:33.1,s:1,f:.5,fi:2.1,sa:.1,na:17,emoji:'🧄'},
{id:11,name:'Funghi champignon',cat:'Verdure',e:22,p:3.1,c:3.3,s:2,f:.3,fi:1,sa:0,na:5,emoji:'🍄'},
{id:12,name:'Asparagi',cat:'Verdure',e:20,p:2.2,c:3.9,s:1.9,f:.1,fi:2.1,sa:0,na:2,emoji:'🌿'},
{id:13,name:'Cetriolo',cat:'Verdure',e:15,p:.7,c:3.6,s:1.7,f:.1,fi:.5,sa:0,na:2,emoji:'🥒'},
{id:14,name:'Sedano',cat:'Verdure',e:16,p:.7,c:3,s:1.8,f:.2,fi:1.6,sa:0,na:80,emoji:'🥬'},
{id:15,name:'Finocchio',cat:'Verdure',e:31,p:1.2,c:7.3,s:3.9,f:.2,fi:3.1,sa:0,na:52,emoji:'🌿'},
{id:16,name:'Radicchio',cat:'Verdure',e:23,p:1.4,c:4.5,s:0,f:.3,fi:.9,sa:0,na:22,emoji:'🥬'},
{id:17,name:'Cavolo cappuccio',cat:'Verdure',e:25,p:1.3,c:5.8,s:3.2,f:.1,fi:2.5,sa:0,na:18,emoji:'🥬'},
{id:18,name:'Patata al forno',cat:'Verdure',e:93,p:2.5,c:21.1,s:1,f:.1,fi:2.2,sa:0,na:6,emoji:'🥔'},
{id:19,name:'Patata dolce',cat:'Verdure',e:86,p:1.6,c:20.1,s:4.2,f:.1,fi:3,sa:0,na:55,emoji:'🥔'},
{id:20,name:'Insalata iceberg',cat:'Verdure',e:14,p:.9,c:2.9,s:1.9,f:.1,fi:1.2,sa:0,na:10,emoji:'🥗'},
{id:21,name:'Mais in scatola',cat:'Verdure',e:86,p:3.2,c:18.7,s:2.9,f:1.2,fi:2.4,sa:.2,na:270,emoji:'🌽'},
{id:22,name:'Piselli freschi',cat:'Verdure',e:81,p:5.4,c:14.5,s:5.7,f:.4,fi:5.1,sa:.1,na:5,emoji:'🫛'},
{id:23,name:'Avocado',cat:'Frutta',e:160,p:2,c:8.5,s:.7,f:14.7,fi:6.7,sa:2.1,na:7,emoji:'🥑'},
{id:24,name:'Mela',cat:'Frutta',e:52,p:.3,c:13.8,s:10.4,f:.2,fi:2.4,sa:0,na:1,emoji:'🍎'},
{id:25,name:'Banana',cat:'Frutta',e:89,p:1.1,c:22.8,s:12.2,f:.3,fi:2.6,sa:.1,na:1,emoji:'🍌'},
{id:26,name:'Arancia',cat:'Frutta',e:47,p:.9,c:11.8,s:9.4,f:.1,fi:2.4,sa:0,na:0,emoji:'🍊'},
{id:27,name:'Fragole',cat:'Frutta',e:32,p:.7,c:7.7,s:4.9,f:.3,fi:2,sa:0,na:1,emoji:'🍓'},
{id:28,name:'Uva',cat:'Frutta',e:69,p:.7,c:18.1,s:15.5,f:.2,fi:.9,sa:0,na:2,emoji:'🍇'},
{id:29,name:'Pera',cat:'Frutta',e:57,p:.4,c:15.2,s:9.8,f:.1,fi:3.1,sa:0,na:1,emoji:'🍐'},
{id:30,name:'Kiwi',cat:'Frutta',e:61,p:1.1,c:14.7,s:9,f:.5,fi:3,sa:.1,na:3,emoji:'🥝'},
{id:31,name:'Mango',cat:'Frutta',e:60,p:.8,c:15,s:13.7,f:.4,fi:1.6,sa:.1,na:1,emoji:'🥭'},
{id:32,name:'Anguria',cat:'Frutta',e:30,p:.6,c:7.6,s:6.2,f:.2,fi:.4,sa:0,na:1,emoji:'🍉'},
{id:33,name:'Mirtilli',cat:'Frutta',e:57,p:.7,c:14.5,s:10,f:.3,fi:2.4,sa:0,na:1,emoji:'🫐'},
{id:34,name:'Lamponi',cat:'Frutta',e:53,p:1.2,c:11.9,s:4.4,f:.7,fi:6.5,sa:0,na:1,emoji:'🍓'},
{id:35,name:'Limone',cat:'Frutta',e:22,p:.4,c:6.9,s:2.5,f:.2,fi:0,sa:0,na:1,emoji:'🍋'},
{id:36,name:'Pasta semola cotta',cat:'Cereali',e:131,p:4.9,c:26.3,s:.6,f:.6,fi:1.4,sa:.1,na:2,emoji:'🍝'},
{id:37,name:'Pasta integrale cotta',cat:'Cereali',e:124,p:5.3,c:23.9,s:.4,f:.8,fi:3.5,sa:.1,na:2,emoji:'🍝'},
{id:38,name:'Riso bianco cotto',cat:'Cereali',e:130,p:2.7,c:28.6,s:0,f:.3,fi:.4,sa:.1,na:1,emoji:'🍚'},
{id:39,name:'Riso integrale cotto',cat:'Cereali',e:123,p:2.6,c:25.6,s:.4,f:1,fi:1.8,sa:.2,na:1,emoji:'🍚'},
{id:40,name:'Pane comune',cat:'Cereali',e:265,p:8.9,c:52.2,s:5,f:3.2,fi:2.7,sa:.7,na:491,emoji:'🍞'},
{id:41,name:'Pane integrale',cat:'Cereali',e:247,p:8,c:43.1,s:4.8,f:3.4,fi:7,sa:.7,na:400,emoji:'🍞'},
{id:42,name:'Avena fiocchi',cat:'Cereali',e:389,p:16.9,c:66.3,s:0,f:6.9,fi:10.6,sa:1.2,na:2,emoji:'🌾'},
{id:43,name:'Quinoa cotta',cat:'Cereali',e:120,p:4.4,c:21.3,s:.9,f:1.9,fi:2.8,sa:.2,na:7,emoji:'🌾'},
{id:44,name:'Farro cotto',cat:'Cereali',e:170,p:5.8,c:33.6,s:.4,f:.7,fi:3,sa:.1,na:4,emoji:'🌾'},
{id:45,name:'Crackers classici',cat:'Cereali',e:432,p:9.5,c:72,s:4,f:11,fi:3,sa:2.5,na:620,emoji:'🍘'},
{id:46,name:'Fette biscottate',cat:'Cereali',e:413,p:11,c:79.2,s:4.5,f:6.5,fi:3.5,sa:.9,na:500,emoji:'🍘'},
{id:47,name:'Gallette di riso',cat:'Cereali',e:385,p:7.5,c:81.5,s:.5,f:2.5,fi:2.5,sa:.5,na:10,emoji:'🍘'},
{id:48,name:'Lenticchie cotte',cat:'Legumi',e:116,p:9,c:20.1,s:1.8,f:.4,fi:7.9,sa:.1,na:2,emoji:'🫘'},
{id:49,name:'Ceci cotti',cat:'Legumi',e:164,p:8.9,c:27.4,s:4.8,f:2.6,fi:7.6,sa:.3,na:7,emoji:'🫘'},
{id:50,name:'Fagioli borlotti cotti',cat:'Legumi',e:127,p:8.7,c:22.8,s:.3,f:.5,fi:6.3,sa:.1,na:1,emoji:'🫘'},
{id:51,name:'Fagioli cannellini cotti',cat:'Legumi',e:132,p:8.7,c:23.9,s:.5,f:.9,fi:6.3,sa:.1,na:2,emoji:'🫘'},
{id:52,name:'Tofu naturale',cat:'Legumi',e:76,p:8.1,c:1.9,s:.4,f:4.2,fi:.3,sa:.6,na:7,emoji:'🫘'},
{id:53,name:'Hummus classico',cat:'Legumi',e:166,p:7.9,c:14.3,s:0,f:9.6,fi:6,sa:1,na:290,emoji:'🫘'},
{id:54,name:'Pollo petto cotto',cat:'Carne',e:165,p:31,c:0,s:0,f:3.6,fi:0,sa:1,na:74,emoji:'🍗'},
{id:55,name:'Pollo coscia cotta',cat:'Carne',e:209,p:26,c:0,s:0,f:11,fi:0,sa:3,na:84,emoji:'🍗'},
{id:56,name:'Manzo bistecca magra',cat:'Carne',e:187,p:26.4,c:0,s:0,f:9,fi:0,sa:3.5,na:58,emoji:'🥩'},
{id:57,name:'Manzo macinato 15%',cat:'Carne',e:215,p:20.2,c:0,s:0,f:14,fi:0,sa:5.5,na:65,emoji:'🥩'},
{id:58,name:'Tacchino petto cotto',cat:'Carne',e:157,p:29.9,c:0,s:0,f:3.7,fi:0,sa:1,na:70,emoji:'🍗'},
{id:59,name:'Maiale lombo',cat:'Carne',e:242,p:27.5,c:0,s:0,f:14,fi:0,sa:5,na:63,emoji:'🥩'},
{id:60,name:'Vitello scaloppina',cat:'Carne',e:196,p:29,c:0,s:0,f:8.7,fi:0,sa:3.2,na:77,emoji:'🥩'},
{id:61,name:'Prosciutto cotto',cat:'Salumi',e:136,p:18.4,c:1.2,s:.8,f:6.2,fi:0,sa:2.1,na:1000,emoji:'🥓'},
{id:62,name:'Prosciutto crudo',cat:'Salumi',e:187,p:27,c:0,s:0,f:9,fi:0,sa:3.2,na:2500,emoji:'🥓'},
{id:63,name:'Bresaola IGP',cat:'Salumi',e:151,p:32,c:0,s:0,f:2.3,fi:0,sa:.9,na:1400,emoji:'🥩'},
{id:64,name:'Salame Milano',cat:'Salumi',e:392,p:24,c:1.5,s:0,f:33,fi:0,sa:12.5,na:2200,emoji:'🥓'},
{id:65,name:'Mortadella',cat:'Salumi',e:311,p:14.7,c:1.6,s:.4,f:27.5,fi:0,sa:9.8,na:1500,emoji:'🥓'},
{id:66,name:'Würstel classico',cat:'Salumi',e:290,p:12.8,c:3,s:1.5,f:25.5,fi:0,sa:9.5,na:1100,emoji:'🌭'},
{id:67,name:'Salmone cotto',cat:'Pesce',e:208,p:20.4,c:0,s:0,f:13.4,fi:0,sa:3.1,na:59,emoji:'🐟'},
{id:68,name:'Tonno al naturale',cat:'Pesce',e:103,p:23.4,c:0,s:0,f:1,fi:0,sa:.3,na:335,emoji:'🐟'},
{id:69,name:"Tonno sott'olio Rio Mare",cat:'Pesce',brand:'Rio Mare',e:192,p:21.5,c:0,s:0,f:12,fi:0,sa:1.8,na:380,emoji:'🐟'},
{id:70,name:'Merluzzo cotto',cat:'Pesce',e:105,p:22.8,c:0,s:0,f:1,fi:0,sa:.2,na:68,emoji:'🐟'},
{id:71,name:'Branzino cotto',cat:'Pesce',e:124,p:23.6,c:0,s:0,f:3,fi:0,sa:.7,na:88,emoji:'🐟'},
{id:72,name:'Gamberi cotti',cat:'Pesce',e:99,p:20.9,c:.9,s:0,f:1.1,fi:0,sa:.3,na:224,emoji:'🦐'},
{id:73,name:'Polpo cotto',cat:'Pesce',e:164,p:29.8,c:4.4,s:0,f:2.1,fi:0,sa:.5,na:460,emoji:'🐙'},
{id:74,name:'Calamari cotti',cat:'Pesce',e:92,p:15.6,c:3.1,s:0,f:1.4,fi:0,sa:.3,na:260,emoji:'🦑'},
{id:75,name:'Cozze cotte',cat:'Pesce',e:172,p:23.8,c:7.4,s:0,f:4.5,fi:0,sa:.9,na:369,emoji:'🦪'},
{id:76,name:'Latte intero',cat:'Latticini',e:61,p:3.2,c:4.8,s:4.8,f:3.3,fi:0,sa:2.1,na:43,emoji:'🥛'},
{id:77,name:'Latte scremato',cat:'Latticini',e:35,p:3.4,c:5,s:5,f:.1,fi:0,sa:.1,na:44,emoji:'🥛'},
{id:78,name:'Yogurt greco 0%',cat:'Latticini',e:57,p:10.2,c:4,s:4,f:.2,fi:0,sa:.1,na:35,emoji:'🫙'},
{id:79,name:'Yogurt greco 2%',cat:'Latticini',e:73,p:9.9,c:4,s:4,f:2,fi:0,sa:1.3,na:35,emoji:'🫙'},
{id:80,name:'Yogurt intero naturale',cat:'Latticini',e:61,p:3.5,c:4.7,s:4.7,f:3.3,fi:0,sa:2.1,na:46,emoji:'🫙'},
{id:81,name:'Parmigiano Reggiano DOP',cat:'Latticini',e:431,p:38.5,c:0,s:0,f:29.7,fi:0,sa:18.6,na:1602,emoji:'🧀'},
{id:82,name:'Grana Padano DOP',cat:'Latticini',e:384,p:33,c:0,s:0,f:27.5,fi:0,sa:17.5,na:1500,emoji:'🧀'},
{id:83,name:'Mozzarella di bufala DOP',cat:'Latticini',e:260,p:18.9,c:.7,s:0,f:20.3,fi:0,sa:13.1,na:163,emoji:'🧀'},
{id:84,name:'Mozzarella fior di latte',cat:'Latticini',e:253,p:18.5,c:2.7,s:0,f:19.5,fi:0,sa:12.3,na:170,emoji:'🧀'},
{id:85,name:'Ricotta vaccina',cat:'Latticini',e:146,p:11.2,c:3.5,s:0,f:10.5,fi:0,sa:6.7,na:84,emoji:'🫙'},
{id:86,name:'Gorgonzola DOP',cat:'Latticini',e:330,p:20,c:0,s:0,f:28,fi:0,sa:17.8,na:900,emoji:'🧀'},
{id:87,name:'Stracchino',cat:'Latticini',e:233,p:14.7,c:2.4,s:2.4,f:18.5,fi:0,sa:12.2,na:300,emoji:'🧀'},
{id:88,name:'Feta DOP',cat:'Latticini',e:264,p:14.2,c:4.1,s:.5,f:21.3,fi:0,sa:14.9,na:1116,emoji:'🧀'},
{id:89,name:'Philadelphia classico',cat:'Latticini',brand:'Philadelphia',e:253,p:5.6,c:4.5,s:4,f:23.5,fi:0,sa:15.3,na:380,emoji:'🧀'},
{id:90,name:'Burro',cat:'Latticini',e:717,p:.9,c:.1,s:.1,f:81.1,fi:0,sa:51.4,na:643,emoji:'🧈'},
{id:91,name:'Uovo intero cotto',cat:'Latticini',e:155,p:12.6,c:1.1,s:1.1,f:10.6,fi:0,sa:3.1,na:124,emoji:'🥚'},
{id:92,name:'Albume',cat:'Latticini',e:52,p:10.9,c:.7,s:.7,f:.2,fi:0,sa:0,na:166,emoji:'🥚'},
{id:93,name:'Olio EVO',cat:'Condimenti',e:884,p:0,c:0,s:0,f:100,fi:0,sa:14.2,na:2,emoji:'🫒'},
{id:94,name:'Olio di semi',cat:'Condimenti',e:884,p:0,c:0,s:0,f:100,fi:0,sa:10.1,na:0,emoji:'🌻'},
{id:95,name:'Maionese',cat:'Condimenti',e:680,p:1.6,c:1.2,s:.9,f:74,fi:0,sa:11.4,na:620,emoji:'🫙'},
{id:96,name:'Ketchup Heinz',cat:'Condimenti',brand:'Heinz',e:112,p:1.4,c:27,s:22.8,f:.1,fi:.7,sa:0,na:920,emoji:'🍅'},
{id:97,name:'Pesto genovese',cat:'Condimenti',e:459,p:6,c:3.7,s:1.2,f:48,fi:1.4,sa:7,na:480,emoji:'🫙'},
{id:98,name:'Passata di pomodoro',cat:'Condimenti',brand:'Mutti',e:24,p:1.1,c:5.5,s:4.5,f:.2,fi:1,sa:0,na:16,emoji:'🍅'},
{id:99,name:'Salsa di soia',cat:'Condimenti',e:60,p:8.1,c:5.6,s:1.9,f:0,fi:.8,sa:0,na:5720,emoji:'🫙'},
{id:100,name:'Mandorle',cat:'Frutta Secca',e:579,p:21.2,c:21.6,s:4.4,f:49.9,fi:12.5,sa:3.8,na:1,emoji:'🌰'},
{id:101,name:'Noci',cat:'Frutta Secca',e:654,p:15.2,c:13.7,s:2.6,f:65.2,fi:6.7,sa:6.1,na:2,emoji:'🌰'},
{id:102,name:'Nocciole',cat:'Frutta Secca',e:628,p:15,c:16.7,s:4.3,f:60.8,fi:9.7,sa:4.5,na:0,emoji:'🌰'},
{id:103,name:'Pistacchi',cat:'Frutta Secca',e:562,p:20.3,c:27.6,s:7.7,f:45.4,fi:10.3,sa:5.6,na:1,emoji:'🌰'},
{id:104,name:'Anacardi',cat:'Frutta Secca',e:553,p:18.2,c:30.2,s:5.9,f:43.9,fi:3.3,sa:7.7,na:12,emoji:'🌰'},
{id:105,name:'Arachidi non salate',cat:'Frutta Secca',e:567,p:25.8,c:16.1,s:4.7,f:49.2,fi:8.5,sa:6.3,na:18,emoji:'🥜'},
{id:106,name:'Arachidi salate',cat:'Frutta Secca',e:598,p:27,c:17.5,s:4,f:52.5,fi:8,sa:7.3,na:440,emoji:'🥜'},
{id:107,name:'Olive verdi salamoia',cat:'Frutta Secca',e:115,p:.8,c:6.3,s:.5,f:10.7,fi:3.3,sa:1.4,na:1560,emoji:'🫒'},
{id:108,name:'Olive nere salamoia',cat:'Frutta Secca',e:115,p:.8,c:6.3,s:.5,f:10.7,fi:2.5,sa:1.5,na:1300,emoji:'🫒'},
{id:109,name:'Semi di chia',cat:'Frutta Secca',e:486,p:16.5,c:42.1,s:0,f:30.7,fi:34.4,sa:3.3,na:16,emoji:'🌱'},
{id:110,name:'Datteri secchi',cat:'Frutta Secca',e:277,p:1.8,c:75,s:66.5,f:.2,fi:6.7,sa:0,na:1,emoji:'🍬'},
{id:111,name:'Uvetta sultanina',cat:'Frutta Secca',e:299,p:3.1,c:79.2,s:59.2,f:.5,fi:3.7,sa:.2,na:11,emoji:'🍇'},
{id:112,name:'Castagne arrostite',cat:'Frutta Secca',e:245,p:3.2,c:53,s:10.6,f:2.2,fi:8.1,sa:.4,na:3,emoji:'🌰'},
{id:113,name:"Corn Flakes Kellogg's",cat:'Cereali Col.',brand:"Kellogg's",e:378,p:7.5,c:83.6,s:6.8,f:.9,fi:3.3,sa:.2,na:650,emoji:'🥣'},
{id:114,name:'Special K',cat:'Cereali Col.',brand:"Kellogg's",e:375,p:15.5,c:75.4,s:17,f:1.5,fi:3.5,sa:.3,na:640,emoji:'🥣'},
{id:115,name:'Muesli no zucchero',cat:'Cereali Col.',e:360,p:10,c:69,s:26,f:5.5,fi:7,sa:.9,na:70,emoji:'🥣'},
{id:116,name:'Cornetto vuoto bar',cat:'Dolci',e:355,p:8.2,c:46,s:9.5,f:16,fi:1.4,sa:7.5,na:290,emoji:'🥐'},
{id:117,name:'Cornetto crema',cat:'Dolci',e:385,p:7.5,c:50,s:14,f:17.5,fi:1.2,sa:8,na:310,emoji:'🥐'},
{id:118,name:'Crostatina Mulino Bianco',cat:'Dolci',brand:'Mulino Bianco',e:426,p:5.7,c:66,s:35,f:16,fi:2,sa:6.2,na:300,emoji:'🥐'},
{id:119,name:'Pan di Stelle',cat:'Dolci',brand:'Mulino Bianco',e:489,p:7,c:66.2,s:34,f:21.5,fi:2.5,sa:7.8,na:260,emoji:'🍪'},
{id:120,name:'Tiramisù',cat:'Dolci',e:281,p:6.5,c:23.6,s:15,f:17.3,fi:.3,sa:8.9,na:190,emoji:'🍰'},
{id:121,name:'Cannolo siciliano',cat:'Dolci',e:395,p:9,c:43,s:22,f:21,fi:1,sa:10.5,na:180,emoji:'🍥'},
{id:122,name:'Cioccolato fondente 70%',cat:'Cioccolato',e:598,p:7.8,c:46,s:25,f:43.1,fi:10.9,sa:24.5,na:20,emoji:'🍫'},
{id:123,name:'Cioccolato al latte Milka',cat:'Cioccolato',brand:'Milka',e:533,p:8,c:60,s:57,f:29.7,fi:1.2,sa:18.4,na:130,emoji:'🍫'},
{id:124,name:'Nutella',cat:'Cioccolato',brand:'Ferrero',e:530,p:6.3,c:57.5,s:56.3,f:30.9,fi:3.4,sa:10.6,na:40,emoji:'🫙'},
{id:125,name:'Kinder Bueno',cat:'Cioccolato',brand:'Ferrero',e:558,p:8.8,c:52.4,s:40,f:34.8,fi:1.7,sa:18.3,na:115,emoji:'🍫'},
{id:126,name:'Snickers',cat:'Cioccolato',brand:'Mars',e:488,p:8.5,c:59.5,s:47,f:24.5,fi:1.5,sa:9.5,na:215,emoji:'🍫'},
{id:127,name:"Patatine Lay's",cat:'Snack',brand:"Lay's",e:536,p:6.6,c:53,s:.5,f:33,fi:4.8,sa:4,na:540,emoji:'🍟'},
{id:128,name:'Patatine Pringles',cat:'Snack',brand:'Pringles',e:536,p:5.1,c:52,s:1.5,f:34.7,fi:2.6,sa:1.5,na:580,emoji:'🍟'},
{id:129,name:'Popcorn burro',cat:'Snack',e:375,p:9,c:74,s:.5,f:5,fi:14.5,sa:2.2,na:800,emoji:'🍿'},
{id:130,name:'Fonzies',cat:'Snack',brand:'Fonzies',e:515,p:8.5,c:58.5,s:2.5,f:27.5,fi:2.5,sa:4.5,na:820,emoji:'🌽'},
{id:131,name:'Acqua naturale',cat:'Bevande',e:0,p:0,c:0,s:0,f:0,fi:0,sa:0,na:10,emoji:'💧'},
{id:132,name:'Caffè espresso',cat:'Bevande',e:2,p:.1,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:133,name:'Cappuccino latte intero',cat:'Bevande',e:74,p:4,c:6.7,s:6.5,f:3,fi:0,sa:1.9,na:55,emoji:'☕'},
{id:134,name:'Coca-Cola',cat:'Bevande',brand:'Coca-Cola',e:42,p:0,c:10.6,s:10.6,f:0,fi:0,sa:0,na:10,emoji:'🥤'},
{id:135,name:'Coca-Cola Zero',cat:'Bevande',brand:'Coca-Cola',e:1,p:0,c:.1,s:0,f:0,fi:0,sa:0,na:12,emoji:'🥤'},
{id:136,name:'Fanta arancia',cat:'Bevande',brand:'Fanta',e:46,p:0,c:11.5,s:11.5,f:0,fi:0,sa:0,na:18,emoji:'🥤'},
{id:137,name:'Succo arancia 100%',cat:'Bevande',e:45,p:.7,c:10.4,s:8.4,f:.2,fi:.2,sa:0,na:1,emoji:'🍊'},
{id:138,name:'Vino rosso',cat:'Bevande',e:85,p:.1,c:2.6,s:.6,f:0,fi:0,sa:0,na:6,emoji:'🍷'},
{id:139,name:'Birra lager 5%',cat:'Bevande',e:43,p:.5,c:3.6,s:0,f:0,fi:0,sa:0,na:10,emoji:'🍺'},
{id:140,name:'Zucchero bianco',cat:'Zuccheri',e:392,p:0,c:99.8,s:99.8,f:0,fi:0,sa:0,na:0,emoji:'🫙'},
{id:141,name:'Miele millefiori',cat:'Zuccheri',e:304,p:.3,c:80,s:75,f:0,fi:0,sa:0,na:5,emoji:'🍯'},
{id:142,name:'Cornetto Algida classico',cat:'Gelati',brand:'Algida',e:261,p:3.9,c:32.3,s:24.8,f:13,fi:.5,sa:7.9,na:78,emoji:'🍦'},
{id:143,name:'Magnum Classic',cat:'Gelati',brand:'Algida',e:269,p:3,c:24.7,s:22.3,f:17.5,fi:.5,sa:12,na:58,emoji:'🍫'},
{id:144,name:'Gelato crema artigianale',cat:'Gelati',e:207,p:4.5,c:24,s:21,f:11,fi:0,sa:5,na:80,emoji:'🍨'},
{id:145,name:"Big Mac McDonald's",cat:'Fast Food',brand:"McDonald's",e:257,p:14,c:24,s:5.6,f:11.5,fi:1.3,sa:4.6,na:440,emoji:'🍔'},
{id:146,name:"McNuggets 6pz McDonald's",cat:'Fast Food',brand:"McDonald's",e:269,p:15.8,c:16.5,s:0,f:16,fi:1,sa:3.2,na:490,emoji:'🍗'},
{id:147,name:"Patatine M McDonald's",cat:'Fast Food',brand:"McDonald's",e:323,p:3.8,c:42,s:.5,f:15.4,fi:3.2,sa:2.3,na:350,emoji:'🍟'},
{id:148,name:'Whopper Burger King',cat:'Fast Food',brand:'Burger King',e:266,p:14,c:26,s:7,f:12.5,fi:2,sa:4.5,na:640,emoji:'🍔'},
{id:149,name:'Zinger Burger KFC',cat:'Fast Food',brand:'KFC',e:543,p:29,c:52,s:8,f:23,fi:3,sa:4.5,na:1110,emoji:'🌶️'},
{id:150,name:'Pizza Margherita artigianale',cat:'Fast Food',e:237,p:8.4,c:33,s:3,f:8,fi:2,sa:3.2,na:530,emoji:'🍕'},
{id:151,name:'Pizza Diavola artigianale',cat:'Fast Food',e:265,p:10.5,c:32,s:3.5,f:10.5,fi:2,sa:4.5,na:720,emoji:'🍕'},
{id:152,name:'Kebab con pane',cat:'Fast Food',e:265,p:15,c:28,s:2,f:9.5,fi:1.5,sa:2.8,na:620,emoji:'🌯'},
{id:153,name:'Piadina prosciutto',cat:'Fast Food',e:290,p:16,c:32,s:2.5,f:10,fi:1.5,sa:4,na:900,emoji:'🫓'},
{id:154,name:'Toast prosciutto-formaggio',cat:'Fast Food',e:310,p:17,c:32,s:3.5,f:12.5,fi:2,sa:6,na:820,emoji:'🥪'},
{id:155,name:'Saikebon Pollo Nissin',cat:'Confezionati',brand:'Nissin',e:421,p:10.5,c:61,s:2.5,f:14.5,fi:2,sa:4,na:1480,emoji:'🍜'},
{id:156,name:'Saikebon Manzo Nissin',cat:'Confezionati',brand:'Nissin',e:425,p:10,c:62,s:2.5,f:15,fi:2,sa:5,na:1530,emoji:'🍜'},
{id:157,name:'Cup Noodles Nissin',cat:'Confezionati',brand:'Nissin',e:450,p:9,c:58,s:1.5,f:20,fi:2,sa:9,na:1560,emoji:'🍜'},
{id:158,name:'Sugo Barilla Bolognese',cat:'Confezionati',brand:'Barilla',e:85,p:5.5,c:7.5,s:5,f:3.5,fi:1.5,sa:1,na:420,emoji:'🍝'},
{id:159,name:'Pesto Barilla',cat:'Confezionati',brand:'Barilla',e:434,p:5.5,c:4.5,s:2,f:44,fi:2,sa:6.5,na:510,emoji:'🫙'},
{id:160,name:'BelVita colazione',cat:'Confezionati',brand:'BelVita',e:428,p:8,c:70,s:21,f:12.5,fi:3.5,sa:1.5,na:340,emoji:'🍘'},
{id:161,name:'Risotto zafferano',cat:'Piatti IT.',e:156,p:4.5,c:25,s:.5,f:4.2,fi:.5,sa:1.5,na:300,emoji:'🍲'},
{id:162,name:'Lasagne al ragù',cat:'Piatti IT.',e:185,p:10.5,c:17,s:2.5,f:8.5,fi:1.5,sa:3.2,na:440,emoji:'🍲'},
{id:163,name:'Pasta Carbonara',cat:'Piatti IT.',e:290,p:14,c:29,s:.5,f:13,fi:1,sa:4.5,na:500,emoji:'🍝'},
{id:164,name:'Pasta Amatriciana',cat:'Piatti IT.',e:270,p:11,c:30,s:2,f:11.5,fi:1.5,sa:3.8,na:680,emoji:'🍝'},
{id:165,name:'Pasta al pesto',cat:'Piatti IT.',e:260,p:9,c:31,s:1,f:12,fi:2,sa:3.5,na:350,emoji:'🍝'},
{id:166,name:'Minestrone',cat:'Piatti IT.',e:58,p:2.5,c:9.5,s:3,f:1.5,fi:2.8,sa:.3,na:280,emoji:'🍲'},
{id:167,name:'Focaccia genovese',cat:'Piatti IT.',e:316,p:7.5,c:51,s:1.5,f:9,fi:2,sa:1.3,na:640,emoji:'🫓'},
{id:168,name:'Parmigiana melanzane',cat:'Piatti IT.',e:145,p:7.5,c:10,s:5,f:8.5,fi:2.5,sa:3.5,na:480,emoji:'🍆'},
{id:169,name:'Cotoletta milanese',cat:'Piatti IT.',e:285,p:21,c:15,s:1,f:15.5,fi:.8,sa:4.5,na:380,emoji:'🍖'},
{id:170,name:'Pasta e fagioli',cat:'Piatti IT.',e:185,p:9.5,c:28,s:1.5,f:4.5,fi:5,sa:.8,na:350,emoji:'🍝'},
{id:171,name:'Pizza Margherita surgelata',cat:'Surgelati',brand:'Findus',e:230,p:9,c:32,s:3.5,f:7.5,fi:2.5,sa:3.5,na:580,emoji:'🍕'},
{id:172,name:'Bastoncini pesce Findus',cat:'Surgelati',brand:'Findus',e:220,p:11.5,c:19,s:.5,f:10.5,fi:1,sa:1.5,na:400,emoji:'🐟'},
{id:173,name:'Sofficini formaggio Findus',cat:'Surgelati',brand:'Findus',e:245,p:9,c:26,s:2,f:11.5,fi:1.5,sa:4.5,na:520,emoji:'🧀'},
{id:174,name:'Nuggets pollo surgelati',cat:'Surgelati',e:250,p:15,c:18,s:.5,f:13,fi:1,sa:3,na:540,emoji:'🍗'},
{id:175,name:'Patatine surgelate McCain',cat:'Surgelati',brand:'McCain',e:175,p:2.5,c:26.5,s:.5,f:6.5,fi:2.5,sa:1,na:25,emoji:'🍟'},
{id:176,name:'Verdure miste surgelate',cat:'Surgelati',e:35,p:2.5,c:5.5,s:3,f:.3,fi:2.5,sa:0,na:30,emoji:'🥦'},
{id:177,name:'Lasagne surgelate',cat:'Surgelati',e:175,p:9.5,c:16,s:2.5,f:8,fi:1.5,sa:3.5,na:430,emoji:'🍲'},
{id:178,name:'Sushi nigiri salmone 1pz',cat:'Etnica',e:40,p:2.5,c:5.5,s:.5,f:.8,fi:.2,sa:.2,na:120,emoji:'🍣'},
{id:179,name:'California roll 1pz',cat:'Etnica',e:38,p:1.5,c:5.5,s:1,f:1,fi:.4,sa:.2,na:130,emoji:'🍣'},
{id:180,name:'Ramen con brodo',cat:'Etnica',e:430,p:18.5,c:55,s:3.5,f:14,fi:2.5,sa:4,na:2100,emoji:'🍜'},
{id:181,name:'Curry pollo e riso',cat:'Etnica',e:320,p:22,c:35,s:5,f:9.5,fi:2.5,sa:3.5,na:720,emoji:'🍛'},
{id:182,name:'Gyoza 1 pezzo',cat:'Etnica',e:55,p:3,c:6.5,s:.5,f:2,fi:.5,sa:.5,na:140,emoji:'🥟'},
{id:183,name:'Protein bar 60g',cat:'Sport',e:230,p:20,c:20,s:7,f:8,fi:3,sa:3,na:240,emoji:'💪'},
{id:184,name:'Whey Protein 30g',cat:'Sport',e:120,p:24,c:3.5,s:2,f:1.5,fi:.5,sa:.7,na:80,emoji:'🥛'},
{id:185,name:'Gatorade 500ml',cat:'Sport',brand:'Gatorade',e:26,p:0,c:6.3,s:5.8,f:0,fi:0,sa:0,na:110,emoji:'🥤'},

/* ══ BEVANDE aggiuntive ══ */
{id:200,name:'Caffè espresso senza zucchero',cat:'Bevande',e:2,p:.1,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:201,name:'Caffè con 1 zucchero',cat:'Bevande',e:22,p:.1,c:5.3,s:5.3,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:202,name:'Caffè con dolcificante stevia',cat:'Bevande',e:3,p:.1,c:.1,s:0,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:203,name:'Caffè con dolcificante aspartame',cat:'Bevande',e:3,p:.1,c:.1,s:0,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:204,name:'Caffè con dolcificante sucralosio',cat:'Bevande',e:2,p:.1,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:205,name:'Cappuccino latte scremato no zucch.',cat:'Bevande',e:38,p:3.5,c:5,s:5,f:.2,fi:0,sa:.1,na:48,emoji:'☕'},
{id:206,name:'Cappuccino con zucchero',cat:'Bevande',e:94,p:4,c:12.7,s:12.5,f:3,fi:0,sa:1.9,na:55,emoji:'☕'},
{id:207,name:'Caffè macchiato caldo',cat:'Bevande',e:15,p:.6,c:1.2,s:1.2,f:.6,fi:0,sa:.4,na:12,emoji:'☕'},
{id:208,name:'Caffè americano lungo',cat:'Bevande',e:5,p:.3,c:.4,s:0,f:.1,fi:0,sa:0,na:4,emoji:'☕'},
{id:209,name:'Caffè marocchino',cat:'Bevande',e:68,p:2.5,c:8.5,s:8,f:2.8,fi:.3,sa:1.5,na:30,emoji:'☕'},
{id:210,name:'Caffè shakerato no zucch.',cat:'Bevande',e:10,p:.2,c:1.5,s:0,f:0,fi:0,sa:0,na:2,emoji:'☕'},
{id:211,name:'Caffè latte bar',cat:'Bevande',e:55,p:3.2,c:5.2,s:5.2,f:2,fi:0,sa:1.2,na:50,emoji:'☕'},
{id:212,name:'Latte macchiato caldo',cat:'Bevande',e:61,p:3.2,c:4.8,s:4.8,f:3.2,fi:0,sa:2,na:43,emoji:'☕'},
{id:213,name:'Latte macchiato freddo',cat:'Bevande',e:55,p:3,c:4.5,s:4.5,f:2.5,fi:0,sa:1.6,na:40,emoji:'☕'},
{id:214,name:'Tè verde senza zucchero',cat:'Bevande',e:1,p:0,c:.2,s:0,f:0,fi:0,sa:0,na:1,emoji:'🍵'},
{id:215,name:'Tè nero senza zucchero',cat:'Bevande',e:2,p:0,c:.3,s:0,f:0,fi:0,sa:0,na:1,emoji:'🍵'},
{id:216,name:'Tè verde con dolcificante',cat:'Bevande',e:2,p:0,c:.2,s:0,f:0,fi:0,sa:0,na:1,emoji:'🍵'},
{id:217,name:'Tè freddo pesca bottiglia',cat:'Bevande',brand:'Nestea',e:25,p:0,c:6.3,s:6,f:0,fi:0,sa:0,na:10,emoji:'🍵'},
{id:218,name:'Camomilla',cat:'Bevande',e:1,p:0,c:.2,s:0,f:0,fi:0,sa:0,na:1,emoji:'🌼'},
{id:219,name:'Succo mela 100%',cat:'Bevande',e:46,p:.2,c:11.4,s:10.4,f:.1,fi:.2,sa:0,na:4,emoji:'🍎'},
{id:220,name:'Succo pesca 100%',cat:'Bevande',e:48,p:.5,c:11.8,s:10.5,f:.1,fi:.5,sa:0,na:5,emoji:'🍑'},
{id:221,name:'Red Bull classico',cat:'Bevande',brand:'Red Bull',e:45,p:0,c:11.3,s:11,f:0,fi:0,sa:0,na:40,emoji:'🥤'},
{id:222,name:'Red Bull Sugarfree',cat:'Bevande',brand:'Red Bull',e:6,p:0,c:1.2,s:0,f:0,fi:0,sa:0,na:30,emoji:'🥤'},
{id:223,name:'Monster Energy',cat:'Bevande',brand:'Monster',e:46,p:0,c:11.4,s:11,f:0,fi:0,sa:0,na:180,emoji:'🥤'},
{id:224,name:'Sprite',cat:'Bevande',brand:'Sprite',e:40,p:0,c:10,s:10,f:0,fi:0,sa:0,na:12,emoji:'🥤'},
{id:225,name:'Pepsi classica',cat:'Bevande',brand:'Pepsi',e:42,p:0,c:10.6,s:10.6,f:0,fi:0,sa:0,na:11,emoji:'🥤'},
{id:226,name:'Acqua tonica',cat:'Bevande',e:34,p:0,c:8.4,s:8.4,f:0,fi:0,sa:0,na:30,emoji:'🥤'},
{id:227,name:'Birra IPA artigianale',cat:'Bevande',e:55,p:.5,c:4.8,s:0,f:0,fi:0,sa:0,na:10,emoji:'🍺'},
{id:228,name:'Birra senza alcol',cat:'Bevande',e:22,p:.6,c:4.5,s:0,f:0,fi:0,sa:0,na:8,emoji:'🍺'},
{id:229,name:'Vino bianco secco',cat:'Bevande',e:82,p:.1,c:2.1,s:.3,f:0,fi:0,sa:0,na:5,emoji:'🍾'},
{id:230,name:'Prosecco DOC',cat:'Bevande',e:72,p:.1,c:1.4,s:.7,f:0,fi:0,sa:0,na:4,emoji:'🥂'},
{id:231,name:'Aperol Spritz',cat:'Bevande',e:125,p:0,c:11,s:10.5,f:0,fi:0,sa:0,na:15,emoji:'🥂'},
{id:232,name:'Mojito classico',cat:'Bevande',e:168,p:0,c:22,s:20.5,f:0,fi:.2,sa:0,na:12,emoji:'🍹'},
{id:233,name:'Latte di avena Oatly',cat:'Bevande',brand:'Oatly',e:46,p:1,c:6.6,s:4,f:1.5,fi:.8,sa:.2,na:62,emoji:'🥛'},
{id:234,name:'Latte di soia',cat:'Bevande',e:33,p:3.3,c:1.8,s:1.2,f:1.8,fi:.6,sa:.3,na:43,emoji:'🥛'},
{id:235,name:'Latte di mandorla',cat:'Bevande',e:13,p:.5,c:.5,s:0,f:1.1,fi:.4,sa:.1,na:45,emoji:'🥛'},
{id:236,name:'Protein shake acqua',cat:'Bevande',e:120,p:24,c:3.5,s:2.5,f:1.5,fi:.5,sa:.5,na:150,emoji:'🥛'},
{id:237,name:'Smoothie banana latte',cat:'Bevande',e:85,p:3.5,c:15,s:11.5,f:1.5,fi:1,sa:.9,na:45,emoji:'🍌'},
{id:238,name:'Yakult',cat:'Bevande',brand:'Yakult',e:72,p:1.2,c:15.5,s:14,f:.1,fi:0,sa:0,na:20,emoji:'🥛'},
{id:239,name:'Kombucha naturale',cat:'Bevande',e:18,p:.2,c:4,s:3.5,f:0,fi:0,sa:0,na:10,emoji:'🍵'},
{id:240,name:'Succo di pomodoro',cat:'Bevande',e:17,p:.8,c:3.5,s:2.8,f:.1,fi:.5,sa:0,na:390,emoji:'🍅'},
{id:241,name:'Cioccolata calda bar',cat:'Bevande',e:145,p:4.5,c:20.5,s:19,f:5.5,fi:1.5,sa:3.2,na:85,emoji:'🍫'},

/* ══ VERDURE aggiuntive ══ */
{id:250,name:'Rucola',cat:'Verdure',e:25,p:2.6,c:3.7,s:2,f:.7,fi:1.6,sa:.1,na:27,emoji:'🥬'},
{id:251,name:'Barbabietola rossa',cat:'Verdure',e:43,p:1.6,c:9.6,s:6.8,f:.2,fi:2.8,sa:0,na:78,emoji:'🟣'},
{id:252,name:'Cavolo nero kale',cat:'Verdure',e:35,p:2.9,c:4.4,s:.9,f:.7,fi:4.1,sa:.1,na:38,emoji:'🥬'},
{id:253,name:'Carciofi',cat:'Verdure',e:47,p:3.3,c:10.5,s:.9,f:.2,fi:5.4,sa:0,na:94,emoji:'🌿'},
{id:254,name:'Ravanelli',cat:'Verdure',e:16,p:.7,c:3.4,s:1.9,f:.1,fi:1.6,sa:0,na:39,emoji:'🌶️'},
{id:255,name:'Cicoria',cat:'Verdure',e:23,p:1.7,c:4,s:.5,f:.3,fi:1.5,sa:0,na:45,emoji:'🥬'},
{id:256,name:'Puntarelle',cat:'Verdure',e:23,p:1.8,c:3.5,s:1,f:.2,fi:2.5,sa:0,na:10,emoji:'🥬'},
{id:257,name:'Cime di rapa',cat:'Verdure',e:22,p:2.3,c:2.5,s:1,f:.4,fi:2.8,sa:.1,na:18,emoji:'🥦'},
{id:258,name:'Zucca gialla',cat:'Verdure',e:26,p:1,c:6.5,s:2.8,f:.1,fi:.5,sa:0,na:1,emoji:'🎃'},
{id:259,name:'Topinambur',cat:'Verdure',e:73,p:2,c:17.4,s:9.6,f:0,fi:1.6,sa:0,na:4,emoji:'🥔'},
{id:260,name:'Broccoletti',cat:'Verdure',e:28,p:3,c:3,s:1.5,f:.4,fi:2.8,sa:.1,na:20,emoji:'🥦'},
{id:261,name:'Porri',cat:'Verdure',e:61,p:1.5,c:14.1,s:3.9,f:.3,fi:1.8,sa:0,na:10,emoji:'🧅'},
{id:262,name:'Peperoncino fresco',cat:'Verdure',e:40,p:1.9,c:8.8,s:5.1,f:.4,fi:1.5,sa:0,na:9,emoji:'🌶️'},

/* ══ FRUTTA aggiuntiva ══ */
{id:270,name:'Melagrana',cat:'Frutta',e:83,p:1.7,c:18.7,s:13.7,f:1.2,fi:4,sa:.2,na:3,emoji:'🍎'},
{id:271,name:'Albicocche',cat:'Frutta',e:48,p:1.4,c:11.1,s:9.2,f:.4,fi:2,sa:0,na:1,emoji:'🍑'},
{id:272,name:'Ciliegie',cat:'Frutta',e:63,p:1.1,c:16,s:12.8,f:.2,fi:2.1,sa:0,na:0,emoji:'🍒'},
{id:273,name:'Fichi freschi',cat:'Frutta',e:74,p:.8,c:19.2,s:16.3,f:.3,fi:2.9,sa:0,na:1,emoji:'🟣'},
{id:274,name:'Pompelmo',cat:'Frutta',e:42,p:.8,c:10.7,s:6.9,f:.1,fi:1.6,sa:0,na:0,emoji:'🍊'},
{id:275,name:'Clementine',cat:'Frutta',e:47,p:.9,c:11.8,s:9.4,f:.1,fi:1.7,sa:0,na:2,emoji:'🍊'},
{id:276,name:'More',cat:'Frutta',e:43,p:1.4,c:9.6,s:4.9,f:.5,fi:5.3,sa:0,na:1,emoji:'🍇'},
{id:277,name:'Melone bianco',cat:'Frutta',e:34,p:.8,c:8.2,s:7.9,f:.2,fi:.9,sa:0,na:16,emoji:'🍈'},
{id:278,name:'Papaya',cat:'Frutta',e:43,p:.5,c:10.8,s:7.8,f:.3,fi:1.7,sa:.1,na:8,emoji:'🟡'},
{id:279,name:'Cocco fresco',cat:'Frutta',e:354,p:3.3,c:15.2,s:6.2,f:33.5,fi:9,sa:29.7,na:20,emoji:'🥥'},
{id:280,name:'Castagne bollite',cat:'Frutta',e:131,p:2,c:27.8,s:1.5,f:1.5,fi:5.1,sa:.3,na:3,emoji:'🌰'},
{id:281,name:'Nespole',cat:'Frutta',e:47,p:.4,c:12.1,s:6.6,f:.2,fi:1.7,sa:0,na:1,emoji:'🟡'},
{id:282,name:'Susine',cat:'Frutta',e:46,p:.7,c:11.4,s:9.9,f:.3,fi:1.4,sa:0,na:0,emoji:'🟣'},

/* ══ CEREALI aggiuntivi ══ */
{id:290,name:'Riso basmati cotto',cat:'Cereali',e:121,p:3.5,c:25.2,s:0,f:.4,fi:.6,sa:.1,na:2,emoji:'🍚'},
{id:291,name:'Riso venere cotto',cat:'Cereali',e:130,p:2.8,c:26.5,s:.3,f:1.1,fi:2.2,sa:.2,na:1,emoji:'🍚'},
{id:292,name:'Orzo perlato cotto',cat:'Cereali',e:123,p:2.3,c:28.2,s:.3,f:.4,fi:1.7,sa:.1,na:3,emoji:'🌾'},
{id:293,name:'Couscous cotto',cat:'Cereali',e:112,p:3.8,c:23.2,s:.1,f:.2,fi:1.4,sa:0,na:5,emoji:'🌾'},
{id:294,name:'Polenta cotta',cat:'Cereali',e:71,p:1.7,c:14.8,s:.1,f:.3,fi:1,sa:.1,na:1,emoji:'🌽'},
{id:295,name:'Gnocchi di patate',cat:'Cereali',e:131,p:3.6,c:27.5,s:.8,f:1,fi:1.6,sa:.2,na:310,emoji:'🥟'},
{id:296,name:'Pane di segale',cat:'Cereali',e:259,p:8.5,c:48.3,s:3.2,f:3.3,fi:6.2,sa:.5,na:600,emoji:'🍞'},
{id:297,name:'Pane pita',cat:'Cereali',e:275,p:9.1,c:55.7,s:.9,f:1.2,fi:2.2,sa:.2,na:536,emoji:'🫓'},
{id:298,name:'Grissini',cat:'Cereali',e:430,p:10.8,c:78.5,s:2,f:8.5,fi:2.7,sa:1.5,na:620,emoji:'🥖'},
{id:299,name:'Crackers integrali',cat:'Cereali',e:395,p:10.5,c:65,s:2.5,f:9.5,fi:6.5,sa:1.8,na:540,emoji:'🍘'},
{id:300,name:'Pasta fresca all uovo cotta',cat:'Cereali',e:155,p:5.8,c:27.5,s:.5,f:2.9,fi:1.5,sa:.8,na:8,emoji:'🍝'},
{id:301,name:'Tortellini freschi cotti',cat:'Cereali',e:227,p:11,c:31,s:1.5,f:6.5,fi:1.5,sa:2.5,na:580,emoji:'🍝'},
{id:302,name:'Lasagne secche crude',cat:'Cereali',e:353,p:12.5,c:70,s:2,f:1.5,fi:2.8,sa:.3,na:5,emoji:'🍝'},
{id:303,name:'Semola di grano duro',cat:'Cereali',e:360,p:12,c:72,s:0,f:1.5,fi:3.5,sa:.2,na:1,emoji:'🌾'},

/* ══ LEGUMI aggiuntivi ══ */
{id:310,name:'Edamame cotti',cat:'Legumi',e:121,p:11.9,c:8.9,s:2.2,f:5.2,fi:5.2,sa:.7,na:6,emoji:'🫛'},
{id:311,name:'Fagioli neri cotti',cat:'Legumi',e:132,p:8.9,c:23.7,s:.3,f:.5,fi:8.7,sa:.1,na:1,emoji:'🫘'},
{id:312,name:'Fave cotte',cat:'Legumi',e:110,p:7.6,c:19.7,s:0,f:.4,fi:5.4,sa:.1,na:5,emoji:'🫘'},
{id:313,name:'Soia cotta',cat:'Legumi',e:173,p:16.6,c:9.9,s:3,f:9,fi:6,sa:1.3,na:1,emoji:'🫘'},
{id:314,name:'Lupini sgusciati',cat:'Legumi',e:114,p:15.6,c:5.2,s:1.8,f:3,fi:7,sa:.5,na:55,emoji:'🫘'},
{id:315,name:'Miso pasta',cat:'Legumi',e:199,p:11.7,c:26.5,s:6.2,f:6,fi:5.4,sa:.9,na:3728,emoji:'🫙'},
{id:316,name:'Tempeh',cat:'Legumi',e:193,p:19.9,c:9.4,s:0,f:10.8,fi:0,sa:2.2,na:9,emoji:'🫘'},
{id:317,name:'Piselli in scatola',cat:'Legumi',e:77,p:5.1,c:13.6,s:5.5,f:.4,fi:4.1,sa:.1,na:310,emoji:'🫛'},

/* ══ CARNE aggiuntiva ══ */
{id:320,name:'Agnello coscia',cat:'Carne',e:217,p:25.8,c:0,s:0,f:12.3,fi:0,sa:5.3,na:72,emoji:'🥩'},
{id:321,name:'Maiale costine BBQ',cat:'Carne',e:295,p:22.5,c:8.5,s:7,f:19.5,fi:.5,sa:7,na:620,emoji:'🥩'},
{id:322,name:'Manzo arrosto',cat:'Carne',e:218,p:27,c:0,s:0,f:12,fi:0,sa:4.5,na:65,emoji:'🥩'},
{id:323,name:'Manzo brasato',cat:'Carne',e:205,p:25,c:3,s:.5,f:9.5,fi:0,sa:3.5,na:350,emoji:'🥩'},
{id:324,name:'Ossobuco di vitello',cat:'Carne',e:175,p:23,c:2,s:0,f:7.5,fi:0,sa:2.5,na:85,emoji:'🥩'},
{id:325,name:'Scaloppina al limone',cat:'Carne',e:185,p:22,c:3.5,s:.5,f:8.5,fi:0,sa:2.5,na:120,emoji:'🥩'},
{id:326,name:'Saltimbocca alla romana',cat:'Carne',e:210,p:24,c:2,s:0,f:11,fi:0,sa:3.5,na:580,emoji:'🥩'},
{id:327,name:'Fegato di manzo',cat:'Carne',e:175,p:26.4,c:4,s:0,f:5.3,fi:0,sa:1.9,na:72,emoji:'🥩'},
{id:328,name:'Coniglio arrosto',cat:'Carne',e:197,p:29.1,c:0,s:0,f:8.8,fi:0,sa:2.6,na:47,emoji:'🥩'},
{id:329,name:'Anatra arrostita',cat:'Carne',e:337,p:19,c:0,s:0,f:28.4,fi:0,sa:9.7,na:74,emoji:'🍗'},
{id:330,name:'Pollo arrosto intero',cat:'Carne',e:239,p:27.3,c:0,s:0,f:13.6,fi:0,sa:3.7,na:77,emoji:'🍗'},
{id:331,name:'Pollo alla cacciatora',cat:'Carne',e:195,p:24,c:5,s:3,f:8,fi:1,sa:2,na:380,emoji:'🍗'},
{id:332,name:'Tacchino ripieno',cat:'Carne',e:218,p:25,c:5,s:1,f:10,fi:.5,sa:3,na:380,emoji:'🦃'},
{id:333,name:'Maiale al forno con patate',cat:'Carne',e:248,p:18,c:14,s:1,f:13,fi:1.5,sa:4.5,na:420,emoji:'🥩'},
{id:334,name:'Pulled pork',cat:'Carne',e:245,p:24.5,c:8.5,s:7,f:12.5,fi:.5,sa:4.5,na:580,emoji:'🥩'},
{id:335,name:'Wurstel di pollo',cat:'Carne',e:185,p:13,c:4,s:2,f:13,fi:0,sa:4,na:900,emoji:'🌭'},
{id:336,name:'Hamburger bovino 150g cotto',cat:'Carne',e:287,p:28,c:0,s:0,f:19,fi:0,sa:7.5,na:85,emoji:'🥩'},
{id:337,name:'Straccetti di manzo',cat:'Carne',e:165,p:25,c:2,s:0,f:6,fi:0,sa:2,na:90,emoji:'🥩'},
{id:338,name:'Carpaccio di manzo',cat:'Carne',e:155,p:22.5,c:0,s:0,f:7.5,fi:0,sa:2.8,na:420,emoji:'🥩'},

/* ══ SALUMI aggiuntivi ══ */
{id:345,name:'Speck Alto Adige IGP',cat:'Salumi',e:267,p:30,c:0,s:0,f:16.5,fi:0,sa:5.8,na:2400,emoji:'🥓'},
{id:346,name:'Pancetta tesa',cat:'Salumi',e:456,p:12.8,c:0,s:0,f:46.5,fi:0,sa:17.5,na:1400,emoji:'🥓'},
{id:347,name:'Coppa di testa',cat:'Salumi',e:298,p:15.5,c:0,s:0,f:26.3,fi:0,sa:9.5,na:1000,emoji:'🥓'},
{id:348,name:'Lardo di Colonnata',cat:'Salumi',e:669,p:2,c:0,s:0,f:74,fi:0,sa:27.5,na:800,emoji:'🥓'},
{id:349,name:'Soppressa veneta',cat:'Salumi',e:380,p:22,c:1,s:0,f:32,fi:0,sa:12,na:1900,emoji:'🥓'},
{id:350,name:"N'duja calabrese",cat:'Salumi',e:430,p:16,c:2,s:0,f:40,fi:0,sa:14,na:2100,emoji:'🌶️'},
{id:351,name:'Culatello di Zibello DOP',cat:'Salumi',e:201,p:29,c:0,s:0,f:9.5,fi:0,sa:3.5,na:2300,emoji:'🥓'},
{id:352,name:'Capocollo',cat:'Salumi',e:320,p:22,c:0,s:0,f:26,fi:0,sa:9.5,na:1800,emoji:'🥓'},

/* ══ PESCE aggiuntivo ══ */
{id:360,name:'Salmone affumicato',cat:'Pesce',e:172,p:20,c:.5,s:0,f:9.5,fi:0,sa:2.2,na:2280,emoji:'🐟'},
{id:361,name:'Sarde in scatola olio',cat:'Pesce',e:208,p:24.6,c:0,s:0,f:11.5,fi:0,sa:2.7,na:505,emoji:'🐟'},
{id:362,name:'Orata al forno',cat:'Pesce',e:121,p:22.9,c:0,s:0,f:3.2,fi:0,sa:.8,na:75,emoji:'🐟'},
{id:363,name:'Sgombro al forno',cat:'Pesce',e:262,p:23.8,c:0,s:0,f:17.8,fi:0,sa:4.2,na:90,emoji:'🐟'},
{id:364,name:'Trota salmonata',cat:'Pesce',e:168,p:22,c:0,s:0,f:8.5,fi:0,sa:2,na:55,emoji:'🐟'},
{id:365,name:'Acciughe sott olio',cat:'Pesce',e:210,p:28.9,c:0,s:0,f:10.5,fi:0,sa:2.5,na:3660,emoji:'🐟'},
{id:366,name:'Vongole cotte',cat:'Pesce',e:148,p:25.6,c:5.1,s:0,f:2,fi:0,sa:.4,na:112,emoji:'🦪'},
{id:367,name:'Capesante cotte',cat:'Pesce',e:111,p:20.5,c:4.5,s:0,f:1.5,fi:0,sa:.3,na:310,emoji:'🦪'},
{id:368,name:'Aragosta cotta',cat:'Pesce',e:98,p:20,c:.5,s:0,f:1.2,fi:0,sa:.2,na:360,emoji:'🦞'},
{id:369,name:'Astice cotto',cat:'Pesce',e:98,p:19,c:.5,s:0,f:1.5,fi:0,sa:.3,na:380,emoji:'🦞'},
{id:370,name:'Alici fresche crude',cat:'Pesce',e:131,p:20,c:0,s:0,f:5.5,fi:0,sa:1.4,na:90,emoji:'🐟'},
{id:371,name:'Anguilla cotta',cat:'Pesce',e:326,p:18.4,c:0,s:0,f:28,fi:0,sa:5.6,na:70,emoji:'🐍'},
{id:372,name:'Baccalà ammollato',cat:'Pesce',e:85,p:19,c:0,s:0,f:.5,fi:0,sa:.2,na:200,emoji:'🐟'},
{id:373,name:'Stoccafisso cotto',cat:'Pesce',e:105,p:23,c:0,s:0,f:.8,fi:0,sa:.2,na:220,emoji:'🐟'},
{id:374,name:'Bottarga di tonno',cat:'Pesce',e:285,p:36.5,c:.5,s:0,f:15.5,fi:0,sa:4.5,na:1200,emoji:'🐟'},
{id:375,name:'Sushi nigiri tonno 1pz',cat:'Etnica',e:36,p:3.5,c:5,s:.2,f:.3,fi:.1,sa:.1,na:120,emoji:'🍣'},
{id:376,name:'Sushi maki roll 1pz',cat:'Etnica',e:36,p:1.5,c:5.5,s:.5,f:1,fi:.3,sa:.2,na:130,emoji:'🍣'},
{id:377,name:'Temaki salmone',cat:'Etnica',e:185,p:10.5,c:22,s:1,f:5.5,fi:1.5,sa:1.2,na:390,emoji:'🍣'},

/* ══ LATTICINI aggiuntivi ══ */
{id:385,name:'Latte parz. scremato',cat:'Latticini',e:46,p:3.3,c:4.9,s:4.9,f:1.6,fi:0,sa:1,na:43,emoji:'🥛'},
{id:386,name:'Yogurt alla frutta',cat:'Latticini',e:95,p:3.4,c:17.9,s:15.8,f:1.2,fi:.2,sa:.8,na:60,emoji:'🫙'},
{id:387,name:'Kefir naturale',cat:'Latticini',e:52,p:3.5,c:4.8,s:4.8,f:1,fi:0,sa:.6,na:40,emoji:'🥛'},
{id:388,name:'Panna da cucina 18%',cat:'Latticini',e:185,p:2.7,c:3.7,s:3.7,f:18.5,fi:0,sa:11.6,na:40,emoji:'🫙'},
{id:389,name:'Panna fresca da montare',cat:'Latticini',e:300,p:2.2,c:3,s:3,f:30.9,fi:0,sa:19.3,na:26,emoji:'🫙'},
{id:390,name:'Provolone',cat:'Latticini',e:351,p:25.6,c:2.1,s:0,f:27,fi:0,sa:17.1,na:876,emoji:'🧀'},
{id:391,name:'Asiago DOP',cat:'Latticini',e:358,p:28.5,c:0,s:0,f:27,fi:0,sa:17.2,na:900,emoji:'🧀'},
{id:392,name:'Taleggio DOP',cat:'Latticini',e:291,p:19.5,c:0,s:0,f:23.5,fi:0,sa:14.8,na:850,emoji:'🧀'},
{id:393,name:'Brie',cat:'Latticini',e:334,p:20,c:.5,s:.5,f:28,fi:0,sa:17.5,na:629,emoji:'🧀'},
{id:394,name:'Camembert',cat:'Latticini',e:300,p:19.8,c:.5,s:.5,f:24.3,fi:0,sa:15.3,na:842,emoji:'🧀'},
{id:395,name:'Fontina DOP',cat:'Latticini',e:343,p:25,c:1.5,s:0,f:26.5,fi:0,sa:16.5,na:800,emoji:'🧀'},
{id:396,name:'Scamorza affumicata',cat:'Latticini',e:335,p:23.5,c:2.5,s:1,f:25.5,fi:0,sa:16.4,na:430,emoji:'🧀'},
{id:397,name:'Tuorlo d uovo',cat:'Latticini',e:322,p:15.9,c:3.6,s:.5,f:26.5,fi:0,sa:7.9,na:48,emoji:'🥚'},
{id:398,name:'Uovo fritto in olio',cat:'Latticini',e:196,p:13.6,c:.5,s:.5,f:15,fi:0,sa:3.9,na:207,emoji:'🍳'},
{id:399,name:'Uova strapazzate al burro',cat:'Latticini',e:208,p:14,c:1.5,s:1,f:16,fi:0,sa:6.5,na:350,emoji:'🍳'},
{id:400,name:'Frittata 2 uova',cat:'Latticini',e:218,p:17,c:.8,s:.5,f:16,fi:0,sa:4.5,na:300,emoji:'🍳'},
{id:401,name:'Mascarpone',cat:'Latticini',e:429,p:5.5,c:3.5,s:3,f:44,fi:0,sa:27,na:58,emoji:'🧀'},
{id:402,name:'Ricotta di pecora',cat:'Latticini',e:157,p:9.5,c:4,s:0,f:12,fi:0,sa:8,na:100,emoji:'🫙'},

/* ══ CONDIMENTI aggiuntivi ══ */
{id:410,name:'Salsa teriyaki',cat:'Condimenti',e:89,p:2.5,c:19.5,s:16.5,f:.2,fi:.5,sa:0,na:2200,emoji:'🫙'},
{id:411,name:'Salsa hoisin',cat:'Condimenti',e:220,p:4.5,c:46.5,s:30,f:2.5,fi:1.5,sa:.3,na:2080,emoji:'🫙'},
{id:412,name:'Sriracha',cat:'Condimenti',e:93,p:1.2,c:18.4,s:12.3,f:2.1,fi:.3,sa:.3,na:1090,emoji:'🌶️'},
{id:413,name:'Tabasco',cat:'Condimenti',brand:'Tabasco',e:12,p:.5,c:.5,s:0,f:.5,fi:0,sa:0,na:2870,emoji:'🌶️'},
{id:414,name:'Salsa Worcestershire',cat:'Condimenti',e:78,p:2,c:17.5,s:14,f:.1,fi:0,sa:0,na:980,emoji:'🫙'},
{id:415,name:'Salsa di soia light',cat:'Condimenti',e:60,p:7.5,c:5.5,s:2.5,f:.1,fi:.5,sa:0,na:2900,emoji:'🫙'},
{id:416,name:'Aceto di mele',cat:'Condimenti',e:22,p:0,c:1,s:.4,f:0,fi:0,sa:0,na:5,emoji:'🫙'},
{id:417,name:'Senape classica',cat:'Condimenti',e:67,p:4.4,c:6,s:2.7,f:3.3,fi:3.2,sa:.2,na:1120,emoji:'🫙'},
{id:418,name:'Tahini sesamo',cat:'Condimenti',e:595,p:17,c:21.2,s:.5,f:53.8,fi:9.3,sa:7.5,na:115,emoji:'🫙'},
{id:419,name:'Guacamole',cat:'Condimenti',e:152,p:2,c:8.5,s:.5,f:13.5,fi:6,sa:2,na:310,emoji:'🥑'},
{id:420,name:'Burro di arachidi',cat:'Condimenti',e:588,p:25.1,c:20,s:9.2,f:49.9,fi:6,sa:10.3,na:459,emoji:'🥜'},
{id:421,name:'Ragù bolognese homemade',cat:'Condimenti',e:185,p:11,c:6,s:4,f:12,fi:1.5,sa:4,na:320,emoji:'🍝'},
{id:422,name:'Sugo al pomodoro fresco',cat:'Condimenti',e:55,p:1.8,c:8.5,s:6.5,f:1.5,fi:2,sa:.2,na:180,emoji:'🍅'},
{id:423,name:'Besciamella',cat:'Condimenti',e:104,p:3.5,c:9.5,s:4,f:5.5,fi:.2,sa:3.2,na:280,emoji:'🫙'},
{id:424,name:'Soffritto cipolla-carota-sedano',cat:'Condimenti',e:65,p:1.2,c:9,s:4,f:2.5,fi:2,sa:.3,na:45,emoji:'🧅'},

/* ══ FRUTTA SECCA aggiuntiva ══ */
{id:430,name:'Semi di girasole',cat:'Frutta Secca',e:584,p:20.8,c:20,s:2.6,f:51.5,fi:8.6,sa:4.5,na:3,emoji:'🌻'},
{id:431,name:'Semi di zucca',cat:'Frutta Secca',e:559,p:30.2,c:10.7,s:1.4,f:49.1,fi:6,sa:8.7,na:7,emoji:'🌱'},
{id:432,name:'Semi di lino',cat:'Frutta Secca',e:534,p:18.3,c:28.9,s:1.6,f:42.2,fi:27.3,sa:3.7,na:30,emoji:'🌱'},

/* ══ CEREALI COLAZIONE aggiuntivi ══ */
{id:440,name:'Frosties Kellogg s',cat:'Cereali Col.',brand:"Kellogg's",e:382,p:4.6,c:90,s:37,f:.5,fi:1,sa:.1,na:350,emoji:'🥣'},
{id:441,name:'All-Bran Kellogg s',cat:'Cereali Col.',brand:"Kellogg's",e:304,p:14,c:46,s:18,f:3.5,fi:27,sa:.7,na:530,emoji:'🥣'},
{id:442,name:'Granola con miele',cat:'Cereali Col.',e:410,p:8,c:67,s:19,f:11,fi:5,sa:1.5,na:55,emoji:'🥣'},
{id:443,name:'Weetabix 2 biscotti',cat:'Cereali Col.',brand:'Weetabix',e:362,p:10.7,c:69.5,s:4.4,f:2,fi:9.7,sa:.4,na:205,emoji:'🥣'},
{id:444,name:'Nesquik cereali',cat:'Cereali Col.',brand:'Nestlé',e:381,p:6.3,c:82,s:37,f:3.2,fi:4.8,sa:1.1,na:380,emoji:'🥣'},
{id:445,name:'Porridge d avena con latte',cat:'Cereali Col.',e:165,p:6.5,c:24.5,s:7.5,f:5,fi:3.5,sa:2.5,na:65,emoji:'🥣'},
{id:446,name:'Pancakes 2 pezzi',cat:'Cereali Col.',e:210,p:6.5,c:34,s:8,f:6,fi:1,sa:1.8,na:380,emoji:'🥞'},
{id:447,name:'French toast 1 fetta',cat:'Cereali Col.',e:205,p:7.5,c:27,s:8,f:8,fi:1.5,sa:3,na:290,emoji:'🍞'},
{id:448,name:'Avocado toast pane integrale',cat:'Cereali Col.',e:235,p:5.5,c:22.5,s:2.5,f:13.5,fi:7,sa:2,na:280,emoji:'🥑'},
{id:449,name:'Toast con burro e marmellata',cat:'Cereali Col.',e:290,p:7,c:45,s:18,f:9,fi:2,sa:4.5,na:420,emoji:'🍞'},
{id:450,name:'Uova strapazzate con pane',cat:'Cereali Col.',e:285,p:18.5,c:22,s:3.5,f:12.5,fi:1.5,sa:4.5,na:450,emoji:'🍳'},
{id:451,name:'Muesli con yogurt greco',cat:'Cereali Col.',e:195,p:8.5,c:30.5,s:16,f:4.5,fi:3.5,sa:1.5,na:75,emoji:'🥣'},
{id:452,name:'Fette biscottate integrali',cat:'Cereali Col.',e:354,p:12,c:63,s:5,f:7,fi:8,sa:1.5,na:380,emoji:'🍘'},
{id:453,name:'Cornetto al cioccolato bar',cat:'Dolci',e:390,p:7.5,c:53,s:22,f:16.5,fi:2,sa:7,na:290,emoji:'🥐'},
{id:454,name:'Brioche grande bar',cat:'Dolci',e:380,p:9,c:52,s:18,f:15.5,fi:1.5,sa:6.5,na:350,emoji:'🥐'},
{id:455,name:'Maritozzo con panna',cat:'Dolci',e:365,p:6.5,c:47,s:18,f:17,fi:1,sa:9.5,na:250,emoji:'🥐'},

/* ══ DOLCI aggiuntivi ══ */
{id:460,name:'Biscotti Digestive McVitie s',cat:'Dolci',brand:"McVitie's",e:471,p:6.6,c:62,s:16.5,f:21,fi:3.6,sa:9.4,na:500,emoji:'🍪'},
{id:461,name:'Abbracci Mulino Bianco',cat:'Dolci',brand:'Mulino Bianco',e:471,p:6.5,c:63.5,s:29.5,f:20.5,fi:2,sa:7,na:310,emoji:'🍪'},
{id:462,name:'Baiocchi Pavesi',cat:'Dolci',brand:'Pavesi',e:534,p:7.5,c:58.5,s:30.5,f:30,fi:3.5,sa:8.5,na:290,emoji:'🍪'},
{id:463,name:'Wafer alle nocciole',cat:'Dolci',e:497,p:6.5,c:59.5,s:38,f:25.5,fi:2.5,sa:8.5,na:180,emoji:'🍪'},
{id:464,name:'Torta Margherita',cat:'Dolci',e:356,p:6.2,c:52,s:30,f:14.5,fi:.8,sa:7.5,na:220,emoji:'🎂'},
{id:465,name:'Torta Sacher fetta 80g',cat:'Dolci',e:296,p:5.5,c:43,s:32,f:12.5,fi:3.5,sa:7,na:95,emoji:'🎂'},
{id:466,name:'Millefoglie con crema',cat:'Dolci',e:325,p:5.5,c:38,s:16,f:17,fi:.5,sa:8.5,na:175,emoji:'🍰'},
{id:467,name:'Cheesecake New York',cat:'Dolci',e:321,p:6.5,c:30.5,s:22.5,f:19.5,fi:.5,sa:10.5,na:290,emoji:'🍰'},
{id:468,name:'Babà al rum',cat:'Dolci',e:190,p:4.5,c:31,s:18,f:5.5,fi:.5,sa:2.5,na:140,emoji:'🍰'},
{id:469,name:'Zeppola di San Giuseppe',cat:'Dolci',e:380,p:7,c:48.5,s:22.5,f:17.5,fi:1,sa:7,na:160,emoji:'🍩'},
{id:470,name:'Bombolone crema',cat:'Dolci',e:325,p:6.5,c:44,s:18,f:13.5,fi:1,sa:5.5,na:220,emoji:'🍩'},
{id:471,name:'Sfogliatella napoletana',cat:'Dolci',e:360,p:8.5,c:55,s:15,f:12,fi:1.5,sa:4.5,na:320,emoji:'🥐'},
{id:472,name:'Crostata di frutta',cat:'Dolci',e:268,p:5,c:41,s:18.5,f:9.5,fi:1.5,sa:4,na:200,emoji:'🥧'},
{id:473,name:'Panna cotta',cat:'Dolci',e:185,p:3.5,c:22,s:22,f:9.5,fi:0,sa:6,na:55,emoji:'🍮'},
{id:474,name:'Mousse al cioccolato',cat:'Dolci',e:280,p:5,c:28,s:26,f:17,fi:2,sa:10,na:65,emoji:'🍫'},
{id:475,name:'Crème brûlée',cat:'Dolci',e:258,p:4.5,c:27,s:25,f:15,fi:0,sa:8.5,na:60,emoji:'🍮'},
{id:476,name:'Gelato pistacchio artig.',cat:'Gelati',e:225,p:5,c:26,s:23,f:12,fi:.5,sa:5,na:75,emoji:'🍨'},
{id:477,name:'Gelato fragola artig.',cat:'Gelati',e:160,p:3,c:26,s:24,f:4.5,fi:.5,sa:2.5,na:55,emoji:'🍓'},
{id:478,name:'Sorbetto limone',cat:'Gelati',e:130,p:.4,c:33,s:32,f:.1,fi:.3,sa:0,na:10,emoji:'🍋'},
{id:479,name:'Kinder Bueno White',cat:'Cioccolato',brand:'Ferrero',e:558,p:7.5,c:57,s:51,f:32.5,fi:1,sa:19,na:90,emoji:'🍫'},
{id:480,name:'Ferrero Rocher 1pz',cat:'Cioccolato',brand:'Ferrero',e:72,p:.9,c:6,s:5.4,f:4.9,fi:.3,sa:1.5,na:8,emoji:'🍬'},
{id:481,name:'Raffaello 1pz',cat:'Cioccolato',brand:'Ferrero',e:62,p:.6,c:4.7,s:4.3,f:4.5,fi:.1,sa:2.7,na:10,emoji:'🍬'},
{id:482,name:'Twix barretta',cat:'Cioccolato',brand:'Mars',e:495,p:4.5,c:65,s:43.5,f:24,fi:1,sa:13,na:210,emoji:'🍫'},
{id:483,name:'Mars barretta',cat:'Cioccolato',brand:'Mars',e:449,p:4,c:67,s:57.5,f:18.5,fi:.5,sa:11.5,na:155,emoji:'🍫'},
{id:484,name:'Bounty barretta',cat:'Cioccolato',brand:'Mars',e:471,p:3.8,c:59.5,s:52,f:24.2,fi:2.5,sa:19,na:120,emoji:'🍫'},
{id:485,name:'Oreo 3 biscotti',cat:'Dolci',brand:'Oreo',e:474,p:5,c:68.5,s:38.5,f:20.5,fi:1.5,sa:5.5,na:340,emoji:'🍪'},
{id:486,name:'KitKat 4 dita',cat:'Cioccolato',brand:'Nestlé',e:510,p:6.8,c:63,s:51,f:25.3,fi:1.5,sa:15.4,na:115,emoji:'🍫'},
{id:487,name:'After Eight 1pz',cat:'Cioccolato',brand:'Nestlé',e:384,p:2,c:73,s:68,f:8.5,fi:1,sa:5.5,na:15,emoji:'🍫'},
{id:488,name:'Fondente 85% Lindt',cat:'Cioccolato',brand:'Lindt',e:622,p:9.6,c:37,s:20,f:46,fi:14,sa:27,na:15,emoji:'🍫'},
{id:489,name:'Cioccolato bianco',cat:'Cioccolato',e:539,p:5.9,c:59,s:58,f:32.1,fi:0,sa:19.4,na:110,emoji:'🍫'},
{id:490,name:'Kinder cereali',cat:'Cioccolato',brand:'Ferrero',e:509,p:6.5,c:63.5,s:38.5,f:24.5,fi:2,sa:8,na:165,emoji:'🍫'},

/* ══ PIATTI ITALIANI completi ══ */
{id:500,name:'Pasta alla norma',cat:'Piatti IT.',e:245,p:8.5,c:34,s:5,f:8.5,fi:3,sa:2.5,na:420,emoji:'🍝'},
{id:501,name:'Pasta alla gricia',cat:'Piatti IT.',e:310,p:13,c:30,s:.5,f:15,fi:1,sa:5.5,na:580,emoji:'🍝'},
{id:502,name:'Pasta cacio e pepe',cat:'Piatti IT.',e:295,p:13,c:31,s:.5,f:13.5,fi:1,sa:5,na:460,emoji:'🍝'},
{id:503,name:'Spaghetti alle vongole',cat:'Piatti IT.',e:210,p:12.5,c:28.5,s:1.5,f:5.5,fi:2,sa:1,na:520,emoji:'🍝'},
{id:504,name:'Pasta con tonno',cat:'Piatti IT.',e:220,p:13,c:29,s:1,f:5,fi:1.5,sa:.8,na:450,emoji:'🍝'},
{id:505,name:'Pasta e ceci',cat:'Piatti IT.',e:185,p:9.5,c:30.5,s:2,f:3.5,fi:5.5,sa:.5,na:400,emoji:'🍝'},
{id:506,name:'Pasta e lenticchie',cat:'Piatti IT.',e:178,p:9,c:29,s:1.5,f:3,fi:5,sa:.4,na:380,emoji:'🍝'},
{id:507,name:'Pasta e fagioli',cat:'Piatti IT.',e:185,p:9.5,c:28,s:1.5,f:4.5,fi:5,sa:.8,na:350,emoji:'🍝'},
{id:508,name:'Lasagne verdi al ragù',cat:'Piatti IT.',e:195,p:11,c:18,s:2.5,f:9,fi:2,sa:3.5,na:480,emoji:'🍲'},
{id:509,name:'Cannelloni ricotta spinaci',cat:'Piatti IT.',e:175,p:9,c:18,s:2,f:7,fi:2,sa:3.5,na:450,emoji:'🍲'},
{id:510,name:'Gnocchi al pomodoro',cat:'Piatti IT.',e:160,p:5,c:28,s:3.5,f:3.5,fi:2,sa:.5,na:380,emoji:'🥟'},
{id:511,name:'Gnocchi al gorgonzola',cat:'Piatti IT.',e:265,p:9.5,c:30,s:1.5,f:12,fi:1.5,sa:7.5,na:580,emoji:'🥟'},
{id:512,name:'Risotto ai funghi porcini',cat:'Piatti IT.',e:165,p:5,c:26,s:.5,f:4.5,fi:.8,sa:1.5,na:350,emoji:'🍲'},
{id:513,name:'Risotto alla milanese zafferano',cat:'Piatti IT.',e:156,p:4.5,c:25,s:.5,f:4.2,fi:.5,sa:1.5,na:300,emoji:'🍲'},
{id:514,name:'Risotto al nero di seppia',cat:'Piatti IT.',e:170,p:8,c:26,s:.5,f:4,fi:.5,sa:1,na:420,emoji:'🦑'},
{id:515,name:'Risotto con salsiccia',cat:'Piatti IT.',e:215,p:9,c:25,s:.5,f:8.5,fi:.5,sa:3,na:480,emoji:'🍲'},
{id:516,name:'Risotto al radicchio',cat:'Piatti IT.',e:158,p:4.5,c:25.5,s:1.5,f:4.5,fi:1,sa:1.8,na:310,emoji:'🍲'},
{id:517,name:'Minestra di farro',cat:'Piatti IT.',e:145,p:5.5,c:25,s:1.5,f:3,fi:3,sa:.5,na:320,emoji:'🍲'},
{id:518,name:'Ribollita toscana',cat:'Piatti IT.',e:112,p:5,c:17.5,s:2.5,f:3,fi:4.5,sa:.5,na:380,emoji:'🍲'},
{id:519,name:'Zuppa di pesce',cat:'Piatti IT.',e:145,p:16.5,c:7.5,s:3.5,f:5,fi:1.5,sa:1.2,na:620,emoji:'🍲'},
{id:520,name:'Cacciucco livornese',cat:'Piatti IT.',e:155,p:17,c:8,s:3,f:5.5,fi:2,sa:1.3,na:580,emoji:'🍲'},
{id:521,name:'Baccalà alla vicentina',cat:'Piatti IT.',e:195,p:20,c:5,s:1,f:9,fi:.5,sa:2,na:450,emoji:'🐟'},
{id:522,name:'Branzino al cartoccio',cat:'Piatti IT.',e:130,p:23,c:1.5,s:.5,f:4,fi:.5,sa:.8,na:120,emoji:'🐟'},
{id:523,name:'Orata al sale',cat:'Piatti IT.',e:115,p:22,c:0,s:0,f:3.5,fi:0,sa:.8,na:1200,emoji:'🐟'},
{id:524,name:'Pesce spada alla griglia',cat:'Piatti IT.',e:144,p:23,c:0,s:0,f:5.5,fi:0,sa:1.6,na:110,emoji:'🐟'},
{id:525,name:'Fritto misto di pesce',cat:'Piatti IT.',e:285,p:18,c:20,s:.5,f:15,fi:.8,sa:3.5,na:520,emoji:'🐟'},
{id:526,name:'Scampi alla busara',cat:'Piatti IT.',e:175,p:18,c:8,s:3,f:7.5,fi:1,sa:1.2,na:580,emoji:'🦞'},
{id:527,name:'Polpo alla luciana',cat:'Piatti IT.',e:145,p:22,c:6,s:3,f:4,fi:1.5,sa:.8,na:480,emoji:'🐙'},
{id:528,name:'Totani ripieni',cat:'Piatti IT.',e:165,p:17,c:10,s:2,f:6,fi:1,sa:1.2,na:450,emoji:'🦑'},
{id:529,name:'Vitello tonnato',cat:'Piatti IT.',e:265,p:22.5,c:3.5,s:.5,f:17.5,fi:.5,sa:3.5,na:380,emoji:'🥩'},
{id:530,name:'Insalata di mare',cat:'Piatti IT.',e:120,p:15,c:6,s:1,f:3.5,fi:.5,sa:.6,na:480,emoji:'🦐'},
{id:531,name:'Polpette al sugo',cat:'Piatti IT.',e:235,p:17,c:8,s:3,f:14.5,fi:1,sa:5,na:420,emoji:'🥩'},
{id:532,name:'Polpettone al forno',cat:'Piatti IT.',e:220,p:20,c:6,s:1.5,f:12,fi:.5,sa:4.5,na:390,emoji:'🥩'},
{id:533,name:'Trippa alla romana',cat:'Piatti IT.',e:165,p:16,c:8,s:3,f:7,fi:1.5,sa:2.5,na:450,emoji:'🥩'},
{id:534,name:'Coda alla vaccinara',cat:'Piatti IT.',e:245,p:21,c:8,s:3,f:14,fi:2,sa:5,na:420,emoji:'🥩'},
{id:535,name:'Abbacchio scottadito',cat:'Piatti IT.',e:255,p:23,c:0,s:0,f:18,fi:0,sa:8,na:380,emoji:'🥩'},
{id:536,name:'Spezzatino di vitello',cat:'Piatti IT.',e:180,p:22,c:4,s:1,f:8,fi:.5,sa:2.5,na:340,emoji:'🥩'},
{id:537,name:'Stufato di manzo',cat:'Piatti IT.',e:195,p:23,c:6,s:2,f:8.5,fi:1,sa:3,na:380,emoji:'🥩'},
{id:538,name:'Arista di maiale al forno',cat:'Piatti IT.',e:230,p:26,c:0,s:0,f:14,fi:0,sa:5,na:350,emoji:'🥩'},
{id:539,name:'Arrosto di manzo',cat:'Piatti IT.',e:218,p:27,c:0,s:0,f:12,fi:0,sa:4.5,na:65,emoji:'🥩'},
{id:540,name:'Involtini di vitello',cat:'Piatti IT.',e:195,p:20,c:3,s:.5,f:10.5,fi:.3,sa:3.5,na:350,emoji:'🥩'},
{id:541,name:'Fegatini di pollo',cat:'Piatti IT.',e:142,p:22,c:1.5,s:0,f:5,fi:0,sa:1.5,na:110,emoji:'🍗'},
{id:542,name:'Pollo alla diavola',cat:'Piatti IT.',e:225,p:28,c:0,s:0,f:13,fi:0,sa:3.5,na:120,emoji:'🌶️'},
{id:543,name:'Pollo al limone',cat:'Piatti IT.',e:175,p:26,c:3,s:.5,f:6.5,fi:.2,sa:1.5,na:130,emoji:'🍗'},
{id:544,name:'Insalata caprese',cat:'Piatti IT.',e:198,p:13,c:3.5,s:3,f:15,fi:1.5,sa:9,na:340,emoji:'🍅'},
{id:545,name:'Bruschetta al pomodoro',cat:'Piatti IT.',e:195,p:5.5,c:27.5,s:4,f:7.5,fi:2.5,sa:1,na:350,emoji:'🍅'},
{id:546,name:'Supplì al telefono',cat:'Piatti IT.',e:210,p:8.5,c:26.5,s:2,f:8,fi:1.5,sa:3.5,na:480,emoji:'🍙'},
{id:547,name:'Arancino al ragù',cat:'Piatti IT.',e:215,p:8.5,c:30,s:2,f:7,fi:2,sa:2.5,na:480,emoji:'🍙'},
{id:548,name:'Crocchette di patate',cat:'Piatti IT.',e:185,p:4.5,c:22.5,s:1,f:8.5,fi:2,sa:2.5,na:420,emoji:'🥔'},
{id:549,name:'Fiori di zucca fritti',cat:'Piatti IT.',e:195,p:7,c:18.5,s:2,f:10.5,fi:1,sa:3.5,na:380,emoji:'🌸'},
{id:550,name:'Crostini al fegatini',cat:'Piatti IT.',e:210,p:10,c:22,s:2,f:9,fi:1.5,sa:2.5,na:420,emoji:'🍗'},
{id:551,name:'Carpaccio di salmone',cat:'Piatti IT.',e:145,p:18.5,c:.5,s:0,f:7.5,fi:0,sa:1.8,na:380,emoji:'🐟'},
{id:552,name:'Tartare di tonno',cat:'Piatti IT.',e:130,p:22.5,c:1.5,s:0,f:3.5,fi:.5,sa:.8,na:350,emoji:'🐟'},
{id:553,name:'Prosciutto e melone',cat:'Piatti IT.',e:120,p:9,c:8.5,s:7.5,f:5.5,fi:.5,sa:2,na:650,emoji:'🍈'},
{id:554,name:'Affettati misti 100g',cat:'Piatti IT.',e:280,p:22,c:.5,s:0,f:21,fi:0,sa:7.5,na:1600,emoji:'🥓'},
{id:555,name:'Antipasto misto salumi formaggi',cat:'Piatti IT.',e:310,p:18,c:3,s:1,f:25,fi:.5,sa:9.5,na:1200,emoji:'🧀'},
{id:556,name:'Panzanella toscana',cat:'Piatti IT.',e:145,p:3.5,c:20,s:4,f:5.5,fi:2.5,sa:.8,na:380,emoji:'🍅'},
{id:557,name:'Ribollita',cat:'Piatti IT.',e:112,p:5,c:17.5,s:2.5,f:3,fi:4.5,sa:.5,na:380,emoji:'🍲'},
{id:558,name:'Acquacotta maremmana',cat:'Piatti IT.',e:95,p:3.5,c:12,s:2,f:3.5,fi:2.5,sa:.5,na:320,emoji:'🍲'},
{id:559,name:'Pasta al forno',cat:'Piatti IT.',e:250,p:12,c:28,s:3,f:9.5,fi:2,sa:4,na:480,emoji:'🍝'},
{id:560,name:'Timballo di riso',cat:'Piatti IT.',e:235,p:10,c:28,s:2,f:9,fi:1.5,sa:3.5,na:420,emoji:'🍚'},
{id:561,name:'Calzone fritto',cat:'Piatti IT.',e:310,p:11,c:38,s:3,f:13,fi:2,sa:5,na:680,emoji:'🫓'},
{id:562,name:'Focaccia con formaggio',cat:'Piatti IT.',e:340,p:12,c:40,s:1.5,f:14,fi:2,sa:6,na:720,emoji:'🫓'},
{id:563,name:'Tigella con salumi',cat:'Piatti IT.',e:325,p:14,c:35,s:2,f:14,fi:1.5,sa:5,na:780,emoji:'🫓'},
{id:564,name:'Piadina romagnola vuota',cat:'Piatti IT.',e:320,p:8.5,c:44,s:2,f:12,fi:2,sa:4.5,na:580,emoji:'🫓'},
{id:565,name:'Pizza bianca con olio',cat:'Piatti IT.',e:290,p:8,c:47,s:1.5,f:8,fi:2,sa:1.5,na:580,emoji:'🍕'},
{id:566,name:'Schiacciata toscana',cat:'Piatti IT.',e:295,p:7.5,c:46,s:1.5,f:9,fi:2,sa:1.5,na:520,emoji:'🫓'},
{id:567,name:'Crescentine fritte',cat:'Piatti IT.',e:385,p:8.5,c:48,s:1.5,f:18,fi:2,sa:4,na:620,emoji:'🍞'},
{id:568,name:'Panino con hamburger fatto in casa',cat:'Piatti IT.',e:340,p:22,c:32,s:4,f:13,fi:2,sa:5,na:580,emoji:'🍔'},
{id:569,name:'Frittata di cipolle',cat:'Piatti IT.',e:195,p:14,c:7,s:3.5,f:13,fi:.8,sa:3.8,na:280,emoji:'🍳'},
{id:570,name:'Frittata di zucchine',cat:'Piatti IT.',e:175,p:13.5,c:4,s:2,f:12,fi:.8,sa:3.5,na:260,emoji:'🍳'},
{id:571,name:'Uova alla carbonara senza pasta',cat:'Piatti IT.',e:245,p:16,c:2,s:.5,f:19,fi:0,sa:7.5,na:380,emoji:'🥚'},
{id:572,name:'Risotto allo spumante',cat:'Piatti IT.',e:162,p:4.5,c:26,s:.5,f:4.5,fi:.5,sa:1.8,na:290,emoji:'🍲'},
{id:573,name:'Minestrone con pasta',cat:'Piatti IT.',e:85,p:3.5,c:13.5,s:3.5,f:2,fi:3,sa:.4,na:310,emoji:'🍲'},
{id:574,name:'Passato di verdure',cat:'Piatti IT.',e:65,p:2,c:10,s:4.5,f:1.5,fi:2.5,sa:.2,na:280,emoji:'🍲'},
{id:575,name:'Zuppa di cipolle gratinata',cat:'Piatti IT.',e:175,p:7,c:20,s:5,f:7,fi:2.5,sa:4,na:520,emoji:'🍲'},
{id:576,name:'Pasta fredda insalata',cat:'Piatti IT.',e:195,p:7.5,c:28,s:3,f:6.5,fi:2.5,sa:1.5,na:380,emoji:'🍝'},
{id:577,name:'Insalata di riso',cat:'Piatti IT.',e:175,p:5.5,c:26,s:2.5,f:5.5,fi:2,sa:1.2,na:350,emoji:'🍚'},

/* ══ CUCINA ETNICA aggiuntiva ══ */
{id:580,name:'Pad Thai gamberi',cat:'Etnica',e:175,p:9.5,c:26,s:4.5,f:3.5,fi:1.5,sa:.8,na:620,emoji:'🍜'},
{id:581,name:'Pollo tikka masala',cat:'Etnica',e:190,p:22,c:8.5,s:4.5,f:7.5,fi:2,sa:2.5,na:580,emoji:'🍛'},
{id:582,name:'Naan al burro',cat:'Etnica',e:317,p:9,c:52,s:5,f:8,fi:2.5,sa:3.5,na:480,emoji:'🫓'},
{id:583,name:'Tacos con carne 2pz',cat:'Etnica',e:280,p:15,c:32,s:3.5,f:9.5,fi:3.5,sa:3.5,na:620,emoji:'🌮'},
{id:584,name:'Burrito pollo',cat:'Etnica',e:290,p:18,c:35,s:3,f:8,fi:3,sa:2.5,na:750,emoji:'🌯'},
{id:585,name:'Falafel 3 pezzi',cat:'Etnica',e:333,p:13.3,c:31.8,s:1,f:17.8,fi:5.4,sa:2.4,na:585,emoji:'🧆'},
{id:586,name:'Shakshuka 2 uova',cat:'Etnica',e:185,p:12.5,c:12,s:7.5,f:9.5,fi:3,sa:2.5,na:580,emoji:'🍳'},
{id:587,name:'Gyoza al vapore 4pz',cat:'Etnica',e:145,p:7.5,c:19.5,s:1.5,f:4,fi:1.5,sa:1.2,na:490,emoji:'🥟'},
{id:588,name:'Dim sum misti 4pz',cat:'Etnica',e:155,p:8,c:20,s:2,f:4.5,fi:1.5,sa:1.2,na:520,emoji:'🥟'},
{id:589,name:'Spring rolls fritti 2pz',cat:'Etnica',e:225,p:6.5,c:24,s:3,f:11.5,fi:2,sa:2.5,na:520,emoji:'🥟'},
{id:590,name:'Curry verdure e riso',cat:'Etnica',e:195,p:5.5,c:32.5,s:6.5,f:6,fi:4.5,sa:3.5,na:580,emoji:'🍛'},
{id:591,name:'Ramen tonkotsu',cat:'Etnica',e:135,p:9,c:16.5,s:1.5,f:4,fi:1.5,sa:1.5,na:1050,emoji:'🍜'},
{id:592,name:'Pho bo vietnamita',cat:'Etnica',e:125,p:9,c:14,s:1,f:3,fi:1,sa:.8,na:980,emoji:'🍜'},
{id:593,name:'Hummus con pita',cat:'Etnica',e:205,p:9.5,c:25.5,s:3,f:8,fi:5.5,sa:1,na:480,emoji:'🫘'},
{id:594,name:'Doner kebab piatto',cat:'Etnica',e:310,p:20,c:22,s:3,f:15.5,fi:2,sa:5.5,na:780,emoji:'🌯'},
{id:595,name:'Baklava 1 pezzo',cat:'Etnica',e:430,p:6,c:48,s:28,f:24,fi:2,sa:6,na:180,emoji:'🍯'},
{id:596,name:'Momo tibetano 4pz',cat:'Etnica',e:160,p:9,c:21,s:1.5,f:4,fi:1.5,sa:1.2,na:460,emoji:'🥟'},
{id:597,name:'Bibimbap coreano',cat:'Etnica',e:210,p:10,c:30,s:3,f:6,fi:3,sa:1.5,na:680,emoji:'🍚'},
{id:598,name:'Okonomiyaki giapponese',cat:'Etnica',e:195,p:9,c:22,s:3,f:8.5,fi:2,sa:2.5,na:560,emoji:'🥞'},

/* ══ FAST FOOD aggiuntivo ══ */
{id:605,name:'McRoyal Deluxe',cat:'Fast Food',brand:"McDonald's",e:272,p:15,c:26,s:5.5,f:12,fi:1.5,sa:5,na:590,emoji:'🍔'},
{id:606,name:'Egg McMuffin',cat:'Fast Food',brand:"McDonald's",e:286,p:17,c:30,s:4,f:11,fi:1.5,sa:4.5,na:730,emoji:'🥚'},
{id:607,name:'McFlurry Oreo',cat:'Fast Food',brand:"McDonald's",e:185,p:3.8,c:28.5,s:24,f:6.5,fi:.3,sa:4,na:105,emoji:'🍦'},
{id:608,name:'Filet-O-Fish',cat:'Fast Food',brand:"McDonald's",e:248,p:11,c:26,s:4.5,f:11,fi:1,sa:2.2,na:580,emoji:'🐟'},
{id:609,name:'McWrap pollo grigliato',cat:'Fast Food',brand:"McDonald's",e:182,p:14.5,c:22.5,s:3.5,f:4.5,fi:2,sa:1.5,na:490,emoji:'🌯'},
{id:610,name:'Whopper Junior BK',cat:'Fast Food',brand:'Burger King',e:290,p:15,c:28,s:7,f:13.5,fi:2,sa:5,na:580,emoji:'🍔'},
{id:611,name:'Panzerotto fritto',cat:'Fast Food',e:290,p:9.5,c:36,s:4.5,f:11.5,fi:2,sa:4.5,na:520,emoji:'🫓'},
{id:612,name:'Arancino siciliano',cat:'Fast Food',e:210,p:8,c:30,s:2.5,f:6.5,fi:2,sa:2.5,na:450,emoji:'🍙'},
{id:613,name:'Tramezzino tonno maionese',cat:'Fast Food',e:252,p:12,c:27.5,s:3.5,f:10,fi:1.5,sa:2,na:680,emoji:'🥪'},
{id:614,name:'Subway 6" pollo teriyaki',cat:'Fast Food',brand:'Subway',e:313,p:23,c:48,s:8,f:4.5,fi:4.5,sa:1,na:800,emoji:'🥙'},
{id:615,name:'Pizza Hut Margherita 1 fetta',cat:'Fast Food',brand:'Pizza Hut',e:229,p:9.5,c:30,s:3,f:7.5,fi:1.5,sa:3.5,na:570,emoji:'🍕'},

/* ══ CONFEZIONATI aggiuntivi ══ */
{id:620,name:'Sugo Barilla all arrabbiata',cat:'Confezionati',brand:'Barilla',e:72,p:2.5,c:10,s:7.5,f:2.5,fi:2,sa:.4,na:520,emoji:'🍝'},
{id:621,name:'Sugo Barilla al pesto',cat:'Confezionati',brand:'Barilla',e:310,p:4.5,c:5,s:2.5,f:30,fi:2,sa:5.5,na:480,emoji:'🍝'},
{id:622,name:'Tonno Rio Mare in busta',cat:'Confezionati',brand:'Rio Mare',e:103,p:23.4,c:0,s:0,f:1,fi:0,sa:.3,na:335,emoji:'🐟'},
{id:623,name:'Pesto Ligure Tigullio',cat:'Confezionati',brand:'Tigullio',e:450,p:5.5,c:4,s:1.5,f:46,fi:2,sa:7,na:490,emoji:'🫙'},
{id:624,name:'BelVita miele e grano',cat:'Confezionati',brand:'BelVita',e:428,p:8,c:70,s:21,f:12.5,fi:3.5,sa:1.5,na:340,emoji:'🍪'},
{id:625,name:'Wasa crackers integrali',cat:'Confezionati',brand:'Wasa',e:335,p:11.5,c:60,s:1,f:4,fi:9,sa:.5,na:420,emoji:'🍘'},
{id:626,name:'Ritz crackers 10pz',cat:'Confezionati',brand:'Ritz',e:490,p:7.5,c:64.5,s:8.5,f:21.5,fi:2.5,sa:3.5,na:760,emoji:'🍘'},
{id:627,name:'Tuc salati 10pz',cat:'Confezionati',brand:'Tuc',e:475,p:8.5,c:66,s:5.5,f:19.5,fi:2.5,sa:4.5,na:780,emoji:'🍘'},
{id:628,name:'Cipster Simmenthal',cat:'Confezionati',brand:'Simmenthal',e:185,p:22,c:0,s:0,f:11,fi:0,sa:3.5,na:420,emoji:'🥩'},
{id:629,name:'Simmenthal scatoletta',cat:'Confezionati',brand:'Simmenthal',e:185,p:22,c:0,s:0,f:11,fi:0,sa:3.5,na:380,emoji:'🥩'},
{id:630,name:'Vitello tonnato in barattolo',cat:'Confezionati',e:180,p:15,c:4,s:.5,f:11,fi:.5,sa:2,na:520,emoji:'🥩'},
{id:631,name:'Fagioli borlotti in scatola',cat:'Confezionati',e:85,p:6,c:14,s:.5,f:.4,fi:5,sa:.1,na:380,emoji:'🫘'},
{id:632,name:'Ceci in scatola',cat:'Confezionati',e:120,p:7,c:20,s:3.5,f:1.5,fi:6,sa:.2,na:350,emoji:'🫘'},
{id:633,name:'Mais in lattina sgocciolato',cat:'Confezionati',e:86,p:3.2,c:18.7,s:2.9,f:1.2,fi:2.4,sa:.2,na:270,emoji:'🌽'},
{id:634,name:'Alici sott olio barattolo',cat:'Confezionati',e:210,p:28.9,c:0,s:0,f:10.5,fi:0,sa:2.5,na:3660,emoji:'🐟'},
{id:635,name:'Olive verdi in vasetto',cat:'Confezionati',e:115,p:.8,c:6.3,s:.5,f:10.7,fi:3.3,sa:1.4,na:1560,emoji:'🫒'},
{id:636,name:'Nutella barattolo porzione',cat:'Confezionati',brand:'Ferrero',e:530,p:6.3,c:57.5,s:56.3,f:30.9,fi:3.4,sa:10.6,na:40,emoji:'🫙'},
{id:637,name:'Philadelphia light',cat:'Confezionati',brand:'Philadelphia',e:143,p:6.8,c:5.2,s:4.5,f:10.5,fi:0,sa:7,na:390,emoji:'🧀'},
{id:638,name:'Activia yogurt',cat:'Confezionati',brand:'Danone',e:73,p:3.8,c:10.8,s:10.3,f:1.5,fi:0,sa:1,na:60,emoji:'🫙'},
{id:639,name:'Kinder Sorpresa 1 uovo',cat:'Confezionati',brand:'Ferrero',e:110,p:1.6,c:11,s:10.4,f:6.4,fi:.2,sa:2.2,na:24,emoji:'🥚'},
{id:640,name:'Monster Ultra Zero 500ml',cat:'Bevande',brand:'Monster',e:10,p:0,c:2,s:0,f:0,fi:0,sa:0,na:180,emoji:'🥤'},

/* ══ SURGELATI aggiuntivi ══ */
{id:645,name:'Lasagne Findus famiglia',cat:'Surgelati',brand:'Findus',e:175,p:9.5,c:16,s:2.5,f:8,fi:1.5,sa:3.5,na:430,emoji:'🍲'},
{id:646,name:'Sofficini prosciutto Findus',cat:'Surgelati',brand:'Findus',e:248,p:9.5,c:26,s:2,f:12,fi:1.5,sa:4.8,na:540,emoji:'🧀'},
{id:647,name:'Pizza surgelata Diavola 4Salti',cat:'Surgelati',brand:'4 Salti in Padella',e:255,p:11,c:30,s:3.5,f:9.5,fi:2,sa:4.5,na:680,emoji:'🍕'},
{id:648,name:'Minestrone surgelato cotto',cat:'Surgelati',e:40,p:2,c:7,s:3,f:.5,fi:2.5,sa:0,na:250,emoji:'🥦'},
{id:649,name:'Spinaci in foglia surgelati cotti',cat:'Surgelati',e:20,p:2.5,c:2,s:.3,f:.3,fi:2,sa:0,na:70,emoji:'🥬'},
{id:650,name:'Riso basmati in busta 2 min',cat:'Surgelati',e:160,p:3.5,c:34,s:0,f:1,fi:.5,sa:.2,na:5,emoji:'🍚'},
{id:651,name:'Patatine al forno surgelate',cat:'Surgelati',brand:'McCain',e:148,p:2.5,c:23,s:.5,f:5,fi:2,sa:.8,na:20,emoji:'🍟'},
{id:652,name:'Cotolette di pollo surgelate',cat:'Surgelati',e:218,p:14.5,c:16,s:.5,f:10,fi:1,sa:3,na:580,emoji:'🍗'},
{id:653,name:'Waffles surgelati 2pz',cat:'Surgelati',e:290,p:7,c:44,s:12,f:10,fi:1.5,sa:3.5,na:380,emoji:'🧇'},
{id:654,name:'Edamame surgelati cotti',cat:'Surgelati',e:121,p:11.9,c:8.9,s:2.2,f:5.2,fi:5.2,sa:.7,na:6,emoji:'🫛'},

/* ══ SNACK aggiuntivi ══ */
{id:660,name:'Patatine San Carlo',cat:'Snack',brand:'San Carlo',e:524,p:6.5,c:51.5,s:.8,f:32.5,fi:4.5,sa:3.8,na:560,emoji:'🍟'},
{id:661,name:'Taralli classici',cat:'Snack',e:435,p:10.5,c:60,s:3.5,f:17,fi:3,sa:2.5,na:550,emoji:'🥨'},
{id:662,name:'Bruschette al pomodoro snack',cat:'Snack',e:415,p:8.5,c:68,s:8,f:12,fi:4.5,sa:1.5,na:650,emoji:'🍅'},
{id:663,name:'Grissini rubata',cat:'Snack',e:415,p:10.5,c:74.5,s:2.5,f:9.5,fi:3.5,sa:1.5,na:590,emoji:'🥖'},
{id:664,name:'Popcorn caramello',cat:'Snack',e:480,p:5,c:68,s:40,f:20,fi:3,sa:9,na:400,emoji:'🍿'},
{id:665,name:'Nachos con formaggio',cat:'Snack',e:502,p:7.8,c:62,s:4,f:25,fi:3,sa:7.5,na:750,emoji:'🌮'},
{id:666,name:'Pretzel salati',cat:'Snack',e:380,p:9.5,c:78,s:3,f:2.5,fi:3,sa:.5,na:1380,emoji:'🥨'},
{id:667,name:'Pork rinds ciccioli soffiati',cat:'Snack',e:530,p:50,c:0,s:0,f:36,fi:0,sa:12,na:1100,emoji:'🥩'},
{id:668,name:'Mix frutta secca salata',cat:'Snack',e:545,p:16,c:18,s:4,f:46,fi:5,sa:5.5,na:280,emoji:'🌰'},

/* ══ ZUCCHERI aggiuntivi ══ */
{id:675,name:'Zucchero di canna grezzo',cat:'Zuccheri',e:387,p:0,c:99.6,s:99.6,f:0,fi:0,sa:0,na:0,emoji:'🫙'},
{id:676,name:'Zucchero di canna integrale',cat:'Zuccheri',e:356,p:.5,c:92,s:90,f:.2,fi:0,sa:0,na:30,emoji:'🫙'},
{id:677,name:'Eritritolo dolcificante',cat:'Zuccheri',e:20,p:0,c:100,s:0,f:0,fi:0,sa:0,na:0,emoji:'🌿'},
{id:678,name:'Sciroppo d acero',cat:'Zuccheri',e:260,p:0,c:67,s:60,f:0,fi:0,sa:0,na:9,emoji:'🍁'},
{id:679,name:'Marmellata arancio',cat:'Zuccheri',e:250,p:.5,c:65,s:62,f:.1,fi:1.5,sa:0,na:20,emoji:'🍊'},
{id:680,name:'Marmellata fragola',cat:'Zuccheri',e:250,p:.5,c:65,s:62,f:.1,fi:1.2,sa:0,na:18,emoji:'🍓'},
{id:681,name:'Confettura Fiordifrutta albicocca',cat:'Zuccheri',brand:'Rigoni',e:218,p:.6,c:54,s:52,f:.2,fi:1.2,sa:0,na:10,emoji:'🍑'},

/* ══ SPORT aggiuntivi ══ */
{id:685,name:'BCAA polvere 10g',cat:'Sport',e:40,p:10,c:0,s:0,f:0,fi:0,sa:0,na:5,emoji:'💊'},
{id:686,name:'Creatina 5g',cat:'Sport',e:0,p:0,c:0,s:0,f:0,fi:0,sa:0,na:0,emoji:'💊'},
{id:687,name:'Energy gel sport',cat:'Sport',e:100,p:0,c:25,s:22,f:0,fi:0,sa:0,na:55,emoji:'⚡'},
{id:688,name:'Barretta energetica sport',cat:'Sport',e:340,p:8.5,c:57.5,s:24.5,f:9.5,fi:3.5,sa:3,na:110,emoji:'💪'},
{id:689,name:'Isotonic sport drink 500ml',cat:'Sport',e:130,p:0,c:32,s:28,f:0,fi:0,sa:0,na:220,emoji:'🥤'},

/* ══ MCDONALD'S MENU COMPLETO ══ */
{id:700,name:"McInsalata Caesar con pollo",cat:'Fast Food',brand:"McDonald's",e:180,p:18,c:9,s:3.5,f:7.5,fi:2.5,sa:2.5,na:550,emoji:'🥗'},
{id:701,name:"McInsalata mista base",cat:'Fast Food',brand:"McDonald's",e:20,p:1.5,c:2.5,s:1.5,f:.3,fi:1.5,sa:0,na:45,emoji:'🥗'},
{id:702,name:"Hash Brown McDonald's",cat:'Fast Food',brand:"McDonald's",e:313,p:3.2,c:33,s:.5,f:19,fi:2.5,sa:3,na:440,emoji:'🥔'},
{id:703,name:"Pancakes McDonald's con sciroppo",cat:'Fast Food',brand:"McDonald's",e:365,p:7.5,c:69,s:30,f:7.5,fi:1.5,sa:2.2,na:710,emoji:'🥞'},
{id:704,name:"Sausage McMuffin",cat:'Fast Food',brand:"McDonald's",e:371,p:18,c:29,s:4,f:19.5,fi:1.5,sa:7.5,na:810,emoji:'🥚'},
{id:705,name:"McSundae caramello",cat:'Fast Food',brand:"McDonald's",e:179,p:4,c:30.5,s:24.5,f:5,fi:.3,sa:3.2,na:95,emoji:'🍦'},
{id:706,name:"Double Cheeseburger McDonald's",cat:'Fast Food',brand:"McDonald's",e:398,p:23,c:34,s:7,f:19,fi:2,sa:9,na:1050,emoji:'🍔'},
{id:707,name:"McChicken McDonald's",cat:'Fast Food',brand:"McDonald's",e:420,p:20,c:42,s:5,f:18,fi:2.5,sa:3.5,na:820,emoji:'🍗'},
{id:708,name:"Apple Pie McDonald's",cat:'Fast Food',brand:"McDonald's",e:253,p:3,c:34,s:13,f:11.5,fi:2.5,sa:3.5,na:160,emoji:'🍎'},
{id:709,name:"McFlurry Smarties",cat:'Fast Food',brand:"McDonald's",e:185,p:3.8,c:28.5,s:24,f:6.5,fi:.3,sa:4,na:110,emoji:'🍦'},
/* ══ BURGER KING MENU ══ */
{id:710,name:'Whopper con formaggio',cat:'Fast Food',brand:'Burger King',e:550,p:30,c:46,s:10,f:27,fi:3,sa:12,na:1240,emoji:'🍔'},
{id:711,name:'Crispy Chicken BK',cat:'Fast Food',brand:'Burger King',e:490,p:24,c:50,s:7,f:20,fi:3,sa:4,na:1080,emoji:'🍗'},
{id:712,name:'Onion Rings BK',cat:'Fast Food',brand:'Burger King',e:320,p:4.5,c:43,s:3.5,f:15,fi:2.5,sa:3,na:510,emoji:'🧅'},
/* ══ KFC MENU ══ */
{id:715,name:'Coscia pollo KFC originale',cat:'Fast Food',brand:'KFC',e:266,p:17,c:10,s:0,f:17,fi:.5,sa:4.5,na:680,emoji:'🍗'},
{id:716,name:'Popcorn Chicken KFC',cat:'Fast Food',brand:'KFC',e:330,p:16,c:25,s:1.5,f:17.5,fi:1,sa:3.5,na:720,emoji:'🍗'},
{id:717,name:'Coleslaw KFC',cat:'Fast Food',brand:'KFC',e:140,p:1,c:16,s:12,f:8,fi:1.5,sa:1.2,na:220,emoji:'🥗'},
/* ══ PIZZA MENU COMPLETO ══ */
{id:720,name:'Pizza 4 Stagioni artigianale',cat:'Fast Food',e:268,p:11,c:31,s:3,f:10.5,fi:2,sa:4.5,na:650,emoji:'🍕'},
{id:721,name:'Pizza Prosciutto e Funghi',cat:'Fast Food',e:262,p:11.5,c:31,s:3,f:10,fi:2,sa:4,na:620,emoji:'🍕'},
{id:722,name:'Pizza Napoli con acciughe',cat:'Fast Food',e:255,p:11,c:32,s:3,f:9.5,fi:2,sa:3.5,na:890,emoji:'🍕'},
{id:723,name:'Pizza 4 Formaggi artigianale',cat:'Fast Food',e:315,p:14,c:30,s:3,f:15,fi:1.8,sa:8,na:820,emoji:'🍕'},
{id:724,name:'Pizza Vegana (verdure)',cat:'Fast Food',e:210,p:7,c:33,s:4,f:6,fi:3.5,sa:.5,na:480,emoji:'🍕'},
/* ══ COLAZIONE DOLCE ITALIANA ══ */
{id:730,name:'Bombolone alla crema',cat:'Dolci',e:325,p:6.5,c:44,s:18,f:13.5,fi:1,sa:5.5,na:220,emoji:'🍩'},
{id:731,name:'Zeppola di San Giuseppe',cat:'Dolci',e:380,p:7,c:48.5,s:22.5,f:17.5,fi:1,sa:7,na:160,emoji:'🍩'},
{id:732,name:'Bignè alla crema',cat:'Dolci',e:295,p:7,c:34,s:14.5,f:14,fi:.5,sa:5.5,na:190,emoji:'🍩'},
{id:733,name:'Torta Sacher (1 fetta)',cat:'Dolci',e:296,p:5.5,c:43,s:32,f:12.5,fi:3.5,sa:7,na:95,emoji:'🍰'},
{id:734,name:'Babà al rum',cat:'Dolci',e:190,p:4.5,c:31,s:18,f:5.5,fi:.5,sa:2.5,na:140,emoji:'🍰'},
{id:735,name:'Cheesecake New York',cat:'Dolci',e:321,p:6.5,c:30.5,s:22.5,f:19.5,fi:.5,sa:10.5,na:290,emoji:'🍰'},
{id:736,name:'Crostata di marmellata',cat:'Dolci',e:380,p:5,c:58,s:28,f:14.5,fi:1.5,sa:5.5,na:210,emoji:'🥧'},
{id:737,name:'Creme caramel',cat:'Dolci',e:107,p:3.5,c:18.5,s:17,f:2.5,fi:0,sa:1.6,na:68,emoji:'🍮'},
{id:738,name:'Panna cotta alla vaniglia',cat:'Dolci',e:189,p:2.9,c:22,s:20,f:10,fi:0,sa:6.3,na:40,emoji:'🍮'},
{id:739,name:'Sfogliatella napoletana riccia',cat:'Dolci',e:300,p:7,c:43,s:15,f:12,fi:1.5,sa:5.5,na:145,emoji:'🥐'},
{id:740,name:'Pasticciotto leccese',cat:'Dolci',e:340,p:7.5,c:46,s:20,f:14.5,fi:1,sa:6,na:180,emoji:'🥐'},
/* ══ CAFFÈ CON ZUCCHERO DI CANNA (specifico) ══ */
{id:745,name:'Caffè con zucchero di canna',cat:'Bevande',e:19,p:.1,c:4.8,s:4.8,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:746,name:'Caffè con miele (1 cucchiaino)',cat:'Bevande',e:23,p:.1,c:5.8,s:5.8,f:0,fi:0,sa:0,na:1,emoji:'☕'},
{id:747,name:'Caffè d orzo',cat:'Bevande',e:8,p:.3,c:1.6,s:.5,f:.1,fi:.2,sa:0,na:2,emoji:'☕'},
{id:748,name:'Caffè al ginseng',cat:'Bevande',e:65,p:1,c:12,s:11.5,f:1.2,fi:0,sa:.8,na:35,emoji:'☕'},
{id:749,name:'Cappuccino con latte di avena',cat:'Bevande',e:55,p:1.8,c:7.5,s:5.5,f:1.8,fi:.5,sa:.2,na:60,emoji:'☕'},
{id:750,name:'Cappuccino con latte di soia',cat:'Bevande',e:50,p:3.5,c:5.5,s:4.5,f:1.5,fi:.3,sa:.2,na:52,emoji:'☕'},
{id:751,name:'Matcha latte',cat:'Bevande',e:75,p:3.5,c:9,s:7,f:2.5,fi:.5,sa:1.5,na:55,emoji:'🍵'},
/* ══ SALUMI AGGIUNTIVI ══ */
{id:755,name:'Coppa di testa',cat:'Salumi',e:298,p:15.5,c:0,s:0,f:26.3,fi:0,sa:9.5,na:1000,emoji:'🥓'},
{id:756,name:'Pancetta arrotolata',cat:'Salumi',e:426,p:11.5,c:0,s:0,f:43.5,fi:0,sa:16.5,na:1350,emoji:'🥓'},
{id:757,name:'Speck Alto Adige IGP',cat:'Salumi',e:267,p:30,c:0,s:0,f:16.5,fi:0,sa:5.8,na:2400,emoji:'🥓'},
{id:758,name:'Nduja calabrese',cat:'Salumi',e:485,p:17.5,c:1,s:.5,f:46.5,fi:0,sa:17,na:2800,emoji:'🌶️'},
{id:759,name:'Lonza di maiale',cat:'Salumi',e:196,p:30,c:0,s:0,f:8.5,fi:0,sa:3,na:1600,emoji:'🥩'},
/* ══ FORMAGGI AGGIUNTIVI ══ */
{id:760,name:'Brie',cat:'Latticini',e:334,p:20,c:.5,s:.5,f:28,fi:0,sa:17.5,na:629,emoji:'🧀'},
{id:761,name:'Camembert',cat:'Latticini',e:300,p:19.8,c:.5,s:.5,f:24.3,fi:0,sa:15.3,na:842,emoji:'🧀'},
{id:762,name:'Provolone',cat:'Latticini',e:351,p:25.6,c:2.1,s:0,f:27,fi:0,sa:17.1,na:876,emoji:'🧀'},
{id:763,name:'Pecorino Romano DOP',cat:'Latticini',e:387,p:31.8,c:.5,s:0,f:28.3,fi:0,sa:17.6,na:1800,emoji:'🧀'},
{id:764,name:'Asiago DOP',cat:'Latticini',e:358,p:28.5,c:0,s:0,f:27,fi:0,sa:17.2,na:900,emoji:'🧀'},
{id:765,name:'Crescenza',cat:'Latticini',e:229,p:13.5,c:1.5,s:0,f:19,fi:0,sa:12,na:360,emoji:'🧀'},
{id:766,name:'Taleggio DOP',cat:'Latticini',e:291,p:19.5,c:0,s:0,f:23.5,fi:0,sa:14.8,na:850,emoji:'🧀'},
{id:767,name:'Mascarpone',cat:'Latticini',e:429,p:4.2,c:3.2,s:3.2,f:45,fi:0,sa:28,na:78,emoji:'🧀'},
/* ══ PIATTI ITALIANI AGGIUNTIVI ══ */
{id:770,name:'Spaghetti aglio olio peperoncino',cat:'Piatti IT.',e:320,p:8.5,c:40,s:.5,f:14,fi:2,sa:2,na:380,emoji:'🍝'},
{id:771,name:'Pasta al forno gratinata',cat:'Piatti IT.',e:250,p:12,c:28,s:3,f:9.5,fi:2,sa:4,na:480,emoji:'🍲'},
{id:772,name:'Gnocchi alla sorrentina',cat:'Piatti IT.',e:179,p:7.5,c:27.5,s:4,f:5,fi:1.5,sa:2.5,na:480,emoji:'🥟'},
{id:773,name:'Penne all arrabbiata',cat:'Piatti IT.',e:180,p:6,c:33,s:4.5,f:3.5,fi:2.5,sa:.5,na:380,emoji:'🍝'},
{id:774,name:'Tagliatelle al ragù bolognese',cat:'Piatti IT.',e:235,p:12.5,c:25,s:2.5,f:9,fi:1.5,sa:3.5,na:460,emoji:'🍝'},
{id:775,name:'Zuppa di cipolle gratinata',cat:'Piatti IT.',e:175,p:7,c:20,s:5,f:7,fi:2.5,sa:4,na:520,emoji:'🍲'},
{id:776,name:'Pasta con le sarde',cat:'Piatti IT.',e:248,p:12.5,c:32,s:3,f:8.5,fi:2.5,sa:2,na:480,emoji:'🍝'},
{id:777,name:'Baccalà alla livornese',cat:'Piatti IT.',e:148,p:22.5,c:5,s:3.5,f:4.5,fi:1.5,sa:1,na:680,emoji:'🐟'},
{id:778,name:'Osso buco alla milanese',cat:'Piatti IT.',e:198,p:20,c:4.5,s:1.5,f:10.5,fi:.5,sa:3.8,na:380,emoji:'🥩'},
{id:779,name:'Brasato al Barolo',cat:'Piatti IT.',e:210,p:24,c:5,s:1,f:10,fi:.5,sa:3.5,na:360,emoji:'🥩'},
{id:780,name:'Impepata di cozze',cat:'Piatti IT.',e:90,p:12,c:4,s:0,f:2.5,fi:0,sa:.5,na:350,emoji:'🦪'},
/* ══ SUSHI COMPLETO ══ */
{id:785,name:'Nigiri salmone 1pz',cat:'Sushi',e:40,p:3,c:5.5,s:.2,f:.7,fi:.1,sa:.2,na:115,emoji:'🍣'},
{id:786,name:'Nigiri tonno 1pz',cat:'Sushi',e:36,p:3.5,c:5,s:.2,f:.3,fi:.1,sa:.1,na:120,emoji:'🍣'},
{id:787,name:'Nigiri gambero 1pz',cat:'Sushi',e:32,p:2.5,c:5.2,s:.2,f:.2,fi:.1,sa:.1,na:130,emoji:'🍣'},
{id:788,name:'Maki salmone 6pz',cat:'Sushi',e:185,p:9,c:28,s:.8,f:3.5,fi:.5,sa:.8,na:480,emoji:'🍱'},
{id:789,name:'California roll 6pz',cat:'Sushi',e:240,p:9,c:35,s:3,f:6,fi:2,sa:1.2,na:780,emoji:'🍱'},
{id:790,name:'Temaki salmone',cat:'Sushi',e:185,p:10.5,c:22,s:1,f:5.5,fi:1.5,sa:1.2,na:390,emoji:'🍱'},
{id:791,name:'Edamame salati (bowl)',cat:'Sushi',e:130,p:12.5,c:9.5,s:2.5,f:5.5,fi:5.5,sa:.8,na:320,emoji:'🫛'},
{id:792,name:'Miso soup',cat:'Sushi',e:35,p:2.5,c:4,s:.5,f:1,fi:.5,sa:.2,na:950,emoji:'🍵'},
/* ══ INTEGRATORI/SPORT ══ */
{id:795,name:'Whey isolate 30g',cat:'Sport',e:110,p:26,c:1,s:.5,f:.5,fi:0,sa:.2,na:60,emoji:'💊'},
{id:796,name:'Casein protein 30g',cat:'Sport',e:112,p:24,c:2.5,s:1,f:1,fi:0,sa:.4,na:120,emoji:'💊'},
{id:797,name:'Pre-workout powder 10g',cat:'Sport',e:28,p:0,c:7,s:6,f:0,fi:0,sa:0,na:150,emoji:'⚡'},
{id:798,name:'Collagene idrolizzato 10g',cat:'Sport',e:35,p:9,c:0,s:0,f:0,fi:0,sa:0,na:5,emoji:'💊'},
/* ══ GELATI AGGIUNTIVI ══ */
{id:800,name:'Magnum Almond',cat:'Gelati',brand:'Algida',e:287,p:4,c:28.5,s:24.5,f:17.7,fi:.9,sa:9.5,na:70,emoji:'🍫'},
{id:801,name:'Solero exotic',cat:'Gelati',brand:'Algida',e:91,p:.5,c:21.5,s:18,f:.5,fi:.3,sa:.1,na:25,emoji:'🍦'},
{id:802,name:'Twister ghiacciolo',cat:'Gelati',brand:'Algida',e:78,p:.3,c:18.5,s:15.5,f:.5,fi:.2,sa:.1,na:25,emoji:'🍭'},
{id:803,name:'Calippo arancia',cat:'Gelati',brand:'Algida',e:62,p:.3,c:15.5,s:14.5,f:0,fi:.2,sa:0,na:10,emoji:'🍭'},
{id:804,name:'Gelato pistacchio artigianale',cat:'Gelati',e:212,p:4.5,c:23,s:20,f:11.5,fi:.8,sa:2.5,na:55,emoji:'🍨'},
{id:805,name:'Gelato nocciola artigianale',cat:'Gelati',e:218,p:4,c:24,s:21,f:12,fi:.8,sa:3.5,na:50,emoji:'🍨'},
{id:806,name:'Frozen yogurt',cat:'Gelati',e:127,p:3.5,c:24,s:20,f:2,fi:0,sa:1.3,na:70,emoji:'🍦'},
/* ══ CONDIMENTI AGGIUNTIVI ══ */
{id:810,name:'Tahini (pasta di sesamo)',cat:'Condimenti',e:595,p:17,c:21.2,s:.5,f:53.8,fi:9.3,sa:7.5,na:17,emoji:'🫙'},
{id:811,name:'Salsa tzatziki',cat:'Condimenti',e:85,p:4.5,c:4,s:3,f:6,fi:.5,sa:3,na:380,emoji:'🫙'},
{id:812,name:'Guacamole',cat:'Condimenti',e:160,p:2,c:8.5,s:.5,f:14.7,fi:6.7,sa:2.1,na:290,emoji:'🥑'},
{id:813,name:'Salsa teriyaki',cat:'Condimenti',e:89,p:5.5,c:16.5,s:14,f:.5,fi:.5,sa:.1,na:2080,emoji:'🫙'},
{id:814,name:'Aceto di mele',cat:'Condimenti',e:22,p:0,c:1,s:.5,f:0,fi:0,sa:0,na:5,emoji:'🍶'},
/* ══ VERDURE ══ */
{id:820,name:'Cipollotti freschi',cat:'Verdure',e:32,p:1.8,c:7.3,s:2.3,f:.2,fi:2.6,sa:0,na:16,emoji:'🧅'},
{id:821,name:'Rucola selvatica',cat:'Verdure',e:32,p:3.5,c:3.7,s:2,f:.7,fi:1.6,sa:.1,na:27,emoji:'🥬'},
{id:822,name:'Songino (valerianella)',cat:'Verdure',e:21,p:2,c:3.6,s:.5,f:.4,fi:1.8,sa:0,na:7,emoji:'🥬'},
{id:823,name:'Bieta da coste',cat:'Verdure',e:20,p:1.9,c:3.7,s:.5,f:.2,fi:1.6,sa:0,na:230,emoji:'🥬'},
{id:824,name:'Indivia belga',cat:'Verdure',e:17,p:1.3,c:3.1,s:.5,f:.1,fi:3.1,sa:0,na:2,emoji:'🥬'},
{id:825,name:'Germogli di soia',cat:'Verdure',e:30,p:3,c:5.9,s:.0,f:.2,fi:1.8,sa:0,na:6,emoji:'🌱'},
{id:826,name:'Broccolo romanesco',cat:'Verdure',e:30,p:2.5,c:5.5,s:1.5,f:.3,fi:2.4,sa:0,na:25,emoji:'🥦'},
{id:827,name:'Rape',cat:'Verdure',e:28,p:1.5,c:6.4,s:3.8,f:.1,fi:1.8,sa:0,na:82,emoji:'🌿'},
{id:828,name:'Taccole',cat:'Verdure',e:32,p:2.4,c:5.7,s:2.5,f:.2,fi:2.5,sa:0,na:4,emoji:'🫛'},
{id:829,name:'Bok choy',cat:'Verdure',e:13,p:1.5,c:2.2,s:1.2,f:.2,fi:1,sa:0,na:65,emoji:'🥬'},
/* ══ FRUTTA ══ */
{id:835,name:'Lychee (litchi)',cat:'Frutta',e:66,p:.8,c:16.5,s:15.2,f:.4,fi:1.3,sa:0,na:1,emoji:'🍈'},
{id:836,name:'Feijoa',cat:'Frutta',e:55,p:1.2,c:13,s:8,f:.8,fi:6.4,sa:0,na:3,emoji:'🟢'},
{id:837,name:'Carambola (starfruit)',cat:'Frutta',e:31,p:1,c:6.7,s:4,f:.3,fi:2.8,sa:0,na:2,emoji:'⭐'},
{id:838,name:'Dattero fresco',cat:'Frutta',e:142,p:1.8,c:36,s:31,f:.1,fi:3.5,sa:0,na:1,emoji:'🟤'},
{id:839,name:'Fico d india',cat:'Frutta',e:41,p:.7,c:9.6,s:5.9,f:.5,fi:3.6,sa:0,na:5,emoji:'🌵'},
{id:840,name:'Guava',cat:'Frutta',e:68,p:2.6,c:14.3,s:8.9,f:1,fi:5.4,sa:.3,na:2,emoji:'🟢'},
{id:841,name:'Maracuja (frutto della passione)',cat:'Frutta',e:97,p:2.2,c:23.4,s:11.2,f:.7,fi:10.4,sa:0,na:28,emoji:'🟡'},
{id:842,name:'Mandarancio',cat:'Frutta',e:45,p:.8,c:11.1,s:9.2,f:.2,fi:2,sa:0,na:2,emoji:'🍊'},
{id:843,name:'Prugne secche',cat:'Frutta',e:240,p:2.2,c:63.9,s:38.1,f:.4,fi:7.1,sa:.1,na:1,emoji:'🟣'},
{id:844,name:'Fichi secchi',cat:'Frutta',e:249,p:3.3,c:63.9,s:47.9,f:.9,fi:9.8,sa:.2,na:10,emoji:'🟤'},
/* ══ CEREALI ══ */
{id:850,name:'Pasta di farro cotta',cat:'Cereali',e:144,p:5.5,c:28.5,s:.5,f:.8,fi:3.8,sa:.1,na:3,emoji:'🍝'},
{id:851,name:'Pasta di kamut cotta',cat:'Cereali',e:135,p:5.5,c:26,s:.5,f:.7,fi:2.5,sa:.1,na:2,emoji:'🍝'},
{id:852,name:'Pasta di riso cotta',cat:'Cereali',e:128,p:2.5,c:28,s:0,f:.5,fi:.5,sa:.1,na:2,emoji:'🍝'},
{id:853,name:'Pasta di mais cotta',cat:'Cereali',e:132,p:2.3,c:29,s:.5,f:.4,fi:1.5,sa:.1,na:3,emoji:'🍝'},
{id:854,name:'Amaranto cotto',cat:'Cereali',e:102,p:3.8,c:18.7,s:.5,f:1.6,fi:2.1,sa:.4,na:6,emoji:'🌾'},
{id:855,name:'Miglio cotto',cat:'Cereali',e:119,p:3.5,c:23.7,s:.2,f:1,fi:1.3,sa:.2,na:2,emoji:'🌾'},
{id:856,name:'Sorgo cotto',cat:'Cereali',e:110,p:3.6,c:22.6,s:0,f:1.2,fi:1.5,sa:.2,na:2,emoji:'🌾'},
{id:857,name:'Teff cotto',cat:'Cereali',e:101,p:3.9,c:19.9,s:.3,f:.7,fi:2.8,sa:.1,na:4,emoji:'🌾'},
{id:858,name:'Grano saraceno cotto',cat:'Cereali',e:92,p:3.4,c:19.9,s:.9,f:.6,fi:2.7,sa:.1,na:4,emoji:'🌾'},
{id:859,name:'Maccheroni al formaggio (mac & cheese)',cat:'Cereali',e:189,p:7.5,c:27.5,s:2.5,f:6,fi:1,sa:3.5,na:480,emoji:'🧀'},
{id:860,name:'Gnocchi di patate al ragù',cat:'Cereali',e:198,p:9.5,c:27,s:2.5,f:6,fi:2,sa:2.5,na:450,emoji:'🥟'},
/* ══ LEGUMI ══ */
{id:865,name:'Cicerchie cotte',cat:'Legumi',e:124,p:9.5,c:22.5,s:1.5,f:.5,fi:7,sa:.1,na:5,emoji:'🫘'},
{id:866,name:'Lenticchie rosse cotte',cat:'Legumi',e:127,p:9.5,c:22,s:1.5,f:.4,fi:5,sa:.1,na:2,emoji:'🫘'},
{id:867,name:'Fagioli azuki cotti',cat:'Legumi',e:128,p:7.5,c:25,s:0,f:.1,fi:7.3,sa:0,na:8,emoji:'🫘'},
{id:868,name:'Fagioli dall occhio cotti',cat:'Legumi',e:116,p:7.7,c:20.8,s:3.3,f:.5,fi:6.5,sa:.1,na:4,emoji:'🫘'},
{id:869,name:'Ceci verdi germinati',cat:'Legumi',e:122,p:9,c:19,s:3,f:2.6,fi:7,sa:.3,na:7,emoji:'🌱'},
/* ══ PESCE ══ */
{id:875,name:'Anguilla affumicata',cat:'Pesce',e:292,p:18.4,c:0,s:0,f:24.5,fi:0,sa:5,na:900,emoji:'🐟'},
{id:876,name:'Aragosta bollita',cat:'Pesce',e:98,p:20.5,c:.5,s:0,f:1.3,fi:0,sa:.3,na:380,emoji:'🦞'},
{id:877,name:'Astice bollito',cat:'Pesce',e:102,p:21,c:.5,s:0,f:1.5,fi:0,sa:.3,na:410,emoji:'🦞'},
{id:878,name:'Triglie al forno',cat:'Pesce',e:112,p:19.5,c:0,s:0,f:3.8,fi:0,sa:.9,na:82,emoji:'🐟'},
{id:879,name:'Spigola al vapore',cat:'Pesce',e:118,p:23,c:0,s:0,f:2.8,fi:0,sa:.6,na:88,emoji:'🐟'},
{id:880,name:'Dentice al forno',cat:'Pesce',e:117,p:22.5,c:0,s:0,f:2.9,fi:0,sa:.7,na:72,emoji:'🐟'},
{id:881,name:'Cernia al vapore',cat:'Pesce',e:106,p:20.5,c:0,s:0,f:2.5,fi:0,sa:.6,na:58,emoji:'🐟'},
{id:882,name:'Acciughe fresche',cat:'Pesce',e:131,p:20.4,c:0,s:0,f:5.5,fi:0,sa:1.3,na:120,emoji:'🐟'},
{id:883,name:'Alici marinate',cat:'Pesce',e:185,p:20.5,c:.5,s:0,f:11.5,fi:0,sa:2.8,na:520,emoji:'🐟'},
{id:884,name:'Bottarga di muggine',cat:'Pesce',e:305,p:37,c:0,s:0,f:17,fi:0,sa:4,na:900,emoji:'🐟'},
{id:885,name:'Pesce spada in umido',cat:'Pesce',e:148,p:22.5,c:2,s:1,f:5.5,fi:.5,sa:1.6,na:220,emoji:'🐟'},
{id:886,name:'Stoccafisso ammollato cotto',cat:'Pesce',e:128,p:28.5,c:0,s:0,f:1.2,fi:0,sa:.3,na:580,emoji:'🐟'},
/* ══ CARNE ══ */
{id:890,name:'Cinghiale stufato',cat:'Carne',e:175,p:28.5,c:0,s:0,f:6.5,fi:0,sa:2,na:72,emoji:'🐗'},
{id:891,name:'Piccione arrosto',cat:'Carne',e:294,p:20.5,c:0,s:0,f:23.5,fi:0,sa:7,na:65,emoji:'🐦'},
{id:892,name:'Quaglia arrostita',cat:'Carne',e:235,p:29,c:0,s:0,f:13.5,fi:0,sa:4,na:68,emoji:'🐦'},
{id:893,name:'Faraona al forno',cat:'Carne',e:190,p:27,c:0,s:0,f:9,fi:0,sa:2.8,na:58,emoji:'🐔'},
{id:894,name:'Rognone di vitello',cat:'Carne',e:135,p:18,c:1.5,s:0,f:6,fi:0,sa:1.9,na:280,emoji:'🥩'},
{id:895,name:'Cervello di vitello',cat:'Carne',e:148,p:10.5,c:0,s:0,f:12,fi:0,sa:3,na:126,emoji:'🥩'},
{id:896,name:'Guanciale di maiale',cat:'Carne',e:655,p:12.5,c:0,s:0,f:68.5,fi:0,sa:26,na:1200,emoji:'🥓'},
{id:897,name:'Lardo di Colonnata IGP',cat:'Salumi',e:891,p:3,c:0,s:0,f:99,fi:0,sa:38,na:700,emoji:'🥓'},
{id:898,name:'Culatello di Zibello DOP',cat:'Salumi',e:198,p:28.5,c:.5,s:0,f:9.5,fi:0,sa:3.2,na:2200,emoji:'🥩'},
{id:899,name:'Porchetta di Ariccia',cat:'Salumi',e:360,p:25,c:0,s:0,f:29,fi:0,sa:10.5,na:1800,emoji:'🥩'},
/* ══ PIATTI ITALIANI ══ */
{id:905,name:'Brodetto di pesce adriatico',cat:'Piatti IT.',e:135,p:15.5,c:6.5,s:2.5,f:5,fi:1.5,sa:1.2,na:550,emoji:'🍲'},
{id:906,name:'Cicchetti veneziani misti',cat:'Piatti IT.',e:215,p:9,c:15,s:1.5,f:12.5,fi:1,sa:3.5,na:520,emoji:'🍢'},
{id:907,name:'Crostino toscano al fegatini',cat:'Piatti IT.',e:210,p:10,c:22,s:2,f:9,fi:1.5,sa:2.5,na:420,emoji:'🍞'},
{id:908,name:'Lampredotto fiorentino',cat:'Piatti IT.',e:145,p:18,c:5,s:1.5,f:6,fi:.5,sa:2,na:380,emoji:'🥩'},
{id:909,name:'Arrosticini abruzzesi (5 pz)',cat:'Piatti IT.',e:280,p:27.5,c:0,s:0,f:19,fi:0,sa:7.5,na:420,emoji:'🍢'},
{id:910,name:'Puccia pugliese con verdure',cat:'Piatti IT.',e:245,p:7.5,c:38,s:3,f:7.5,fi:2.5,sa:1.5,na:480,emoji:'🫓'},
{id:911,name:'Pitta nduja calabrese',cat:'Piatti IT.',e:390,p:14.5,c:40,s:2.5,f:19.5,fi:2,sa:7,na:890,emoji:'🌶️'},
{id:912,name:'Scacciata siciliana',cat:'Piatti IT.',e:310,p:10,c:42,s:3,f:12,fi:2.5,sa:4,na:620,emoji:'🍞'},
{id:913,name:'Sfincione palermitano',cat:'Piatti IT.',e:265,p:9.5,c:36,s:5,f:10,fi:2.5,sa:3.5,na:580,emoji:'🍕'},
{id:914,name:'Panino con la milza (vastedda)',cat:'Piatti IT.',e:315,p:18.5,c:28,s:2.5,f:12,fi:1.5,sa:4.5,na:760,emoji:'🥪'},
{id:915,name:'Testaroli al pesto ligure',cat:'Piatti IT.',e:190,p:5.5,c:28,s:.5,f:7,fi:1.5,sa:1.5,na:310,emoji:'🍝'},
{id:916,name:'Cjarsons (ravioli friulani)',cat:'Piatti IT.',e:225,p:8.5,c:31,s:4,f:8,fi:1.5,sa:3.5,na:380,emoji:'🥟'},
{id:917,name:'Strozzapreti al ragù bianco',cat:'Piatti IT.',e:248,p:12.5,c:27,s:1.5,f:9.5,fi:1.5,sa:3.5,na:420,emoji:'🍝'},
{id:918,name:'Vincisgrassi marchigiani',cat:'Piatti IT.',e:268,p:13,c:22,s:2.5,f:14,fi:1.5,sa:5.5,na:520,emoji:'🍲'},
{id:919,name:'Canederli trentini in brodo',cat:'Piatti IT.',e:165,p:7.5,c:18,s:1.5,f:7,fi:1,sa:3,na:520,emoji:'🍲'},
{id:920,name:'Paniscia novarese',cat:'Piatti IT.',e:172,p:7.5,c:24,s:1.5,f:5,fi:3.5,sa:1.5,na:380,emoji:'🍲'},
/* ══ CUCINA ETNICA ══ */
{id:930,name:'Pho ga (pollo) vietnamita',cat:'Etnica',e:115,p:10,c:12,s:1,f:2.8,fi:1,sa:.7,na:850,emoji:'🍜'},
{id:931,name:'Bibimbap con manzo',cat:'Etnica',e:230,p:13,c:30,s:3,f:7,fi:3,sa:2,na:720,emoji:'🍚'},
{id:932,name:'Nasi goreng indonesiano',cat:'Etnica',e:245,p:8.5,c:33,s:3.5,f:9,fi:2,sa:2.5,na:680,emoji:'🍳'},
{id:933,name:'Tom kha gai (zuppa thai)',cat:'Etnica',e:145,p:10.5,c:7.5,s:3.5,f:9,fi:1.5,sa:5.5,na:720,emoji:'🍲'},
{id:934,name:'Mole con pollo (messicano)',cat:'Etnica',e:215,p:19.5,c:12.5,s:4,f:10,fi:3,sa:2.5,na:380,emoji:'🍗'},
{id:935,name:'Empanada argentina (1pz)',cat:'Etnica',e:295,p:10,c:32,s:2.5,f:14.5,fi:1.5,sa:5.5,na:480,emoji:'🥙'},
{id:936,name:'Dolmades (involtini di vite)',cat:'Etnica',e:145,p:3.5,c:18.5,s:1.5,f:6.5,fi:2,sa:1,na:380,emoji:'🍃'},
{id:937,name:'Spanakopita (torta spinaci)',cat:'Etnica',e:265,p:8.5,c:22.5,s:1.5,f:16,fi:2,sa:7,na:480,emoji:'🥧'},
{id:938,name:'Moussaka greca',cat:'Etnica',e:215,p:11.5,c:13.5,s:5,f:13,fi:2.5,sa:5.5,na:380,emoji:'🍆'},
{id:939,name:'Ceviche peruviano',cat:'Etnica',e:98,p:15.5,c:6,s:2,f:2.5,fi:1,sa:.6,na:420,emoji:'🐟'},
{id:940,name:'Injera (pane etiope)',cat:'Etnica',e:166,p:5.8,c:35,s:.5,f:1,fi:3.3,sa:.2,na:8,emoji:'🫓'},
{id:941,name:'Daal di lenticchie indiano',cat:'Etnica',e:135,p:8.5,c:20.5,s:2.5,f:3,fi:5.5,sa:.8,na:420,emoji:'🫘'},
{id:942,name:'Biryani di pollo',cat:'Etnica',e:250,p:16,c:32,s:2,f:7,fi:2.5,sa:2,na:580,emoji:'🍛'},
/* ══ FAST FOOD ITALIANO ══ */
{id:950,name:'Piadina con squacquerone e rucola',cat:'Fast Food',e:335,p:14,c:38,s:3,f:14.5,fi:2,sa:5,na:720,emoji:'🫓'},
{id:951,name:'Panino con porchetta',cat:'Fast Food',e:385,p:20.5,c:35,s:2.5,f:17.5,fi:1.5,sa:6.5,na:980,emoji:'🥩'},
{id:952,name:'Tramezzino caprese',cat:'Fast Food',e:290,p:11.5,c:28,s:3.5,f:14,fi:1.5,sa:5.5,na:480,emoji:'🥪'},
{id:953,name:'Calzone al forno',cat:'Fast Food',e:268,p:11.5,c:35,s:3,f:9,fi:2,sa:4.5,na:620,emoji:'🍕'},
{id:954,name:'Schiacciata con prosciutto',cat:'Fast Food',e:320,p:15.5,c:38,s:2,f:11.5,fi:1.5,sa:4.5,na:880,emoji:'🥪'},
{id:955,name:'Panzarotti fritti 1pz',cat:'Fast Food',e:310,p:9,c:38,s:4,f:13,fi:1.5,sa:5,na:540,emoji:'🫓'},
{id:956,name:'Olive ascolane fritte (5pz)',cat:'Fast Food',e:275,p:9,c:22,s:1.5,f:17,fi:1.5,sa:4.5,na:480,emoji:'🫒'},
{id:957,name:'Gnocco fritto emiliano (3pz)',cat:'Fast Food',e:355,p:7.5,c:44,s:1.5,f:16.5,fi:1.5,sa:3.5,na:520,emoji:'🍞'},
/* ══ DOLCI TIPICI REGIONALI ══ */
{id:960,name:'Mostaccioli napoletani',cat:'Dolci',e:380,p:5.5,c:64,s:38,f:12,fi:2.5,sa:3.5,na:120,emoji:'🍪'},
{id:961,name:'Ricciarelli di Siena DOP',cat:'Dolci',e:432,p:8.5,c:67,s:55,f:16.5,fi:3.5,sa:.5,na:30,emoji:'🍪'},
{id:962,name:'Panforte di Siena',cat:'Dolci',e:368,p:6,c:67,s:52,f:10.5,fi:4,sa:1,na:40,emoji:'🍬'},
{id:963,name:'Torrone alle mandorle morbido',cat:'Dolci',e:410,p:9,c:62,s:52,f:16,fi:2.5,sa:1,na:60,emoji:'🍬'},
{id:964,name:'Struffoli napoletani (100g)',cat:'Dolci',e:410,p:6.5,c:56,s:22,f:18.5,fi:1,sa:7,na:95,emoji:'🍩'},
{id:965,name:'Cartellate pugliesi (100g)',cat:'Dolci',e:395,p:5.5,c:60,s:30,f:16,fi:2,sa:3.5,na:85,emoji:'🍪'},
{id:966,name:'Cassata siciliana (1 fetta)',cat:'Dolci',e:345,p:6.5,c:52,s:40,f:13.5,fi:1.5,sa:6.5,na:180,emoji:'🎂'},
{id:967,name:'Pastiera napoletana (1 fetta)',cat:'Dolci',e:310,p:8.5,c:43.5,s:20,f:12,fi:1.5,sa:5,na:220,emoji:'🥧'},
{id:968,name:'Gubana friulana (1 fetta)',cat:'Dolci',e:380,p:8,c:52,s:28,f:16.5,fi:2.5,sa:5.5,na:140,emoji:'🥐'},
{id:969,name:'Torta di tagliatelle mantovana',cat:'Dolci',e:420,p:8.5,c:58,s:32,f:18,fi:2.5,sa:7.5,na:120,emoji:'🎂'},
/* ══ CONFEZIONATI / SUPERMERCATO ══ */
{id:975,name:'Patatine al formaggio Fonzies (45g)',cat:'Snack',brand:'Fonzies',e:232,p:3.8,c:26.3,s:1.1,f:12.4,fi:1.1,na:369,emoji:'🌽'},
{id:976,name:'Barretta cereali merendina',cat:'Confezionati',brand:'Mulino Bianco',e:406,p:6,c:70,s:32,f:12,fi:2.5,sa:3.5,na:230,emoji:'🍘'},
{id:977,name:'Schiacciatine olio EVO Crich',cat:'Confezionati',brand:'Crich',e:452,p:9.5,c:68,s:3.5,f:16,fi:3,sa:2.5,na:680,emoji:'🍘'},
{id:978,name:'Biscotti al burro Bahlsen',cat:'Confezionati',brand:'Bahlsen',e:496,p:6.5,c:68.5,s:26,f:22,fi:1.5,sa:11.5,na:290,emoji:'🍪'},
{id:979,name:'Wafer vaniglia Loacker',cat:'Confezionati',brand:'Loacker',e:510,p:6.5,c:64.5,s:30,f:25.5,fi:1.5,sa:10.5,na:120,emoji:'🍫'},
{id:980,name:'Ciambellone all arancia (1 fetta)',cat:'Dolci',e:315,p:5.5,c:48,s:22,f:12,fi:.8,sa:3.5,na:180,emoji:'🍰'},
{id:981,name:'Plumcake yogurt (1 pz)',cat:'Confezionati',e:340,p:6,c:50,s:25,f:13,fi:.8,sa:3.5,na:210,emoji:'🧁'},
{id:982,name:'Brioche al burro Brioche Pasquier',cat:'Confezionati',brand:'Pasquier',e:380,p:7.5,c:54,s:18,f:15.5,fi:1.5,sa:7.5,na:350,emoji:'🥐'},
/* ══ SURGELATI ══ */
{id:985,name:'Cotolette vegetali (Quorn)',cat:'Surgelati',brand:'Quorn',e:240,p:14,c:19,s:2.5,f:11,fi:6.5,sa:2,na:410,emoji:'🌱'},
{id:986,name:'Burger vegetale Beyond Meat',cat:'Surgelati',brand:'Beyond Meat',e:250,p:20,c:8,s:0,f:18,fi:2,sa:5,na:370,emoji:'🍔'},
{id:987,name:'Bastoncini di pesce MSC Findus',cat:'Surgelati',brand:'Findus',e:218,p:12.5,c:17.5,s:.5,f:10.5,fi:1,sa:1.6,na:390,emoji:'🐟'},
{id:988,name:'Pizza surgelata 4 formaggi (Buitoni)',cat:'Surgelati',brand:'Buitoni',e:270,p:12,c:32,s:4,f:10,fi:2,sa:5.5,na:720,emoji:'🍕'},
{id:989,name:'Piadina surgelata',cat:'Surgelati',brand:'Aia',e:290,p:9,c:42,s:3,f:10,fi:2,na:540,emoji:'🫓'},
/* ══ BEVANDE ALCOLICHE ══ */
{id:992,name:'Negroni (1 bicchiere)',cat:'Bevande',e:195,p:0,c:11,s:8,f:0,fi:0,sa:0,na:8,emoji:'🍸'},
{id:993,name:'Whisky (4cl)',cat:'Bevande',e:95,p:0,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'🥃'},
{id:994,name:'Vodka (4cl)',cat:'Bevande',e:95,p:0,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'🥃'},
{id:995,name:'Rum (4cl)',cat:'Bevande',e:96,p:0,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'🥃'},
{id:996,name:'Grappa (4cl)',cat:'Bevande',e:100,p:0,c:0,s:0,f:0,fi:0,sa:0,na:1,emoji:'🥃'},
{id:997,name:'Amaro Montenegro (4cl)',cat:'Bevande',brand:'Montenegro',e:120,p:0,c:10.5,s:10.5,f:0,fi:0,sa:0,na:2,emoji:'🥃'},
{id:998,name:'Campari (4cl)',cat:'Bevande',brand:'Campari',e:115,p:0,c:9.5,s:9.5,f:0,fi:0,sa:0,na:2,emoji:'🍹'},
{id:999,name:'Limoncello (4cl)',cat:'Bevande',e:112,p:0,c:14,s:14,f:0,fi:0,sa:0,na:1,emoji:'🍋'},
/* ══ PASTA per tipo (cruda e cotta) ══ */
{id:1001,name:'Pasta di semola cruda',cat:'Cereali',e:353,p:12.5,c:70.2,s:2,f:1.4,fi:2.7,sa:.2,na:6,emoji:'🍝'},
{id:1002,name:'Pasta integrale cruda',cat:'Cereali',e:335,p:13.4,c:65.8,s:1.8,f:2.5,fi:8.4,sa:.4,na:8,emoji:'🍝'},
{id:1003,name:'Pasta di mais cruda (senza glutine)',cat:'Cereali',e:356,p:4.2,c:79,s:1.5,f:1.2,fi:3.5,sa:.2,na:5,emoji:'🍝'},
{id:1004,name:'Pasta di orzo cruda',cat:'Cereali',e:348,p:11.5,c:71,s:1.2,f:1.8,fi:5.5,sa:.3,na:4,emoji:'🍝'},
{id:1005,name:'Pasta di farro cruda',cat:'Cereali',e:342,p:14,c:68,s:1,f:2.2,fi:5,sa:.3,na:5,emoji:'🍝'},
{id:1006,name:'Pasta di lenticchie cruda',cat:'Cereali',e:340,p:22,c:57,s:2,f:2.5,fi:11,sa:.3,na:8,emoji:'🍝'},
{id:1007,name:'Pasta di ceci cruda',cat:'Cereali',e:335,p:20,c:56,s:2,f:3,fi:10,sa:.4,na:10,emoji:'🍝'},
{id:1008,name:'Pasta di kamut cruda',cat:'Cereali',e:350,p:13.5,c:70,s:1.5,f:2,fi:4,sa:.3,na:5,emoji:'🍝'},
{id:1009,name:'Pasta di riso cruda',cat:'Cereali',e:360,p:7,c:80,s:.5,f:.8,fi:2,sa:.1,na:5,emoji:'🍝'},
{id:1010,name:'Pasta di grano saraceno cruda',cat:'Cereali',e:338,p:12,c:70,s:1,f:2.5,fi:6,sa:.3,na:5,emoji:'🍝'},
{id:1011,name:'Pasta di soia cruda',cat:'Cereali',e:338,p:22,c:52,s:3,f:4,fi:9,sa:.5,na:8,emoji:'🍝'},
{id:1012,name:'Pasta di quinoa cruda',cat:'Cereali',e:358,p:11,c:72,s:1,f:2.5,fi:5,sa:.3,na:12,emoji:'🍝'},
/* ══ PASTA CONDITA (piatti pronti per porzione 200g circa) ══ */
{id:1020,name:'Pasta in bianco burro (porzione 200g)',cat:'Piatti IT.',e:460,p:12,c:70,s:2,f:14,fi:3,sa:8.5,na:180,emoji:'🍝'},
{id:1021,name:'Pasta in bianco olio EVO (porzione 200g)',cat:'Piatti IT.',e:470,p:12,c:70,s:2,f:16,fi:3,sa:2.2,na:8,emoji:'🍝'},
{id:1022,name:'Pasta al pomodoro (porzione 200g)',cat:'Piatti IT.',e:380,p:12,c:68,s:6,f:6,fi:4,sa:.9,na:380,emoji:'🍝'},
{id:1023,name:'Pasta al pesto (porzione 200g)',cat:'Piatti IT.',e:580,p:14,c:68,s:2,f:26,fi:4,sa:7,na:520,emoji:'🍝'},
{id:1024,name:'Pasta aglio olio (porzione 200g)',cat:'Piatti IT.',e:520,p:12,c:70,s:2,f:20,fi:3,sa:2.8,na:300,emoji:'🍝'},
{id:1025,name:'Pasta integrale in bianco burro (200g)',cat:'Piatti IT.',e:440,p:13,c:66,s:2,f:14,fi:8,sa:8.5,na:180,emoji:'🍝'},
{id:1026,name:'Pasta di mais in bianco burro (200g)',cat:'Piatti IT.',e:450,p:9,c:78,s:1.5,f:14,fi:4,sa:8.5,na:180,emoji:'🍝'},
/* ══ SELVAGGINA ══ */
{id:1030,name:'Cinghiale stufato',cat:'Carne',e:177,p:28,c:0,s:0,f:7,fi:0,sa:2,na:75,emoji:'🐗'},
{id:1031,name:'Capriolo arrosto',cat:'Carne',e:158,p:29,c:0,s:0,f:4.5,fi:0,sa:1.4,na:65,emoji:'🦌'},
{id:1032,name:'Capriolo stufato',cat:'Carne',e:164,p:28.5,c:1,s:0,f:5,fi:0,sa:1.5,na:70,emoji:'🦌'},
{id:1033,name:'Cervo arrosto',cat:'Carne',e:158,p:30,c:0,s:0,f:4,fi:0,sa:1.2,na:58,emoji:'🦌'},
{id:1034,name:'Lepre in salmì',cat:'Carne',e:192,p:25,c:2,s:0,f:9,fi:0,sa:2.5,na:80,emoji:'🐇'},
{id:1035,name:'Lepre arrosto',cat:'Carne',e:162,p:28,c:0,s:0,f:5,fi:0,sa:1.5,na:65,emoji:'🐇'},
{id:1036,name:'Coniglio arrosto',cat:'Carne',e:197,p:28,c:0,s:0,f:9.5,fi:0,sa:2.8,na:68,emoji:'🐇'},
{id:1037,name:'Coniglio in umido',cat:'Carne',e:176,p:26,c:1,s:0,f:7.5,fi:0,sa:2.2,na:75,emoji:'🐇'},
{id:1038,name:'Fagiano arrosto',cat:'Carne',e:180,p:27,c:0,s:0,f:8,fi:0,sa:2.3,na:60,emoji:'🦅'},
{id:1039,name:'Pernice arrosto',cat:'Carne',e:170,p:27.5,c:0,s:0,f:6.5,fi:0,sa:1.9,na:58,emoji:'🦅'},
{id:1040,name:'Daino arrosto',cat:'Carne',e:155,p:29.5,c:0,s:0,f:3.8,fi:0,sa:1.1,na:60,emoji:'🦌'},
{id:1041,name:'Alce (carne magra)',cat:'Carne',e:131,p:23,c:0,s:0,f:4,fi:0,sa:1.4,na:52,emoji:'🦌'},
{id:1042,name:'Bison / Bisonte',cat:'Carne',e:143,p:24,c:0,s:0,f:5,fi:0,sa:1.9,na:60,emoji:'🐃'},
/* ══ CEREALI E RISO ══ */
{id:1050,name:'Riso jasmine cotto',cat:'Cereali',e:129,p:2.7,c:27.5,s:.2,f:.4,fi:.4,sa:.1,na:5,emoji:'🍚'},
{id:1051,name:'Riso parboiled cotto',cat:'Cereali',e:133,p:2.9,c:28.5,s:.1,f:.3,fi:.5,sa:.1,na:3,emoji:'🍚'},
{id:1052,name:'Riso vialone nano cotto',cat:'Cereali',e:128,p:2.6,c:27.8,s:0,f:.3,fi:.4,sa:.1,na:2,emoji:'🍚'},
{id:1053,name:'Riso carnaroli cotto',cat:'Cereali',e:130,p:2.7,c:28.2,s:0,f:.3,fi:.4,sa:.1,na:2,emoji:'🍚'},
{id:1054,name:'Bulgur cotto',cat:'Cereali',e:83,p:3.1,c:18.6,s:.1,f:.2,fi:1.8,sa:.1,na:5,emoji:'🌾'},
{id:1055,name:'Kamut (grano Khorasan) cotto',cat:'Cereali',e:127,p:5,c:26.5,s:.5,f:.8,fi:2,sa:.1,na:4,emoji:'🌾'},
{id:1056,name:'Farro perlato cotto',cat:'Cereali',e:170,p:5.8,c:33.6,s:.4,f:.7,fi:3,sa:.1,na:4,emoji:'🌾'},
{id:1057,name:'Freekeh (grano verde) cotto',cat:'Cereali',e:130,p:5,c:26,s:.5,f:.5,fi:3.5,sa:.1,na:8,emoji:'🌾'},
/* ══ LEGUMI EXTRA ══ */
{id:1060,name:'Edamame freschi cotti',cat:'Legumi',e:121,p:11.9,c:8.9,s:2.2,f:5.2,fi:5.2,sa:.7,na:6,emoji:'🫛'},
{id:1061,name:'Lupini conservati',cat:'Legumi',e:114,p:15.6,c:9.9,s:.5,f:2.8,fi:5,sa:.4,na:400,emoji:'🟡'},
{id:1062,name:'Piselli freschi cotti',cat:'Legumi',e:84,p:5.4,c:15.6,s:5.5,f:.4,fi:5.1,sa:.1,na:2,emoji:'🫛'},
{id:1063,name:'Fave fresche cotte',cat:'Legumi',e:72,p:7.9,c:8.4,s:1.5,f:.5,fi:4.2,sa:.1,na:6,emoji:'🫘'},
{id:1064,name:'Soia gialla cotta',cat:'Legumi',e:173,p:16.6,c:9.9,s:3,f:9,fi:6,sa:1.3,na:2,emoji:'🫘'},
/* ══ VERDURE EXTRA ══ */
{id:1070,name:'Bieta da coste cotta',cat:'Verdure',e:19,p:1.8,c:3.4,s:.5,f:.2,fi:1.4,sa:0,na:225,emoji:'🥬'},
{id:1071,name:'Cavolo cappuccio crudo',cat:'Verdure',e:25,p:1.3,c:5.8,s:3.2,f:.1,fi:2.5,sa:0,na:18,emoji:'🥦'},
{id:1072,name:'Cavolo rosso crudo',cat:'Verdure',e:31,p:1.4,c:7.4,s:3.8,f:.2,fi:2.1,sa:0,na:27,emoji:'🟣'},
{id:1073,name:'Cavolo verza',cat:'Verdure',e:28,p:2,c:5.4,s:2.5,f:.3,fi:3.1,sa:0,na:12,emoji:'🥬'},
{id:1074,name:'Indivia riccia',cat:'Verdure',e:17,p:1.3,c:3.3,s:.5,f:.2,fi:1.5,sa:0,na:22,emoji:'🥬'},
{id:1075,name:'Sedano rapa cotto',cat:'Verdure',e:27,p:1.5,c:5.9,s:2.5,f:.3,fi:1.8,sa:0,na:88,emoji:'🟤'},
{id:1076,name:'Navone (rapa svedese)',cat:'Verdure',e:37,p:1.1,c:8.7,s:4.5,f:.2,fi:2.3,sa:0,na:20,emoji:'🟡'},
{id:1077,name:'Finocchi crudi',cat:'Verdure',e:31,p:1.2,c:7,s:3.9,f:.2,fi:3.1,sa:0,na:52,emoji:'🌿'},
{id:1078,name:'Broccoletti di rapa cotti',cat:'Verdure',e:22,p:2.2,c:2.4,s:1,f:.4,fi:2.8,sa:.1,na:18,emoji:'🥦'},
/* ══ CONDIMENTI E GRASSI ══ */
{id:1080,name:'Olio di cocco',cat:'Condimenti',e:862,p:0,c:0,s:0,f:100,fi:0,sa:86,na:0,emoji:'🥥'},
{id:1081,name:'Olio di avocado',cat:'Condimenti',e:884,p:0,c:0,s:0,f:100,fi:0,sa:14,na:0,emoji:'🥑'},
{id:1082,name:'Olio di sesamo',cat:'Condimenti',e:884,p:0,c:0,s:0,f:100,fi:0,sa:14.2,na:0,emoji:'🌱'},
{id:1083,name:'Aceto balsamico',cat:'Condimenti',e:88,p:.5,c:17.5,s:17,f:0,fi:0,sa:0,na:23,emoji:'🍶'},
{id:1084,name:'Salsa di pesce (nam pla)',cat:'Condimenti',e:35,p:5.1,c:3.6,s:3.4,f:.1,fi:0,sa:0,na:7851,emoji:'🫙'},
{id:1085,name:'Miso bianco',cat:'Condimenti',e:199,p:12,c:26,s:6,f:6,fi:3,sa:.8,na:3400,emoji:'🫙'},
{id:1086,name:'Concentrato di pomodoro',cat:'Condimenti',e:82,p:4.5,c:16.5,s:10,f:.5,fi:2.5,sa:.1,na:59,emoji:'🍅'},
/* ══ LATTICINI EXTRA ══ */
{id:1090,name:'Latte di capra intero',cat:'Latticini',e:69,p:3.6,c:4.5,s:4.5,f:4.2,fi:0,sa:2.7,na:50,emoji:'🥛'},
{id:1091,name:'Caciotta vaccina',cat:'Latticini',e:318,p:22,c:0,s:0,f:25.5,fi:0,sa:16,na:600,emoji:'🧀'},
{id:1092,name:'Scamorza',cat:'Latticini',e:334,p:24,c:.5,s:0,f:26,fi:0,sa:16.5,na:680,emoji:'🧀'},
{id:1093,name:'Burrata',cat:'Latticini',e:292,p:15,c:2,s:2,f:25,fi:0,sa:16,na:180,emoji:'🧀'},
{id:1094,name:'Skyr naturale',cat:'Latticini',e:63,p:11,c:4,s:4,f:.2,fi:0,sa:.1,na:50,emoji:'🫙'},
{id:1095,name:'Quark 0% grassi',cat:'Latticini',e:67,p:12,c:4,s:4,f:.2,fi:0,sa:.1,na:45,emoji:'🫙'},
{id:1096,name:'Panna da cucina 18%',cat:'Latticini',e:188,p:2.8,c:3.5,s:3.5,f:18,fi:0,sa:11.2,na:40,emoji:'🥛'},
{id:1097,name:'Panna montata 35%',cat:'Latticini',e:340,p:2.3,c:2.8,s:2.8,f:35,fi:0,sa:21.8,na:35,emoji:'🥛'},
/* ══ INTEGRATORI EXTRA ══ */
{id:1100,name:'Creatina monoidrato 5g',cat:'Sport',e:0,p:0,c:0,s:0,f:0,fi:0,sa:0,na:0,emoji:'💊'},
{id:1101,name:'BCAA polvere 10g',cat:'Sport',e:38,p:8,c:0,s:0,f:.5,fi:0,sa:.1,na:30,emoji:'💊'},
{id:1102,name:'Maltodestrine 30g',cat:'Sport',e:113,p:.3,c:27.6,s:.3,f:0,fi:0,sa:0,na:5,emoji:'⚡'},
{id:1103,name:'Gel energetico 30g',cat:'Sport',e:96,p:0,c:22,s:14,f:0,fi:0,sa:0,na:55,emoji:'⚡'},
/* ══ SALSE E SUGHI ══ */
{id:1110,name:'Ragù di carne (100g)',cat:'Condimenti',e:140,p:9,c:5,s:2,f:9.5,fi:1,sa:3.5,na:380,emoji:'🍖'},
{id:1111,name:'Sugo all\'arrabbiata (100g)',cat:'Condimenti',e:52,p:1.5,c:8,s:5,f:2,fi:1.5,sa:.3,na:480,emoji:'🍅'},
{id:1112,name:'Sugo ai funghi (100g)',cat:'Condimenti',e:58,p:2,c:6,s:3,f:3,fi:1.5,sa:.4,na:350,emoji:'🍄'},
{id:1113,name:'Crema di zucchine (100g)',cat:'Condimenti',e:45,p:1.5,c:4,s:2,f:2.5,fi:1,sa:.8,na:280,emoji:'🥒'},
]
/* ════════ SVG ICONS ════════ */
const ICO={
  diario:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="20" height="22" rx="2.5"/><line x1="9" y1="10" x2="19" y2="10"/><line x1="9" y1="14" x2="19" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/><circle cx="20" cy="21" r="5" fill="rgba(255,255,255,.15)" stroke="#fff" stroke-width="1.5"/><line x1="20" y1="19" x2="20" y2="23"/><line x1="18" y1="21" x2="22" y2="21"/></svg>`,
  alimenti:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><line x1="18.5" y1="18.5" x2="25" y2="25"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/></svg>`,
  piano:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="22" height="21" rx="2.5"/><line x1="3" y1="11" x2="25" y2="11"/><line x1="9" y1="3" x2="9" y2="7"/><line x1="19" y1="3" x2="19" y2="7"/><rect x="7" y="15" width="5" height="4" rx="1" fill="rgba(255,255,255,.25)"/><rect x="16" y="15" width="5" height="4" rx="1" fill="rgba(255,255,255,.25)"/></svg>`,
  workout:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="14" x2="7" y2="14"/><rect x="7" y="10" width="4" height="8" rx="2"/><line x1="11" y1="14" x2="17" y2="14"/><rect x="17" y="10" width="4" height="8" rx="2"/><line x1="21" y1="14" x2="26" y2="14"/><line x1="7" y1="12" x2="7" y2="16"/><line x1="21" y1="12" x2="21" y2="16"/></svg>`,
  profilo:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="9" r="5.5"/><path d="M4 26c0-5.5 4.5-10 10-10s10 4.5 10 10"/><polyline points="18,18 21,21 25,16"/></svg>`,
  setting:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="4.5"/><path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.9 5.9l2.8 2.8M19.3 19.3l2.8 2.8M22.1 5.9l-2.8 2.8M8.7 19.3l-2.8 2.8"/></svg>`,
  install:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16v6H8v-6"/><polyline points="14,5 14,18"/><polyline points="10,14 14,18 18,14"/></svg>`,
  riepilogo:`<svg viewBox="0 0 28 28" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="22" height="20" rx="2"/><line x1="3" y1="10" x2="25" y2="10"/><line x1="8" y1="15" x2="20" y2="15"/><line x1="8" y1="19" x2="16" y2="19"/></svg>`,
};

/* ════════ AUDIO ════════ */
let _audioCtx=null;
function getAudioCtx(){if(!_audioCtx){try{_audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){return null;}}return _audioCtx;}
function snd(type='click'){
  try{
    const ctx=getAudioCtx();if(!ctx)return;
    const osc=ctx.createOscillator(),gain=ctx.createGain();
    osc.connect(gain);gain.connect(ctx.destination);
    const now=ctx.currentTime;
    if(type==='confirm'){osc.frequency.setValueAtTime(520,now);osc.frequency.setValueAtTime(780,now+0.07);gain.gain.setValueAtTime(0.08,now);gain.gain.exponentialRampToValueAtTime(0.001,now+0.18);osc.start(now);osc.stop(now+0.18);}
    else if(type==='delete'){osc.frequency.setValueAtTime(400,now);osc.frequency.exponentialRampToValueAtTime(200,now+0.12);gain.gain.setValueAtTime(0.07,now);gain.gain.exponentialRampToValueAtTime(0.001,now+0.12);osc.start(now);osc.stop(now+0.12);}
    else{osc.type='sine';osc.frequency.setValueAtTime(600,now);osc.frequency.exponentialRampToValueAtTime(300,now+0.08);gain.gain.setValueAtTime(0.06,now);gain.gain.exponentialRampToValueAtTime(0.001,now+0.08);osc.start(now);osc.stop(now+0.08);}
  }catch(e){}
}

/* ════════ AUTH — Nome + PIN con SHA-256 ════════ */
let CUR=null;
const PKEY='nt_profiles_v10';
const CKEY='nt_cur_v10';

// SHA-256 nativo del browser (WebCrypto API)
async function sha256(str){
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

function getProfiles(){try{return JSON.parse(localStorage.getItem(PKEY)||'{}')}catch{return{}}}
function saveProfiles(p){try{localStorage.setItem(PKEY,JSON.stringify(p))}catch{}}
function stateKey(slug){return'nt_state_v10_'+slug;}

// PIN UI helpers
function pinFilter(el,idx){
  el.value=el.value.replace(/[^0-9]/g,'').slice(0,1);
  if(el.value&&idx<3){document.getElementById('pin'+(idx+1))?.focus();}
}
function pinBack(e,idx){
  if(e.key==='Backspace'&&!document.getElementById('pin'+idx).value&&idx>0){
    document.getElementById('pin'+(idx-1)).focus();
  }
}
function focusPin(){document.getElementById('pin0')?.focus();}
function onNameInput(){
  const name=(document.getElementById('l-name').value||'').trim();
  const profiles=getProfiles();
  const slug=slugify(name);
  const exists=profiles[slug];
  const hint=document.getElementById('l-pin-hint');
  const title=document.getElementById('l-form-title');
  if(hint&&title){
    if(exists){
      hint.textContent='Bentornato '+name.split(' ')[0]+'! Inserisci il tuo PIN';
      title.textContent='ACCEDI';
    } else if(name.length>=2){
      hint.textContent='Nuovo profilo — scegli 4 cifre da ricordare';
      title.textContent='REGISTRATI';
    }
  }
}
function slugify(name){return name.trim().toLowerCase().replace(/[^a-z0-9]/gi,'_').replace(/_+/g,'_').slice(0,30);}

function getPin(){
  return ['pin0','pin1','pin2','pin3'].map(id=>document.getElementById(id)?.value||'').join('');
}

async function doLogin(){
  const name=(document.getElementById('l-name').value||'').trim();
  const pin=getPin();
  const err=document.getElementById('l-err');
  if(!name||name.length<2){err.textContent='⚠ Inserisci il tuo nome';return;}
  if(pin.length<4){err.textContent='⚠ Inserisci il PIN a 4 cifre';return;}
  err.textContent='⌛ Verifica...';
  const slug=slugify(name);
  const pinHash=await sha256(slug+':'+pin);
  const profiles=getProfiles();
  if(profiles[slug]){
    // Profilo esistente: verifica PIN
    if(profiles[slug].pinHash!==pinHash){
      err.textContent='⚠ PIN errato';
      ['pin0','pin1','pin2','pin3'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
      document.getElementById('pin0')?.focus();
      return;
    }
  } else {
    // Nuovo profilo: salva
    profiles[slug]={name,slug,pinHash,created:new Date().toISOString()};
    saveProfiles(profiles);
  }
  err.textContent='';
  loginOk(slug,profiles[slug].name);
}


// ── RECUPERO PIN ──
function showForgotPin(){
  const name=(document.getElementById('l-name').value||'').trim();
  const slug=slugify(name);
  const profiles=getProfiles();
  let boxHTML='';
  if(!name||name.length<2){
    boxHTML=`<div class="modal-handle"></div>
      <div class="modal-title">🔑 Ripristina PIN</div>
      <div class="modal-sub">Inserisci prima il tuo nome nel campo in alto, poi tocca di nuovo "PIN dimenticato?".</div>
      <button class="conf-btn" onclick="closeModal()">✓ OK</button>`;
  } else if(!profiles[slug]){
    boxHTML=`<div class="modal-handle"></div>
      <div class="modal-title">🔑 Ripristina PIN</div>
      <div class="modal-sub">Nessun profilo trovato per <b>${name}</b>.<br>Verifica di aver scritto il nome correttamente.</div>
      <button class="conf-btn" onclick="closeModal()">✓ OK</button>`;
  } else {
    boxHTML=`<div class="modal-handle"></div>
      <div class="modal-title">🔑 Ripristina PIN</div>
      <div style="background:#fef3c7;border:1.5px solid #f59e0b;border-radius:var(--r);padding:12px 14px;margin-bottom:14px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:#92400e;line-height:1.6">
        ⚠️ Il PIN di <b>${name}</b> verrà azzerato.<br>
        <span style="color:#16a34a;font-weight:700">✅ Tutti i tuoi dati NutriTrack rimarranno intatti.</span><br>
        Al prossimo accesso potrai scegliere un nuovo PIN.
      </div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);margin-bottom:14px;text-align:center">Il PIN è cifrato e non può essere recuperato, solo reimpostato.</div>
      <button class="conf-btn green-btn" onclick="doResetPin('${slug}','${name}')">🔓 SÌ, REIMPOSTA IL PIN</button>
      <button class="conf-btn" style="margin-top:8px;background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)" onclick="closeModal()">✕ ANNULLA</button>`;
  }
  document.getElementById('modal-box').innerHTML=boxHTML;
  document.getElementById('modal').classList.add('open');
}
function doResetPin(slug,name){
  const profiles=getProfiles();
  if(!profiles[slug]){closeModal();return;}
  delete profiles[slug];
  saveProfiles(profiles);
  closeModal();
  ['pin0','pin1','pin2','pin3'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const err=document.getElementById('l-err');
  if(err){
    err.style.color='#4ade80';
    err.textContent='✅ PIN azzerato! Scegli un nuovo PIN per '+name.split(' ')[0]+'.';
    setTimeout(()=>{if(err){err.style.color='';err.textContent='';}},5000);
  }
  const hint=document.getElementById('l-pin-hint');
  if(hint)hint.textContent='Scegli un nuovo PIN a 4 cifre';
  document.getElementById('pin0')?.focus();
  renderLoginProfiles();
}

// Login rapido dai profili salvati (richiede PIN)
function loginBySlug(slug){
  const profiles=getProfiles();
  const p=profiles[slug];
  if(!p)return;
  // Mostra form con nome precompilato
  const nameEl=document.getElementById('l-name');
  if(nameEl){nameEl.value=p.name;onNameInput();}
  document.getElementById('pin0')?.focus();
  // Nascondi profili, mostra form
  const lp=document.getElementById('l-profiles');
  const lo=document.getElementById('l-or');
  const lf=document.getElementById('l-form-card');
  if(lp)lp.style.display='none';
  if(lo)lo.style.display='none';
  // Scroll al form
  setTimeout(()=>document.getElementById('pin0')?.focus(),100);
}

function renderLoginProfiles(){
  const profiles=getProfiles();
  const keys=Object.keys(profiles);
  const wrap=document.getElementById('l-profiles');
  const grid=document.getElementById('l-profiles-grid');
  const or=document.getElementById('l-or');
  if(!wrap||!grid)return;
  if(keys.length===0){wrap.style.display='none';if(or)or.style.display='none';return;}
  wrap.style.display='block';if(or)or.style.display='flex';
  grid.innerHTML=keys.map(k=>{
    const p=profiles[k];
    const initials=p.name.trim().split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
    return `<div class="l-profile-btn" onclick="loginBySlug('${k}')">
      <div class="l-profile-avatar">${initials}</div>
      <div class="l-profile-name">${p.name.split(' ')[0]}</div>
    </div>`;
  }).join('');
}

function loginOk(slug,name){
  CUR={slug,name};
  try{localStorage.setItem(CKEY,JSON.stringify(CUR));}catch(e){console.error('[NT] Cannot save session:',e);}
  const loginScr=document.getElementById('login-scr');
  const appWrap=document.getElementById('app-wrap');
  const avatar=document.getElementById('hdr-avatar');
  if(!loginScr||!appWrap||!avatar){setTimeout(()=>loginOk(slug,name),50);return;}
  loginScr.style.display='none';
  appWrap.style.display='flex';
  avatar.textContent=name.trim()[0].toUpperCase();
  loadState();
  navInit();
}

function showAvatarMenu(){
  const tot=totDay();const burned=totBurnedToday();const pct=Math.min(100,Math.round(tot.e/(S.settings.kcal||2000)*100));
  const str=calcStreak();
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="background:var(--ink);margin:-18px -18px 16px;padding:20px 18px;border-radius:16px 16px 0 0;display:flex;align-items:center;gap:14px">
      <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;flex-shrink:0;border:2px solid rgba(255,255,255,.2)">${CUR.name.trim()[0].toUpperCase()}</div>
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:16px;font-weight:700;color:#fff">${CUR.name}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:rgba(255,255,255,.4);margin-top:2px">${str>=2?'🔥 '+str+' giorni streak · ':'' }${tot.e} kcal oggi</div></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="background:var(--greenl);border:1.5px solid #86efac;border-radius:var(--rk);padding:12px;text-align:center">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:var(--greend)">${pct}%</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--greend);opacity:.7">OBIETTIVO KCAL</div>
      </div>
      <div style="background:#eff6ff;border:1.5px solid #93c5fd;border-radius:var(--rk);padding:12px;text-align:center">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:#1d4ed8">${tot.p}g</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:#1d4ed8;opacity:.7">PROTEINE OGGI</div>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:7px">
      <button class="big-btn" style="margin:0;border-radius:var(--rk)" onclick="closeModal();snd();bnavGo(showProfilo,'profilo')">👤 VAI AL PROFILO</button>
      <button class="big-btn" style="margin:0;border-radius:var(--rk)" onclick="closeModal();snd();navPush(showImpostazioni)">⚙️ IMPOSTAZIONI</button>
      <button class="big-btn outline" style="margin:0;border-radius:var(--rk)" onclick="closeModal();snd();exportData()">💾 BACKUP DATI</button>
      <button class="big-btn danger" style="margin:0;border-radius:var(--rk)" onclick="closeModal();snd('delete');showLogout()">🚪 ESCI</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
}

function showLogout(){
  if(confirm('Esci da '+CUR.name+'? I dati rimangono salvati.')){
    saveState();CUR=null;
    try{localStorage.removeItem(CKEY);}catch{}
    const appWrap=document.getElementById('app-wrap');
    const loginScr=document.getElementById('login-scr');
    if(appWrap)appWrap.style.display='none';
    if(loginScr)loginScr.style.display='flex';
    ['pin0','pin1','pin2','pin3'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
    const nameEl=document.getElementById('l-name');if(nameEl)nameEl.value='';
    const errEl=document.getElementById('l-err');if(errEl)errEl.textContent='';
    try{renderLoginProfiles();}catch(e){}
    // Mostra profili di nuovo
    const lp=document.getElementById('l-profiles');
    const lo=document.getElementById('l-or');
    if(lp&&Object.keys(getProfiles()).length>0){lp.style.display='block';if(lo)lo.style.display='flex';}
  }
}

// Auto-login: aspetta DOM
function initApp(){
  try{renderLoginProfiles();}catch(e){}
  try{
    const c=JSON.parse(localStorage.getItem(CKEY)||'null');
    if(c&&c.slug){
      const profiles=getProfiles();
      if(profiles[c.slug]){loginOk(c.slug,profiles[c.slug].name);return;}
      else{localStorage.removeItem(CKEY);}
    }
  }catch(e){console.warn('[NT] Auto-login error:',e);}
}
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',initApp);
}else{
  initApp();
}


/* ════════ SUPABASE SYNC (opzionale) ════════
   Configura il tuo progetto Supabase in IMPOSTAZIONI
   per sincronizzare i dati su tutti i tuoi dispositivi.
   Senza configurazione, l'app funziona normalmente con localStorage.
   ════════════════════════════════════════════ */

const SB={
  url: null,    // es: 'https://xxxx.supabase.co'
  key: null,    // anon/public key
  enabled: false,
  syncing: false
};

function initSupabase(url,key){
  SB.url=url;SB.key=key;SB.enabled=!!(url&&key);
  try{
    localStorage.setItem('nt_sb_url',url||'');
    localStorage.setItem('nt_sb_key',key||'');
  }catch(e){}
  updateSyncStatus();
}

function loadSupabaseConfig(){
  try{
    const url=localStorage.getItem('nt_sb_url')||'';
    const key=localStorage.getItem('nt_sb_key')||'';
    if(url&&key){SB.url=url;SB.key=key;SB.enabled=true;}
  }catch(e){}
}

function updateSyncStatus(){
  const el=document.getElementById('storage-status');
  if(!el)return;
  if(SB.enabled){
    el.textContent='☁️ Supabase sync';
    el.style.color='#86efac';
  } else {
    el.textContent='💾 locale';
    el.style.color='rgba(255,255,255,.4)';
  }
}

async function sbRequest(method,path,body){
  if(!SB.enabled)return null;
  try{
    const res=await fetch(SB.url+'/rest/v1/'+path,{
      method,
      headers:{
        'apikey':SB.key,
        'Authorization':'Bearer '+SB.key,
        'Content-Type':'application/json',
        'Prefer': method==='POST'?'resolution=merge-duplicates':''
      },
      body:body?JSON.stringify(body):undefined
    });
    if(!res.ok){console.warn('[NT] Supabase error:',res.status);return null;}
    return method==='GET'?await res.json():true;
  }catch(e){console.warn('[NT] Supabase fetch error:',e);return null;}
}

async function sbSave(){
  if(!SB.enabled||!CUR)return;
  SB.syncing=true;
  const payload={
    slug: CUR.slug,
    name: CUR.name,
    data: JSON.stringify(S),
    updated_at: new Date().toISOString()
  };
  await sbRequest('POST','nutritrack_data',payload);
  SB.syncing=false;
  const el=document.getElementById('storage-status');
  if(el){el.textContent='☁️ Sincronizzato ✓';setTimeout(()=>updateSyncStatus(),2000);}
}

async function sbLoad(){
  if(!SB.enabled||!CUR)return false;
  const res=await sbRequest('GET','nutritrack_data?slug=eq.'+encodeURIComponent(CUR.slug)+'&limit=1');
  if(!res||!res.length)return false;
  try{
    const remote=JSON.parse(res[0].data);
    const remoteDate=new Date(res[0].updated_at||0);
    // Usa i dati più recenti
    const localRaw=localStorage.getItem(stateKey(CUR.slug));
    const localDate=localRaw?new Date(JSON.parse(localRaw)._savedAt||0):new Date(0);
    if(remoteDate>localDate){
      S=Object.assign(S,remote);
      console.log('[NT] Loaded from Supabase (more recent)');
    }
    return true;
  }catch(e){console.warn('[NT] sbLoad parse error:',e);return false;}
}

/* ════════ STATE ════════ */
const TODAY=new Date().toISOString().slice(0,10);
const MK=['colazione','spuntino','pranzo','merenda','cena'];
const MM={colazione:{label:'Colazione',ico:'☕',cls:'col',color:'#d97706'},spuntino:{label:'Spuntino',ico:'🥐',cls:'spu',color:'#f59e0b'},pranzo:{label:'Pranzo',ico:'🍽',cls:'pran',color:'#16a34a'},merenda:{label:'Merenda',ico:'🍎',cls:'mer',color:'#dc2626'},cena:{label:'Cena',ico:'🌙',cls:'cena',color:'#2563eb'}};
let S={meals:{colazione:[],spuntino:[],pranzo:[],merenda:[],cena:[]},water:0,lastMealDate:TODAY,calPlans:{},workouts:{},mealHistory:{},recentFoods:[],customFoods:[],recipes:[],profile:{entries:[],nome:'',eta:'',sesso:'m',altezza:'',obiettivo:'mantenimento',attivita:'moderata'},settings:{kcal:2000,protPct:25}};

function saveState(){
  if(!CUR)return;
  if(!S.mealHistory)S.mealHistory={};
  const hasPasti=MK.some(k=>(S.meals[k]||[]).length>0);
  if(hasPasti){S.mealHistory[TODAY]=JSON.parse(JSON.stringify(S.meals));S.lastMealDate=TODAY;}
  try{
  S._savedAt=new Date().toISOString();
    const payload=JSON.stringify(S);
    localStorage.setItem(stateKey(CUR.slug),payload);
  }catch(e){
    console.error('[NT] saveState error:',e);
    // localStorage pieno? Pruning dati vecchi
    try{
      const cutoff=new Date();cutoff.setDate(cutoff.getDate()-60);
      const cutStr=cutoff.toISOString().slice(0,10);
      if(S.mealHistory)Object.keys(S.mealHistory).forEach(k=>{if(k<cutStr)delete S.mealHistory[k];});
      if(S.workouts)Object.keys(S.workouts).forEach(k=>{if(k<cutStr)delete S.workouts[k];});
      localStorage.setItem(stateKey(CUR.slug),JSON.stringify(S));
    }catch(e2){console.error('[NT] saveState fallback failed:',e2);}
  }
  // Sync su Supabase se configurato (asincrono, non blocca)
  if(SB&&SB.enabled){sbSave().catch(()=>{});}
}
function loadState(){
  try{
    // Prova prima localStorage (stabile su HTTPS/GitHub Pages)
    let raw=localStorage.getItem(stateKey(CUR.slug));
    // Fallback: sessionStorage
    if(!raw)raw=sessionStorage.getItem(stateKey(CUR.slug));
    if(!raw)return;
    const p=JSON.parse(raw);
    // Se i pasti sono di un giorno precedente, archiviali e azzera
    if(p.meals){
      const hasPastiOggi=Object.values(p.meals||{}).some(arr=>arr&&arr.length>0);
      const lastDay=p.lastMealDate||TODAY;
      if(lastDay!==TODAY&&hasPastiOggi){
        // Archivia i pasti del giorno precedente
        if(!p.mealHistory)p.mealHistory={};
        p.mealHistory[lastDay]=JSON.parse(JSON.stringify(p.meals));
        S.meals={colazione:[],spuntino:[],pranzo:[],merenda:[],cena:[]};
      } else {
        S.meals=Object.assign({colazione:[],spuntino:[],pranzo:[],merenda:[],cena:[]},p.meals);
      }
    }
    if(typeof p.water==='number')S.water=p.water;
    if(p.calPlans)S.calPlans=p.calPlans;
    if(p.workouts)S.workouts=p.workouts;
    if(p.profile)S.profile=Object.assign({entries:[],nome:'',eta:'',sesso:'m',altezza:'',obiettivo:'mantenimento',attivita:'moderata'},p.profile);
    if(p.settings)S.settings=Object.assign({kcal:2000,protPct:25},p.settings);
    if(p.mealHistory)S.mealHistory=p.mealHistory;
    if(p.recentFoods)S.recentFoods=p.recentFoods;
    if(p.lastMealDate)S.lastMealDate=p.lastMealDate;
    if(p.customFoods)S.customFoods=p.customFoods;
    if(p.recipes)S.recipes=p.recipes;
    if(p.settings?.pesoTarget)S.settings.pesoTarget=p.settings.pesoTarget;
  }catch(e){console.warn('[NT] loadState error',e);}
}
  // Carica config Supabase e prova sync
  loadSupabaseConfig();
  updateSyncStatus();
  if(SB.enabled){sbLoad().then(hasRemote=>{if(hasRemote){console.log("[NT] Supabase data loaded");}}).catch(()=>{});}


/* ════════ UTILS ════════ */
const TODAY_LABEL=new Date().toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long'});
function totDay(){
  let t={e:0,p:0,c:0,f:0,fi:0};
  MK.forEach(k=>(S.meals[k]||[]).forEach(it=>{const r=it.g/100;t.e+=it.food.e*r;t.p+=it.food.p*r;t.c+=it.food.c*r;t.f+=it.food.f*r;t.fi+=(it.food.fi||0)*r;}));
  return{e:Math.round(t.e),p:+(t.p.toFixed(1)),c:+(t.c.toFixed(1)),f:+(t.f.toFixed(1)),fi:+(t.fi.toFixed(1))};
}
function mBar(lbl,v,mx,col){
  const pct=mx>0?Math.min(100,Math.round(v/mx*100)):0;
  return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:11px;margin-bottom:3px"><span style="font-weight:700">${lbl}</span><span style="color:var(--ink3)">${v} / ${mx} · ${pct}%</span></div><div class="bar-wrap"><div class="bar-fill" style="width:${pct}%;background:${col}"></div></div></div>`;
}
function fmtDate(ds){try{return new Date(ds+'T12:00:00').toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long'});}catch{return ds;}}
function setHdr(title,sub,back){
  document.getElementById('hdr-title').textContent=title;
  document.getElementById('hdr-sub').textContent=sub||'';
  document.getElementById('back-btn').style.display=back?'flex':'none';
  // Bottom nav always visible
}
function resetScreen(){
  const s=document.getElementById('screen');
  s.style.display='';s.style.flexDirection='';s.style.overflow='';
  s.scrollTop=0;
  fabHide();
  // Always keep header progress bar current
  setTimeout(()=>{
    const pb=document.getElementById('hdr-progress');
    if(!pb||!S||!S.settings)return;
    const tot=totDay();const burned=totBurnedToday();
    const pct=Math.min(100,Math.round(tot.e/S.settings.kcal*100));
    pb.style.width=pct+'%';
    pb.className='kcal-progress-fill'+(pct>=100?' over':pct>=85?' warn':'');
  },30);
}
function toggleWater(i){S.water=(S.water===i+1)?i:i+1;saveState();const ml=S.water*250;showToast(S.water===0?"💧 Acqua azzerata":"💧 "+ml+"ml — "+S.water+" bicchieri");navReplace(showHome);}

/* ════════ SPORT / CALORIE ════════ */
const WT=['Tutti','Forza','Cardio','HIIT','Stretching','Yoga','Calcio','Nuoto','Ciclismo','Tennis','Basket','Corsa','Camminata','Boxe','Pilates','Altro'];
const WI={Forza:'🏋️',Cardio:'🏃',HIIT:'⚡',Stretching:'🧘',Yoga:'🌿',Calcio:'⚽',Nuoto:'🏊',Ciclismo:'🚴',Tennis:'🎾',Basket:'🏀',Corsa:'🏃',Camminata:'🚶',Boxe:'🥊',Pilates:'🤸',Altro:'🏅'};

/* ══════════════════════════════════════════════════
   DATABASE ESERCIZI (ispirato a MuscleWiki)
   ══════════════════════════════════════════════════ */
const EXDB=[
// ── PETTO ──
{id:1,name:'Panca Piana con Bilanciere',muscle:'Petto',sec:['Tricipiti','Spalle'],equip:'Bilanciere',diff:'i',sets:'3-4',reps:'6-10',rest:'90-120s',emoji:'🏋️',desc:'Il fondamentale per il petto. Stenditi sulla panca, afferra il bilanciere con presa larga, abbassa lentamente al petto e spingi verso l\'alto in modo esplosivo. Mantieni i piedi piatti a terra e un arco lombare naturale.',tips:['Tieni i piedi piatti a terra per stabilità','Arco lombare naturale, non esagerato','Presa larga quanto spalle o leggermente più','Abbassa controllato, spingi esplosivo']},
{id:2,name:'Panca Inclinata con Manubri',muscle:'Petto',sec:['Tricipiti','Spalle'],equip:'Manubri',diff:'i',sets:'3',reps:'8-12',rest:'60-90s',emoji:'🏋️',desc:'Sviluppa il petto superiore (clavicolare). Panca inclinata 30-45°. Il range of motion maggiore rispetto al bilanciere permette una contrazione più intensa.',tips:['Angolo 30-45° per massimizzare il petto superiore','Non bloccare i gomiti in estensione','Porta i manubri quasi a toccarsi in cima']},
{id:3,name:'Croci ai Cavi',muscle:'Petto',sec:['Spalle'],equip:'Cavi',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🔌',desc:'Isola il petto con tensione costante. Stai al centro del cavo incrociato, porta le mani verso il basso e al centro incrociando leggermente le braccia.',tips:['Tieni un leggero arco al gomito','Focalizzati sulla contrazione del petto','Controlla la fase di ritorno']},
{id:4,name:'Piegamenti Sulle Braccia',muscle:'Petto',sec:['Tricipiti','Spalle','Addome'],equip:'Corpo Libero',diff:'p',sets:'3-4',reps:'8-20',rest:'60s',emoji:'🤸',desc:'Classico esercizio a corpo libero. Mani leggermente più larghe delle spalle, corpo rigido. Perfetto per tutti i livelli.',tips:['Mantieni il core teso durante tutto il movimento','Punta le dita in avanti o leggermente verso fuori','Scendi fino a quasi toccare il pavimento']},
{id:5,name:'Dip alle Parallele',muscle:'Petto',sec:['Tricipiti','Spalle'],equip:'Sbarra',diff:'i',sets:'3-4',reps:'8-12',rest:'90s',emoji:'💪',desc:'Esercizio composito eccellente. Inclina leggermente il busto in avanti (15-30°) per enfatizzare il petto rispetto ai tricipiti.',tips:['Inclina il corpo in avanti per più petto','Scendi fino a quando le braccia formano 90°','Controlla bene la fase di discesa']},
{id:6,name:'Panca Piana con Manubri',muscle:'Petto',sec:['Tricipiti','Spalle'],equip:'Manubri',diff:'p',sets:'3',reps:'8-12',rest:'90s',emoji:'🏋️',desc:'Variante con range of motion maggiore rispetto al bilanciere. Permette di scendere più in basso per un allungamento ottimale del petto.',tips:['Porta i manubri in basso quasi all\'altezza del petto','Stringi in cima per massimizzare la contrazione']},
{id:7,name:'Pullover con Manubrio',muscle:'Petto',sec:['Schiena','Tricipiti'],equip:'Manubri',diff:'i',sets:'3',reps:'10-12',rest:'60s',emoji:'🏋️',desc:'Allarga la cassa toracica e sviluppa la parte bassa del petto. Schiena sulla panca, porta il manubrio dietro la testa e riportalo sopra.',tips:['Gomiti leggermente piegati','Senti l\'allungamento del petto e dei dorsali','Respira profondamente durante il movimento']},
{id:8,name:'Chest Press alla Macchina',muscle:'Petto',sec:['Tricipiti','Spalle'],equip:'Macchine',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🔩',desc:'Versione sicura e guidata della panca piana, ideale per principianti o per finire l\'allenamento con volume aggiuntivo.',tips:['Regola il sedile per avere maniglie all\'altezza del petto','Tieni la schiena incollata allo schienale']},
// ── SCHIENA ──
{id:10,name:'Stacco da Terra',muscle:'Schiena',sec:['Gambe','Glutei','Addome'],equip:'Bilanciere',diff:'a',sets:'3-5',reps:'3-8',rest:'3-4min',emoji:'🏋️',desc:'Il re degli esercizi. Afferra il bilanciere, schiena dritta e neutra, spingi i piedi a terra e solleva il bilanciere radendolo alle gambe. Lavora quasi tutto il corpo.',tips:['Schiena SEMPRE neutra, mai curvata','Torace alto, addome contratto prima di sollevare','Bilanciere vicino al corpo durante tutto il movimento','Impara la tecnica prima di aggiungere peso']},
{id:11,name:'Trazioni alla Sbarra',muscle:'Schiena',sec:['Bicipiti','Spalle'],equip:'Sbarra',diff:'i',sets:'3-4',reps:'5-12',rest:'90s',emoji:'🏅',desc:'Fondamentale per la schiena. Afferra la sbarra con presa prona, tira su finché il mento supera la sbarra. Presa larga = più dorsali.',tips:['Presa larga lavora più dorsali, stretta più bicipiti','Non oscillare: usa i muscoli della schiena','Abbassa completamente le braccia nella fase di rilascio']},
{id:12,name:'Lat Machine',muscle:'Schiena',sec:['Bicipiti','Spalle'],equip:'Macchine',diff:'p',sets:'3-4',reps:'8-12',rest:'60-90s',emoji:'🔩',desc:'Alternativa alle trazioni per chi non riesce a farle. Tira la barra verso il petto/mento enfatizzando il lavoro dei dorsali.',tips:['Inclinati leggermente all\'indietro (10-15°)','Porta la barra verso il petto superiore','Spingi i gomiti verso il basso e verso le anche']},
{id:13,name:'Rematore con Bilanciere',muscle:'Schiena',sec:['Bicipiti','Spalle Post.'],equip:'Bilanciere',diff:'i',sets:'3-4',reps:'6-10',rest:'90s',emoji:'🏋️',desc:'Costruisce spessore della schiena. Busto parallelo al pavimento, tira il bilanciere verso l\'ombelico contraendo le scapole.',tips:['Schiena dritta, inclinata in avanti ~45°','Non usare le gambe per aiutarti','Porta i gomiti vicino al corpo']},
{id:14,name:'Rematore con Manubrio',muscle:'Schiena',sec:['Bicipiti','Spalle Post.'],equip:'Manubri',diff:'p',sets:'3',reps:'8-12',rest:'60s',emoji:'🏋️',desc:'Variante unilaterale per un lavoro isolato su ogni lato. Ottimo per correggere asimmetrie muscolari.',tips:['Appoggia ginocchio e mano sulla panca','Tira il manubrio verso l\'anca','Ruota leggermente il busto per più range of motion']},
{id:15,name:'Rematore ai Cavi (Pulley)',muscle:'Schiena',sec:['Bicipiti','Spalle Post.'],equip:'Cavi',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🔌',desc:'Il cavo mantiene tensione costante. Siediti al pulley basso, porta la maniglia verso l\'ombelico contraendo le scapole.',tips:['Schiena dritta durante tutto il movimento','Porta la maniglia verso l\'ombelico','Stringi la schiena nella contrazione massima per 1s']},
{id:16,name:'Face Pull ai Cavi',muscle:'Schiena',sec:['Spalle Post.','Rotatori'],equip:'Cavi',diff:'p',sets:'3',reps:'15-20',rest:'60s',emoji:'🔌',desc:'Essenziale per la salute delle spalle. Tira la corda verso il viso aprendo i gomiti verso l\'esterno. Ottimo per bilanciare il lavoro di petto.',tips:['Usa un peso leggero e molte reps','Porta le mani all\'altezza delle orecchie','Esegui lentamente per sentire i deltodi posteriori']},
{id:17,name:'Iperextensioni',muscle:'Schiena',sec:['Glutei','Femorali'],equip:'Macchine',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🔩',desc:'Rinforza la zona lombare essenziale. Piega e estendi il busto tenendo la schiena sempre neutra. Fondamentale per prevenire infortuni.',tips:['Non iperestendere la colonna in cima','Contrai i glutei salendo','Aggiungi un peso al petto per aumentare la difficoltà']},
{id:18,name:'Chin-Up (Presa Supina)',muscle:'Schiena',sec:['Bicipiti'],equip:'Sbarra',diff:'i',sets:'3-4',reps:'5-10',rest:'90s',emoji:'🏅',desc:'Variante delle trazioni con presa supina (palmi verso di te). Coinvolge maggiormente i bicipiti rispetto alle trazioni classiche.',tips:['Presa alla larghezza delle spalle','Massimo range of motion','Parte alta molto coinvolge i bicipiti']},
// ── SPALLE ──
{id:20,name:'Military Press con Bilanciere',muscle:'Spalle',sec:['Tricipiti','Schiena'],equip:'Bilanciere',diff:'a',sets:'3-4',reps:'5-8',rest:'2-3min',emoji:'🏋️',desc:'Il principale esercizio per le spalle. Spingi il bilanciere sopra la testa partendo dal mento/collo. Eseguito in piedi per massimizzare il coinvolgimento del core.',tips:['Core contratto per proteggere la schiena','Non inarcare troppo la schiena in basso','La barra scorre vicino al viso salendo']},
{id:21,name:'Alzate Laterali con Manubri',muscle:'Spalle',sec:[],equip:'Manubri',diff:'p',sets:'3-4',reps:'12-20',rest:'60s',emoji:'🏋️',desc:'Fondamentale per spalle larghe. Isola il deltoide mediale. Alza i manubri lateralmente fino all\'altezza delle spalle con gomiti leggermente piegati.',tips:['Gomiti leggermente piegati','Non alzare oltre l\'altezza delle spalle','Usa peso leggero con tecnica perfetta','Controlla bene la fase di discesa']},
{id:22,name:'Alzate Frontali',muscle:'Spalle',sec:['Petto'],equip:'Manubri',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🏋️',desc:'Lavora il deltoide anteriore. Alza le braccia dritte in avanti fino all\'altezza delle spalle. Puoi usare un disco per variare.',tips:['Non oscillare il corpo','Puoi fare alternando i bracci o insieme','Peso moderato per mantenere la tecnica']},
{id:23,name:'Overhead Press con Manubri',muscle:'Spalle',sec:['Tricipiti'],equip:'Manubri',diff:'i',sets:'3-4',reps:'8-12',rest:'90s',emoji:'🏋️',desc:'Alternativa alla military press con manubri. Parti con i manubri all\'altezza delle orecchie e spingi sopra la testa.',tips:['Seduto per maggiore stabilità e focus','Non inclinare il collo','Contrai bene al punto più alto']},
{id:24,name:'Alzate per Deltoide Posteriore',muscle:'Spalle',sec:['Schiena Sup.'],equip:'Manubri',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🏋️',desc:'Isola il deltoide posteriore spesso trascurato. Busto inclinato in avanti, alza i manubri lateralmente portando i gomiti verso l\'alto.',tips:['Busto quasi parallelo al pavimento','Non usare troppo peso','Immagina di voler toccare il soffitto con i gomiti']},
{id:25,name:'Scrollate (Shrug) con Bilanciere',muscle:'Spalle',sec:['Trapezio'],equip:'Bilanciere',diff:'p',sets:'3-4',reps:'10-15',rest:'60s',emoji:'🏋️',desc:'Sviluppa il trapezio superiore. Tieni il bilanciere davanti a te e alza le spalle verso le orecchie nel modo più alto possibile.',tips:['Movimento verticale puro, non rotare le spalle','Contrai al punto più alto per 1 secondo','Controlla la fase di discesa']},
{id:26,name:'Arnold Press',muscle:'Spalle',sec:['Tricipiti','Petto'],equip:'Manubri',diff:'i',sets:'3',reps:'10-12',rest:'90s',emoji:'🏋️',desc:'Inventato da Arnold. Combina rotazione e spinta per lavorare tutti i capi del deltoide in un unico movimento fluido.',tips:['Parti con i palmi verso di te all\'altezza del mento','Ruota i polsi verso l\'esterno mentre spingi','Movimento lento e controllato']},
// ── BICIPITI ──
{id:30,name:'Curl con Bilanciere',muscle:'Bicipiti',sec:['Avambracci'],equip:'Bilanciere',diff:'p',sets:'3-4',reps:'8-12',rest:'60-90s',emoji:'💪',desc:'Esercizio classico per i bicipiti. Tieni i gomiti fissi ai fianchi, solleva il bilanciere verso le spalle in modo controllato.',tips:['Non oscillare il corpo — imbrogliare non aiuta','Gomiti fissi durante tutto il movimento','Abbassa lentamente per massimizzare il tempo sotto tensione']},
{id:31,name:'Curl con Manubri Alternati',muscle:'Bicipiti',sec:['Avambracci'],equip:'Manubri',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'💪',desc:'Versione alternata per concentrarsi su un braccio alla volta. La supinazione del polso durante il movimento aumenta la contrazione del bicipite.',tips:['Gira il polso (supinazione) durante il movimento','Porta il manubrio alla spalla completamente','Non usare l\'impulso del corpo']},
{id:32,name:'Hammer Curl',muscle:'Bicipiti',sec:['Avambracci','Brachiale'],equip:'Manubri',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🔨',desc:'Lavora anche brachioradiale e brachiale oltre ai bicipiti. Presa neutra (pollice verso l\'alto) durante tutto il movimento. Aumenta lo spessore del braccio.',tips:['Presa martello dall\'inizio alla fine','Ottimo per aumentare lo spessore del braccio','Eseguilo seduto per isolare meglio']},
{id:33,name:'Curl su Panca Scott',muscle:'Bicipiti',sec:[],equip:'Macchine',diff:'i',sets:'3',reps:'10-12',rest:'60s',emoji:'🔩',desc:'Isola perfettamente i bicipiti eliminando qualsiasi aiuto del corpo. Le braccia appoggiate sul pad inclinato.',tips:['Non bloccare i gomiti in estensione completa','Abbassa lentamente per il massimo beneficio','Ottimo per sviluppare il picco del bicipite']},
{id:34,name:'Curl ai Cavi',muscle:'Bicipiti',sec:['Avambracci'],equip:'Cavi',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🔌',desc:'Il cavo mantiene tensione costante su tutto il range of motion, a differenza dei manubri. Ottimo per finire l\'allenamento.',tips:['Gomiti fissi ai fianchi','La tensione costante è il grande vantaggio','Prova slow negatives (4 secondi in discesa)']},
{id:35,name:'Curl con Bilanciere EZ',muscle:'Bicipiti',sec:['Avambracci'],equip:'Bilanciere',diff:'p',sets:'3',reps:'8-12',rest:'60s',emoji:'💪',desc:'Usa il bilanciere EZ per ridurre lo stress sui polsi. Stessa esecuzione del curl normale ma più comodo per le articolazioni.',tips:['Presa sulla curva del bilanciere EZ','Meno stress articolare rispetto al bilanciere dritto','Ottima alternativa per chi ha fastidi ai polsi']},
// ── TRICIPITI ──
{id:40,name:'Pushdown ai Cavi',muscle:'Tricipiti',sec:[],equip:'Cavi',diff:'p',sets:'3-4',reps:'12-15',rest:'60s',emoji:'🔌',desc:'Isola perfettamente il tricipite. Usa barra dritta, corda o barra V. Gomiti fissi ai fianchi, spingi verso il basso.',tips:['Gomiti fissi — non muoverli','Tieni i polsi neutri','Contrai i tricipiti al punto più basso per 1s']},
{id:41,name:'French Press (Skull Crusher)',muscle:'Tricipiti',sec:[],equip:'Bilanciere',diff:'i',sets:'3',reps:'8-12',rest:'90s',emoji:'🏋️',desc:'Eccellente per la testa lunga del tricipite. Steso sulla panca, abbassa il bilanciere verso la fronte piegando solo i gomiti.',tips:['Usa il bilanciere EZ per ridurre lo stress','Gomiti fissi durante tutto il movimento','Abbassa lentamente per sicurezza e controllo']},
{id:42,name:'Estensione Tricipiti Overhead',muscle:'Tricipiti',sec:[],equip:'Cavi',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🔌',desc:'Enfatizza la testa lunga del tricipite (la più grande). Girati con le spalle al cavo, estendi le braccia sopra la testa.',tips:['Ottimo per la testa lunga del tricipite','Mantieni i gomiti vicino alla testa','Allungamento completo nella fase di discesa']},
{id:43,name:'Close Grip Bench Press',muscle:'Tricipiti',sec:['Petto','Spalle'],equip:'Bilanciere',diff:'i',sets:'3',reps:'6-10',rest:'90s',emoji:'🏋️',desc:'Variante della panca piana con presa stretta per enfatizzare i tricipiti. Permette di usare carichi maggiori rispetto ad altri esercizi.',tips:['Presa alla larghezza delle spalle (non troppo stretta)','Gomiti vicini al corpo durante la discesa','Ottimo per aggiungere carichi pesanti ai tricipiti']},
{id:44,name:'Kickback per Tricipiti',muscle:'Tricipiti',sec:[],equip:'Manubri',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🏋️',desc:'Isola il tricipite in modo efficace. Busto inclinato in avanti, braccio superiore parallelo al suolo, estendi il braccio indietro.',tips:['Parte superiore del braccio parallela al pavimento','Estensione completa nella fase concentrica','Usa peso moderato per mantenere la tecnica']},
{id:45,name:'Dip alla Panca',muscle:'Tricipiti',sec:['Petto','Spalle'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🤸',desc:'Esercizio a corpo libero semplice ed efficace. Mani appoggiate alla panca, gambe estese, scendi e risali.',tips:['Più le gambe sono lontane, più è difficile','Tieni il corpo vicino alla panca','Non scendere troppo per proteggere le spalle']},
// ── ADDOME / CORE ──
{id:50,name:'Plank',muscle:'Addome',sec:['Spalle','Schiena'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'30-60s',rest:'60s',emoji:'🏃',desc:'L\'isometrico fondamentale per il core. Posizione di piegamento su avambracci e punte dei piedi, corpo in linea perfetta.',tips:['Corpo in linea retta dalla testa ai piedi','Non abbassare i fianchi né alzare il sedere','Respira normalmente durante il plank']},
{id:51,name:'Crunch',muscle:'Addome',sec:[],equip:'Corpo Libero',diff:'p',sets:'3-4',reps:'15-25',rest:'45-60s',emoji:'🤸',desc:'Il classico esercizio addominale. Supino con ginocchia piegate, porta le spalle verso le ginocchia contraendo i retti addominali.',tips:['Non tirare il collo con le mani','Lavora solo la parte alta — non il busto intero','Espira nella contrazione, inspira nella discesa']},
{id:52,name:'Leg Raise',muscle:'Addome',sec:['Flessori Anca'],equip:'Corpo Libero',diff:'i',sets:'3',reps:'10-20',rest:'60s',emoji:'🤸',desc:'Ottimo per gli addominali bassi. Stai supino, porta le gambe dalla posizione orizzontale a verticale mantenendo le gambe tese.',tips:['Schiena incollata al pavimento','Versione facilitata: ginocchia piegate','Non atterrare le gambe: mantieni tensione continua']},
{id:53,name:'Russian Twist',muscle:'Addome',sec:['Obliqui'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'20-30',rest:'45s',emoji:'🔄',desc:'Lavora intensamente gli obliqui e la rotazione del tronco. Seduto con gambe sollevate, ruota il busto alternando i lati.',tips:['Più le gambe sono lontane dal pavimento più è difficile','Usa un disco o manubrio per aumentare l\'intensità','Controlla la rotazione, non eseguire veloce']},
{id:54,name:'Ab Wheel Rollout',muscle:'Addome',sec:['Spalle','Schiena'],equip:'Corpo Libero',diff:'a',sets:'3',reps:'5-15',rest:'90s',emoji:'⚙️',desc:'Tra i migliori esercizi per il core. Rotola in avanti con la ruota addominale estendendo tutto il corpo verso il pavimento.',tips:['Inizia con movimenti parziali','Core contrattissimo durante tutto il movimento','Il ritorno è la fase più importante']},
{id:55,name:'Cable Crunch',muscle:'Addome',sec:[],equip:'Cavi',diff:'p',sets:'3',reps:'12-20',rest:'60s',emoji:'🔌',desc:'Permette di aggiungere carico al lavoro addominale. Inginocchiato davanti al cavo, porta i gomiti verso le ginocchia arrotolando la colonna.',tips:['Il movimento parte dall\'addome, non dalle braccia','Arrotola vertebra per vertebra','Mantieni tensione sul cavo durante tutto il movimento']},
{id:56,name:'Hanging Leg Raise',muscle:'Addome',sec:['Flessori Anca'],equip:'Sbarra',diff:'a',sets:'3',reps:'8-15',rest:'90s',emoji:'🏅',desc:'Versione avanzata appeso alla sbarra. Porta le ginocchia (o meglio le gambe dritte) verso il petto.',tips:['Inizia con ginocchia piegate (versione facile)','Controlla l\'oscillazione del corpo','Gambe dritte per la versione più difficile e efficace']},
{id:57,name:'Side Plank',muscle:'Addome',sec:['Obliqui','Spalle'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'20-45s',rest:'45s',emoji:'🏃',desc:'Versione laterale del plank per gli obliqui. Sosteniti su un avambraccio di lato tenendo il corpo in linea retta.',tips:['Corpo in linea retta senza abbassare i fianchi','Alza il braccio libero verso il soffitto per più difficoltà','Esegui su entrambi i lati']},
{id:58,name:'Mountain Climbers',muscle:'Addome',sec:['Spalle','Flessori Anca'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'20-40s',rest:'45s',emoji:'🏔️',desc:'Esercizio dinamico che combina core e cardio. In posizione di piegamento, porta alternatamente le ginocchia al petto.',tips:['Mantieni i fianchi bassi','Velocità moderata per mantenere la forma','Ottimo per riscaldamento o circuit training']},
// ── GAMBE ──
{id:60,name:'Squat con Bilanciere',muscle:'Gambe',sec:['Glutei','Schiena','Addome'],equip:'Bilanciere',diff:'i',sets:'3-5',reps:'5-10',rest:'2-3min',emoji:'🏋️',desc:'Il re degli esercizi per le gambe. Scendi fino a quando le cosce sono parallele al pavimento mantenendo schiena dritta, ginocchia in linea con le punte.',tips:['Ginocchia in linea con le punte dei piedi','Torace alto, schiena dritta','Spingi attraverso i talloni per risalire','Scendi almeno fino alle cosce parallele']},
{id:61,name:'Leg Press',muscle:'Gambe',sec:['Glutei'],equip:'Macchine',diff:'p',sets:'3-4',reps:'10-15',rest:'90s',emoji:'🔩',desc:'Macchina eccellente per le gambe. Posiziona i piedi alla larghezza delle spalle e spingi la piattaforma. Sicura per chi ha problemi alla schiena.',tips:['Non bloccare completamente i ginocchi in cima','Piedi paralleli per quadricipiti bilanciati','Schiena e glutei incollati allo schienale']},
{id:62,name:'Romanian Deadlift (RDL)',muscle:'Gambe',sec:['Glutei','Schiena'],equip:'Bilanciere',diff:'i',sets:'3-4',reps:'8-12',rest:'90s',emoji:'🏋️',desc:'Eccellente per femorali e glutei. Scendi portando il bilanciere lungo le gambe finché senti lo stretch nei femorali. Ginocchia quasi dritte.',tips:['Schiena dritta durante tutto il movimento','Senti lo stretch dei femorali, non schiacciare i glutei','Non piegare troppo le ginocchia — è diverso dallo stacco']},
{id:63,name:'Affondi (Lunges)',muscle:'Gambe',sec:['Glutei','Addome'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🤸',desc:'Ottimo per gambe e glutei in modo unilaterale. Passo in avanti, scendi fino a quando il ginocchio posteriore sfiora il pavimento.',tips:['Il ginocchio anteriore non deve superare le punte del piede','Mantieni il busto eretto','Usa manubri per aumentare il carico']},
{id:64,name:'Leg Extension',muscle:'Gambe',sec:[],equip:'Macchine',diff:'p',sets:'3-4',reps:'12-20',rest:'60s',emoji:'🔩',desc:'Isola i quadricipiti. Ideale come esercizio di finitura o per la riabilitazione del ginocchio. Non caricare troppo.',tips:['Non usare carichi troppo pesanti (stress sul ginocchio)','Contrai bene in cima mantenendo per 1s','Ottimo come finitura per i quadricipiti']},
{id:65,name:'Leg Curl (Femorali)',muscle:'Gambe',sec:[],equip:'Macchine',diff:'p',sets:'3-4',reps:'12-15',rest:'60s',emoji:'🔩',desc:'Isola i femorali. Puoi eseguirlo prono (steso) o seduto. Piega le gambe verso i glutei in modo controllato.',tips:['Abbassa lentamente per massimizzare il beneficio','Non mollare nella fase di discesa','Contrai i glutei per stabilità nel curl prono']},
{id:66,name:'Bulgarian Split Squat',muscle:'Gambe',sec:['Glutei'],equip:'Manubri',diff:'i',sets:'3',reps:'8-12',rest:'90s',emoji:'🏋️',desc:'Squat unilaterale con il piede posteriore su una panca. Eccellente per correggere asimmetrie muscolari e sviluppare gambe bilanciate.',tips:['Piede anteriore abbastanza avanti','Scendi verticalmente senza inclinarti in avanti','Inizia senza peso per imparare bene il movimento']},
{id:67,name:'Goblet Squat',muscle:'Gambe',sec:['Glutei','Addome'],equip:'Kettlebell',diff:'p',sets:'3-4',reps:'12-15',rest:'60s',emoji:'🏋️',desc:'Ottimo per imparare il pattern dello squat. Tieni il kettlebell al petto, favorisce una postura verticale naturale.',tips:['I gomiti spingono le ginocchia verso l\'esterno','Ideale per imparare la profondità dello squat','Mantieni il kettlebell vicino al petto']},
{id:68,name:'Hip Thrust con Bilanciere',muscle:'Glutei',sec:['Femorali','Addome'],equip:'Bilanciere',diff:'i',sets:'3-4',reps:'10-15',rest:'90s',emoji:'🏋️',desc:'Il migliore per sviluppare i glutei. Schiena appoggiata alla panca, bilanciere sulle anche protette da un pad, spingi i fianchi verso l\'alto.',tips:['Spingi i fianchi in alto fino a formare una linea retta','Contrai i glutei al massimo in cima per 2s','Piedi piatti a terra alla larghezza delle spalle']},
{id:69,name:'Step Up con Manubri',muscle:'Gambe',sec:['Glutei'],equip:'Manubri',diff:'p',sets:'3',reps:'10-15',rest:'60s',emoji:'🤸',desc:'Salita su un gradino o panca alta tenendo dei manubri. Ottimo per gambe e glutei con basso impatto articolare.',tips:['Il piede intero deve salire sul gradino','Spingi attraverso il tallone del piede elevato','Altezza del gradino al ginocchio per maggiore difficoltà']},
// ── GLUTEI ──
{id:75,name:'Hip Thrust a Corpo Libero',muscle:'Glutei',sec:['Femorali'],equip:'Corpo Libero',diff:'p',sets:'3-4',reps:'15-25',rest:'60s',emoji:'🤸',desc:'Versione a corpo libero dell\'hip thrust. Ideale per principianti o come riscaldamento prima di aggiungere peso.',tips:['Aggiungi resistenza con un elastico tra le ginocchia','Contrai i glutei al massimo in cima','Mantieni la contrazione per 1-2 secondi']},
{id:76,name:'Cable Kickback (Glutei)',muscle:'Glutei',sec:['Femorali'],equip:'Cavi',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🔌',desc:'Isola il gluteo con tensione costante del cavo. In piedi con il cavo alla caviglia, porta la gamba indietro e in alto.',tips:['Core contratto per stabilità','Movimento controllato, non oscillare','Porta la gamba all\'altezza dei glutei in cima']},
{id:77,name:'Glute Bridge',muscle:'Glutei',sec:['Femorali','Core'],equip:'Corpo Libero',diff:'p',sets:'3',reps:'15-20',rest:'45s',emoji:'🤸',desc:'Simile all\'hip thrust ma eseguito sul pavimento. Ottimo come attivazione dei glutei prima dell\'allenamento o per principianti.',tips:['Spingi attraverso i talloni','Contrai i glutei al massimo in cima','Versione unilaterale (single leg) per più difficoltà']},
{id:78,name:'Donkey Kicks',muscle:'Glutei',sec:[],equip:'Corpo Libero',diff:'p',sets:'3',reps:'15-20',rest:'45s',emoji:'🤸',desc:'A quattro zampe, calcia un piede verso il soffitto contraendo il gluteo a ogni ripetizione. Ottimo isolamento.',tips:['Tieni il core contratto','Non ruotare il bacino','Aggiungi una cavigliera con peso per più resistenza']},
{id:79,name:'Sumo Squat',muscle:'Glutei',sec:['Gambe','Adduttori'],equip:'Manubri',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'🏋️',desc:'Variante dello squat con piedi molto allargati e punte verso l\'esterno. Enfatizza i glutei e gli adduttori interni.',tips:['Piedi larghi, punte rivolte verso l\'esterno 45°','Ginocchia che seguono le punte dei piedi','Scendi mantenendo il busto eretto']},
// ── POLPACCI ──
{id:80,name:'Calf Raise in Piedi alla Macchina',muscle:'Polpacci',sec:[],equip:'Macchine',diff:'p',sets:'4-5',reps:'15-25',rest:'45-60s',emoji:'🔩',desc:'Fondamentale per sviluppare il gastrocnemio (polpaccio superiore). Stai in piedi sulla punta dei piedi, solleva e ridiscendi lentamente.',tips:['Range of motion completo dal basso verso l\'alto','Abbassa lentamente per massimizzare l\'allungamento','I polpacci hanno molte fibre lente: usa molte reps']},
{id:81,name:'Calf Raise Seduto alla Macchina',muscle:'Polpacci',sec:[],equip:'Macchine',diff:'p',sets:'4',reps:'15-20',rest:'45s',emoji:'🔩',desc:'Con le ginocchia piegate si isola maggiormente il soleo (muscolo profondo sotto il gastrocnemio). Essenziale per polpacci completi.',tips:['Ginocchia piegate per isolare il soleo','Range of motion completo','Fondamentale perché il soleo è spesso trascurato']},
{id:82,name:'Calf Raise su Gradino',muscle:'Polpacci',sec:[],equip:'Corpo Libero',diff:'p',sets:'4',reps:'15-25',rest:'45s',emoji:'🤸',desc:'Con i piedi sul bordo di un gradino si ottiene un range di movimento massimo, fondamentale per sviluppare i polpacci.',tips:['Piedi sul bordo del gradino per massimo allungamento','Può essere eseguito con un piede alla volta','Usa un manubrio per aggiungere resistenza']},
// ── AVAMBRACCI ──
{id:85,name:'Reverse Curl',muscle:'Avambracci',sec:['Bicipiti'],equip:'Bilanciere',diff:'p',sets:'3',reps:'12-15',rest:'60s',emoji:'💪',desc:'Presa pronata per lavorare il brachioradiale e gli estensori del polso. Eseguire come un normale curl con i palmi rivolti verso il basso.',tips:['Mantieni la presa pronata dall\'inizio alla fine','Gomiti fissi ai fianchi','Ottimo per avambracci più sviluppati e definiti']},
{id:86,name:'Wrist Curl (Flessione del Polso)',muscle:'Avambracci',sec:[],equip:'Bilanciere',diff:'p',sets:'3',reps:'15-20',rest:'45s',emoji:'🏋️',desc:'Isola i flessori del polso. Avambracci appoggiati alle ginocchia (o a una panca), fletti ed estendi i polsi.',tips:['Usa un peso leggero','Range of motion completo','Esegui lentamente per sentire i muscoli']},
{id:87,name:'Farmer\'s Walk',muscle:'Avambracci',sec:['Trapezio','Core','Gambe'],equip:'Manubri',diff:'p',sets:'3',reps:'20-40m',rest:'90s',emoji:'🚶',desc:'Cammina tenendo manubri pesanti ai fianchi. Eccellente per la forza della presa, stabilità del core e resistenza generale.',tips:['Schiena dritta durante la camminata','Testa alta, sguardo avanti','Prendi i pesi più pesanti che riesci a reggere con forma corretta']},
];

/* ═════════════════════════════════════════
   SCHEDE DI ALLENAMENTO
   ═════════════════════════════════════════ */
const SCHEDE_DB=[
{id:1,name:'Full Body 3x/Settimana',emoji:'💪',level:'Principiante',freq:3,goal:'Forza & Massa',color:'#16a34a',
 desc:'Perfetto per chi inizia o non ha molto tempo. Allena tutto il corpo 3 volte a settimana con i movimenti fondamentali.',
 days:[
  {name:'Giorno A',exs:[{id:60,sets:'3',reps:'5×5',rest:'3 min'},{id:1,sets:'3',reps:'5×5',rest:'3 min'},{id:13,sets:'3',reps:'5×5',rest:'3 min'},{id:51,sets:'3',reps:'3×15',rest:'45s'}]},
  {name:'Giorno B',exs:[{id:60,sets:'3',reps:'5×5',rest:'3 min'},{id:20,sets:'3',reps:'5×5',rest:'3 min'},{id:10,sets:'1',reps:'1×5',rest:'3 min'},{id:50,sets:'3',reps:'3×40s',rest:'45s'}]}
 ]},
{id:2,name:'Push / Pull / Legs (PPL)',emoji:'🔥',level:'Intermedio',freq:6,goal:'Ipertrofia',color:'#dc2626',
 desc:'Split classico per massima ipertrofia. 6 giorni con 2 cicli Push/Pull/Legs. Uno dei più efficaci in assoluto.',
 days:[
  {name:'Push (Spinte)',exs:[{id:1,sets:'4',reps:'4×6-8',rest:'3 min'},{id:20,sets:'3',reps:'3×8-10',rest:'2 min'},{id:21,sets:'4',reps:'4×12-15',rest:'60s'},{id:40,sets:'3',reps:'3×12-15',rest:'60s'},{id:42,sets:'3',reps:'3×12-15',rest:'60s'}]},
  {name:'Pull (Trazioni)',exs:[{id:11,sets:'4',reps:'4×5-8',rest:'3 min'},{id:13,sets:'4',reps:'4×6-8',rest:'2 min'},{id:16,sets:'3',reps:'3×15-20',rest:'60s'},{id:30,sets:'4',reps:'4×10-12',rest:'60s'},{id:32,sets:'3',reps:'3×12-15',rest:'60s'}]},
  {name:'Legs (Gambe)',exs:[{id:60,sets:'4',reps:'4×6-8',rest:'3 min'},{id:62,sets:'3',reps:'3×8-10',rest:'2 min'},{id:63,sets:'3',reps:'3×12-15',rest:'90s'},{id:64,sets:'4',reps:'4×15-20',rest:'60s'},{id:80,sets:'4',reps:'4×20-25',rest:'45s'}]}
 ]},
{id:3,name:'Upper / Lower Split',emoji:'⚡',level:'Intermedio',freq:4,goal:'Forza & Massa',color:'#2563eb',
 desc:'4 giorni: 2 Upper body e 2 Lower body. Bilanciato, scientifico e molto efficace per forza e massa.',
 days:[
  {name:'Upper A — Forza',exs:[{id:1,sets:'4',reps:'4×4-6',rest:'3 min'},{id:11,sets:'4',reps:'4×4-6',rest:'3 min'},{id:20,sets:'3',reps:'3×6-8',rest:'2 min'},{id:13,sets:'3',reps:'3×6-8',rest:'2 min'}]},
  {name:'Lower A — Forza',exs:[{id:60,sets:'4',reps:'4×4-6',rest:'3 min'},{id:62,sets:'3',reps:'3×6-8',rest:'2 min'},{id:65,sets:'3',reps:'3×10-12',rest:'90s'},{id:80,sets:'4',reps:'4×15-20',rest:'60s'}]},
  {name:'Upper B — Volume',exs:[{id:2,sets:'4',reps:'4×10-12',rest:'90s'},{id:12,sets:'4',reps:'4×10-12',rest:'90s'},{id:23,sets:'3',reps:'3×12-15',rest:'60s'},{id:21,sets:'4',reps:'4×15-20',rest:'45s'},{id:30,sets:'3',reps:'3×12-15',rest:'60s'},{id:41,sets:'3',reps:'3×12-15',rest:'60s'}]},
  {name:'Lower B — Volume',exs:[{id:61,sets:'4',reps:'4×12-15',rest:'90s'},{id:63,sets:'3',reps:'3×12-15',rest:'90s'},{id:64,sets:'4',reps:'4×15-20',rest:'60s'},{id:65,sets:'3',reps:'3×12-15',rest:'60s'},{id:80,sets:'5',reps:'5×15-20',rest:'45s'}]}
 ]},
{id:4,name:'Tonificazione Femminile',emoji:'🍑',level:'Principiante',freq:3,goal:'Glutei & Tonificazione',color:'#db2777',
 desc:'Pensata per tonificare il corpo femminile con particolare attenzione ai glutei, gambe e core.',
 days:[
  {name:'Lower Body — Glutei',exs:[{id:68,sets:'4',reps:'4×12-15',rest:'90s'},{id:60,sets:'3',reps:'3×10-12',rest:'2 min'},{id:66,sets:'3',reps:'3×10-12',rest:'90s'},{id:76,sets:'3',reps:'3×15-20',rest:'60s'},{id:80,sets:'4',reps:'4×20',rest:'45s'}]},
  {name:'Upper Body',exs:[{id:4,sets:'3',reps:'3×8-15',rest:'60s'},{id:12,sets:'3',reps:'3×12-15',rest:'90s'},{id:21,sets:'3',reps:'3×15-20',rest:'60s'},{id:15,sets:'3',reps:'3×12-15',rest:'60s'},{id:3,sets:'3',reps:'3×15',rest:'60s'}]},
  {name:'Full Body + Core',exs:[{id:63,sets:'3',reps:'3×12',rest:'90s'},{id:77,sets:'3',reps:'3×20',rest:'60s'},{id:50,sets:'3',reps:'3×45s',rest:'45s'},{id:53,sets:'3',reps:'3×20',rest:'45s'},{id:52,sets:'3',reps:'3×15',rest:'45s'}]}
 ]},
{id:5,name:'Allenamento a Casa (No Attrezzi)',emoji:'🏠',level:'Tutti i livelli',freq:3,goal:'Fitness Generale',color:'#d97706',
 desc:'Scheda completa a corpo libero. Si esegue ovunque senza attrezzatura. Efficace per forza, resistenza e corpo in forma.',
 days:[
  {name:'Giorno A — Forza Superiore',exs:[{id:4,sets:'4',reps:'4×Max',rest:'90s'},{id:45,sets:'3',reps:'3×Max',rest:'90s'},{id:50,sets:'3',reps:'3×45s',rest:'45s'},{id:51,sets:'3',reps:'3×20',rest:'45s'},{id:57,sets:'3',reps:'3×30s/lato',rest:'45s'}]},
  {name:'Giorno B — Forza Inferiore',exs:[{id:67,sets:'4',reps:'4×15',rest:'90s'},{id:63,sets:'3',reps:'3×12/lato',rest:'90s'},{id:77,sets:'4',reps:'4×20',rest:'60s'},{id:78,sets:'3',reps:'3×15/lato',rest:'45s'},{id:82,sets:'4',reps:'4×20',rest:'45s'}]},
  {name:'Giorno C — HIIT Full Body',exs:[{id:4,sets:'3',reps:'3×10',rest:'30s'},{id:60,sets:'3',reps:'3×10',rest:'30s'},{id:50,sets:'3',reps:'3×30s',rest:'30s'},{id:58,sets:'3',reps:'3×30s',rest:'30s'},{id:51,sets:'3',reps:'3×15',rest:'30s'}]}
 ]},
{id:6,name:'Powerlifting Base',emoji:'🏆',level:'Avanzato',freq:4,goal:'Forza Massimale',color:'#7c3aed',
 desc:'Focalizzato sui tre lift del powerlifting: squat, panca e stacco. Per chi vuole costruire forza massimale.',
 days:[
  {name:'Squat Day',exs:[{id:60,sets:'5',reps:'5×5',rest:'4 min'},{id:64,sets:'3',reps:'3×8-10',rest:'90s'},{id:1,sets:'3',reps:'3×8-10',rest:'2 min'},{id:40,sets:'3',reps:'3×12-15',rest:'60s'}]},
  {name:'Panca Day',exs:[{id:1,sets:'5',reps:'5×5',rest:'4 min'},{id:20,sets:'3',reps:'3×6-8',rest:'3 min'},{id:13,sets:'3',reps:'3×8-10',rest:'2 min'},{id:21,sets:'3',reps:'3×15',rest:'60s'}]},
  {name:'Stacco Day',exs:[{id:10,sets:'5',reps:'5×3-5',rest:'5 min'},{id:62,sets:'3',reps:'3×6-8',rest:'2 min'},{id:65,sets:'3',reps:'3×10-12',rest:'90s'},{id:80,sets:'4',reps:'4×15-20',rest:'60s'}]},
  {name:'Upper Volume',exs:[{id:11,sets:'4',reps:'4×5-8',rest:'3 min'},{id:15,sets:'3',reps:'3×10-12',rest:'90s'},{id:3,sets:'3',reps:'3×12-15',rest:'60s'},{id:30,sets:'3',reps:'3×10-12',rest:'60s'},{id:16,sets:'3',reps:'3×15-20',rest:'60s'}]}
 ]},
];

/* ═════════════════════════════════════════
   DATI GRUPPI MUSCOLARI
   ═════════════════════════════════════════ */
const MUSCLE_GROUPS=[
{name:'Petto',emoji:'💪',color:'#dc2626',bg:'#fff1f2',border:'#fecdd3'},
{name:'Schiena',emoji:'🔙',color:'#2563eb',bg:'#eff6ff',border:'#93c5fd'},
{name:'Spalle',emoji:'🙆',color:'#d97706',bg:'#fffbeb',border:'#fde047'},
{name:'Bicipiti',emoji:'🦾',color:'#16a34a',bg:'#f0fdf4',border:'#86efac'},
{name:'Tricipiti',emoji:'💥',color:'#7c3aed',bg:'#f5f3ff',border:'#c4b5fd'},
{name:'Addome',emoji:'🫀',color:'#0891b2',bg:'#ecfeff',border:'#a5f3fc'},
{name:'Gambe',emoji:'🦵',color:'#dc2626',bg:'#fff1f2',border:'#fecdd3'},
{name:'Glutei',emoji:'🍑',color:'#db2777',bg:'#fdf2f8',border:'#f9a8d4'},
{name:'Polpacci',emoji:'🦶',color:'#059669',bg:'#ecfdf5',border:'#6ee7b7'},
{name:'Avambracci',emoji:'🤜',color:'#92400e',bg:'#fffbeb',border:'#fde68a'},
];

/* ════════════════════════════════════════════════════
   VIDEO ID YOUTUBE PER ESERCIZIO
   Fonte: Jeff Nippard, Athlean-X, ScottHermanFitness
   ════════════════════════════════════════════════════ */
const YT_IDS={
  // PETTO
  1:'vcBig73ojpE',   // Panca Piana - Jeff Nippard
  2:'8iPEnn-ltC8',   // Panca Inclinata Manubri
  3:'taI4XduLpTk',   // Croci ai Cavi
  4:'IODxDxX7oi4',   // Piegamenti
  5:'2z8JmcrW-As',   // Dip Parallele
  6:'VmB1G1K7v94',   // Panca Manubri
  7:'FK4rHfGTSXE',   // Pullover
  8:'xUm0BiZCWlQ',   // Chest Machine
  // SCHIENA
  10:'op9kVnSso6Q',  // Stacco - Alan Thrall
  11:'eGo4IYlbE5g',  // Trazioni Sbarra
  12:'CAwf7n6Luuc',  // Lat Machine
  13:'FWJR5Ve8bnQ',  // Rematore Bilanciere
  14:'pYcpY20QaE8',  // Rematore Manubrio
  15:'GZbfZ033f74',  // Rematore Cavi (Pulley)
  16:'HSoHeSj4tBg',  // Face Pull - Athlean-X
  17:'ph3pddpKzzw',  // Iperextensioni
  18:'brhRXlOhsAM',  // Chin-Up
  // SPALLE
  20:'2yjwXTZTDDI',  // Military Press
  21:'3VcKaXpzqRo',  // Alzate Laterali
  22:'gkbAB8sFT2s',  // Alzate Frontali
  23:'qEwKCR5JCog',  // OHP Manubri
  24:'EA7u4Q_8HQ0',  // Deltoide Posteriore
  25:'NAqCVe2mwzM',  // Scrollate (Shrug)
  26:'6Z15_WdXmVw',  // Arnold Press
  // BICIPITI
  30:'kwG2ipFRgfo',  // Curl Bilanciere
  31:'sAq_ocpS3Io',  // Curl Manubri Alternati
  32:'TwD-YGVP4Bk',  // Hammer Curl
  33:'fIbDQxuVZOs',  // Scott Curl
  34:'NFzTWp2qpiE',  // Curl Cavi
  35:'zG2_iq99o_0',  // Curl EZ Bar
  // TRICIPITI
  40:'2-LAMcpzODU',  // Pushdown Cavi
  41:'d_KZxkY_0cM',  // Skull Crusher
  42:'YbX7Wd8jQ-Q',  // Overhead Extension
  43:'nEF0bv2Yi54',  // Close Grip Bench
  44:'6SS6K3lAwZ8',  // Kickback
  45:'0326dy_-CzM',  // Bench Dips
  // ADDOME
  50:'pSHjTRCQxIw',  // Plank
  51:'Xyd_fa5zoEU',  // Crunch
  52:'l4kQd9eWclI',  // Leg Raise
  53:'wkD8rjkodUI',  // Russian Twist
  54:'yFrrd0o_fHk',  // Ab Wheel
  55:'2fbujeH3F0E',  // Cable Crunch
  56:'Pr1ieGZ5atk',  // Hanging Leg Raise
  57:'_6vjo5yFo1U',  // Side Plank
  58:'nmwgirgXLYM',  // Mountain Climbers
  // GAMBE
  60:'ultWZbUMPL8',  // Squat Bilanciere
  61:'IZxyjW7MPJQ',  // Leg Press
  62:'JCXUYuzwNrM',  // Romanian Deadlift
  63:'D7KaRcUTQeE',  // Affondi
  64:'YyvSfVjQeL0',  // Leg Extension
  65:'1Tq3QdYUuHs',  // Leg Curl
  66:'2C-uNgKwPLE',  // Bulgarian Split Squat
  67:'MeIiIdhvXT4',  // Goblet Squat
  68:'SEdqd6gVKhQ',  // Hip Thrust Bilanciere
  69:'dQqApCGd5Ss',  // Step Up
  // GLUTEI
  75:'xDmFkJxPzeM',  // Hip Thrust Corpo Libero
  76:'Is_4r9-59sQ',  // Cable Kickback
  77:'OUgsJ8-Vi0E',  // Glute Bridge
  78:'SJ1Xuz9AA-Q',  // Donkey Kicks
  79:'kkdKSMnSPn4',  // Sumo Squat
  // POLPACCI
  80:'gwLzBIWOCIE',  // Calf Raise in Piedi
  81:'JbyjNymZOt0',  // Calf Raise Seduto
  82:'Xjk4oSkXRaE',  // Calf Raise su Gradino
  // AVAMBRACCI
  85:'nKKM7BFJpi4',  // Reverse Curl
  86:'jocFaXBu0fI',  // Wrist Curl
  87:'Fkzk_RqlYig',  // Farmer Walk
};

/* ════════════════════════════════════════════════════
   FUNZIONI VIDEO YOUTUBE
   ════════════════════════════════════════════════════ */
function buildYtBlock(exId,exName,muscleName){
  const ytId=YT_IDS[exId];
  const ytSearch=`https://www.youtube.com/results?search_query=${encodeURIComponent('come fare '+exName+' esercizio palestra tutorial')}`;
  let html=`<div class="ex-detail-section">
    <div class="ex-detail-hdr">🎬 VIDEO TUTORIAL</div>
    <div style="background:var(--card)">`;
  if(ytId){
    html+=`<a class="yt-wrap" href="https://www.youtube.com/watch?v=${ytId}" target="_blank" rel="noopener" id="yt-${exId}" style="display:block;text-decoration:none">
      <img class="yt-thumb" src="https://img.youtube.com/vi/${ytId}/mqdefault.jpg"
           onerror="this.closest('.yt-wrap').classList.add('yt-thumb-err')">
      <div class="yt-overlay">
        <div class="yt-play"><svg viewBox="0 0 24 24"><polygon points="5,3 19,12 5,21"/></svg></div>
        <div class="yt-label">Apri su YouTube</div>
        <div class="yt-channel">tocca per guardare</div>
      </div>
    </a>`;
  }
  html+=`<div style="padding:10px 12px">
      <a class="yt-search-btn" href="${ytSearch}" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff0000"><path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.3 5 12 5 12 5s-4.3 0-7 .1c-.4 0-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.7 2.3.8C6.8 18.8 12 19 12 19s4.3 0 7-.2c.4 0 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 14.5v-5l5.5 2.5L10 14.5z"/></svg>
        Cerca altri video su YouTube
      </a>
    </div>
  </div>
  </div>`;
  return html;
}
/* MET values basati su Compendium of Physical Activities (Ainsworth 2011)
   Corretti con fattore 0.8 per sovrastima MET in contesto reale */
const SPORT_MET={
  Forza:3.5,    // strength training moderato-intenso
  Cardio:6.0,   // cardio generico (ellittica, step)
  HIIT:8.0,     // high intensity interval training
  Stretching:2.3,
  Yoga:2.5,
  Calcio:7.0,
  Nuoto:7.0,
  Ciclismo:6.8,
  Tennis:6.5,
  Basket:6.5,
  Corsa:9.0,    // ~10km/h
  Camminata:3.5,
  Boxe:8.0,
  Pilates:3.0,
  Altro:5.0,
};
function calcBurnedKcal(type,duration,peso,sets,reps,load){
  const kg=peso||(S.profile.entries&&S.profile.entries.length?parseFloat(S.profile.entries[S.profile.entries.length-1].peso)||70:70);
  const s=parseFloat(sets)||0, r=parseFloat(reps)||0, l=parseFloat(load)||0;
  // Pesistica: formula basata su volume + MET reale
  const isStrength=(type==='Forza'||type==='Stretching'||type==='Pilates'||type==='Yoga');
  if(isStrength&&s>0&&r>0){
    const volume=s*r*l; // volume totale in kg
    const workTimeSec=s*r*4; // ~4s a rep
    const restTimeSec=Math.max(0,s-1)*90; // 90s tra serie
    const totalMin=(workTimeSec+restTimeSec)/60;
    const metStr=(type==='Forza')?5.8:SPORT_MET[type]||3.5;
    const directKcal=metStr*kg*totalMin/60;
    const volumeKcal=l>0?(volume*0.05):(s*r*kg*0.006); // corpo libero se load=0
    const epoc=1.25; // EPOC post-allenamento +25%
    return Math.max(1,Math.round((directKcal+volumeKcal)*epoc));
  }
  const met=SPORT_MET[type]||5;
  return Math.round(met*kg*(parseFloat(duration)||0)/60);
}
function totBurnedToday(){return(S.workouts[TODAY]||[]).reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);}

/* ════════ ONBOARDING (primo accesso) ════════ */
function checkOnboarding(){
  // Mostra onboarding se mancano dati fondamentali
  const p=S.profile;
  if(!p.altezza||!p.eta||!p.obiettivo){showOnboarding();return true;}
  return false;
}
function showOnboarding(){
  initObVars();
  resetScreen();setHdr('BENVENUTO','CONFIGURAZIONE',false);
  document.getElementById('screen').innerHTML=`
    <div style="padding:20px 16px 0">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:700;color:var(--ink);margin-bottom:6px">Ciao, ${CUR.name.split(' ')[0]}! 👋</div>
      <div style="font-size:13px;color:var(--ink3);margin-bottom:24px;line-height:1.6">Rispondi a 4 domande veloci e calcolerò il tuo piano personalizzato.</div>
    </div>
    <div class="card">
      <div class="card-hdr">⚖️ PASSO 1 — IL TUO CORPO</div>
      <div class="form-row"><div class="form-lbl">Peso</div><input class="form-inp" id="ob-peso" type="number" inputmode="decimal" placeholder="es. 75" value="${S.profile.entries?.slice(-1)[0]?.peso||''}"> <span style="font-size:11px;color:var(--ink3)">kg</span></div>
      <div class="form-row"><div class="form-lbl">Altezza</div><input class="form-inp" id="ob-h" type="number" inputmode="numeric" placeholder="es. 175" value="${S.profile.altezza||''}"> <span style="font-size:11px;color:var(--ink3)">cm</span></div>
      <div class="form-row"><div class="form-lbl">Età</div><input class="form-inp" id="ob-eta" type="number" inputmode="numeric" placeholder="es. 35" value="${S.profile.eta||''}"></div>
      <div class="form-row" style="border:none"><div class="form-lbl">Sesso</div>
        <div style="display:flex;gap:8px;flex:1">
          <button id="ob-m" onclick="obSesso('m')" style="flex:1;padding:10px;border:2px solid ${!S.profile.sesso||S.profile.sesso==='m'?'var(--green)':'#ccc'};background:${!S.profile.sesso||S.profile.sesso==='m'?'var(--greenl)':'var(--paper)'};border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;cursor:pointer">♂ UOMO</button>
          <button id="ob-f" onclick="obSesso('f')" style="flex:1;padding:10px;border:2px solid ${S.profile.sesso==='f'?'var(--green)':'#ccc'};background:${S.profile.sesso==='f'?'var(--greenl)':'var(--paper)'};border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;cursor:pointer">♀ DONNA</button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-hdr">🎯 PASSO 2 — IL TUO OBIETTIVO</div>
      <div style="display:flex;flex-direction:column;gap:8px;padding:12px">
        ${[['dimagrimento','🔥','DIMAGRIRE','Perdere peso e grasso corporeo'],['mantenimento','⚖️','MANTENERMI','Mantenere il peso attuale'],['massa','💪','AUMENTARE MASSA','Costruire muscolo e forza']].map(([k,ico,lbl,desc])=>`
        <button onclick="obObiettivo('${k}')" id="ob-obj-${k}" style="padding:14px;border:2px solid ${(S.profile.obiettivo||'mantenimento')===k?'var(--green)':'#e8e3d8'};background:${(S.profile.obiettivo||'mantenimento')===k?'var(--greenl)':'var(--card)'};border-radius:var(--rk);text-align:left;cursor:pointer;transition:all .15s">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;color:var(--ink)">${ico} ${lbl}</div>
          <div style="font-size:11px;color:var(--ink3);margin-top:3px">${desc}</div>
        </button>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-hdr">🏃 PASSO 3 — ATTIVITÀ FISICA</div>
      <div style="display:flex;flex-direction:column;gap:8px;padding:12px">
        ${[['sedentario','🪑','SEDENTARIO','Lavoro d\'ufficio, poco movimento'],['leggera','🚶','LEGGERA','Camminate, 1-2 allenamenti/sett.'],['moderata','🏃','MODERATA','3-4 allenamenti a settimana'],['intensa','🔥','INTENSA','5-6 allenamenti a settimana'],['estrema','⚡','ESTREMA','Allenamento quotidiano intenso']].map(([k,ico,lbl,desc])=>`
        <button onclick="obAttivita('${k}')" id="ob-att-${k}" style="padding:12px;border:2px solid ${(S.profile.attivita||'moderata')===k?'var(--green)':'#e8e3d8'};background:${(S.profile.attivita||'moderata')===k?'var(--greenl)':'var(--card)'};border-radius:var(--rk);text-align:left;cursor:pointer;transition:all .15s">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:var(--ink)">${ico} ${lbl}</div>
          <div style="font-size:11px;color:var(--ink3);margin-top:2px">${desc}</div>
        </button>`).join('')}
      </div>
    </div>
    <div style="padding:0 12px 8px">
      <div class="l-err" id="ob-err" style="color:var(--red);font-family:'IBM Plex Mono',monospace;font-size:11px;min-height:18px;margin-bottom:8px;text-align:center"></div>
      <button class="big-btn success" style="font-size:15px;padding:16px" onclick="snd('confirm');finishOnboarding()">✓ CALCOLA IL MIO PIANO</button>
    </div>`;
}
let _obSesso='m',_obObiettivo='mantenimento',_obAttivita='moderata';
function initObVars(){
  _obSesso=S.profile.sesso||'m';
  _obObiettivo=S.profile.obiettivo||'mantenimento';
  _obAttivita=S.profile.attivita||'moderata';
}
function obSesso(v){
  _obSesso=v;
  ['m','f'].forEach(s=>{
    const b=document.getElementById('ob-'+s);if(!b)return;
    b.style.borderColor=s===v?'var(--green)':'#ccc';
    b.style.background=s===v?'var(--greenl)':'var(--paper)';
  });
}
function obObiettivo(v){
  _obObiettivo=v;
  ['dimagrimento','mantenimento','massa'].forEach(k=>{
    const b=document.getElementById('ob-obj-'+k);if(!b)return;
    b.style.borderColor=k===v?'var(--green)':'#e8e3d8';
    b.style.background=k===v?'var(--greenl)':'var(--card)';
  });
}
function obAttivita(v){
  _obAttivita=v;
  ['sedentario','leggera','moderata','intensa','estrema'].forEach(k=>{
    const b=document.getElementById('ob-att-'+k);if(!b)return;
    b.style.borderColor=k===v?'var(--green)':'#e8e3d8';
    b.style.background=k===v?'var(--greenl)':'var(--card)';
  });
}
function finishOnboarding(){
  const peso=parseFloat(document.getElementById('ob-peso').value);
  const h=parseFloat(document.getElementById('ob-h').value);
  const eta=parseFloat(document.getElementById('ob-eta').value);
  const err=document.getElementById('ob-err');
  if(!peso||!h||!eta){err.textContent='⚠ Inserisci peso, altezza ed età';return;}
  if(peso<30||peso>300){err.textContent='⚠ Peso non valido';return;}
  if(h<100||h>250){err.textContent='⚠ Altezza non valida';return;}
  if(eta<10||eta>120){err.textContent='⚠ Età non valida';return;}
  // Salva profilo
  S.profile.altezza=h;S.profile.eta=eta;S.profile.sesso=_obSesso;
  S.profile.obiettivo=_obObiettivo;S.profile.attivita=_obAttivita;
  S.profile.nome=CUR.name;
  // Prima misurazione
  if(!S.profile.entries.some(e=>e.date===TODAY)){
    S.profile.entries.push({date:TODAY,peso,vita:'',fianchi:'',grasso:'',note:'Inserimento iniziale'});
    S.profile.entries.sort((a,b)=>a.date.localeCompare(b.date));
  }
  // Calcola TDEE e imposta obiettivo
  const fAtt={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
  const bmr=_obSesso==='m'?10*peso+6.25*h-5*eta+5:10*peso+6.25*h-5*eta-161;
  const tdee=Math.round(bmr*(fAtt[_obAttivita]||1.55));
  S.settings.kcal=_obObiettivo==='dimagrimento'?tdee-500:_obObiettivo==='massa'?tdee+300:tdee;
  saveState();
  showOnboardingResult(peso,h,eta,tdee,S.settings.kcal);
}
function showOnboardingResult(peso,h,eta,tdee,kcalObj){
  const bmi=+(peso/(h/100)**2).toFixed(1);
  const bmiL=bmi<18.5?'Sottopeso':bmi<25?'Normopeso':bmi<30?'Sovrappeso':'Obeso';
  const obLabel={dimagrimento:'🔥 Dimagrimento',mantenimento:'⚖️ Mantenimento',massa:'💪 Aumento massa'};
  resetScreen();setHdr('IL TUO PIANO','PERSONALIZZATO',false);
  document.getElementById('screen').innerHTML=`
    <div style="background:var(--ink);color:#fff;padding:20px 16px;text-align:center">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;opacity:.6;margin-bottom:6px">OBIETTIVO CALORICO GIORNALIERO</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:52px;font-weight:700;color:#86efac">${kcalObj}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;opacity:.6">kcal/giorno · ${obLabel[_obObiettivo]||''}</div>
    </div>
    <div class="stat-grid">
      <div class="stat-cell"><div class="stat-val" style="color:var(--green)">${peso}</div><div class="stat-unit">kg</div><div class="stat-lbl">PESO</div></div>
      <div class="stat-cell"><div class="stat-val" style="color:#2563eb">${bmi}</div><div class="stat-unit">${bmiL}</div><div class="stat-lbl">BMI</div></div>
      <div class="stat-cell"><div class="stat-val" style="color:#d97706">${tdee}</div><div class="stat-unit">kcal</div><div class="stat-lbl">TDEE</div></div>
    </div>
    <div class="card">
      <div class="card-hdr">💡 COSA SIGNIFICA</div>
      <div class="card-body" style="font-size:13px;line-height:1.8;color:var(--ink2)">
        ${_obObiettivo==='dimagrimento'?`Con <b>${kcalObj} kcal/giorno</b> sei in un deficit di 500 kcal rispetto al tuo fabbisogno. Questo ti porterà a perdere circa <b>0,5 kg a settimana</b> in modo sano e sostenibile.`:_obObiettivo==='massa'?`Con <b>${kcalObj} kcal/giorno</b> sei in un surplus di 300 kcal. Abbinato all'allenamento, potrai aumentare la massa muscolare di circa <b>0,5 kg al mese</b>.`:`Con <b>${kcalObj} kcal/giorno</b> mantieni il tuo peso attuale. Adatta l'obiettivo quando lo desideri dalle Impostazioni.`}
      </div>
    </div>
    <div style="padding:0 12px">
      <button class="big-btn success" style="font-size:15px;padding:16px" onclick="snd('confirm');navGoHome()">🚀 INIZIA ORA</button>
    </div>`;
}

/* ════════ RIEPILOGO SETTIMANALE ════════ */
function showRiepilogo(fb){
  resetScreen();setHdr('SETTIMANA','RIEPILOGO',true);
  // Ultimi 7 giorni
  const days=[];
  for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));}
  const kcalObj=S.settings.kcal;
  const rows=days.map(ds=>{
    let e=0,p=0,c=0,f=0;
    const meals=S.meals[ds]||null;
    // Se è TODAY usa S.meals, altrimenti cerca nell'archivio
    const src=(ds===TODAY)?S.meals:S.mealHistory?.[ds];
    if(src)MK.forEach(k=>(src[k]||[]).forEach(it=>{const r=it.g/100;e+=it.food.e*r;p+=it.food.p*r;c+=it.food.c*r;f+=it.food.f*r;}));
    const burned=(S.workouts[ds]||[]).reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
    const net=Math.round(e)-burned;
    const deficit=kcalObj-net;
    return{ds,e:Math.round(e),p:+p.toFixed(1),c:+c.toFixed(1),f:+f.toFixed(1),burned,net,deficit,hasData:e>0};
  });
  const totE=rows.reduce((a,r)=>a+r.e,0);
  const mediaE=Math.round(totE/rows.filter(r=>r.hasData).length)||0;
  const giorniDeficit=rows.filter(r=>r.hasData&&r.deficit>0).length;
  const totBurned=rows.reduce((a,r)=>a+r.burned,0);
  let html=`
    <div style="background:var(--ink);color:#fff;padding:14px 16px">
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><div style="font-family:'IBM Plex Mono',monospace;font-size:11px;opacity:.5">MEDIA GIORNALIERA</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:26px;font-weight:700">${mediaE} <span style="font-size:13px;opacity:.6">kcal</span></div></div>
        <div style="text-align:right"><div style="font-family:'IBM Plex Mono',monospace;font-size:11px;opacity:.5">GIORNI IN DEFICIT</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:26px;font-weight:700;color:#86efac">${giorniDeficit}/7</div></div>
      </div>
    </div>
    <div class="card"><div class="card-hdr">📅 DETTAGLIO GIORNO PER GIORNO</div>`;
  const dNames=['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
  rows.forEach(r=>{
    const d=new Date(r.ds+'T12:00:00');
    const isToday=r.ds===TODAY;
    const pct=r.e>0?Math.min(100,Math.round(r.e/kcalObj*100)):0;
    const col=!r.hasData?'#ccc':r.net<=kcalObj?'var(--green)':'var(--red)';
    html+=`<div style="padding:10px 14px;border-bottom:1px solid #ede8dc">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:5px">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">${dNames[d.getDay()]} ${d.getDate()}${isToday?' <span style="color:var(--green)">(OGGI)</span>':''}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:${col};font-weight:700">${r.hasData?r.net+' kcal net':'—'}</div>
      </div>
      ${r.hasData?`<div class="bar-wrap"><div class="bar-fill" style="width:${pct}%;background:${col}"></div></div>
      <div style="display:flex;gap:10px;margin-top:4px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">
        <span>🍽 ${r.e} kcal</span>${r.burned?'<span>🔥 −'+r.burned+'</span>':''}${r.deficit>0?'<span style="color:var(--green)">✓ −'+r.deficit+' deficit</span>':r.deficit<0?'<span style="color:var(--red)">+'+(-r.deficit)+' surplus</span>':''}
      </div>`:'<div style="font-size:10px;color:#ccc;font-family:IBM Plex Mono,monospace">Nessun dato inserito</div>'}
    </div>`;
  });
  html+=`</div>`;
  // Totale settimana
  html+=`<div class="card"><div class="card-hdr">📊 TOTALE SETTIMANA</div><div class="card-body">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div class="stat-cell"><div class="stat-val" style="color:var(--ink)">${totE}</div><div class="stat-unit">kcal</div><div class="stat-lbl">ASSUNTE</div></div>
      <div class="stat-cell"><div class="stat-val" style="color:#d97706">${totBurned}</div><div class="stat-unit">kcal</div><div class="stat-lbl">BRUCIATE</div></div>
    </div>
    <div style="margin-top:10px;padding:10px;background:${giorniDeficit>=4?'var(--greenl)':'#fff7ed'};border:1.5px solid ${giorniDeficit>=4?'#86efac':'#fde68a'};border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:12px;color:var(--ink2)">
      ${giorniDeficit>=5?'🏆 Settimana eccellente! Sei in deficit la maggior parte dei giorni.':giorniDeficit>=3?'👍 Buona settimana! Continua così.':giorniDeficit>=1?'💪 Inizia bene. Prova ad aumentare i giorni in deficit.':'📝 Inizia a registrare i tuoi pasti per monitorare i progressi!'}
    </div>
  </div></div>`;
  document.getElementById('screen').innerHTML=html;
}

/* ════════ FEEDBACK GIORNALIERO ════════ */
function getDailyFeedback(tot,burned,kcalObj,protTarget){
  const net=tot.e-burned;
  const deficit=kcalObj-net;
  const msgs=[];
  // Kcal
  if(tot.e===0)msgs.push({ico:'📝',col:'#888',txt:'Nessun alimento inserito oggi. Comincia a registrare i pasti!'});
  else if(deficit>200)msgs.push({ico:'✅',col:'var(--green)',txt:`Ottimo! Sei in deficit di ${deficit} kcal. Stai seguendo il piano.`});
  else if(deficit>0)msgs.push({ico:'👍',col:'var(--green)',txt:`Bene! Appena sotto l'obiettivo. Deficit di ${deficit} kcal.`});
  else if(-deficit<200)msgs.push({ico:'⚠️',col:'#d97706',txt:`Sei appena sopra l'obiettivo di ${Math.abs(deficit)} kcal. Attenzione alla cena.`});
  else msgs.push({ico:'🔴',col:'var(--red)',txt:`Hai superato l'obiettivo di ${Math.abs(deficit)} kcal. Aumenta l'attività fisica.`});
  // Proteine
  if(tot.e>0&&tot.p<protTarget*0.7)msgs.push({ico:'🥩',col:'#d97706',txt:`Proteine basse (${tot.p}g su ${protTarget}g). Aggiungi carne, uova o legumi.`});
  // Acqua
  if(S.water<6&&tot.e>0)msgs.push({ico:'💧',col:'#2563eb',txt:`Solo ${S.water} bicchieri d'acqua. Cerca di berne almeno 6-8 al giorno.`});
  return msgs;
}

/* ════════ ALIMENTI RECENTI ════════ */
function addToRecent(food){
  if(!S.recentFoods)S.recentFoods=[];
  S.recentFoods=S.recentFoods.filter(id=>id!==food.id);
  S.recentFoods.unshift(food.id);
  if(S.recentFoods.length>12)S.recentFoods=S.recentFoods.slice(0,12);
}

/* ════════ MACRO RING — grafico torta CSS ════════ */
function macroRing(e,p,c,f){
  const tot=p+c+f||1;
  const pp=p/tot,pc=c/tot,pf=f/tot;
  const pct=Math.min(100,Math.round(e/S.settings.kcal*100));
  // SVG donut 3 archi
  function arc(pct,offset,col){
    const r=34,circ=2*Math.PI*r;
    const dash=circ*pct,gap=circ*(1-pct);
    return `<circle cx="40" cy="40" r="${r}" fill="none" stroke="${col}" stroke-width="10" stroke-dasharray="${dash.toFixed(1)} ${gap.toFixed(1)}" stroke-dashoffset="${(-circ*offset).toFixed(1)}" stroke-linecap="round"/>`;
  }
  const svg=`<svg viewBox="0 0 80 80">${arc(pp,0,'#16a34a')}${arc(pc,pp,'#d97706')}${arc(pf,pp+pc,'#dc2626')}</svg>`;
  return `<div class="macro-ring-wrap">
    <div class="macro-ring">${svg}<div class="macro-ring-label"><div class="macro-ring-pct">${pct}%</div><div class="macro-ring-sub">OBJ</div></div></div>
    <div class="macro-legend">
      <div class="macro-leg-row"><div class="macro-leg-dot" style="background:#16a34a"></div>Proteine<span class="macro-leg-val">${p}g</span></div>
      <div class="macro-leg-row"><div class="macro-leg-dot" style="background:#d97706"></div>Carboidrati<span class="macro-leg-val">${c}g</span></div>
      <div class="macro-leg-row"><div class="macro-leg-dot" style="background:#dc2626"></div>Grassi<span class="macro-leg-val">${f}g</span></div>
    </div>
  </div>`;
}

/* ════════ STREAK ════════ */
function calcStreak(){
  let streak=0;
  const d=new Date();
  for(let i=0;i<365;i++){
    const ds=d.toISOString().slice(0,10);
    const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
    const hasData=src&&MK.some(k=>(src[k]||[]).length>0);
    if(hasData){streak++;}else if(i>0){break;}
    d.setDate(d.getDate()-1);
  }
  return streak;
}

/* ════════ ALIMENTI CUSTOM ════════ */
function showAddCustomFood(){
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">➕ Alimento Personalizzato</div>
    <div class="modal-sub">Aggiungi un alimento non presente nel database</div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOME *</div>
    <input class="gram-inp" id="cf-name" style="width:100%;text-align:left;font-size:14px" placeholder="es. Torta della nonna"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      ${[['KCAL /100g *','cf-e','es. 250'],['PROTEINE g','cf-p','es. 8'],['CARBOIDRATI g','cf-c','es. 30'],['GRASSI g','cf-f','es. 10'],['FIBRE g','cf-fi','es. 2'],['CATEGORIA','cf-cat','es. Dolci']].map(([l,id,ph])=>`
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">${l}</div>
      <input class="gram-inp" id="${id}" type="${id==='cf-cat'?'text':'number'}" inputmode="decimal" style="width:100%;text-align:left;font-size:13px;padding:9px 10px" placeholder="${ph}"></div>`).join('')}
    </div>
    <button class="conf-btn green-btn" onclick="snd('confirm');saveCustomFood()">✓ SALVA ALIMENTO</button>`;
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('cf-name')?.focus(),150);
}
function saveCustomFood(){
  const name=(document.getElementById('cf-name').value||'').trim();
  const e=parseFloat(document.getElementById('cf-e').value);
  if(!name){alert('Inserisci il nome');return;}
  if(!e||e<=0){alert('Inserisci le calorie');return;}
  if(!S.customFoods)S.customFoods=[];
  const id=9000+S.customFoods.length+1;
  const food={id,name,cat:document.getElementById('cf-cat').value||'Personalizzati',e,p:parseFloat(document.getElementById('cf-p').value)||0,c:parseFloat(document.getElementById('cf-c').value)||0,f:parseFloat(document.getElementById('cf-f').value)||0,fi:parseFloat(document.getElementById('cf-fi').value)||0,s:0,sa:0,na:0,emoji:'🍽',custom:true};
  S.customFoods.push(food);saveState();closeModal();
  showToast('✅ '+name+' aggiunto!','green');
}
function getDB(){return [...DB,...(S.customFoods||[])];}

/* ════════ RICETTE ════════ */
function showRicette(fb){
  resetScreen();setHdr('RICETTE','LE MIE RICETTE',true);
  if(!S.recipes)S.recipes=[];
  let html=`<button class="big-btn success" onclick="snd();showCreaRicetta()">+ CREA NUOVA RICETTA</button>`;
  if(!S.recipes.length){
    html+=`<div class="empty"><div class="empty-ico">👨‍🍳</div><div class="empty-txt">NESSUNA RICETTA<br>Crea la tua prima ricetta!</div></div>`;
  } else {
    S.recipes.forEach((r,i)=>{
      const tot=r.ingredients.reduce((a,ing)=>{const fd=getDB().find(x=>x.id===ing.foodId);if(!fd)return a;const ratio=ing.g/100;return{e:a.e+fd.e*ratio,p:a.p+fd.p*ratio,c:a.c+fd.c*ratio,f:a.f+fd.f*ratio};},{e:0,p:0,c:0,f:0});
      const perP=r.portions>0?Math.round(tot.e/r.portions):Math.round(tot.e);
      html+=`<div class="recipe-card">
        <div class="recipe-hdr">
          <span class="recipe-nm">${r.emoji||'🍳'} ${r.name}</span>
          <div style="display:flex;gap:8px;align-items:center">
            <span style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:.8">${r.portions||1} porz.</span>
            <button class="wo-del" onclick="snd('delete');delRicetta(${i})">✕</button>
          </div>
        </div>
        <div class="recipe-body">
          <div class="recipe-macros">
            <div style="font-size:13px;font-weight:700;color:var(--ink)">${perP} kcal/porzione</div>
            <div>P:${(tot.p/(r.portions||1)).toFixed(1)}g · C:${(tot.c/(r.portions||1)).toFixed(1)}g · G:${(tot.f/(r.portions||1)).toFixed(1)}g</div>
            <div style="color:var(--ink3);margin-top:2px">${r.ingredients.length} ingredienti</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:5px">
            <button onclick="snd();addRicettaToDiary(${i})" style="padding:8px 12px;background:var(--green);color:#fff;border:none;border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;cursor:pointer">+ DIARIO</button>
            <button onclick="snd();editRicetta(${i})" style="padding:8px 12px;background:var(--paper);color:var(--ink);border:1.5px solid #ccc;border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;cursor:pointer">MODIFICA</button>
          </div>
        </div>
      </div>`;
    });
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
}
function showCreaRicetta(){
  if(!S.recipes)S.recipes=[];
  const newR={name:'',emoji:'🍳',portions:1,ingredients:[],note:''};
  S.recipes.push(newR);
  saveState();
  editRicetta(S.recipes.length-1);
}
function editRicetta(i){
  resetScreen();
  const r=S.recipes[i];
  setHdr('RICETTA','MODIFICA',true);
  const tot=r.ingredients.reduce((a,ing)=>{const fd=getDB().find(x=>x.id===ing.foodId);if(!fd)return a;const ratio=ing.g/100;return{e:a.e+fd.e*ratio,p:a.p+fd.p*ratio,c:a.c+fd.c*ratio,f:a.f+fd.f*ratio};},{e:0,p:0,c:0,f:0});
  let html=`
    <div class="card"><div class="card-hdr">📝 DATI RICETTA</div>
      <div class="form-row"><div class="form-lbl">Nome</div><input class="form-inp" value="${r.name}" placeholder="Nome ricetta..." oninput="S.recipes[${i}].name=this.value;saveState()"></div>
      <div class="form-row"><div class="form-lbl">Emoji</div><input class="form-inp" value="${r.emoji}" maxlength="2" oninput="S.recipes[${i}].emoji=this.value;saveState()" style="width:60px;flex:none"></div>
      <div class="form-row" style="border:none"><div class="form-lbl">Porzioni</div><input class="form-inp" type="number" inputmode="numeric" value="${r.portions||1}" min="1" max="20" oninput="S.recipes[${i}].portions=parseInt(this.value)||1;saveState()"></div>
    </div>
    <div class="card"><div class="card-hdr">🥗 INGREDIENTI (${r.ingredients.length})</div>
      ${r.ingredients.map((ing,j)=>{const fd=getDB().find(x=>x.id===ing.foodId);return fd?`<div class="log-item"><div class="log-emo">${fd.emoji||'🍽'}</div><div class="log-inf"><div class="log-nm">${fd.name}</div><div class="log-dt">${ing.g}g · ${Math.round(fd.e*ing.g/100)} kcal</div></div><button class="log-del" onclick="snd('delete');rmIngredient(${i},${j})">✕</button></div>`:''}).join('')}
      <div class="add-btn-row"><button class="add-btn" onclick="snd();addIngredient(${i})">+ AGGIUNGI INGREDIENTE</button></div>
    </div>
    ${r.ingredients.length>0?`<div class="card"><div class="card-hdr">📊 VALORI TOTALI</div><div class="card-body">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
        ${[['KCAL',Math.round(tot.e),'var(--ink)'],['PROT',tot.p.toFixed(1)+'g','#16a34a'],['CARB',tot.c.toFixed(1)+'g','#d97706'],['GRAS',tot.f.toFixed(1)+'g','#dc2626']].map(([l,v,c])=>`<div class="stat-cell"><div class="stat-val" style="font-size:15px;color:${c}">${v}</div><div class="stat-lbl">${l}</div></div>`).join('')}
      </div>
      <div style="margin-top:8px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink3)">Per porzione: ${Math.round(tot.e/(r.portions||1))} kcal</div>
    </div></div>`:''}`;
  document.getElementById('screen').innerHTML=html;
}
function addIngredient(recipeIdx){
  const cats=['Tutti',...new Set(getDB().map(f=>f.cat))];
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;margin-bottom:10px;text-transform:uppercase">Aggiungi Ingrediente</div>
    <input class="srch-inp" id="ri-s" type="search" placeholder="🔍 Cerca..." oninput="riSearch(this.value,${recipeIdx})" autocomplete="off" style="width:100%;margin-bottom:8px">
    <div id="ri-list" style="max-height:55vh;overflow-y:auto">${riListHTML('',recipeIdx)}</div>`;
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('ri-s')?.focus(),150);
}
function riListHTML(q,ri){
  let r=getDB();if(q)r=r.filter(f=>f.name.toLowerCase().includes(q.toLowerCase()));
  return r.slice(0,50).map(f=>`<div class="food-row" onclick="snd('confirm');selectIngredient(${f.id},${ri})"><div class="food-emo">${f.emoji||'🍽'}</div><div class="food-inf"><div class="food-nm">${f.name}${f.custom?'<span class="custom-badge" style="margin-left:6px">MIO</span>':''}</div><div class="food-ct">${f.cat}</div></div><div class="food-kk">${f.e}<span class="food-kk-u">kcal</span></div></div>`).join('');
}
function riSearch(q,ri){document.getElementById('ri-list').innerHTML=riListHTML(q,ri);}
function selectIngredient(foodId,ri){
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:10px">${getDB().find(x=>x.id===foodId)?.name}</div>
    <input class="gram-inp" id="ri-g" type="number" value="100" min="1" inputmode="decimal" style="width:100%;text-align:center;margin-bottom:12px">
    <button class="conf-btn green-btn" onclick="snd('confirm');confirmIngredient(${foodId},${ri})">✓ AGGIUNGI</button>`;
}
function confirmIngredient(foodId,ri){
  const g=parseFloat(document.getElementById('ri-g').value)||100;
  if(!S.recipes[ri].ingredients)S.recipes[ri].ingredients=[];
  S.recipes[ri].ingredients.push({foodId,g});saveState();closeModal();editRicetta(ri);
}
function rmIngredient(ri,j){S.recipes[ri].ingredients.splice(j,1);saveState();editRicetta(ri);}
function delRicetta(i){if(confirm('Elimina ricetta?')){S.recipes.splice(i,1);saveState();navReplace(showRicette);}}
function addRicettaToDiary(i){
  const r=S.recipes[i];
  const opts=MK.map(k=>`<option value="${k}">${MM[k].ico} ${MM[k].label}</option>`).join('');
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">${r.emoji||'🍳'} ${r.name}</div>
    <div class="modal-sub">Quante porzioni vuoi aggiungere?</div>
    <input class="gram-inp" id="rp-n" type="number" value="1" min="0.5" step="0.5" inputmode="decimal" style="width:100%;text-align:center;margin-bottom:12px">
    <select class="meal-sel" id="rp-mk" style="width:100%;margin-bottom:12px">${opts}</select>
    <button class="conf-btn green-btn" onclick="snd('confirm');addRicettaConfirm(${i})">✓ AGGIUNGI AL DIARIO</button>`;
  document.getElementById('modal').classList.add('open');
}
function addRicettaConfirm(i){
  const r=S.recipes[i];const n=parseFloat(document.getElementById('rp-n').value)||1;
  const mk=document.getElementById('rp-mk').value;
  r.ingredients.forEach(ing=>{
    const fd=getDB().find(x=>x.id===ing.foodId);
    if(fd){if(!S.meals[mk])S.meals[mk]=[];S.meals[mk].push({food:fd,g:Math.round(ing.g*n*(r.portions?1/r.portions:1)*100)/100});}
  });
  saveState();closeModal();
  if(_navStack.length>1)_navStack.pop();
  navReplace(()=>showMeal(mk,false));
}

/* ════════ DIARIO STORICO ════════ */
function showStoricoDiario(fb){
  resetScreen();setHdr('STORICO','DIARIO PASTI',true);
  const days=[];
  for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));}
  let html=`<div style="padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);border-bottom:1px solid #ede8dc">ULTIMI 30 GIORNI</div>`;
  let hasAny=false;
  days.forEach(ds=>{
    const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
    const hasDati=src&&MK.some(k=>(src[k]||[]).length>0);
    if(!hasDati)return;
    hasAny=true;
    let e=0,p=0,c=0,f=0;
    MK.forEach(k=>(src[k]||[]).forEach(it=>{const r=it.g/100;e+=it.food.e*r;p+=it.food.p*r;c+=it.food.c*r;f+=it.food.f*r;}));
    const burned=(S.workouts[ds]||[]).reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
    const net=Math.round(e)-burned;
    const d=new Date(ds+'T12:00:00');
    const isToday=ds===TODAY;
    const col=net<=S.settings.kcal?'var(--green)':'var(--red)';
    html+=`<div class="hist-day-card" onclick="snd();showGiornoStorico('${ds}')">
      <div class="hist-day-hdr">
        <div>
          <div class="hist-day-date">${isToday?'📅 OGGI':fmtDate(ds)}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-top:2px">P:${p.toFixed(0)}g · C:${c.toFixed(0)}g · G:${f.toFixed(0)}g${burned?' · 🔥'+burned:''}</div>
        </div>
        <div style="text-align:right">
          <div class="hist-day-kcal" style="color:${col}">${net} kcal</div>
          <div style="font-size:9px;font-family:'IBM Plex Mono',monospace;color:${col}">${net<=S.settings.kcal?'✓ deficit':'surplus'}</div>
        </div>
      </div>
    </div>`;
  });
  if(!hasAny)html+=`<div class="empty"><div class="empty-ico">📅</div><div class="empty-txt">NESSUN DATO<br>Inizia a registrare i pasti!</div></div>`;
  html+=``;
  document.getElementById('screen').innerHTML=html;
}
function showGiornoStorico(ds){
  resetScreen();
  const isToday=ds===TODAY;
  const src=isToday?S.meals:S.mealHistory?.[ds];
  setHdr(isToday?'OGGI':fmtDate(ds).slice(0,20),'DETTAGLIO',true);
  let html='';
  let totE=0,totP=0,totC=0,totF=0;
  MK.forEach(k=>{
    const items=(src&&src[k])||[];
    if(!items.length)return;
    const m=MM[k];
    const kk=Math.round(items.reduce((a,it)=>a+it.food.e*it.g/100,0));
    html+=`<div class="pmeal-hdr"><span class="pmeal-ttl">${m.ico} ${m.label}</span><span class="pmeal-kk">${kk} kcal</span></div>`;
    items.forEach(it=>{
      const k2=Math.round(it.food.e*it.g/100);
      totE+=k2;totP+=it.food.p*it.g/100;totC+=it.food.c*it.g/100;totF+=it.food.f*it.g/100;
      html+=`<div class="log-item"><div class="log-emo">${it.food.emoji||'🍽'}</div><div class="log-inf"><div class="log-nm">${it.food.name}</div><div class="log-dt">${it.g}g · ${k2} kcal</div></div></div>`;
    });
  });
  if(!html)html=`<div class="empty"><div class="empty-ico">📅</div><div class="empty-txt">NESSUN DATO</div></div>`;
  html=`<div class="card"><div class="card-hdr">📊 RIEPILOGO — ${Math.round(totE)} kcal</div><div class="card-body">
    ${macroRing(Math.round(totE),+totP.toFixed(1),+totC.toFixed(1),+totF.toFixed(1))}
  </div></div>`+html;
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

/* ════════ REPORT MENSILE ════════ */
function showReportMensile(fb){
  resetScreen();setHdr('REPORT','MENSILE',true);
  const now=new Date();const year=now.getFullYear();const month=now.getMonth();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const firstDay=(new Date(year,month,1).getDay()||7)-1; // 0=Lun
  const mName=['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'][month];
  let totE=0,giorniOk=0,giorniDati=0;
  let html=`<div style="padding:10px 14px;font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;border-bottom:1px solid #ede8dc">${mName} ${year}</div>`;
  html+=`<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;padding:10px 12px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;color:var(--ink3);text-align:center">
    ${['L','M','M','G','V','S','D'].map(function(d){return '<div>'+d+'</div>';}).join('')}</div>`;
  html+=`<div class="month-grid">`;
  for(let i=0;i<firstDay;i++)html+=`<div class="month-cell empty"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const ds=`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const src=ds===TODAY?S.meals:S.mealHistory?.[ds];
    const hasDati=src&&MK.some(k=>(src[k]||[]).length>0);
    const isToday=ds===TODAY;
    const isFuture=ds>TODAY;
    let cls='nodata';let e=0;
    if(hasDati){
      MK.forEach(k=>(src[k]||[]).forEach(it=>{e+=it.food.e*it.g/100;}));
      const burned=(S.workouts[ds]||[]).reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
      const net=Math.round(e)-burned;
      cls=net<=S.settings.kcal?'ok':'over';
      totE+=net;giorniDati++;if(cls==='ok')giorniOk++;
    }
    if(isFuture)cls='empty';
    html+=`<div class="month-cell ${cls}${isToday?' today':''}" title="${ds}">${d}</div>`;
  }
  html+=`</div>`;
  // Statistiche mese
  const mediaE=giorniDati>0?Math.round(totE/giorniDati):0;
  html+=`<div class="card"><div class="card-hdr">📊 STATISTICHE ${mName.toUpperCase()}</div><div class="card-body">
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
      <div class="stat-cell"><div class="stat-val" style="font-size:18px;color:var(--green)">${giorniOk}</div><div class="stat-lbl">GIORNI OK</div></div>
      <div class="stat-cell"><div class="stat-val" style="font-size:18px;color:var(--ink)">${giorniDati}</div><div class="stat-lbl">REGISTRATI</div></div>
      <div class="stat-cell"><div class="stat-val" style="font-size:18px;color:#2563eb">${mediaE}</div><div class="stat-lbl">MEDIA kcal</div></div>
    </div>
    <div style="margin-top:10px;display:flex;gap:10px;font-family:'IBM Plex Mono',monospace;font-size:10px">
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#dcfce7;border:1px solid #86efac;display:inline-block"></span>In deficit</span>
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#fee2e2;border:1px solid #fca5a5;display:inline-block"></span>Surplus</span>
      <span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:3px;background:#f3f4f6;border:1px solid #d1d5db;display:inline-block"></span>No dati</span>
    </div>
  </div></div>`;
  // Proiezione peso
  const lastPeso=S.profile.entries?.slice(-1)[0]?.peso;
  if(lastPeso&&S.profile.obiettivo==='dimagrimento'&&giorniDati>=3){
    const avgDeficit=S.settings.kcal-mediaE;
    const kgWeek=(avgDeficit*7)/7700;
    const pesoObiettivo=S.settings.pesoTarget;
    if(pesoObiettivo&&pesoObiettivo<lastPeso){
      const kgDa=lastPeso-pesoObiettivo;
      const settimane=kgDa/kgWeek;
      const dataTarget=new Date();dataTarget.setDate(dataTarget.getDate()+settimane*7);
      html+=`<div class="proj-card"><div class="proj-title">🎯 PROIEZIONE OBIETTIVO</div>
        <div class="proj-row"><span>Peso attuale</span><span class="proj-val">${lastPeso} kg</span></div>
        <div class="proj-row"><span>Obiettivo</span><span class="proj-val">${pesoObiettivo} kg</span></div>
        <div class="proj-row"><span>Da perdere</span><span class="proj-val">${kgDa.toFixed(1)} kg</span></div>
        <div class="proj-row"><span>Al ritmo attuale</span><span class="proj-val">~${kgWeek>0?kgWeek.toFixed(2):0} kg/sett.</span></div>
        <div class="proj-row"><span>Data stimata</span><span class="proj-val">${kgWeek>0?dataTarget.toLocaleDateString('it-IT',{day:'numeric',month:'long',year:'numeric'}):'—'}</span></div>
      </div>`;
    }
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

/* ════════ PESO OBIETTIVO ════════ */
function renderPesoObiettivo(){
  const lastPeso=S.profile.entries?.slice(-1)[0]?.peso;
  if(!lastPeso)return '';
  const target=S.settings.pesoTarget;
  if(!target)return `<div class="card"><div class="card-hdr">🎯 PESO OBIETTIVO</div><div class="card-body">
    <div style="font-size:12px;color:var(--ink3);font-family:'IBM Plex Mono',monospace;margin-bottom:10px">Imposta il tuo peso obiettivo per vedere i progressi</div>
    <div style="display:flex;gap:8px">
      <input class="form-inp" id="pt-val" type="number" inputmode="decimal" placeholder="es. 70" style="flex:1">
      <span style="font-size:13px;color:var(--ink3);align-self:center">kg</span>
    </div>
    <button class="big-btn success" style="margin:8px 0 0" onclick="snd();setPesoTarget()">SALVA OBIETTIVO</button>
  </div></div>`;
  const pct=Math.min(100,Math.max(0,Math.round((lastPeso-target)/(lastPeso-target)*100)));
  // Calcola progresso reale
  const start=S.profile.entries?.[0]?.peso||lastPeso;
  const totalDa=Math.abs(start-target)||1;
  const fatto=Math.abs(start-lastPeso);
  const progPct=Math.min(100,Math.round(fatto/totalDa*100));
  return `<div class="card"><div class="card-hdr">🎯 PESO OBIETTIVO
    <button onclick="snd();S.settings.pesoTarget=null;saveState();renderProfilo()" style="background:none;border:none;color:rgba(255,255,255,.6);cursor:pointer;font-size:11px;font-family:'IBM Plex Mono',monospace">modifica</button>
  </div><div class="card-body">
    <div style="display:flex;justify-content:space-between;font-family:'IBM Plex Mono',monospace;font-size:12px;margin-bottom:8px">
      <span>Attuale: <b>${lastPeso} kg</b></span><span>Obiettivo: <b>${target} kg</b></span>
    </div>
    <div class="goal-progress"><div class="goal-progress-fill" style="width:${progPct}%"></div></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);margin-top:4px;text-align:center">
      ${progPct}% completato · ${Math.abs(lastPeso-target).toFixed(1)} kg ${lastPeso>target?'da perdere':'guadagnati'}</div>
  </div></div>`;
}
function setPesoTarget(){
  const v=parseFloat(document.getElementById('pt-val').value);
  if(!v||v<30||v>300){alert('Peso non valido');return;}
  S.settings.pesoTarget=v;saveState();renderProfilo();
}

/* ════════ NOTA GIORNALIERA ════════ */
function toggleDailyNote(){
  const el=document.getElementById('daily-note-wrap');
  if(el)el.style.display=el.style.display==='none'?'block':'none';
}

/* ════════ WORKOUT STORICO ════════ */
function showWorkoutStorico(){
  resetScreen();setHdr('STORICO','WORKOUT',true);
  const days=[];
  for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);days.push(d.toISOString().slice(0,10));}
  let html=`<div style="padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);border-bottom:1px solid #ede8dc">ULTIMI 30 GIORNI</div>`;
  let hasAny=false;
  days.forEach(ds=>{
    const wos=S.workouts[ds]||[];
    if(!wos.length)return;
    hasAny=true;
    const totB=wos.reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
    const d=new Date(ds+'T12:00:00');
    html+=`<div class="hist-day-card">
      <div class="hist-day-hdr">
        <div>
          <div class="hist-day-date">${ds===TODAY?'💪 OGGI':fmtDate(ds)}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-top:2px">${wos.map(function(w){return (WI[w.type]||'')+w.name;}).join(' · ')}</div>
        </div>
        <div style="text-align:right">
          <div class="hist-day-kcal" style="color:#d97706">🔥 ${totB} kcal</div>
          <div style="font-size:9px;font-family:'IBM Plex Mono',monospace;color:var(--ink3)">${wos.length} allenamento${wos.length>1?'i':''}</div>
        </div>
      </div>
    </div>`;
  });
  if(!hasAny)html+=`<div class="empty"><div class="empty-ico">💪</div><div class="empty-txt">NESSUN WORKOUT<br>Inizia ad allenarti!</div></div>`;
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

/* ════════ NAVIGATION ════════ */
let _navStack=[],_navIdx=0,_navLock=false;
function navInit(){
  _navStack=[];_navIdx=0;
  try{history.replaceState({nt:true,idx:0},'','');}catch(e){}
  // Mostra warning se siamo su file:// (dati non persistenti)
  if(location.protocol==='file:'){
    setTimeout(()=>{
      const el=document.getElementById('hdr-sub');
      if(el)el.innerHTML='PRO <span style="color:#fbbf24;font-size:8px">⚠ LOCALE</span>';
    },500);
  }
  // Controlla onboarding al primo accesso
  if(checkOnboarding())return;
  showHome();
}
window.addEventListener('popstate',function(e){
  if(!CUR||_navLock)return;
  // navBack già gestisce il render - ignora questo evento se idx non corrisponde
  const st=e.state;
  if(st&&st.nt&&st.idx>0&&_navStack.length>1){
    _navStack.pop();_navIdx=Math.max(0,_navIdx-1);
    const prev=_navStack[_navStack.length-1];
    if(prev)prev(true);
  } else if(!st||!st.nt||st.idx===0){
    // root: vai a home
    if(_navStack.length>0){_navStack=[];showHome(true);}
    try{history.replaceState({nt:true,idx:0},'','');}catch{}
  }
});
function navPush(fn){
  _navIdx++;_navStack.push(fn);
  try{history.pushState({nt:true,idx:_navIdx},'','');}catch{}
  const s=document.getElementById('screen');
  if(s){s.classList.add('anim-in');setTimeout(()=>s.classList.remove('anim-in'),350);}
  fn(false);
}
function navReplace(fn){if(_navStack.length>0)_navStack[_navStack.length-1]=fn;else _navStack.push(fn);fn(false);}
function navBack(){
  if(_navLock)return;_navLock=true;setTimeout(()=>_navLock=false,400);
  if(_navStack.length>1){
    _navStack.pop();_navIdx=Math.max(0,_navIdx-1);
    try{history.back();}catch(e){}
    const prev=_navStack[_navStack.length-1];
    if(prev)prev(true);
  } else {
    _navStack=[];_navIdx=0;
    try{history.replaceState({nt:true,idx:0},'','');}catch(e){}
    bnavSet('home');
    showHome(true);
  }
}
function navGoHome(){
  _navStack=[];_navIdx=0;
  try{history.replaceState({nt:true,idx:0},'','');}catch(e){}
  bnavSet('home');
  const s=document.getElementById('screen');
  if(s){s.classList.add('anim-in');setTimeout(()=>s.classList.remove('anim-in'),350);}
  showHome(true);
}

/* ════════ LA MIA PAGINA — HOME UNIFICATA ════════ */
function showHome(fromBack){
  resetScreen();
  const now=new Date();
  const h=now.getHours();
  const greeting=h<12?'Buongiorno 🌅':h<17?'Buon pomeriggio ☀️':'Buonasera 🌙';
  const timeStr=now.toLocaleTimeString('it-IT',{hour:'2-digit',minute:'2-digit'});
  const dateStr=now.toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'long'});
  const tot=totDay();
  const burned=totBurnedToday();
  const net=tot.e-burned;
  const remaining=Math.max(0,S.settings.kcal-net);
  const surplus=Math.max(0,net-S.settings.kcal);
  const pct=Math.min(100,Math.round(net/S.settings.kcal*100));
  const protTarget=Math.round(S.settings.kcal*S.settings.protPct/400);
  const str=calcStreak();
  const lastPeso=S.profile.entries?.slice(-1)[0];
  const wos=S.workouts[TODAY]||[];
  const waterGoal=S.settings.waterGoal||8;

  setTimeout(()=>{
    const pb=document.getElementById('hdr-progress');
    if(pb){pb.style.width=pct+'%';pb.className='kcal-progress-fill'+(pct>=100?' over':pct>=85?' warn':'');}
  },50);

  // Costruzione icone pasti
  const mealIcons=MK.map(k=>{
    const m=MM[k];
    const items=S.meals[k]||[];
    const kk=Math.round(items.reduce((a,it)=>a+it.food.e*it.g/100,0));
    const mealPct=Math.min(100,Math.round(kk/(S.settings.kcal/5)*100));
    return`<div class="meal-btn ${m.cls}" onclick="snd();navPush(()=>showMeal('${k}'))">
      <div class="meal-ico">${m.ico}</div>
      <div class="meal-lbl">${m.label}</div>
      <div class="meal-kk" style="color:${m.color}">${kk?kk+' kcal':'+ aggiungi'}</div>
      <div class="meal-n">${items.length?items.length+' alim.':'tocca per aggiungere'}</div>
      <div style="width:100%;height:3px;background:rgba(0,0,0,.1);border-radius:2px;margin-top:6px;overflow:hidden"><div style="height:100%;width:${mealPct}%;background:${m.color};border-radius:2px;transition:width .5s"></div></div>
    </div>`;
  }).join('');

  // Icona Esercizi
  const exeKcal=burned;
  const exeIcon=`<div class="meal-btn exe" onclick="snd();bnavGo(showWorkout,'workout')">
    <div class="meal-ico">💪</div>
    <div class="meal-lbl">Esercizi</div>
    <div class="meal-kk" style="color:#10b981">${exeKcal?'−'+exeKcal+' kcal':'+ allena'}</div>
    <div class="meal-n">${wos.length?wos.length+(wos.length===1?' attività':' attività'):'nessuna oggi'}</div>
    <div style="width:100%;height:3px;background:rgba(0,0,0,.1);border-radius:2px;margin-top:6px;overflow:hidden"><div style="height:100%;width:${Math.min(100,wos.length*25)}%;background:#10b981;border-radius:2px;transition:width .5s"></div></div>
  </div>`;

  // Icona Il Mio Peso
  const pesoIcon=`<div class="meal-btn pes" onclick="snd();navPush(showDiarioPeso)">
    <div class="meal-ico">⚖️</div>
    <div class="meal-lbl">Il Mio Peso</div>
    <div class="meal-kk" style="color:#0ea5e9">${lastPeso?.peso?lastPeso.peso+' kg':'— kg'}</div>
    <div class="meal-n">${S.profile.entries?.some(e=>e.date===TODAY)?'aggiornato oggi':'tocca per misurare'}</div>
    <div style="width:100%;height:3px;background:rgba(0,0,0,.1);border-radius:2px;margin-top:6px;overflow:hidden"><div style="height:100%;width:${S.profile.entries?.some(e=>e.date===TODAY)?100:20}%;background:#0ea5e9;border-radius:2px"></div></div>
  </div>`;

  // Icona Acqua (con bottone + inline)
  const acquaIcon=`<div class="meal-btn acq" style="position:relative" onclick="snd();showAcquaDetail()">
    <div class="meal-ico">💧</div>
    <div class="meal-lbl">Acqua</div>
    <div class="meal-kk" style="color:#3b82f6">${S.water}/${waterGoal} bicch.</div>
    <div class="meal-n">${S.water*250} ml assunti</div>
    <div style="width:100%;height:3px;background:rgba(0,0,0,.1);border-radius:2px;margin-top:6px;overflow:hidden"><div style="height:100%;width:${Math.min(100,Math.round(S.water/waterGoal*100))}%;background:#3b82f6;border-radius:2px;transition:width .5s"></div></div>
    <button onclick="event.stopPropagation();snd();S.water=Math.min(${waterGoal}+4,S.water+1);saveState();showHome();" style="position:absolute;top:8px;right:8px;width:26px;height:26px;border-radius:50%;background:#3b82f6;color:#fff;border:none;font-size:14px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(59,130,246,.4)">+</button>
  </div>`;

  // Feedback giornaliero
  const fb=getDailyFeedback(tot,burned,S.settings.kcal,protTarget);
  const fbHtml=fb.length?`
    <div style="padding:4px 12px 0;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);text-transform:uppercase">💡 Suggerimenti</div>
    ${fb.map(m=>`<div style="margin:6px 12px 0;padding:10px 13px;background:var(--card);border:1.5px solid ${m.col};border-radius:var(--rk);display:flex;align-items:flex-start;gap:10px"><span style="font-size:18px;flex-shrink:0">${m.ico}</span><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink2);line-height:1.6">${m.txt}</span></div>`).join('')}`:'';

  setHdr('LA MIA PAGINA',dateStr.toUpperCase(),false);

  document.getElementById('screen').innerHTML=`
  <!-- HERO BANNER -->
  <div class="page-hero">
    <div class="page-hero-top">
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;opacity:.9">${greeting}</div>
        <div class="page-time">🕐 ${timeStr} · OBIETTIVO ${S.settings.kcal} kcal</div>
      </div>
      <div style="text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:6px">
        <div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;opacity:.4;margin-bottom:3px">NET KCAL OGGI</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:${surplus>0?'#f87171':'#86efac'}">${net}</div>
        </div>
        ${(()=>{
          const entries=S.profile.entries||[];
          const todayEntry=entries.find(e=>e.date===TODAY);
          const yEntry=entries.filter(e=>e.date!==TODAY).slice(-1)[0];
          const peso=todayEntry?.peso||lastPeso?.peso;
          if(!peso) return `<div style="text-align:right;cursor:pointer;opacity:.4" onclick="snd();navPush(showDiarioPeso)">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.7;letter-spacing:.5px">PESO</div>
            <div style="font-size:20px">⚖️</div>
          </div>`;
          const diff=yEntry&&yEntry.peso?+(peso-yEntry.peso).toFixed(1):null;
          const arrow=diff===null?'':diff<0?'↓':diff>0?'↑':'=';
          const arrowColor=diff<0?'#4ade80':diff>0?'#f87171':'#fbbf24';
          const diffLabel=diff===null?'':diff===0?'= stesso':diff<0?diff+' kg':'+'+diff+' kg';
          return `<div style="text-align:right;cursor:pointer;border-top:1px solid rgba(255,255,255,.12);padding-top:6px" onclick="snd();navPush(showDiarioPeso)">
            <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.45;margin-bottom:2px;letter-spacing:.5px">PESO</div>
            <div style="display:flex;align-items:baseline;justify-content:flex-end;gap:4px">
              <span style="font-family:'IBM Plex Mono',monospace;font-size:38px;font-weight:700;color:#fff;line-height:1">${peso}</span>
              <span style="font-family:'IBM Plex Mono',monospace;font-size:14px;color:rgba(255,255,255,.45)">kg</span>
            </div>
            ${diff!==null?`<div style="display:flex;align-items:center;justify-content:flex-end;gap:3px;margin-top:2px">
              <span style="font-size:14px;font-weight:900;color:${arrowColor}">${arrow}</span>
              <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;color:${arrowColor}">${diffLabel}</span>
            </div>`:''}
          </div>`;
        })()}
      </div>
    </div>
    <div class="page-kcal-row">
      ${buildKcalRing(net,S.settings.kcal)}
      <div class="page-kcal-info">
        <div class="page-kcal-big">${tot.e}<span style="font-size:13px;font-weight:400;opacity:.45"> kcal</span>${burned?` <span style="font-size:11px;color:#fbbf24">−${burned}🔥</span>`:''}</div>
        <div class="page-kcal-sub">${remaining>0?`ancora ${remaining} kcal disponibili`:`surplus di ${surplus} kcal`}</div>
        ${str>=2?`<div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:#fbbf24;margin-top:4px">🔥 ${str} giorni di streak!</div>`:''}
      </div>
    </div>
    <div class="page-macro-row">
      <div class="pmac"><div class="pmac-v">${tot.p}g</div><div class="pmac-l">PROT</div></div>
      <div class="pmac"><div class="pmac-v">${tot.c}g</div><div class="pmac-l">CARB</div></div>
      <div class="pmac"><div class="pmac-v">${tot.f}g</div><div class="pmac-l">GRAS</div></div>
      <div class="pmac" style="background:rgba(59,130,246,.25)"><div class="pmac-v" style="color:#93c5fd">${S.water*250}ml</div><div class="pmac-l">ACQUA</div></div>
      ${burned?`<div class="pmac" style="background:rgba(251,191,36,.15)"><div class="pmac-v" style="color:#fbbf24">${burned}</div><div class="pmac-l">BRUCIATE</div></div>`:''}
    </div>
  </div>

  <!-- 8 ICONE PRINCIPALI -->
  <div class="meal-grid" style="padding:10px 10px 4px">
    ${mealIcons}
    ${exeIcon}
    ${pesoIcon}
    ${acquaIcon}
  </div>

  <!-- TOTALE GIORNALIERO -->
  <div style="padding:4px 12px 8px">
    <div class="card">
      <div class="card-hdr">📊 TOTALE GIORNALIERO</div>
      <div class="card-body">
        ${macroRing(tot.e,tot.p,tot.c,tot.f)}
        ${mBar('KCAL NETTE',net,S.settings.kcal,'#1a1a2e')}
        ${burned?`<div style="display:flex;align-items:center;justify-content:space-between;padding:5px 0;border-bottom:1px solid #ede8dc;font-family:'IBM Plex Mono',monospace;font-size:11px"><span>🔥 Bruciate sport</span><span style="color:#d97706;font-weight:700">−${burned} kcal</span></div>`:''}
        ${mBar('PROTEINE',tot.p,protTarget,'#16a34a')}
        ${mBar('CARBOIDRATI',tot.c,Math.round(S.settings.kcal*.5/4),'#d97706')}
        ${mBar('GRASSI',tot.f,Math.round(S.settings.kcal*.25/9),'#dc2626')}
        ${mBar('FIBRE',tot.fi,25,'#7c3aed')}
      </div>
    </div>
  </div>

  ${fbHtml}

  <!-- BOTTONI ACCESSO RAPIDO -->
  <div style="padding:8px 12px 6px;display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <button class="big-btn outline" style="font-size:11px;padding:12px;margin:0;border-radius:var(--rk)" onclick="snd();navPush(showRiepilogo)">📅 SETTIMANA</button>
    <button class="big-btn outline" style="font-size:11px;padding:12px;margin:0;border-radius:var(--rk)" onclick="snd();navPush(showReportMensile)">📊 MESE</button>
  </div>
  <div style="padding:0 12px 16px">
    <button class="big-btn" style="background:var(--ink);color:#fff;font-size:12px;padding:14px;margin:0;border-radius:var(--rk);width:100%;letter-spacing:1px" onclick="snd();showMoreMenu()">⋯ &nbsp;ALTRO — Alimenti · Piano · Ricette · Storico</button>
  </div>`;
}

/* showDiario ora coincide con la home */
function showDiario(fromBack){showHome(fromBack);}

/* Dettaglio acqua */
function showAcquaDetail(){
  const waterGoal=S.settings.waterGoal||8;
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">💧 Acqua di Oggi</div>
    <div style="text-align:center;padding:10px 0 16px">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:52px;font-weight:700;color:#3b82f6">${S.water}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--ink3)">/ ${waterGoal} bicchieri · ${S.water*250} ml</div>
      <div style="height:6px;background:#e8e3d8;border-radius:3px;margin:12px 0;overflow:hidden"><div style="height:100%;width:${Math.min(100,Math.round(S.water/waterGoal*100))}%;background:linear-gradient(90deg,#3b82f6,#60a5fa);border-radius:3px;transition:width .4s"></div></div>
    </div>
    <div class="water-cups" style="justify-content:center;margin-bottom:16px">${Array.from({length:waterGoal},(_,i)=>`<div class="w-cup ${i<S.water?'filled':''}" onclick="snd();S.water=${i+1};saveState();document.getElementById('modal').querySelector('.modal-title').nextElementSibling.querySelector('div').textContent=${i+1};showAcquaDetail()">💧</div>`).join('')}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <button class="conf-btn" onclick="snd();S.water=Math.max(0,S.water-1);saveState();closeModal();showHome()">− Togli</button>
      <button class="conf-btn green-btn" onclick="snd('confirm');S.water=Math.min(${waterGoal}+4,S.water+1);saveState();closeModal();showHome()">+ Bicchiere</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
}



/* ════════ DIARIO PESO CORPOREO ════════ */
function showDiarioPeso(fb){
  resetScreen();setHdr('⚖️ IL MIO PESO','MISURAZIONI',true);
  const p=S.profile;
  const last=p.entries&&p.entries.length?p.entries[p.entries.length-1]:null;
  const todayEntry=p.entries?.find(e=>e.date===TODAY);
  const bmi=last&&p.altezza?+(parseFloat(last.peso)/(p.altezza/100)**2).toFixed(1):null;
  const bmiL=bmi?bmi<18.5?'Sottopeso':bmi<25?'Normopeso':bmi<30?'Sovrappeso':'Obeso':'—';
  const bmiC=bmi?bmi<18.5?'#d97706':bmi<25?'var(--green)':bmi<30?'#d97706':'var(--red)':'var(--ink3)';
  // Calcola BMR e TDEE
  let bmr=null,tdee=null,kOb=null;
  if(p.altezza&&p.eta&&last?.peso){
    const fAtt={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
    bmr=p.sesso==='m'?Math.round(10*parseFloat(last.peso)+6.25*parseFloat(p.altezza)-5*parseFloat(p.eta)+5):Math.round(10*parseFloat(last.peso)+6.25*parseFloat(p.altezza)-5*parseFloat(p.eta)-161);
    tdee=Math.round(bmr*(fAtt[p.attivita]||1.55));
    kOb=p.obiettivo==='dimagrimento'?tdee-500:p.obiettivo==='massa'?tdee+300:tdee;
  }
  // Grasso e massa magra
  const grasso=last?.grasso?parseFloat(last.grasso):null;
  const massaMagra=grasso&&last?.peso?+(parseFloat(last.peso)*(1-grasso/100)).toFixed(1):null;
  const grassoKg=grasso&&last?.peso?+(parseFloat(last.peso)*grasso/100).toFixed(1):null;
  let html=`
  <!-- HERO DATI -->
  <div style="background:var(--ink);color:#fff;padding:16px;display:flex;flex-wrap:wrap;gap:8px">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:.4;width:100%;letter-spacing:1px;text-transform:uppercase">Ultima misurazione${last?.date?' — '+last.date:''}</div>
    ${[
      ['⚖️','PESO',last?.peso?last.peso+' kg':'—','#86efac'],
      ['📏','BMI',bmi?bmi+' ('+bmiL+')':'—',bmiC],
      ['🔥','% GRASSO',last?.grasso?last.grasso+'%':'—','#fb923c'],
      ['💪','MASSA MAGRA',massaMagra?massaMagra+' kg':'—','#60a5fa'],
      ['🍖','MASSA GRASSA',grassoKg?grassoKg+' kg':'—','#f87171'],
      ['👗','VITA',last?.vita?last.vita+' cm':'—','#c084fc'],
      ['🍑','FIANCHI',last?.fianchi?last.fianchi+' cm':'—','#f472b6'],
      ['🧬','BMR',bmr?bmr+' kcal/g':'—','#34d399'],
      ['⚡','TDEE',tdee?tdee+' kcal/g':'—','#fbbf24'],
      ['🎯','OBJ CALORICO',kOb?kOb+' kcal/g':'—','#a78bfa'],
    ].map(([ico,lbl,val,col])=>`
      <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:10px 12px;min-width:calc(50% - 4px);flex:1">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.45;letter-spacing:1px;margin-bottom:4px">${ico} ${lbl}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:${col}">${val}</div>
      </div>`).join('')}
  </div>
  <!-- INSERISCI OGGI -->
  <div class="card">
    <div class="card-hdr">📅 INSERISCI MISURAZIONE DI OGGI</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 12px">
      ${[['Peso (kg)','dp-peso','0.1',last?.peso||''],['% Grasso','dp-grasso','0.1',last?.grasso||''],['Vita (cm)','dp-vita','1',last?.vita||''],['Fianchi (cm)','dp-fianchi','1',last?.fianchi||'']].map(([l,id,step,val])=>`
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">${l}</div>
        <input class="form-inp" id="${id}" type="number" step="${step}" inputmode="decimal" value="${val}" placeholder="${l}">
      </div>`).join('')}
    </div>
    <div style="padding:0 12px"><textarea id="dp-note" placeholder="Note..." style="height:40px;margin-bottom:8px">${todayEntry?.note||''}</textarea></div>
    <button class="big-btn success" onclick="snd('confirm');saveDiarioPeso()">💾 SALVA MISURAZIONE DI OGGI</button>
  </div>
  <!-- STORICO -->
  ${p.entries&&p.entries.length?`<div class="card"><div class="card-hdr">📋 STORICO MISURAZIONI (${p.entries.length})</div>
    ${[...p.entries].reverse().slice(0,10).map((e,i)=>{
      const bm=p.altezza&&e.peso?+(parseFloat(e.peso)/(parseFloat(p.altezza)/100)**2).toFixed(1):null;
      return`<div class="hist-row">
        <div class="hist-date">${e.date===TODAY?'📅 Oggi':e.date}</div>
        <div class="hist-vals" style="font-size:10px">
          ${e.peso?`⚖️ <b>${e.peso}kg</b> `:''} 
          ${bm?`BMI:${bm} `:''}
          ${e.grasso?`🔥${e.grasso}% `:''}
          ${e.vita?`👗${e.vita}cm `:''}
          ${e.fianchi?`🍑${e.fianchi}cm `:''}
        </div>
        <button class="hist-del" onclick="snd('delete');delEntry(${p.entries.length-1-i});showDiarioPeso()">✕</button>
      </div>`;}).join('')}
  </div>`:''}`;
  document.getElementById('screen').innerHTML=html;
}

function saveDiarioPeso(){
  const peso=document.getElementById('dp-peso')?.value||'';
  const grasso=document.getElementById('dp-grasso')?.value||'';
  const vita=document.getElementById('dp-vita')?.value||'';
  const fianchi=document.getElementById('dp-fianchi')?.value||'';
  const note=document.getElementById('dp-note')?.value||'';
  if(!peso){showToast('⚠ Inserisci almeno il peso','red');return;}
  if(!S.profile.entries)S.profile.entries=[];
  // Rimuovi eventuale voce di oggi e sostituisci
  S.profile.entries=S.profile.entries.filter(e=>e.date!==TODAY);
  S.profile.entries.push({date:TODAY,peso:parseFloat(peso),vita,fianchi,grasso,note});
  S.profile.entries.sort((a,b)=>a.date.localeCompare(b.date));
  saveState();
  showToast('✅ Misurazione salvata!','green');
  navReplace(showDiarioPeso);
}


function showMeal(mk,fromBack){
  resetScreen();
  const m=MM[mk];const items=S.meals[mk]||[];
  const kk=Math.round(items.reduce((a,it)=>a+it.food.e*it.g/100,0));
  setHdr(m.ico+' '+m.label.toUpperCase(),kk+' KCAL',true);
  let html='';
  if(!items.length){html=`<div class="empty"><div class="empty-ico">${m.ico}</div><div class="empty-txt">NESSUN ALIMENTO<br>AGGIUNTO</div></div>`;}
  else items.forEach((it,i)=>{
    const k=Math.round(it.food.e*it.g/100);
    html+=`<div class="log-item" onclick="snd();editMealItem('${mk}',${i})" style="cursor:pointer">
      <div class="log-emo">${it.food.emoji||'🍽'}</div>
      <div class="log-inf">
        <div class="log-nm">${it.food.name}</div>
        <div class="log-dt">${it.g}g · P:${(it.food.p*it.g/100).toFixed(1)} C:${(it.food.c*it.g/100).toFixed(1)} G:${(it.food.f*it.g/100).toFixed(1)}</div>
      </div>
      <div class="log-kk">${k}</div>
      <button class="log-del" onclick="event.stopPropagation();snd('delete');rmMeal('${mk}',${i})">✕</button>
    </div>`;
  });
  html+=`<div class="add-btn-row"><button class="add-btn" onclick="snd();navPush(()=>showAlimenti('${mk}'))">+ AGGIUNGI ALIMENTO</button></div>`;
  html+=``;
  document.getElementById('screen').innerHTML=html;
}
let _undoMeal=null,_undoTimer=null;
function editMealItem(mk,i){
  const it=S.meals[mk]&&S.meals[mk][i];if(!it)return;
  const f=it.food;
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
      <span style="font-size:36px">${f.emoji||'🍽'}</span>
      <div>
        <div class="modal-title" style="margin-bottom:2px">${f.name}</div>
        <div class="modal-sub">${f.e} kcal/100g</div>
      </div>
    </div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:6px">Quantità (grammi)</div>
    <input class="gram-inp" id="edit-g" type="number" value="${it.g}" min="1" max="2000" inputmode="decimal" style="width:100%;text-align:center;font-size:22px" oninput="updEditPrev(${i},'${mk}')">
    <div class="prev-box" id="edit-pv" style="margin-top:8px">${it.g}g → ${Math.round(f.e*it.g/100)} kcal · P:${(f.p*it.g/100).toFixed(1)}g · C:${(f.c*it.g/100).toFixed(1)}g · G:${(f.f*it.g/100).toFixed(1)}g</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">
      <button class="conf-btn" style="margin-top:0;background:var(--paper);color:var(--ink);border:1.5px solid var(--ink)" onclick="snd('delete');rmMeal('${mk}',${i});closeModal()">🗑 RIMUOVI</button>
      <button class="conf-btn green-btn" style="margin-top:0" onclick="snd('confirm');saveMealEdit('${mk}',${i})">✓ SALVA</button>
    </div>`;
  document.getElementById('modal').classList.add('open');
}
function updEditPrev(i,mk){
  const it=S.meals[mk]&&S.meals[mk][i];if(!it)return;
  const g=parseFloat(document.getElementById('edit-g').value)||0;
  const f=it.food;
  document.getElementById('edit-pv').textContent=`${g}g → ${Math.round(f.e*g/100)} kcal · P:${(f.p*g/100).toFixed(1)}g · C:${(f.c*g/100).toFixed(1)}g · G:${(f.f*g/100).toFixed(1)}g`;
}
function saveMealEdit(mk,i){
  const g=parseFloat(document.getElementById('edit-g').value)||0;
  if(g<=0){showToast('⚠ Grammi non validi','red');return;}
  S.meals[mk][i].g=g;saveState();closeModal();
  showToast('✅ Quantità aggiornata','green');
  navReplace(()=>showMeal(mk,false));
}
function rmMeal(mk,i){
  const item=S.meals[mk][i];
  S.meals[mk].splice(i,1);saveState();
  _undoMeal={mk,i,item};
  clearTimeout(_undoTimer);
  // Show undo toast
  const el=document.getElementById('toast');
  if(el){
    el.innerHTML='🗑 Rimosso &nbsp;<b style="text-decoration:underline;cursor:pointer" onclick="undoRmMeal()">ANNULLA</b>';
    el.className='toast show';
    _undoTimer=setTimeout(()=>{el.classList.remove('show');_undoMeal=null;},3500);
  }
  navReplace(()=>showMeal(mk,false));
}
function undoRmMeal(){
  if(!_undoMeal)return;
  clearTimeout(_undoTimer);
  const{mk,i,item}=_undoMeal;_undoMeal=null;
  if(!S.meals[mk])S.meals[mk]=[];
  S.meals[mk].splice(i,0,item);saveState();
  showToast('↩ Ripristinato','green');
  navReplace(()=>showMeal(mk,false));
}

/* ════════ ALIMENTI — FIX SCROLL ════════
   La schermata usa la .screen normale che scrolla.
   Barra ricerca e categorie: position:sticky in CSS.
   NO flex column sul #screen, NO overflow:hidden.
*/
let _srch='',_cat='Tutti',_mt=null;
function showAlimenti(mt,fromBack){
  _mt=mt;if(!fromBack){_srch='';_cat='Tutti';}
  const title=mt?'AGGIUNGI A '+MM[mt].label.toUpperCase():'ALIMENTI';
  setHdr(title,'CERCA NEL DATABASE',true);
  resetScreen();
  renderAlimenti();
}
function renderAlimenti(){
  const cats=['Tutti',...new Set(DB.map(f=>f.cat))];
  document.getElementById('screen').innerHTML=`
    <div class="srch-bar" style="display:flex;gap:6px;align-items:center">
      <input class="srch-inp" id="si" type="search" placeholder="🔍  Cerca alimento, brand..." value="${_srch}" oninput="onSrch(this.value)" autocomplete="off" style="flex:1">
      <button onclick="snd();showAddCustomFood()" style="padding:9px 10px;background:var(--green);color:#fff;border:none;border-radius:var(--r);font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;cursor:pointer;flex-shrink:0;white-space:nowrap">+MIO</button>
    </div>
    <div class="cats-bar" id="cr">${cats.map(c=>`<div class="cat-pill ${c===_cat?'on':''}" onclick="onCat('${c}')">${c}</div>`).join('')}</div>
    <div id="fl">${foodListHTML()}</div>`;
}
function hl(text,q){
  if(!q||!text)return text||'';
  try{const re=new RegExp('('+q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');return String(text).replace(re,'<mark>$1</mark>');}
  catch(e){return text;}
}
function foodListHTML(){
  const _db=getDB(); // single call
  let r=_db;
  if(_srch)r=r.filter(f=>f.name.toLowerCase().includes(_srch.toLowerCase())||(f.brand||'').toLowerCase().includes(_srch.toLowerCase())||f.cat.toLowerCase().includes(_srch.toLowerCase()));
  if(_cat!=='Tutti')r=r.filter(f=>f.cat===_cat);
  // Mostra recenti se non c'è ricerca e categoria = Tutti
  if(!_srch&&_cat==='Tutti'&&S.recentFoods&&S.recentFoods.length){
    const recenti=S.recentFoods.map(id=>_db.find(x=>x.id===id)).filter(Boolean);
    if(recenti.length){
      const recHtml=`<div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1px;color:var(--ink3);background:var(--paper)">⏱ USATI DI RECENTE</div>`+
        recenti.map(f=>`<div class="food-row" style="background:#fffef9" onclick="snd();openFoodModal(${f.id})"><div class="food-emo">${f.emoji||'🍽'}</div><div class="food-inf"><div class="food-nm">${f.name}</div><div class="food-ct">${f.cat}</div></div><div class="food-kk">${f.e}<span class="food-kk-u">kcal</span></div></div>`).join('')+
        `<div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1px;color:var(--ink3);background:var(--paper)">📋 TUTTI GLI ALIMENTI</div>`;
      return recHtml+r.slice(0,60).map(f=>`<div class="food-row" onclick="snd();openFoodModal(${f.id})"><div class="food-emo">${f.emoji||'🍽'}</div><div class="food-inf"><div class="food-nm">${f.name}${f.brand?` <span style="font-weight:400;font-size:10px;color:var(--ink3)">· ${f.brand}</span>`:''}</div><div class="food-ct">${f.cat} · P:${f.p}g C:${f.c}g G:${f.f}g</div></div><div class="food-kk">${f.e}<span class="food-kk-u">kcal</span></div></div>`).join('');
    }
  }
  if(!r.length)return`<div class="empty"><div class="empty-ico">🔍</div><div class="empty-txt">NESSUN RISULTATO PER<br>"${_srch}"</div><div style="margin-top:16px"><button onclick="snd();showAddCustomFood()" style="padding:12px 20px;background:var(--green);color:#fff;border:none;border-radius:var(--rk);font-family:IBM Plex Mono,monospace;font-size:11px;font-weight:700;cursor:pointer;letter-spacing:.5px">+ AGGIUNGI ALIMENTO PERSONALIZZATO</button></div></div>`;
  return r.slice(0,80).map(f=>`<div class="food-row" onclick="snd();openFoodModal(${f.id})"><div class="food-emo">${f.emoji||'🍽'}</div><div class="food-inf"><div class="food-nm">${hl(f.name,_srch)}${f.brand?` <span style="font-weight:400;font-size:10px;color:var(--ink3)">· ${hl(f.brand,_srch)}</span>`:''}</div><div class="food-ct">${f.cat} · P:${f.p}g C:${f.c}g G:${f.f}g</div></div><div class="food-kk">${f.e}<span class="food-kk-u">kcal</span></div></div>`).join('')+(r.length>80?`<div style="padding:10px;text-align:center;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3)">+${r.length-80} · affina la ricerca</div>`:'');
}
let _srchTimer=null;
function onSrch(v){
  _srch=v;
  clearTimeout(_srchTimer);
  _srchTimer=setTimeout(()=>{
    _cat='Tutti';
    const fl=document.getElementById('fl');
    if(fl)fl.innerHTML=foodListHTML();
    document.querySelectorAll('#cr .cat-pill').forEach(p=>p.classList.toggle('on',p.textContent==='Tutti'));
  },160);
}
function onCat(c){_cat=c;document.getElementById('fl').innerHTML=foodListHTML();document.querySelectorAll('#cr .cat-pill').forEach(p=>p.classList.toggle('on',p.textContent===c));}

/* ════════ FOOD MODAL ════════ */
function openFoodModal(id){
  const f=getDB().find(x=>x.id===id);if(!f)return;
  const opts=MK.map(k=>`<option value="${k}" ${_mt===k?'selected':''}>${MM[k].ico} ${MM[k].label}</option>`).join('');
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-size:42px;text-align:center;margin-bottom:8px">${f.emoji||'🍽'}</div>
    <div class="modal-title">${f.name}</div>
    <div class="modal-sub">${f.cat}${f.brand?' · '+f.brand:''}${f.custom?' [MIO]':''} · valori per 100g</div>
    <div class="nut-grid">
      <div class="nut-cell" style="background:var(--ink);border-color:var(--ink)"><div class="nut-val" style="color:#fff">${f.e}</div><div class="nut-lbl" style="color:rgba(255,255,255,.5)">kcal</div></div>
      <div class="nut-cell" style="background:#f0fdf4;border-color:#86efac"><div class="nut-val" style="color:#16a34a">${f.p}g</div><div class="nut-lbl">Proteine</div></div>
      <div class="nut-cell" style="background:#fffbeb;border-color:#fde68a"><div class="nut-val" style="color:#d97706">${f.c}g</div><div class="nut-lbl">Carboidrati</div></div>
      <div class="nut-cell" style="background:#fff1f2;border-color:#fecdd3"><div class="nut-val" style="color:#dc2626">${f.f}g</div><div class="nut-lbl">Grassi</div></div>
    </div>
    <table class="nut-tbl">
      <tr><td class="nut-sub">di cui zuccheri</td><td>${f.s}g</td></tr>
      <tr><td class="nut-sub">di cui saturi</td><td>${f.sa}g</td></tr>
      <tr><td>Fibre</td><td>${f.fi||0}g</td></tr>
      <tr><td>Sodio</td><td>${f.na}mg</td></tr>
    </table>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:var(--ink3);margin-bottom:8px">Aggiungi al diario</div>
    <div class="gram-row">
      <input class="gram-inp" id="gi" type="number" value="100" min="1" max="2000" inputmode="decimal" oninput="updPrev(${f.id})">
      <select class="meal-sel" id="ms">${opts}</select>
    </div>
    <div class="prev-box" id="pv">100g → ${f.e} kcal · P:${f.p}g · C:${f.c}g · G:${f.f}g</div>
    <button class="conf-btn green-btn" onclick="snd('confirm');addFood(${f.id})">✓ AGGIUNGI AL DIARIO</button>`;
  document.getElementById('modal').classList.add('open');
}
function updPrev(id){
  const f=getDB().find(x=>x.id===id);if(!f)return;
  const g=parseFloat(document.getElementById('gi').value)||100;const r=g/100;
  document.getElementById('pv').textContent=`${g}g → ${Math.round(f.e*r)} kcal · P:${(f.p*r).toFixed(1)}g · C:${(f.c*r).toFixed(1)}g · G:${(f.f*r).toFixed(1)}g`;
}
function addFood(id){
  const f=getDB().find(x=>x.id===id);if(!f)return;
  const g=parseFloat(document.getElementById('gi').value)||100;
  const mk=document.getElementById('ms').value;
  if(!S.meals[mk])S.meals[mk]=[];
  S.meals[mk].push({food:f,g});addToRecent(f);saveState();closeModal();
  const kcal=Math.round(f.e*g/100);
  showToast('✅ '+f.name+' · '+kcal+' kcal','green');
  if(_navStack.length>1)_navStack.pop();
  navReplace(()=>showMeal(_mt||mk,false));
}
function closeModal(){document.getElementById('modal').classList.remove('open');}
function modalBg(e){if(e.target===document.getElementById('modal')){snd();closeModal();}}

/* ════════ PIANO — FIX SCROLL ════════ */
let _pd=TODAY;
const DIET_PLANS={
  dimagrimento:{label:'🥗 Dimagrimento',days:{colazione:[{foodId:78,g:200},{foodId:31,g:150},{foodId:100,g:15}],pranzo:[{foodId:54,g:150},{foodId:250,g:100},{foodId:37,g:80}],cena:[{foodId:67,g:130},{foodId:13,g:200},{foodId:93,g:10}],merenda:[{foodId:32,g:200}]}},
  mantenimento:{label:'⚖️ Mantenimento',days:{colazione:[{foodId:76,g:200},{foodId:42,g:60},{foodId:31,g:100},{foodId:141,g:20}],pranzo:[{foodId:36,g:180},{foodId:54,g:120},{foodId:98,g:80}],cena:[{foodId:56,g:150},{foodId:11,g:150},{foodId:40,g:50}],merenda:[{foodId:105,g:30},{foodId:32,g:150}]}},
  massa:{label:'💪 Aumento Massa',days:{colazione:[{foodId:76,g:300},{foodId:42,g:80},{foodId:91,g:120},{foodId:141,g:25}],pranzo:[{foodId:36,g:220},{foodId:54,g:180},{foodId:81,g:30}],cena:[{foodId:56,g:200},{foodId:38,g:200},{foodId:11,g:100}],merenda:[{foodId:184,g:30},{foodId:76,g:200},{foodId:31,g:100}]}}
};
function showPiano(fb){resetScreen();setHdr('PIANO','ALIMENTARE',true);renderPiano();}
function renderPiano(){
  const plan=getPlan(_pd);const days=[];
  const ref=new Date(_pd+'T12:00:00');ref.setDate(ref.getDate()-((ref.getDay()||7)-1));
  for(let i=0;i<7;i++){const d=new Date(ref);d.setDate(ref.getDate()+i);const ds=d.toISOString().slice(0,10);const has=S.calPlans[ds]&&MK.some(k=>(S.calPlans[ds][k]||[]).length>0);days.push({ds,day:d.getDate(),lbl:['Lu','Ma','Me','Gi','Ve','Sa','Do'][i],today:ds===TODAY,sel:ds===_pd,has});}
  const tot=planTot(_pd);
  const ob=S.profile.obiettivo||'mantenimento';
  let html=`
    <div class="week-strip">${days.map(d=>`<div class="wday${d.today?' today':''}${d.sel?' sel':''}${d.has?' has':''}" onclick="snd();selPD('${d.ds}')"><div class="wdn">${d.lbl}</div><div class="wdd">${d.day}</div></div>`).join('')}</div>
    <div style="padding:8px 14px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);border-bottom:1px solid #ede8dc;background:var(--card);display:flex;align-items:center;justify-content:space-between">
      <span>${fmtDate(_pd).toUpperCase()} · <b>${tot.e} kcal</b></span>
      <button onclick="snd();copyDayToDiary()" style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;background:var(--green);color:#fff;border:none;border-radius:4px;padding:4px 8px;cursor:pointer">📋 COPIA NEL DIARIO</button>
    </div>
    <div style="padding:8px 12px;border-bottom:1px solid #ede8dc">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;color:var(--ink3);margin-bottom:6px">💡 DIETA SUGGERITA:</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${Object.entries(DIET_PLANS).map(([k,v])=>`<button onclick="snd();applyDietPlan('${k}')" style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;padding:5px 9px;border:1.5px solid ${ob===k?'var(--green)':'#ccc'};background:${ob===k?'var(--greenl)':'var(--paper)'};color:${ob===k?'var(--greend)':'var(--ink)'};border-radius:4px;cursor:pointer">${v.label}</button>`).join('')}
      </div>
    </div>`;
  MK.forEach(k=>{
    const m=MM[k];const items=plan[k]||[];
    const kk=Math.round(items.reduce((a,it)=>{const fd=getDB().find(x=>x.id===it.foodId);return a+(fd?fd.e*it.g/100:0);},0));
    html+=`<div style="border-bottom:1px solid #ede8dc">
      <div class="pmeal-hdr" onclick="togglePM('pm${k}')"><span class="pmeal-ttl">${m.ico} ${m.label}</span><span class="pmeal-kk">${kk} kcal ▾</span></div>
      <div id="pm${k}">
        ${items.map((it,i)=>{const fd=getDB().find(x=>x.id===it.foodId);return fd?`<div class="log-item"><div class="log-emo">${fd.emoji||'🍽'}</div><div class="log-inf"><div class="log-nm">${fd.name}</div><div class="log-dt">${it.g}g · ${Math.round(fd.e*it.g/100)} kcal</div></div><button class="log-del" onclick="snd('delete');rmPI('${_pd}','${k}',${i})">✕</button></div>`:''}).join('')}
        <div class="add-btn-row"><button class="add-btn" onclick="snd();planAdd('${_pd}','${k}')">+ AGGIUNGI</button></div>
      </div></div>`;
  });
  html+=`<div style="padding:10px 12px"><textarea placeholder="Note del giorno..." oninput="getPlan('${_pd}').note=this.value;saveState()">${plan.note||''}</textarea></div>`;
  html+=``;
  document.getElementById('screen').innerHTML=html;
}
function applyDietPlan(key){
  if(!confirm('Applica il piano '+DIET_PLANS[key].label+' a questo giorno?'))return;
  const plan=getPlan(_pd);const tmpl=DIET_PLANS[key].days;
  MK.forEach(k=>{plan[k]=[...(tmpl[k]||[])];});saveState();renderPiano();
}
function copyDayToDiary(){
  if(!confirm('Copia il piano di '+fmtDate(_pd)+' nel diario di OGGI?'))return;
  const plan=getPlan(_pd);
  MK.forEach(k=>{(plan[k]||[]).forEach(it=>{const fd=getDB().find(x=>x.id===it.foodId);if(fd){if(!S.meals[k])S.meals[k]=[];S.meals[k].push({food:fd,g:it.g});}});});
  saveState();showToast('✅ Piano copiato!','green');
}
function getPlan(d){if(!S.calPlans[d])S.calPlans[d]={colazione:[],pranzo:[],cena:[],merenda:[],note:''};return S.calPlans[d];}
function planTot(d){const p=getPlan(d);let t={e:0,p:0,c:0,f:0};MK.forEach(k=>(p[k]||[]).forEach(it=>{const fd=getDB().find(x=>x.id===it.foodId);if(fd){const r=it.g/100;t.e+=fd.e*r;t.p+=fd.p*r;t.c+=fd.c*r;t.f+=fd.f*r;}}));return{e:Math.round(t.e),p:+(t.p.toFixed(1)),c:+(t.c.toFixed(1)),f:+(t.f.toFixed(1))};}
function selPD(d){_pd=d;renderPiano();}
function togglePM(id){const el=document.getElementById(id);if(el)el.style.display=el.style.display===''?'none':'';}
function rmPI(d,k,i){getPlan(d)[k].splice(i,1);saveState();renderPiano();}
let _pt={};
function planAdd(d,k){
  _pt={d,k};
  const cats=['Tutti',...new Set(DB.map(f=>f.cat))];
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;margin-bottom:10px;text-transform:uppercase">Aggiungi a ${MM[k].label}</div>
    <input class="srch-inp" id="ps" type="search" placeholder="🔍 Cerca..." oninput="pSrch(this.value)" autocomplete="off" style="width:100%;margin-bottom:8px">
    <div style="display:flex;gap:5px;overflow-x:auto;padding-bottom:6px;scrollbar-width:none" id="pcts">${cats.map(c=>`<div class="cat-pill ${c==='Tutti'?'on':''}" style="flex-shrink:0" onclick="pCat('${c}',this)">${c}</div>`).join('')}</div>
    <div id="pl" style="max-height:50vh;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-top:4px">${pFoodHTML('','Tutti')}</div>`;
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('ps')?.focus(),150);
}
function pFoodHTML(q,cat){
  let r=DB;if(q)r=r.filter(f=>f.name.toLowerCase().includes(q.toLowerCase())||(f.brand||'').toLowerCase().includes(q.toLowerCase()));if(cat&&cat!=='Tutti')r=r.filter(f=>f.cat===cat);
  return r.slice(0,60).map(f=>`<div class="food-row" onclick="snd('confirm');pSelF(${f.id})"><div class="food-emo">${f.emoji||'🍽'}</div><div class="food-inf"><div class="food-nm">${f.name}</div><div class="food-ct">${f.cat}</div></div><div class="food-kk">${f.e}<span class="food-kk-u">kcal</span></div></div>`).join('');
}
let _pcat='Tutti';
function pSrch(v){document.getElementById('pl').innerHTML=pFoodHTML(v,_pcat);}
function pCat(c,el){_pcat=c;document.querySelectorAll('#pcts .cat-pill').forEach(p=>p.classList.remove('on'));el.classList.add('on');document.getElementById('pl').innerHTML=pFoodHTML(document.getElementById('ps')?.value||'',c);}
function pSelF(id){
  const{d,k}=_pt;
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:10px">${getDB().find(x=>x.id===id)?.name}</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);margin-bottom:10px">Quantità (grammi)</div>
    <input class="gram-inp" id="pg" type="number" value="100" min="1" max="2000" inputmode="decimal" style="width:100%;text-align:center;margin-bottom:12px">
    <button class="conf-btn green-btn" onclick="snd('confirm');confirmPlanAdd(${id})">✓ AGGIUNGI</button>`;
}
function confirmPlanAdd(id){
  const g=parseFloat(document.getElementById('pg').value)||100;
  const{d,k}=_pt;getPlan(d)[k].push({foodId:id,g});saveState();closeModal();renderPiano();
}

/* ════════ WORKOUT ════════ */
let _wd=TODAY,_wt='Tutti';
function showWorkout(fb){resetScreen();setHdr('WORKOUT','ALLENAMENTI',true);fabShow('workout');renderWo();}
function renderWo(){
  const wos=(S.workouts[_wd]||[]);const filtered=_wt==='Tutti'?wos:wos.filter(w=>w.type===_wt);
  const totBurned=wos.reduce((a,w)=>a+calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load),0);
  const totMin=wos.reduce((a,w)=>a+(parseFloat(w.duration)||0),0);
  let html=`
  <div style="background:var(--ink);color:#fff;padding:14px 16px 12px">
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px">
      <div style="width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#f87171,#dc2626);display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0">🏋️</div>
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:24px;font-weight:700">🔥 ${totBurned} <span style="font-size:12px;font-weight:400;opacity:.5">kcal</span></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:.45;margin-top:2px">${wos.length} allenamenti · ${totMin} minuti totali</div>
      </div>
    </div>
    <button onclick="snd();addWoModal()" style="width:100%;padding:12px;background:var(--green);border:none;border-radius:10px;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#fff;letter-spacing:.8px;cursor:pointer;text-transform:uppercase">+ Aggiungi Allenamento</button>
  </div>
  <div style="padding:8px 12px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);background:var(--paper);text-transform:uppercase">Strumenti Palestra</div>
  <div class="wo-quick-grid">
    <div class="wo-quick-btn" onclick="snd();navPush(showLibreriaEsercizi)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#f87171,#dc2626)">💪</div><div class="wo-quick-lbl">Libreria<br>Esercizi</div></div>
    <div class="wo-quick-btn" onclick="snd();navPush(showSchede)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#60a5fa,#2563eb)">📋</div><div class="wo-quick-lbl">Schede<br>Allenamento</div></div>
    <div class="wo-quick-btn" onclick="snd();navPush(showMuscleGroups)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#c084fc,#7c3aed)">🫀</div><div class="wo-quick-lbl">Muscoli<br>&amp; Anatomia</div></div>
    <div class="wo-quick-btn" onclick="snd();navPush(showWorkoutStorico)"><div class="wo-quick-ico-wrap" style="background:linear-gradient(135deg,#94a3b8,#1a1a2e)">📜</div><div class="wo-quick-lbl">Storico<br>Workout</div></div>
  </div>
  <div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);background:var(--paper);border-top:1px solid #ede8dc;text-transform:uppercase">Allenamenti di Oggi — ${new Date().toLocaleDateString('it-IT',{weekday:'long',day:'numeric',month:'short'})}</div>`;
  if(!filtered.length)html+=`<div class="empty"><div class="empty-ico">🏋️</div><div class="empty-txt">NESSUN ALLENAMENTO<br>REGISTRATO</div></div>`;
  else filtered.forEach((w,i)=>{
    const burned=calcBurnedKcal(w.type,w.duration,null,w.sets,w.reps,w.load);
    html+=`<div class="wo-card"><div class="wo-card-hdr"><span class="wo-card-nm">${WI[w.type]||'🏅'} ${w.name}</span><div style="display:flex;align-items:center;gap:8px"><span class="wo-card-tp">${w.type}</span><button class="wo-del" onclick="snd('delete');rmWo(${i})">✕</button></div></div><div class="wo-card-body">${w.duration?`<div class="wo-badge">⏱ ${w.duration} min</div>`:''}${burned?`<div class="wo-badge" style="background:#fef3c7;border-color:#d97706;color:#92400e">🔥 ${burned} kcal</div>`:''}${w.sets?`<div class="wo-badge">📋 ${w.sets} serie</div>`:''}${w.reps?`<div class="wo-badge">🔁 ${w.reps} rip.</div>`:''}${w.sets?`<button class="wo-badge" style="background:var(--ink);color:#fff;border-color:var(--ink);cursor:pointer;margin-left:auto" onclick="snd();startRestTimer(90,'${w.name.replace(/'/g,'')}')">⏱ RECUPERO</button>`:''}${w.notes?`<div style="width:100%;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);padding-top:4px">📝 ${w.notes}</div>`:''}</div></div>`;
  });
  html+=``;
  document.getElementById('screen').innerHTML=html;
  fabShow('workout');
}
function setWT(t){_wt=t;renderWo();}
function rmWo(i){const w=(S.workouts[_wd]||[])[i];(S.workouts[_wd]||[]).splice(i,1);saveState();if(w)showToast("🗑 "+w.name+" rimosso");renderWo();}
function addWoModal(){
  const pesoAttuale=S.profile.entries&&S.profile.entries.length?S.profile.entries[S.profile.entries.length-1].peso||'':'';
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:14px;text-transform:uppercase">Nuovo Allenamento</div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SPORT / TIPO *</div>
    <select class="meal-sel" id="wtp" style="width:100%;margin-bottom:8px" onchange="updWoBurn()">${WT.filter(t=>t!=='Tutti').map(t=>`<option value="${t}">${WI[t]||''} ${t}</option>`).join('')}</select></div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOME (opzionale)</div><input class="gram-inp" id="wn" placeholder="es. Allenamento mattutino" style="width:100%;text-align:left;font-size:14px"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">DURATA (MIN) *</div><input class="gram-inp" id="wdur" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" oninput="updWoBurn()" placeholder="30"></div>
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">PESO KG</div><input class="gram-inp" id="wwkg" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px" value="${pesoAttuale}" placeholder="70" oninput="updWoBurn()"></div>
    </div>
    <div id="wo-burn-prev" style="background:#fef3c7;border:1px solid #d97706;border-radius:var(--r);padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#92400e;margin-bottom:10px;text-align:center;display:none"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SERIE</div><input class="gram-inp" id="ws" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px"></div>
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">RIPETIZIONI</div><input class="gram-inp" id="wr" type="number" inputmode="decimal" style="width:100%;text-align:left;font-size:14px;padding:10px 12px"></div>
    </div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOTE</div><textarea id="wno" style="height:55px" placeholder="Appunti..."></textarea></div>
    <button class="conf-btn" onclick="snd('confirm');saveWo()">✓ SALVA ALLENAMENTO</button>`;
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>{updWoBurn();},100);
}
function updWoBurn(){
  const type=document.getElementById('wtp')?.value||'Forza';
  const dur=parseFloat(document.getElementById('wdur')?.value)||0;
  const kg=parseFloat(document.getElementById('wwkg')?.value)||70;
  const sets=document.getElementById('ws')?.value||0;
  const reps=document.getElementById('wr')?.value||0;
  const load=document.getElementById('wload')?.value||0;
  const el=document.getElementById('wo-burn-prev');if(!el)return;
  const isStrength=(type==='Forza'||type==='Stretching'||type==='Pilates'||type==='Yoga');
  if(dur>0||(isStrength&&sets&&reps)){
    const b=calcBurnedKcal(type,dur,kg,sets,reps,load);
    el.style.display='block';
    el.textContent=`🔥 Stima calorie bruciate: ${b} kcal${isStrength&&sets&&reps?' (calc. su volume reale)':' (calc. su durata)'}`;
  } else el.style.display='none';
}
function saveWo(){
  const type=document.getElementById('wtp').value;
  const dur=document.getElementById('wdur').value;
  if(!dur){showToast('⚠ Inserisci la durata','red');return;}
  const kg=parseFloat(document.getElementById('wwkg').value)||null;
  const burned=calcBurnedKcal(type,dur,kg);
  const nameFld=(document.getElementById('wn').value||'').trim();
  const wo={name:nameFld||type,type,duration:dur,burned,sets:document.getElementById('ws').value,reps:document.getElementById('wr').value,notes:document.getElementById('wno').value};
  if(!S.workouts[_wd])S.workouts[_wd]=[];
  S.workouts[_wd].push(wo);saveState();closeModal();
  showToast('✅ '+wo.name+' salvato!','green');
  renderWo();
}

/* ════════════════════════════════════════════════════
   LIBRERIA ESERCIZI
   ════════════════════════════════════════════════════ */
let _libMuscle='Tutti',_libEquip='Tutti',_libSearch='';
function showLibreriaEsercizi(fb){
  resetScreen();setHdr('ESERCIZI','LIBRERIA MUSCLEWIKI',true);
  if(!fb){_libMuscle='Tutti';_libEquip='Tutti';_libSearch='';}
  renderLibreria();
}
function renderLibreria(){
  const muscles=['Tutti','Petto','Schiena','Spalle','Bicipiti','Tricipiti','Addome','Gambe','Glutei','Polpacci','Avambracci'];
  const equips=['Tutti','Bilanciere','Manubri','Cavi','Macchine','Corpo Libero','Sbarra','Kettlebell'];
  let filtered=EXDB;
  if(_libMuscle!=='Tutti')filtered=filtered.filter(e=>e.muscle===_libMuscle||e.sec.includes(_libMuscle));
  if(_libEquip!=='Tutti')filtered=filtered.filter(e=>e.equip===_libEquip);
  if(_libSearch)filtered=filtered.filter(e=>e.name.toLowerCase().includes(_libSearch.toLowerCase())||e.muscle.toLowerCase().includes(_libSearch.toLowerCase()));
  const diffLabels={p:'Principiante',i:'Intermedio',a:'Avanzato'};
  const diffTag={p:'ex-tag-diff-p',i:'ex-tag-diff-i',a:'ex-tag-diff-a'};
  let html=`
  <div style="position:sticky;top:0;z-index:10;background:var(--card);border-bottom:2px solid var(--ink)">
    <div style="padding:8px 12px">
      <input class="srch-inp" type="search" placeholder="🔍 Cerca esercizio..." value="${_libSearch}" oninput="libSearch(this.value)" autocomplete="off">
    </div>
    <div class="lib-filter-bar">${muscles.map(m=>`<div class="cat-pill ${m===_libMuscle?'on':''}" style="flex-shrink:0" onclick="snd();setLibMuscle('${m}')">${m}</div>`).join('')}</div>
    <div style="display:flex;gap:6px;padding:4px 12px 8px;overflow-x:auto;scrollbar-width:none">${equips.map(eq=>`<div class="cat-pill ${eq===_libEquip?'on':''}" style="flex-shrink:0;font-size:9px" onclick="snd();setLibEquip('${eq}')">${eq}</div>`).join('')}</div>
  </div>
  <div style="padding:6px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${filtered.length} ESERCIZI TROVATI</div>`;
  if(!filtered.length){
    html+=`<div class="empty"><div class="empty-ico">🔍</div><div class="empty-txt">NESSUN ESERCIZIO<br>TROVATO</div></div>`;
  } else {
    filtered.forEach(ex=>{
      html+=`<div class="ex-card" onclick="snd();navPush(()=>showEsercizio(${ex.id}))">
        <div class="ex-card-body">
          <div class="ex-card-ico">${ex.emoji}</div>
          <div class="ex-card-info">
            <div class="ex-card-name">${ex.name}</div>
            <div class="ex-card-tags">
              <span class="ex-tag ex-tag-muscle">${ex.muscle}</span>
              ${ex.sec.length?`<span class="ex-tag ex-tag-sec">${ex.sec[0]}</span>`:''}
              <span class="ex-tag ex-tag-equip">${ex.equip}</span>
              <span class="ex-tag ${diffTag[ex.diff]}">${diffLabels[ex.diff]}</span>
            </div>
          </div>
          <div class="ex-chevron">›</div>
        </div>
      </div>`;
    });
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
}
function setLibMuscle(m){_libMuscle=m;renderLibreria();}
function setLibEquip(eq){_libEquip=eq;renderLibreria();}
function libSearch(v){_libSearch=v;renderLibreria();}

/* ════════════════════════════════════════════════════
   DETTAGLIO ESERCIZIO
   ════════════════════════════════════════════════════ */
function showEsercizio(id,fb){
  const ex=EXDB.find(e=>e.id===id);
  if(!ex)return;
  resetScreen();setHdr(ex.muscle.toUpperCase(),'ESERCIZIO',true);
  const diffLabels={p:'🟢 Principiante',i:'🟡 Intermedio',a:'🔴 Avanzato'};
  const muscleGroup=MUSCLE_GROUPS.find(mg=>mg.name===ex.muscle)||MUSCLE_GROUPS[0];
  let html=`
  <div style="background:var(--ink);color:#fff;padding:16px;text-align:center">
    <div style="font-size:52px;margin-bottom:8px">${ex.emoji}</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:17px;font-weight:700">${ex.name}</div>
    <div style="display:flex;justify-content:center;gap:8px;margin-top:10px;flex-wrap:wrap">
      <span style="background:rgba(255,255,255,.15);padding:4px 10px;border-radius:20px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700">${ex.muscle}</span>
      ${ex.sec.map(s=>`<span style="background:rgba(255,255,255,.1);padding:4px 10px;border-radius:20px;font-family:'IBM Plex Mono',monospace;font-size:9px">${s}</span>`).join('')}
    </div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border-bottom:1.5px solid #e8e3d8">
    <div style="text-align:center;padding:12px 6px;border-right:1px solid #e8e3d8;background:var(--card)">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;color:var(--ink)">${ex.sets}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;margin-top:2px">Serie</div>
    </div>
    <div style="text-align:center;padding:12px 6px;border-right:1px solid #e8e3d8;background:var(--card)">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700;color:var(--green)">${ex.reps}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;margin-top:2px">Rip.</div>
    </div>
    <div style="text-align:center;padding:12px 6px;background:var(--card)">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:12px;font-weight:700;color:#d97706">${ex.rest}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;margin-top:2px">Recupero</div>
    </div>
  </div>
  <div style="padding:4px 14px 2px;background:var(--paper)">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin:4px 0">${diffLabels[ex.diff]} · Attrezzo: ${ex.equip}</div>
  </div>
  <div class="ex-detail-section">
    <div class="ex-detail-hdr">📖 DESCRIZIONE</div>
    <div class="ex-detail-body">${ex.desc}</div>
  </div>
  <div class="ex-detail-section">
    <div class="ex-detail-hdr">✅ CONSIGLI TECNICI</div>
    <div class="ex-detail-body">
      <ul class="ex-tips-list">${ex.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
    </div>
  </div>
  ${ex.sec.length?`<div class="ex-detail-section">
    <div class="ex-detail-hdr">🎯 MUSCOLI COINVOLTI</div>
    <div class="ex-detail-body">
      <div style="margin-bottom:8px"><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">Principale: </span>
        <span class="ex-tag ex-tag-muscle" style="font-size:11px;padding:3px 9px">${ex.muscle}</span>
      </div>
      <div><span style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">Secondari: </span>
        ${ex.sec.map(s=>`<span class="ex-tag ex-tag-sec" style="font-size:11px;padding:3px 9px;margin:0 3px">${s}</span>`).join('')}
      </div>
    </div>
  </div>`:''}
  ${buildYtBlock(ex.id, ex.name, ex.muscle)}
  <div style="padding:12px 12px 0;display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <button class="big-btn success" style="margin:0;border-radius:var(--rk)" onclick="snd();addEsercizioToWorkout(${ex.id})">+ WORKOUT</button>
    <button class="big-btn outline" style="margin:0;border-radius:var(--rk)" onclick="snd();startRestTimer(${parseInt(ex.rest)||90},'${ex.name.replace(/'/g,"\'")}')">⏱ RECUPERO</button>
  </div>`;
  document.getElementById('screen').innerHTML=html;
}

function addEsercizioToWorkout(exId){
  const ex=EXDB.find(e=>e.id===exId);
  if(!ex)return;
  const setsDefault=ex.sets.includes('-')?ex.sets.split('-')[0]:ex.sets.replace(/[^0-9]/g,'')||'3';
  const repsDefault=ex.reps.split('×').pop().split('-')[0].replace(/[^0-9]/g,'')||'10';
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:13px;font-weight:700;margin-bottom:4px">${ex.emoji} ${ex.name}</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-bottom:14px">${ex.muscle} · ${ex.equip}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">SERIE</div><input class="gram-inp" id="ex-sets" type="number" inputmode="numeric" value="${setsDefault}" style="width:100%;text-align:center;padding:10px"></div>
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">RIPETIZIONI</div><input class="gram-inp" id="ex-reps" type="number" inputmode="numeric" value="${repsDefault}" style="width:100%;text-align:center;padding:10px"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">DURATA (MIN)</div><input class="gram-inp" id="ex-dur" type="number" inputmode="numeric" value="45" style="width:100%;text-align:center;padding:10px" oninput="updWoBurnEx()"></div>
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">PESO KG (corpo)</div><input class="gram-inp" id="ex-kg" type="number" inputmode="decimal" value="${S.profile.entries?.slice(-1)[0]?.peso||70}" style="width:100%;text-align:center;padding:10px" oninput="updWoBurnEx()"></div>
    </div>
    <div id="ex-burn-prev" style="background:#fef3c7;border:1px solid #d97706;border-radius:var(--r);padding:8px 12px;font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700;color:#92400e;margin-bottom:10px;text-align:center"></div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOTE</div><textarea id="ex-note" style="height:50px" placeholder="Carico usato, sensazioni..."></textarea></div>
    <button class="conf-btn green-btn" onclick="snd('confirm');confirmAddEsercizio(${exId})">✓ AGGIUNGI AL DIARIO</button>`;
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>{
    const kg=parseFloat(document.getElementById('ex-kg').value)||70;
    const dur=parseFloat(document.getElementById('ex-dur').value)||45;
    const b=calcBurnedKcal('Forza',dur,kg);
    document.getElementById('ex-burn-prev').textContent=`🔥 Stima: ${b} kcal bruciate`;
  },50);
}
function updWoBurnEx(){
  const dur=parseFloat(document.getElementById('ex-dur')?.value)||45;
  const kg=parseFloat(document.getElementById('ex-kg')?.value)||70;
  const el=document.getElementById('ex-burn-prev');if(!el)return;
  el.textContent=`🔥 Stima: ${calcBurnedKcal('Forza',dur,kg)} kcal bruciate`;
}
function confirmAddEsercizio(exId){
  const ex=EXDB.find(e=>e.id===exId);if(!ex)return;
  const dur=document.getElementById('ex-dur').value||'45';
  const kg=parseFloat(document.getElementById('ex-kg').value)||null;
  const burned=calcBurnedKcal('Forza',dur,kg);
  const sets=document.getElementById('ex-sets').value;
  const reps=document.getElementById('ex-reps').value;
  const note=document.getElementById('ex-note').value;
  const wo={name:ex.name,type:'Forza',duration:dur,burned,sets,reps,notes:note+(note?' · ':'')+`[${ex.muscle}]`};
  if(!S.workouts[TODAY])S.workouts[TODAY]=[];
  S.workouts[TODAY].push(wo);saveState();closeModal();
  showToast('✅ '+ex.name+' aggiunto!','green');
}

/* ════════════════════════════════════════════════════
   MUSCOLI & ANATOMIA
   ════════════════════════════════════════════════════ */
function showMuscleGroups(fb){
  resetScreen();setHdr('ANATOMIA','MUSCOLI',true);
  let html=`
  <div style="background:var(--ink);color:#fff;padding:12px 16px;text-align:center">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;opacity:.6;margin-bottom:4px">SELEZIONA IL GRUPPO MUSCOLARE</div>
    <div style="font-size:13px;opacity:.7;font-family:'IBM Plex Mono',monospace">per vedere gli esercizi specifici</div>
  </div>
  <div class="muscle-grid">`;
  const muscleGrad={
    'Petto':'linear-gradient(135deg,#f87171,#dc2626)',
    'Schiena':'linear-gradient(135deg,#60a5fa,#2563eb)',
    'Spalle':'linear-gradient(135deg,#fbbf24,#d97706)',
    'Bicipiti':'linear-gradient(135deg,#34d399,#16a34a)',
    'Tricipiti':'linear-gradient(135deg,#c084fc,#7c3aed)',
    'Addome':'linear-gradient(135deg,#22d3ee,#0891b2)',
    'Gambe':'linear-gradient(135deg,#fb923c,#ea580c)',
    'Glutei':'linear-gradient(135deg,#f472b6,#db2777)',
    'Polpacci':'linear-gradient(135deg,#6ee7b7,#059669)',
    'Avambracci':'linear-gradient(135deg,#fde68a,#92400e)',
  };
  MUSCLE_GROUPS.forEach(mg=>{
    const count=EXDB.filter(e=>e.muscle===mg.name||e.sec.includes(mg.name)).length;
    html+=`<div class="muscle-btn" onclick="snd();showEserciziPerMuscolo('${mg.name}')">
      <div class="muscle-ico-wrap" style="background:${muscleGrad[mg.name]||'linear-gradient(135deg,#94a3b8,#1a1a2e)'}">${mg.emoji}</div>
      <div class="muscle-lbl">${mg.name}</div>
      <div class="muscle-cnt">${count} esercizi</div>
    </div>`;
  });
  html+=`</div>
  <div class="card">
    <div class="card-hdr">📚 GUIDA AI GRUPPI MUSCOLARI</div>
    <div class="card-body" style="font-size:12px;color:var(--ink2);line-height:1.9;font-family:'IBM Plex Mono',monospace">
      <b>💪 Petto:</b> Grande e piccolo pettorale. Esercizi di spinta orizzontale e inclinata.<br>
      <b>🔙 Schiena:</b> Dorsali, romboidei, trapezio. Esercizi di trazione e rowing.<br>
      <b>🙆 Spalle:</b> 3 capi del deltoide (ant., med., post.). Overhead press e alzate.<br>
      <b>🦾 Bicipiti:</b> Bicipite brachiale + brachiale. Curl in tutte le varianti.<br>
      <b>💥 Tricipiti:</b> 3 capi (lungo, laterale, mediale). 2/3 del volume del braccio.<br>
      <b>🫀 Addome:</b> Retto, obliqui, trasverso. Core = stabilizzatore globale.<br>
      <b>🦵 Gambe:</b> Quadricipiti e femorali. I più grandi muscoli del corpo.<br>
      <b>🍑 Glutei:</b> Grande, medio, piccolo. I muscoli più forti del corpo.<br>
      <b>🦶 Polpacci:</b> Gastrocnemio e soleo. Resistono a carichi enormi quotidiani.
    </div>
  </div>`;
  document.getElementById('screen').innerHTML=html;
}

function showEserciziPerMuscolo(muscleName,fb){
  const mg=MUSCLE_GROUPS.find(m=>m.name===muscleName)||{color:'var(--ink)',emoji:'💪'};
  resetScreen();setHdr(muscleName.toUpperCase(),'ESERCIZI',true);
  const primari=EXDB.filter(e=>e.muscle===muscleName);
  const secondari=EXDB.filter(e=>e.sec.includes(muscleName)&&e.muscle!==muscleName);
  const diffLabels={p:'Principiante',i:'Intermedio',a:'Avanzato'};
  const diffTag={p:'ex-tag-diff-p',i:'ex-tag-diff-i',a:'ex-tag-diff-a'};
  function renderExList(list){
    return list.map(ex=>`<div class="ex-card" onclick="snd();navPush(()=>showEsercizio(${ex.id}))">
      <div class="ex-card-body">
        <div class="ex-card-ico">${ex.emoji}</div>
        <div class="ex-card-info">
          <div class="ex-card-name">${ex.name}</div>
          <div class="ex-card-tags">
            <span class="ex-tag ex-tag-equip">${ex.equip}</span>
            <span class="ex-tag ${diffTag[ex.diff]}">${diffLabels[ex.diff]}</span>
            <span style="font-family:'IBM Plex Mono',monospace;font-size:8px;color:var(--ink3)">${ex.sets}×${ex.reps}</span>
          </div>
        </div>
        <div class="ex-chevron">›</div>
      </div>
    </div>`).join('');
  }
  let html=`<div style="background:${mg.bg||'var(--card)'};border-bottom:2px solid ${mg.border||'#e8e3d8'};padding:14px 16px;display:flex;align-items:center;gap:12px">
    <div style="font-size:36px">${mg.emoji}</div>
    <div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:15px;font-weight:700;color:${mg.color}">${muscleName}</div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);margin-top:2px">${primari.length} esercizi primari · ${secondari.length} secondari</div>
    </div>
  </div>`;
  if(primari.length){
    html+=`<div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1px;color:var(--ink3);background:var(--paper)">🎯 ESERCIZI PRIMARI (${primari.length})</div>`;
    html+=renderExList(primari);
  }
  if(secondari.length){
    html+=`<div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1px;color:var(--ink3);background:var(--paper);border-top:1px solid #ede8dc">🔸 COINVOLTO ANCHE IN (${secondari.length})</div>`;
    html+=renderExList(secondari);
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

/* ════════════════════════════════════════════════════
   SCHEDE DI ALLENAMENTO
   ════════════════════════════════════════════════════ */
function showSchede(fb){
  resetScreen();setHdr('SCHEDE','PROGRAMMI',true);
  const levelOrder=['Principiante','Tutti i livelli','Intermedio','Avanzato'];
  let html=`<div style="background:var(--ink);color:#fff;padding:10px 16px;text-align:center">
    <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;opacity:.6">SCEGLI IL TUO PROGRAMMA DI ALLENAMENTO</div>
  </div>`;
  SCHEDE_DB.forEach(s=>{
    html+=`<div class="scheda-card" onclick="snd();navPush(()=>showSchedaDetail(${s.id}))">
      <div class="scheda-hdr" style="background:${s.color}">
        <div class="scheda-ico-wrap">${s.emoji}</div>
        <div class="scheda-hdr-info">
          <div class="scheda-nm">${s.name}</div>
          <div class="scheda-sub">${s.level} · ${s.freq}×/sett. · ${s.goal}</div>
        </div>
        <div style="font-size:22px;opacity:.7">›</div>
      </div>
      <div class="scheda-body">
        ${s.days.map(d=>`<span class="scheda-badge">${d.name}</span>`).join('')}
        <span class="scheda-badge">${s.days.reduce((a,d)=>a+d.exs.length,0)} esercizi totali</span>
      </div>
    </div>`;
  });
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

function showSchedaDetail(id,fb){
  const s=SCHEDE_DB.find(x=>x.id===id);if(!s)return;
  resetScreen();setHdr(s.name.toUpperCase(),'SCHEDA',true);
  let html=`<div style="background:${s.color};color:#fff;padding:14px 16px">
    <div style="display:flex;align-items:center;gap:12px">
      <div style="font-size:36px">${s.emoji}</div>
      <div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:14px;font-weight:700">${s.name}</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;opacity:.8;margin-top:3px">${s.level} · ${s.freq} giorni/settimana · Obiettivo: ${s.goal}</div>
      </div>
    </div>
    <div style="margin-top:10px;font-size:12px;opacity:.85;line-height:1.6">${s.desc}</div>
  </div>`;
  s.days.forEach((day,di)=>{
    html+=`<div class="day-card" style="margin-top:${di===0?'12px':'0'}">
      <div class="day-hdr" onclick="toggleDayScheda('scheda-day-${id}-${di}')">
        <span class="day-hdr-nm">📅 ${day.name}</span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;opacity:.7">${day.exs.length} esercizi ▾</span>
      </div>
      <div id="scheda-day-${id}-${di}">`;
    day.exs.forEach(item=>{
      const ex=EXDB.find(e=>e.id===item.id);
      if(!ex)return;
      html+=`<div class="day-ex-row" onclick="snd();navPush(()=>showEsercizio(${ex.id}))">
        <div class="day-ex-ico">${ex.emoji}</div>
        <div class="day-ex-info">
          <div class="day-ex-name">${ex.name}</div>
          <div class="day-ex-meta">${item.sets} serie · ${item.reps} rip. · Recupero: ${item.rest}</div>
        </div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--green);font-weight:700;flex-shrink:0">›</div>
      </div>`;
    });
    html+=`</div></div>`;
  });
  // Pulsante avvia scheda
  html+=`<div style="padding:12px 12px 0">
    <button class="big-btn success" onclick="snd();avviaScheda(${s.id})">🚀 AVVIA QUESTA SCHEDA</button>
  </div>`;
  document.getElementById('screen').innerHTML=html;
}
function toggleDayScheda(id){
  const el=document.getElementById(id);
  if(el)el.style.display=el.style.display==='none'?'':'none';
}
function avviaScheda(schedaId){
  const s=SCHEDE_DB.find(x=>x.id===schedaId);if(!s)return;
  // Determina il giorno della settimana e mostra il giorno appropriato
  const weekDay=new Date().getDay();
  const dayIdx=Math.min(Math.floor(weekDay%s.days.length),s.days.length-1);
  const day=s.days[dayIdx];
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">${s.emoji} ${s.name}</div>
    <div class="modal-sub">Giorno suggerito oggi: ${day.name}</div>
    <div style="background:var(--greenl);border:1px solid #86efac;border-radius:var(--r);padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--greend);margin-bottom:12px">
      ${day.exs.length} esercizi · Tempo stimato: ${day.exs.reduce((a,e)=>{const ex=EXDB.find(x=>x.id===e.id);return a+(ex?15:0);},0)} min
    </div>
    <div style="max-height:40vh;overflow-y:auto">
      ${day.exs.map(item=>{const ex=EXDB.find(e=>e.id===item.id);return ex?`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid #ede8dc"><span style="font-size:18px">${ex.emoji}</span><div><div style="font-family:'IBM Plex Mono',monospace;font-size:11px;font-weight:700">${ex.name}</div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${item.sets}×${item.reps} · ${item.rest}</div></div></div>`:''}).join('')}
    </div>
    <button class="conf-btn green-btn" onclick="snd('confirm');aggiungiSchedaADiario(${schedaId},${dayIdx})">✓ AGGIUNGI AL DIARIO OGGI</button>`;
  document.getElementById('modal').classList.add('open');
}
function aggiungiSchedaADiario(schedaId,dayIdx){
  const s=SCHEDE_DB.find(x=>x.id===schedaId);if(!s)return;
  const day=s.days[dayIdx];
  if(!S.workouts[TODAY])S.workouts[TODAY]=[];
  day.exs.forEach(item=>{
    const ex=EXDB.find(e=>e.id===item.id);if(!ex)return;
    const dur=15;
    const kg=S.profile.entries?.slice(-1)[0]?.peso||70;
    const burned=calcBurnedKcal('Forza',dur,kg);
    S.workouts[TODAY].push({name:ex.name,type:'Forza',duration:dur,burned,sets:item.sets,reps:item.reps,notes:`[Scheda: ${s.name} — ${day.name}]`});
  });
  saveState();closeModal();
  showToast('✅ '+day.exs.length+' esercizi aggiunti!','green');
  navGoHome();
}

/* ════════ PROFILO ════════ */
function showProfilo(fb){resetScreen();setHdr('PROFILO','DATI FISICI',true);renderProfilo();}
function renderProfilo(){
  const p=S.profile;const last=p.entries&&p.entries.length?p.entries[p.entries.length-1]:null;
  const bmi=last&&p.altezza?+(last.peso/(p.altezza/100)**2).toFixed(1):null;
  const bmiC=bmi?bmi<18.5?'#d97706':bmi<25?'#16a34a':bmi<30?'#d97706':'#dc2626':'var(--ink3)';
  const bmiL=bmi?bmi<18.5?'SOTTOPESO':bmi<25?'NORMALE':bmi<30?'SOVRAPPESO':'OBESO':'--';
  // BMI scale 16-40 (24 units): sottopeso 2.5, normale 6.5, sovrappeso 5, obeso 10
  const bmiGauge=bmi?`<div class="bmi-gauge"><div class="bmi-seg" style="background:#60a5fa;flex:2.5"></div><div class="bmi-seg" style="background:#22c55e;flex:6.5"></div><div class="bmi-seg" style="background:#fbbf24;flex:5"></div><div class="bmi-seg" style="background:#f87171;flex:10"></div></div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);display:flex;justify-content:space-between;margin-top:2px"><span>16</span><span>18.5</span><span>25</span><span>30</span><span>40+</span></div><div style="margin-top:6px;height:10px;position:relative"><div style="position:absolute;left:${Math.min(96,Math.max(2,(bmi-16)/(40-16)*100))}%;top:0;transform:translateX(-50%);width:3px;height:10px;background:${bmiC};border-radius:1px;box-shadow:0 0 4px ${bmiC}"></div></div>`:'';
  let html=`
    <div style="background:var(--ink);color:#fff;padding:16px 16px 12px">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
        <div style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,#22c55e,#16a34a);display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:700;color:#fff;flex-shrink:0">${(p.nome||CUR.name||'?').trim()[0].toUpperCase()}</div>
        <div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:17px;font-weight:700">${p.nome||CUR.name||'—'}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;opacity:.45;margin-top:2px">${p.sesso==='m'?'Maschio':p.sesso==='f'?'Femmina':'—'} · ${p.eta?p.eta+' anni':'—'}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div style="background:rgba(255,255,255,.08);border-radius:var(--r);padding:10px 6px;text-align:center">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:#86efac">${last?last.peso:'--'}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.5;margin-top:2px">KG PESO</div>
        </div>
        <div style="background:rgba(255,255,255,.08);border-radius:var(--r);padding:10px 6px;text-align:center">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:#93c5fd">${p.altezza||'--'}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.5;margin-top:2px">CM ALTEZZA</div>
        </div>
        <div style="background:rgba(255,255,255,.08);border-radius:var(--r);padding:10px 6px;text-align:center">
          <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;color:${bmiC}">${bmi||'--'}</div>
          <div style="font-family:'IBM Plex Mono',monospace;font-size:8px;opacity:.5;margin-top:2px">BMI</div>
        </div>
      </div>
      ${bmi?`<div style="margin-top:10px;padding:10px;background:rgba(255,255,255,.06);border-radius:var(--r)">${bmiGauge}<div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:${bmiC};font-weight:700;margin-top:6px;text-align:center">BMI ${bmi} — ${bmiL}</div></div>`:''}
    </div>
    <div class="card"><div class="card-hdr">👤 DATI ANAGRAFICI</div>
      <div class="form-row"><div class="form-lbl">Nome</div><input class="form-inp" value="${p.nome||''}" placeholder="Nome..." oninput="S.profile.nome=this.value;saveState()"></div>
      <div class="form-row"><div class="form-lbl">Età</div><input class="form-inp" type="number" inputmode="numeric" value="${p.eta||''}" placeholder="anni" oninput="S.profile.eta=this.value;saveState()"></div>
      <div class="form-row"><div class="form-lbl">Sesso</div><select class="form-sel" onchange="S.profile.sesso=this.value;saveState()"><option value="m" ${p.sesso==='m'?'selected':''}>Maschio</option><option value="f" ${p.sesso==='f'?'selected':''}>Femmina</option></select></div>
      <div class="form-row"><div class="form-lbl">Altezza</div><input class="form-inp" type="number" inputmode="decimal" value="${p.altezza||''}" placeholder="cm" oninput="S.profile.altezza=this.value;saveState()"></div>
      <div class="form-row"><div class="form-lbl">Obiettivo</div><select class="form-sel" onchange="S.profile.obiettivo=this.value;saveState()"><option value="dimagrimento" ${p.obiettivo==='dimagrimento'?'selected':''}>Dimagrimento</option><option value="mantenimento" ${p.obiettivo==='mantenimento'?'selected':''}>Mantenimento</option><option value="massa" ${p.obiettivo==='massa'?'selected':''}>Aumento massa</option></select></div>
      <div class="form-row" style="border:none"><div class="form-lbl">Attività</div><select class="form-sel" onchange="S.profile.attivita=this.value;saveState()"><option value="sedentario" ${p.attivita==='sedentario'?'selected':''}>Sedentario</option><option value="leggera" ${p.attivita==='leggera'?'selected':''}>Leggera</option><option value="moderata" ${p.attivita==='moderata'?'selected':''}>Moderata</option><option value="intensa" ${p.attivita==='intensa'?'selected':''}>Intensa</option><option value="estrema" ${p.attivita==='estrema'?'selected':''}>Estrema</option></select></div>
    </div>
    <div class="card"><div class="card-hdr">📏 NUOVA MISURAZIONE — ${TODAY}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:10px 12px">
        ${[['Peso (kg)','ep','0.1','70.5'],['Vita (cm)','ev','1','80'],['Fianchi (cm)','ef','1','95'],['Grasso %','eg','0.1','20']].map(([l,id,step,ph])=>`<div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">${l}</div><input class="form-inp" id="${id}" type="number" step="${step}" inputmode="decimal" placeholder="${ph}"></div>`).join('')}
      </div>
      <div style="padding:0 12px"><textarea id="en" placeholder="Note misurazione..." style="height:50px;margin-bottom:8px"></textarea></div>
      <button class="big-btn success" onclick="snd('confirm');saveEntry()">+ SALVA MISURAZIONE</button>
    </div>`;
  html+=renderPesoObiettivo();
  if(p.altezza&&p.eta&&last){
    const f={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
    const bmr=p.sesso==='m'?10*last.peso+6.25*p.altezza-5*p.eta+5:10*last.peso+6.25*p.altezza-5*p.eta-161;
    const tdee=Math.round(bmr*(f[p.attivita]||1.55));
    const kOb=p.obiettivo==='dimagrimento'?tdee-500:p.obiettivo==='massa'?tdee+300:tdee;
    html+=`<div class="card"><div class="card-hdr">🧮 TDEE CALCOLATO</div><div class="card-body" style="font-family:'IBM Plex Mono',monospace;font-size:12px;line-height:2">BMR: ${Math.round(bmr)} kcal/gg<br>TDEE: ${tdee} kcal/gg<br><b>Obiettivo (${p.obiettivo}): <span style="color:var(--green)">${kOb} kcal/gg</span></b><button class="big-btn success" style="margin:10px 0 0" onclick="snd('confirm');applyTDEE(${kOb})">APPLICA COME OBIETTIVO</button></div></div>`;
  }
  // GRAFICI PROGRESSIONE
  if(p.entries&&p.entries.length>=2){
    html+=`<div class="card"><div class="card-hdr">📈 GRAFICI PROGRESSIONE</div>
      <div class="chart-tabs">
        <div class="chart-tab on" onclick="showChart('peso',this)">⚖️ Peso</div>
        <div class="chart-tab" onclick="showChart('bmi',this)">📊 BMI</div>
        <div class="chart-tab" onclick="showChart('vita',this)">👗 Vita</div>
        <div class="chart-tab" onclick="showChart('grasso',this)">🔥 Grasso%</div>
      </div>
      <div class="chart-wrap"><canvas id="progrChart" class="chart-c"></canvas></div>
    </div>`;
  }
  if(p.entries&&p.entries.length){
    html+=`<div class="card"><div class="card-hdr">📋 STORICO (${p.entries.length})</div>`;
    [...p.entries].reverse().forEach((e,i)=>{const bm=p.altezza?+(e.peso/(p.altezza/100)**2).toFixed(1):'';html+=`<div class="hist-row"><div class="hist-date">${e.date}</div><div class="hist-vals">${e.peso?`⚖️${e.peso}kg `:''}${bm?`BMI:${bm} `:''}${e.vita?`👗${e.vita}cm `:''}${e.grasso?`🔥${e.grasso}% `:''}${e.note?`<br><span style="color:var(--ink3);font-size:10px">${e.note}</span>`:''}</div><button class="hist-del" onclick="snd('delete');delEntry(${p.entries.length-1-i})">✕</button></div>`;});
    html+=`</div>`;
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
  // Renderizza grafico dopo inserimento nel DOM
  if(p.entries&&p.entries.length>=2){setTimeout(()=>showChart('peso',document.querySelector('.chart-tab.on')),100);}
}

/* ════════ GRAFICI (canvas puro, senza librerie) ════════ */
let _chartType='peso';
function showChart(type,el){
  _chartType=type;
  document.querySelectorAll('.chart-tab').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  const cv=document.getElementById('progrChart');if(!cv)return;
  const p=S.profile;const entries=[...p.entries].sort((a,b)=>a.date.localeCompare(b.date));
  let dataPoints=[];
  if(type==='peso')dataPoints=entries.map(e=>({x:e.date,y:parseFloat(e.peso)||null}));
  else if(type==='bmi')dataPoints=p.altezza?entries.map(e=>({x:e.date,y:e.peso?+(parseFloat(e.peso)/(p.altezza/100)**2).toFixed(1):null})):[];
  else if(type==='vita')dataPoints=entries.map(e=>({x:e.date,y:parseFloat(e.vita)||null}));
  else if(type==='grasso')dataPoints=entries.map(e=>({x:e.date,y:parseFloat(e.grasso)||null}));
  dataPoints=dataPoints.filter(d=>d.y!==null&&!isNaN(d.y));
  if(dataPoints.length<2){cv.getContext('2d').clearRect(0,0,cv.width,cv.height);return;}
  const dpr=window.devicePixelRatio||1;
  const W=cv.parentElement.clientWidth-24||300;const H=180;
  cv.width=W*dpr;cv.height=H*dpr;cv.style.width=W+'px';cv.style.height=H+'px';
  const ctx=cv.getContext('2d');ctx.scale(dpr,dpr);
  const pad={t:16,r:16,b:32,l:44};
  const vals=dataPoints.map(d=>d.y);
  const minV=Math.min(...vals);const maxV=Math.max(...vals);
  const rng=maxV-minV||1;
  const toX=i=>pad.l+(i/(dataPoints.length-1))*(W-pad.l-pad.r);
  const toY=v=>pad.t+(1-(v-minV)/rng)*(H-pad.t-pad.b);
  // sfondo
  ctx.fillStyle='#fffef9';ctx.fillRect(0,0,W,H);
  // griglia
  ctx.strokeStyle='#e8e3d8';ctx.lineWidth=1;
  for(let i=0;i<=4;i++){const y=pad.t+i*(H-pad.t-pad.b)/4;ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(W-pad.r,y);ctx.stroke();}
  // labels Y
  ctx.fillStyle='#888';ctx.font='9px IBM Plex Mono,monospace';ctx.textAlign='right';
  for(let i=0;i<=4;i++){const v=maxV-i*(rng/4);const y=pad.t+i*(H-pad.t-pad.b)/4;ctx.fillText(v.toFixed(1),pad.l-4,y+3);}
  // area fill
  ctx.beginPath();ctx.moveTo(toX(0),toY(dataPoints[0].y));
  dataPoints.forEach((d,i)=>{if(i>0)ctx.lineTo(toX(i),toY(d.y));});
  ctx.lineTo(toX(dataPoints.length-1),H-pad.b);ctx.lineTo(toX(0),H-pad.b);ctx.closePath();
  ctx.fillStyle='rgba(22,163,74,.1)';ctx.fill();
  // linea
  ctx.beginPath();ctx.moveTo(toX(0),toY(dataPoints[0].y));
  dataPoints.forEach((d,i)=>{if(i>0)ctx.lineTo(toX(i),toY(d.y));});
  ctx.strokeStyle='#16a34a';ctx.lineWidth=2.5;ctx.lineJoin='round';ctx.stroke();
  // punti
  dataPoints.forEach((d,i)=>{
    ctx.beginPath();ctx.arc(toX(i),toY(d.y),4,0,Math.PI*2);
    ctx.fillStyle='#16a34a';ctx.fill();
    ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(toX(i),toY(d.y),2,0,Math.PI*2);ctx.fill();
  });
  // labels X (prime e ultime)
  ctx.fillStyle='#888';ctx.font='9px IBM Plex Mono,monospace';ctx.textAlign='center';
  const showIdx=[0,dataPoints.length-1];
  if(dataPoints.length>4)showIdx.push(Math.floor(dataPoints.length/2));
  showIdx.forEach(i=>{
    const d=dataPoints[i];const lbl=d.x.slice(5);// MM-DD
    ctx.fillText(lbl,toX(i),H-pad.b+12);
  });
}

function saveEntry(){
  const peso=parseFloat(document.getElementById('ep').value);
  if(!peso){showToast('⚠ Inserisci il peso','red');return;}
  const entry={date:TODAY,peso,vita:document.getElementById('ev').value,fianchi:document.getElementById('ef').value,grasso:document.getElementById('eg').value,note:document.getElementById('en').value};
  S.profile.entries=S.profile.entries.filter(e=>e.date!==TODAY);
  S.profile.entries.push(entry);
  S.profile.entries.sort((a,b)=>a.date.localeCompare(b.date));
  saveState();showToast('✅ '+peso+'kg salvato!','green');renderProfilo();
}
function delEntry(i){if(confirm('Elimina questa misurazione?')){S.profile.entries.splice(i,1);saveState();showToast('🗑 Misurazione eliminata');renderProfilo();}}
function applyTDEE(k){S.settings.kcal=k;saveState();showToast('✅ Obiettivo: '+k+' kcal','green');}

/* ════════ IMPOSTAZIONI ════════ */
function showImpostazioni(fb){resetScreen();setHdr('IMPOSTAZIONI','OBIETTIVI & DATI',true);renderImpostazioni();}
function renderImpostazioni(){
  document.getElementById('screen').innerHTML=`
    <div class="card"><div class="card-hdr">🎯 OBIETTIVI GIORNALIERI</div>
      <div class="form-row"><div class="form-lbl">Kcal</div><input class="form-inp" type="number" inputmode="numeric" value="${S.settings.kcal}" oninput="S.settings.kcal=parseInt(this.value)||2000;saveState()"></div>
      <div class="form-row"><div class="form-lbl">Prot. %</div><input class="form-inp" type="number" inputmode="numeric" value="${S.settings.protPct}" min="10" max="50" oninput="S.settings.protPct=parseInt(this.value)||25;saveState()"></div>
      <div class="form-row" style="border:none"><div class="form-lbl">💧 Acqua</div><input class="form-inp" type="number" inputmode="numeric" value="${S.settings.waterGoal||8}" min="4" max="16" oninput="S.settings.waterGoal=parseInt(this.value)||8;saveState()"><span style="font-size:11px;color:var(--ink3);margin-left:6px">bicchieri</span></div>
    </div>
    <div style="margin:0 12px 4px"><button class="big-btn" style="margin:0;padding:12px;font-size:11px" onclick="snd();navPush(showOnboarding)">🔄 RICONFIGURA PIANO PERSONALE</button></div>
    <div class="card"><div class="card-hdr">🧮 CALCOLATORE TDEE</div>
      <div class="form-row"><div class="form-lbl">Peso</div><input class="form-inp" id="tw" type="number" inputmode="decimal" placeholder="kg" value="${S.profile.entries?.slice(-1)[0]?.peso||''}"></div>
      <div class="form-row"><div class="form-lbl">Altezza</div><input class="form-inp" id="th" type="number" inputmode="numeric" placeholder="cm" value="${S.profile.altezza||''}"></div>
      <div class="form-row"><div class="form-lbl">Età</div><input class="form-inp" id="ta" type="number" inputmode="numeric" placeholder="anni" value="${S.profile.eta||''}"></div>
      <div class="form-row"><div class="form-lbl">Sesso</div><select class="form-sel" id="ts"><option value="m" ${S.profile.sesso==='m'?'selected':''}>Maschio</option><option value="f" ${S.profile.sesso==='f'?'selected':''}>Femmina</option></select></div>
      <div class="form-row" style="border:none"><div class="form-lbl">Attività</div><select class="form-sel" id="tact"><option value="sedentario" ${S.profile.attivita==='sedentario'?'selected':''}>Sedentario</option><option value="leggera" ${S.profile.attivita==='leggera'?'selected':''}>Leggera</option><option value="moderata" ${S.profile.attivita==='moderata'?'selected':''}>Moderata</option><option value="intensa" ${S.profile.attivita==='intensa'?'selected':''}>Intensa</option><option value="estrema" ${S.profile.attivita==='estrema'?'selected':''}>Estrema</option></select></div>
      <button class="big-btn" onclick="snd();runTDEE()">CALCOLA TDEE</button>
      <div class="tdee-res" id="tres"></div>
    </div>
    <div class="card"><div class="card-hdr">☁️ SYNC MULTI-DISPOSITIVO <span id="sb-status-badge" style="font-size:9px;padding:2px 7px;border-radius:4px;background:rgba(255,255,255,.15)">NON ATTIVO</span></div>
      <div class="card-body" style="font-size:12px;color:var(--ink2);font-family:'IBM Plex Mono',monospace;line-height:1.7;margin-bottom:10px">
        Collega un database <b>Supabase gratuito</b> per sincronizzare i dati su tutti i tuoi dispositivi.<br>
        <a href="https://supabase.com" target="_blank" style="color:var(--green)">→ Crea account gratis su supabase.com</a>
      </div>
      <div class="form-row"><div class="form-lbl" style="min-width:50px">URL</div><input class="form-inp" id="sb-url" type="url" placeholder="https://xxxx.supabase.co" value=""></div>
      <div class="form-row" style="border:none"><div class="form-lbl" style="min-width:50px">API Key</div><input class="form-inp" id="sb-key" type="text" placeholder="anon public key..." value=""></div>
      <button class="big-btn success" onclick="snd();saveSupabaseConfig()">☁️ ATTIVA SYNC</button>
      <button class="big-btn outline" id="sb-disable-btn" style="display:none" onclick="snd();disableSupabase()">✕ DISATTIVA SYNC</button>
      <div id="sb-help" style="padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);line-height:1.8;display:none">
        <b>Come configurare (2 min):</b><br>
        1. Vai su supabase.com → New project<br>
        2. Settings → API → copia "Project URL" e "anon public key"<br>
        3. SQL Editor → esegui lo script qui sotto<br>
        <button onclick="showSbSql()" style="margin-top:6px;padding:5px 10px;background:var(--ink);color:#fff;border:none;border-radius:4px;font-family:'IBM Plex Mono',monospace;font-size:9px;cursor:pointer">MOSTRA SCRIPT SQL →</button>
      </div>
    </div>
    <div class="card"><div class="card-hdr">💾 BACKUP DATI</div>
      <button class="big-btn outline" onclick="snd();exportData()">📤 ESPORTA BACKUP (.json)</button>
      <button class="big-btn outline" onclick="snd();importData()">📥 IMPORTA BACKUP</button>
      <input type="file" id="importFile" accept=".json" style="display:none" onchange="doImport(this)">
    </div>
    <div class="card"><div class="card-hdr">⚠️ GESTIONE DATI</div>
      <button class="big-btn outline" onclick="snd();resetDay()">AZZERA DIARIO OGGI</button>
      <button class="big-btn danger" onclick="snd('delete');showLogout()">ESCI DALL'APP</button>
    </div>`;
  setTimeout(renderImpostazioniSbStatus,50);
}
function runTDEE(){
  const w=parseFloat(document.getElementById("tw").value),h=parseFloat(document.getElementById("th").value),a=parseFloat(document.getElementById("ta").value);
  const s=document.getElementById('ts').value,act=document.getElementById('tact').value;
  if(!w||!h||!a){alert('Compila tutti i campi');return;}
  const bmr=s==='m'?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;
  const f={sedentario:1.2,leggera:1.375,moderata:1.55,intensa:1.725,estrema:1.9};
  const tdee=Math.round(bmr*(f[act]||1.55));
  const res=document.getElementById('tres');res.style.display='block';
  res.innerHTML=`BMR: ${Math.round(bmr)} kcal/gg<br>TDEE: <b>${tdee}</b> kcal/gg<br>Dimagrimento: ${tdee-500}<br>Mantenimento: ${tdee}<br>Massa +300: ${tdee+300}<br><button class="big-btn success" onclick="snd('confirm');applyTDEE(${tdee})" style="margin:10px 0 0">APPLICA TDEE</button>`;
}
function resetDay(){if(confirm('Azzera il diario di oggi?')){S.meals={colazione:[],spuntino:[],pranzo:[],merenda:[],cena:[]};saveState();navGoHome();}}
function exportData(){
  try{
    const blob=new Blob([JSON.stringify({nutritrack:true,version:10,slug:CUR.slug,data:S,exported:new Date().toISOString()})],{type:'application/json'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`nutritrack_backup_${TODAY}.json`;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(a.href);
  }catch(e){alert('Errore esportazione: '+e.message);}
}
function importData(){document.getElementById('importFile').click();}
function doImport(input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const d=JSON.parse(e.target.result);
      if(!d.nutritrack){alert('File non valido');return;}
      if(!confirm('Importa il backup? Sovrascriverà i dati attuali.'))return;
      if(d.data.meals)S.meals=d.data.meals;if(d.data.profile)S.profile=d.data.profile;if(d.data.settings)S.settings=d.data.settings;if(d.data.workouts)S.workouts=d.data.workouts;if(d.data.calPlans)S.calPlans=d.data.calPlans;if(typeof d.data.water==='number')S.water=d.data.water;
      saveState();showToast('✅ Backup importato!','green');navGoHome();
    }catch(err){alert('Errore importazione: '+err.message);}
  };
  reader.readAsText(file);input.value='';
}


/* ════════ SUPABASE UI HELPERS ════════ */
function saveSupabaseConfig(){
  const url=(document.getElementById('sb-url')?.value||'').trim();
  const key=(document.getElementById('sb-key')?.value||'').trim();
  if(!url||!key){alert('Inserisci URL e API Key');return;}
  if(!url.startsWith('https://')){alert('URL non valido - deve iniziare con https://');return;}
  initSupabase(url,key);
  // Testa connessione
  sbRequest('GET','nutritrack_data?limit=1').then(r=>{
    if(r!==null){
      showToast('✅ Supabase connesso!','green');
      saveState(); // prima sync
      renderImpostazioni();
    } else {
      alert('❌ Connessione fallita.\nVerifica URL e API Key.\nAssicurati di aver creato la tabella con lo script SQL.');
      SB.enabled=false;
    }
  }).catch(()=>alert('❌ Errore di rete. Controlla URL.'));
}

function disableSupabase(){
  if(!confirm('Disattivare la sincronizzazione Supabase?'))return;
  SB.url=null;SB.key=null;SB.enabled=false;
  try{localStorage.removeItem('nt_sb_url');localStorage.removeItem('nt_sb_key');}catch(e){}
  updateSyncStatus();
  renderImpostazioni();
  alert('Sync disattivato. I dati locali sono intatti.');
}

function renderImpostazioniSbStatus(){
  const badge=document.getElementById('sb-status-badge');
  const urlEl=document.getElementById('sb-url');
  const keyEl=document.getElementById('sb-key');
  const disBtn=document.getElementById('sb-disable-btn');
  const help=document.getElementById('sb-help');
  if(!badge)return;
  if(SB.enabled){
    badge.textContent='ATTIVO ✓';
    badge.style.background='rgba(22,163,74,.4)';
    if(urlEl)urlEl.value=SB.url||'';
    if(keyEl)keyEl.value=SB.key||'';
    if(disBtn)disBtn.style.display='block';
    if(help)help.style.display='none';
  } else {
    badge.textContent='NON ATTIVO';
    badge.style.background='rgba(255,255,255,.15)';
    if(disBtn)disBtn.style.display='none';
    if(help)help.style.display='block';
    // Pre-compila se ci sono valori salvati
    try{
      const savedUrl=localStorage.getItem('nt_sb_url')||'';
      const savedKey=localStorage.getItem('nt_sb_key')||'';
      if(urlEl&&savedUrl)urlEl.value=savedUrl;
      if(keyEl&&savedKey)keyEl.value=savedKey;
    }catch(e){}
  }
}

function showSbSql(){
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">📋 Script SQL Supabase</div>
    <div class="modal-sub">Copia e incolla nel SQL Editor del tuo progetto Supabase</div>
    <div style="background:#0d1117;border-radius:var(--r);padding:12px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:#86efac;line-height:1.8;overflow-x:auto;white-space:pre;margin-bottom:12px">create table if not exists nutritrack_data (
  slug text primary key,
  name text not null,
  data text not null,
  updated_at timestamptz default now()
);
alter table nutritrack_data enable row level security;
create policy "public read write"
  on nutritrack_data for all
  using (true) with check (true);</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);margin-bottom:12px">Dopo aver eseguito lo script, torna qui e inserisci URL e API Key.</div>
    <button class="conf-btn" onclick="closeModal()">✓ CAPITO</button>`;
  document.getElementById('modal').classList.add('open');
}


/* ════════ I MIEI ALIMENTI ════════ */
function showMieiAlimenti(fb){
  resetScreen();setHdr('I MIEI ALIMENTI','PERSONALIZZATI',true);
  const custom=S.customFoods||[];
  let html=`<button class="big-btn success" onclick="snd();showAddCustomFood()">+ AGGIUNGI ALIMENTO</button>`;
  if(!custom.length){
    html+=`<div class="empty"><div class="empty-ico">🍽</div>
      <div class="empty-txt">NESSUN ALIMENTO PERSONALIZZATO<br><br>
        Aggiungi alimenti che non trovi nel database:<br>
        ricette della nonna, prodotti specifici,<br>
        alimenti regionali o di marca.
      </div></div>`;
  } else {
    html+=`<div style="padding:8px 14px 4px;font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3)">${custom.length} ALIMENTI PERSONALIZZATI</div>`;
    custom.forEach((f,i)=>{
      html+=`<div class="log-item">
        <div class="log-emo">${f.emoji||'🍽'}</div>
        <div class="log-inf">
          <div class="log-nm">${f.name} <span class="custom-badge">MIO</span></div>
          <div class="log-dt">${f.cat} · ${f.e} kcal · P:${f.p}g C:${f.c}g G:${f.f}g</div>
        </div>
        <div style="display:flex;gap:6px">
          <button onclick="snd();editCustomFood(${i})" style="width:32px;height:32px;border-radius:50%;border:2px solid var(--green);background:none;color:var(--green);cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center">✎</button>
          <button class="log-del" onclick="snd('delete');delCustomFood(${i})">✕</button>
        </div>
      </div>`;
    });
  }
  html+=``;
  document.getElementById('screen').innerHTML=html;
}

function editCustomFood(i){
  const f=(S.customFoods||[])[i];
  if(!f)return;
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">✎ Modifica Alimento</div>
    <div style="margin-bottom:10px"><div style="font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">NOME *</div>
    <input class="gram-inp" id="ef-name" style="width:100%;text-align:left;font-size:14px" value="${f.name}"></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      ${[['KCAL /100g *','ef-e',f.e],['PROTEINE g','ef-p',f.p],['CARBOIDRATI g','ef-c',f.c],['GRASSI g','ef-f',f.f],['FIBRE g','ef-fi',f.fi],['CATEGORIA','ef-cat',f.cat]].map(([l,id,val])=>`
      <div><div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3);margin-bottom:4px">${l}</div>
      <input class="gram-inp" id="${id}" type="${id==='ef-cat'?'text':'number'}" inputmode="decimal" style="width:100%;text-align:left;font-size:13px;padding:9px 10px" value="${val}"></div>`).join('')}
    </div>
    <button class="conf-btn green-btn" onclick="snd('confirm');saveEditCustomFood(${i})">✓ SALVA MODIFICHE</button>`;
  document.getElementById('modal').classList.add('open');
}

function saveEditCustomFood(i){
  const name=(document.getElementById('ef-name').value||'').trim();
  const e=parseFloat(document.getElementById('ef-e').value);
  if(!name||!e){alert('Nome e calorie obbligatori');return;}
  if(!S.customFoods)S.customFoods=[];
  S.customFoods[i]={
    ...S.customFoods[i],
    name,
    cat:document.getElementById('ef-cat').value||'Personalizzati',
    e,
    p:parseFloat(document.getElementById('ef-p').value)||0,
    c:parseFloat(document.getElementById('ef-c').value)||0,
    f:parseFloat(document.getElementById('ef-f').value)||0,
    fi:parseFloat(document.getElementById('ef-fi').value)||0,
  };
  saveState();closeModal();navReplace(showMieiAlimenti);
}

function delCustomFood(i){
  if(!confirm('Eliminare questo alimento personalizzato?'))return;
  S.customFoods.splice(i,1);
  saveState();navReplace(showMieiAlimenti);
}

/* ════════ INSTALL GUIDE ════════ */
function showInstallGuide(){
  snd('confirm');
  const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent)&&!window.MSStream;
  const isAndroid=/android/i.test(navigator.userAgent);
  let os=isIOS?'ios':isAndroid?'android':'android';
  renderInstallModal(os);document.getElementById('modal').classList.add('open');
}
function renderInstallModal(os){
  const stepsIOS=[['1','Apri questa pagina in <b>Safari</b>','Chrome e altri browser non supportano l\'installazione su iOS'],['2','Tocca il tasto <b>Condividi ⬆️</b>','Si trova nella barra in basso (o in alto su iPad)'],['3','Scorri e tocca <b>"Aggiungi a schermata Home"</b>','Potresti dover scorrere verso il basso nell\'elenco'],['4','Tocca <b>"Aggiungi"</b> in alto a destra','L\'icona NutriTrack apparirà sulla Home!']];
  const stepsAndroid=[['1','Apri questa pagina in <b>Google Chrome</b>','Chrome è necessario per l\'installazione'],['2','Tocca i <b>3 puntini ⋮</b> in alto a destra','Menu del browser'],['3','Tocca <b>"Aggiungi a schermata Home"</b><br>oppure <b>"Installa app"</b>','La voce dipende dalla versione di Chrome'],['4','Tocca <b>"Installa"</b> o <b>"Aggiungi"</b>','L\'icona NutriTrack apparirà sulla Home!']];
  const stepsDesktop=[['1','Apri questa pagina in <b>Chrome o Edge</b>',''],['2','Clicca l\'icona di installazione <b>⊕</b> nella barra URL','Oppure usa il menu → "Installa NutriTrack"'],['3','Clicca <b>"Installa"</b>','L\'app si aprirà come finestra separata']];
  const steps=os==='ios'?stepsIOS:os==='android'?stepsAndroid:stepsDesktop;
  document.getElementById('modal-box').innerHTML=`
    <div class="modal-handle"></div>
    <div class="modal-title">📲 Installa NutriTrack</div>
    <div class="modal-sub">Aggiungi l'app alla schermata Home del tuo telefono</div>
    <div class="os-tabs">
      <div class="os-tab ${os==='ios'?'on':''}" onclick="snd();renderInstallModal('ios')">🍎 iPhone</div>
      <div class="os-tab ${os==='android'?'on':''}" onclick="snd();renderInstallModal('android')">🤖 Android</div>
      <div class="os-tab ${os==='desktop'?'on':''}" onclick="snd();renderInstallModal('desktop')">💻 PC</div>
    </div>
    <div style="background:var(--greenl);border:1px solid #86efac;border-radius:var(--r);padding:10px 12px;font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--greend);margin-bottom:12px">
      ✅ Su <b>GitHub Pages (HTTPS)</b> tutti i dati vengono salvati permanentemente nel browser, e da Fase 10 l'app funziona anche offline grazie al Service Worker.
    </div>
    ${steps.map(([n,t,s])=>`<div class="install-step"><div class="install-num">${n}</div><div class="install-text">${t}${s?`<small>${s}</small>`:''}</div></div>`).join('')}
    <button class="conf-btn" onclick="closeModal()">✓ HO CAPITO</button>`;
}

/* ════════ PWA ════════ */
/* ══ PWA MANIFEST + SERVICE WORKER (Fase 10 — offline reale) ══ */
(function setupPWA(){
  try{
    function mkIcon(sz){
      const cv=document.createElement('canvas');cv.width=sz;cv.height=sz;
      const ctx=cv.getContext('2d'),r=sz*.22;
      ctx.fillStyle='#1a1a2e';ctx.beginPath();ctx.moveTo(r,0);ctx.lineTo(sz-r,0);
      ctx.arcTo(sz,0,sz,r,r);ctx.lineTo(sz,sz-r);ctx.arcTo(sz,sz,sz-r,sz,r);
      ctx.lineTo(r,sz);ctx.arcTo(0,sz,0,sz-r,r);ctx.lineTo(0,r);ctx.arcTo(0,0,r,0,r);
      ctx.closePath();ctx.fill();
      ctx.fillStyle='#16a34a';ctx.beginPath();ctx.arc(sz/2,sz/2,sz*.34,0,Math.PI*2);ctx.fill();
      ctx.font='bold '+Math.round(sz*.36)+'px serif';
      ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText('🥗',sz/2,sz*.52);
      return cv.toDataURL('image/png');
    }
    const ic192=mkIcon(192),ic512=mkIcon(512);
    const at=document.getElementById('apple-touch-icon');
    if(at)at.href=ic192;
    const startUrl=location.href.split('?')[0].split('#')[0];
    const mf={
      name:'NutriTrack Pro',short_name:'NutriTrack',
      description:'Diario nutrizionale – Dott. Petrolese Giovanni',
      start_url:startUrl,display:'standalone',
      background_color:'#f5f0e8',theme_color:'#1a1a2e',
      orientation:'portrait-primary',
      icons:[
        {src:ic192,sizes:'192x192',type:'image/png',purpose:'any maskable'},
        {src:ic512,sizes:'512x512',type:'image/png',purpose:'any maskable'}
      ]
    };
    const mel=document.getElementById('pwa-manifest');
    if(mel){
      const blob=new Blob([JSON.stringify(mf)],{type:'application/manifest+json'});
      mel.href=URL.createObjectURL(blob);
    }
    // Registra il Service Worker (sw.js) — strategia network-first su
    // HTML/JS: mai serve codice vecchio se la rete risponde, quindi non
    // può ripresentarsi il bug schermo bianco da cache congelata.
    if('serviceWorker' in navigator){
      navigator.serviceWorker.register('./sw.js').catch(function(e){
        console.warn('[NT] SW registration error:',e);
      });
    }
  }catch(e){console.warn('[NT] PWA setup error:',e);}
})();
// Verifica storage disponibile
(function checkStorage(){
  try{
    localStorage.setItem('nt_test','1');
    localStorage.removeItem('nt_test');
    const el=document.getElementById('storage-status');
    if(el){
      if(location.protocol==='https:'){el.textContent='🔒 dati sicuri (HTTPS)';}
      else{el.textContent='⚠ file locale';}
    }
  }catch(e){
    const el=document.getElementById('storage-status');
    if(el)el.textContent='⚠ storage non disponibile';
    console.warn('[NT] localStorage non disponibile');
  }
})();

/* ════════ FAB ════════ */
let _fabCtx=null; // 'workout' | null
function fabShow(ctx){
  _fabCtx=ctx;
  const el=document.getElementById('fab-main');
  if(el){el.classList.add('visible');el.textContent=ctx==='workout'?'＋':'＋';}
}
function fabHide(){
  _fabCtx=null;
  const el=document.getElementById('fab-main');
  if(el)el.classList.remove('visible');
}
function fabAction(){
  if(_fabCtx==='workout') addWoModal();
}

/* ════════ BOTTOM NAV ════════ */
let _bnavCur='home';
function bnavSet(id){
  _bnavCur=id;
  document.querySelectorAll('.bnav-btn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById('bnav-'+id);
  if(el)el.classList.add('active');
}
function bnavGo(fn,id){bnavSet(id);navPush(fn);}
function showMoreMenu(fromBack){
  bnavSet('more');
  resetScreen();
  setHdr('📚 ALTRO','Menu principale',false);
  const items=[
    {ico:'🥗',lbl:'Alimenti',sub:'Cerca & aggiungi cibi',cls:'col',fn:"navPush(()=>showAlimenti(null))"},
    {ico:'📅',lbl:'Piano Alimentare',sub:'Gestisci i tuoi pasti',cls:'pran',fn:'navPush(showPiano)'},
    {ico:'👨‍🍳',lbl:'Le Mie Ricette',sub:'Ricette personalizzate',cls:'cena',fn:'navPush(showRicette)'},
    {ico:'➕',lbl:'I Miei Alimenti',sub:'Alimenti custom',cls:'mer',fn:'navPush(showMieiAlimenti)'},
    {ico:'📊',lbl:'Settimana',sub:'Riepilogo 7 giorni',cls:'spu',fn:'navPush(showRiepilogo)'},
    {ico:'📈',lbl:'Report Mese',sub:'Analisi mensile',cls:'exe',fn:'navPush(showReportMensile)'},
    {ico:'📖',lbl:'Storico Pasti',sub:'Diario alimentare',cls:'pes',fn:'navPush(showStoricoDiario)'},
    {ico:'💪',lbl:'Storico Sport',sub:'Allenamenti passati',cls:'acq',fn:'navPush(showWorkoutStorico)'},
    {ico:'⚙️',lbl:'Impostazioni',sub:'Configura l\'app',cls:'col',fn:'navPush(showImpostazioni)'},
    {ico:'📲',lbl:'Installa App',sub:'Aggiungi alla home',cls:'exe',fn:'showInstallGuide()'},
    {ico:'👨‍⚕️',lbl:'Sviluppata da',sub:'Dott. Petrolese Giovanni',cls:'pes',fn:'navPush(showCreditsPage)'},
  ];
  const scr=document.getElementById('screen');
  scr.className='screen anim-in';
  scr.innerHTML=`
    <div style="padding:14px 12px 6px">
      <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--ink3);text-transform:uppercase;margin-bottom:10px">MENU PRINCIPALE</div>
      <div class="meal-grid" style="padding:0">
        ${items.map(i=>`
          <div class="meal-btn ${i.cls}" onclick="snd();${i.fn}" style="padding:16px 12px 14px;gap:6px">
            <div class="meal-ico" style="font-size:28px">${i.ico}</div>
            <div class="meal-lbl" style="font-size:10px;font-weight:700">${i.lbl}</div>
            <div class="meal-n" style="font-size:9px;opacity:.7;line-height:1.3;text-align:center">${i.sub}</div>
          </div>`).join('')}
      </div>
    </div>`;
}

function showCreditsPage(fromBack){
  resetScreen();
  setHdr('👨‍⚕️ CREDITI','Petro Corporation',true);
  const scr=document.getElementById('screen');
  scr.className='screen anim-in';
  scr.innerHTML=`
    <div style="padding:20px 16px 32px;display:flex;flex-direction:column;align-items:center">

      <!-- LOGO / AVATAR -->
      <div style="width:88px;height:88px;border-radius:50%;background:linear-gradient(135deg,#1a1a2e,#16213e);border:3px solid #16a34a;display:flex;align-items:center;justify-content:center;font-size:40px;margin-bottom:14px;box-shadow:0 4px 24px rgba(22,163,74,.25)">
        👨‍⚕️
      </div>

      <div style="font-family:'IBM Plex Mono',monospace;font-size:18px;font-weight:700;color:var(--ink);letter-spacing:.5px;text-align:center;margin-bottom:2px">
        Dott. Petrolese Giovanni
      </div>
      <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">
        Scienze Giuridiche
      </div>
      <div style="display:inline-flex;align-items:center;gap:6px;background:var(--greenl);border:1.5px solid #22c55e;border-radius:99px;padding:5px 14px;margin-bottom:22px">
        <span style="font-size:13px">🏛️</span>
        <span style="font-family:'IBM Plex Mono',monospace;font-size:9px;font-weight:700;color:var(--greend);letter-spacing:.5px">PETRO CORPORATION</span>
      </div>

      <!-- SEZIONE: IL MIO PERCORSO -->
      <div style="width:100%;background:var(--card);border:1.5px solid #e8e3d8;border-radius:var(--rk);overflow:hidden;margin-bottom:12px">
        <div style="background:var(--ink);color:#fff;padding:10px 14px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:8px">
          <span>📖</span> Il Mio Percorso
        </div>
        <div style="padding:14px;font-size:13px;line-height:1.8;color:var(--ink2)">
          Il mio percorso nasce da una profonda convinzione: che il diritto e la scienza si incontrino nel rispetto del corpo umano. Attraverso anni di studi in <strong>Scienze Giuridiche</strong>, ho sviluppato una visione rigorosa e sistematica che ho applicato con passione al mondo della nutrizione e del fitness.
          <br><br>
          Ho compreso che le stesse discipline metodologiche che governano il diritto — precisione, costanza, analisi dei dati — sono le fondamenta di un percorso di benessere efficace e duraturo.
        </div>
      </div>

      <!-- SEZIONE: FILOSOFIA -->
      <div style="width:100%;background:var(--card);border:1.5px solid #e8e3d8;border-radius:var(--rk);overflow:hidden;margin-bottom:12px">
        <div style="background:var(--ink);color:#fff;padding:10px 14px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:8px">
          <span>💡</span> La Mia Filosofia
        </div>
        <div style="padding:14px;font-size:13px;line-height:1.8;color:var(--ink2)">
          <strong>L'alimentazione è il fondamento di un fisico forte e di una mente lucida.</strong> Non si tratta di privazione, ma di strategia. Ogni macronutriente ha un ruolo preciso, ogni pasto è un investimento nel proprio futuro.
          <br><br>
          Ho sviluppato NutriTrack PRO per mettere a disposizione di tutti uno strumento professionale che renda semplice ciò che sembra complesso: tracciare, capire e migliorare la propria alimentazione quotidiana.
        </div>
      </div>

      <!-- SEZIONE: PERCHÉ QUESTA APP -->
      <div style="width:100%;background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1.5px solid #22c55e;border-radius:var(--rk);overflow:hidden;margin-bottom:12px">
        <div style="background:var(--green);color:#fff;padding:10px 14px;font-family:'IBM Plex Mono',monospace;font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:8px">
          <span>🎯</span> Perché NutriTrack PRO
        </div>
        <div style="padding:14px;font-size:13px;line-height:1.8;color:var(--ink)">
          Attraverso studi approfonditi e l'esperienza diretta sul campo, ho identificato le tre aree critiche su cui ogni persona dovrebbe concentrarsi:
          <br><br>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:16px;flex-shrink:0">🥩</span>
              <span><strong>Proteine adeguate</strong> — il mattone di ogni muscolo, spesso sottovalutate nella dieta italiana tradizionale.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:16px;flex-shrink:0">⚡</span>
              <span><strong>Allenamento progressivo</strong> — il corpo si adatta solo se gli chiedi sempre un po' di più.</span>
            </div>
            <div style="display:flex;align-items:flex-start;gap:10px">
              <span style="font-size:16px;flex-shrink:0">📊</span>
              <span><strong>Misurazione costante</strong> — ciò che non si misura non si migliora. I dati sono il tuo alleato più onesto.</span>
            </div>
          </div>
        </div>
      </div>

      <!-- APP INFO -->
      <div style="width:100%;background:var(--card);border:1.5px solid #e8e3d8;border-radius:var(--rk);padding:14px;margin-bottom:20px;text-align:center">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:20px;font-weight:700;letter-spacing:2px;color:var(--ink);margin-bottom:2px">NutriTrack PRO</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:9px;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">by Petro Corporation</div>
        <div style="height:1px;background:#e8e3d8;margin-bottom:10px"></div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--ink3);line-height:2">
          Versione 5.0 · © 2025 Petro Corporation<br>
          Dott. Petrolese Giovanni — Laurea in Scienze Giuridiche<br>
          <span style="color:var(--green);font-weight:700">Tutti i diritti riservati</span>
        </div>
      </div>

      <div style="font-size:24px;opacity:.3">🏛️</div>
    </div>`;
}

/* ════════ TOAST ════════ */
let _toastTimer=null;
function showToast(msg,type,duration){
  duration=duration||2200;
  const el=document.getElementById('toast');
  if(!el)return;
  el.textContent=msg;
  el.className='toast'+(type?' '+type:'');
  void el.offsetWidth;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer=setTimeout(function(){el.classList.remove('show')},duration);
}

/* ════════ REST TIMER ════════ */
let _rtInterval=null,_rtTotal=60,_rtLeft=60;
const RT_CIRC=439.8;
function startRestTimer(seconds,exName){
  _rtTotal=seconds;_rtLeft=seconds;
  document.getElementById('rt-name').textContent=exName||'Prossima serie';
  document.getElementById('rt-sec').textContent=seconds;
  document.getElementById('rt-circle').style.strokeDashoffset='0';
  document.getElementById('rest-timer').classList.add('open');
  clearInterval(_rtInterval);
  _rtInterval=setInterval(function(){
    _rtLeft--;
    const el=document.getElementById('rt-sec');
    const circ=document.getElementById('rt-circle');
    if(el)el.textContent=_rtLeft;
    if(circ){const pct=1-(_rtLeft/_rtTotal);circ.style.strokeDashoffset=(RT_CIRC*pct).toFixed(1);}
    if(_rtLeft<=0){
      clearInterval(_rtInterval);
      snd('confirm');
      document.getElementById('rest-timer').classList.remove('open');
      showToast('✅ Recupero completato!','green');
    }
  },1000);
}
function skipRestTimer(){clearInterval(_rtInterval);document.getElementById('rest-timer').classList.remove('open');showToast('⏭ Recupero saltato');}
function stopRestTimer(){clearInterval(_rtInterval);document.getElementById('rest-timer').classList.remove('open');}

/* ════════ KCAL RING HELPER ════════ */
function buildKcalRing(eaten,goal){
  const pct=Math.min(100,Math.round(eaten/goal*100));
  const r=27;const circ=2*Math.PI*r;
  const fill=circ*(pct/100);
  const cls=pct>=100?'over':pct>=85?'warn':'';
  const wrapStyle=pct>=100?'animation:ring-celebrate .6s ease .1s both':'';
  return `<div class="kcal-ring-wrap" style="${wrapStyle}"><svg viewBox="0 0 64 64"><circle class="kcal-ring-bg" cx="32" cy="32" r="${r}"/><circle class="kcal-ring-fill ${cls}" cx="32" cy="32" r="${r}" stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${(circ-fill).toFixed(1)}"/></svg><div class="kcal-ring-center"><div class="kcal-ring-pct">${pct>=100?'🎯':pct+'%'}</div><div class="kcal-ring-sub">${pct>=100?'meta!':'kcal'}</div></div></div>`;
}

console.log('%c[NutriTrack Pro] v10.0 — Dott. Petrolese Giovanni — PetroCorporation © 2025','color:#16a34a;font-weight:bold;font-size:12px');
