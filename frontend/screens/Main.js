import React, { useContext, useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import WeightView from "../components/SingleView/WeightView";
import { Context } from "../context/Context";
import MainBanner from "../components/Banner/MainBanner";
import AddWeight from "../components/Weight/AddWeight";

const Main = () => {
  const { weights } = useContext(Context);

  const [weightsLength, setWeightsLength] = useState(weights.length);

  useEffect(() => {
    setWeightsLength(0)
    console.log('weights cahnged')
    setWeightsLength(weights.length);
  }, [weights]);

  return (
    <ScrollView>
      <MainBanner />
      {/*<Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "left",
          paddingLeft: 8,
          paddingBottom: 8,
        }}
      >
        Latest Weights
      </Text>*/}
      {weightsLength !== 0 ? (<>
        <WeightView
          data={weights}
          title={"Body Weight"}
          property={"bodyWeight"}
          key={"bodyWeight"}
        />
        <WeightView
          data={weights}
          title={"Body Fat"}
          property={"bodyFat"}
          key={"bodyFat"}
        />
        <WeightView
          data={weights}
          title={"Muscle"}
          property={"muscle"}
          key={"muscle"}
        />
        <WeightView
          data={weights}
          title={"Hydration"}
          property={"hydration"}
          key={"hydration"}
        />
      </>) : null}
      
      <View style={{height: 60}}></View>
    </ScrollView>
  );
};

export default Main;