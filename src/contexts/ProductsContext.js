import { createContext, useContext, useState } from 'react';

import { products } from '../data/mobileAccessories/mobileAccessoriesData';
import {
  kitchenDishes,
  sofaChair,
  softChairs,
  smartWatches,
  kitchenMixer,
  blenders,
  homeAppliance,
  coffeeMaker,
} from '../data/homeAndOutdoor/homeAndOutdoorData';

import {
  cameras,
  gamingSet,
  headphones,
  pcLaptop,
  smartphones,
} from '../data/consumerElectronics/consumerElectronicsData';

const moibleAccessoryContext = createContext();
const homeOutdoorContext = createContext();
const consumerElectronicsContext = createContext();

export const useMobileAccessoryProducts = () => {
  return useContext(moibleAccessoryContext);
};

export const useHomeOutdoor = () => {
  return useContext(homeOutdoorContext);
};

export const useConsumerElectronics = () => {
  return useContext(consumerElectronicsContext);
};

export const ProductsProvider = ({ children }) => {
  const [mobileAccessoryProducts, setMobileAccessoryProducts] =
    useState(products);

  const [softChairsProduct, setSoftChairsProduct] = useState(softChairs);
  const [sofaChairProduct, setSofaChairProduct] = useState(sofaChair);
  const [kitchenDishesProduct, setKitchenDishesProduct] =
    useState(kitchenDishes);
  const [smartWatchesProduct, setSmartWatchesProduct] = useState(smartWatches);
  const [kitchenMixerProduct, setKitchenMixerProduct] = useState(kitchenMixer);
  const [blendersProduct, setBlendersProduct] = useState(blenders);
  const [homeApplianceProduct, setHomeApplianceProduct] =
    useState(homeAppliance);
  const [coffeeMakerProduct, setCoffeeMakerProduct] = useState(coffeeMaker);

  const [headphonesProduct, setHeadphonesProduct] = useState(headphones);
  const [gamingSetProduct, setGamingSetProduct] = useState(gamingSet);
  const [smartphonesProduct, setSmartphonesProduct] = useState(smartphones);
  const [camerasProduct, setCamerasProduct] = useState(cameras);
  const [pcLaptopProduct, setPcLaptopProduct] = useState(pcLaptop);

  return (
    <homeOutdoorContext.Provider
      value={[
        softChairsProduct,
        sofaChairProduct,
        kitchenDishesProduct,
        smartWatchesProduct,
        kitchenMixerProduct,
        blendersProduct,
        homeApplianceProduct,
        coffeeMakerProduct,
      ]}
    >
      <consumerElectronicsContext.Provider
        value={[
          headphonesProduct,
          gamingSetProduct,
          smartphonesProduct,
          camerasProduct,
          pcLaptopProduct,
        ]}
      >
        <moibleAccessoryContext.Provider
          value={[mobileAccessoryProducts, setMobileAccessoryProducts]}
        >
          {children}
        </moibleAccessoryContext.Provider>
      </consumerElectronicsContext.Provider>
    </homeOutdoorContext.Provider>
  );
};
