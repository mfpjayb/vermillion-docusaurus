---
id: store.md
title: Store
sidebar_label: Store
slug: /store
---

Store is a plugin and a state management built for `vermillion`.
It is accessible inside a component using `this.$store`.

## Register the plugin

Store needs to be registered in a module before we can use it.

Here's an example on how to register the store in a module:

```javascript
import { Module } from 'vermillion';
import Store from 'vermillion-store';

const module = new Module({
    ...
});

module.plugin(Store, {});   // <------ Register the store
...
```

## Initial state

Initial state of the store is the state that is passed to the store as the initial data.

Here's an example on how to create an initial state:

```javascript
const store = {
    state: {
        random: 0
    }
};

module.plugin(Store, store);
...
```

## Setter

Setting a state of the store is very straightforward.

Here's an example on how to set a state inside a component:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    btnClick() {
        this.$store.random = Math.random();
    }
}
```

## Getter

Accessing a value of a store, the developer needs to call the `value()` in order to get the current value of the state.

Here's an example on how to get a value of the store:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    $onInit() {
        this.random = this.$store.random.value();
    }
}
```

## Watching store data changes

Store also offers a way to watch for the changes of each item of the state.

Here's how to watch the data changes for each item in the state:

```javascript
<template>
    ...
</template>

export default class SampleComponent {
    $onInit() {
        this.$store.random.watch(this.onRandomChanges.bind(this));
    }

    onRandomChanges(random) {
        this.random = random;
    }
}
```

:::note
Watchers are automatically un-watch when the component is destroyed.
:::
