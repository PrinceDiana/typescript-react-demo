import * as React from "react";
import * as ReactDOM from "react-dom";
import { Fragment } from "react";
import Hello from "./components/Hello";

ReactDOM.render(
    <Fragment>
        <Hello compiler="TypeScript" framework="React" />
    </Fragment>,
    document.getElementById("root")
);
