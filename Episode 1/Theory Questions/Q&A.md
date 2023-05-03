## Questions

- What is Emmet ?
- Difference between libraries and frameworks ?
- What is CDN ? why do we use it ?
- Why is React known as React ?
- What is cross-origin in script tag ?
- What is the Difference between React and React dom ?
-
-
-
-
-
-

## What is Emmet ?

Emmet is a shorthand syntax for writing HTML, CSS, and other markup languages in a faster and more efficient way. It is a plugin or extension that can be used in code editors, such as Visual Studio Code, Sublime Text, and Atom, to generate code snippets with just a few keystrokes.

Emmet uses abbreviations or shortcuts to generate code snippets. For example, typing ul>li\*3 and then pressing the Tab key will expand the abbreviation to:

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Similarly, typing div.container>h1.title+p and pressing Tab will expand to:

```html
<div class="container">
  <h1 class="title"></h1>
  <p></p>
</div>
```

Emmet supports a wide range of abbreviations for HTML tags, CSS properties, and more. It can also perform calculations, such as adding and subtracting numbers, and includes features like auto-completion and nested actions.

Using Emmet can significantly speed up the process of writing markup and reduce the risk of errors, making it a popular tool among web developers.

## Difference between libraries and frameworks ?

Both libraries and frameworks are tools used in software development, but they have different roles and characteristics.

- A library is a collection of pre-written code that can be used to perform specific tasks or functions. It usually consists of a set of functions, methods, and classes that are designed to be used in various programming contexts. Developers can choose to use a library in their code by calling its functions or methods, but they have more control over the flow of their code.

- On the other hand, a framework is a more comprehensive set of pre-written code that provides a structure or template for building applications. It includes a set of rules, guidelines, and conventions that developers must follow when building their applications.

In the context of JavaScript and React development, a library is a set of pre-written code that provides functionality for a specific task or feature. For example, React is a library for building user interfaces. Developers can use React by importing its components and using them to build their UI.
On the other hand, a framework like Next.js provides a more comprehensive set of pre-written code that provides a structure and set of conventions for building React applications. Next.js provides a set of features like server-side rendering, automatic code splitting, and route prefetching that help developers build performant and scalable React applications.
The main difference between a library and a framework in the context of React development is that a library provides specific functionality that can be used in a flexible manner, while a framework provides a more structured and opinionated approach to building applications.

Some other popular React libraries include Redux for managing application state and Axios for making HTTP requests. Some popular React frameworks include Next.js and Gatsby.js for building static and server-rendered React applications.

## What is CDN ? why do we use it ?

CDN stands for Content Delivery Network. It is a network of geographically distributed servers that work together to deliver web content and other internet-based resources to end-users in a faster and more efficient way.

In web development, a CDN is a service that is used to deliver website assets, such as images, stylesheets, and JavaScript files, to end-users in a faster and more efficient way. When a website is hosted on a server, all of its content is served from that server. This can lead to slower loading times and increased latency for users who are located far away from the server.
By using a CDN, website owners can distribute their content across multiple servers located around the world. When a user requests a page from the website, the CDN will deliver the content from the server that is geographically closest to the user, resulting in faster load times and improved website performance.

## Why is React known as React ?

React is known as "React" because of the way it handles changes in a web application's state. In React, the UI is divided into components that can be reused throughout the application. When a component's state changes, React "reacts" to those changes by efficiently updating only the parts of the UI that need to be updated, rather than re-rendering the entire page.
React was initially developed by Facebook and released in 2013 as an open-source JavaScript library for building user interfaces. The library quickly gained popularity in the web development community for its simplicity, performance, and scalability. Today, React is widely used for building complex and interactive web applications, including some of the most popular websites in the world, such as Facebook, Instagram, and Netflix.
In summary, React's name reflects its ability to efficiently handle changes in a web application's state and has become one of the most popular web development tools available today due to its simplicity, performance, scalability, and large and active community of developers.

## What is cross-origin in script tag ?

The "cross-origin" attribute can have two values: "anonymous" or "use-credentials". The default value is "anonymous". When the "anonymous" value is used, the script is loaded without any credentials, such as cookies or HTTP authentication information, and is prevented from accessing sensitive data or resources on the page.

When the "use-credentials" value is used, the script is loaded with credentials and is allowed to access sensitive data or resources on the page it's loaded on, as long as the server hosting the script allows it. This can be useful for scenarios where the script needs to make authenticated requests to an API or resource that's hosted on a different domain or subdomain.

It's important to note that the use of the "cross-origin" attribute can have security implications, and it should be used with caution.

## What is the Difference between React and React dom ?

React and ReactDOM are both libraries within the React ecosystem, but they serve different purposes.

React is a JavaScript library for building user interfaces. It provides a declarative way to describe how your UI should look and behave, and it manages the state of your application to ensure that your UI stays in sync with your data.

ReactDOM, on the other hand, is a library that provides the glue between React and the DOM (Document Object Model). It provides methods for rendering React components to the DOM, updating the DOM in response to changes in your React components, and handling events that occur within the DOM.

In other words, React is the library that defines the components and the logic for building a user interface, while ReactDOM is the library that takes those components and renders them to the browser's DOM.

To summarize, React is the core library for building UI components, while ReactDOM provides the necessary tools for rendering those components to the DOM.

## What is the Difference between react.development.js and react.production.js files via CDN ?

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
```

The two pairs of script tags represent different versions of the React and ReactDOM libraries - development vs production.

The development version of the libraries are intended to be used during the development phase of a project. They are larger in size and include additional debugging information and error messages, which can help you debug issues during development.

The production version of the libraries, on the other hand, are intended for use in production environments. They are smaller in size and optimized for performance, as they don't include the extra debugging information and error messages.
In general, you should use the development versions of the libraries during development, and switch to the production versions when deploying your application to a production environment to optimize performance.
