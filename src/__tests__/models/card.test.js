import Card from '../../models/card';
describe("Card", () => {
  let card
  beforeEach(() => {
    card = new Card('A', 'S')
  })

  it("returns a rank", () => {
    expect(card.rank()).toEqual("A")
  });

  it("returns a suit", () => {
    expect(card.suit()).toEqual("S")
  });

  it("returns the value of the card", () => {
    expect(card.value()).toEqual("Ace of Spades")
  });

  it("returns the image path of the card", () => {
    expect(card.toImgPath()).toEqual("sa.png")
  });
});
