import van from "vanjs-core";

const Counter = ({counter_start = 0, border_color = "darkblue"}={}, ...children) => {
  console.log({children})
  const { button, div } = van.tags;
  const counter = van.state(counter_start);
  return (
    div(
      {style:
        `width : 200px;
        border : 2px ${border_color} solid; 
        border-radius : 10px;
        display : flex;
        justify-content: center;
        padding : 10px
        `
      },
      button({ onclick: () => ++counter.val }, "Counter: ", counter),
    )
  );
};
const Comps = {
  C1 : Counter
}
export{
  Comps
}
export default Counter;
