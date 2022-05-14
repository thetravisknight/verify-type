<h1 align="center"> Verify Type </h1>

<hr/>

<p>Provides the ability to verify a variable is a valid string or number.</p>

<h3> Installation </h3>

```shell
$ npm i verify-type
```

<h3> Usage </h3>

```node
const { vt } = require('verify-type');

console.log(vt.isString("Singer, Writer")) // true
console.log(vt.isString("")) // true
console.log(vt.isString(true)) // false
console.log(vt.isString(["1", "2", "3"])) // false
console.log(vt.isString(undefined)) // false

console.log(vt.isNumber("Singer, Writer")) // false
console.log(vt.isNumber("")) // false
console.log(vt.isNumber(true)) // false
console.log(vt.isNumber(["1", "2", "3"])) // false
console.log(vt.isNumber(undefined)) // false
console.log(vt.isNumber(1)) // true
console.log(vt.isNumber(63.55842))) // true
console.log(vt.isNumber(-884.4845516)) // true
```

<h3>Contributing</h3>
Keep it simple. Keep it minimal. Don't put every single feature just because you can.

<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Travis Knight - https://linktr.ee/thetravisknight</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
