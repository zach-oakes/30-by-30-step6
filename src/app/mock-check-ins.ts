import {CheckIn} from "./check-in";
import { v4 } from 'uuid';
import {BeerType} from "./beer-type";
import {ServingStyle} from "./serving-style";
export const MOCK_CHECKINS: CheckIn[] = [
    {
        id: v4(),
        brewery: "Odell",
        beerName: "Mountain Standard",
        beerType: BeerType.RED,
        review: "Was excellent!",
        rating: 4,
        servingStyle: ServingStyle.DRAFT,
    },
    {
        id: v4(),
        brewery: "Avery",
        beerName: "Clear Horizons",
        beerType: BeerType.IPA,
        review: "Not too bad",
        rating: 2,
        servingStyle: ServingStyle.CAN,
    },
    {
        id: v4(),
        brewery: "Green Mountain",
        beerName: "Watermelon Sour",
        beerType: BeerType.SOUR,
        review: "Way too sour. Do not recommend.",
        rating: 1,
        servingStyle: ServingStyle.DRAFT,
    },
    {
        id: v4(),
        brewery: "4 Noses",
        beerName: "Tranquil",
        beerType: BeerType.STOUT,
        review: "Very good",
        rating: 4,
        servingStyle: ServingStyle.BOTTLE,
    },
    {
        id: v4(),
        brewery: "Banded Oak",
        beerName: "Scotch Ale",
        beerType: BeerType.AMBER,
        review: "Drain pour!",
        rating: 1,
        servingStyle: ServingStyle.DRAFT,
    },
    {
        id: v4(),
        brewery: "TRVE",
        beerName: "Siren",
        beerType: BeerType.BELGIAN,
        review: "Very nice, great flavor.",
        rating: 4,
        servingStyle: ServingStyle.DRAFT,
    },
    {
        id: v4(),
        brewery: "Ratio Beerworks",
        beerName: "Pale Lager",
        beerType: BeerType.LAGER,
        review: "Smooth!",
        rating: 3,
        servingStyle: ServingStyle.CAN,
    }
];