$ = x => document.querySelectorAll(x);

function green(){	this.classList.toggle('green')	};
function red()	{	this.classList.toggle('red')	};

for (const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li') ) {
	if	(el.firstChild instanceof HTMLQuoteElement)	{ el.addEventListener( 'mousedown',green	); }
	else											{ el.addEventListener( 'mousedown',red		); }
}
	
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