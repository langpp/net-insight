
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const FieldActivity = () => {
  return (
    <Fragment>
      <Seo title={"Field Activity"} />
      <Pageheader
        currentpage="Field Activity"
        activepage="Dashboard"
        mainpage="Field Activity"
      />
      <></>
    </Fragment>
  )
}

FieldActivity.layout = "Contentlayout";
export default FieldActivity;