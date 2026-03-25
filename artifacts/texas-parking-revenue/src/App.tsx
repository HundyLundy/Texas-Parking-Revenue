import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import LeadCapture from "@/pages/LeadCapture";
import DirectoryIndex from "@/pages/directory/DirectoryIndex";
import PropertiesDirectory from "@/pages/directory/Properties";
import VendorsDirectory from "@/pages/directory/Vendors";

import { HoustonCity, AustinCity, CorpusChristiCity } from "@/pages/cities";
import { HotelAsset, HospitalAsset, CommercialREAsset } from "@/pages/assets";
import { DecisionPage } from "@/pages/decisions";

import HotelChargeParking from "@/pages/articles/HotelChargeParking";
import SelfManagedVsOutsourced from "@/pages/articles/SelfManagedVsOutsourced";
import ParkingRFPGuide from "@/pages/articles/ParkingRFPGuide";
import GatedVsGateless from "@/pages/articles/GatedVsGateless";
import HospitalOutsourcing from "@/pages/articles/HospitalOutsourcing";

import NotFound from "@/pages/not-found";
import { decisions } from "@/data/content";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/resources" component={Resources} />
      <Route path="/parking-revenue-analysis" component={LeadCapture} />
      
      {/* Directory */}
      <Route path="/directory" component={DirectoryIndex} />
      <Route path="/directory/properties" component={PropertiesDirectory} />
      <Route path="/directory/vendors" component={VendorsDirectory} />
      
      {/* Cities */}
      <Route path="/texas/houston-parking-revenue" component={HoustonCity} />
      <Route path="/texas/austin-parking-revenue" component={AustinCity} />
      <Route path="/texas/corpus-christi-parking-revenue" component={CorpusChristiCity} />
      
      {/* Assets */}
      <Route path="/texas/hotel-parking-revenue" component={HotelAsset} />
      <Route path="/texas/hospital-parking-management" component={HospitalAsset} />
      <Route path="/texas/commercial-real-estate-parking-revenue" component={CommercialREAsset} />
      
      {/* Standalone article pages */}
      <Route path="/resources/should-texas-hotels-charge-for-parking" component={HotelChargeParking} />
      <Route path="/resources/self-managed-vs-outsourced-parking-noi" component={SelfManagedVsOutsourced} />
      <Route path="/resources/parking-management-rfp-guide" component={ParkingRFPGuide} />
      <Route path="/resources/gated-vs-gateless-parking-roi" component={GatedVsGateless} />
      <Route path="/resources/when-should-a-hospital-outsource-parking-management" component={HospitalOutsourcing} />

      {/* Decisions dynamic route */}
      <Route path="/resources/:slug">
        {(params) => {
          if (Object.keys(decisions).includes(params.slug)) {
            return <DecisionPage params={params} />;
          }
          return <NotFound />;
        }}
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
