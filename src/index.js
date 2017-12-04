import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ExampleChart from './ExampleChart'
import Autocomplete from 'react-google-autocomplete';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Table from "./Table"
import Result from "./Result"

const initialState = {
    city1: [

    ],
    city2: [

    ],
    time1:[
    ],
    time2:[
    ]
};


const store = createStore(location,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
function location(state = initialState, action) {
    if (action.type === 'city1') {
        return {
            ...state,
            city1: [...state.city1, action.location1]

        }}
        else if  (action.type === 'city2') {
        return {
            ...state,
            city2: [...state.city2, action.location2]

        }}
    else if  (action.type === 'time1') {
        return {
            ...state,
            time1: [...state.time1, action.time1]

        }}
    else if  (action.type === 'time2') {
        return {
            ...state,
            time2: [...state.time2, action.time2]

        }}
    return state;
}


ReactDOM.render(
    <Provider store={store}>
        <ExampleChart />
    </Provider>,
    document.getElementById('chart')
);

ReactDOM.render(<Autocomplete
    placeholder="CITY 1"
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
        store.dispatch({ type: 'city1', location1:place.name });
        geocodeByAddress(place.name)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                var timezoner = require('timezoner');
                timezoner.getTimeZone(
                    latLng.lat,
                    latLng.lng,
                    function (err, data) {
                        if (true) {
                            var targetDate = new Date()
                            var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
                            var output = data
                            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
                            var localdate = new Date(timestamp * 1000 + offsets);
                            var a = document.getElementById('time_zone1')
                            var b = localdate.toLocaleString().slice(12,-3)
                            var result = +(b.split(':').splice(0,1).join())
                                a.innerHTML ="<div class='span'>Today</div>" + b
                            store.dispatch({ type: 'time1', time1:result })
                            ReactDOM.render(
                                <Table time={result}/>,
                                document.getElementById("table")
                            )
                            }


                    }
                );
            })

    }}
    types={['(cities)']}
/>, document.getElementById('input1'));

ReactDOM.render(<Autocomplete
    placeholder="CITY 2"
    style={{width: '90%'}}
    onPlaceSelected={(place) => {
        store.dispatch({ type: 'city2', location2:place.name });
        geocodeByAddress(place.name)
            .then(results => getLatLng(results[0]))
            .then(latLng => {

                var timezoner = require('timezoner');
                timezoner.getTimeZone(
                    latLng.lat,
                    latLng.lng,
                    function (err, data) {
                        if (true) {
                            var targetDate = new Date()
                            var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60
                            var output = data
                            var offsets = output.dstOffset * 1000 + output.rawOffset * 1000;
                            var localdate = new Date(timestamp * 1000 + offsets);
                            var a = document.getElementById('time_zone2')
                            var b = localdate.toLocaleString().slice(12,-3)
                            var result = +(b.split(':').splice(0,1).join())
                            a.innerHTML ="<div class='span'>Today</div>" + b
                            store.dispatch({ type: 'time2', time2:result })
                            ReactDOM.render(
                                <Table time={result}/>,
                                document.getElementById("table2")
                            )
                        }

                    }
                );
            })

    }}
    types={['(cities)']}
/>, document.getElementById('input2'));



    ReactDOM.render(
        <Provider store={store}>
            <Result />
        </Provider>,
        document.getElementById('result')
    );





