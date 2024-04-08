import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path'

import { app, server } from './socket/socket.js';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import connectToMongodb from './db/connectToMongodb.js';

const __dirname = path.resolve()

dotenv.config();


app.use(express.json()); //For parsing the data which is coming from the req.body (in the auth.controller.js file).
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend', 'dist', 'index.html'))
})

app.get("/api", (req, res) => {
    res.json({ success: "sdfds" })
})

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT;

server.listen(PORT, () => {
    connectToMongodb();
    console.log(`The running port is ${PORT}`)
})


app.get('/', (req, res) => {
    res.send(`Local host ${PORT}`)
})


