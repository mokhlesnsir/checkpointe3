import React, {Component} from "react";

class IdBox extends Component{
constructor(props){
    super(props);
}
	render() {
        

		return(
        <div className="IDBox" style={ { display:"inline-block", marginLeft:"10px", marginRight:"10px" , backgroundColor : this.props
        .backgroundColor} }  >
        <img className="" style={ {width:"250px", height:"250px"} } src={this.props.image} alt="" /> 
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        </div>
        
    
            
        );
	}
}

export default IdBox;