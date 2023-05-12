import React, { useState, useContext } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { Context } from '../../context/Context';
import { RouterContext } from '../../context/RouterContext';
import Button from '../Button'
import { MELIRATE_GRAY, MELIRATE_LIGHTEST_GRAY } from '../../design/Colors';

const Menu = ({ children, routes }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const panelHeight = routes.length * 62 + 80; // set the height of the panel here
  const translateY = useState(new Animated.Value(panelHeight))[0];


  const { router, updateRouter } = useContext(RouterContext);

  const handleTogglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
    Animated.timing(translateY, {
      toValue: isPanelOpen ? panelHeight : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleClick = (r) => {
    handleTogglePanel()
    updateRouter(r)
  };


  return (
    <>
      
      <View style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: 'green', width: '100%'}}>
        <Animated.View
          style={{
            position: 'absolute', bottom: 0, left: 0, width: '100%',
            transform: [{ translateY }],
            backgroundColor: 'white',
            height: panelHeight,
            padding: 20,
            paddingBottom: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
            {children}

            <View style={{ flexDirection: 'column' }}>
                {routes.map(r => (
                    <Button key={r.name} text={r.label} onPress={() => handleClick(r)} />
                ))}
            </View>

        </Animated.View>
        

        <TouchableOpacity
          onPress={handleTogglePanel}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '20%',
            height: 80,
            backgroundColor: MELIRATE_LIGHTEST_GRAY,
            borderColor: MELIRATE_GRAY,
            borderWidth: .5,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            borderTopLeftRadius: 100,
            
          }}
        >
          <Text style={{
            color: 'white',
            textShadowColor: 'black',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 2,
            }}>
            {isPanelOpen ? 'Close' : 'Open'}
            </Text>
        </TouchableOpacity>
        
      </View>
    </>
  );
};

export default Menu;
