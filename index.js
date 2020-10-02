import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Axios from 'axios';
const development = true;

let url = "/gem";
Axios.get(url).then(function(data) {
    console.log(data)
    ReactDOM.render(<App albumId={data.data.albums.items[0].id} />, document.getElementById("root"));
}).catch(function() {
    ReactDOM.render(<App albumId={null} status="Error loading"></App>, document.getElementById("root"))
});

ReactDOM.render(<App albumId={null} status="Loading..."/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
