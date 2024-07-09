require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios')

// console.log('key: ', process.env.MONDAY_API_KEY);

// Setting the view engine
app.set('view engine', 'ejs');

// Serve static files (css etc)
app.use(express.static(path.join(__dirname, 'public')));

// Get Root
// app.get('/', (req, res) => {
//     console.log("Server running...");
//     res.render('index');
// });

// Route to interact with Monday.com API
app.get('/', async (req, res) => {
    try {
        const apiKey = process.env.MONDAY_API_KEY;

        if (!apiKey) {
            throw new Error('Monday API Key is not defined');
        }

        const response = await axios({
            url: 'https://api.monday.com/v2',
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': apiKey,
            },
            data: JSON.stringify({
                query: `{
                    boards (ids:1880144465) {
                        id
                        name
                        items_page{
                        items{
                            id
                            name
                            column_values{
                                id
                                text
                                value
                            }
                        }
                        }   
                        

                    }
                }`
            }),
        });

        res.render('index', { data: response.data.data });
    } catch (error) {
        console.error('Error interacting with Monday.com API:', error.message);
        res.status(500).send('Something went wrong!');
    }
});
  


// Listening on port 3000
app.listen(3000, () => {
    console.log("Server Running...")
});


// If need to kill port - npx kill-port 3000