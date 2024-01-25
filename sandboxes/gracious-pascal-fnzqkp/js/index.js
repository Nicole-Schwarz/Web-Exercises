console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const body = document.querySelector("body");

function createCard() {
  const newArticle = document.createElement("article");
  newArticle.classList.add("post");
  const newArticleContent = document.createElement("p");
  newArticleContent.classList.add("post__content");
  newArticleContent.textContent =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
  newArticle.append(newArticleContent);
  const newFooter = document.createElement("footer");
  newFooter.classList.add("post__footer");
  newArticle.append(newFooter);
  const newSpan = document.createElement("span");
  newSpan.classList.add("post__username");
  newSpan.textContent = "@username";
  newFooter.append(newSpan);
  const newButton = document.createElement("button");
  newButton.classList.add("post__button");
  newButton.textContent = "♥ Like";
  newFooter.append(newButton);

  body.append(newArticle);
}

createCard();
