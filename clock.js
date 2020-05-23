"use strict";

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours <= 12 ? `AM` : `PM`}-${
    hours < 10 ? `0${hours}` : hours <= 12 ? hours : `0${hours - 12}`
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  //   getTime();
  setInterval(getTime, 100);
}
init();
