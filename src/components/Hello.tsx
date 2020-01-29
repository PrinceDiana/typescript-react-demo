import * as React from "react";
import { Component, Fragment, MouseEvent, ReactNode } from "react";

// 使用泛型对props进行类型定义
interface IProps {
    compiler: string;
    framework: string;
}

interface IState {
    count: number;
}

// 'IProps' describes the shape of props.
// Tip: State is never set so we can use the '{}' type.
class Hello extends Component<IProps, IState> {
    public state = {
        count: 1
    };

    public changeCount = (event: any): any => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <>
                <h1>
                    Hello from {this.props.compiler} and {this.props.framework}!
                </h1>
                <p>State: {this.state.count}</p>
                <button onClick={this.changeCount}>Change Count</button>
            </>
        );
    }
}

export default Hello;
