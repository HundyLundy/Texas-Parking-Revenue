import { CityPageTemplate } from "@/templates/CityPageTemplate";
import { cities } from "@/data/content";

export function HoustonCity() {
  return <CityPageTemplate id="houston" data={cities.houston} />;
}

export function AustinCity() {
  return <CityPageTemplate id="austin" data={cities.austin} />;
}

export function CorpusChristiCity() {
  return <CityPageTemplate id="corpus-christi" data={cities["corpus-christi"]} />;
}

export function DallasCity() {
  return <CityPageTemplate id="dallas" data={cities.dallas} />;
}

export function SanAntonioCity() {
  return <CityPageTemplate id="san-antonio" data={cities["san-antonio"]} />;
}
