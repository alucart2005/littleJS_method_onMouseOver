
const liElements = document.querySelectorAll('.imgBox ul li');

function imgURL(item, color) {
  document.querySelector('.imgBox img').src=item;
  document.querySelector('.imgBox h2').style.color=color;
  document.querySelector('.imgBox ul span').style.color=color;
  document.querySelector('.imgBox a').style.color=color;

  for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.color=color;
  }

}