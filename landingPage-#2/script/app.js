const acordionMenu = document.querySelector(".acordion-menu");
const acordionMenu2 = document.querySelector(".acordion-menu2");
const headerUl = document.querySelector(".header-ul");

function deneme() {
  headerUl.style.display= 'flex';
  const aroundDiv= document.createElement('div');
  document.body.appendChild(aroundDiv);
  aroundDiv.classList.add('around-div');

  aroundDiv.addEventListener('click', ()=>{
    aroundDiv.style.display= 'none';
    headerUl.style.display= 'none';
  })
}
