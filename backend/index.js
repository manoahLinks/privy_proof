require('dotenv').config()

const express = require('express'),
    app = express(),
    cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const OpenAI = require("openai");  

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get('/', async (req, res) => {
    res.send('welcome to privy-proof Api !!!')
})

app.post(`/create`, async (req, res) => {
    try {
        const {prompt} = req.body

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        if(!completion){
            throw new Error('Error sending request !')
        }

        if(completion){
            return res.status(200).json({message: 'successful', data: completion.choices[0].message })
        }

    } catch (error) {
        return res.json({error: error.message})
    }
})


app.listen(process.env.PORT, () => {
    console.log(`open Ai api serving ON PORT: ${process.env.PORT} !!!`)
})