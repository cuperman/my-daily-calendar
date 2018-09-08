# My Daily Calendar

An example of how to build a simple calendar with React.

## Development

Use `npm` to install dependencies, run the tests, and serve the processed assets in development mode. Refer to the following example commands.

```bash
# install dependencies
$ npm install

# run tests
$ npm test

# start dev server
$ npm start
```

connect to [localhost:3000](http://localhost:3000)

## Design

The entry point is `index.js`, which mounts the `App` component to the dom.  The following illustrates the hierarchy of the sub components.

```html
<!-- entry: index.js -->
<App><!-- is responsible for state management -->
  <MyDailyCalendar /><!-- displays the current month and date -->
  <Nav /><!-- contains buttons to navigate to different dates -->
</App>
```