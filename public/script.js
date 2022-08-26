import bubblesort from './bubblesort.js';

window.addEventListener('load', () => {
  const inputTxt = document.querySelector('#main-article-cmt-cmt');
  const article = document.querySelector('#article');
  const newCommentSpace = document.createElement('ul');

  // create new button and inject into the DOM, add a class to it for styling 
  const myBtn = document.createElement('button');
  myBtn.innerText ="Add Comment";
  document.body.appendChild(myBtn);
  myBtn.classList.add('buttons');

  // create a custom event
  const myEvent = new Event('comment');

  // listen for the event
  myBtn.addEventListener('click', (e) => {
    // const composed = e.composedPath()
    // console.log(composed);
    // console.log(composed.filter)
    article.appendChild(newCommentSpace);
    newCommentSpace.append(inputTxt.value)
  })
  // dispatch the event
  myBtn.dispatchEvent(myEvent)

// sorting 

  let randomArray = []
  let randomInt = 0;
  let intsInArray = 1000;

  for(let i = 0; i < intsInArray; i++) {
    randomInt = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomInt);
  }
  bubblesort(randomArray)
});
