import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/components';
import store from 'app/store/store';

import 'css/main.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-root')
);
