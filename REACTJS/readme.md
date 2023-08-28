### RENDER
- `ReactDOM.render(<Component/>, document.getElementById('root'))`: render <Component/> vào thẻ có id là root.
---
```js
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()}/>
      </div>
    );
  }
};
```
- `{props.date}`: props.date là một biến, nó sẽ được truyền vào component CurrentDate thông qua props.
- `date={Date()}`: truyền vào component CurrentDate một giá trị của biến date, giá trị này là một hàm Date().
---

