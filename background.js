var config = {
    apiKey: "your-api-key",
    authDomain: "your-authorized-domain",
    databaseURL: "your-database-url",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-message-sender-id"
};

firebase.initializeApp(config);

var data = firebase.database();

chrome.runtime.onMessage.addListener(function(message) {
    console.log('Message Received from Script File', message);

    writeData(message);
})

function writeData(dani) {
    data.ref('browserTalk').set({
        value: dani.text,
        top: dani.top,
        left: dani.left
    });
}

var ref = firebase.database().ref('browserTalk');
ref.on('value', function(snapshot) {
    var message = snapshot.val();
    console.log('Message Received from Firebase', message);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];

        if (tab) {

            chrome.tabs.executeScript(tab.id, {file: 'jquery.js'}, function() {
                chrome.tabs.executeScript(tab.id, {file: 'message.js'}, function(){
                    chrome.tabs.sendMessage(tab.id, message);
                });
            })
        }
    })
})
