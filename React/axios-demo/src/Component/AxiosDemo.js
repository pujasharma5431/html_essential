import React from 'react'
import axios from 'axios'

export default class AxiosDemo extends React.Component {
   
            state={
                persons:[]
            }
       
        componentDidMount(){

            axios.get(`https://jsonplaceholder.typicode.com/users`)

            .then(
                res=>{
                    console.log(res.data)
                    const persons=res.data;
                    this.setState({persons})
                }
            )

        }
        render() {
            return (
                <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
)
    }
}
