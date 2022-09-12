import React from 'react'
import BaseHoc from '../layouts/BaseHoc';

class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Rohit",
            age: 20,
        };

        console.log("Constructor:");
    }

    componentDidMount() {
        // It is used for patching the data from the database
        console.log("Component did mount:");
    }

    componentDidUpdate() {
        console.log("Component did update?")
    }

    componentWillUnmount() {
        console.log("component will unmount:")
    }
    render() {
        console.log("Render:");
        return (
            <div>
                <p>This is Class Component</p>
                <button onClick={() => this.setState({
                    ...this.state,
                    age: this.state.age + 1,
                })}>Add 1 to Age</button>
                <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);