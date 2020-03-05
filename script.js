var  score = 0;
const result = document.getElementById('result');
const showanswers = document.getElementById('showanswers');
const start = document.getElementById('start-btn');
const restartQuiz = document.getElementById('restartQuiz');
const hide = document.getElementById('hide');
const hideanswers = document.getElementById('hideanswers');
const show = document.getElementById('show');
const restart = document.getElementById('restart');
const progressContainer = document.getElementById('progress-container');
const progressBar =document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const finalControls = document.getElementById('finalControls');
var coupondiv = document.getElementById('coupondiv');
var coupon = document.getElementById('coupon');
var fblink = document.getElementById('fblink');
var instrukcja = document.getElementById('instrukcja');
var coupontag = document.getElementById('coupontag');

start.addEventListener('click', showQ1);

const q1 = document.getElementById('question1');
const q2 = document.getElementById('question2');
const q3 = document.getElementById('question3');
const q4 = document.getElementById('question4');
const q5 = document.getElementById('question5');
const q6 = document.getElementById('question6');
const q7 = document.getElementById('question7');
const q8 = document.getElementById('question8');
const q9 = document.getElementById('question9');
const q10 = document.getElementById('question10');
const q11 = document.getElementById('question11');
const q12 = document.getElementById('question12');
const q13 = document.getElementById('question13');
const q14 = document.getElementById('question14');
const q15 = document.getElementById('question15');
const q16 = document.getElementById('question16');

const ans1 = document.getElementById('answers1');
const ans2 = document.getElementById('answers2');
const ans3 = document.getElementById('answers3');
const ans4 = document.getElementById('answers4');
const ans5 = document.getElementById('answers5');
const ans6 = document.getElementById('answers6');
const ans7 = document.getElementById('answers7');
const ans8 = document.getElementById('answers8');
const ans9 = document.getElementById('answers9');
const ans10 = document.getElementById('answers10');
const ans11 = document.getElementById('answers11');
const ans12 = document.getElementById('answers12');
const ans13 = document.getElementById('answers13');
const ans14 = document.getElementById('answers14');
const ans15 = document.getElementById('answers15');
const ans16 = document.getElementById('answers16');

const btn1 = document.getElementById('next1-btn');
const btn2 = document.getElementById('next2-btn');
const btn3 = document.getElementById('next3-btn');
const btn4 = document.getElementById('next4-btn');
const btn5 = document.getElementById('next5-btn');
const btn6 = document.getElementById('next6-btn');
const btn7 = document.getElementById('next7-btn');
const btn8 = document.getElementById('next8-btn');
const btn9 = document.getElementById('next9-btn');
const btn10 = document.getElementById('next10-btn');
const btn11 = document.getElementById('next11-btn');
const btn12 = document.getElementById('next12-btn');
const btn13 = document.getElementById('next13-btn');
const btn14 = document.getElementById('next14-btn');
const btn15 = document.getElementById('next15-btn');
const btn16 = document.getElementById('next16-btn');

btn1.addEventListener('click', showQ2);
btn2.addEventListener('click', showQ3);
btn3.addEventListener('click', showQ4);
btn4.addEventListener('click', showQ5);
btn5.addEventListener('click', showQ6);
btn6.addEventListener('click', showQ7);
btn7.addEventListener('click', showQ8);
btn8.addEventListener('click', showQ9);
btn9.addEventListener('click', showQ10);
btn10.addEventListener('click', showQ11);
btn11.addEventListener('click', showQ12);
btn12.addEventListener('click', showQ13);
btn13.addEventListener('click', showQ14);
btn14.addEventListener('click', showQ15);
btn15.addEventListener('click', showQ16);
btn16.addEventListener('click', showResult);

const btndiv1 = document.getElementById('btndiv1');
const btndiv2 = document.getElementById('btndiv2');
const btndiv3 = document.getElementById('btndiv3');
const btndiv4 = document.getElementById('btndiv4');
const btndiv5 = document.getElementById('btndiv5');
const btndiv6 = document.getElementById('btndiv6');
const btndiv7 = document.getElementById('btndiv7');
const btndiv8 = document.getElementById('btndiv8');
const btndiv9 = document.getElementById('btndiv9');
const btndiv10 = document.getElementById('btndiv10');
const btndiv11 = document.getElementById('btndiv11');
const btndiv12 = document.getElementById('btndiv12');
const btndiv13 = document.getElementById('btndiv13');
const btndiv14 = document.getElementById('btndiv14');
const btndiv15 = document.getElementById('btndiv15');
const btndiv16 = document.getElementById('btndiv16');

const c1 = document.getElementById('1b');
const c2 = document.getElementById('2c');
const c3 = document.getElementById('3c');
const c4 = document.getElementById('4b');
const c5 = document.getElementById('5a');
const c6 = document.getElementById('6b');
const c7 = document.getElementById('7a');
const c8 = document.getElementById('8b');
const c9 = document.getElementById('9c');
const c10 = document.getElementById('10a');
const c11 = document.getElementById('11a');
const c12 = document.getElementById('12c');
const c13 = document.getElementById('13c');
const c14 = document.getElementById('14b');
const c15 = document.getElementById('15a');
const c16 = document.getElementById('16a');

const q1a = document.getElementById('1a');
const q1c = document.getElementById('1c');
const q2a = document.getElementById('2a');
const q2b = document.getElementById('2b');
const q3a = document.getElementById('3a');
const q3b = document.getElementById('3b');
const q4a = document.getElementById('4a');
const q4c = document.getElementById('4c');
const q5b = document.getElementById('5b');
const q5c = document.getElementById('5c');
const q6a = document.getElementById('6a');
const q6c = document.getElementById('6c');
const q7b = document.getElementById('7b');
const q7c = document.getElementById('7c');
const q8a = document.getElementById('8a');
const q8c = document.getElementById('8c');
const q9a = document.getElementById('9a');
const q9b = document.getElementById('9b');
const q10b = document.getElementById('10b');
const q10c = document.getElementById('10c');
const q11b = document.getElementById('11b');
const q11c = document.getElementById('11c');
const q12a = document.getElementById('12a');
const q12b = document.getElementById('12b');
const q13a = document.getElementById('13a');
const q13b = document.getElementById('13b');
const q14a = document.getElementById('14a');
const q14c = document.getElementById('14c');
const q15b = document.getElementById('15b');
const q15c = document.getElementById('15c');
const q16b = document.getElementById('16b');
const q16c = document.getElementById('16c');

const l1a = document.getElementById('l1a');
const l1c = document.getElementById('l1c');
const l2a = document.getElementById('l2a');
const l2b = document.getElementById('l2b');
const l3a = document.getElementById('l3a');
const l3b = document.getElementById('l3b');
const l4a = document.getElementById('l4a');
const l4c = document.getElementById('l4c');
const l5b = document.getElementById('l5b');
const l5c = document.getElementById('l5c');
const l6a = document.getElementById('l6a');
const l6c = document.getElementById('l6c');
const l7b = document.getElementById('l7b');
const l7c = document.getElementById('l7c');
const l8a = document.getElementById('l8a');
const l8c = document.getElementById('l8c');
const l9a = document.getElementById('l9a');
const l9b = document.getElementById('l9b');
const l10b = document.getElementById('l10b');
const l10c = document.getElementById('l10c');
const l11b = document.getElementById('l11b');
const l11c = document.getElementById('l11c');
const l12a = document.getElementById('l12a');
const l12b = document.getElementById('l12b');
const l13a = document.getElementById('l13a');
const l13b = document.getElementById('l13b');
const l14a = document.getElementById('l14a');
const l14c = document.getElementById('l14c');
const l15b = document.getElementById('l15b');
const l15c = document.getElementById('l15c');
const l16b = document.getElementById('l16b');
const l16c = document.getElementById('l16c');

const fb0 = document.getElementById('fb0');
const fb1 = document.getElementById('fb1');
const fb2 = document.getElementById('fb2');
const fb3 = document.getElementById('fb3');
const fb4 = document.getElementById('fb4');
const fb5 = document.getElementById('fb5');
const fb6 = document.getElementById('fb6');
const fb7 = document.getElementById('fb7');
const fb8 = document.getElementById('fb8');
const fb9 = document.getElementById('fb9');
const fb10 = document.getElementById('fb10');
const fb11 = document.getElementById('fb11');
const fb12 = document.getElementById('fb12');
const fb13 = document.getElementById('fb13');
const fb14 = document.getElementById('fb14');
const fb15 = document.getElementById('fb15');
const fb16 = document.getElementById('fb16');

function enableb1() {
	btn1.removeAttribute('disabled');
}

function enableb2(){
	btn2.removeAttribute('disabled');	
}

function enableb3(){
	btn3.removeAttribute('disabled');	
}

function enableb4(){
	btn4.removeAttribute('disabled');
}

function enableb5(){
	btn5.removeAttribute('disabled');	
}

function enableb6(){
	btn6.removeAttribute('disabled');	
}

function enableb7(){
	btn7.removeAttribute('disabled');	
}

function enableb8(){
	btn8.removeAttribute('disabled');	
}

function enableb9(){
	btn9.removeAttribute('disabled');	
}

function enableb10(){
	btn10.removeAttribute('disabled');	
}

function enableb11(){
	btn11.removeAttribute('disabled');	
}

function enableb12(){
	btn12.removeAttribute('disabled');	
}

function enableb13(){
	btn13.removeAttribute('disabled');	
}

function enableb14(){
	btn14.removeAttribute('disabled');	
}

function enableb15(){
	btn15.removeAttribute('disabled');
}

function enableb16(){
	btn16.removeAttribute('disabled');	
}

function showQ1() {	
	start.style.display = 'none';
	ans1.style.display = 'inline-block';
	q1.style.display = 'inline-block';
	btn1.style.display ='inline-block';
	btndiv1.style.display='inline-block';
	progressBar.style.display='inline-block';
	progressContainer.style.display='inline-block';
}

function showQ2() {	
	ans1.style.display = 'none';
	q1.style.display = 'none';
	btn1.style.display ='none';
	btndiv1.style.display='none';
	ans2.style.display = 'inline-block';
	q2.style.display = 'inline-block';
	btn2.style.display ='inline-block';
	btndiv2.style.display='inline-block';
	progress.style.width='50px';
}

function showQ3() {	
	ans2.style.display = 'none';
	q2.style.display = 'none';
	btn2.style.display ='none';
	btndiv2.style.display='none';
	ans3.style.display = 'inline-block';
	q3.style.display = 'inline-block';
	btn3.style.display ='inline-block';
	btndiv3.style.display='inline-block';
	progress.style.width='100px';
}

function showQ4() {	
	ans3.style.display = 'none';
	q3.style.display = 'none';
	btn3.style.display ='none';
	btndiv3.style.display='none';
	ans4.style.display = 'inline-block';
	q4.style.display = 'inline-block';
	btn4.style.display ='inline-block';
	btndiv4.style.display='inline-block';
	progress.style.width='150px';
}

function showQ5() {	
	ans4.style.display = 'none';
	q4.style.display = 'none';
	btn4.style.display ='none';
	btndiv4.style.display='none';
	ans5.style.display = 'inline-block';
	q5.style.display = 'inline-block';
	btn5.style.display ='inline-block';
	btndiv5.style.display='inline-block';
	progress.style.width='200px';
}

function showQ6() {	
	ans5.style.display = 'none';
	q5.style.display = 'none';
	btn5.style.display ='none';
	btndiv5.style.display='none';
	ans6.style.display = 'inline-block';
	q6.style.display = 'inline-block';
	btn6.style.display ='inline-block';
	btndiv6.style.display='inline-block';
	progress.style.width='250px';
}

function showQ7() {	
	ans6.style.display = 'none';
	q6.style.display = 'none';
	btn6.style.display ='none';
	btndiv6.style.display='none';
	ans7.style.display = 'inline-block';
	q7.style.display = 'inline-block';
	btn7.style.display ='inline-block';
	btndiv7.style.display='inline-block';
	progress.style.width='300px';
}

function showQ8() {	
	ans7.style.display = 'none';
	q7.style.display = 'none';
	btn7.style.display ='none';
	btndiv7.style.display='none';
	ans8.style.display = 'inline-block';
	q8.style.display = 'inline-block';
	btn8.style.display ='inline-block';
	btndiv8.style.display='inline-block';
	progress.style.width='350px';
}

function showQ9() {	
	ans8.style.display = 'none';
	q8.style.display = 'none';
	btn8.style.display ='none';
	btndiv8.style.display='none';
	ans9.style.display = 'inline-block';
	q9.style.display = 'inline-block';
	btn9.style.display ='inline-block';
	btndiv9.style.display='inline-block';
	progress.style.width='400px';
}

function showQ10() {	
	ans9.style.display = 'none';
	q9.style.display = 'none';
	btn9.style.display ='none';
	btndiv9.style.display='none';
	ans10.style.display = 'inline-block';
	q10.style.display = 'inline-block';
	btn10.style.display ='inline-block';
	btndiv10.style.display='inline-block';
	progress.style.width='450px';
}

function showQ11() {	
	ans10.style.display = 'none';
	q10.style.display = 'none';
	btn10.style.display ='none';
	btndiv10.style.display='none';
	ans11.style.display = 'inline-block';
	q11.style.display = 'inline-block';
	btn11.style.display ='inline-block';
	btndiv11.style.display='inline-block';
	progress.style.width='500px';
}

function showQ12() {	
	ans11.style.display = 'none';
	q11.style.display = 'none';
	btn11.style.display ='none';
	btndiv11.style.display='none';
	ans12.style.display = 'inline-block';
	q12.style.display = 'inline-block';
	btn12.style.display ='inline-block';
	btndiv12.style.display='inline-block';
	progress.style.width='550px';
}

function showQ13() {	
	ans12.style.display = 'none';
	q12.style.display = 'none';
	btn12.style.display ='none';
	btndiv12.style.display='none';
	ans13.style.display = 'inline-block';
	q13.style.display = 'inline-block';
	btn13.style.display ='inline-block';
	btndiv13.style.display='inline-block';
	progress.style.width='600px';
}

function showQ14() {	
	ans13.style.display = 'none';
	q13.style.display = 'none';
	btn13.style.display ='none';
	btndiv13.style.display='none';
	ans14.style.display = 'inline-block';
	q14.style.display = 'inline-block';
	btn14.style.display ='inline-block';
	btndiv14.style.display='inline-block';
	progress.style.width='650px';
}

function showQ15() {	
	ans14.style.display = 'none';
	q14.style.display = 'none';
	btn14.style.display ='none';
	btndiv14.style.display='none';
	ans15.style.display = 'inline-block';
	q15.style.display = 'inline-block';
	btn15.style.display ='inline-block';
	btndiv15.style.display='inline-block';
	progress.style.width='700px';
}

function showQ16() {	
	ans15.style.display = 'none';
	q15.style.display = 'none';
	btn15.style.display ='none';
	btndiv15.style.display='none';
	ans16.style.display = 'inline-block';
	q16.style.display = 'inline-block';
	btn16.style.display ='inline-block';
	btndiv16.style.display='inline-block';
	progress.style.width='750px';
	
}

function showResult() {
	ans16.style.display = 'none';
	q16.style.display = 'none';
	btn16.style.display ='none';
	btndiv16.style.display='none';
	result.style.display='inline-block';
	showanswers.style.display='inline-block';
	restartQuiz.style.display='inline-block';
	restart.style.display='inline-block';
	show.style.display='inline-block';
	finalControls.style.display='inline-block';
	progress.style.width='800px';
	
	if(c1.checked) {
		score = score + 1;
	}
	
	if(c2.checked) {
		score = score + 1;
	}

	if(c3.checked) {
		score = score + 1;
	}

	if(c4.checked) {
		score = score + 1;
	}

	if(c5.checked) {
		score = score + 1;
	}

	if(c6.checked) {
		score = score + 1;
	}

	if(c7.checked) {
		score = score + 1;
	}

	if(c8.checked) {
		score = score + 1;
	}

	if(c9.checked) {
		score = score + 1;
	}

	if(c10.checked) {
		score = score + 1;
	}

	if(c11.checked) {
		score = score + 1;
	}

	if(c12.checked) {
		score = score + 1;
	}

	if(c13.checked) {
		score = score + 1;
	}

	if(c14.checked) {
		score = score + 1;
	}

	if(c15.checked) {
		score = score + 1;
	}

	if(c16.checked) {
		score = score + 1;
	}

	result.innerHTML = 'Twój wynik: ' + score +'/16 pkt';
	
	show.addEventListener('click', showallanswers);
	
	function showcoupon() {
				
			instrukcja.innerHTML = "Polub nasz fanpage, udostępnij wynik i quiz na swoim profilu na facebooku i odbierz swój rabat.<br /> <br /> Kliknij na kupon, aby udostępnić na Facebooku i odebrać rabat."
			fblink.style.display='inline-block';
		
			if(score == 0) {
				coupon.src = "coupons/0pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/0pkt.png");
				
			}
			if(score == 1) {
				coupon.src = "coupons/1pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/1pkt.png");
			}
			if(score == 2) {
				coupon.src = "coupons/2pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/2pkt.png");
			}
			if(score == 3) {
				coupon.src = "<coupons/3pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/3pkt.png");
			}
			if(score == 4) {
				coupon.src = "coupons/4pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/4pkt.png");
			}
			if(score == 5) {
				coupon.src = "coupons/5pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/5pkt.png");
			}
			if(score == 6) {
				coupon.src = "coupons/6pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/6pkt.png");
			}
			if(score == 7) {
				coupon.src = "coupons/7pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/7pkt.png");
			}
			if(score == 8) {
				coupon.src = "coupons/8pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/8pkt.png");
			}
			if(score == 9) {
				coupon.src = "coupons/9pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/9pkt.png");
			}
			if(score == 10) {
				coupon.src = "coupons/10pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/10pkt.png");
			}
			if(score == 11) {
				coupon.src = "coupons/11pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/11pkt.png");
			}
			if(score == 12) {
				coupon.src = "coupons/12pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/12pkt.png");
			}
			if(score  == 13) {
				coupon.src = "coupons/13pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/13pkt.png");
			}
			if(score == 14) {
				coupon.src = "coupons/14pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/14pkt.png");
			}
			if(score == 15) {
				coupon.src = "coupons/15pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/15pkt.png");
			}
			if(score == 16) {
				coupon.src = "coupons/16pkt.png";
				coupondiv.style.display = 'inline-block';
				coupontag.setAttribute("content", "https://euromet.github.io/quiz/coupons/16pkt.png");
			}
			
		}
	showcoupon();
}

	
function showallanswers() {
	
	
	var labels = document.getElementsByClassName('correct');
	for(var i = 0; i < labels.length; i++)
	{
		labels[i].style.backgroundColor = 'green';
	}
	show.style.display = 'none';
	showanswers.style.display = 'none';
	hide.style.display = 'inline-block';
	hideanswers.style.display = 'inline-block';
	
	ans1.style.display = 'inline-block';
	q1.style.display = 'inline-block';
	
	ans2.style.display = 'inline-block';
	q2.style.display = 'inline-block';
	
	ans3.style.display = 'inline-block';
	q3.style.display = 'inline-block';
	
	ans4.style.display = 'inline-block';
	q4.style.display = 'inline-block';
	
	ans5.style.display = 'inline-block';
	q5.style.display = 'inline-block';

	ans6.style.display = 'inline-block';
	q6.style.display = 'inline-block';
	
	ans7.style.display = 'inline-block';
	q7.style.display = 'inline-block';

	ans8.style.display = 'inline-block';
	q8.style.display = 'inline-block';
	
	ans9.style.display = 'inline-block';
	q9.style.display = 'inline-block';
	
	ans10.style.display = 'inline-block';
	q10.style.display = 'inline-block';
	
	ans11.style.display = 'inline-block';
	q11.style.display = 'inline-block';
	
	ans12.style.display = 'inline-block';
	q12.style.display = 'inline-block';
	
	ans13.style.display = 'inline-block';
	q13.style.display = 'inline-block';
	
	ans14.style.display = 'inline-block';
	q14.style.display = 'inline-block';
	
	
	ans15.style.display = 'inline-block';
	q15.style.display = 'inline-block';
	
	
	ans16.style.display = 'inline-block';
	q16.style.display = 'inline-block';
	
	if (q1a.checked) {
		l1a.style.backgroundColor = '#e81e2c';
	}
	
	if (q1c.checked) {
		l1c.style.backgroundColor = '#e81e2c';
	}
	
	if (q2a.checked) {
		l2a.style.backgroundColor = '#e81e2c';
	}
	
	if (q2b.checked) {
		l2b.style.backgroundColor = '#e81e2c';
	}
	
	if (q3a.checked) {
		l3a.style.backgroundColor = '#e81e2c';
	}
	
	if (q3b.checked) {
		l3b.style.backgroundColor = '#e81e2c';
	}
	
	if (q4a.checked) {
		l4a.style.backgroundColor = '#e81e2c';
	}
	
	if (q4c.checked) {
		l4c.style.backgroundColor = '#e81e2c';
	}
	
	if (q5b.checked) {
		l5b.style.backgroundColor = '#e81e2c';
	}
	
	if (q5c.checked) {
		l5c.style.backgroundColor = '#e81e2c';
	}
	
	if (q6a.checked) {
		l6a.style.backgroundColor = '#e81e2c';
	}
	
	if (q6c.checked) {
		l6c.style.backgroundColor = '#e81e2c';
	}
	
	if (q7b.checked) {
		l7b.style.backgroundColor = '#e81e2c';
	}
	
	if (q7c.checked) {
		l7c.style.backgroundColor = '#e81e2c';
	}
	
	if (q8a.checked) {
		l8a.style.backgroundColor = '#e81e2c';
	}
	
	if (q8c.checked) {
		l8c.style.backgroundColor = '#e81e2c';
	}
	
	if (q9a.checked) {
		l9a.style.backgroundColor = '#e81e2c';
	}
	
	if (q9b.checked) {
		l9b.style.backgroundColor = '#e81e2c';
	}
	
	if (q10b.checked) {
		l10b.style.backgroundColor = '#e81e2c';
	}
	
	if (q10c.checked) {
		l10c.style.backgroundColor = '#e81e2c';
	}
	
	if (q11b.checked) {
		l11b.style.backgroundColor = '#e81e2c';
	}
	
	if (q11c.checked) {
		l11c.style.backgroundColor = '#e81e2c';
	}
	
	if (q12a.checked) {
		l12a.style.backgroundColor = '#e81e2c';
	}

	if (q12b.checked) {
		l12b.style.backgroundColor = '#e81e2c';
	}
	
	if (q13a.checked) {
		l13a.style.backgroundColor = '#e81e2c';
	}
	
	if (q13b.checked) {
		l13b.style.backgroundColor = '#e81e2c';
	}
	
	if (q14a.checked) {
		l14a.style.backgroundColor = '#e81e2c';
	}
	
	if (q14c.checked) {
		l14c.style.backgroundColor = '#e81e2c';
	}
	
	if (q15b.checked) {
		l15b.style.backgroundColor = '#e81e2c';
	}
	
	if (q15c.checked) {
		l15c.style.backgroundColor = '#e81e2c';
	}
	
	if (q16b.checked) {
		l16b.style.backgroundColor = '#e81e2c';
	}
	
	if (q16c.checked) {
		l16c.style.backgroundColor = '#e81e2c';
	}
	
	hide.addEventListener('click', hideallanswers);
}

function hideallanswers() {
	show.style.display = 'inline-block';
	showanswers.style.display = 'inline-block';
	hide.style.display = 'none';
	hideanswers.style.display = 'none';
	
	ans1.style.display = 'none';
	q1.style.display = 'none';
	
	ans2.style.display = 'none';
	q2.style.display = 'none';
	
	ans3.style.display = 'none';
	q3.style.display = 'none';
	
	ans4.style.display = 'none';
	q4.style.display = 'none';
	
	ans5.style.display = 'none';
	q5.style.display = 'none';

	ans6.style.display = 'none';
	q6.style.display = 'none';
	
	ans7.style.display = 'none';
	q7.style.display = 'none';

	ans8.style.display = 'none';
	q8.style.display = 'none';
	
	ans9.style.display = 'none';
	q9.style.display = 'none';
	
	ans10.style.display = 'none';
	q10.style.display = 'none';
	
	ans11.style.display = 'none';
	q11.style.display = 'none';
	
	ans12.style.display = 'none';
	q12.style.display = 'none';
	
	ans13.style.display = 'none';
	q13.style.display = 'none';
	
	ans14.style.display = 'none';
	q14.style.display = 'none';
	
	
	ans15.style.display = 'none';
	q15.style.display = 'none';
	
	
	ans16.style.display = 'none';
	q16.style.display = 'none';
	
	show.addEventListener('click', showallanswers);
}