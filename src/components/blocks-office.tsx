import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/config/site";
import { cx } from "@/components/ui";

/** Office hours as a real table, so screen readers announce day and time together. */
export function HoursTable({ className }: { className?: string }) {
  return (
    <table className={cx("w-full text-left text-[0.975rem]", className)}>
      <caption className="sr-only">Office hours for {site.name}</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">Days</th>
          <th scope="col">Hours</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-line">
        {site.hours.map((row) => (
          <tr key={row.days}>
            <th scope="row" className="py-2.5 pr-4 font-medium text-ink">
              {row.days}
            </th>
            <td className="py-2.5 text-right">{row.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** Name, address, phone and hours for the Philadelphia office. NAP comes from the config. */
export function OfficeDetails({ headingId, title = "Philadelphia office" }: { headingId: string; title?: string }) {
  const { address } = site;
  return (
    <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
      <h2 id={headingId} className="text-2xl sm:text-[1.75rem]">
        {title}
      </h2>
      <address className="mt-6 space-y-5 not-italic">
        <p className="flex gap-4">
          <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-ink" />
          <span>
            <strong className="block text-ink">{site.name}</strong>
            {address.street}, {address.suite}
            <br />
            {address.city}, {address.state} {address.zip}
            <a
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="prose-link mt-1.5 flex w-fit items-center gap-1.5 text-[0.95rem]"
            >
              <Navigation aria-hidden="true" className="size-3.5" />
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </span>
        </p>
        <p className="flex gap-4">
          <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-ink" />
          <span>
            <a href={`tel:${site.phone.tel}`} className="block font-semibold text-ink hover:text-accent-ink">
              {site.phone.display}
            </a>
            <a href={`tel:${site.tollFree.tel}`} className="block hover:text-accent-ink">
              Toll-free {site.tollFree.display}
            </a>
          </span>
        </p>
        <p className="flex gap-4">
          <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-ink" />
          <a href={`mailto:${site.email}`} className="break-all hover:text-accent-ink">
            {site.email}
          </a>
        </p>
      </address>
      <div className="mt-6 flex gap-4 border-t border-line pt-5">
        <Clock aria-hidden="true" className="mt-3 size-5 shrink-0 text-accent-ink" />
        <HoursTable />
      </div>
    </div>
  );
}
