const port = 3000;
const ip = "YOUR IP ADDRESS";
const virtual_ip = "YOUR VIRTUAL IP ADDRESS" // Use Zero Tier
const url = {
  localhost: `http://localhost:${port}/api/`,
  localNetwork: `http://${ip}:${port}/api/`,
  virtualNetwork: `http://${virtual_ip}:${port}/api/`
}

//Temporary Storage
let memory = "";

async function fetchData() {
  try {
    //html elements
    const prompt_input = document.getElementById('prompt_input')
    const send_button = document.getElementById('send_button')
    const chat_container = document.getElementById('chat-container')

    //Disable Button
    send_button.disabled = true;
    send_button.textContent = "wait";

    //Sending prompt with previous memory
    const current_prompt = prompt_input.value
    const full_prompt = `${memory}\nUser: ${current_prompt}`;
    const prompt_json =  {prompt: full_prompt}
    //update ui
    chat_container.innerHTML += `<p class='user-text'>${current_prompt}</p>`

    const response = await fetch(url.localNetwork //Change Your Network depending on where you want to host 
      , 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prompt_json)
      }
    );
    data = await response.json();

    if (data.result) {

      const ai_response = data.response;
      //enable button
      send_button.disabled = false;
      send_button.textContent = "send";
      //ui display
      chat_container.innerHTML += `<p class='ai-text'>${ai_response}</p>`
      
      //update memory
      memory += `\nUser: ${current_prompt}\nAssistant: ${ai_response}`

      //reset input
      prompt_input.value="";
      
    }

  }
  catch (error) {
    alert(error);
  }

}

