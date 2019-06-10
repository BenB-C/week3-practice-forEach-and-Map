var deck = []
var suits = ["spades", "hearts" ,"diamonds", "clubs"]
var faces = ["Ace",2,3,4,5,6,7,8,9,10,"Jack","Queen","King"]
suits.forEach(function(suit){
 faces.forEach(function(card){
    deck.push(card + " of " + suit)
  });
});
