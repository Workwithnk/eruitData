import React, {useState} from 'react'
import {KTSVG} from '../../../../_metronic/helpers'
import {RiInformationLine} from 'react-icons/ri'
import {FaBalanceScale} from 'react-icons/fa'

function Delivery() {
  const [totalRecords, setTotalRecords] = useState(0)
  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-header'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Delivery</span>
        </h3>
      </div>
      <div className='card-body border-top p-9 pb-3'>
        <div className='row mb-6'>
          <div className='col-lg-12'>
            <div className='row d-flex'>
              <div className='col-lg-3 fv-row'></div>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Max Receipt'
                />
              </div>

              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Min Receipt'
                />
              </div>

              <div className='col-lg-3 fv-row'>
                <div className='w-100 position-relative'>
                  <KTSVG
                    path='/media/icons/duotune/general/gen021.svg'
                    className='svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y'
                  />
                  <input
                    type='text'
                    className='form-control form-control-solid px-15'
                    name='search'
                    placeholder='Search'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body py-3'>
        <div className='table-responsive'>
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px'>Total Receipt</th>
                <th className='min-w-120px'>Total With Discount </th>
                <th className='min-w-140px'>Total Before Discount</th>
                <th className='min-w-120px'>Status</th>
                <th className='min-w-120px'>Delivery Date</th>
                <th className='min-w-120px'>Name</th>
                <th className='min-w-120px'>Booking Number</th>
                <th className='min-w-120px'>Order</th>
                <th className='min-w-120px'>Delivery</th>
                <th className='min-w-120px'>Action</th>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-13-check'
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{fontSize: '15px'}}>
                <td>250</td>
                <td>240</td>
                <td>240</td>
                <td></td>
                <td>17/02/2019</td>
                <td>Rakesh Patel</td>
                <td>512</td>
                <td>530</td>
                <td>1081</td>
                <td>
                  <RiInformationLine
                    style={{
                      fontSize: '25px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      backgroundColor: '#B5B5C3',
                      padding: '2px',
                    }}
                  />
                  <FaBalanceScale
                    style={{
                      padding: '2px',
                      borderRadius: '6px',
                      fontSize: '25px',
                      cursor: 'pointer',
                      backgroundColor: '#EFC9D5 ',
                      margin: '0px 3px',
                    }}
                  />
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr style={{fontSize: '15px'}}>
                <td>250</td>
                <td>240</td>
                <td>240</td>
                <td></td>
                <td>17/02/2019</td>
                <td>Rakesh Patel</td>
                <td>512</td>
                <td>530</td>
                <td>1081</td>
                <td>
                  <RiInformationLine
                    style={{
                      fontSize: '25px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      backgroundColor: '#B5B5C3',
                      padding: '2px',
                    }}
                  />
                  <FaBalanceScale
                    style={{
                      padding: '2px',
                      borderRadius: '6px',
                      fontSize: '25px',
                      cursor: 'pointer',
                      backgroundColor: '#EFC9D5 ',
                      margin: '0px 3px',
                    }}
                  />
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='d-flex flex-stack flex-wrap pt-5 mb-5'>
            <div className='fs-6 fw-bold text-gray-700'>
              Showing 1 to 10 of {totalRecords} entries
            </div>

            <ul className='pagination'>
              <li className='page-item previous'>
                <a href='#' className='page-link'>
                  <i className='previous'></i>
                </a>
              </li>

              <li className='page-item active'>
                <a href='#' className='page-link'>
                  1
                </a>
              </li>

              <li className='page-item'>
                <a href='#' className='page-link'>
                  2
                </a>
              </li>

              <li className='page-item'>
                <a href='#' className='page-link'>
                  3
                </a>
              </li>

              <li className='page-item'>
                <a href='#' className='page-link'>
                  4
                </a>
              </li>

              <li className='page-item'>
                <a href='#' className='page-link'>
                  5
                </a>
              </li>

              <li className='page-item next'>
                <a href='#' className='page-link'>
                  <i className='next'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
