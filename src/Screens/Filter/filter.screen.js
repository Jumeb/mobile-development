import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Slider from '@react-native-community/slider';

import ThirdButton from '../../Component/Button-three/thirdButton.component';
import ButtonTwo from '../../Component/Button-two/button-two.component';
import Button from '../../Component/Button/button.component';
import styles from './filter.style';
import {discounts, offers, brands} from '../../../resources/dummy/dummydata';
import colorTheme from '../../../resources/Color/colorTheme';

const Filter = () => {
  const authenticate = () => {
    Actions.push('UserProfile');
  };

  const [selected, setSelected] = useState(1);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={[styles.signInBoard, styles.whiteBgrd]}>
        <Text style={styles.option}>FILTER</Text>
        <Text style={styles.welcome}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </View>
      <View style={styles.sectionFilter}>
        <Text style={styles.categoryFilter}>Pricing</Text>
        <View style={styles.categoryButtonsLayout}>
          <Text style={styles.priceIndicator}>Min Price</Text>
          <Text style={styles.priceIndicator}>Max Price</Text>
        </View>
        <View style={styles.categoryButtonsLayout}>
          <Slider
            style={styles.priceSlider}
            maximumValue={20000}
            minimumValue={1500}
            step={2000}
            value={5000}
            minimumTrackTintColor={colorTheme.dark_grey_color}
            maximumTrackTintColor={colorTheme.secondary_color}
            thumbTintColor={colorTheme.primary_color}
          />
        </View>
      </View>
      <View style={styles.sectionFilter}>
        <Text style={styles.categoryFilter}>Sort By</Text>
        <View style={styles.categoryButtonsLayout}>
          <ButtonTwo
            filterName="Bottom - Top"
            id={1}
            selected={selected}
            filterSelected={(id) => setSelected(id)}
          />
          <ButtonTwo
            filterName="Top - Bottom"
            id={2}
            selected={selected}
            filterSelected={(id) => setSelected(id)}
          />
        </View>
      </View>
      <View style={styles.sectionFilter}>
        <Text style={styles.categoryFilter}>Brand</Text>
        <View style={styles.categoryButtonsLayout}>
          {brands.map((brand, key) => (
            <ThirdButton category={brand.category} key={key} id={brand.id} />
          ))}
        </View>
      </View>
      <View style={styles.sectionFilter}>
        <Text style={styles.categoryFilter}>Offers</Text>
        <View style={styles.categoryButtonsLayout}>
          {offers.map((offer, key) => (
            <ThirdButton category={offer.category} key={key} id={offer.id} />
          ))}
        </View>
      </View>
      <View style={styles.sectionFilter}>
        <Text style={styles.categoryFilter}>Discounts</Text>
        <View style={styles.categoryButtonsLayout}>
          {discounts.map((discount, key) => (
            <ThirdButton
              category={discount.category}
              id={discount.id}
              key={key}
            />
          ))}
        </View>
      </View>
      <View style={styles.sectionFilter}>
        <Button action="SUBMIT" userAuth={() => authenticate()} />
      </View>
    </ScrollView>
  );
};

export default Filter;
