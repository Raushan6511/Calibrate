import React, {useEffect, useRef, useState, useMemo} from 'react';
import {FlatList, View} from 'react-native';
import FastImage from 'react-native-fast-image';

import {styles} from './esSwiper-styles';
import {RESIZE_MODE, SCREEN_WIDTH} from '../../common/constants';

interface CarouselItem {
  id: string;
  image: string;
}

interface IESSwiper {
  autoScroll?: boolean;
  carouselData:CarouselItem[]
  activeDotColor?:string
  inActiveDotColor?:string
  innerDot?:boolean
}

const ESSwiper: React.FC<IESSwiper> = (props) => {
  const {autoScroll = true,carouselData,activeDotColor,innerDot=false,inActiveDotColor}=props
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dotContainerStyle= innerDot?styles.innerDotContainer:styles.dotContainer

  const renderItem = ({item}: {item: CarouselItem}) => (
    <FastImage
      resizeMode={RESIZE_MODE.CENTER}
      source={{uri: item.image}}
      style={styles.image}
    />
  );
  //data: CarouselItem[], index: number
  const itemLayout = (data: any, index: number) => ({
    length: SCREEN_WIDTH,
    offset: SCREEN_WIDTH * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
    index: index,
  });

  const renderDotIndicators = useMemo(
    () => () =>
      carouselData.map((data, index) => (
        <View
          key={data.id}
          style={[
            styles.dot,
            activeIndex === index ? {...styles.activeDot,backgroundColor:activeDotColor}: {...styles.inActiveDot, backgroundColor:inActiveDotColor}
          ]}
        />
      )),
    [activeIndex],
  );

  const handleScroll = (event: {nativeEvent: {contentOffset: {x: number}}}) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / SCREEN_WIDTH;
    setActiveIndex(Math.round(index));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoScroll) {
      interval = setInterval(() => {
        if (activeIndex === carouselData.length - 1) {
          flatListRef.current?.scrollToIndex({
            index: 0,
            animated: true,
          });
          setActiveIndex(0);
        } else {
          flatListRef.current?.scrollToIndex({
            index: activeIndex + 1,
            animated: true,
          });
          setActiveIndex(prevIndex => prevIndex + 1);
        }
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [activeIndex, autoScroll]);

  return (
    <View >
      <FlatList
        data={carouselData}
        ref={flatListRef}
        getItemLayout={itemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={!autoScroll ? handleScroll : undefined}
      />
      <View style={dotContainerStyle}>{renderDotIndicators()}</View>
    </View>
  );
};

export default ESSwiper;
