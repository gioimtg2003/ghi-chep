### RENDER

- `ReactDOM.render(<Component/>, document.getElementById('root'))`: render `<Component/>` vào thẻ có id là root.

---

```js
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};
CurrentDate.defaultProps = {
  date: "unknown",
};
const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>;
};
List.propTypes = {
  tasks: PropTypes.array.isRequired,
};
class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date(),
    };
  }
  render() {
    const { date: tgian } = this.state;
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
        <h1>{tgian}</h1>
        <h3>What are you doing today?</h3>
        <List tasks={["Mow the lawn", "Walk the dog"]} />
      </div>
    );
  }
}
```

- `{props.date}`: props.date là một biến, nó sẽ được truyền vào component CurrentDate thông qua props.
- `date={Date()}`: truyền vào component CurrentDate một giá trị của biến date, giá trị này là một hàm Date().
- `CurrentDate.defaultProps`: nếu không truyền vào component CurrentDate một giá trị của biến date thì giá trị mặc định của nó là "unknown".
- `PropTypes.array.isRequired`: kiểm tra xem biến tasks có phải là một mảng hay không, nếu không phải thì sẽ báo lỗi.
- `this.state = {date: Date()}`: khởi tạo state date với giá trị là hàm Date().

---

### Virtual DOM - Real DOM

- `Virtual DOM`: là một bản sao của Real DOM, nó là một object JavaScript, nó có thể mô tả cấu trúc của Real DOM.
- `Real DOM`: là một cây DOM đầy đủ, nó có thể được thay đổi bởi JavaScript.
- Khi các thay đổi được thực hiện trên DOM, React sẽ tạo ra một Virtual DOM mới, sau đó React sẽ so sánh Virtual DOM mới với Virtual DOM cũ, và tìm ra sự khác biệt giữa chúng, cuối cùng React sẽ cập nhật Real DOM với những thay đổi đó. Điều này tăng hiệu suất của ứng dụng so với việc cập nhật Real DOM trực tiếp.

---

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: "React Rocks!",
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
```

- `setState()`: là một phương thức của React.Component, nó được sử dụng để cập nhật state của component, bản chất của nó là một hàm bất đồng bộ, nó nhận vào một object và một callback function, object này chứa các giá trị mới của state, callback function này sẽ được gọi sau khi state được cập nhật.
- `this.handleClick.bind(this)`: khi sử dụng `this.setState()` thì `this` sẽ không được trỏ tới component nữa, mà nó sẽ trỏ tới `undefined`, vì vậy chúng ta phải bind `this` vào trong hàm `handleClick()`.
- `bind`: là một phương thức của Function, nó được sử dụng để gắn một giá trị cho `this` của một hàm, nó nhận vào một giá trị và trả về một hàm mới.
- Nếu không sử dụng this bên trong handleClick thì có thể viết như sau:

```js
handleClick = () => {
  this.setState({
    name: "React Rocks!",
  });
};
```

- `handleClick = () => {}`: là một arrow function, nó sẽ không tạo ra một `this` mới, mà nó sẽ sử dụng `this` của outer scope.
- `arrow function`: là một hàm nặc danh, nó không có tên, nó được viết dưới dạng một biểu thức, nó không có `this`, `arguments`, `super`, `new.target`, và không thể được gọi bằng `new`.

---

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input,
    });
  }
  render() {
    return (
     <div>
      <GetInput input={this.state.input} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
      <Render render={this.state.submit} />
     </div>
    );
  }
}
class GetInput extends React.Component {
  constructor(props){
    super(props);
  }
  render (){
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.input}
            onChange={this.props.handleChange}
          />
          <button type="submit">Submit!</button>
        </form>
      </div>
    )
  }
}
class Render extends React.Component {
  constructor (props){
    super(props);
  }
  render (){
    return (
      <div>
        <h3>Render: {this.props.render}</h3>
      </div>
    )
  }
}
```
- ` event.preventDefault();`: ngăn chặn hành vi mặc định của một sự kiện, ví dụ như khi nhấn vào nút submit thì trình duyệt sẽ gửi một request đến server, nhưng chúng ta không muốn điều này xảy ra, vì vậy chúng ta sẽ ngăn chặn nó bằng cách sử dụng `event.preventDefault();`.
---
### LIFECYCLE METHODS
- `componentWillMount()`: được gọi trước khi component được render.
- `componentDidMount()`: được gọi sau khi component được render.
```js
componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
```
- phương thức trên sẽ được gọi sau khi component được render, sau đó nó sẽ đợi 2500ms và cập nhật lại state của component.

- `ShouldComponentUpdate()`: được gọi trước khi component được render, nó nhận vào hai tham số là `nextProps` và `nextState`, nó trả về một giá trị boolean, nếu trả về `true` thì component sẽ được render, nếu trả về `false` thì component sẽ không được render.
```js
shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    return nextState.activeUsers % 2 === 0
  }
```
- phương thức trên sẽ được gọi trước khi component được render, nó sẽ kiểm tra xem `nextState.activeUsers` có phải là số chẵn hay không, nếu là số chẵn thì nó sẽ trả về `true` và component sẽ được render, nếu không thì nó sẽ trả về `false` và component sẽ không được render.

---
### REDUX
- `Redux`: là một thư viện JavaScript, nó được sử dụng để quản lý state của ứng dụng, nó có thể được sử dụng với các thư viện khác như React, Angular, Vue, ...
- `Redux` có 3 thành phần chính là `store`, `action`, `reducer`.
- `store`: là nơi lưu trữ state của ứng dụng.
- `action`: là một object, nó chứa các thông tin về hành động mà chúng ta muốn thực hiện, ví dụ như thêm một item vào giỏ hàng, xóa một item khỏi giỏ hàng, ...
- `reducer`: là một function, nó nhận vào hai tham số là `state` và `action`, nó sẽ thực hiện các hành động mà chúng ta muốn thực hiện, ví dụ như thêm một item vào giỏ hàng, xóa một item khỏi giỏ hàng, ... và trả về một state mới.

```js
const ADD = "ADD";
const addMessage = (message) => {
  return {
    type: ADD,
    message: message,
  };
};
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};
const store = Redux.createStore(messageReducer);
```
- `ADD`: là một biến, nó chứa một chuỗi, nó được sử dụng để tránh việc gõ sai khi sử dụng action.
- `addMessage()`: là một function, nó nhận vào một tham số là `message`, nó trả về một object, object này chứa hai thuộc tính là `type` và `message`.
```js
store.subscribe(() => {
  const currentState = store.getState();
  console.log(currentState);
});
store.dispatch(addMessage("Hello World!"));
```
- `store.subscribe()`: là một function, nó nhận vào một function, function này sẽ được gọi mỗi khi state của store thay đổi.
---
### NOTES

```js
this.setState((state) => ({
  counter: state.counter + 1,
}));
```

- Bọc object trong dấu ngoặc đơn `()` để tránh `JavaScript` hiểu nhầm nó là một `block statement`.
