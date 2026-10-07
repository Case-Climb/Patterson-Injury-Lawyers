import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/config/site";

export type CountyPage = {
  path: string;
  /** Short name for breadcrumbs and navigation. */
  label: string;
  /** Primary keyword. Used as the H1 and in the <title>. */
  keyword: string;
  metaDescription: string;
  heroLead: string;
  intro: { heading: string; body: ReactNode };
  towns: { heading: string; lead: string; items: string[] };
  situations: { heading: string; lead: string; items: { title: string; body: string }[] };
  courthouse: { heading: string; body: ReactNode };
  cta: string;
};

export const montgomeryCounty: CountyPage = {
  path: "/montgomery-county",
  label: "Montgomery County",
  keyword: "Montgomery County Personal Injury Lawyer",
  metaDescription:
    "Injured in Norristown, King of Prussia or Conshohocken? Our Montgomery County personal injury lawyer offers a free consultation. No fee unless we recover.",
  heroLead:
    "From Norristown to King of Prussia, Conshohocken and Cheltenham, we represent injured people across Montgomery County.",
  intro: {
    heading: "Serving Montgomery County from just down the Schuylkill",
    body: (
      <>
        <p>
          Montgomery County and Philadelphia share a border, a highway system and a daily flow of commuters. Many of
          our clients live in one and were hurt in the other. {site.name} represents injured people throughout
          Montgomery County from our <Link href="/philadelphia">office in Center City Philadelphia</Link>, a short
          drive or train ride away.
        </p>
        <p>
          You do not have to come to us to get started. The consultation is free and happens by phone, 24/7, so you
          can call from home in Norristown or from a hospital bed in Abington. There are no upfront fees, and we are
          not paid unless we recover for you.
        </p>
        <p>
          Attorney <Link href="/attorney">Derek M. Patterson</Link> has worked for plaintiff firms and for an
          insurance defense firm. He uses what he learned on both sides to deal with the insurers that handle claims
          in the suburbs, whether the case involves a <Link href="/car-accidents">car accident</Link>, a{" "}
          <Link href="/premises-liability-slip-and-fall">slip and fall</Link> or a{" "}
          <Link href="/workplace-injury">workplace injury</Link>.
        </p>
      </>
    ),
  },
  towns: {
    heading: "Montgomery County towns we serve",
    lead: "We take cases from every part of the county, including:",
    items: [
      "Norristown",
      "King of Prussia",
      "Conshohocken",
      "Cheltenham",
      "Abington",
      "Lower Merion",
      "Plymouth Meeting",
      "Lansdale",
      "Pottstown",
      "Willow Grove",
    ],
  },
  situations: {
    heading: "Accidents we often see in Montgomery County",
    lead: "The county's mix of highways, shopping centers and job sites produces a familiar set of injuries.",
    items: [
      {
        title: "Highway and interchange crashes",
        body: "The Schuylkill Expressway (I-76), the Blue Route (I-476), Route 202 and the Pennsylvania Turnpike meet around King of Prussia and Plymouth Meeting, where merging traffic and sudden slowdowns lead to rear-end and multi-vehicle collisions.",
      },
      {
        title: "Crashes on busy local roads",
        body: "Ridge Pike, Germantown Pike and DeKalb Pike carry heavy traffic through town centers, with frequent intersection, left-turn and pedestrian accidents.",
      },
      {
        title: "Falls at stores and shopping centers",
        body: "Large retail centers, parking lots and restaurants around King of Prussia and Willow Grove see slip and fall injuries from wet floors, ice and poor lighting.",
      },
      {
        title: "Truck and delivery vehicle accidents",
        body: "Warehouses and distribution routes put tractor-trailers and delivery vans on the same roads as commuters.",
      },
      {
        title: "Workplace and construction injuries",
        body: "Office parks, construction projects and warehouses across the county mean injuries on the job, some involving third parties.",
      },
      {
        title: "Dog bites in residential neighborhoods",
        body: "Bites from a neighbor's dog or an off-leash dog, often involving children.",
      },
    ],
  },
  courthouse: {
    heading: "The Montgomery County Courthouse in Norristown",
    body: (
      <>
        <p>
          Lawsuits arising from accidents in Montgomery County are generally filed in the Montgomery County Court of
          Common Pleas, which sits at the Montgomery County Courthouse in Norristown, the county seat.
        </p>
        <p>
          Where a case can be filed depends on where the accident happened and who is involved, and many claims are
          resolved with the insurance company before a lawsuit is needed. We will explain your options and what to
          expect when we talk.
        </p>
      </>
    ),
  },
  cta: "Hurt in Montgomery County? Call the PIL.",
};

export const delawareCounty: CountyPage = {
  path: "/delaware-county",
  label: "Delaware County",
  keyword: "Delaware County Personal Injury Lawyer",
  metaDescription:
    "Injured in Upper Darby, Chester or Media? Our Delaware County personal injury lawyer offers a free consultation, with no fee unless we recover. Call 24/7.",
  heroLead: "From Upper Darby to Chester and Media, we represent injured people across Delaware County.",
  intro: {
    heading: "Right next door to Delco",
    body: (
      <>
        <p>
          West Philadelphia runs straight into Delaware County. Cross Cobbs Creek and you are in Upper Darby. Attorney{" "}
          <Link href="/attorney">Derek M. Patterson</Link> grew up on the Philadelphia side of that line, and{" "}
          {site.name} represents injured people on both sides of it.
        </p>
        <p>
          We serve Delaware County from our <Link href="/philadelphia">Center City Philadelphia office</Link>, and
          most clients start with a phone call. The consultation is free and available 24/7. There are no upfront
          fees, and we are not paid unless we recover for you.
        </p>
        <p>
          Derek has worked for plaintiff firms and for an insurance defense firm, so he knows how the other side
          evaluates a claim. That matters whether you were hurt in a{" "}
          <Link href="/car-accidents">crash on I-95</Link>, hit{" "}
          <Link href="/car-accidents/pedestrian-accidents">while walking</Link> near 69th Street, or bitten by a{" "}
          <Link href="/dog-bite">neighbor's dog</Link>.
        </p>
      </>
    ),
  },
  towns: {
    heading: "Delaware County towns we serve",
    lead: "We take cases from every part of Delco, including:",
    items: [
      "Upper Darby",
      "Chester",
      "Media",
      "Drexel Hill",
      "Springfield",
      "Havertown",
      "Lansdowne",
      "Ridley",
      "Broomall",
      "Radnor",
    ],
  },
  situations: {
    heading: "Accidents we often see in Delaware County",
    lead: "Dense older suburbs, busy pikes and an industrial waterfront each bring their own risks.",
    items: [
      {
        title: "Crashes on I-95 and the Blue Route",
        body: "I-95 through Chester and I-476 through the middle of the county carry heavy car and truck traffic, with high-speed rear-end and lane-change collisions.",
      },
      {
        title: "Accidents on the pikes",
        body: "West Chester Pike, Baltimore Pike, MacDade Boulevard and Route 1 mix through traffic with driveways, turning cars and bus stops.",
      },
      {
        title: "Pedestrian accidents near transit",
        body: "The area around 69th Street Transportation Center in Upper Darby is one of the busiest places for people on foot, along with trolley and bus stops across the county.",
      },
      {
        title: "Falls on sidewalks and in stores",
        body: "Older sidewalks, apartment buildings and shopping centers produce falls caused by ice, broken pavement, poor lighting and wet floors.",
      },
      {
        title: "Industrial and workplace injuries",
        body: "Refineries, warehouses and the Chester waterfront involve heavy equipment and multiple contractors, where a third party may share responsibility.",
      },
      {
        title: "Dog bites",
        body: "Tightly packed neighborhoods mean close contact with other people's dogs, and bites that often injure children.",
      },
    ],
  },
  courthouse: {
    heading: "The Delaware County Courthouse in Media",
    body: (
      <>
        <p>
          Lawsuits arising from accidents in Delaware County are generally filed in the Delaware County Court of
          Common Pleas, which sits at the Delaware County Courthouse in Media, the county seat.
        </p>
        <p>
          Where a case can be filed depends on where the accident happened and who is involved, and many claims are
          settled with the insurance company without a lawsuit. We will walk you through the options that apply to
          you.
        </p>
      </>
    ),
  },
  cta: "Hurt in Delaware County? Call the PIL.",
};
