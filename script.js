// СЧЕТЧИК
var counter = 0; 
// КОЛЛИЧЕСТВО ХОДОВ
var time = 0; 
// ПЕРЕМЕННЫЕ СОДЕРЖАНИЯ КЛЕТОК
var a1 = ''; 
var a2 = '';
var a3 = '';
var a4 = '';
var a5 = '';
var a6 = '';
var a7 = '';
var a8 = '';
var a9 = '';
// ПЕРЕМЕННАЯ ВЫБОРА СТОРОНЫ
var choice = '';
// ПЕРЕМЕННАЯ УРОВНЯ СЛОЖНОСТИ
var difficult = 'hard';

// НАЧАЛО ИГРЫ (ОБЩЕЕ)
function start(){
	counter = 0;
	time = 0;
	a1 = '';
	a2 = '';
	a3 = '';
	a4 = '';
	a5 = '';
	a6 = '';
	a7 = '';
	a8 = '';
	a9 = '';
	document.getElementById('bg').style.visibility = 'visible';
	document.getElementById('screen').style.visibility = 'hidden';
	document.getElementById('c1').src = "images/empty.png";
	document.getElementById('c2').src = "images/empty.png";
	document.getElementById('c3').src = "images/empty.png";
	document.getElementById('c4').src = "images/empty.png";
	document.getElementById('c5').src = "images/empty.png";
	document.getElementById('c6').src = "images/empty.png";
	document.getElementById('c7').src = "images/empty.png";
	document.getElementById('c8').src = "images/empty.png";
	document.getElementById('c9').src = "images/empty.png";
}

// НАЧАЛО ИГРЫ ЗА Х
function startX() {
	start();
	choice = 'x';
	console.log ('start a new game for X');
}

// НАЧАЛО ИГРЫ ЗА О
function startO() {
	start();
	choice = 'o';
	console.log ('start a new game for O');
	AI();
}

// УРОВЕНЬ СЛОЖНОСТИ 
function rbutClick(id) {

	if (id=='rbE') {difficult='easy'; console.log('easy level has been chosen');}
		
	if (id=='rbH') {difficult='hard'; console.log('hard level has been chosen');}
		
}

// ФУНКЦИЯ НАЖАТИЯ НА КЛЕТКУ
function cellClick(id, acess) {
	if (time<9 && acess=='') {
		if (counter%2==0) {
			document.getElementById(id).src = "images/cross.png";
			if (id=='c1') {a1='x';}
			if (id=='c2') {a2='x';}
			if (id=='c3') {a3='x';}
			if (id=='c4') {a4='x';}
			if (id=='c5') {a5='x';}
			if (id=='c6') {a6='x';}
			if (id=='c7') {a7='x';}
			if (id=='c8') {a8='x';}
			if (id=='c9') {a9='x';}	
		}
		else {
			document.getElementById(id).src = "images/zero.png";
			if (id=='c1') {a1='o';}
			if (id=='c2') {a2='o';}
			if (id=='c3') {a3='o';}
			if (id=='c4') {a4='o';}
			if (id=='c5') {a5='o';}
			if (id=='c6') {a6='o';}
			if (id=='c7') {a7='o';}
			if (id=='c8') {a8='o';}
			if (id=='c9') {a9='o';}	
		}
		counter++;
		//console.log('counter:', counter);
		time++;
		//console.log('time:', time);
		win();
		AI();
	}
}

// фУНКЦИЯ ПРОВЕРКИ ПОБЕДЫ И ПОРАЖЕНИЯ
function win() {
	if (time==9) {
		document.getElementById('screen').style.backgroundColor = 'grey';
		document.getElementById('screen').style.visibility = 'visible';
		document.getElementById('screen').innerHTML = "No one won";
		console.log('no one won.');
	}
	if ((a1=='x' && a2=='x' && a3=='x') || (a4=='x' && a5=='x' && a6=='x') || (a7=='x' && a8=='x' && a9=='x') ||
		(a1=='x' && a4=='x' && a7=='x') || (a2=='x' && a5=='x' && a8=='x') || (a3=='x' && a6=='x' && a9=='x') || 
		(a1=='x' && a5=='x' && a9=='x') || (a3=='x' && a5=='x' && a7=='x')) {
		if (choice=='x') {document.getElementById('screen').style.backgroundColor = 'green';}
		else {document.getElementById('screen').style.backgroundColor = 'red';}
		document.getElementById('screen').style.visibility = 'visible';
		document.getElementById('screen').innerHTML = "'X' Won!";
		console.log('X won!');
		time=9;
	}
	if ((a1=='o' && a2=='o' && a3=='o') || (a4=='o' && a5=='o' && a6=='o') || (a7=='o' && a8=='o' && a9=='o') ||
		(a1=='o' && a4=='o' && a7=='o') || (a2=='o' && a5=='o' && a8=='o') || (a3=='o' && a6=='o' && a9=='o') || 
		(a1=='o' && a5=='o' && a9=='o') || (a3=='o' && a5=='o' && a7=='o')) {
		if (choice=='o') {document.getElementById('screen').style.backgroundColor = 'green';}
		else {document.getElementById('screen').style.backgroundColor = 'red';}
		document.getElementById('screen').style.visibility = 'visible';
		document.getElementById('screen').innerHTML = "'O' Won!";
		console.log('O won!');
		time=9;
	}
}

// фУНКЦИЯ ОТВЕЧАЮЩАЯ ЗА РАБОТУ ИИ
function AI() {
	if (((time%2==0) && (choice=='o') && (time<9) ) || ((time%2!=0) && (choice=='x') && (time<8))) {
		checkCenter()
		check ('o','x');
		check ('x','o');
		check ('o','o');
		check ('x','x');
		checkAfter('x','x');
		checkAfter('o','o');
		if (((time%2==0) && (choice=='o') && (time<9) ) || ((time%2!=0) && (choice=='x') && (time<8))) {
			var ran = Math.ceil(Math.random() * (9));
			console.log('random:',ran);
			if (ran==1 && a1=='') {cellClick('c1',a1)}
			else if (ran==2 && a2=='') {cellClick('c2',a2)}
			else if (ran==3 && a3=='') {cellClick('c3',a3)}
			else if (ran==4 && a4=='') {cellClick('c4',a4)}
			else if (ran==5 && a5=='') {cellClick('c5',a5)}
			else if (ran==6 && a6=='') {cellClick('c6',a6)}
			else if (ran==7 && a7=='') {cellClick('c7',a7)}
			else if (ran==8 && a8=='') {cellClick('c8',a8)}
			else if (ran==9 && a9=='') {cellClick('c9',a9)}
			else {AI();}
		}
	}
}

// ПРОВЕРКА ИИ НА ПОБЕДУ И ПОРАЖЕНИЕ ИИ
function check(y1, y2){
	if (difficult=='hard') {
		if (((time%2==0) && (choice=='o') && (time<9) ) || ((time%2!=0) && (choice=='x') && (time<8))) {
			if ((choice==y1) && (a1=='' || a2=='' || a3=='') && ((a1==y2 && a2==y2) || (a1==y2 && a3==y2) || (a2==y2 && a3==y2))) {
				if (a1=='') {cellClick('c1',a1)}
				else if (a2=='') {cellClick('c2',a2)}
				else if (a3=='') {cellClick('c3',a3)}
			}
			else if ((choice==y1) && (a4=='' || a5=='' || a6=='') && ((a4==y2 && a5==y2) || (a4==y2 && a6==y2) || (a5==y2 && a6==y2))) {
				if (a4=='') {cellClick('c4',a4)}
				else if (a5=='') {cellClick('c5',a5)}
				else if (a6=='') {cellClick('c6',a6)}
			}
			else if ((choice==y1) && (a7=='' || a8=='' || a9=='') && ((a7==y2 && a8==y2) || (a7==y2 && a9==y2) || (a8==y2 && a9==y2))) {
				if (a7=='') {cellClick('c7',a7)}
				else if (a8=='') {cellClick('c8',a8)}
				else if (a9=='') {cellClick('c9',a9)}
			}
			else if ((choice==y1) && (a1=='' || a4=='' || a7=='') && ((a1==y2 && a4==y2) || (a1==y2 && a7==y2) || (a4==y2 && a7==y2))) {
				if (a1=='') {cellClick('c1',a1)}
				else if (a4=='') {cellClick('c4',a4)}
				else if (a7=='') {cellClick('c7',a7)}
			}
			else if ((choice==y1) && (a2=='' || a5=='' || a8=='') && ((a2==y2 && a5==y2) || (a2==y2 && a8==y2) || (a5==y2 && a8==y2))) {
				if (a2=='') {cellClick('c2',a2)}
				else if (a5=='') {cellClick('c5',a5)}
				else if (a8=='') {cellClick('c8',a8)}
			}
			else if ((choice==y1) && (a3=='' || a6=='' || a9=='') && ((a3==y2 && a6==y2) || (a3==y2 && a9==y2) || (a6==y2 && a9==y2))) {
				if (a3=='') {cellClick('c3',a3)}
				else if (a6=='') {cellClick('c6',a6)}
				else if (a9=='') {cellClick('c9',a9)}
			}
			else if ((choice==y1) && (a1=='' || a5=='' || a9=='') && ((a1==y2 && a5==y2) || (a1==y2 && a9==y2) || (a5==y2 && a9==y2))) {
				if (a1=='') {cellClick('c1',a1)}
				else if (a5=='') {cellClick('c5',a5)}
				else if (a9=='') {cellClick('c9',a9)}
			}
			else if ((choice==y1) && (a3=='' || a5=='' || a7=='') && ((a3==y2 && a5==y2) || (a3==y2 && a7==y2) || (a5==y2 && a7==y2))) {
				if (a3=='') {cellClick('c3',a3)}
				else if (a5=='') {cellClick('c5',a5)}
				else if (a7=='') {cellClick('c7',a7)}
			}
		}
	}
}

// ПРОЧИЕ ПРОВЕРКИ ИИ
function checkAfter(y1, y2) {
	if (difficult=='hard') {
		if (((time%2==0) && (choice=='o') && (time<9) ) || ((time%2!=0) && (choice=='x') && (time<8))) {
			if ((choice==y1) && (a5==y1)) {
				if (a1=='') {cellClick('c1',a1)}
				else if (a3=='') {cellClick('c3',a3)}
				else if (a7=='') {cellClick('c7',a7)}
				else if (a9=='') {cellClick('c9',a9)}
			}
			else if ((choice==y1) && (a2==y1 && a4==y1)) {
				if (a1=='') {cellClick('c1',a1)}
			} 
			else if ((choice==y1) && (a2==y1 && a6==y1)) {
				if (a3=='') {cellClick('c3',a3)}
			} 
			else if ((choice==y1) && (a6==y1 && a8==y1)) {
				if (a9=='') {cellClick('c9',a9)}
			} 
			else if ((choice==y1) && (a8==y1 && a4==y1)) {
				if (a7=='') {cellClick('c7',a7)}
			}
			else if ((choice==y1) && (a1==y1 && a9==y1)) {
				if (a2=='') {cellClick('c2',a2)}
				else if (a4=='') {cellClick('c4',a4)}
				else if (a6=='') {cellClick('c6',a6)}
				else if (a8=='') {cellClick('c8',a8)}
			}	 	
			else if ((choice==y1) && (a3==y1 && a7==y1)) {
				if (a8=='') {cellClick('c8',a8)}
				else if (a6=='') {cellClick('c6',a6)}
				else if (a4=='') {cellClick('c4',a4)}
				else if (a2=='') {cellClick('c2',a2)}
			}
		}			
	}
}
function checkCenter() {
	if (difficult=='hard') {
		if (a5=='') {cellClick('c5',a5)}
	}
}

