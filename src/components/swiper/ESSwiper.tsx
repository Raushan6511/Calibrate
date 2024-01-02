import React, {useEffect, useRef, useState, useMemo} from 'react';
import {FlatList, Image, View, Dimensions} from 'react-native';
import {styles} from './esSwiper-styles';
import {carouselData} from './constants';

interface CarouselItem {
  id: string;
  image: string;
}

interface IESSwiper {
  autoScroll?: boolean;
}

const ESSwiper: React.FC<IESSwiper> = ({autoScroll = true}) => {
  const flatListRef = useRef<FlatList<CarouselItem>>(null);
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({item}: {item: CarouselItem}) => (
    <Image
      source={{uri: item.image}}
      style={{height: 200, width: screenWidth}}
    />
  );

  const renderDotIndicators = useMemo(
    () => () =>
      carouselData.map((data, index) => (
        <View
          key={data.id}
          style={[
            styles.dot,
            activeIndex === index ? styles.activeDot : styles.inActive,
          ]}
        />
      )),
    [activeIndex],
  );

  const handleScroll = (event: {nativeEvent: {contentOffset: {x: number}}}) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / screenWidth;
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
    <View>
      <FlatList
        data={carouselData}
        ref={flatListRef}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={!autoScroll ? handleScroll : undefined}
      />
      <View style={styles.dotContainer}>{renderDotIndicators()}</View>
    </View>
  );
};

export default ESSwiper;
