let inp1;let multvec=[];
let par0,sl0;let par1,sl1;
let par2,sl2;let par3,sl3;
let rad2;

function start2(){
	
multvec=[20,30,40,50,100];


inp1=createInput("len,dir1,leb2,dir2,amt");inp1.class('bdd');
inp1.position(800,50);
//inp1.changed(chglev1);

par0=createP("first length");par0.position(800,90);
par0.id('p0');par0.class('parbdd');
sl0=createSlider(0,150,50,1);
sl0.parent('p0');sl0.mousePressed(chgmult0);


par1=createP("first angle");par1.position(800,190);
par1.id('p1');par1.class('parbdd');
sl1=createSlider(0,150,50,1);
sl1.parent('p1');sl1.mousePressed(chgmult1);


par2=createP("second length");par2.position(800,280);
par2.id('p2');par2.class('parbdd');
sl2=createSlider(0,150,50,1);sl2
sl2.parent('p2');sl2.mousePressed(chgmult2);

par3=createP("second angle");par3.position(800,370);
par3.id('p3');par3.class('parbdd');
sl3=createSlider(0,150,50,1);
sl3.parent('p3');sl3.mousePressed(chgmult3);

rad2=createRadio ("choose a Rec.Shape");rad2.class('radbdd');
rad2.position(100,110);
rad2.option('Sier',1);
rad2.option('koch',2);
rad2.option('clear',3);
rad2.option('bkgrd',4);
rad2.option('no bkgrd',5);
rad2.mousePressed(chgRec);
}

function chglevl1(){
	let mult=inp1.value
    //for(let j=0;j<5;j++){	
	//multvec[j] =mult.split(',').map(n => floor (n))[j];
	//}
}
 function chgmult0(){
multvec[0]=sl0.value();
 }
 
 function chgmult1(){
	multvec[1]=sl1.value();
 }
 
  function chgmult2(){
	multvec[2]=sl2.value();
 }
 
  function chgmult3(){
	multvec[3]=sl3.value();
 }
  

  


