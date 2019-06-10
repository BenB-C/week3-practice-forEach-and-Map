$(function(){
  $("form#groceries").submit(function(event) {
    event.preventDefault();
    $("#groceries").hide();
    // var items = [$("#item1").val(), $("#item2").val(), $("#item3").val()];
    var itemNums = [1, 2, 3, 4];
    var items = itemNums.map(function(itemNum) {
      return $("#item" + itemNum).val();
    });
    items.sort();
    items.forEach(function(item) {
      $(".list").append("<li>" + item.toUpperCase() + "</li>");
    });
  });
});
