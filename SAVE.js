//CHROME:
//%LocalAppData%\Google\Chrome\User Data\Default\Local Storage\
function visit(){
	if(localStorage.visited!= null ){
		visited = Number(localStorage.visited);
	}
	localStorage.visited = visited + 1;
	console.log("VISITED: " + localStorage.visited);
}

function destroy_save(){
	if(confirm("ARE YOU SURE??\nTHIS CAN'T BE UNDONE!!!")){
		localStorage.clear();
		alert("''Greetings. I'm Chara.''");
		document.getElementById("body").innerHTML = "<img src='asset/CharaJumpscare.gif' style='height: 100%; width: 100%'>";
	}
}

function manfout(){
	localStorage.setItem(manname,
		ver + "VER" +
		manlv + "JC%811%YIS" +
		manexp + "JC%811%YIS" +
		manplayed + "JC%811%YIS" +
		manstyle + "JC%811%YIS" +
		manatk + "JC%811%YIS" +
		manfloorpain + "JC%811%YIS" +
		manmaxhp + "JC%811%YIS" +
		manhpcure + "JC%811%YIS" +
		manmppunish + "JC%811%YIS" +
		manshootspd + "JC%811%YIS" +
		manshootrate + "JC%811%YIS" +
		manshootvariance + "JC%811%YIS" +
		manmpuse + "JC%811%YIS" +
		mandef + "JC%811%YIS" +
		manmaxmp + "JC%811%YIS" +
		manmpcure + "JC%811%YIS" +
		mansskill
	);	
}

function foefout(){
	localStorage.setItem(foename,
		ver + "VER" +
		foelv + "JC%811%YIS" +
		foeexp + "JC%811%YIS" +
		foeplayed + "JC%811%YIS" +
		foestyle + "JC%811%YIS" +
		foeatk + "JC%811%YIS" +
		foefloorpain + "JC%811%YIS" +
		foemaxhp + "JC%811%YIS" +
		foehpcure + "JC%811%YIS" +
		foemppunish + "JC%811%YIS" +
		foeshootspd + "JC%811%YIS" +
		foeshootrate + "JC%811%YIS" +
		foeshootvariance + "JC%811%YIS" +
		foempuse + "JC%811%YIS" +
		foedef + "JC%811%YIS" +
		foemaxmp + "JC%811%YIS" +
		foempcure + "JC%811%YIS" +
		foesskill
	);	
}

function finfin(player, key){
		if(player == "man"){
			key.split("JC%811%YIS");
			manlv = key[0]
			manexp = key[1]
			manplayed = key[2]
			manstyle = key[3]
			manatk = key[4]
			manfloorpain = key[5]
			manmaxhp = key[6]
			manhpcure = key[7]
			manmppunish = key[8]
			manshootspd = key[9]
			manshootrate = key[10]
			manshootvariance = key[11]
			manmpuse = key[12]
			mandef = key[13]
			manmaxmp = key[14]
			manmpcure = key[15]
			mansskill = key[16]
		}
		
		if(player == "foe"){
			key.split("JC%811%YIS");
			foelv = key[0]
			foeexp = key[1]
			foeplayed = key[2]
			foestyle = key[3]
			foeatk = key[4]
			foefloorpain = key[5]
			foemaxhp = key[6]
			foehpcure = key[7]
			foemppunish = key[8]
			foeshootspd = key[9]
			foeshootrate = key[10]
			foeshootvariance = key[11]
			foempuse = key[12]
			foedef = key[13]
			foemaxmp = key[14]
			foempcure = key[15]
			foesskill = key[16]
		}
	}

function fin(player){
	document.getElementById(player + "pick").innerHTML += "<yis>Select a player...</yis><br><br>";
	document.getElementById(player + "pick").innerHTML += '<form id="manform">';
	 
	for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
    	var value = localStorage[key];
    	if(key != "visited"){
    		document.getElementById(player + "pick").innerHTML += '<input  type="radio" name="' + player + '" value="' + key +'">' + key + "<br>";
    	}
    	//console.log(key + " => " + value);
	}


	document.getElementById(player + "pick").innerHTML += '</form>';
	$("#"+player+"pick").slideDown(300);
	
}
