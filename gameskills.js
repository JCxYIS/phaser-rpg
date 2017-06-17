function manstyledecide(manstyle){
	switch(manstyle){
		case "standard":
			mansetstandard();
			document.getElementById("manconfirmed").innerHTML = "done!";
			break;

		case "sniper":
			mansetsniper();
			document.getElementById("manconfirmed").innerHTML = "done!";
			break;

		case "machinegun":
			mansetmachinegun();
			document.getElementById("manconfirmed").innerHTML = "done!";
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
			reinit();
}

function mansetmachinegun() {
			manlv = 1;
			manexp = 0;
			manstyle = "Machine Gun";
			manatk = 150;
			manmaxhp = 505;
			manhpcure = 200;
			manmppunish = 115;		
			manshootspd = 250;
			manshootrate = 100;
			manshootvariance = 12;
			manmpuse = 0.25;
			mandef = 90;
			manmaxmp = 666;
			manmpcure = 287;
			manfloorpain = 0.35;
			//mansskill = 0;
			reinit();
}


//======================FOE===========================================================================================================================
function foestyledecide(foestyle){
	switch(foestyle){
		case "standard":
			foesetstandard();
			document.getElementById("foeconfirmed").innerHTML = "done!";
			break;

		case "sniper":
			foesetsniper();
			document.getElementById("foeconfirmed").innerHTML = "done!";
			break;

		case "machinegun":
			foesetmachinegun();
			document.getElementById("foeconfirmed").innerHTML = "done!";
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
			foemppunish = 300;		
			foeshootspd = 400;
			foeshootrate = 200;
			foeshootvariance = 3;
			foempuse = 0.5;
			foedef = 100;
			foemaxmp = 500;
			foempcure = 200;
			foefloorpain = 0.2;
			//foesskill = 0;
			reinit();
}


function foesetsniper() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Sniper";
			foeatk = 4000;
			foemaxhp = 420;
			foehpcure = 230;
			foemppunish = 230;		
			foeshootspd = 800;
			foeshootrate = 1000;
			foeshootvariance = 0;
			foempuse = 1.0;
			foedef = 87;
			foemaxmp = 520;
			foempcure = 250;
			foefloorpain = 0.15;
			//foesskill = 0;
			reinit();
}

function foesetmachinegun() {
			foelv = 1;
			foeexp = 0;
			foestyle = "Machine Gun";
			foeatk = 150;
			foemaxhp = 505;
			foehpcure = 200;
			foemppunish = 420;		
			foeshootspd = 250;
			foeshootrate = 100;
			foeshootvariance = 12;
			foempuse = 0.25;
			foedef = 90;
			foemaxmp = 666;
			foempcure = 287;
			foefloorpain = 0.35;
			//foesskill = 0;
			reinit();
}
