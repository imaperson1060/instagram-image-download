# Instagram Image Downloader

Download Instagram images

> Note: Your account may be banned for being a bot - USE AT YOUR OWN RISK!



## Why

Some senior in my school asked me to yoink some Instagram posts for the yearbook, so logically I made a bot to do it for me. You're welcome, now give me money.



## Download

- Clone this repository: `git clone https://github.com/imaperson1060/instagram-image-downloader`

## Setup

- Find your Instagram user cookie by using the Network tab of Developer Tools in any browser
  - Reload the page
  - Click any request
  - Scroll to "Request headers" and find "Cookie"
  - Copy that
- Create a file in the folder called `.env`
  - Open the file with any text editor
  - Prepend it with `COOKIE=`
  - Paste your cookie

## Run

- Execute `npm i && node .` in the command line
- Visit `localhost:4500` in your browser to use the app
  - Load an Instagram post link into your clipboard (should look like `https://www.instagram.com/p/xxxxxxxx`, or similar)


<br>

### This horribly made README was brought to you by [imaperson.dev](https://imaperson.dev)
> Sorry for bugs lol