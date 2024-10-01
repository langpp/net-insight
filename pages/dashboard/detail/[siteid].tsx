import dynamic from 'next/dynamic';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";
import { SiteIdDetailTotal } from '@/pages/components/charts/SiteIdDetailTotal';
const Leafletmapss = dynamic(() => import('@/shared/data/maps/leafletmapdata'), { ssr: false });

const DetailSiteID = () => {
  return (
    <Fragment>
      <Seo title={"Detail Site ID"} />
      <Pageheader
        currentpage="Detail Site ID"
        activepage="Dashboard"
        mainpage="Detail Site ID"
      />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-4 col-span-12">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Site Information ADLA02</div>
            </div>
            <div className="box-body">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Site ID</p>
                            <p className="fw-bold mb-0">Site A</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Latitude</p>
                            <p className="fw-bold mb-0">- 4,083</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Regional</p>
                            <p className="fw-bold mb-0">R09 - Sulawesi</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Kecamatan</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Branch</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-[24px]">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">NSA</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="xl:col-span-6 col-span-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Sitename</p>
                            <p className="fw-bold mb-0">Site A</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Longitude</p>
                            <p className="fw-bold mb-0">- 4,083</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Kabupaten / Kota</p>
                            <p className="fw-bold mb-0">Makasar</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Kelurahan</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-3">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">Sub Branch</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="mb-[24px]">
                      <a href="javascript:void(0);">
                        <div className="d-flex align-items-center">
                          <i className='ri-pages-fill fs-18'></i>
                          <div className="flex-fill ms-2">
                            <p className="fs-12 text-muted mb-0">NOP</p>
                            <p className="fw-bold mb-0">-</p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 col-span-12">
          <div className="box custom-box">
            <div className="box-header">
              <div className="box-title">Map Info</div>
              <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                <div className="hs-dropdown ti-dropdown">
                  <Link href="#!" className="ti-btn ti-btn-danger !py-1 !px-2 !text-[0.75rem] btn-wave" aria-expanded="false">
                      Menu Filter<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                  </Link>
                  <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                      <li><Link className="ti-dropdown-item" href="#!">Newest</Link></li>
                      <li><Link className="ti-dropdown-item" href="#!">Date Added</Link></li>
                      <li><Link className="ti-dropdown-item" href="#!">A - Z</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-body">
              <div id="map">
                <Leafletmapss />
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 col-span-12">
          <div className="box custom-card">
            <div className="box-header justify-between">
              <div className="box-title">
                Applications Information
              </div>
              <div className="flex flex-wrap gap-2">
                <Link href="#!"
                  className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                  aria-expanded="false">
                  Download CSV<i className="ri-file-excel-2-fill align-middle ms-1 inline-block"></i>
                </Link>
              </div>
            </div>
            <div className="box-body">
              <div className="overflow-x-auto">
                <table className="table min-w-full whitespace-nowrap table-hover table-striped table-padding-apps-information">
                  <thead className="thead-gradient">
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                      <th scope="col" className="!text-start !text-[0.85rem] min-w-[100px]">APPS</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Latitude</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Longitude</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Distance (M)</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="#!" className="text-primary">Agata <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>- 3.1010</td>
                        <td>321.1010</td>
                        <td>-</td>
                      </tr>
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="#!" className="text-primary">IPAS ISR <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>- 3.1010</td>
                        <td>321.1010</td>
                        <td>20</td>
                      </tr>
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="#!" className="text-primary">IPAS TIARA <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>- 3.1010</td>
                        <td>321.1010</td>
                        <td>30</td>
                      </tr>
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="#!" className="text-primary">IPAS TOWER <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>- 3.1010</td>
                        <td>321.1010</td>
                        <td>40</td>
                      </tr>
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="#!" className="text-primary">IOMS <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>- 3.1010</td>
                        <td>321.1010</td>
                        <td>50</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer">
              <div className="sm:flex items-center">
                <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                  5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                </div>
                <div className="ms-auto">
                  <nav aria-label="Page navigation" className="pagination-style-4">
                    <ul className="ti-pagination mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" href="#!">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                      <li className="page-item">
                        <Link className="page-link !text-primary" href="#!">
                          next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-12 col-span-12">
          <nav className="tab-style-1 rounded-sm tab-site-detail mb-1 ml-1rem" aria-label="Tabs">
            <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-sm font-medium text-center rounded-md hover:text-primary active" id="site-summary" data-hs-tab="#site-summary2" >
              Site Summary
            </Link>
            <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="projects" data-hs-tab="#projects2" >
              Projects
            </Link>
            <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="financial" data-hs-tab="#financial2" >
              Financial
            </Link>
            <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="field-activoty" data-hs-tab="#field-activoty2" >
              Field Activity
            </Link>
            <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="assets" data-hs-tab="#assets2" >
                Assets
            </Link>
          </nav>
          <div className="box custom-box">
            <div className="box-body">
              <div className="tab-content">
                <div className="tab-pane !border-0 show active !p-0" id="site-summary2" role="tabpanel">
                  <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-3 col-span-12">
                      <div className="box custom-box border-1-grey">
                        <div className="box-header border-bottom-1-grey">
                          <div className="box-title">Project Rollout Summary</div>
                        </div>
                        <div className="box-body">
                          <div className="leads-source-chart flex items-center justify-center p-x-30px">
                            <SiteIdDetailTotal />
                            <div className="lead-source-value ">
                              <span className="block text-[0.875rem] ">Total</span>
                              <span className="block text-[1.1rem] font-bold">2426</span>
                            </div>
                          </div>
                          <hr />
                          <ul className="list-none mb-0 pt-2 crm-deals-status">
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="primary">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-primary !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-primary/10`}>+8.25%</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-3 col-span-12">
                      <div className="box custom-box border-1-grey">
                        <div className="box-header border-bottom-1-grey">
                          <div className="box-title">Financial Summary</div>
                        </div>
                        <div className="box-body">
                          <div className="leads-source-chart flex items-center justify-center p-x-30px">
                            <SiteIdDetailTotal />
                            <div className="lead-source-value ">
                              <span className="block text-[0.875rem] ">Total</span>
                              <span className="block text-[1.1rem] font-bold">2426</span>
                            </div>
                          </div>
                          <hr />
                          <ul className="list-none mb-0 pt-2 crm-deals-status">
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="primary">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-primary !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-primary/10`}>+8.25%</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-3 col-span-12">
                      <div className="box custom-box border-1-grey">
                        <div className="box-header border-bottom-1-grey">
                          <div className="box-title">Field Activity</div>
                        </div>
                        <div className="box-body">
                          <div className="leads-source-chart flex items-center justify-center p-x-30px">
                            <SiteIdDetailTotal />
                            <div className="lead-source-value ">
                              <span className="block text-[0.875rem] ">Total</span>
                              <span className="block text-[1.1rem] font-bold">2426</span>
                            </div>
                          </div>
                          <hr />
                          <ul className="list-none mb-0 pt-2 crm-deals-status">
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="primary">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-primary !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-primary/10`}>+8.25%</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="xl:col-span-3 col-span-12">
                      <div className="box custom-box border-1-grey">
                        <div className="box-header border-bottom-1-grey">
                          <div className="box-title">Asset Summary</div>
                        </div>
                        <div className="box-body">
                          <div className="leads-source-chart flex items-center justify-center p-x-30px">
                            <SiteIdDetailTotal />
                            <div className="lead-source-value ">
                              <span className="block text-[0.875rem] ">Total</span>
                              <span className="block text-[1.1rem] font-bold">2426</span>
                            </div>
                          </div>
                          <hr />
                          <ul className="list-none mb-0 pt-2 crm-deals-status">
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="success">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-success !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-success/10`}>+8.25%</span>
                              </div>
                            </li>
                            <li className="primary">
                              <div className="flex items-center text-[0.813rem]  justify-between">
                                <div className="text-[0.75rem]">Value Name</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">50%</div>
                                <div className="text-[0.75rem] text-[#8c9097] dark:text-white/50">1.2M</div>
                                <span className={`inline-flex text-primary !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-primary/10`}>+8.25%</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="projects2" role="tabpanel" aria-labelledby="projects">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="financial2" role="tabpanel" aria-labelledby="financial">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="field-activoty2" role="tabpanel" aria-labelledby="field-activoty">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="assets2" role="tabpanel" aria-labelledby="assets">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

DetailSiteID.layout = "Contentlayout";
export default DetailSiteID;