import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import html2canvasPro from "html2canvas-pro";
import { jsPDF } from "jspdf";
import { Download, ExternalLink, Info, XIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { CustomCollapsible } from "./custom-ui/CustomCollapsible";
import { CustomDialog, CustomDialogHeader, CustomDialogTitle } from "./custom-ui/CustomDialog";
import { RentEscalationChart } from "./RentEscalationChart";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface LeaseAbstractDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const leaseData = {
  tenant: {
    name: "Amazon",
    creditRating: "AA",
    guarantor: "Amazon.com, Inc.",
  },
  dates: {
    start: "September 1, 2022",
    expiry: "August 31, 2037",
    term: "15 years",
  },
  rent: {
    base: "$24.40 PSF NNN",
    annual: "$7,612,800",
    monthly: "$634,400",
    escalations: "3.0% annual increases",
  },
  recoveries: {
    cam: "$2.50 PSF",
    insurance: "$0.75 PSF",
    taxes: "$3.25 PSF",
    total: "$6.50 PSF",
  },
  renewalOptions: [
    {
      term: "5 years",
      notice: "12 months",
      rent: "95% of Fair Market Value",
    },
    {
      term: "5 years",
      notice: "12 months",
      rent: "95% of Fair Market Value",
    },
  ],
  securityDeposit: "12 months rent ($7,612,800)",
  maintenanceResponsibilities: {
    tenant: ["Interior maintenance", "HVAC maintenance and replacement", "Regular cleaning"],
    landlord: ["Structural repairs", "Roof maintenance", "Common area maintenance"],
  },
};

const CustomPositionedDialogContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <motion.div
      className={cn(
        "fixed z-50 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 sm:max-w-lg",
        "max-w-2xl",
        "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "max-h-[90vh] overflow-y-auto scrollbar",
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.25,
        ease: [0.4, 0.0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export const LeaseAbstractDialog = ({ open, onOpenChange }: LeaseAbstractDialogProps): React.JSX.Element => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  const today = new Date();
  const expiryDate = new Date("August 31, 2037");
  const daysUntilExpiry = Math.floor((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  const isExpiringWithinYear = daysUntilExpiry <= 365;

  const exportToPDF = async () => {
    if (!contentRef.current) return;

    try {
      const originalPadding = contentRef.current.style.padding;
      contentRef.current.style.padding = "20px";

      const canvas = await html2canvasPro(contentRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: contentRef.current.offsetWidth,
        height: contentRef.current.scrollHeight,
        windowWidth: contentRef.current.scrollWidth,
        windowHeight: contentRef.current.scrollHeight,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
      });

      contentRef.current.style.padding = originalPadding;

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;

      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);

      if (imgHeight > pageHeight - margin * 2) {
        let remainingHeight = imgHeight;
        let currentPosition = 0;

        remainingHeight -= pageHeight - margin * 2;
        currentPosition += pageHeight - margin * 2;

        while (remainingHeight > 0) {
          pdf.addPage();

          const heightOnThisPage = Math.min(remainingHeight, pageHeight - margin * 2);

          pdf.addImage(imgData, "PNG", margin, margin - currentPosition, imgWidth, imgHeight, undefined, "FAST");

          remainingHeight -= heightOnThisPage;
          currentPosition += heightOnThisPage;
        }
      }

      pdf.save("lease-abstract-amazon.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const baseRentValue = parseFloat(leaseData.rent.base.replace("$", "").split(" ")[0]);
  const escalationRate = parseFloat(leaseData.rent.escalations.split("%")[0]);

  return (
    <CustomDialog open={open} onOpenChange={onOpenChange}>
      <CustomPositionedDialogContent className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <CustomDialogHeader>
            <CustomDialogTitle className="flex items-center justify-between">
              <span>Lease Abstract</span>
              <div className="flex gap-3 items-center max-sm:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800 !p-0"
                  onClick={exportToPDF}
                >
                  Export to PDF <Download className="size-4" />
                </Button>
                <a
                  href="https://drive.google.com/file/d/1VuVMe_hIpwQOQnzylBl_G4XgZ9d2wk0I/view?usp=sharing"
                  className="flex items-center text-sm text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Lease <ExternalLink className="ml-1 size-4" />
                </a>
                <XIcon className="size-5 cursor-pointer" onClick={() => onOpenChange(false)} />
              </div>
              <XIcon className="size-5 cursor-pointer sm:hidden" onClick={() => onOpenChange(false)} />
            </CustomDialogTitle>
          </CustomDialogHeader>

          <div className="flex gap-3 items-center sm:hidden mt-1">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-sm text-blue-600 hover:text-blue-800 !p-0"
              onClick={exportToPDF}
            >
              Export to PDF <Download className="size-4" />
            </Button>
            <a
              href="https://drive.google.com/file/d/1VuVMe_hIpwQOQnzylBl_G4XgZ9d2wk0I/view?usp=sharing"
              className="flex items-center text-sm text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Lease <ExternalLink className="ml-1 size-4" />
            </a>
          </div>

          <div className="space-y-4 mt-4" ref={contentRef}>
            <div className="space-y-2">
              <h3 className="font-semibold">Basic Information</h3>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Tenant</p>
                  <div className="flex items-center">
                    <p className="font-medium">{leaseData.tenant.name}</p>
                    <a
                      href={`https://www.google.com/search?q=${leaseData.tenant.name}+company+news`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      <Info className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Credit Rating</p>
                  <p className="font-medium">{leaseData.tenant.creditRating}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lease Start</p>
                  <p className="font-medium">{leaseData.dates.start}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Lease Expiry</p>
                  <div className="flex items-center">
                    <p className="font-medium">{leaseData.dates.expiry}</p>
                    {isExpiringWithinYear && (
                      <span className="ml-2 px-1.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-800 rounded">
                        Expires in {daysUntilExpiry} days
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <h3 className="font-semibold">Rent Structure</h3>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Base Rent</p>
                  <p className="font-medium">{leaseData.rent.base}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Annual Rent</p>
                  <p className="font-medium">{leaseData.rent.annual}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Monthly Rent</p>
                  <p className="font-medium">{leaseData.rent.monthly}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Escalations</p>
                  <p className="font-medium">{leaseData.rent.escalations}</p>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Projected Rent Escalation</h4>
                <RentEscalationChart baseRent={baseRentValue} escalationRate={escalationRate} years={5} />
              </div>
            </div>
            <Separator />
            <CustomCollapsible title="Operating Expense Recoveries">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <p className="text-sm text-gray-500">CAM</p>
                  <p className="font-medium">{leaseData.recoveries.cam}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Insurance</p>
                  <p className="font-medium">{leaseData.recoveries.insurance}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Property Taxes</p>
                  <p className="font-medium">{leaseData.recoveries.taxes}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Recoveries</p>
                  <p className="font-medium">{leaseData.recoveries.total}</p>
                </div>
              </div>
            </CustomCollapsible>
            <Separator />
            <CustomCollapsible title="Renewal Options">
              {leaseData.renewalOptions.map((option, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold text-lg">Option {index + 1}</p>
                  <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                    <div>
                      <p className="text-sm text-gray-500">Term</p>
                      <p className="font-medium">{option.term}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Notice Period</p>
                      <p className="font-medium">{option.notice}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-sm text-gray-500">Renewal Rent</p>
                      <p className="font-medium">{option.rent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CustomCollapsible>
            <Separator />
            <CustomCollapsible title="Maintenance Responsibilities">
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <p className="font-medium">Tenant Responsibilities</p>
                  <ul className="list-disc pl-4 text-sm">
                    {leaseData.maintenanceResponsibilities.tenant.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Landlord Responsibilities</p>
                  <ul className="list-disc pl-4 text-sm">
                    {leaseData.maintenanceResponsibilities.landlord.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CustomCollapsible>
          </div>
        </motion.div>
      </CustomPositionedDialogContent>
    </CustomDialog>
  );
};
