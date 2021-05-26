This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


## For local development

First, run the development server:

```bash
npm run devs
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## For building the pages

1. Replace apiUrl (url to the strapi server) and apiToken (api token found in documentation section in strapi) from strapi with env variables in builder/fetch.js
2. When running the command below, the first thing to be executed is a script that will fetch all the data necessary to build the website

npm run buildWithData

Static files will be exported to the folder /out
