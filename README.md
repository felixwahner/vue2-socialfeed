# A simple "social feed" using VueJS 2, VueX and axios, written in ES6

If the Facebook API isn't accessible due to security restrictions (i.e. intranet)
or you just want to avoid hitting Facebooks API Limit it's a good idea to fetch feed data,
cache it locally (for example using a static .json-file).  
This app assumes you're doing exactly that. It fetches a (local) json-file and renders it's 
content in a "feed" that can be embedded anywhere in your application. 

## Tools used
- Webpack (plus a bunch of loaders and plugins) for bundling
- Babel for transpiling to ES5
- VueJS 2
- VueX
- Axios

## Installing
Either use the prebuilt files in `dist` or `git pull` this repo and use `npm run dev` for local development or `npm run build` for building. 

## Prequisites
If you want to adjust things to you need you'll have to have the following tools installed:

- NodeJS > 6 (at least that's what building this app is tested with)
- Cross-Env (`npm install cross-env -g`). As I keep switching between windows, mac and unix a lot I've found no better way to set `env_` vars for the build stuff

## JSON-Structure
I'm assuming the post objects from your json structure look like this:
```
 {
    "sm_id": "583acd5014c4fa4d8a1af9d1",
    "message": "Consectetur officia qui minim irure consequat proident excepteur et ipsum dolore id enim. Magna veniam mollit cillum duis proident officia reprehenderit ullamco pariatur culpa velit minim nostrud. Ut minim ex occaecat in id. Ad laborum tempor excepteur dolor. Ea in laborum enim pariatur eu pariatur eu sit cillum dolor.\r\nEst Lorem incididunt commodo nulla velit quis laboris ad velit deserunt est est nostrud. Cupidatat cupidatat consequat proident cupidatat ullamco dolor incididunt amet eiusmod adipisicing reprehenderit. Quis ut tempor laborum exercitation id quis laborum veniam excepteur aute.\r\n",
    "date": "2015-06-11T03:34:03 -02:00",
    "account": "SomeSocialMediaAccount",
    "type": "facebook",
    "action": "http://www.facebook.com",
    "image": "http://placekitten.com/500/500"
  }
  ```

  If that's not the case: Feel free to fork this repo and roll your own ;)