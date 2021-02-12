document.getElementById('show').addEventListener('click', reportResults)

/* This code allows me to have a box where whatever I type in is shown by alert on the top of the screen. This happens when I click the button that says Show Results which also changes the text on the webpage */
function reportResults () {
  alert(document.getElementById('input').value)
  document.getElementById('g').innerHTML = 'Pizza!'
}
