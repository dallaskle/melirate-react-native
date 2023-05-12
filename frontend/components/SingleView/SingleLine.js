import React from 'react'
import { Dimensions } from 'react-native';
import {LineChart} from 'react-native-chart-kit'

const SingleLine = ({graphData}) => {

    return(
        <LineChart
            data={{
                labels: graphData[0],
                datasets: [
                    {
                    data: graphData[1]
                    }
                ],
            }}
            width={Dimensions.get("window").width - 30} // from react-native
            height={100}
            yAxisLabel=""
            yAxisSuffix=" kg"
            yAxisInterval={2} // optional, defaults to 1
            chartConfig={{
                backgroundGradientFrom: "#f2f2f2",
                backgroundGradientFromOpacity: 1,
                backgroundGradientTo: "#f2f2f2",

            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
                borderRadius: 16,
                margin: 40,
                padding: 40
            },
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#FFFFFF"
            }
            }}
            bezier
            style={{
            marginVertical: 4,
            borderRadius: 16,
            padding: 4
            }}
        />
    )
}

export default SingleLine;