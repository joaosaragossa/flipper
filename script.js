"use strict";

// Framework -------------------------------

function id(nome) {
  return document.getElementById(nome);
}

// Variáveis -------------------------------

var tela = id('tela');

var ponto = id('ponto');

var arrowTopLeft     = id('top-left');
var arrowTop         = id('top');
var arrowTopRight    = id('top-right');
var arrowLeft        = id('left');
var arrowCenter      = id('center');
var arrowRight       = id('right');
var arrowBottomLeft  = id('bottom-left');
var arrowBottom      = id('bottom');
var arrowBottomRight = id('bottom-right');

var interval;

var cima     = (50/100) * tela.offsetHeight - ponto.offsetHeight;
var esquerda = (50/100) * tela.offsetWidth - ponto.offsetWidth;
var direita  = (50/100) * tela.offsetWidth - ponto.offsetWidth;

// Posicionar ponto no centro da tela

var centroTop = (50/100) * tela.offsetHeight - (ponto.offsetHeight/2) - 15 + 'px';
var centroLeft = (50/100) * tela.offsetWidth - (ponto.offsetWidth/2) - 15 + 'px';

ponto.style.top = centroTop;
ponto.style.left = centroLeft;

function stop() {
  clearInterval(interval);
}

function toTop(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima < 1) {
      cima = 0;
    } else {
      cima = cima - 1;
    }

    ponto.style.top = cima + 'px';

  },10);

  return false;
}

function toLeft(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (esquerda < 1) {
      esquerda = 0;
    } else {
      esquerda = esquerda - 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toRight(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (esquerda > tela.offsetWidth - ponto.offsetWidth - 30) {
      esquerda = tela.offsetWidth - ponto.offsetWidth - 30;
    } else {
      esquerda = esquerda + 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toBottomLeft(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima > tela.offsetHeight - ponto.offsetHeight - 30) {
      cima = tela.offsetHeight - 60;
    } else {
      cima = cima + 1;
    }

    ponto.style.top = cima + 'px';

    if (esquerda < 1) {
      esquerda = 0;
    } else {
      esquerda = esquerda - 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toBottom(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima > tela.offsetHeight - ponto.offsetHeight - 30) {
      cima = tela.offsetHeight - 60;
    } else {
      cima = cima + 1;
    }

    ponto.style.top = cima + 'px';

  },10);

  return false;
}

function toBottomRight(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima > tela.offsetHeight - ponto.offsetHeight - 30) {
      cima = tela.offsetHeight - 60;
    } else {
      cima = cima + 1;
    }

    ponto.style.top = cima + 'px';

    if (esquerda > tela.offsetWidth - ponto.offsetWidth - 30) {
      esquerda = tela.offsetWidth - ponto.offsetWidth - 30;
    } else {
      esquerda = esquerda + 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toTopLeft(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima < 1) {
      cima = 0;
    } else {
      cima = cima - 1;
    }

    ponto.style.top = cima + 'px';

    if (esquerda < 1) {
      esquerda = 0;
    } else {
      esquerda = esquerda - 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toTopRight(){
  ponto.style.transition = 'none';
  interval = setInterval(function(){

    if (cima < 1) {
      cima = 0;
    } else {
      cima = cima - 1;
    }

    ponto.style.top = cima + 'px';

    if (esquerda > tela.offsetWidth - ponto.offsetWidth - 30) {
      esquerda = tela.offsetWidth - ponto.offsetWidth - 30;
    } else {
      esquerda = esquerda + 1;
    }

    ponto.style.left = esquerda + 'px';

  },10);

  return false;
}

function toCenter() {
  ponto.style.transition = 'none';
  cima     = (50/100) * tela.offsetHeight - ponto.offsetHeight;
  esquerda = (50/100) * tela.offsetWidth - ponto.offsetWidth;

  ponto.style.transition = 'all .5s';
  ponto.style.top = centroTop;
  ponto.style.left = centroLeft;
  ponto.style.right = "";
  ponto.style.bottom = "";


  return false;
}

arrowTop.addEventListener("mouseover", toTop);
arrowTop.addEventListener("mouseout", stop);

arrowLeft.addEventListener("mouseover", toLeft);
arrowLeft.addEventListener("mouseout", stop);

arrowRight.addEventListener("mouseover", toRight);
arrowRight.addEventListener("mouseout", stop);

arrowBottom.addEventListener("mouseover", toBottom);
arrowBottom.addEventListener("mouseout", stop);

arrowTopLeft.addEventListener("mouseover", toTopLeft);
arrowTopLeft.addEventListener("mouseout", stop);

arrowTopRight.addEventListener("mouseover", toTopRight);
arrowTopRight.addEventListener("mouseout", stop);

arrowBottomLeft.addEventListener("mouseover", toBottomLeft);
arrowBottomLeft.addEventListener("mouseout", stop);

arrowBottomRight.addEventListener("mouseover", toBottomRight);
arrowBottomRight.addEventListener("mouseout", stop);

arrowCenter.addEventListener("mouseover", toCenter);
