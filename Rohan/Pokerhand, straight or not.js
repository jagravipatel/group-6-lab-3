function isStraight(cards) {
  cards = [...new Set(cards)];
  const cards1 = cards.sort((a, b) => a - b);
  const cards2 = cards.map(x => x == 14 ? 1 : x).sort((a, b) => a - b);
  for (let j = 0; j < cards.length - 4; j++)
    if ([cards1, cards2].some(cards => [j+1,j+2,j+3,j+4].every(i => cards[i] - cards[i-1] == 1)))
      return true;
  return false;
}