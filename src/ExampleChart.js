import { Chart } from 'react-google-charts';
import React from 'react';
import { connect } from 'react-redux'



class ExampleChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                backgroundColor:"transparent",
                datalessRegionColor: 'green',
                width: 340,
                region: 'world',
                displayMode: 'markers',
                sizeAxis: { minValue: 0, maxValue: 10 },
                colorAxis: {colors: ["brown", "black"]},
                legend:"none"


            },
        };
    }
    render() {
        return (
            <Chart
                chartType="GeoChart"
                data={ [
                    ['City','Area City'],
                    [this.props.testStore.city1[this.props.testStore.city1.length-1],2],
                    [this.props.testStore.city2[this.props.testStore.city2.length-1],3]


                    ]}
                options={this.state.options}
                graph_id="ScatterChart"
                width="100%"
                height="400px"
                legend_toggle
            />
        );
    }
}
export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(ExampleChart);