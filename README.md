# Markdown Quiz Maker
Twin styles to make quizes rapidly with.

## Installation

Both styles are in dist folder. To make full use export with this appended in either body or head:

```html
<style>
    const $ = x => document.querySelectorAll(x);
    const $$ = document.body;
    const counter = document.createElement('footer')
    window.onload = () => {

        


        let s = $$.innerHTML
        s = s.replace(new RegExp(	`<span class="cm-string">'''`	,'g'),'<input data-ok="');
        $$.innerHTML = s.replace(new RegExp(	`'''</span>`					,'g'),'">');
        
        $$.appendChild(counter)
        
        
        for ( const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li') ) {
            if (el.firstChild instanceof HTMLQuoteElement)	{ el.addEventListener('mousedown',green); }
            else											{ el.addEventListener('mousedown',red);   }
            
        }
        
        for ( const el of $('pre input, pre * input') ) {
            el.addEventListener('input',check);
        }

        const focusable = $('input, ol>li>ol, ol>li>ul, ul>li>ol, ul>li>ul')
        for ( const el of focusable ) {
            el.setAttribute('tabindex', '1');
            el.addEventListener('keydown',klik)
        }
        focusable[0].focus()
    }

    function green()	{ this.classList.toggle('green');	count();	}
    function red()		{ this.classList.toggle('red');  	count();	}
    function check() {
        let v = this.value
        let k = this.dataset.ok
        if 		(v == '')	{	this.classList.remove('red');		this.classList.remove('green');		}
        else if (v == k )	{	this.classList.remove('red');		this.classList.add('green');		}
        else 				{	this.classList.add('red');			this.classList.remove('green');		}
        count();
    }
    function klik() {
        let e = $(':focus > li');
        let k = event.key;
        if (
            k == '1' 	||		k == '2'	||		k == '3'	||		k == '4'	||		k == '5'	||		k == '6'	||
            k == 'a' 	||		k == 'b'	||		k == 'c'	||		k == 'd'	||		k == 'e'	||		k == 'f'
        ) {

            let d = {
                '1':0,			'2':1,				'3':2,				'4':3,				'5':4,				'6':5,
                'a':0,			'b':1,				'c':2,				'd':3,				'e':4,				'f':5
            }
            let v = d[k];
            if (v < e.length) {
                
                let el = e[v];
                
                if (el.firstChild instanceof HTMLQuoteElement)	{ el.classList.toggle('green');	 }
                else											{ el.classList.toggle('red');    };
                count();
                
            }
        }
    }
    function count() {
        let x = $('.green').length / ($('.green').length + $('.red').length) * 100
        counter.innerHTML = ( x ) + '%';
        if ( x < 70 )	{	counter.classList.add('red');			counter.classList.remove('green');		}
        else			{	counter.classList.remove('red');		counter.classList.add('green');		}
    }
</style>
```

## Usage

1. Make a list of questions.
2. In each question make a list of answers.
3. Mark correct answers with blockquotes.





Uses Night theme for typora as a base.
https://github.com/typora/typora-default-themes
