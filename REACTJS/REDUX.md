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

- `Object.assign({}, oldObject, {nameUser: "Giới"})`: trả về một object mới, object này chứa các thuộc tính của `oldObject` và một thuộc tính mới là `nameUser` có giá trị là "Giới".

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data))

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```
- `ReduxThunk.default`: là một middleware, nó được sử dụng để xử lý các hàm bất đồng bộ, nó nhận vào một hàm, hàm này sẽ được gọi với hai tham số là `dispatch` và `getState`, `dispatch` được sử dụng để gửi action đến store, `getState` được sử dụng để lấy state của store.

---
### REACT-REDUX
- `React-Redux`: là một thư viện JavaScript, nó được sử dụng để kết nối giữa `React` và `Redux`.
- `Provider`: là một component, nó nhận vào một tham số là `store`, `store` này sẽ được truyền xuống cho tất cả các component con của `Provider`.
- `connect()`: là một function, nó nhận vào hai tham số là `mapStateToProps` và `mapDispatchToProps`, nó trả về một function, function này nhận vào một component, component này sẽ được kết nối với `store`.
- `mapStateToProps`: là một function, nó nhận vào một tham số là `state`, nó trả về một object, object này chứa các thuộc tính của `state`.
- `mapDispatchToProps`: là một function, nó nhận vào một tham số là `dispatch`, nó trả về một object, object này chứa các function, các function này sẽ được gọi khi chúng ta muốn gửi một action đến store.

```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message)=>{
            dispatch(addMessage(message))
        }
    }
}
```
- `submitNewMessage()`: là một function, nó nhận vào một tham số là `message`, nó gọi hàm `addMessage()` và truyền vào `message` nhận được, sau đó nó gửi action đến store.

```js
const mapStateToProps = (state) => {
    return {
        messages: state
    }
}
```
- `messages`: là một thuộc tính của component, nó chứa state của store.


```js
const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
```
 ---

 ```js
 // Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState(() => ({
      input: '',
      
    }));
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div> 
    );
  }
};

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};
 ```

 - Lúc này messages đã được ánh xạ vào props của component Presentational, nên ta có thể sử dụng nó như sau:
 ```js
  <ul>
    {this.props.messages.map( (message, idx) => {
        return (
          <li key={idx}>{message}</li>
        )
      })
    }
  </ul>
  ```

  - Lúc này submitNewMessage đã được ánh xạ vào props của component Presentational, nên ta có thể sử dụng nó như sau:
  ```js
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState(() => ({
      input: ''
    }));
  }
  ```
  