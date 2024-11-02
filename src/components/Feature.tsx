"use client";
import {
  BanknotesIcon,
  SparklesIcon as spicon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    name: "Design",
    description:
      "Sleek Designs, Stunning Websites. Elevate your brand with our clean and professional website designs.",
    icon: spicon,
  },
  {
    name: "SEO",
    description:
      "Your online presence matters. A well-optimized website can significantly boost your search engine rankings, attracting more organic traffic and potential customers.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Budget",
    description:
      "We offer flexible pricing to fit any budget. No hidden fees, just transparent costs. Get a free consultation today!",
    icon: BanknotesIcon,
  },
];

export default function Example() {
  return (
    <div className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-[5.5rem] sm:-top-80 -left-96"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="affect-2 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-20 -z-10 transform-gpu overflow-hidden blur-[5.5rem] sm:-bottom-80 -right-96"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="affect-1 relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight  sm:text-5xl">
                Create your own website
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                A well-designed website will increase your business&apos;s
                online visibility, making it easier for potential customers to
                find you.
              </p>
              <motion.dl
                className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-300 lg:max-w-none"
                variants={{
                  visible: {
                    transition: {
                      delayChildren: 0.3,
                      staggerChildren: 0.2,
                    },
                  },
                }}
                initial="visible"
              >
                {features.map((feature) => (
                  <motion.div
                    key={feature.name}
                    className="relative pl-9"
                    variants={{
                      hidden: { x: -200, opacity: 0.5 },
                      visible: {
                        x: 0,
                        opacity: 1,
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <dt className="inline font-semibold ">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>
          </div>
          <motion.div initial={{ x: 200 }} whileInView={{ x: 0 }}>
            <Image
              alt="Product screenshot"
              src="/assets/design.png"
              width={2400}
              height={1800}
              className="w-[48rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
