// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    Messages._data.forEach(MessagesView.renderMessage);
  },


  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessagesView.template({
      text: message.text,
      username: message.username
    });
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  },

  template: _.template(`
      <ul class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </ul>
  `)

};