# Markdown Quiz Maker
Twin styles to make quizes rapidly with.

## Installation

Both styles are in dist folder. To make full use export with this appended in either body or head:

```html
<style>
    window.onload = () => {



        $ = x => document.querySelectorAll(x);



        function green()
            { this.classList.toggle('green') };
        function red()
            { this.classList.toggle('red') };



        for ( const el of $('ol>li>ol>li, ol>li>ul>li, ul>li>ol>li, ul>li>ul>li') ) {
            if (el.firstChild instanceof HTMLQuoteElement)
                { el.addEventListener('mousedown',green); }
            else
                { el.addEventListener('mousedown',red); }
        }



    }
</style>
```

## Usage

1. Make a list of questions.
2. In each question make a list of answers.
3. Mark correct answers with blockquotes.





Uses Night theme for typora as a base.
https://github.com/typora/typora-default-themes
