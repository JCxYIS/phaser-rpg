function manstyledecide(manstyle){
	switch(manstyle){
		case "standard":
			mansetstandard();
			document.getElementById("manconfirmed").innerHTML = "Standard? done!";
			break;

		case "sniper":
			mansetsniper();
			document.getElementById("manconfirmed").innerHTML = "Sniper? done!";
			break;

		case "machinegun":
			mansetmachinegun();
			document.getElementById("manconfirmed").innerHTML = "Machine Gun? done!";
			break;

		case "gatling":
			mansetgatling();
			document.getElementById("manconfirmed").innerHTML = "Gatling Gun? done!";
			break;

		default:
			document.getElementById("manconfirmed").innerHTML = "ERROR! Please report to J.C.";
			break;
	}
}

function mansetstandard() {
			manlv = 1;
			manexp = 0;
			manstyle = "Standard";
			manatk = 500;
			manmaxhp = 500;
			manhpcure = 200;
			manmppunish = 100;		
			manshootspd = 400;
			manshootrate = 200;
			manshootvariance = 3;
			manmpuse = 0.5;
			mandef = 100;
			manmaxmp = 500;
			manmpcure = 200;
			manfloorpain = 0.2;
			//mansskill = 0;
			mancbexper = 1;
			reinit();
}


function mansetsniper() {
			manlv = 1;
			manexp = 0;
			manstyle = "Sniper";
			manatk = 4000;
			manmaxhp = 420;
			manhpcure = 230;
			manmppunish = 170;		
			manshootspd = 800;
			manshootrate = 1000;
			manshootvariance = 0;
			manmpuse = 1.0;
			mandef = 87;
			manmaxmp = 520;
			manmpcure = 250;
			manfloorpain = 0.15;
			//mansskill = 0;
			mancbexper = 0.15;
			reinit();
}

function mansetmachinegun() {
			manlv = 1;
			manexp = 0;
			manstyle = "Machine Gun";
			manatk = 125;
			manmaxhp = 505;
			manhpcure = 200;
			manmppunish = 115;		
			manshootspd = 265;
			manshootrate = 100;
			manshootvariance = 12;
			manmpuse = 0.25;
			mandef = 90;
			manmaxmp = 600;
			manmpcure = 287;
			manfloorpain = 0.35;
			//mansskill = 0;
			mancbexper = 1.23;
			reinit();
}

function mansetgatling() {
			manlv = 1;
			manexp = 0;
			manstyle = "Gatling Gun";
			manatk = 50;
			manmaxhp = 600;
			manhpcure = 300;
			manmppunish = 444;		
			manshootspd = 300;
			manshootrate = 20;
			manshootvariance = 16;
			manmpuse = 0.28;
			mandef = 111;
			manmaxmp = 870;
			manmpcure = 140;
			manfloorpain = 0.7;
			//mansskill = 0;
			mancbexper = 1.11;
			reinit();
}

//======================FOE===========================================================================================================================

function foestyledecide(foestyle){
	switch(foestyle){
		case "standard":
			foesetstandard();
			document.getElementById("foeconfirmed").innerHTML = "Standard? done!";
			break;

		case "sniper":
			foesetsniper();
			document.getElementById("foeconfirmed").innerHTML = "Sniper? done!";
			break;

		case "machinegun":
			foesetmachinegun();
			document.getElementById("foeconfirmed").innerHTML = "Machine Gun? done!";
			break;

		case "gatling":
			foesetgatling();
			document.getElementById("foeconfirmed").innerHTML = "Gatling Gun? done!";
			break;

		default:
			document.getElementById("foeconfirmed").innerHTML = "ERROR! Please report to J.C.";
			break;
	}
}

function foesetstandard() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Standard";
			foeatk = 500;
			foemaxhp = 500;
			foehpcure = 200;
			foemppunish = 100;		
			foeshootspd = 400;
			foeshootrate = 200;
			foeshootvariance = 3;
			foempuse = 0.5;
			foedef = 100;
			foemaxmp = 500;
			foempcure = 200;
			foefloorpain = 0.2;
			//foesskill = 0;
			foecbexper = 1;
			reinit();
}


function foesetsniper() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Sniper";
			foeatk = 4000;
			foemaxhp = 420;
			foehpcure = 230;
			foemppunish = 170;		
			foeshootspd = 800;
			foeshootrate = 1000;
			foeshootvariance = 0;
			foempuse = 1.0;
			foedef = 87;
			foemaxmp = 520;
			foempcure = 250;
			foefloorpain = 0.15;
			//foesskill = 0;
			foecbexper = 0.15;
			reinit();
}

function foesetmachinegun() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Machine Gun";
			foeatk = 125;
			foemaxhp = 505;
			foehpcure = 200;
			foemppunish = 115;		
			foeshootspd = 265;
			foeshootrate = 100;
			foeshootvariance = 12;
			foempuse = 0.25;
			foedef = 90;
			foemaxmp = 600;
			foempcure = 287;
			foefloorpain = 0.35;
			//foesskill = 0;
			foecbexper = 1.23;
			reinit();
}

function foesetgatling() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Gatling Gun";
			foeatk = 50;
			foemaxhp = 600;
			foehpcure = 300;
			foemppunish = 444;		
			foeshootspd = 300;
			foeshootrate = 20;
			foeshootvariance = 16;
			foempuse = 0.28;
			foedef = 111;
			foemaxmp = 870;
			foempcure = 140;
			foefloorpain = 0.7;
			//foesskill = 0;
			foecbexper = 1.11;
			reinit();
}