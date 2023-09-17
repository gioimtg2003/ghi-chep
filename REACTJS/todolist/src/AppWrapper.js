import {store} from './toDoReducer.js';
import {Provider} from 'react-redux';
import React from 'react';
import App from './App.js';
class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}
export default AppWrapper;