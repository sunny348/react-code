// convert this html to react code

//  <div id="parent">
// <div id = "child">
//     <h1>"i am h1</h1>
// </div>

//  <div id="child2">

//     <h1>"i am h1</h1>

// </div>


const parent = React.createElement("div",{id:"parent" },React.createElement("div",{id:"child" },
[ React.createElement("h1",{},"I am tag"),
React.createElement("h1",{},"I am tag"),





]),
React.createElement("div",{id:"child2" },
[ React.createElement("h1",{},"I am tag"),
React.createElement("h1",{},"I am tag"),



]),
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




// const heading = React.createElement("h1",{
//     id:"heading"
// },"hello World");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);