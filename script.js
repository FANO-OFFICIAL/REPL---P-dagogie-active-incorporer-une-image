var section = document.querySelector('section');
var textareaHTML = document.querySelector('.playable-html');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');

var codeResult = '\n'+ 
'<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n'+ 
'         alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n'+ 
'         width="200"\n'+ 
'         height="171"\n'+ 
'         title="A T-Rex on display in the Manchester University Museum">\n'+ 
'';
var htmlCodeInit = '';
textareaHTML.value = htmlCodeInit;

function fillCode() {
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);