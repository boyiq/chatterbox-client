// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  _storage: [],

  // feed._retrieve(lobby);
  _retrieve: function(roomName) {
    if (roomName === undefined) {
      console.log(this._data);
    } else {
      for (var i = 0; i < this._data.length; i++) {
        if (this._data[i]['roomname'] === roomName) {
          this._storage.push(this._data[i]);
        }
      }
    }
  },
/*
create (message, (success) add to data, (failure) console error))
*/
  _add: function(message, username, ) {

    Parse.create(message, add)
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};