import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { BorderBeam } from "./ui/border-beam";

const tiers = [
  {
    name: "Free",
    id: "tier-free",
    href: "#",
    priceMonthly: "$0",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: ["Create your first website"],
    notInclude: [
      "No Custom Design ",
      "No Animtation",
      "Static website",
      "No Domain",
    ],
    featured: false,
  },
  {
    name: "Startup",
    id: "tier-startup",
    href: "#",
    priceMonthly: "$49",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "Create your first website",
      "Custom Design",
      "Animtation",
      "Domain",
      "Hosting",
      "2 Reviews Every Month",
    ],
    notInclude: [],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <article
      id="services"
      className="relative isolate  px-6 py-6 sm:py-32 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight  sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for
        engaging your audience, creating customer loyalty, and driving sales.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 gap-2 overflow-hidden">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-gray-800 shadow-2xl"
                : "relative bg-gray-800 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-b-3xl "
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              " rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-purple-400" : "text-purple-600",
                "text-base/7 font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames("text-5xl font-semibold tracking-tight")}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames("text-gray-400 text-base")}>
                /month
              </span>
            </p>
            <p className={classNames("text-gray-300 mt-6 text-base/7")}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                "text-gray-300 mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-purple-400" : "text-purple-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
              {tier.notInclude?.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <XMarkIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-red-400" : "text-red-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                "bg-purple-500 text-white shadow-sm hover:bg-purple-400 focus-visible:outline-purple-500 mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
            {tier.featured && <BorderBeam />}
          </div>
        ))}
      </div>
    </article>
  );
}