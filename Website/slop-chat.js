





async function aiResponse() {
  try {
    //elements
    const prompt_input = document.getElementById('prompt_input');
    const send_button  = document.getElementById('send_button');
    const chat_text = document.getElementById('chat_txt')

    //pausing button, while ai generating response
    send_button.textContent="wait";
    send_button.disabled = true;

    // this content will be forwarded to api
    const content = {
      "model": "llama3.2:3b",
      "prompt": `${prompt_input.value}`,
      'stream': false // streaming false, otherwise it generate multiple json files
    };

    // async fetch
    const response = await fetch("http://127.0.0.1:11434/api/generate", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(content) //content
    });

    // when response not ok
    if (!response.ok) {
      throw new Error('Failed to connect');
    }

    const data = await response.json(); //ai response

    if(data.done) { // if successfull

      //enable button
      send_button.disabled = false;
      send_button.textContent = 'send';

      chat_text.textContent = data.response
    }


  }
  catch (error) {
    alert(error);
  }
}