export function selectProperty(property) {
  return {
    type: 'BOOK_SELECTED',
    payload: property
  };
}
