import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Index from "./containers/Index";
import configureStore from "./store/configureStore"

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Index name="" />
  </Provider>,
  document.getElementById('app') as HTMLElement
);       