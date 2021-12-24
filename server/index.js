import express from 'express';
import fetch from 'node-fetch';
 
//Backend routing port
const app = express();
const PORT = 4000;
app.listen(PORT, ()=> {
   console.log(`Server running on port ${PORT}.`);
});
 
//Retrieves all infromation for list page.
//Can change the amount of users retrieved.
app.get('/all', async (req, res) => {
   const api_url = `https://randomuser.me/api/?results=6`;
   const fetch_res = await fetch(api_url);
   const json = await fetch_res.json();
   res.json(json);
});
