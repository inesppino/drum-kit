'use strict';

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //selecciona dentro de la etiqueta audio el data-key detectado por el evento
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selecciona dentro de la clase .key el data-key que viene por el evento
  if(!audio) return; //detiene la funcion si no se detecta ningun keyCode relacionado con un audio
  audio.currentTime = 0; //se setea el tiempo a 0 para poder pulsar repetidas veces las teclas sin esperar a que termine el audio ni la transicion
  audio.play(); //ejecuta el audio
  key.classList.add('playing'); //añade la clase
}

function removeTrasition(e) {
  if(e.propertyName !== 'transform') return; //esto avisa cuando la transformación de la clase ha terminado
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = this.document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTrasition));
