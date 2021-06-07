window.onload = function() {
  const inputText = document.getElementById('text-input');
  const inputParagraph = document.getElementById('meme-text');

  inputText.addEventListener('keyup', generateText);

  function generateText() {
    inputParagraph.innerText = inputText.value;
  }
}