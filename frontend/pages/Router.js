import React, { useContext } from 'react';
import { View,  Text } from 'react-native';
import { RouterContext } from '../context/RouterContext';
import { Context } from '../context/Context';
import Weight from './Weight';
import WeightList from '../components/Lists/Weight';
import WeightManual from '../components/ManualInput/Weight';
import Menu from '../components/Menu/Menu';
import Auth from './Auth';

const Router = () => {
  const {token} = useContext(Context)
  const { router, setRouter } = useContext(RouterContext);

  const routes = [
   /* { name: 'Auth', label: 'Auth' },
    { name: 'Weight', label: 'Weight' },*/
    { name: 'WeightList', label: 'Weight List' },
    { name: 'WeightManual', label: 'Add Weight Manually' },
    /*{ name: 'Measurement', label: 'Measurement' },
    { name: 'Image', label: 'Image' },
    { name: 'ImageManual', label: 'Add Image Manually' },
    { name: 'MeasurementManual', label: 'Add Measurement Manually' },
    { name: 'MeasurementList', label: 'Measurement List' },*/
  ];

  const getRouteComponent = () => {
    switch (router.name) {
      case 'Auth':
        return <Auth />;
      case 'Weight':
        return <Weight />;
      case 'WeightList':
        return <WeightList />;
      case 'WeightManual':
        return <WeightManual />;
      default:
        return null;
    }
  };

  if (token == null) {
    return <Auth />;
  }

  return (
    <View style={{ flex: 1 }}>
      {getRouteComponent()}
      <Menu setRouter={setRouter} routes={routes} />
    </View>
  );
};

export default Router;
