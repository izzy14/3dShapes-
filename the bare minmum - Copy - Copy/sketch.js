let can;let tv;let tChoice;

function setup(){
	can=createCanvas(600,400);
	can.position(100,100);can.class("bdd");
	start2();
	tv=new logo (200,200,0);
	tChoice=new logo (200,200,0);
	textSize(20);
	
}
function draw(){
	background(202,220,100);
    chgRec();
	tv.set1(450,150,0);
	duoPoly (tv,multvec [0],multvec [1],multvec [2],multvec [3],multvec [4]);
	text("1st length "+multvec[0],10,400);
	text("2ch angle "+multvec[2],150,400);
	text("1st length "+multvec[1],300,400);
	text("2ch angle "+multvec[3],450,400);
}


	function koch(t,len,level){
	if(level==1) {t.fd(len);}
	else{
koch(t,len/2,level-1);t.lt(60);	
koch(t,len/2,level-1);t.lt(120);	
koch(t,len/2,level-1);t.lt(60);	
koch(t,len/2,level-1);
	}
	}
	
	
function StriA(t,len,level){
	if(level==0){}
	else{
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	t.fd(len);StriA(t,len/2,level-1);t.rt(120);
	}
}

function chgRec (){
	let choice=rad2.value ();
	if(choice){
	switch (choice){
		case '1':tChoice.set1(200,300,-60);
		StriA(tChoice,150,5);break;
		case '2':tChoice.set1(10,450,0);
		koch(tChoice,100,6);break;
		case '3':break;
		case '4':background(200,200,100);break;
		case '5':clear();break;
	}}
}

function duoPoly(t,len1,dir1,len2,dir2,total)
{
let amt=1;
do{
    t.vec(amt*dir1,len1);
    t.vec(amt*dir2,len2);
    amt+=1;

    }while(amt<total);
}