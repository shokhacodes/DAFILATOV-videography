
const gallery = document.querySelector('.gallery');
const elements = document.querySelectorAll('.element');
const content = document.getElementById('content');
const closeButton = document.getElementById('close');
const images = document.querySelectorAll('.scaleimages')


let link1 = `<iframe src="https://drive.google.com/file/d/1Y8uMncAATreMNSmUYnZ8TiwwaekdXSn4/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link2 = `<iframe src="https://drive.google.com/file/d/1kol2c-4Ppbx7UrYu36s9TBLJMhKUwccv/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link3 = `<iframe src="https://drive.google.com/file/d/1K2aRheUghwoMDmIdzGujB8SLLcZb4sIZ/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link4 = `<iframe src="https://drive.google.com/file/d/1ceURaXWECvXNe6GwANLSpfh8D34i_xLP/preview" autoplay class="flex" style="z-index:100;"></iframe>`


let link7  = `<iframe src="https://drive.google.com/file/d/16ioUpWCoQZG439ZI_u7rBp2vCmN7s2_t/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link8  = `<iframe src="https://drive.google.com/file/d/1G-c4TOeImE765QrrYnq17vGj3vLTwGgp/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link9  = `<iframe src="https://drive.google.com/file/d/1mB_P8mnd99nh1q2diIxI8VYUE6zAcWdF/preview" autoplay class="flex" style="z-index:100;"></iframe>`
let link10 = `<iframe src="https://drive.google.com/file/d/1-30kaFwNJx3pn6ANKLznW77ESInd4ufu/preview" autoplay class="flex" style="z-index:100;"></iframe>`



function handleClick(e) {
  const div = document.createElement('div');
  let link;
  const key = this.getAttribute("data-id");

  var ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('safari') != -1) {
    if (ua.indexOf('chrome') > -1) {
          if(key === "1"){
            link = `${link1}`;
          } else if(key === "2"){
            link = `${link2}`;
          } else if(key === "3"){
            link = `${link3}`;
          } else if(key === "4"){
            link = `${link4}`;
          }
    } else {
          if(key === "1"){
            link = `${link7}`;
          } else if(key === "2"){
            link = `${link8}`;
          } else if(key === "3"){
            link = `${link9}`;
          } else if(key === "4"){
            link = `${link10}`;
          }
    }
  }


  div.className = 'row';

  div.innerHTML =
  `<div class="video" onclick="close()">`
  +
  `${link}`
  +
  `<div class="speed">
  </div>
  `;

  content.appendChild(div);

  closeButton.style.display="block";
  const video = document.getElementsByTagName('iframe');
  video.play();
}

function close() {
  const video = document.querySelector('.video');
  video.parentNode.removeChild(video);
  closeButton.style.display="none";
}

function closeWindow(e){
  if(e.keyCode === 27){
    close();
  }
}

if(window.innerWidth <= 1000){
        gallery.style.margin = "5em 3em";
}

elements.forEach(item => item.addEventListener('click', handleClick));
closeButton.addEventListener('click', close);
window.addEventListener('keydown', closeWindow);

