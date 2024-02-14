import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vaishnav'
      }
      console.log('LifeCycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount ')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState ){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    
  render() {
        console.log('LifecycleB render')
    return (<div> Lifecycle B</div>)
  }
}

export default LifeCycleB
