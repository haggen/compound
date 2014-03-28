# Compound

> Write widgets with ease.


## About

Compound is a jQuery plugin that allows you to write **compounds** (widgets, components, or whatever you call it) in a streamlined way.

Compound is the step before Backbone, Angular, or something like that. You don't have to learn something new, it's the plain and simple jQuery you're used to, only formalized.

## Usage

Simply add `compound.js` after jQuery and then create your compounds.

For instance:

```js
$('p').compound({
  ready: function() {
    this.element.text('Hello');
  }
});
```

The example above created a compound for every `<p>`.

The argument we provide is a hash the configures your compound. You may provide arbitrary keys with values or functions, but we got a few reserved ones - like `ready`.

The `ready` option is a function which will be called after the compound is configured. `this` here references the compound itself and `this.element` its root element - in this case a `<p>`.

Check out some other examples:

- ...

## API

### Configuration

- `ready`
- `children`
- `events`

### Events

...

## License

See [CC Attribution-ShareAlike 4.0 International](http://creativecommons.org/licenses/by-sa/4.0/deed.en_US)
