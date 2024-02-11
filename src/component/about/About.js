import React from 'react'
import UserCls from './UserCls'
import UserFunc from './UserFunc'

class About extends React.Component{

  constructor(props){
    super(props)

    console.log("parent constructor")

  }

  componentDidMount(){
    console.log("parent componentDidMounts")
  }

  render(){
    console.log("parent render")
    return (
      <div>
        {/* About func */}
        {/* <UserFunc name="ajay" /> */}
        About cls
        <UserCls name="ajay" />
      </div>
  
    )
  }
}

export default About

