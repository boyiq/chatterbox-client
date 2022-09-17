// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: null,
  _roomStorage: {},
  _previousRoundStorage: null,
  _oldStorageFirst: null,
  _oldStorageLast: null,
  _newStorageFirst: null,
  _newStorageLast: null,
  //_dataFirstRound: null;
  //create a vairable to store the very first room storage

  //Create a roomname storage obejct, start empty

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  _initializeRooms: function() {
    //console.log('goodbye', Messages._data);
    let allMessages = Messages._data;
    for (let i = 0; i < allMessages.length; i++) {
      let currentRoomName = allMessages[i].roomname;
      if (this._roomStorage[currentRoomName]) {
        this._roomStorage[currentRoomName]++;
      } else {
        this._roomStorage[currentRoomName] = 1;
      }
    }

    this._previousRoundStorage = JSON.parse(JSON.stringify(allMessages));
    //console.log(this._previousRoundStorage);
  },

  _updateRoomStorage: function () {
    //need an old storage, and a new storage to compare
    //the new storage is Messages._data;
    this._oldStorageLast = this._previousRoundStorage[99].message_id;
    //create a variable called targetIDfirstOld, which is the messageId of the zeroth index of the old storage
    this._oldStorageFirst = this._previousRoundStorage[0].message_id;
    //create a variale called targetIDlastOld, which is the messageID of the last index of the old storage
    this._newStorageLast = Messages._data[99].message_id;
    //create a variable called targetIDfirstNew, which is the messageId of the zeroth index of the new storage
    this._newStorageFirst = Messages._data[0].message_id;
    //create a variale called targetIDlastNew, which is the messageID of the last index of the new storage

    // ABOVE EQUATES TO MESSAGE ID

    //----------ADDING-----------//
    // set up a while loop that message_id does not equal to targetIDFirstOld
    var index = 0;
    var currMessage = Messages._data[index];
    var currNewID = currMessage.message_id;
    var currNewRoomname = currMessage.roomname;
    while (currNewID !== this._oldStorageFirst) {
      console.log('current comparison ID: ', currNewId, 'target ID: ', this._oldStorageFirst);
      if (this._roomStorage[currNewRoomname]) {
        this._roomStorage[currNewRoomname]++;
      } else {
        this._roomStorage[currNewRoomname] = 1;
      }
      index++;
    }

      //for each of the added new datapoints, increment the corresponding room count or create new roomnames


    //----------DECREMENTING ROOMS-----------//
    // set up a while loop that message_id does not equal to targetIDLastOld
      //for each of the expired datapoints, decrement the corresponding room count

    console.log('state of storage: ', this._roomStorage);
    //this._previousRoundStorage = JSON.parse(JSON.stringify(allMessages));
  },




  //Create function called initializeRooms:
  //Iterate over the entire 100 data ponits obtained from server
    //check the roomname property of every object, if the current roomname exists in the roomname storage object:
       //increment the value of that roomname by 1
    //if not,
      //create a property with taht roomname and let value equate to one



  /*
  ADD
  on click of 'Add Room'


  UPDATE
  repopulate the dropdown menu for room list

  */

};