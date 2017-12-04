
import React from 'react';
import { connect } from 'react-redux'

class Result extends React.Component {

    render() {
        var a = this.props.testStore.time1[this.props.testStore.time1.length-1];
        var b = this.props.testStore.time2[this.props.testStore.time2.length-1];
        if(this.props.testStore.time1.length > 0 && this.props.testStore.time2.length>0){
            if (a-b>0) {var sum = "Time Difference  :"+   "+"+(a-b) + "  hour/hours"}
            else if(a-b<0){  sum = "Time Difference  :"+(a-b) + "  hour/hours"}
            else if(a-b ==0){  sum = "Time Difference" +":0" + "hour/hours"}
        }
        return <span>{sum}</span>


    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(Result);