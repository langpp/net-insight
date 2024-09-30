
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const DetailSiteID = () => {
  return (
    <Fragment>
      <Seo title={"Detail Site ID"} />
      <Pageheader
        currentpage="Detail Site ID"
        activepage="Dashboard"
        mainpage="Detail Site ID"
      />
      <></>
    </Fragment>
  )
}

DetailSiteID.layout = "Contentlayout";
export default DetailSiteID;