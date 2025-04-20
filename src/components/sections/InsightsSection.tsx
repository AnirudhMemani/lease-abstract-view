"use client";

import {
  ArrowUpIcon,
  BanknoteIcon,
  BarChartHorizontalIcon,
  BuildingIcon,
  ClockIcon,
  LineChartIcon,
  NetworkIcon,
  PercentIcon,
  PieChartIcon,
  PiggyBankIcon,
  TagsIcon,
} from "lucide-react";
import React, { useState } from "react";
import { LeaseAbstractDialog } from "../LeaseAbstractDialog";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

const financialMetrics = [
  { icon: <BanknoteIcon className="w-6 h-6" />, label: "IRR", value: "13.9%" },
  {
    icon: <BarChartHorizontalIcon className="w-6 h-6" />,
    label: "Equity Multiple",
    value: "2.3x",
  },
  {
    icon: <PieChartIcon className="w-6 h-6" />,
    label: "Return on Equity",
    value: "18.5%",
  },
  {
    icon: <BanknoteIcon className="w-6 h-6" />,
    label: "Return on Cost",
    value: "19.2%",
  },
];

const keyAssumptions = [
  {
    icon: <TagsIcon className="w-6 h-6" />,
    label: "Exit Price",
    value: "$195,000,000",
  },
  {
    icon: <PercentIcon className="w-6 h-6" />,
    label: "Exit Cap Rate",
    value: "5.0%",
  },
  {
    icon: <LineChartIcon className="w-6 h-6" />,
    label: "Rental Growth",
    value: "3.5%",
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    label: "Hold Period",
    value: "16 Years",
  },
];

const marketAnalysis = [
  {
    icon: <BuildingIcon className="w-6 h-6" />,
    label: "Nearest Urban Center",
    value: "Brooklyn, NY",
  },
  {
    icon: <LineChartIcon className="w-6 h-6" />,
    label: "Population Growth Rate",
    value: "1.2%",
  },
  {
    icon: <PiggyBankIcon className="w-6 h-6" />,
    label: "Median Household Income",
    value: "$76,912",
  },
  {
    icon: <NetworkIcon className="w-6 h-6" />,
    label: "Unemployment Rate",
    value: "7.4%",
  },
];

const leaseAnalysis = [
  {
    icon: <BanknoteIcon className="w-6 h-6" />,
    label: "Rent PSF",
    value: "$24.40",
  },
  {
    icon: <ClockIcon className="w-6 h-6" />,
    label: "WALT",
    value: "13 Yrs (Sep 37)",
  },
  {
    icon: <ArrowUpIcon className="w-6 h-6" />,
    label: "Rent Escalations",
    value: "3%",
  },
  {
    icon: <LineChartIcon className="w-6 h-6" />,
    label: "Mark-to-Market Opportunity",
    value: "30%+",
  },
];

const supplyPipeline = [
  {
    image: "/image-1.png",
    address: "640 Columbia",
    submarket: "Brooklyn",
    deliveryDate: "Jun-25",
    owner: "CBREI",
    sf: "336,350",
  },
  {
    image: "/image-2.png",
    address: "WB Mason",
    submarket: "Bronx",
    deliveryDate: "May-25",
    owner: "Link Logistics",
    sf: "150,000",
  },
];

const saleComparables = [
  {
    image: "/image-3.png",
    address: "1 Debaun Road",
    submarket: "Millstone, NJ",
    sf: "132,930",
    owner: "Cabot",
    date: "Jun-24",
    pp: "$41,903,580",
    tenant: "Berry Plastics",
  },
  {
    image: "/image-4.png",
    address: "39 Edgeboro Road",
    submarket: "Millstone, NJ",
    sf: "513,240",
    owner: "Blackstone",
    date: "Oct-23",
    pp: "$165,776,520",
    tenant: "FedEx",
  },
  {
    image: "/image-5.png",
    address: "Baylis 495 Business Park",
    submarket: "Melville, NY",
    sf: "103,500",
    owner: "Betnal Green",
    date: "May-24",
    pp: "$44,000,000",
    tenant: "Dr. Pepper",
  },
  {
    image: "/image-6.png",
    address: "Terminal Logistics Center",
    submarket: "Queens, NY",
    sf: "336,000",
    owner: "Goldman",
    date: "Mar-23",
    pp: "$136,000,000",
    tenant: "Do & Co",
  },
];

export const InsightsSection = (): React.JSX.Element => {
  const [isLeaseAbstractOpen, setIsLeaseAbstractOpen] = useState(false);

  return (
    <section className="w-full flex flex-col h-full relative">
      <div className="flex w-full items-center justify-between p-2.5 pb-0 lg:px-8 max-lg:flex-wrap max-lg:gap-y-6">
        {/* Financial Metrics */}
        <div className="flex flex-col items-start gap-2.5">
          <div className="px-5">
            <h3 className="font-medium text-zinc-500">Projected Financial Metrics</h3>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            {financialMetrics.map((metric, index) => (
              <div key={index} className="flex w-[248px] items-center px-2.5">
                <div className="p-2.5">{metric.icon}</div>

                <div className="p-2.5 flex flex-col">
                  <span className="font-medium text-xs text-zinc-500">{metric.label}</span>
                  <span className="text-2xl font-semibold">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-stretch flex items-center">
          <Separator orientation="vertical" className="h-full" />
        </div>

        {/* Key Assumptions */}
        <div className="flex flex-col items-start gap-2.5">
          <div className="px-5">
            <h3 className="font-medium text-zinc-500">Key Assumptions</h3>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            {keyAssumptions.map((assumption, index) => (
              <div key={index} className="flex w-[248px] items-center px-2.5">
                <div className="p-2.5">{assumption.icon}</div>

                <div className="p-2.5 flex flex-col">
                  <span className="font-medium text-xs text-zinc-500">{assumption.label}</span>
                  <span className="text-2xl font-semibold">{assumption.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-stretch flex items-center">
          <Separator orientation="vertical" className="h-full" />
        </div>

        {/* Market Analysis */}
        <div className="flex flex-col items-start gap-2.5">
          <div className="px-5">
            <h3 className="font-medium text-zinc-500">Market Analysis</h3>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            {marketAnalysis.map((analysis, index) => (
              <div key={index} className="flex w-[248px] items-center px-2.5">
                <div className="p-2.5">{analysis.icon}</div>

                <div className="p-2.5 flex flex-col">
                  <span className="font-medium text-xs text-zinc-500">{analysis.label}</span>
                  <span className="text-2xl font-semibold">{analysis.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="self-stretch flex items-center">
          <Separator orientation="vertical" className="h-full" />
        </div>

        {/* Lease Analysis */}
        <div
          className="flex flex-col items-start gap-2.5 group cursor-pointer"
          onClick={() => setIsLeaseAbstractOpen(true)}
        >
          <div className="px-5">
            <h3 className="font-medium text-zinc-500 group-hover:text-zinc-700">Lease Analysis</h3>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            {leaseAnalysis.map((lease, index) => (
              <div key={index} className="flex w-[248px] items-center px-2.5">
                <div className="p-2.5">{lease.icon}</div>

                <div className="p-2.5 flex flex-col">
                  <span className="font-medium text-xs text-zinc-500">{lease.label}</span>
                  <span className="text-2xl font-semibold">{lease.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex w-full items-start justify-center gap-2">
        {/* Supply Pipeline */}
        <Card className="w-[381px] border-none shadow-none p-0">
          <CardContent className="p-0">
            <div className="px-[18px] mb-4">
              <h3 className="font-semibold text-2xl">Supply Pipeline</h3>
            </div>

            <div className="p-2.5 overflow-hidden">
              <div className="flex flex-col gap-4">
                {supplyPipeline.map((property, index) => (
                  <div key={index} className="flex py-2.5 gap-3">
                    <img
                      className="w-[161px] h-[140px] object-cover rounded-lg"
                      alt={`Property ${index + 1}`}
                      src={property.image}
                    />

                    <div className="flex flex-col px-4 -ml-[13px]">
                      <div className="flex items-center rounded">
                        <div className="font-bold text-[#08080a] text-base leading-6">
                          Address: <span className="font-normal">{property.address}</span>
                        </div>
                      </div>

                      <div className="pt-[7px] flex-wrap flex flex-col">
                        <div className="flex h-6 items-center gap-1 rounded">
                          <div className="font-bold text-[#08080a] text-base">Submarket:</div>
                          <div className="font-normal text-zinc-500">{property.submarket}</div>
                        </div>

                        <div className="flex h-6 items-center gap-1 rounded mt-1">
                          <div className="font-bold text-[#08080a] text-base">Delivery Date:</div>
                          <div className="font-normal text-zinc-500">{property.deliveryDate}</div>
                        </div>

                        <div className="flex h-6 items-center gap-1 rounded mt-1">
                          <div className="font-bold text-[#08080a] text-base">Owner:</div>
                          <div className="font-normal text-zinc-500">{property.owner}</div>
                        </div>

                        <div className="flex h-6 items-center gap-1 rounded mt-1">
                          <div className="font-bold text-[#08080a] text-base">SF:</div>
                          <div className="font-normal text-zinc-500">{property.sf}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wrapped Separator */}
        <div className="self-stretch flex items-center">
          <Separator orientation="vertical" className="h-full" />
        </div>

        {/* Sale Comparables */}
        <Card className="flex-1 border-none shadow-none p-0">
          <CardContent className="p-0">
            <div className="px-[18px] mb-4">
              <h3 className="text-2xl font-semibold">Sale Comparables</h3>
            </div>

            <div className="pl-1.5 pr-2.5 py-2.5">
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
                {saleComparables.map((property, index) => (
                  <div key={index} className="flex py-2.5">
                    <img
                      className="w-[161px] h-[140px] object-cover rounded-lg"
                      alt={`Comparable ${index + 1}`}
                      src={property.image}
                    />

                    <div className="flex flex-col gap-2 px-4 -ml-[13px]">
                      <div className="flex h-6 items-center justify-center rounded">
                        <div className="font-bold text-[#08080a]">Address:</div>
                        <div className="text-[#08080a] ml-1">{property.address}</div>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 p-2.5">
                        <div className="flex flex-col gap-2">
                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">Submarket:</div>
                            <div className="text-zinc-500">{property.submarket}</div>
                          </div>

                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">SF:</div>
                            <div className="text-zinc-500">{property.sf}</div>
                          </div>

                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">Owner:</div>
                            <div className="text-zinc-500">{property.owner}</div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">Date:</div>
                            <div className="text-zinc-500">{property.date}</div>
                          </div>

                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">PP:</div>
                            <div className="text-zinc-500">{property.pp}</div>
                          </div>

                          <div className="flex h-6 items-center gap-1 rounded">
                            <div className="font-bold text-[#08080a]">Tenant:</div>
                            <div className="text-zinc-500">{property.tenant}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <LeaseAbstractDialog open={isLeaseAbstractOpen} onOpenChange={setIsLeaseAbstractOpen} />
    </section>
  );
};
