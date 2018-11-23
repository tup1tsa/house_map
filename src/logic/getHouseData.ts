import Axios, { AxiosStatic } from "axios";

interface HouseData {
  readonly id: number;
  readonly full_address: string;
  readonly description: string;
  readonly images: ReadonlyArray<string>;
  readonly area: number;
  readonly price: number;
}

type GetHouseData = () => Promise<ReadonlyArray<HouseData>>;
type GetHouseDataFactory = (axios: AxiosStatic) => GetHouseData;

export const getHouseDataFactory: GetHouseDataFactory = axios => async () => {
  const response = await axios.get("http://demo4452328.mockable.io/properties");
  return response.data;
};

export const GetHouseData = getHouseDataFactory(Axios);