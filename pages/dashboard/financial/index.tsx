import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Financial = () => {
  return (
    <Fragment>
      <Seo title={"Financial"} />
      <Pageheader
        currentpage="Financial"
        activepage="Dashboard"
        mainpage="Financial"
      />
      <></>
    </Fragment>
  )
}

Financial.layout = "Contentlayout";
export default Financial;