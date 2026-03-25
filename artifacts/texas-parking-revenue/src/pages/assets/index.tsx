import { AssetPageTemplate } from "@/templates/AssetPageTemplate";
import { assets } from "@/data/content";

export function HotelAsset() {
  return <AssetPageTemplate id="hotel" data={assets.hotel} />;
}

export function HospitalAsset() {
  return <AssetPageTemplate id="hospital" data={assets.hospital} />;
}

export function CommercialREAsset() {
  return <AssetPageTemplate id="commercial-real-estate" data={assets["commercial-real-estate"]} />;
}
