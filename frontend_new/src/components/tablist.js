import React,{Component} from 'react';
import Itab from './indtab';
import "../App.css";

class Tablist extends Component{
    render(){
        console.log("id is "+this.props.activetab)

        return this.props.tabs.map((tab) => (
            <Itab key={tab.id} out={tab} activetab={this.props.activeTab} ctab={this.props.ctab}/>));
        }
}

export default Tablist;