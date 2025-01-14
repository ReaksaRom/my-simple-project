//import class in js
import { header } from "./header.js";
import { drama } from "./dramaMovie.js";
import { action } from "./actionMovie.js";
import { crime } from "./crimeMovie.js";
import { horro } from "./horroMovie.js";
import { comedy } from "./comedyMovie.js";
import { footer } from "./footer.js";

//top header

window.onscroll = function () {
  scrollFunction();
};
const topHeader = document.getElementById("header");

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 5px";
    document.getElementById("navbar").style.transition = ".5s ease";
  } else {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("navbar").style.transition = ".5s ease";
  }
}
header.forEach((element) => {
  topHeader.innerHTML = element;
});
const ul = document.getElementById("ul").children;
for (let li of ul) {
  li.classList.add("getfont");
}

// body
const rowDrama = document.getElementById("drama-card");
const rowAction = document.getElementById("action-card");
const rowCrime = document.getElementById("crime-card");
const rowHorro = document.getElementById("horro-card");
const rowComedy = document.getElementById("comedy-card");
const rowFooter = document.getElementById("row-footer");
//loop data from horro
horro.forEach((element) => {
  if (element.image == "" || element.title == "" || element.time == "") {
    return false;
  }
  rowHorro.innerHTML += `
        <div class="col-md-6 col-lg-2 p-2">
            <div class="card animate__bounceIn bg-dark ">
              <div class="image">
                <img
                  src="${element.image}"
                  class="card-img-top"
                  style="cursor:pointer"
                />
              </div>
              <div class="card-body p-1">
                <span class="card-title text-light">${element.title}</span>
                <p class="card-text text-warning">${element.time}</p>
              </div>
            </div>
         </div>
    `;
});
//loop data from drama
drama.forEach((element) => {
  if (element.image == "" || element.title == "" || element.time == "") {
    return false;
  }
  rowDrama.innerHTML += `
        <div class="col-md-6 col-lg-2 p-2">
            <div class="card animate__bounceIn bg-dark ">
              <div class="image">
                <img
                  src="${element.image}"
                  class="card-img-top"
                  style="cursor:pointer"
                />
              </div>
              <div class="card-body p-1">
                <span class="card-title text-light">${element.title}</span>
                <p class="card-text text-warning">${element.time}</p>
              </div>
            </div>
         </div>
    `;
});

//loop data from action
action.forEach((element) => {
  if (element.image == "" || element.title == "" || element.time == "") {
    return false;
  }
  rowAction.innerHTML += `
        <div class="col-md-6 col-lg-2 p-2">
            <div class="card animate__bounceIn bg-dark">
              <div class="image">
                <img
                  src="${element.image}"
                  class="card-img-top"
                  style="cursor:pointer"
                />
              </div>
              <div class="card-body p-1">
                <span class="card-title text-light">${element.title}</span>
                <p class="card-text text-warning">${element.time}</p>
              </div>
            </div>
         </div>
    `;
});
//loop data from crime
crime.forEach((element) => {
  if (element.image == "" || element.title == "" || element.time == "") {
    return false;
  }
  rowCrime.innerHTML += `
        <div class="col-md-6 col-lg-2 p-2">
            <div class="card animate__bounceIn bg-dark">
              <div class="image">
                <img
                  src="${element.image}"
                  class="card-img-top"
                  style="cursor:pointer"
                />
              </div>
              <div class="card-body p-1">
                <span class="card-title text-light">${element.title}</span>
                <p class="card-text text-warning">${element.time}</p>
              </div>
            </div>
         </div>
    `;
});
//loop data from comedy
comedy.forEach((element) => {
  if (element.image == "" || element.title == "" || element.time == "") {
    return false;
  }
  rowComedy.innerHTML += `
        <div class="col-md-6 col-lg-2 p-2">
            <div class="card animate__bounceIn bg-dark">
              <div class="image">
                <img
                  src="${element.image}"
                  class="card-img-top"
                  style="cursor:pointer"
                />
              </div>
              <div class="card-body p-1">
                <span class="card-title text-light">${element.title}</span>
                <p class="card-text text-warning">${element.time}</p>
              </div>
            </div>
         </div>
    `;
});

//footer
for (let i = 0; i < footer.length; i++) {
  rowFooter.innerHTML += `
    <div class=" col-md-4 col-lg-3 m-0">
            <ul class="list">
              <li class="list-group-item"><span><a href="">${footer[i]}</a></span></li>
            </ul>
          </div>
  `;
}
