
## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`
- **getElementById**: Selects a single element by its ID. Returns the first element that matches the given ID. (Unique per page)
- **getElementsByClassName**: Selects multiple elements that have the same class name. Returns an HTMLCollection (live collection).
- **querySelector**: Selects the first element that matches a CSS selector. (Can target by id, class, tag, attributes etc.)
- **querySelectorAll**: Selects all elements that match a CSS selector. Returns a static NodeList.

---

## 2. How do you create and insert a new element into the DOM?
- You can use `document.createElement()` to create a new element.
- Then use methods like `appendChild()`, `append()`, `prepend()`, or `insertBefore()` to insert it into the DOM.

**Example:**
```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);
```

---

## 3. What is Event Bubbling and how does it work?
- Event bubbling means when an event happens on a child element, it first runs the handler on that child and then bubbles up to its parent elements until it reaches the root (`document`).  
- Example: Clicking a button inside a div will trigger the button’s event, then the div’s, then the body’s (if handlers are attached).

---

## 4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation is a technique where you attach a single event listener on a parent element, and handle events on its child elements using event bubbling.
- Useful because:
  - It improves performance by reducing the number of event listeners.
  - Helps in handling dynamically added elements.

**Example:**
```js
document.getElementById("parent").addEventListener("click", function(event) {
  if(event.target.tagName === "BUTTON") {
    console.log("Button clicked:", event.target.textContent);
  }
});
```

---

## 5. Difference between `preventDefault()` and `stopPropagation()` methods?
- **preventDefault()**: Stops the default action of an element (e.g., preventing form submission, stopping a link from navigating).
- **stopPropagation()**: Stops the event from bubbling up to parent elements. The event still happens on the current element, but it doesn’t propagate further.
