/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { KTSVG } from '../../../../_metronic/helpers';
import ReceiptService from '../../../services/ReceiptService';

const Receipt: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [receiptListState, setReceiptListState] = useState([]);
  const [iDisplayStartState, setIdisplayStartState] = useState(0);
  const [iDisplayLengthState, setIDisplayLengthState] = useState(10);
  const [sSortDir_0State, setsSortDir_0State] = useState("desc");
  const [totalRecords, setTotalRecords] = useState(0);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const params = { iDisplayStart: iDisplayStartState, iDisplayLength: iDisplayLengthState, sSortDir_0: sSortDir_0State };
    SearchReceipt(params);
  }, [iDisplayLengthState, iDisplayStartState, sSortDir_0State]);

  const SearchReceipt = (params: any) => {
    setLoading(true)
    ReceiptService.SearchReceipt(params)
      .then(async (res: any) => {
        console.log(res.Data);
        setReceiptListState(res.Data);
        setTotalRecords(res.Data.length);
        setLoading(false)
      }).catch(error => {
        console.log(error);
        setLoading(false)
      })
  }

  return (
    <div className='card mb-5 mb-xl-10'>
      {/* begin::Header */}
      <div className='card-header'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Receipt</span>
        </h3>
      </div>
      {/* end::Header */}

      {/* begin:: search header */}
      <div className='card-body border-top p-9 pb-3'>
        <div className='row mb-6'>
          <div className='col-lg-12'>
            <div className='row d-flex'>
              <div className='col-lg-3 fv-row'></div>
              <div className='col-lg-3 fv-row'>
                <input
                  type='text'
                  className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                  placeholder='Min Receipt'
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
      {/* end:: search header */}

      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-150px'>Total</th>
                <th className='min-w-140px'>Email</th>
                <th className='min-w-120px'>Date</th>
                <th className='min-w-120px'>Name</th>
                <th className='min-w-120px'>Booking No.</th>
                <th className='min-w-120px'>Order</th>
                <th className='min-w-120px'>Receipt</th>
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
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {receiptListState && receiptListState.map((row: any, index: number) => {
                return <tr key={index}>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                      {`100${index}`}
                    </a>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                      {row.EmailId}
                    </a>
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                      20/10/2021
                    </a>
                    {/* <span className='text-muted fw-bold text-muted d-block fs-7'>Code: Paid</span> */}
                  </td>
                  <td>
                    <a href='#' className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                      {row.FirstName}
                    </a>
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary fs-6'>{row.Phone}</td>
                  <td className='text-dark fw-bolder text-hover-primary fs-6'>{`ORD${index}`}</td>
                  <td className='text-dark fw-bolder text-hover-primary fs-6'>{index}{index}</td>
                  <td className='text-start'>
                    {/* <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a> */}
                    <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                      <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                    </a>
                  </td>
                  <td>
                    <div className='form-check form-check-sm form-check-custom form-check-solid'>
                      <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}

          <div className='d-flex flex-stack flex-wrap pt-5 mb-5'>
            <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of {totalRecords} entries</div>

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
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { Receipt }