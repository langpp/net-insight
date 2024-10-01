import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Assets = () => {
  return (
    <Fragment>
      <Seo title={"Assets"} />
      <Pageheader
        currentpage="Assets"
        activepage="Dashboard"
        mainpage="Assets"
      />
      <></>
    </Fragment>
  )
}

Assets.layout = "Contentlayout";
export default Assets;