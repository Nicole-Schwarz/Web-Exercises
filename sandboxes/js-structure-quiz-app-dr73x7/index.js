// Store the cards in a global state
import { cards } from "./utils/cards.js";
import { handleFormSubmit } from "./utils/handleFormSubmit.js";
import { handleBookmarkButtonClick } from "./utils/handleBookmarkButtonClick.js";
import { App } from "./components/App/App.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { Form } from "./components/Form/Form.js";
import { Header } from "./components/Header/Header.js";

function Card(props) {
  const card = document.createElement("article");
  card.classList.add("card");
  card.innerHTML = /* html */ `
		<h2 class="card__question" data-js="question"></h2>
		<button class="card__button-answer" type="button" data-js="answer-button">
			Show answer
		</button>
		<p class="card__answer" data-js="answer"></p>
		<ul class="card__tag-list" data-js="tags"></ul>
		<div class="card__button-bookmark" data-js="bookmark-button-wrapper"></div>
	`;

  const question = card.querySelector('[data-js="question"]');
  const answerButton = card.querySelector('[data-js="answer-button"]');
  const answer = card.querySelector('[data-js="answer"]');
  const tags = card.querySelector('[data-js="tags"]');
  const bookmarkButtonWrapper = card.querySelector(
    '[data-js="bookmark-button-wrapper"]'
  );

  question.textContent = props.question;
  answer.textContent = props.answer;

  props.tags.forEach((tag) => {
    const tagElement = document.createElement("li");
    tagElement.classList.add("card__tag");
    tagElement.textContent = "#" + tag;
    tags.append(tagElement);
  });

  const bookmarkButton = Bookmark({
    active: props.isBookmarked,
    onClick: handleBookmarkButtonClick,
  });
  bookmarkButtonWrapper.append(bookmarkButton);

  function handleAnswerButtonClick() {
    answer.classList.toggle("card__answer--active");
  }

  answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
