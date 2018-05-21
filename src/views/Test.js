import React, { Component, PropTypes } from 'react';

class Test extends Component {
    componentDidMount(){
        console.log('test', this.context.store)
        console.log('test2', this.context.store.getState())
    }
    render(){
        return (
            <div>abc</div>
        )
    }
}

Test.contextTypes = {
    store: PropTypes.object
}

export default Test