import { PracticeTemplate, practiceMetadata } from "@/components/PracticeTemplate";
import { getPracticeArea } from "@/content/practice";

const area = getPracticeArea("/wrongful-death");

export const metadata = practiceMetadata(area);

export default function Page() {
  return <PracticeTemplate area={area} />;
}
