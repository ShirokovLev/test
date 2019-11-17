/* rating */

if(document.cookie){
  var elems = document.getElementsByClassName('star');

  for(var i=0, elem; elem = elems[ i++ ];){
    if(elem.dataset.rate === document.cookie.substr(-1)){
        elem.classList.add('rated');
        document.getElementById('rate-number').innerHTML = elem.dataset.rate;
    }
  }

  

} else {
  document.getElementById('stars').addEventListener('click', function(event) {

    if(document.cookie === ''){
      var currentTarget = event.target.parentNode.parentNode;
    
      if (currentTarget.tagName.toLowerCase() != 'span') return;
      
      if (currentTarget.classList.contains('rated')) {
        currentTarget.classList.remove('rated');
      } else {
        Array.prototype.forEach.call(document.getElementsByClassName('rated'), function(el) {
          el.classList.remove('rated');
        });
        currentTarget.classList.add('rated');
        document.cookie = 'rating=' + currentTarget.dataset.rate;
        document.getElementById('rate-number').innerHTML = currentTarget.dataset.rate;
        console.log(document.cookie)
      }
    }

  });
}



/* progress bar */

function getSelectValue() {
  var select = document.getElementById("progress-select");
  var value = select.value;
  return value;
}

var progressFiller = document.getElementById('progress-filler');
var progressBar = document.getElementById('progress-bar');



document.getElementById('progress-button').addEventListener('click', function(e){

  e.preventDefault();
  
  progressFiller.style.width = parseInt(progressFiller.offsetWidth/progressBar.offsetWidth*100) + parseInt(getSelectValue()) + "%";
  
  
  if(progressFiller.offsetWidth >= progressBar.offsetWidth){
    progressFiller.innerHTML = 'выход за границу диапазона'
  } else {
    progressFiller.innerHTML = progressFiller.style.width;
  }

  
  
});

/* AJAX */

var ajaxOutput = document.querySelector('#ajax-output');

document.forms.ajaxForm.onsubmit = function(e){
  e.preventDefault();

  var userInput = document.forms.ajaxForm.ajaxForm__input.value;
  userInput = encodeURIComponent(userInput);

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'form.php');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      ajaxOutput.textContent = xhr.responseText;
    }
  }
  
  xhr.send('ajaxForm__input='+userInput);
};

