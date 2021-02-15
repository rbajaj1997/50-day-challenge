const header = document.querySelector('.card-header');
const title = document.querySelector('.card-title');
const excerpt = document.querySelector('.card-excerpt');
const authorImg = document.querySelector('.author-img');
const authorName = document.getElementById('name');
const cardDate = document.getElementById('date');

const animatedBgElements = document.querySelectorAll('.animated-bg');

const animatedTextElements = document.querySelectorAll('.animated-bg-text');

setTimeout(loadData, 2500);

function loadData() {
  header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
  alt="" />`;
  title.innerText = `Lorem ipsum dolor sit amet`;
  excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptas.`;
  authorImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  authorName.innerText = `John Doe`;
  cardDate.innerText = `Oct 08, 2020`;
  animatedBgElements.forEach(e => e.classList.remove('animated-bg'));
  animatedTextElements.forEach(e => e.classList.remove(`animated-bg-text`));
}