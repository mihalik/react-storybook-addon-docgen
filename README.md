**NOTE: This module is NOT under active development.**  Check out [this fork](https://github.com/gongreg/react-storybook-addon-docgen) for a version that is being actively updated.

# React Storybook Docgen Addon

A React Storybook addon to show documentation generated with docgen.

![](https://cldup.com/5TsRkHW2QE.png)

## Usage

Install the following module:
**NOTE: This module will move to NPM once API has stabilized**

```sh
npm i -D mihalik/react-storybook-addon-docgen
```

Create an `addons.js` file within your storybook config directory:

```js
import '@kadira/storybook/addons';
import 'react-storybook-addon-docgen/register';

```

Then add a decorator to your stories.

```js
storiesOf('ButtonSimple')
  .addDecorator(docs())
  .add(
    'simple usage',
    () => <ButtonSimple label="The Button" onClick={action('onClick')} />,
  );
```

> Have a look at [this example](example/story.js) stories to see the example usage.

## React native storybook
If you are using react native storybook and this addon doesn't work for you, it means that your .babelrc file is missing plugin.
```
"plugins": [
    ["react-docgen", { "DOC_GEN_COLLECTION_NAME": "STORYBOOK_REACT_CLASSES"}]
  ]
```

Also add `global.STORYBOOK_REACT_CLASSES = {};` somewhere in begging of your code

## The FAQ

**My component name is `undefined` or props are not displaying**

This addon is using the full information from [react-docgen](https://github.com/reactjs/react-docgen).  Look at that project for some examples on documenting components.  When creating components, set the `displayName` static property to show the correct component name on static builds.
