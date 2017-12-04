
import React from 'react';
import "./Table.css"
class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <td className={"z"+(this.props.time -8)}>{this.props.time -8 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time -7)}>{this.props.time -7 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time -6)}>{this.props.time -6 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time -5)}>{this.props.time -5 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time - 4)}>{this.props.time - 4 +":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time - 3)}>{this.props.time -3 +":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time -2)}>{this.props.time-2 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time -1)}>{this.props.time - 1 + ":00"}</td>
                </tr>
                <tr className={"z"+this.props.time}>
                    <td>{this.props.time + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time +1)}>{this.props.time + 1 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time +2)}>{this.props.time + 2 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time +3)}>{this.props.time +3 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time +4)}>{this.props.time + 4 + ":00"}</td>
                </tr>
                <tr>
                    <td className={"z"+(this.props.time +5)}>{this.props.time +5 + ":00"}</td>
                </tr>

            </table>
        )
    }
}
        export default Table