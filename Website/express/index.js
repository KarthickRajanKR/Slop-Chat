const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());          // allows request from html
app.use(express.json());  //json parse

const port = 3000; //server port
const api_url = "OLLAMA_API_LINK" //Your ollama API link
const model_name = "MODEL_NAME" //Your ollama model name

//POST METHOD
app.post('/api/',(req,res)=>{

    const prompt = req.body.prompt;  //get prompt

    fetchData(prompt,res) // passing prompt & res  to async fetchData func to avoid sync
});

app.listen(port,'0.0.0.0');  //Start server and 0.0.0.0 means allows local network devices to connect



// Connection with api
async function fetchData(prompt,res) {
  try{
      //content
      const content = {
        model : model_name, //ai model
        prompt: prompt, //user prompt
        stream: false // streaming false, to avoid multiple json
      }

      //starting fetch
      const response = await fetch(api_url,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(content)
      });

      if (!response.ok)  
      {
        res.send({'result':false});
      }
      else
      {
        const data = await response.json();
        if (data.done)
        {
          
          console.log('user: ',content.prompt)
          console.log('ai: ',data.response)
          res.send({'response':data.response,'result': true}); //response from ai
          console.log('[Successfull Response]'); 
        }
        else{
          res.send({'result':false});
          console.log('[Failed to Response]'); 
        }
      }
  }
  catch(error){
    res.send({'result':false});
    console.log(`Failed to Response - Reason [ ${error} ]`)
  }
}

// response & result are json keys using this we collect data in html