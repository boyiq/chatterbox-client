// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    for (var key in Rooms._roomStorage) {
      RoomsView.renderRoom(key);
    }
    console.log('"RoomsView.render() called"');
  },

  renderRoom: function(roomname) {
    var $singleRoom = RoomsView.template({
      currentRoom: roomname
    });
    RoomsView.$select.append($singleRoom);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  },

  template: _.template(`
    <option><%- currentRoom %></option>
  `)
};

