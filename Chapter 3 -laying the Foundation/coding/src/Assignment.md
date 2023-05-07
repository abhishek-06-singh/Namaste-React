## Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

```
const header = React.createElement("div", { className: "title", key: "key" }, [
React.createElement("h1", { key: "h1" }, "this is h1 tag"),
React.createElement("h2", { key: "h2" }, "this is h2 tag"),
React.createElement("h3", { key: "h3" }, "this is h3 tag"),
]);
```

## Q: Create the same element using JSX

```
const header = (

  <div className="title" key="title">
    <h1 key="h1"> this is h1 tag </h1>
    <h2 key="h2"> this is h2 tag </h2>
    <h3 key="h3"> this is h3 tag </h3>
  </div>
);
```

## Q: Create a functional component of the same with JSX

```
const Header = () => {
return (

<div className="title" key="title">
<h1 key="h1"> this is h1 tag </h1>
<h2 key="h2"> this is h2 tag </h2>
<h3 key="h3"> this is h3 tag </h3>
</div>
);
};
```

## Q: Pass attribute into the tag in JSX

```
const Header = () => {
return (

<div className="Title" key="title">
<h1 style={{ color: "blue" }} key="h1">
This is h1 tag
</h1>
<h2 style={{ color: "palevioletred" }} key="h2">
This is h2 tag
</h2>
<h3 style={{ color: "green" }} key="h3">
This is h3 tag
</h3>
</div>
);
};
```

## Composition of Component (Add a component inside another)

```
const OtherComponent = () => {
return <h1> this is other component</h1>;
};

const Header = () => {
return (
<div className="Title" key="title">
<h1 style={{ color: "blue" }} key="h1">
This is h1 tag
</h1>
<h2 style={{ color: "palevioletred" }} key="h2">
This is h2 tag
</h2>
<h3 style={{ color: "green" }} key="h3">
This is h3 tag
</h3>
<OtherComponent />
</div>
);
};
```

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

```

const element = <h1>This is React Element</h1>; // This is React element or {TitleComponent}

const TitleElement = () => {
return <h2 style={{ color: "red" }}>This Title Element</h2>;
}; // This is Title Component

const Header = () => {
return (
<div className="Title" key="title">
{/_ This is {TitleComponent} _/}
{element}
<h1 style={{ color: "blue" }} key="h1">
This is h1 tag
</h1>
{/_ This is {<TitleComponent/>} _/}
<TitleElement />{" "}
<h2 style={{ color: "palevioletred" }} key="h2">
This is h2 tag
</h2>
{/_ This is {<TitleComponent></TitleComponent>}_/}
<TitleElement></TitleElement>
<h3 style={{ color: "green" }} key="h3">
{" "}
This is h3 tag
</h3>
</div>
);
};

```

Q: Create a Header Component from scratch using Functional Component with JSX

- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice

```

```
