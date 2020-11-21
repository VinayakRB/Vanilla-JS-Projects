// adding chat documents
// setting up real time listener to get new chats
// updating the username
// updating the room

class chatRoom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsub;
  }
  async addChat(message) {
    //format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now)
    };
    //save to db
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    this.unsub = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snap => {
        snap.docChanges().forEach(change => {
          if(change.type == 'added') {
            //update ui
            callback(change.doc.data());
          }
        });
      });
  }
  updateName(username) {
    this.username = username;
  }
  updateRoom(room) {
    this.room = room;
    console.log(`room updated`);
    if(this.unsub) {
      this.unsub();
    }
  }

}

const chatroom = new chatRoom('general', 'shaon');

chatroom.getChats(data => {
  console.log(data);
});

setTimeout(() => {
  chatroom.updateRoom('gaming');
  chatroom.updateName('kaneki');
  chatroom.getChats(data => {
    console.log(data);
  });
  chatroom.addChat('By kaneki');
}, 3000)