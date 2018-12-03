import React, { Component } from 'react';
import "placeholder-loading/src/scss/placeholder-loading.scss";

export default class Placeholder extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: null
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                url : 'https://fsmedia.imgix.net/07/05/10/11/b2e4/4575/937c/7b9a134d6ae4/5pikachu-1gif.gif?rect=0%2C0%2C1000%2C500&auto=format%2Ccompress&w=650&gifq=35'
            })
        }, 3000)
    }
    render(){
        return(
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'60vw', height:'400px'}}>
                {this.state.url?<img src={this.state.url} style={{width:'100%'}}/>:
                <div class="ph-item" 
                    style={{width:'100%',
                            margin:0,
                            padding:0,height:'inherit',
                            border:0}}>
                    <div className="ph-col-12" style={{margin:0,padding:0,height:'inherit'}}>
                        <div className="ph-picture" style={{margin:0,padding:0,height:'inherit'}}/>
                    </div>
                </div>
                }
            </div>
        )
    }
}