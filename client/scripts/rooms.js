// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _initialized: false,
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

    this._initialized = true;
    this._previousRoundStorage = JSON.stringify(allMessages);
    //console.log('first round of room storage is ' + this._previousRoundStorage);
    console.log('state of storage: ', this._roomStorage);
  },

  _updateRoomStorage: function () {
    if (this._previousRoundStorage !== JSON.stringify(Messages._data)) {
      let previousRoundStorage = JSON.parse(this._previousRoundStorage);

      this._oldStorageLast = previousRoundStorage[99].message_id;
      this._oldStorageFirst = previousRoundStorage[0].message_id;
      this._newStorageLast = Messages._data[99].message_id;
      this._newStorageFirst = Messages._data[0].message_id;

      //----------ADDING-----------//
      // set up a while loop that message_id does not equal to targetIDFirstOld
      var index = 0;
      do {
        var currMessage = Messages._data[index];
        var currNewID = currMessage.message_id;
        var currNewRoomname = currMessage.roomname;
        //console.log('current comparison ID: ', currNewID, 'target ID: ', this._oldStorageFirst);
        if (this._roomStorage[currNewRoomname]) {
          this._roomStorage[currNewRoomname]++;
          console.log('storage was incremented: ', currNewRoomname);

        } else {
          this._roomStorage[currNewRoomname] = 1;
        }
        index ++;
        console.log(currNewID, 'should never be smaller or equal to ', this._oldStorageFirst);
      } while (currNewID > this._oldStorageFirst + 1); // moving ID, target ID



      //for each of the added new datapoints, increment the corresponding room count or create new roomnames
      //----------DECREMENTING ROOMS-----------//
      var bottomUpIndex = 99;
      do {
        var currMessageOld = previousRoundStorage[bottomUpIndex]; // last message of new data
        var currOldID = currMessageOld.message_id;
        var currOldRoomname = currMessageOld.roomname;
        console.log('current comparison ID: ', currOldID, 'target ID: ', this._newStorageLast);
        if (this._roomStorage[currOldRoomname]) {
          this._roomStorage[currOldRoomname]--;
        } else {
          console.error('room name doesnt exist');
        }
        bottomUpIndex--;
        // 51 - 1155  frist of the old data that's not shared    51 of the
        // 50 - 1157  last of shared data ,   50th of the old data
      } while (currOldID !== this._newStorageLast);
      // set up a while loop that message_id does not equal to targetIDLastOld

        //for each of the expired datapoints, decrement the corresponding room count

      console.log('state of storage: ', this._roomStorage);
      //this._previousRoundStorage = JSON.parse(JSON.stringify(allMessages));
    } else {
      console.log('everything is the same, this worked');
    }
  },



  /*
  ADD
  on click of 'Add Room'


  UPDATE
  repopulate the dropdown menu for room list

  */

};