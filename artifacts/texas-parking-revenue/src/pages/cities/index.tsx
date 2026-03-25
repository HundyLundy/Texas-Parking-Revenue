import { CityPageTemplate } from "@/templates/CityPageTemplate";
import { cities } from "@/data/content";

export function HoustonCity() {
  return <CityPageTemplate id="houston" data={cities.houston} />;
}

export function DallasCity() {
  return <CityPageTemplate id="dallas" data={cities.dallas} />;
}

export function AustinCity() {
  return <CityPageTemplate id="austin" data={cities.austin} />;
}
