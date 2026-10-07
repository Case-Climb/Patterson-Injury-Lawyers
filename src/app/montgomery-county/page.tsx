import { CountyTemplate, countyMetadata } from "@/components/CountyTemplate";
import { montgomeryCounty } from "@/content/locations";

export const metadata = countyMetadata(montgomeryCounty);

export default function Page() {
  return <CountyTemplate county={montgomeryCounty} />;
}
