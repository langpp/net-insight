import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";

const Projects = () => {
  return (
    <Fragment>
      <Seo title={"Site Summary"} />
      <Pageheader
        currentpage="Projects"
        activepage="Dashboard"
        mainpage="Projects"
      />
      <></>
    </Fragment>
  )
}

Projects.layout = "Contentlayout";
export default Projects;