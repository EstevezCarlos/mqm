const $ = x => document.querySelectorAll(x);
const $$ = document.body;
const counter = document.createElement('footer')
window.onload = () => {

	


	$$.innerHTML = $$.innerHTML.replace(new RegExp(	"<span class=\"cm-string\">'''"	,'g'),'<input data-ok="');
	$$.innerHTML = $$.innerHTML.replace(new RegExp(	"'''</span>"					,'g'),'">');
	$$.appendChild(counter)
	
	
	for ( const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li') ) {
		if (el.firstChild instanceof HTMLQuoteElement)	{ el.addEventListener('mousedown',green); }
		else											{ el.addEventListener('mousedown',red);   }
		
	}
	
	for ( const el of $('pre input, pre * input') ) {
		el.addEventListener('input',check);
	}

	
	for ( const el of $('input, ol>li>ol, ol>li>ul, ul>li>ol, ul>li>ul') ) {
		el.setAttribute('tabindex', '1');
		el.addEventListener('keydown',klik)
	}
}

function green()	{ this.classList.toggle('green');	}
function red()		{ this.classList.toggle('red');  	}
function check() {
	let v = this.value
	let k = this.dataset.ok
	if 		(v == '')	{	this.classList.remove('red');		this.classList.remove('green');		}
	else if (v == k )	{	this.classList.remove('red');		this.classList.add('green');		}
	else 				{	this.classList.add('red');			this.classList.remove('green');		}
}
function klik() {
	let dic = {
		'1':0, 'a':0,
		'2':1, 'b':1,
		'3':2, 'c':2,
		'4':3, 'd':3,
		'5':4, 'e':4,
		'6':5, 'f':5
	}
	let el = $(':focus > li')[dic[event.key]];
	if (el.firstChild instanceof HTMLQuoteElement)	{ el.classList.toggle('green');	 }
	else											{ el.classList.toggle('red');    };
}
function count() {
	counter.innerHTML = $('.green') - $('.red')
}
	// let focusable = $('pre input, pre * input, ol>li>ol, ol>li>ul, ul>li>ol, ul>li>ul');
	// for (var i = 0, len = focusable.length; i < len; i++){
	// 	focusable[i].setAttribute('tabindex', '0');
	// }


	
	// for (const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li, code, tt, var, kbd, pre') ) {
	// 	el.addEventListener(
	// 		'mousedown',() => {
	// 			if(window.event.button==2){
	// 				copyToClp(window.event.target.innerHTML)
	// 			}
	// 		}
	// 	)
	// }

// function copyToClp(txt){
// 	if (window.clipboardData && window.clipboardData.setData) {
// 		// IE specific code path to prevent textarea being shown while dialog is visible.
// 		return clipboardData.setData("Text", text); 

// 	} else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
// 		var textarea = document.createElement("textarea");
// 		textarea.textContent = text;
// 		textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
// 		document.body.appendChild(textarea);
// 		textarea.select();
// 		try {
// 			return document.execCommand("copy");  // Security exception may be thrown by some browsers.
// 		} catch (ex) {
// 			console.warn("Copy to clipboard failed.", ex);
// 			return false;
// 		} finally {
// 			document.body.removeChild(textarea);
// 		}
// 	}
// }