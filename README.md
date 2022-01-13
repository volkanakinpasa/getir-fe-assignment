# Getir Home Assignmen

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000)

### `yarn build`

Builds the app for production to the `build` folder.\

### `yarn server`

Runs a fake server api.\
Open [http://localhost:5000](http://localhost:5000)

## NOTE

I've learned Redux, Redux-Saga and Styled Component right before this assignment in order to complete it. I believe there are some style component parts to be improved. Also, since I spent 30 hours in this assigment, I only wanted integrate redux saga and api call by filtering on server side. it's not a complete project but at least i show my approach here like

- fetching products(only 16 items) along with filtered brands, tags and types should be on server side and also sorting ..., othwersie on eacht request I had to fetch entire products, keep in redux store and filter, sorte etc. so I dediced to do it in server.
- I didn't have time to complete filtering but at least i get brands in search result. it's just matter of listing and handling the clicks on brands. and then passing filtered brands to server again.
- added a dummy loding in listing page.

### IMPROVEMENTS

- IconChecked passing dublicated svg. (this must be refactored)
- didn't add a "show"/"hide" icon on left side for xs, sm, md breakpoints.
- I used some common styles in common.styled.ts in order to re-use css. but haven't moved all classes in here.
- didn't add basket summary.
- didn't deployed to aws ecs or s3 bucket or vercel.
- didn't write integration tests.

Summary: I don't expect to be invited for an interview as I haven't completed the whole assignment. But again, this is something like full time work for a week.
