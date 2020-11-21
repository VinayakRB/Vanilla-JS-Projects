//dom queries
const chatList = document.querySelector('.chat-list');
const newChat = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');

//show then hide update message

//add a new name
newName.addEventListener('submit', e => {
  e.preventDefault();
  const updName = newName.name.value.trim();
  chatroom.updateName(updName);
  newName.reset();
  updateMsg.textContent = `Your name was updated to ${updName}`;
  setTimeout(() => {
    updateMsg.textContent = ``;
  },3000)
})

//add a new chat
newChat.addEventListener('submit', e => {
  e.preventDefault();
  const message = newChat.message.value.trim();
  chatroom.addChat(message)
    .then(() => {
      newChat.reset();
    })
    .catch(err => console.log(err));
});

// class instances
const chatUI = new ChatUI(chatList);

//check localstorage by name
const username = localStorage.username ? localStorage.username : 'anonymous';

const chatroom = new chatRoom('gaming', username);


// get chats and render
chatroom.getChats(data => {
  chatUI.render(data);
});
