window.onload = function() {
  const inputText = document.getElementById('text-input');
  const inputParagraph = document.getElementById('meme-text');
  const imgElement = document.getElementById('meme-image');
  const inputImage = document.getElementById('meme-insert');

  inputText.addEventListener('keyup', generateText);
  inputImage.addEventListener('change', displayImage);

  function generateText() {
    inputParagraph.innerHTML = inputText.value;
  }

  function displayImage(event) {
    imgElement.src = URL.createObjectURL(event.target.files[0]);
  }
}