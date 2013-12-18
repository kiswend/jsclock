/*
Horloge analogique par Kisw
19/03/2008

Affiche une horloge analogique sur votre page web
necessito : 
	- un layer de id = "jsclock" dans body
	- coe propriete de body : onLoad="window.setInterval('updatetime();',1000)"

*/
	var temoin = true;
	var n = 7; // nombre de point par aiguille
	var i;
	var elemid; // id de l'image ajoutee
	var dimension; // hauteur = largeur de l'image a creer
	var ni;
	
	var xc = 100;  // abscisse centale
	var yc = 100;  // ordorne centrale
	
	
	var lsec = 80; // rayon des secondes
	var lmin = 70; // rayon des minutes
	var lh = 40; // rayon de l'heure
	
	function createnewim(elemid, dimension){
		var newdiv = document.createElement('img');
		var ni = document.getElementById('jsclock');
		newdiv.setAttribute('id', elemid);
		newdiv.setAttribute('src',"dot.png");
		ni.appendChild(newdiv);
		document.getElementById(elemid).style.position="absolute";
		//document.images[elemid].vspace = 100;
		//document.images[elemid].hspace = 100;
		document.images[elemid].height = dimension;
		document.images[elemid].width = dimension;
	}
	
	function updatetime(){
		
		if(temoin){
			/* creer les point s'il n'existent pas = a l'ouverture du fichier */
			for (i=1; i<=n; i++){
				
				createnewim("h"+i.toString(), 4);
				createnewim("min"+i.toString(), 2);
				createnewim("sec"+i.toString(), 1);
			}
			temoin = false;
		}
		
		var d = new Date()
		var s = d.getSeconds();  // secondes
		var m = d.getMinutes();
		var h = d.getHours();
		
		for(i=1; i<=n; i++){
			document.getElementById("sec" + i.toString()).hspace =  xc + i*lsec*Math.cos(s*Math.PI/30 - Math.PI/2)/n;
			document.getElementById("sec" + i.toString()).vspace =  yc + i*lsec*Math.sin(s*Math.PI/30 - Math.PI/2)/n;
			
			document.getElementById("min" + i.toString()).hspace =  xc + i*lmin*Math.cos(m*Math.PI/30 - Math.PI/2)/n;
			document.getElementById("min" + i.toString()).vspace =  yc + i*lmin*Math.sin(m*Math.PI/30 - Math.PI/2)/n;
			
			document.getElementById("h" + i.toString()).hspace =  xc + i*lh*Math.cos(2*(60*h+m)*Math.PI/(60*12) - Math.PI/2)/n -2;
			document.getElementById("h" + i.toString()).vspace =  yc + i*lh*Math.sin(2*(60*h+m)*Math.PI/(60*12) - Math.PI/2)/n -2;
		}
		
		/*pour afficher l'heure numerique dans un champ de text de id = "timenum"*/
		//document.getElementById("timenum").value =((h>9)? h:"0"+h.toString()).toString() + ":" + ((m>9)? m:"0"+m.toString()).toString() + ":" + ((s>9)? s:"0"+s.toString()).toString();
	}
	
	
