window.addEventListener('load', () => {
  const btn1 = document.querySelector('#enter');
  const inputTxt = document.querySelector('#main-article-cmt-cmt')
  btn1.addEventListener('click', () => {
    const newComment = inputTxt.value;
    console.log(newComment)
    const newCommentEle = document.createElement('p')
    newCommentEle.innerText=newComment
    const insertSpot = document.querySelector('#comments-section');
    insertSpot.appendChild(newCommentEle);
  })
});