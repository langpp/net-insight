import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Icon = () => {
    return (
        <Fragment>
            <Seo title={"Icons"} />
            <Pageheader currentpage="Icons" activepage="Icons" mainpage="Icons" />
            <div className="grid grid-cols-12 gap-x-6">
            </div>
        </Fragment>
    )
}
Icon.layout = "Contentlayout"

export default Icon