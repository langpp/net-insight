import dynamic from 'next/dynamic';
import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment } from 'react'
import Pageheader from "@/shared/layout-components/page-header/pageheader";
const Leafletmapss = dynamic(() => import('@/shared/data/maps/leafletmapdata'), { ssr: false });

const Dashboard = () => {
  const position: any = [51.505, -0.09];
  return (
    <Fragment>
      <Seo title={"Dashboard"} />
      <Pageheader
        currentpage="Site ID Overview"
        activepage="Dashboard"
        mainpage="Site ID Overview"
      />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-5 col-span-12">
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

        <div className="xl:col-span-7 col-span-12">
          <div className="box custom-box">
            <div className="box-body">
              <nav className="tab-style-1 bg-light rounded-sm mb-4" aria-label="Tabs">
                  <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-sm font-medium text-center rounded-md hover:text-primary active" id="physical-asset" data-hs-tab="#physical-asset2" >
                    Physical Asset
                  </Link>
                  <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="logical-asset" data-hs-tab="#logical-asset2" >
                    Logical Asset
                  </Link>
                  <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="map" data-hs-tab="#map2" >
                    Map
                  </Link>
                  <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="photo" data-hs-tab="#photo2" >
                    Photo
                  </Link>
                  <Link href="#!" className="hs-tab-active:text-primary hs-tab-active:text-primary text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="administrasi" data-hs-tab="#administrasi2" >
                      Administrasi
                  </Link>
              </nav>
              <div className="tab-content">
                <div className="tab-pane !border-0 show active !p-0" id="physical-asset2" role="tabpanel">
                  <button type="button" className="ti-btn ti-btn-light flex-grow font-medium ti-btn-summary">SUMMARY</button>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Agata</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Amesti</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Chrono</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Chrono</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Felisa</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Tiara</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-top">
                      <div className='card-summary-header'>Lolita</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="ti-btn ti-btn-light flex-grow font-medium ti-btn-summary">SITE REMARK</button>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="card-summary mb-3 mt-2 card-summary-width-bottom">
                      <div className='card-summary-header'>Active Traffic</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-bottom">
                      <div className='card-summary-header'>Active No Traffic</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-bottom">
                      <div className='card-summary-header'>New</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                    <div className="card-summary mb-3 mt-2 card-summary-width-bottom">
                      <div className='card-summary-header'>Dismantle</div>
                      <div className='card-summary-body'>
                        <div className='card-summary-total'>90.000</div>
                        <div className='card-summary-site'>Sites</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="logical-asset2" role="tabpanel" aria-labelledby="logical-asset">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="map2" role="tabpanel" aria-labelledby="map">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="photo2" role="tabpanel" aria-labelledby="photo">

                </div>
                <div className="tab-pane !border-0 !p-0 hidden" id="administrasi2" role="tabpanel" aria-labelledby="administrasi">

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
          <div className="box custom-card">
            <div className="box-header justify-between">
              <div className="box-title">
                Detail Site Id <b>(Total : 80.832)</b>
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
              <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 col-span-12 col-12 mb-3">
                  <input className="ti-form-control form-control-sm w-100" type="text" placeholder="Search by Sitename or SiteID..." aria-label=".form-control-sm example" />
                </div>
                <div className="xl:col-span-3 col-span-12 col-12 mb-3">
                  <select className="ti-form-control form-control-sm w-100" aria-label=".form-control-sm example" >
                    <option value="" hidden>Select Region</option>
                    <option value="">Region A</option>
                  </select>
                </div>
                <div className="xl:col-span-3 col-span-12 col-12 mb-3">
                  <select className="ti-form-control form-control-sm w-100" aria-label=".form-control-sm example" >
                    <option value="" hidden>Select Status</option>
                    <option value="">Status A</option>
                  </select>
                </div>
                <div className="xl:col-span-3 col-span-12 col-12 mb-3">
                  <select className="ti-form-control form-control-sm w-100" aria-label=".form-control-sm example" >
                  <option value="" hidden>All SAPSite System Status</option>
                  <option value="">Status A</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="table min-w-full whitespace-nowrap table-hover table-striped">
                  <thead className="thead-gradient">
                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                      <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">SiteID</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Site Name</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Region Name</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Provinsi</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Kota / Kabupaten</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Kecamatan</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Kelurahan</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Branch</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Sub Branch</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">NSA</th>
                      <th scope="col" className="!text-start !text-[0.85rem]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Dealsstatistics.map((idx) => (
                      <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                        <td><Link href="/dashboard/detail/site-a">SITE A <i className='ri-arrow-right-s-line fs-18'></i></Link></td>
                        <td>SITE NAME A</td>
                        <td>REGION A</td>
                        <td>PROVINSI A</td>
                        <td>KOTA A</td>
                        <td>KECAMATAN A</td>
                        <td>KELURAHAN A</td>
                        <td>BRANCH A</td>
                        <td>SUB BRANCH A</td>
                        <td>NSA A</td>
                        <td>
                          <span
                            className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>On Air</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="box-footer">
              <div className="sm:flex items-center">
                <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                  Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
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
                      <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
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
      </div>
    </Fragment>
  )
}

Dashboard.layout = "Contentlayout";
export default Dashboard;