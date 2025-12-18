# Slop-Chat

Slop Chat is a private, self-hosted LLM chat website/application built using Node.js and Ollama.
It can be run locally or hosted over ZeroTier to allow access across multiple devices such as Android phones, PCs, and laptops.
able to interect with my hosted LLM model in my pc.

![slop chat](https://github.com/user-attachments/assets/75e17c36-3cfb-439e-9e51-3ffb7addf9e5)

I created this project to interact with my local LLM models which are in my pc, either locally on the same machine or remotely over a private virtual network.





REQUIREMENTS:
-------------


Ollama (with any installed model)

Node.js





DEPENDENCIES:
--------------
(Install inside the website/express/ directory)

express

cors




DEPENDENCIES INSTALLATION COMMAND:
(check package.json for version)

npm init --yes

npm install express

npm install cors





CONFIGURATION:
----------------

After installation, modify the IP address, port, and model name (the model you installed in Ollama) in the following files:

index.js

slop-chat.js





RUNNING THE PROJECT:
----------------------

1) Start the Node.js server (cmd):


node index.js

2) Start the Ollama server (cmd):

ollama serve

3) Open slop-chat.html using VS Code Live Server,
Now it runs.





RUNNING ON LAN (LOCAL NETWORK)
--------------------------------

1) Replace localhost with your PC’s LAN IP address

2) Connect another device (phone, laptop, etc.) to the same LAN and access the website using :
http://<PC_LAN_IP>:<PORT>

Now external devices on the same network can connect.






RUNNING ON VIRTUAL LAN (ZEROTIER – ACCESS FROM ANYWHERE)
---------------------------------------------------------

1) Create a network in ZeroTier

2) Join all devices to the same network

3) ZeroTier will assign a virtual IP address

4) Replace your local IP with the ZeroTier virtual IP

5) Create Windows Firewall inbound rules for:

  -> the HTML server port

  -> the Node.js (index.js) server port

6) Access the HTML file using the ZeroTier IP

Now the app can be accessed securely from anywhere.

