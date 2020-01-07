//SmartComponent is a Class Component, built from JavaScript classes, and extends the Component Class that comes from the React Library. For a Class Component to work, it must AT LEAST have: an import to React(and preferrably Component), a JavaScript Class that extends Component, a render method for rendering display, and a default export to make it available to all other components that need it.
import React, {Component} from 'react';
import DumbComponent from './DumbComponent';

class SmartComponent extends Component {
    constructor(){
        super();
        //State is where you will store data that you use in the component. Similar to how variables are used for JavaScript in the DOM
        this.state = {
            count: 0,
            userInput: ''
        }
        //When building prototype methods, you have to give them the context of the component. This can be done by a binding statement, like the one below, or by using an arrow function in the event(line 32).
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount(){
        this.setState({count: this.state.count + 1})
    }

    handleInput(val){
        this.setState({userInput: val})
    }

    render(){
        return (
            //Remember that this is NOT HTML, but JSX
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
                <h1>{this.state.userInput}</h1>
                <input value={this.state.userInput} onChange={(e) => this.handleInput(e.target.value)}/>
                <DumbComponent />
            </div>
        )
    }
}

//ALWAYS include a default export
export default SmartComponent;