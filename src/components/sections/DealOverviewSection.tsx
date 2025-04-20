import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const propertyDetails = [
  {
    icon: "/icon-person-standing.svg",
    label: "Seller",
    value: "Thor Equities",
  },
  {
    icon: "/icon-dollar-sign.svg",
    label: "Guidance Price",
    value: "$143,000,000",
  },
  {
    icon: "/icon-dollar-sign.svg",
    label: "Guidance Price PSF",
    value: "$23.92",
  },
  { icon: "/icon-ruler.svg", label: "Cap Rate", value: "5.0%" },
  { icon: "/icon-ruler.svg", label: "Property Size", value: "312,000 sqft" },
  { icon: "/icon-scan.svg", label: "Land Area", value: "16 acres" },
  { icon: "/icon-hammer.svg", label: "Zoning", value: "M-2" },
];

const buildingSpecsLeft = [
  { icon: "/icon-building.svg", label: "Clear Heights", value: "36'" },
  {
    icon: "/icon-flip-vertical-2.svg",
    label: "Column Spacing",
    value: "63' X 54'",
  },
  { icon: "/icon-car.svg", label: "Parking Spaces", value: "393" },
  { icon: "/icon-truck.svg", label: "# of Dock Doors", value: "28" },
];

const buildingSpecsRight = [
  { icon: "/icon-person-standing.svg", label: "Tenant", value: "Amazon" },
  { icon: "/icon-waves.svg", label: "Seaward Area", value: "357,151 sqft" },
  { icon: "/icon-timer.svg", label: "Year Built", value: "2021" },
  { icon: "/icon-home.svg", label: "Occupancy Rate", value: "100%" },
];

const personalizedInsights = [
  {
    text: "Jake Klein viewed this deal in 2019, but decided not to proceed due to ",
    link: "lack of potential upside",
    url: "#",
  },
  {
    text: "On 10/19/2021, your firm bid on ",
    link: "55 Bay St, Brooklyn, NY 11231",
    url: "#",
    additionalText: ", a larger site also occupied by Amazon 0.5 miles away. ",
  },
  {
    text: "",
    link: "Brookfield won the deal for $45M",
    url: "#",
    additionalText: ",cap rates in the area have compressed 45bps since then.",
  },
  {
    text: "On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven ",
    link: "renewed demand for infill industrial in Brooklyn.",
    url: "#",
  },
];

export const DealOverviewSection = (): React.JSX.Element => {
  return (
    <div className="flex flex-col w-full gap-4 px-4">
      {/* Navigation Tabs */}
      <div className="flex items-center justify-between py-0">
        <Tabs defaultValue="deal-overview" className="w-auto">
          <TabsList className="bg-transparent">
            <TabsTrigger
              value="deal-overview"
              className="text-sm font-medium data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-zinc-500 px-3 py-0"
            >
              Deal Overview
            </TabsTrigger>
            <TabsTrigger
              value="workshop"
              className="text-sm font-medium data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-zinc-500 px-3 py-0"
            >
              Workshop
            </TabsTrigger>
            <TabsTrigger
              value="pipeline"
              className="text-sm font-medium data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-zinc-500 px-3 py-0"
            >
              Pipeline
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="text-sm font-medium data-[state=active]:text-black data-[state=active]:font-medium data-[state=inactive]:text-zinc-500 px-3 py-0"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex items-center justify-between p-2.5 gap-4 w-[60%] pr-8">
          <div className="flex items-center gap-4">
            <Avatar className="w-8 h-8 bg-[#d9d9d9] bg-cover bg-center">
              <AvatarImage src="/avatar-image.png" alt="assistant" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div className="flex items-center px-px py-1 bg-white rounded-[12px_12px_12px_0px] border border-solid border-[#e3e3e7] shadow-sm">
              <Input
                className="w-80 h-7 border-0 shadow-none font-normal text-zinc-500 text-sm"
                placeholder="Ask me anything!"
              />
            </div>
          </div>
          <div className="w-[74px] h-[46px] bg-[url(/24a55148-6c38-40de-a51e-9fcf59c0e5e8.png)] bg-[100%_100%]" />
        </div>
      </div>

      <div className="flex justify-between px-4 py-0 items-center">
        <header className="flex flex-col items-start gap-0.5">
          <h1 className="font-bold text-[#08080a] text-2xl tracking-[-0.60px] leading-8">Deal Overview</h1>
        </header>

        <div className="flex flex-col gap-1 items-center">
          <div className="flex flex-col items-start gap-px">
            <h2 className="font-medium text-[#08080a] text-lg leading-7">Underwriting Model</h2>
          </div>

          <div className="flex flex-col w-[250px] items-start px-4 py-2 bg-[#f4f4f5cc]">
            <div className="flex items-start justify-around gap-2.5 w-full">
              <div className="flex items-center gap-1">
                <span className="font-medium text-slate-900 whitespace-nowrap">Industrial.Template.v2.4.xlsx</span>
                <ChevronDownIcon className="size-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="border-[#e3e3e7]" />

      {/* Property Overview Section */}
      <div className="max-lg:flex-col flex px-2.5 py-4 w-full">
        {/* Property Image */}
        <div className="relative max-lg:w-full w-[503px] flex flex-col items-center justify-center mt-4 max-lg:mx-auto">
          <img
            className="max-lg:w-full w-[333px] lg:h-[187px] object-cover rounded-2xl"
            alt="Property"
            src="/image.png"
          />
          <p className="text-xs text-center mt-2">Click for Google Street View</p>
        </div>

        {/* Property Details */}
        <div className="flex flex-col gap-2.5 p-2.5 flex-1 -ml-[83px]">
          <div className="flex justify-between p-2.5 w-full">
            <div className="flex flex-col px-[33px] py-4">
              <h3 className="text-black whitespace-nowrap font-semibold text-xl">280 Richards, Brooklyn, NY</h3>
              <p className="text-sm text-zinc-500 whitespace-nowrap">Date Uploaded: 11/06/2024</p>
              <p className="text-sm text-zinc-500 whitespace-nowrap">Warehouse</p>
            </div>

            <div className="flex flex-col h-[93px] items-start justify-between p-2.5">
              <Button className="w-[150px] h-[27px] bg-[#17171b] rounded-md shadow-shadow-sm">Export to Excel</Button>
              <Button className="w-[150px] h-[26px] bg-[#17171b] rounded-md shadow-shadow-sm">
                Generate PowerPoint
              </Button>
            </div>
          </div>

          {/* Property Specifications */}
          <div className="flex px-[33px] py-2.5 w-full flex-wrap gap-6">
            {propertyDetails.map((detail, index) => (
              <div key={index} className="flex flex-col items-end justify-center gap-1">
                <div className="flex items-center gap-1">
                  <img className="w-3.5 h-3.5" alt={detail.label} src={detail.icon} />
                  <p className="font-body text-zinc-500 whitespace-nowrap">{detail.label}</p>
                </div>
                <p className="font-body text-black whitespace-nowrap">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="border-[#e3e3e7]" />

      {/* Deal Summary and Building Specs Section */}
      <div className="relative w-full max-lg:mb-6">
        <div className="px-5 py-0 lg:ml-[26px]">
          <h3 className="text-[#71717A] font-medium whitespace-nowrap">Deal Summary</h3>

          <div className="my-1.5 flex mb-2.5 max-lg:flex-col max-lg:gap-3">
            {/* Deal Summary Text */}
            <div className="text-sm leading-6 flex-1">
              <div className="lg:w-[90%]">
                <p>
                  280 Richards, fully leased to Amazon, aligns with HUSPP&apos;s strategy of acquiring prime logistics
                  assets in Brooklyn&apos;s high-demand Red Hook submarket. With 13 years remaining on the lease and 3%
                  annual rent escalations, it offers stable, long-term cash flow. While single-tenant exposure is a
                  risk, Amazon&apos;s investment-grade rating and renewal options enhance its resilience, making it a
                  strong addition to HUSPP&apos;s portfolio.
                </p>

                {/* Personalized Insights */}
                <div className="mt-2">
                  <h3 className="text-[#71717A] font-medium whitespace-nowrap text-base">Personalized Insights</h3>
                  <ul className="mt-2 list-disc pl-5 leading-5">
                    {personalizedInsights.map((insight, index) => (
                      <li key={index} className="font-body">
                        {insight.text}
                        <a href={insight.url} className="text-[#0000ee] underline underline-offset-2">
                          {insight.link}
                        </a>
                        {insight.additionalText && <span>{insight.additionalText}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex px-4">
              <div className="w-px border border-[#e3e3e7] h-[85%]" />
            </div>

            {/* Building Specifications */}
            <div className="flex-1 flex items-center flex-col">
              <h3 className="font-medium text-zinc-500 whitespace-nowrap mb-4 text-center">Asset-Level Data</h3>

              <div className="flex gap-8">
                {/* Left Column */}
                <div className="flex flex-col gap-2">
                  {buildingSpecsLeft.map((spec, index) => (
                    <div key={index} className="flex items-center px-2.5 h-[42px]">
                      <div className="p-2.5">
                        <img className="w-6 h-6" alt={spec.label} src={spec.icon} />
                      </div>
                      <div className="p-2.5">
                        <p className="font-medium text-xs text-zinc-500 whitespace-nowrap">{spec.label}</p>
                        <p className="font-semibold text-2xl whitespace-nowrap">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-2">
                  {buildingSpecsRight.map((spec, index) => (
                    <div key={index} className="flex items-center px-2.5 h-[42px]">
                      <div className="p-2.5">
                        <img className="w-6 h-6" alt={spec.label} src={spec.icon} />
                      </div>
                      <div className="p-2.5">
                        <p className="font-medium text-xs text-zinc-500 whitespace-nowrap">{spec.label}</p>
                        <p className="font-semibold text-2xl whitespace-nowrap">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
