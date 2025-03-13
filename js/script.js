 // Aquí tu código
 /*
 const pulse = document.getElementById('agregar');
 const addPrompt = document.getElementById('lista').appendChild(document.createElement('li'));

 pulse.addEventListener('click', function () {
    addPrompt.insertAdjacentHTML('afterbegin',prompt('Introduccir dato:'));
  });
*/
  const buttonAdd = document.getElementById('agregar');
  
  buttonAdd.addEventListener('click', addFunction);
  
  function addFunction () {
    const parent = document.getElementById('lista');
    const child = document.createElement('li');
    parent.appendChild(child).insertAdjacentHTML('afterbegin',prompt('Introduccir dato:'));
  }
