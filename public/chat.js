//Make connection
var socket = io.connect('http://localhost:3000');

//query dom
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');
// Emit events
btn.addEventListener('click', async () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', async() => {
    socket.emit('typing', handle.value);
})

socket.on('chat', async (data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', async(data) => {
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});