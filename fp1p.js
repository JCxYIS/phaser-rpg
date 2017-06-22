game.States.battle = function(){
			this.create = function(){
				gamestarted = true;
				//floor, bg
				var bg = game.add.tileSprite(0, -80, game.width, game.height, 'background'); 
        		var ground = game.add.tileSprite(0, game.height-87, game.width, 112, 'ground'); 
      		    bg.autoScroll(-10,0); 
       			ground.autoScroll(-487,0); 

       			//print name
       			this.printmanname = game.add.text(20, 3, manname ,{fontSize:'16px', font:'Hall Fetica', fontStyle:'italic'});
       			this.printfoename = game.add.text(630, 3, foename ,{fontSize:'16px', font:'Hall Fetica', fontStyle:'italic'});
       			this.printfoename.anchor.setTo(1,0);

				//printhp
				this.printmanhp = game.add.text(20, 20, manhp, hpfontformat);
				this.printmanof = game.add.text(70, 20, '/', hpfontformat);
				this.printmanmaxhp = game.add.text(90, 20, manmaxhp, hpfontformat);
				this.printfoehp = game.add.text(560, 20, foehp, hpfontformat);
				this.printfoehp.anchor.setTo(1,0);
				this.printfoeof = game.add.text(580, 20, '/', hpfontformat);
				this.printfoeof.anchor.setTo(1,0);
				this.printfoemaxhp = game.add.text(630, 20, foemaxhp, hpfontformat);
				this.printfoemaxhp.anchor.setTo(1,0);

				//printmp
				this.printmanmp = game.add.text(20, 50, manmp, mpfontformat);
				this.printmanofm = game.add.text(55, 50, '/', mpfontformat);
				this.printmanmaxmp = game.add.text(70, 50, manmaxmp, mpfontformat);
				this.printfoemp = game.add.text(580, 50, foemp, mpfontformat);
				this.printfoemp.anchor.setTo(1,0);
				this.printfoeofm = game.add.text(600, 50, '/', mpfontformat);
				this.printfoeofm.anchor.setTo(1,0);
				this.printfoemaxmp = game.add.text(630, 50, foemaxmp, mpfontformat);
				this.printfoemaxmp.anchor.setTo(1,0);

				//print combo!!
				this.mancombos = game.add.text(65, 65, mancombo, cbfontformat);
				this.manhits = game.add.text(20, 90, "Hits!!", {font: 'Hall Fetica', fontSize: '21px',fill:'red'});
				this.foecombos = game.add.text(585, 65, foecombo, cbfontformat);
				this.foecombos.anchor.setTo(1,0);
				this.foehits = game.add.text(630, 90, "Hits!!", {font: 'Hall Fetica', fontSize: '21px',fill:'red'});
				this.foehits.anchor.setTo(1,0);

				//printpunish(pp)
				this.printmanhppun = game.add.text(20, 130, "H.P.P.", hppunfontformat);
				this.printmanmaxhppun = game.add.text(70, 130, manplayhpp, hppunfontformat);
				this.printfoehppun = game.add.text(580, 130,"H.P.P. ", hppunfontformat);
				this.printfoehppun.anchor.setTo(1,0);
				this.printfoemaxhppun = game.add.text(630, 130, foeplayhpp, hppunfontformat);
				this.printfoemaxhppun.anchor.setTo(1,0);

				this.printmanmppun = game.add.text(20, 145, "M.P.P.", mppunfontformat);
				this.printmanmaxmppun = game.add.text(70, 145, manplaymppunish, mppunfontformat);
				this.printfoemppun = game.add.text(580, 145,"M.P.P. ", mppunfontformat);
				this.printfoemppun.anchor.setTo(1,0);
				this.printfoemaxmppun = game.add.text(630, 145, foeplaymppunish, mppunfontformat);
				this.printfoemaxmppun.anchor.setTo(1,0);

				//print effects


				//print skill
				//this.printmanskl = game.add.text(22, 70, skills[mansskill], sklfontformat);
				

				//graph & gravity
				this.man = game.add.sprite(50, 150, 'man');
				this.man.animations.add('goright', [0, 1, 2], 10, true);
				this.man.animations.add('goleft',[3, 4, 5], 10, true);
    		    this.man.animations.play('goright');
				game.physics.arcade.enable(this.man, Phaser.Physics.P2);
				this.man.body.collideWorldBounds = true;
				this.man.body.gravity.x = 0;

				this.foe = game.add.sprite(550, 150, 'foe');
    			this.foe.animations.add('fgoright', [0, 1, 2], 10, true);
				this.foe.animations.add('fgoleft',[3, 4, 5], 10, true);
    		    this.foe.animations.play('fgoleft');
				game.physics.arcade.enable(this.foe, Phaser.Physics.P2);
				this.foe.body.collideWorldBounds = true;
				this.foe.body.gravity.y = 0;

				//input
				cursors = game.input.keyboard.createCursorKeys();
				enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER); 
  			    spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  			    manjump = game.input.keyboard.addKey(82);//R up
  			    mandown = game.input.keyboard.addKey(70);//F down!
  			    manleft = game.input.keyboard.addKey(68);//D left
  			    manright = game.input.keyboard.addKey(71);//F right
  			    manatkkey = game.input.keyboard.addKey(90);//Z attack!
  			    esc = game.input.keyboard.addKey(27);//Z attack!
  			    this.man.inputEnabled = true;

  				//this.man.input.enableDrag(true);

  				//skills

  				 //  Creates 30 bullets
  			     this.weaponm = game.add.weapon(200, 'bullet');
  			     //weapon's angle
  			     this.weaponm.fireAngle = 0;
  			     //   be automatically killed when it leaves the world bounds
  			     this.weaponm.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  			     //  graph rotation:
  			     this.weaponm.bulletAngleOffset = 0;
  			     //  speed
  			     this.weaponm.bulletSpeed = manshootspd;
  			     //   rate of fire
  			     this.weaponm.fireRate = manshootrate;
  			     //   不準度
  			     this.weaponm.bulletAngleVariance = manshootvariance;
  			     //   track the player, offset  horizontally, vertically
  			     this.weaponm.trackSprite(this.man, 14, 15);
  			   //  game.physics.arcade.enable(this.weaponm, Phaser.Physics.P2);
  				
  			     this.weaponf = game.add.weapon(30, 'bullet2');
  			     this.weaponf.fireAngle = 180;
  			     this.weaponf.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
  			     this.weaponf.bulletAngleOffset = 0;
  			     this.weaponf.bulletSpeed = foeshootspd;
  			     this.weaponf.fireRate = foeshootrate;
  			     this.weaponf.bulletAngleVariance = foeshootvariance;
  			     this.weaponf.trackSprite(this.foe, 14, 15);
  			     game.physics.arcade.enable(this.weaponf, Phaser.Physics.P2);
			}


			this.update = function(){
				this.man.body.velocity.x = 0;
				this.foe.body.velocity.x = 0;
				this.man.body.velocity.y = 0;
				this.foe.body.velocity.y = 0;
				game.physics.arcade.collide(this.man, this.foe, this.mfcrash);
				game.physics.arcade.overlap(this.weaponm.bullets, this.foe, this.foehitweaponm);
				game.physics.arcade.overlap(this.weaponf.bullets, this.man, this.manhitweaponf);

				//pause
				if (spacebar.isDown) {this.pause();}

				//floorpain
				if(this.man.body.onFloor()==true){manhp -= manfloorpain; manplaymppunish = manmppunish;}
				if(this.foe.body.onFloor()==true){foehp -= foefloorpain; foeplaymppunish = foemppunish;}

				//gg and print
				if(manhp<0){manhp = 0;}
			    if(foehp<0){foehp = 0;}

			    this.printmanhp.text = Math.floor(manhp);
			    this.printfoehp.text = Math.floor(foehp);
				if(manhp > 0){}
					else if(foehp > 0 && manhp == 0){this.foewin();}

				if(foehp > 0){}
					else if(manhp > 0 && foehp == 0){this.manwin();}

				this.printmanmp.text = Math.floor(manmp);
				this.printfoemp.text = Math.floor(foemp);

				//punish kill and revive
				if(manplaymppunish > 0){this.printmanmaxmppun.text = Math.floor(manplaymppunish);this.printmanmppun.revive();this.printmanmaxmppun.revive();}
					else{this.printmanmppun.kill();this.printmanmaxmppun.kill();}
				if(foeplaymppunish > 0){this.printfoemaxmppun.text = Math.floor(foeplaymppunish);this.printfoemppun.revive();this.printfoemaxmppun.revive();}
					else{this.printfoemppun.kill();this.printfoemaxmppun.kill();}

				if(manplayhpp > 0){this.printmanmaxhppun.text = Math.floor(manplayhpp);this.printmanhppun.revive();this.printmanmaxhppun.revive();}
					else{this.printmanhppun.kill();this.printmanmaxhppun.kill();}
				if(foeplayhpp > 0){this.printfoemaxhppun.text = Math.floor(foeplayhpp);this.printfoehppun.revive();this.printfoemaxhppun.revive();}
					else{this.printfoehppun.kill();this.printfoemaxhppun.kill();}

				manplaymppunish -= 1.5; foeplaymppunish -= 1.5;
				manplayhpp -= 1.5; foeplayhpp -= 1.5;

				//combo kill and revive
				if(mancbtmp != mancombo){ mancbtmp = mancombo; mannocombo = 0;}
					else{mannocombo+=0.015;}
				if(mannocombo <3){this.mancombos.text = Math.floor(mancombo);this.mancombos.revive();this.manhits.revive();}	
					else if(mannocombo >= 3){mancombo = 0; mancbtmp = 0;this.mancombos.kill();this.manhits.kill();}

				if(foecbtmp != foecombo){foecbtmp = foecombo; foenocombo = 0;}
					else{foenocombo+=0.015;}
				if(foenocombo <3){this.foecombos.text = Math.floor(foecombo);this.foecombos.revive();this.foehits.revive();}		
					else if(foenocombo >= 3){foecombo = 0;foecbtmp = 0;this.foecombos.kill();this.foehits.kill();}


				//move p1 man

				if (manleft.isDown || cursors.left.isDown){
					this.man.body.velocity.x = -250; 
					this.man.animations.play('goleft');
					this.weaponm.fireAngle = 180;
				}
   					else if(manright.isDown || cursors.right.isDown){this.man.body.velocity.x = 250; 
   						this.man.animations.play('goright');
   						this.weaponm.fireAngle = 0;
   					}
   			    if (manjump.isDown || cursors.up.isDown) {this.man.body.velocity.y = -300;}	
   			    	else if(mandown.isDown || cursors.down.isDown){this.man.body.velocity.y = 300;}

				//move p2(foe)
				/*
				if (cursors.left.isDown){
					this.foe.body.velocity.x = -250; 
					this.foe.animations.play('fgoleft');
					this.weaponf.fireAngle = 180;}
   					else if(cursors.right.isDown){
   						this.foe.body.velocity.x = 250; 
   						this.foe.animations.play('fgoright');
   						this.weaponf.fireAngle = 0;
   					}
   			    if (cursors.up.isDown) {this.foe.body.velocity.y = -300; }
   			    	else if(cursors.down.isDown){this.foe.body.velocity.y = 500;}
   			    	*/

   			    //sudden death!!!!!!!
   			    if(manhp == 0 && foehp == 0){this.suddendeath();}

   			    //if mp<1...
   			    if(manmp <= 0 && manmpdrained == false){manplaymppunish = 150; manmpdrained = true;}
   			    if(foemp <= 0 && foempdrained == false){foeplaymppunish = 150; foempdrained = true;}
   			    if(manplaymppunish <= 0 && manmpdrained == true){manmpdrained = false;}
   			    if(foeplaymppunish <= 0 && foempdrained == true){foempdrained = false;}

   			    //mp+hp regain
   			    if(manhp < manmaxhp && manplayhpp<=0){
   			    	manhp += manhpcure / 15000;
   			    }
   			    if(foehp < foemaxhp && foeplayhpp<=0){
   			      	foehp += foehpcure / 15000;
   			    }

   			    if(manmp < manmaxmp && manplaymppunish<=0){
   			    	manmp += manmpcure / 10000;
   			    }
   			    if(foemp < foemaxmp && foeplaymppunish<=0){
   			    	foemp += foempcure / 10000;
   			    }


   			    //attack!!
   			    if((manatkkey.isDown || enter.isDown) && mancanshoot == true && manmp>0){this.weaponm.fire(); manmp-=manmpuse; manmpregain = 0;}
   			    	else if(manmp <= 0){manmp = 0;}
   			    
   			    /*
   			    if(enter.isDown && foemp>0){this.weaponf.fire(); foemp-=foempuse; foempregain = 0;}
   			    	else if(foemp <= 0){foemp = 0;}
   			    	*/

   			    //special attack!!

			}

			//-------------------------------------------------------------------------------------------

			this.pause = function(){
				pausebg = game.add.image(0,0,'ggbg');
				pausetext = game.add.text(325, 50, "PAUSED", {font: 'Hall Fetica', fontSize: '55px', fill: 'white'});
				pausetext.anchor.setTo(0.5,0.5);
				pauseclick = game.add.text(325, 420, "Click to continue...", {font: 'Hall Fetica', fontSize: '16px', fill: 'white'});
				pauseclick.anchor.setTo(0.5,0.5);
				game.paused = true;
				game.input.onDown.add(unpause, self);

				function unpause(event){
					game.paused = false;
					pausebg.destroy();
					pausetext.destroy();
					pauseclick.destroy();
				}
			}

			this.printmaneff = function(effect , style, time){
				//this.printmanmppun = game.add.text(22, 80, "M.P.P.", mppunfontformat);
			}

			this.mfcrash = function(){
				manhp-=6;
				foehp-=6;
				mancombo += 1;
				foecombo += 1;
			}

			this.foehitweaponm = function(){
				if(manatk>foedef){
					foehp -= manatk/100 - foedef/100;
					foeplaymppunish = foemppunish;
					mancombo += 1;
				}
				else{
					foehp -= 0.1;
					console.log("foe::block");
					mancombo += 1;
				}
			}

			this.manhitweaponf = function(){
				if(foeatk>mandef){
					manhp -= foeatk/100 - mandef/100;
					manplaymppunish = manmppunish;
					foecombo +=1;
				}
				else{
					manhp -= 0.1;
					console.log("man::block");
					foecombo += 1;
				}
			}

			this.foewin = function(){
				manhp = 0;
				this.printmanhp.text = 0;
				this.ggbox(foename);
			}

			this.manwin = function(){
				foehp = 0;
				this.printfoehp.text = 0;
				this.ggbox(manname);
			}

			this.suddendeath = function(){
				var sdthing = "Wow! You guys are on fire!\n Now, let's start the final face off\n\nClick to rush!"
				game.add.image(0,0,'ggbg');
				sdtxt = game.add.text(325, 50, 'SUDDEN DEATH', {font: 'Hall Fetica', fontSize: '55px', fill: 'white'});
				sdtxt.anchor.setTo(0.5,0.5);
				
				clicksd = game.add.text(325, 225, sdthing , {font: 'Hall Fetica', fontSize: '16px', fill: 'white'});
				clicksd.anchor.setTo(0.5,0.5);

				game.paused = true;				
				game.input.onDown.add(unpause, self);

				manhp = 1; foehp = 1;
				manmp = 1; foemp = 1;
				mancombo = 0; foecombo = 0; mancbtmp = 0; foecbtmp = 0;
				mannocombo = 3; foenocombo = 3;
				manplayhpp = 1000000; foeplayhpp = 1000000;
				manplaymppunish = 500; foeplaymppunish = 500;

				function unpause(event){
					game.paused = false;
					game.state.start('play');
				}

			}

			this.ggbox = function(winner){
				game.add.image(0,0,'ggbg');
				winnertxt = game.add.text(325, 50, winner + ' WON!', {font: 'Hall Fetica', fontSize: '55px', fill: 'white', wordWrap: true,  wordWrapWidth: 600});
				winnertxt.anchor.setTo(0.5, 0);
				clickgg = game.add.text(325, 420, "Click to continue...", {font: 'Hall Fetica', fontSize: '16px', fill: 'white'});
				clickgg.anchor.setTo(0.5,0.5);

				game.paused = true;
				game.input.onDown.add(unpause, self);

				function unpause(event){
					game.paused = false;
					reinit();
					game.state.start('menu');
				}
			}