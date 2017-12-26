//----------------------------
//index.tsx
import * as React from "react";
import * as ReactDOM from "react-dom";

class Hello extends React.Component<any, any> {

	state:any = {
		options: [],
		answers:[]
	}

	handleChange(e:any){
		let index = parseInt(e.target.dataset.index)
		this.state.options[index].option=e.target.value
		this.setState({options:this.state.options})
	}

	add(){
		this.setState({
			options: this.state.options.concat({
				option: "",
				checked:false
			})
		})
	}

	handleCheck(e:any){
		let index = parseInt(e.target.dataset.index)
		if(e.target.checked){
			this.state.options[index].checked=true
		}else{
			this.state.options[index].checked=false
		}
		this.setState({options: this.state.options})
	}

	updateAnswers(index:any){

		console.log(document.querySelector('input[type=checkbox]:eq('+index+')'), "$$$$");
		// if()

		this.state.answers[index] = this.state.options[index]
	}


	remove(index:any){
		this.state.options.splice(index,1)
		this.setState({options: this.state.options})
	}

	getAnswers(){
		console.log("getting answers...", "$$$$");
		let answers= this.state.options.filter((option:any)=>{
			return option.checked
		})

		this.setState({answers: answers})
	}

    render() {
        return <div>
   			{this.state.options.map((option:any, index:any)=>{
            	return (
            		<div key={index}>
	            		<input type="checkbox" onChange={(e)=>this.handleCheck(e)} data-index={index}/>
	            		<input type="text" onChange={(e)=>this.handleChange(e)} data-index={index} value={option.option}/>
	            		<button onClick={()=>this.remove(index)}>Remove</button>
            	 	</div>
            	 )
            })}
   			<hr />

   			<button className="btn btn-sm btn-danger" onClick={()=>this.add()}>Add +</button>

   			<hr />

   			<h3>ANswers</h3>

   			<button onClick={()=>this.getAnswers()}>Answers</button>

   			{this.state.answers.map((answer:any, index:any)=>{

            	return (<li key={index}>{answer.option}</li>)

            })}

        </div>;
    }
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);