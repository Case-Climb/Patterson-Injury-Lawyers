import type { CardItem } from "@/components/blocks";
import { carAccidents } from "./car-accidents";
import { dogBite } from "./dog-bite";
import { motorcycleAccidents } from "./motorcycle-accidents";
import { pedestrianAccidents } from "./pedestrian-accidents";
import { slipAndFall } from "./slip-and-fall";
import { truckAccidents } from "./truck-accidents";
import type { PracticeArea } from "./types";
import { workplaceInjury } from "./workplace-injury";
import { wrongfulDeath } from "./wrongful-death";

/** All eight practice areas, in the order they appear in navigation and card grids. */
export const practiceAreas: PracticeArea[] = [
  carAccidents,
  truckAccidents,
  motorcycleAccidents,
  pedestrianAccidents,
  slipAndFall,
  dogBite,
  workplaceInjury,
  wrongfulDeath,
];

export function getPracticeArea(path: string): PracticeArea {
  const area = practiceAreas.find((item) => item.path === path);
  if (!area) throw new Error(`Unknown practice area: ${path}`);
  return area;
}

export function toCard(area: PracticeArea): CardItem {
  return { title: area.label, text: area.summary, href: area.path, icon: area.icon, image: area.image };
}

export const practiceCards: CardItem[] = practiceAreas.map(toCard);

export type { PracticeArea } from "./types";
