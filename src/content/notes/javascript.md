---
title: "JavaScript Fundamentals"
description: "Comprehensive guide covering JavaScript execution context, hoisting, closures, scope, and function types"
publishedAt: 2025-01-05
category: "JavaScript"
draft: false
---

## **How JavaScript Works**

### **Execution Context**

Everything in JavaScript runs inside an **Execution Context**, which consists of two main components:

1. **Memory Component (Variable Environment)**
    - Stores variables and function declarations as key-value pairs.
    - Variables are initialized with `undefined`.
    - Functions are stored entirely.
2. **Code Component (Thread of Execution)**
    - Executes code **line-by-line**.

### **Key Characteristics of JavaScript**

- **Synchronous**: Executes one statement at a time, in order.
- **Single-threaded**: Can process only one task at a time.

### **Phases of Code Execution**

1. **Global Execution Context (GEC) Creation**
    - Automatically created when a JavaScript program starts.
    - Includes both **Memory** and **Code** components.
2. **Memory Creation Phase**
    - Variables: allocated and set to `undefined`.
    - Functions: stored with full definitions.
3. **Code Execution Phase**
    - Code runs line-by-line using the memory set in the first phase.
4. **Function Invocation**
    - Each function call creates a **new Local Execution Context**.
    - It goes through the same **memory** and **execution** phases.
    - Context is pushed to and popped from the **Call Stack**.

### **Call Stack**

- Manages the order of execution.
- The **GEC** is pushed first.
- Each function call pushes a new context.
- On return or end, contexts are popped.
- Finally, the GEC is removed.

### **Hoisting**

1. **Memory Allocation Before Execution**
    - Variables: initialized to `undefined`.
    - Function declarations: hoisted with full body.
2. **Arrow Functions vs Regular Functions**
    - Arrow functions are treated as variables (initialized to `undefined`).
    - Regular function declarations are fully hoisted.
3. **Hoisting Mechanism**
    - JS engine scans declarations before execution.
    - Enables calling functions before their declaration (if using function declarations).

### **Global Environment**

1. **Shortest JavaScript Program**
    - Even an empty file creates:
        - A **Global Execution Context**
        - A **Global Object** (`window` in browsers)
        - The global `this` (`this === window` is `true`)
2. **Global Scope Access**
    - Variables declared outside functions are accessible via `window` (e.g., `window.a`).

### **Understanding `undefined` vs `not defined`**

- **`undefined`**: Variable is declared but not initialized.
- **`not defined`**: Variable was never declared.
- JavaScript is **weakly typed**: variables don’t need explicit data types.

### **Scope and Lexical Environment**

1. **Lexical Environment**
    - Created with every Execution Context.
    - Contains local memory and a reference to its parent environment.
2. **Scope Chain**
    - Variable lookup follows the chain of lexical environments.
    - If not found, the engine goes up recursively.
    - If the variable isn’t found in any environment, it’s “not in scope.”

## **Hoisting and Variable Behavior in JavaScript**

### **Hoisting of `let`, `const`, and `var`**

- **`let` and `const`** are **hoisted**, but not initialized.
    - Accessing them before initialization results in a **Temporal Dead Zone (TDZ)** error.
- **`var`** is hoisted and initialized with `undefined`, so no TDZ.

### **Memory Allocation Differences**

- JavaScript stores `let` and `const` in a **separate memory space** from the Global Execution Context (GEC), causing the **Temporal Dead Zone**.
- `var` is stored in the **Global Execution Context**.

## **Blocks and Scope in JavaScript**

### **What is a Block?**

1. A **block** is code enclosed within **curly braces `{}`**.
2. Multiple statements are grouped into a block to be used where JavaScript expects a single statement—e.g., in **`if`**, **`else`**, **loops**, and **functions**.

### **Block Scope and Memory**

1. Variables declared with **`let`** and **`const`** inside a block are stored in **separate block-level memory**, not in the global or function scope.
    - This is why `let` and `const` are called **block-scoped**.

### **Variable Shadowing**

1. **Shadowing** occurs when a variable declared in an inner scope (e.g., inside a block) has the same name as one in an outer scope.
2. Shadowing is allowed **as long as the inner declaration doesn't cross the boundary** of the original scope.
    - If it does, it can cause errors or unexpected behavior.
3. **Illegal Shadowing**
    - Shadowing a `let` or `const` variable with a `var` declaration is **illegal** and throws an error due to differences in scope and hoisting behavior.

### **Scope Behavior of `var` vs `let` and `const`**

1. A `var` variable is function-scoped or globally scoped (if declared outside any function).
    - It is **not restricted by block scope** and can be accessed outside the block.
    - In contrast, `let` and `const` **are confined to the block** in which they are declared.

## **Closures in JavaScript**

### **Understanding Closures**

1. A **closure** is a **function bundled with its lexical scope**—i.e., it remembers the environment in which it was created.
2. Even after a function is **returned from another function**, it retains access to its **original lexical environment** and **local variables**.
    - This allows the function to **access and manipulate variables** from its parent scope even after that parent function has finished execution.

### **Function Behavior in Closures**

1. Writing `return function x() { ... }` or simply `return function() { ... }` means you are **returning a function reference**, not its result.
    - The function is **not executed immediately**, but can be executed later.
2. The returned function maintains a **reference** to the variables in its closure.
    - So, any **modification to those variables** inside the returned function will be **reflected** across calls, as they are not re-initialized.

### **1. How `setTimeout` Works**

- When `setTimeout` is called, the **callback function is stored separately** (typically in a Web API environment).
- A **timer is attached**, and once it expires, the function is moved back into the **callback queue**.
- When the **call stack is empty**, the callback function is **pushed onto the call stack and executed**.

### **2. `var` and Closure Behavior**

- If you use `var` inside a loop with `setTimeout`, it **doesn't create a new scope** for each iteration.
- Since `var` is **function-scoped** and holds a **reference**, by the time the timeout function executes, the loop has already completed, and it shows the **final value** of the variable.

### **3. Using `let` or `const` Instead**

- `let` and `const` are **block-scoped**, so a **new copy of the variable** is created in each iteration.
- This allows `setTimeout` to **access the correct value per iteration**, even **without needing closures**.

### 📘 **JavaScript Function Types & First-Class Functions — Quick Reference**

| Type | Description | Hoisting | Example |
| --- | --- | --- | --- |
| **Function Declaration** | Regular named function using `function` keyword | ✅ Yes | `function greet() {}` |
| **Function Expression** | Function assigned to a variable | ❌ No | `const greet = function() {}` |
| **Anonymous Function** | Function without a name (often used in expressions/callbacks) | ❌ No | `const greet = function() {}` |
| **Named Function Expression** | Function with internal name, assigned to a variable | ❌ No | `const greet = function welcome() {}`  <br>`welcome()` ❌ Not accessible outside |

### 🧠 **First-Class Functions in JavaScript**

| Capability | Description | Example |
| --- | --- | --- |
| ✅ Assign to variables | Functions as values | `const fn = function() {}` |
| ✅ Pass as arguments | Functions as parameters | `setTimeout(() => {}, 1000)` |
| ✅ Return from other functions | Functions as return values | `return function() {}` |
| ✅ Used in closures | Functions inside other functions with scope | `function outer() { return function() {} }` |

### 🧠 CallBack **Functions**

- **Callback:** Function passed as an argument to another function.
- **First-class functions** → allow passing functions around.
- **Executed later** by the receiving function.
- **Enable async operations** in JS (single-threaded).
- Prevent blocking main thread.
- Basis for Promises & async/await.

**Examples:**

```jsx
function x(y) { console.log("x"); y(); }
x(function y() { console.log("y"); });

```

```jsx
setTimeout(function() { console.log("Hi"); }, 5000);

```