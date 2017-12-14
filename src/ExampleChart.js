import { Chart } from 'react-google-charts';
import React from 'react';
import { connect } from 'react-redux'



class ExampleChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                backgroundColor: 'transparent',
                datalessRegionColor: '#DDDDDD',
                defaultColor: '#DDDDDD',
                width: 540,
                region: 'world',
                displayMode: 'regions',
                sizeAxis: { minValue: 0, maxValue: 10 },
                legend:"none",
                colorAxis: {colors: ['#95B8DA']},



            },
        };
    }
    render() {
        return (
            <Chart
                chartType="GeoChart"
                data={ [
                    ['City','Color'],
                    [this.props.testStore.city1[this.props.testStore.city1.length-1],2],
                    [this.props.testStore.city2[this.props.testStore.city2.length-1],2]


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