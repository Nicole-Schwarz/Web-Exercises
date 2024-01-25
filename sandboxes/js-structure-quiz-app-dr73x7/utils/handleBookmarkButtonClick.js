export function handleBookmarkButtonClick(event) {
  cards.find(
    (card) => card.question === props.question
  ).isBookmarked = !props.isBookmarked;
  // To prevent the need to rerender, we can just toggle the class here
  event.currentTarget.classList.toggle("bookmark--active");
}
