# 50 Day - 50 Projects

## Day 1 - Expanding Cards

- `flex` property shorthand for flex-frow, flex-shrink and flex-basis. Assigned to individual flex items.
- `:nth-of-type()` css property. Say there are 10 items with same class. And if we want to target a specific item, we can use this.
- `transition: property name | duration | easing function | delay` - Different things we can do with it.

## Day 2 - Progress Steps

- `::before` creates a pseudo element and is added as the first child of the target element.

## Day 3 - Rotating Navigation

- Absolute, Fixed, Relative Positioning and when to use it - [CSS Tricks Link](https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/). In this project all of them have been used. It is important to know when to use when and the logic behind it.
- CSS Selectors - [Explaination with examples](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
- `transform-origin` css property - Specially useful when used with rotate. s been used in this project.

## Day 4 - Hidden Seach Widget

- `element.classList.toggle()` can be used to switch css classes instead of adding and removing them.

## Day 5 - Blurry Loading

- `background` in CSS is shortform for various properties. [MDN Link](https://developer.mozilla.org/en-US/docs/Web/CSS/background)
- `calc()` function can be used for doing various calculations. [MDN Link](<https://developer.mozilla.org/en-US/docs/Web/CSS/calc()>)

## Day 6 - Scroll Animaion

- `box-shadow` is a very important property in css, to give a good look to elements. It stands for the following: `offset-x | offset-y | blur-radius | spread-radius | color`. [Read More Here](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- There are multiple ways to get the dimensions of the viewport or to get the coordinates of an element on the web page. In this project we used `window.inneright()` to get the height of viewport and `Element.getBoundingClientRect()` to get the position of every box w.r.t to the top. Read more about these in MDN.

## Day 7 - Split Landing Page

- Read more about the `whitespace` css property. In this project it was used to prevent text elements from not wrapping.
- Lot of css variables were used and their importance was evident.

### Day 8 - Form Wave Animation

- The label elements were dynamically changed in this project just so that we could implement the wave animation. Also notice the way different animation delays were given to the span elements.
- One thing I learnt in this project is that often styling on inline elements does not work. We need to convert them to block elements specially for positioning.

### Day 9 - Sound Board

- Html `audio` elements were used in this project. `play()` method is for playing songs. To stop the songs we have to first pause it using `pause()` method and then set `currentTime` property to 0.
- Also we created elements dynamically and appended them to body here.

### Day 10 - Dad Jokes

- Learnt about fetch api. And this project showed how to use it via promises as well as via async await method. Also there are differnt properties we can pass as config while making API call. Like this project showed the use of `Accept: application/json` here.
- `letter-spacing`, `line-height`, `box-shadow` are useful properties to make an application look good.

### Day 11 - Event Keycodes

- `display: inline-flex` was used in this project. [Here](http://jsfiddle.net/mgr0en3q/1/) is a fiddle which explains the difference. It makes the flex container display inline. Display is talking about the parent element, so means when we say: display: flex;, it's about the element and when we say display:inline-flex;, is also making the element itself inline

### Day 12 - FAQ Collapse

- We can embed font-awesome icons with plain css using the `content` property. [This link](https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements) explains how to do it.
- `parentNode` returns the parent of the specified node in DOM tree. This has been used in this project to assign CSS class.
- The CSS here is pretty interesting. Go through the project.

### Day 13 - Random Choice Picker

- Heavy on `setTimeOut` and `setInterval`

### Day 14 - Animated Navigation

- We can set multiple transitions at the same time using comma seperated values. For Example: `transition: transform 0.6s linear, opacity 0.6s linear;`
- `linear-gradient` was used in this project. Very useful property.
- Hamburger equivalent icon was created in this project. Similar idea can be used at many places. Look into it.

### Day 15 - Increment Counter

- `getAttribute()` can be used to get any attribute value from any HTML element.
- `innerText` should be used to set text inside HTML elements

### Dy 16 - Drink Water

- `nextSibling` and `nextElementSibling`. Two nice properties. [Link](https://stackoverflow.com/questions/31097016/whats-the-difference-between-nextelementsibling-vs-nextsibling) explaining the difference between two.

### Dy 17 - Movie App

- `overflow: auto` The auto value is similar to scroll , but it adds scrollbars only when necessary.
- This project uses the fetch api and is pretty cool.

### Day 18 - Background Slider

- Very cool project. Have a look. Can have various implementations.
- `background-position` can have various types of values. Have a look at MDN docs.

### Day 19 - Theme Clock

- Very Cool Project again. Showed how to use dark-theme on a website. Have a look.

### Day 20 - Button Ripple Effect

- In animation keyframes, instead of giving percentages, we can also mention `to` to directly set it to a value.
- In vanilla js, always remember to remove elements if you are adding them to the DOM. This is the advantage which frameworks/libraries like React provide.

### Day 21 - Drag n Drop

- Deals with drap and drop events. Very Interesting project.

### Day 22 - Drawing App

- All about HTML canvas.

### Day 23 - Kinetic Loader

- If the borders are very thick, they appear as triangles.

### Day 24 - Content Placeholder

- Learnt about 2 new css properties: `background-position` and `background-size`
- Very interesting project. See how we can use it in React.

### Day 25 - Sticky Nav

- Nothing new. But a pretty cool project.
