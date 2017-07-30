# Our Browsers Can Gossip

Our Browsers Can Gossip is a Chrome extension that allows short and sweet text-based communication between browsers, in realtime, by simply generating a mini form by the click of your mouse and typing your friendly message. The message will be sent to your loved ones by appearing on their browser in the exact same `top` and `left` position where you created your message from. OBCG firmly stands behind the notion of "pleasant surprises" that everyone is capable of offering, even during your Internet browsing experience.

![Icon](https://daniwhkim.github.io/ourBrowsersCanGossip/img/icon.png)

![Popup](https://daniwhkim.github.io/ourBrowsersCanGossip/img/popup.png)

![Form](https://daniwhkim.github.io/ourBrowsersCanGossip/img/form.png)

![Demo](https://daniwhkim.github.io/ourBrowsersCanGossip/img/demo.png)

## Installation

1. Download and unzip the source file.

2. Because OBCG uses realtime data, you will need to initialize your own Firebase project first. To do so, sign up at [Firebase](https://firebase.google.com/), create a new project, and retrieve an API key to initialize Firebase on the extension that you and your selected peers are installing. Steps are outlined below.

![Overview](https://daniwhkim.github.io/ourBrowsersCanGossip/img/overview.png)

![Initialize Firebase](https://daniwhkim.github.io/ourBrowsersCanGossip/img/initialize.png)

![Rules](https://daniwhkim.github.io/ourBrowsersCanGossip/img/rules.png)

![Message](https://daniwhkim.github.io/ourBrowsersCanGossip/img/message.png)

3. Copy the block of code containing your Firebase API key and paste in into the `background.js` script. Currently, the fields are populated with placeholder text.

![Background Script](https://daniwhkim.github.io/ourBrowsersCanGossip/img/background.png)

4. Go to your Chrome's [extensions page](chrome://extensions/) at `chrome://extensions`.

5. Turn on "Developer Mode" on the top-right.

6. Click "Load unpacked extension..."

7. Select the previously downloaded and unzipped source file.

8. Voila! Once enabled, an icon will appear next to your Omnibox on your browser.
