# JavaScript Interview Questions & Answers

## Quick Reference

---

### **1. Different types of datatypes in JavaScript**
**Answer:**  
JavaScript has **7 primitive** data types — `String`, `Number`, `Boolean`, `Null`, `Undefined`, `BigInt`, `Symbol` — and **one non-primitive** type which is `Object`.  
Arrays, Functions, Dates, all come under Objects.

---

### **2. What is hoisting?**
**Answer:**  
Hoisting means JavaScript moves declarations to the top before execution.  
- `var` is hoisted with value `undefined`  
- `let` & `const` are hoisted but kept in **Temporal Dead Zone**  
- Function declarations are fully hoisted  

---

### **3. Difference between var, let and const**
**Answer:**  
- `var` is function-scoped and can be redeclared  
- `let` is block-scoped and cannot be redeclared  
- `const` is block-scoped and cannot be reassigned  
`let` & `const` avoid hoisting issues.

---

### **4. Is JS dynamically or statically typed?**
**Answer:**  
JavaScript is **dynamically typed** because variable types are decided at **runtime**, not compile time.

---

### **5. Passed by value vs passed by reference**
**Answer:**  
- Primitives → passed **by value** (copy is passed)  
- Objects → passed **by reference** (actual reference is passed)

---

### **6. Higher Order Functions**
**Answer:**  
A higher-order function takes another function as an argument or returns a function.  
Examples: `map`, `filter`, `reduce`.

---

### **7. Explain ‘this’ keyword**
**Answer:**  
`this` depends on how a function is called:
- In objects → refers to that object  
- In regular functions → global object / undefined (strict mode)  
- In arrow functions → lexical `this` (parent scope)

---

### **8. call, apply, bind**
**Answer:**  
- `call` → invokes function immediately with custom `this`  
- `apply` → same as call but arguments as array  
- `bind` → returns new function with `this` permanently set  

---

### **9. Arrow vs Regular functions**
**Answer:**  
Arrow functions:
- Do NOT have their own `this`
- Do NOT have `arguments`
- Cannot be constructors  
Regular functions have all of these.

---

### **10. Function declaration vs function expression**
**Answer:**  
- Function declarations → hoisted  
- Function expressions → NOT fully hoisted  

---

### **11. What is the Event Loop?**
**Answer:**  
The Event Loop makes JavaScript asynchronous by checking the **call stack** and moving pending callbacks from the queue when the stack becomes empty.

---

### **12. What are Promises?**
**Answer:**  
A Promise represents a value that may be available **now**, **later**, or **never**. Helps avoid callback hell.

---

### **13. States of a Promise**
**Answer:**  
- **Pending**  
- **Fulfilled**  
- **Rejected**

---

### **14. Methods of Promise**
**Answer:**  
- `.then()`  
- `.catch()`  
- `.finally()`

---

### **15. What is async/await?**
**Answer:**  
Async/await is syntactic sugar over promises, allowing async code to be written in synchronous style.

---

### **16. What are Closures?**
**Answer:**  
A closure is when an inner function remembers variables of its outer function even after the outer function has finished executing.

---

### **17. States of Promise (again)**
**Answer:**  
- **Pending** → waiting  
- **Fulfilled** → success  
- **Rejected** → failed  

---

### **18. What is promise chaining?**
**Answer:**  
Executing multiple async operations in sequence using `.then()` repeatedly.

---

### **19. What happens if we return a promise inside .then()?**
**Answer:**  
The next `.then()` waits for the returned promise to resolve or reject.

---

### **20. Promise.all() vs Promise.allSettled()**
**Answer:**  
- `Promise.all()` → fails if **any** promise fails  
- `Promise.allSettled()` → waits for all, never fails, returns status + value/reason  

---

### **21. What is async/await?**
(Answered above)

---

### **22. How to handle Promises?**
**Answer:**  
- Using `.then()` / `.catch()`  
- Using `async/await` with `try/catch`

---

### **23. Methods of Promises**
**Answer:**  
- `Promise.resolve()`  
- `Promise.reject()`  
- `Promise.all()`  
- `Promise.any()`  
- `Promise.race()`  
- `Promise.allSettled()`  

---

### **24. What is Garbage Collection?**
**Answer:**  
Garbage collection frees memory that is no longer reachable using the **Mark-and-Sweep** algorithm.

---

### **25. What is Debouncing?**
**Answer:**  
Debouncing ensures a function runs only after a pause in events (e.g., search suggestions).

---

### **26. Stack vs Heap**
**Answer:**  
- **Stack** → primitives & function calls  
- **Heap** → objects & dynamic memory  

---

### **27. Dynamic Imports**
**Answer:**  
Import modules on demand using `import()`. Useful for code-splitting.

---

### **28. What is Function Currying?**
**Answer:**  
Turning a multi-argument function into a series of single-argument functions.

---

### **29. Pure vs Impure function**
**Answer:**  
- Pure → same input → same output, no side effects  
- Impure → depends on or modifies external state  

---

### **30. What is Prototype?**
**Answer:**  
Hidden object where shared methods/properties are stored for inheritance.

---

### **31. Prototypal Inheritance**
**Answer:**  
Objects inherit properties from other objects via the **prototype chain**.

---

### **32. Memory Leaks in JS**
**Answer:**  
Caused by:
- global variables  
- unused intervals  
- DOM references not removed  

---

### **33. What is Throttling?**
**Answer:**  
Limits how often a function executes (e.g., scroll events) — once per fixed time window.

---

### **34. What is Memoization?**
**Answer:**  
Caching function results to avoid recalculating.

---

### **35. Event Delegation**
**Answer:**  
Attach one event listener to a parent and use event bubbling to detect child events.

---

### **36. DOM vs BOM**
**Answer:**
- **DOM** → document structure  
- **BOM** → browser-specific APIs like window, navigator, history  

---

### **37. Event Bubbling and Capturing**
**Answer:**  
- Capturing → top → target  
- Bubbling → target → top  

---

### **38. Object.freeze() vs Object.seal()**
**Answer:**  
- `freeze` → lock properties completely  
- `seal` → prevent add/delete, but can modify values  

---

### **39. What is Event Propagation?**
**Answer:**  
Flow of an event: **Capturing → Target → Bubbling**

---

### **40. What is a Polyfill?**
**Answer:**  
A custom implementation of a feature not supported in older browsers.

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