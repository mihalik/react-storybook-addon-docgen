# React Storybook Docgen Addon

A React Storybook addon to show documentation generated with docgen.

![](https://cldup.com/5TsRkHW2QE.png)

## Usage

Install the following npm module:

```sh
npm i -D @kadira/react-storybook-addon-info
```

Create an `addons.js` file within your storybook config directory:

```js
import '@kadira/storybook/addons';
import 'react-storybook-addon-docgen/register';

```

Then add a decorator to your stories.

```js
storiesOf('ButtonSimple')
  .addDecorator(docs({}))
  .add(
    'simple usage',
    () => <ButtonSimple label="The Button" onClick={action('onClick')} />,
  );
```

> Have a look at [this example](example/story.js) stories to see the example usage.

## The FAQ

**My component name is `undefined` or props are not displaying**

This addon is using the full information from [react-docgen](https://github.com/reactjs/react-docgen).  Look at that project for some examples on documenting components.  When creating components, set the `displayName` static property to show the correct component name on static builds.
