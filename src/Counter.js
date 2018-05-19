import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: props.initValue
        }
        this.onIncrease = this.onIncrease.bind(this)
        this.onDecrease = this.onDecrease.bind(this)
        this.updateCounter = this.updateCounter.bind(this)
    }
    onIncrease () {
        // console.log(this)
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.updateCounter(true)
    }
    onDecrease () {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.updateCounter(false)        
    }
    componentDidMount(){
        console.log('didMount',this.props.caption)
    }
    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption !== this.props.caption 
            || 
            nextState.count !== this.state.count
        )
    }
    componentDidUpdate(){
        console.log('did-update',this.props.caption)        
    }
    updateCounter(isAdd){
        const preValue = this.state.count
        const newValue = isAdd ? preValue + 1 : preValue - 1
        this.setState({
            count: newValue
        }, () => {
        })
        this.props.onUpdate(newValue, preValue)
        
    }
    render(){
        const { count } = this.state
        const { caption } = this.props
        console.log('render', caption)        
        return (
            <div style={{padding: 20}}>
                <span><button onClick={this.onIncrease}>+</button></span>
                <span><button onClick={this.onDecrease}>-</button></span>
                <span>{ caption } { count }</span>
            </div>
        )
    }
}

Counter.defaultProps = {
    initValue: 0,
    onUpdate: x => x
}

export default Counter