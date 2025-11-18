# JavaScript Interview Questions & Answers

## Quick Reference

### 20. Promise.all() vs Promise.allSettled()

- **Promise.all()**: Resolves only if all promises succeed, and rejects if any fails
- **Promise.allSettled()**: Waits for all promises to complete and returns both successes and failures

### 21. async/await

Async/await is a cleaner way to work with promises using synchronous-looking code.

### 22. How do you handle promises?

- Using `.then()`/`.catch()`
- Using `async/await` with `try/catch`

### 23. Methods of promises

- `then`
- `catch` 
- `finally`

### 24. What is garbage collection?

JavaScript automatically frees memory that's no longer reachable or referenced.

### 25. What is debouncing?

Debouncing ensures a function runs only after the user stops triggering it for a specified time—commonly used in search input.

### 26. Stack vs Heap

- **Stack**: Stores primitive values and function calls
- **Heap**: Stores objects and arrays

### 27. What are dynamic imports?

Dynamic import loads JavaScript modules on demand, improving performance.

### 28. Function currying

Currying means breaking a function with multiple arguments into a chain of functions, each taking one argument.

### 29. Pure vs Impure functions

- **Pure function**: Returns the same output for the same input and has no side effects
- **Impure functions**: Modify external state or depend on it

### 30. What is a prototype?

Prototype is an object from which other objects inherit properties and methods.

### 31. Prototypal inheritance

It allows objects to inherit properties from other objects via the prototype chain.

### 32. Memory Leaks

Memory leaks happen when unused memory isn't released—usually due to global variables, unremoved event listeners, or hanging timers.

### 33. What is throttling?

Throttling ensures a function runs at fixed intervals, even if triggered multiple times.

### 34. What is memoization?

Memoization caches a function's results to avoid recalculating.

### 35. Event Delegation

Instead of adding event listeners to multiple child elements, we add one listener to the parent and use event bubbling to detect the target.

### 36. DOM vs BOM

- **DOM**: Represents the structure of the web page
- **BOM**: Represents browser-specific objects like window, history, location

### 37. Event Bubbling & Capturing

- **Capturing**: Events travel from parent to child
- **Bubbling**: Events travel from child to parent

### 38. Object.freeze() vs Object.seal()

- **freeze()**: Makes an object completely immutable
- **seal()**: Allows modifying existing properties but disallows adding or deleting properties

### 39. Event Propagation

It describes how an event travels through the DOM: capturing → target → bubbling.

### 40. What is a polyfill?

A polyfill is code that provides modern features in older browsers that don't support them.

---

## Detailed Explanations

### 1. Datatypes in JavaScript (In-depth)

JavaScript is a loosely typed/dynamic language where data types are decided at runtime.

#### 👉 Primitive Types (Immutable)

These values are stored directly in stack memory:

- **String** – `"Netflix"`, `"Hello"`
- **Number** – `10`, `10.5`
- **Boolean** – `true`, `false`
- **Null** – intentional empty
- **Undefined** – value not assigned yet
- **Symbol** – unique identifiers
- **BigInt** – huge integers (`1234567890n`)

#### 👉 Non-Primitive (Reference)

These are stored in heap memory:

- Object
- Array
- Function

#### 🔥 Real-World Example

Netflix user object:

```javascript
const user = {
  name: "Khushi",
  plan: "Premium",
  watchHistory: ["Bridgerton", "Wednesday"]
};
```

### 2. Hoisting (Deep Explanation)

**Hoisting** means JavaScript moves variables & functions to the top of their scope before execution starts.

#### 🔍 Memory Creation Phase (Important!)

Before JS code runs, there's a phase where:

- ✔ **Functions** → full copy hoisted
- ✔ **var** → hoisted as `undefined`
- ✔ **let/const** → hoisted but NOT initialized (Temporal Dead Zone)

#### 🔥 Example (Var Hoisting)

```javascript
console.log(a); // Output: undefined
var a = 10;
```

#### 🔥 Example (Let TDZ)

```javascript
console.log(b); // ❌ ReferenceError: b is in TDZ
let b = 10;
```

### 3. var vs let vs const (In-depth Table)

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | function | block | block |
| Hoisting | yes (undefined) | TDZ | TDZ |
| Redeclare | ✔ yes | ❌ no | ❌ no |
| Reassign | ✔ yes | ✔ yes | ❌ no |
| Use case | old JS | loops, block scope | fixed values |

#### 🔥 Real Example

**Cart Total Reassignment** → use `let`:

```javascript
let total = 0;
total = 120;
```

**API Keys** → use `const`:

```javascript
const API_URL = "https://api.netflix.com";
```

### 4. JS Dynamically Typed (Deep)

JS is dynamically typed because:

- ✔ Variable types are decided at runtime
- ✔ You can change types

```javascript
let x = 10;
x = "Khushi"; // valid
```

### 5. Pass By Value & Pass By Reference

#### Pass By Value (Primitive)

A copy is created:

```javascript
let a = 10;
let b = a;
b = 20;
```

#### Pass By Reference (Objects)

Reference is shared:

```javascript
let obj1 = { name: "Khushi" };
let obj2 = obj1;

obj2.name = "Rajput";

console.log(obj1.name); // Rajput
```

### 6. Higher Order Functions

Functions that:

- ✔ Take another function as parameter
- ✔ Return another function

**Example:**

```javascript
const greet = () => console.log("Hi");
setTimeout(greet, 1000); // HOF
```

**Real world**: middleware, array methods, express middleware.

### 7. this Keyword (Deep)

`this` refers to context:

- ✔ In object method → object
- ✔ In global scope → window
- ✔ Strict mode → undefined
- ✔ Arrow function → No own this (lexical this)

### 8. call(), apply(), bind()

- **call()** — invoke immediately: `func.call(obj, arg1, arg2);`
- **apply()** — invoke with array: `func.apply(obj, [arg1, arg2]);`
- **bind()** — returns new function: `const f = func.bind(obj); f();`

**Real-world**: React class components use `this.handleClick = this.handleClick.bind(this)`.

### 9. Arrow vs Regular Functions (Deep)

| Feature | Arrow | Regular |
|---------|-------|----------|
| this | lexical | dynamic |
| arguments | ❌ | ✔ |
| constructor | ❌ | ✔ |
| use case | callbacks, functional | methods, classes |

### 10. Function Declaration vs Expression

**Declaration** (hoisted):

```javascript
function add() {}
```

**Expression** (not hoisted):

```javascript
const add = function() {}
```

### 11. Event Loop (In-depth)

JS is single-threaded. Event loop handles:

- ✔ Call Stack
- ✔ Microtask Queue (Promises)
- ✔ Callback Queue (setTimeout)

**Priority**: Microtasks > Callbacks

### 12. Promises (Deep)

Async operation wrapper:

```javascript
let p = new Promise((resolve, reject) => { ... });
```

### 13. Promise States

- **Pending**
- **Fulfilled**
- **Rejected**

### 14. Promise Methods

- `.then()`
- `.catch()`
- `.finally()`

### 15. async/await

Synchronous style async code:

```javascript
async function getData(){
  let res = await fetch(url);
}
```

### 16. Closures (Deep + Example)

A closure occurs when an inner function remembers outer variables even after the outer function has returned.

**Example:**

```javascript
function counter(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}
```

**Real world**: private variables, counters, state management.

### 17. Promise States

Covered above.

### 18. Promise Chaining

```javascript
fetchData()
  .then(res => process(res))
  .then(out => console.log(out));
```

### 19. Returning a Promise in .then()

Next `.then()` will wait.

### 20. Promise.all vs Promise.allSettled

| Feature | all | allSettled |
|---------|-----|------------|
| success | all must succeed | all results return |
| fail | one fail → reject | never rejects |

### 21. async/await

Already covered.

### 22. How to handle promises?

- `.then` / `.catch`
- `async` / `await`
- `try` / `catch`

### 23. Methods of promises

`then`, `catch`, `finally`.

### 24. Garbage Collection

JS frees unused memory using Mark and Sweep Algorithm.

### 25. Debouncing

User stops typing for X ms → then run.

**Example**: search suggestions.

### 26. Stack vs Heap

- ✔ **Stack** → primitives, function calls
- ✔ **Heap** → objects, arrays

### 27. Dynamic Import

Used in Next.js & React for performance:

```javascript
import("./heavyModule.js").then(...)
```

### 28. Currying

```javascript
const add = a => b => a + b;
```

### 29. Pure vs Impure Functions

**Pure:**

```javascript
const add = (a,b) => a+b;
```

**Impure:**

```javascript
let x=10;
function add(b){ return x+b; }
```

### 30. Prototype

Every object has hidden `[[Prototype]]` (aka `__proto__`)

### 31. Prototypal Inheritance

Objects inherit from other objects.

### 32. Memory Leaks

- Global variables
- `setInterval` without clear
- Closures carrying large data
- Event listeners not removed

### 33. Throttling

Function limit: "Every X ms run once."

**Example**: scroll event.

### 34. Memoization

Caching technique.

### 35. Event Delegation

Parent listener → child events handled.

### 36. DOM & BOM

- **DOM** → HTML structure
- **BOM** → Browser features: window, history, location

### 37. Event Bubbling & Capturing

- **Capturing** → parent to child
- **Bubbling** → child to parent

### 38. Object.freeze vs seal

- **freeze** → no change at all
- **seal** → modify allowed, add/remove not allowed

### 39. Event Propagation

Flow: Capturing → Target → Bubbling

### 40. Polyfills

Fallback code for old browsers:

```javascript
if(!Array.prototype.map){
  Array.prototype.map = function(cb){ ... };
}
```