# [Airbnb](https://airbnb.io/javascript/#iterators--nope): Don’t use iterators like `for-in` or `for-of`

When using airbnb, I noticed that `for-in` and `for-of` are restricted. This topic is to try to understand why and also try to find the best practice.

## ESLint

ESLint provides a rule: [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax). With this rule, [Airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L339) disallows certain syntax forms:

```
'no-restricted-syntax': [
  'error',
  {
    selector: 'ForInStatement',
    message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: 'ForOfStatement',
    message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
  },
  {
    selector: 'LabeledStatement',
    message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'WithStatement',
    message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  },
],
```

## Arrays built in methods

I summarized all the loop/iterators related APIs here:

### ES5

- [`for...break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  
   为 Array 对象引入了 Array.forEach 方法以代替 for 循环，Array.forEach 方法的特点是自带闭包，以解决因为缺乏块级作用域导致需要使用取巧的方法来解决 var 的作用域问题。
- [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [`Array.prototype.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [`Array.prototype.some()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

### ES6/ES2015

- [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)  
   ECMAScript 引入了一种新的循环语句 for...of，主要的用途是代替 for...in 循环语句, see [difference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in).
- [`Array.prototype.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [`Array.prototype.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)
- [`Array.prototype.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)  
   在 ES2015 标准中，数组类型再次被赋予了一个名为 entries 的方法，它可以返回对应的数组中每一个元素与其下标配对的一个新数组。
- [`Array.prototype.find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [`Array.prototype.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### ES2016

- [`Array.prototype.includes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)  
   indexOf 通过返回值是否等于-1 来获得查询对象是否被该数组包含。而 includes 则是通过返回 true 或者 false 来得出结果，对于只是查询是否包含，语义显得更清晰一些。

### ES2017

- [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [`Object.values()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Best Practice

See `TestLoop.js` "Best Choice"

## My Understanding

I think Airbnb team do this for the following purpose:

1. The polyfill of `for..of` [doesn't work well](https://github.com/airbnb/javascript/issues/1271#issuecomment-281756069) and Airbnb still supports [IE 11](https://github.com/airbnb/javascript/issues/1271#issuecomment-635133150). They take it very seriously.
2. They encourage to use function in a ["functional"](https://gist.github.com/ljharb/58faf1cfcb4e6808f74aae4ef7944cff#intro) way

## Related Topic

[Airbnb JavaScript Style Guide](https://airbnb.io/javascript/#iterators--nope)  
[Using 'ForOfStatement' is not allowed (no-restricted-syntax)](https://github.com/airbnb/javascript/issues/1271)
[Array Iteration](https://gist.github.com/ljharb/58faf1cfcb4e6808f74aae4ef7944cff)
[Why and when to use forEach, map, filter, reduce, and find in JavaScript.](https://medium.com/@JeffLombardJr/understanding-foreach-map-filter-and-find-in-javascript-f91da93b9f2c)
