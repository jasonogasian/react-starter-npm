import React, { Component } from 'react';
import '../../style/dist/components/MyComponent.css';


class MyComponent extends Component {

  constructor(props) {
    // Call the base class' constructor with props
    super(props);
    
    // Set the component's initial state
    this.state = {
      title: 'Child Component'
    }
  }

  componentDidMount() {
    alert('MyComponent mounted!');

    // See this change after closing the alert box
    this.setState({ title: this.state.title+'!' });
  }

  render() {
    return (
      <section className="MyComponent">
        <h3>{ this.state.title }</h3>
        <h5>{ this.props.subtitle || 'default' }</h5>
      </section>
    );
  }
}

export default MyComponent;
