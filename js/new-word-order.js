$(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    // var text = $("#inputText").val()
    var text = "dddd. ccc bb, a dddd dddd dddd d ccc ccc bb , ."
    var words = text.split(/[ ,.]/)
    var punctuationChars = [" ", ",", "."]
    words.filter(word => !punctuationChars.includes(word))
    var wordcount = new Map()
    words.forEach(function(word){
      var count = wordcount.get(word);
      // debugger
      if (count) {
        count += 1;
      } else {
        count = 1;
      }
      wordcount.set(word, count);
    });
    words = Array.from(wordcount.keys());
    words.sort((word1, word2) => wordcount.get(word1) - wordcount.get(word2))
    console.log(wordcount);
    console.log(words)
    // debugger
  });
});
