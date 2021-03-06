import Axios, { AxiosStatic } from "axios";
import { HouseData } from "./getHouseData";

export interface TemplatePart {
  readonly component: "ADDRESS" | "IMAGE" | "AREA" | "PRICE";
  readonly field: keyof HouseData;
  readonly children?: ReadonlyArray<TemplatePart>;
}

export interface Template {
  readonly id: number;
  readonly template: ReadonlyArray<TemplatePart>;
}

type FetchTemplates = () => Promise<ReadonlyArray<Template>>;
type FetchTemplatesFactory = (axios: AxiosStatic) => FetchTemplates;

export const fetchTemplatesFactory: FetchTemplatesFactory = axios => async () => {
  const response = await axios.get("/templates.json");
  return response.data;
};

export const fetchTemplates: FetchTemplates = fetchTemplatesFactory(Axios);
