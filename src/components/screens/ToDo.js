import React,{Component} from 'react'
import {ReactComponent as Delete } from "../../assets/delete.svg";
import {ReactComponent as Revert } from "../../assets/revert.svg";
import {ReactComponent as Tick } from "../../assets/tick-green.svg";
class ToDo extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
               {
                id:1,
                title:"Nah", 
               }
                
            ],
            itemsc:[
              {id:2,
                title:"gh",
              }
            ],
            input:"",
        };
        this.idgen=this.state.items.length + this.state.itemsc.length; 
        }
        addIncomplete = (id)=> {
            let a = this.state.itemsc.filter((item)=> item.id === id)  
        this.setState({items:[...this.state.items,a[0]],})
        this.removeItems(id);
        }
        removeItems = (id) => {
            let new_items = this.state.itemsc.filter((item)=>item.id !== id);
            this.setState({
                itemsc:new_items
            })
        }
        RenderComplete = ()=> {
            return this.state.itemsc.map((item)=> (
                <li className='green' key={item.id}>
                <Tick className="tick-icon" />
                <span className="circle"></span>
                <p>{item.id},{item.title}</p>
                <Revert className="revert-icon" onClick={()=> this.addIncomplete(item.id)} />
                <Delete className="delete-icon" onClick={()=> this.removeItems(item.id)} />
            </li>
            ))
        }
        addComplete = (id)=> {     
         let a = this.state.items.filter((item)=> item.id === id)  
        this.setState({itemsc:[...this.state.itemsc,a[0]],})
        this.removeItem(id);
            
        }
        removeItem = (id) => {
            let new_items = this.state.items.filter((item)=>item.id !== id);
            this.setState({
                items:new_items
            })
        }
        UpdateItem = (e)=> {
            e.preventDefault();
            this.idgen=this.idgen+1;
           let newitem ={
                    id:this.idgen,
                    title:this.state.input,
                }
           if(this.state.input){
           this.setState({
            items:[...this.state.items,newitem],
            input:"",
           })
        }
        }
        RenderTo = () => {
            return this.state.items.map((item)=>  (
                <li key={item.id}>
                <span className="circle" onClick={()=> this.addComplete(item.id)}></span>
                <p>{item.id},{item.title}</p>
                <Delete className="delete-icon" onClick={()=> this.removeItem(item.id)} />
                </li>
            ))
        }
        render(){
  return (
    <>
    <div className='box'>
        <h1>ToDo List</h1>
        <h3>Things To Be Done</h3>
        <ul className='top'>
           {this.RenderTo()}
        </ul>
        <form>
            <input type="text"  name="listname" id='list-name' placeholder='Type new task...' value={this.state.input} onChange={(e)=> this.setState({input:e.target.value})} />
            <button onClick={(e)=> this.UpdateItem(e)} >Add New</button>
        </form>
        <h3>Completed</h3>
        <ul>
            {this.RenderComplete()}
        </ul>
    </div>
    </>
  )
}
}
export default ToDo;