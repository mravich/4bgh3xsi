import React,{Component} from 'react'
import Table from '../table'

export default class Content extends Component{
    constructor(props){
        super(props)

        this.state = {
        }
    }

    render(){
      console.log("tableName:", this.props.tableName)
        return(
            <div className="container content" style={{textAlign:'center'}}>
                <h1>CONTENT</h1>
                {this.props.tableName ? (
                  <Table property={this.props.tableName}/>
                ): (
                  null
                )}
            </div>
        )
    }
}
