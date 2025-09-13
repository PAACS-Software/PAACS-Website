import Download from "@/components/Download";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Gap from "@/components/MobileGap/Gap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download PAACS - Free Trial | Windows, Mac, Linux",
  description:
    "Download PAACS simulation software for Windows, macOS, or Linux. Free for academic use. 30-day trial for commercial users. No credit card required.",
  alternates: {
    canonical: "https://paacs.pro/download",
  },
};

const DownloadPage = () => {
  return (
    <>
      <Gap />
      <Download />
    </>
  );
};

export default DownloadPage;
