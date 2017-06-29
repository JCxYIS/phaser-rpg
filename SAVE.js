//CHROME:
//%LocalAppData%\Google\Chrome\User Data\Default\Local Storage\

var savever = 2;

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
		savever + "JC%811%YIS" +   //0
		manname + "JC%811%YIS" +   //1
		manlv + "JC%811%YIS" +     //2
		manexp + "JC%811%YIS" +    //3
		manplayed + "JC%811%YIS" + //4
		manstyle + "JC%811%YIS" +  //5
		manexatk + "JC%811%YIS" +    //6
		manexhp + "JC%811%YIS" +    //7
		manexhpcure + "JC%811%YIS" +   //8
		manmppunish + "JC%811%YIS" +  //9
		manexshootspd + "JC%811%YIS" +  //10
		manexshootrate + "JC%811%YIS" +  //11
		manexmpuse + "JC%811%YIS" +  //12
		manexdef + "JC%811%YIS" +	   //13
		manexmp + "JC%811%YIS" +  //14
		manexmpcure + "JC%811%YIS" + //15
		mansskill + "JC%811%YIS" + //16
		mannskill1 + "JC%811%YIS" + //17
		mannskill2 + "JC%811%YIS" + //18
		mannskill3 + "JC%811%YIS" + //19
		mannskill4					//20
	);	
}

function foefout(){
	localStorage.setItem(foename,
		savever + "JC%811%YIS" +   //0
		foename + "JC%811%YIS" +   //1
		foelv + "JC%811%YIS" +     //2
		foeexp + "JC%811%YIS" +    //3
		foeplayed + "JC%811%YIS" + //4
		foestyle + "JC%811%YIS" +  //5
		foeexatk + "JC%811%YIS" +    //6
		foeexhp + "JC%811%YIS" +    //7
		foeexhpcure + "JC%811%YIS" +   //8
		foemppunish + "JC%811%YIS" +  //9
		foeexshootspd + "JC%811%YIS" +  //10
		foeexshootrate + "JC%811%YIS" +  //11
		foeexmpuse + "JC%811%YIS" +  //12
		foeexdef + "JC%811%YIS" +	   //13
		foeexmp + "JC%811%YIS" +  //14
		foeexmpcure + "JC%811%YIS" + //15
		foesskill + "JC%811%YIS" + //16
		foenskill1 + "JC%811%YIS" + //17
		foenskill2 + "JC%811%YIS" + //18
		foenskill3 + "JC%811%YIS" + //19
		foenskill4					//20
	);	
}

var key;
function finfin(player){
		if(player == "man"){
			key = $('input[name=man]:checked').val();
			var key = key.split("JC%811%YIS");
				//console.log(key);
				// for(var i=0; i<=16;i+=1){
					// console.log(key[i]);
				// }
			
			manname = Number(key[1])   //1
			manlv = Number(key[2])     //2
			manexp = Number(key[3])    //3
			manplayed = Number(key[4]) //4
			manstyle = Number(key[5])  //5
			manexatk = Number(key[6])    //6
			manexhp = Number(key[7])    //7
			manexhpcure = Number(key[8])   //8
			manexmppunish = Number(key[9])  //9
			manexshootspd = Number(key[10])  //10
			manexshootrate = Number(key[11])  //11
			manexmpuse = Number(key[12])  //12
			manexdef = Number(key[13])	   //13
			manexmaxmp = Number(key[14])  //14
			manexmpcure = Number(key[15]) //15
			mansskill = Number(key[16]) //16
			mannskill1 = Number(key[17]) //17
			mannskill2 = Number(key[18]) //18
			mannskill3 = Number(key[19]) //19
			mannskill4 = Number(key[20])	//20
			document.getElementById("manpickconfirmed").innerHTML = "OK!";
		}

		if(player == "foe"){
			key = $('input[name=foe]:checked').val();
			var key = key.split("JC%811%YIS");
				//console.log(key);
				// for(var i=0; i<=16;i+=1){
					// console.log(key[i]);
				// }
			
			foename = Number(key[1])   //1
			foelv = Number(key[2])     //2
			foeexp = Number(key[3])    //3
			foeplayed = Number(key[4]) //4
			foestyle = Number(key[5])  //5
			foeexatk = Number(key[6])    //6
			foeexhp = Number(key[7])    //7
			foeexhpcure = Number(key[8])   //8
			foeexmppunish = Number(key[9])  //9
			foeexshootspd = Number(key[10])  //10
			foeexshootrate = Number(key[11])  //11
			foeexmpuse = Number(key[12])  //12
			foeexdef = Number(key[13])	   //13
			foeexmaxmp = Number(key[14])  //14
			foeexmpcure = Number(key[15]) //15
			foesskill = Number(key[16]) //16
			foenskill1 = Number(key[17]) //17
			foenskill2 = Number(key[18]) //18
			foenskill3 = Number(key[19]) //19
			foenskill4 = Number(key[20])	//20
			document.getElementById("foepickconfirmed").innerHTML = "OK!";
		}
	}

function fin(player){
	document.getElementById(player + "pick").innerHTML += "<yis>Select a player...</yis><br><br>";
	document.getElementById(player + "pick").innerHTML += '<form id="manform">';
	 
	for(var i=0, len=localStorage.length; i<len; i++) {
    	var key = localStorage.key(i);
        var value = localStorage[key];
    	if(key != "visited"){
    		document.getElementById(player + "pick").innerHTML += '<input  type="radio" name="' + player + '" value="' + value +'">' + key + "<br>";
    	}
    	//console.log(key + " => " + value);
	}


	document.getElementById(player + "pick").innerHTML += '</form>';
	$("#"+player+"pick").slideDown(300);
	$("#"+player+"localbt").fadeOut(300);
	$("#"+player+"ifnot").fadeOut(300);
	
}
