import React,{Component} from 'react'

export default function(){
    return class extends Component{
        componentDidMount(){
            this.scrollElement=document.getElementById('#scroll-element')||document.body;
            this.scrollElement.addEventListener('onscroll',this._scrollEventHandler);
        }
        _scrollEventHandler=()=>{
            console.log('scroll');
        }
        componentWillUnmount(){
            this.scrollElement.removeEventListener('onscroll',this._scrollEventHandler);
        }
        render(){
            const {loadHandler,...reset}=this.props;
            <ComposedComponent {...reset}/>
        }
    }
}