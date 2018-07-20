import React,{Component} from 'react'


export default class Content extends Component{
    constructor(props){
        super(props)

        this.state = {}
    }

    render(){
        return(
            <div className="container content" style={{textAlign:'center'}}>
                <h1>CONTENT</h1>
            </div>
        )
    }
}