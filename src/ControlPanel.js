import React, { Component } from 'react'
import Counter from './Counter'

class ControlPanel extends Component {
    constructor(props){
        super(props)
        this.initValues = [0, 10, 20]
        let initSum = this.initValues.reduce((a, b) => a + b, 0)
        this.state = {
            sum: initSum
        }
        this.onCountUpdate = this.onCountUpdate.bind(this)
    }

    componentDidMount(){
        console.log('controlPanel-didMont')
    }

    componentWillReceiveProps(){
        console.log('CONTROL-receiveProps')
    }

    componentDidUpdate(){
        console.log('update - controlPanel')
    }

    onCountUpdate(newValue, previewValue){
        const valueChange = newValue - previewValue
        this.setState({
            sum: this.state.sum + valueChange
        })
    }

    render(){
        console.log('render-controlPanel')
        const { sum } = this.state
        const { initValues } = this
        return (
            <div>
                <Counter onUpdate={this.onCountUpdate} caption="First" initValue={initValues[0]}/>
                <Counter onUpdate={this.onCountUpdate} caption="Second" initValue={initValues[1]}/>
                <Counter onUpdate={this.onCountUpdate} caption="Third" initValue={initValues[2]}/>
                <h3 onClick={()=>this.forceUpdate()}>update</h3>
                <h2>{ sum }</h2>
            </div>
        )
    }
}

export default ControlPanel