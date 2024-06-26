const $ = x => document.querySelectorAll(x);
const $$ = document.body;
const counter = document.createElement('footer')
window.onload = () => {

    for (const el of $('h1')) {
        let content = el.innerHTML
        
    }


    $$.innerHTML = $$.innerHTML.replace(/«(.+?)»/g, (str) => {
        console.log(str);
        let replacement = `<input data-ok='${str.substring(1,str.length-1)}'>`
        console.log(replacement);
        return replacement
    })
    $$.appendChild(counter)


    for (const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li')) {
        // if (el.firstChild instanceof HTMLQuoteElement) {
        if (el.children[0] instanceof HTMLQuoteElement) {
            el.addEventListener('mousedown', green)
        }
        else {
            el.addEventListener('mousedown', red)
        }

    }

    for (const el of $('input')) {
        el.addEventListener('input', check);
    }

    const focusable = $('input, ol>li>ol, ol>li>ul, ul>li>ol, ul>li>ul')
    for (const el of focusable) {
        el.setAttribute('tabindex', '1');
        el.addEventListener('keydown', klik)
    }
    focusable[0].focus()
}

function green() { this.classList.toggle('green');
    count(); }

function red() { this.classList.toggle('red');
    count(); }

function check() {
    let v = this.value
    let k = this.dataset.ok
    if (v == '') { this.classList.remove('red');
        this.classList.remove('green'); } else if (v == k) { this.classList.remove('red');
        this.classList.add('green'); } else { this.classList.add('red');
        this.classList.remove('green'); }
    count();
}

function klik() {
    let e = $(':focus > li');
    let k = event.key;
    if (
        k == '1' || k == '2' || k == '3' || k == '4' || k == '5' || k == '6' ||
        k == 'a' || k == 'b' || k == 'c' || k == 'd' || k == 'e' || k == 'f'
    ) {

        let d = {
            '1': 0,
            '2': 1,
            '3': 2,
            '4': 3,
            '5': 4,
            '6': 5,
            '7': 6,
            '8': 7,
            '9': 8,
            '0': 9,
            'a': 0,
            'b': 1,
            'c': 2,
            'd': 3,
            'e': 4,
            'f': 5,
            'g': 6,
            'h': 7,
            'i': 8,
            'j': 9,
        }
        let v = d[k];
        if (v < e.length) {

            let el = e[v];

            if (el.firstChild instanceof HTMLQuoteElement) { el.classList.toggle('green'); } else { el.classList.toggle('red'); };
            count();

        }
    }
}

function count() {
    let x = $('.green').length / ($('.green').length + $('.red').length) * 100
    counter.innerHTML = (x) + '%';
    if (x < 70) { counter.classList.add('red');
        counter.classList.remove('green'); } else { counter.classList.remove('red');
        counter.classList.add('green'); }
}


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