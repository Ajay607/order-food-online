import React from "react"

class UserCls extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: ""
            }
        }
    }
    
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ajay607")
        const json = await data.json();
        console.log("json", json)
        this.setState({
            userInfo: json
        })
      }

      render() {
        const {name, location, avatar_url} = this.state.userInfo
        return (
            <div>
                <img src={avatar_url} style={{width: "100px"}} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: ajaypic897@gmail.com</h2>
            </div>
        )
    }
}
export default UserCls

// A class based component is a class which extends React.component and it has a render method
// which returns some piece of JSX