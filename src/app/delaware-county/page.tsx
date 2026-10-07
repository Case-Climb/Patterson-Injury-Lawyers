import { CountyTemplate, countyMetadata } from "@/components/CountyTemplate";
import { delawareCounty } from "@/content/locations";

export const metadata = countyMetadata(delawareCounty);

export default function Page() {
  return <CountyTemplate county={delawareCounty} />;
}
