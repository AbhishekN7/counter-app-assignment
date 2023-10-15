import React, { Component } from "react";
import ClassButton from "./ClassButton";
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 });
        } else {
            alert("You cannot decrement below 0");
        }
    };

    reset = () => {
        this.setState({ count: 0 });
        alert("Count Reset Successful!!");
    }
    render() {
        return (
            <div className="main-wrap" >
                <p className="main-heading">Counter Application Using Class Components:</p>
                <p className="count-heading">Count: {this.state.count}</p>
                <div className="btn-wrap">
                    <ClassButton functionType={this.increment} type={"Increment"} />
                    <ClassButton functionType={this.decrement} type={"Decrement"} />
                </div>
                <ClassButton functionType={this.reset} type={"Reset"} />
            </div>
        )
    }
}

export default ClassCounter;