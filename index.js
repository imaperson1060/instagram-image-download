import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";
import express from "express";
const app = express();

async function getPost(postId) {
    const api = `https://instagram.com/p/${postId}/?__a=1&__d=dis`;

    const headers = {
        cookie: process.env.COOKIE
    }

    const request = await fetch(api, { headers });
    return (await request.json()).items[0] || null;
}

app.use(express.static("static"));

app.get("/getPost/:postId", async (req, res) => {
    let post = await getPost(req.params.postId);

    let urls = [];

    if (post.image_versions2) urls.push(post.image_versions2.candidates.sort((a, b) => b.width - a.width)[0].url);
    else post.carousel_media.forEach(media => urls.push(media.image_versions2.candidates.sort((a, b) => b.width - a.width)[0].url));

    res.json(urls);
});

app.get("/proxy/:url", async (req, res) => {
    fetch(decodeURIComponent(req.params.url)).then(img => {
        img.headers.forEach((v, n) => res.setHeader(n, v));
        img.body.pipe(res);
    });
});

app.listen(4500);