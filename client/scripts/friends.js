// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  initialize: function() {
    $('#chats').on("click", ".username", function() {
      Friends._data.push($(this).text());

      console.log(Friends._data);
    });
  }

};