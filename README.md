This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started


## For local development

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## For building the pages

**Replace apiUrl and apiToken from strapi with env variables in config/constants**
**The current strapi service on render doesn't have the necessary plugins for the api (documentation plugin) so it is necessary to use the apiurl and apitoken from one of the PRs. The apiurl is just the link to the platform and the api token can be found under the documentation tab in the admin dashboaard**

npm run build

Static files will be exported to the folder /out
