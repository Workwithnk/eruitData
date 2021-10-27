/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useEffect, useRef, useState} from 'react'
import {BsChevronDown, BsPencilSquare} from 'react-icons/bs'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Formik, Form, FormikValues, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import {DropdownButton, Dropdown, Container, Row, Col} from 'react-bootstrap-v5'
import {StepperComponent} from '../../../assets/ts/components'

interface ICreateAccount {
  appName: string
  category: string
  framework: string
  dbName: string
  dbType: string
  nameOnCard: string
  cardNumber: string
  cardExpiryMonth: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
}

const inits: ICreateAccount = {
  appName: '',
  category: '1',
  framework: '1',
  dbName: '',
  dbType: '1',
  nameOnCard: 'Max Doe',
  cardNumber: '4111 1111 1111 1111',
  cardExpiryMonth: '1',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
}

const createAppSchema = [
  Yup.object({
    appName: Yup.string().required().label('App name'),
    category: Yup.string().required().label('Category'),
  }),
  Yup.object({
    framework: Yup.string().required().label('Framework'),
  }),
  Yup.object({
    dbName: Yup.string().required().label('Database name'),
    dbType: Yup.string().required().label('Database engine'),
  }),
  Yup.object({
    nameOnCard: Yup.string().required().label('Name'),
    cardNumber: Yup.string().required().label('Card Number'),
    cardExpiryMonth: Yup.string().required().label('Expiration Month'),
    cardExpiryYear: Yup.string().required().label('Expiration Year'),
    cardCvv: Yup.string().required().label('CVV'),
  }),
]

const displayDropDown = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
}
const blockDropDown = {
  display: 'none',
}

const liOfDropDown = {
  backgroundColor: 'skyblue',
  listStyle: 'none',
  fontSize: '16px',
  margin: '5px 0px',
}

const formDataContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '10px 5px',
}
const formHeading = {
  marginRight: '3%',
}
const tableHeaderData = {
  fontSize: '16px',
  fontWeight: 'lighter',
  textAlign: 'center',
}

const Main: FC = () => {
  const stepperRef = useRef<HTMLDivElement | null>(null)
  const stepper = useRef<StepperComponent | null>(null)
  const [currentSchema, setCurrentSchema] = useState(createAppSchema[0])
  const [initValues] = useState<ICreateAccount>(inits)
  const [disDropDown, setdisDropDown] = useState(false)

  const handleDropDown = () => {
    setdisDropDown(!disDropDown)
  }

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (values: ICreateAccount, actions: FormikValues) => {
    if (!stepper.current) {
      return
    }

    setCurrentSchema(createAppSchema[stepper.current.currentStepIndex])

    if (stepper.current.currentStepIndex !== stepper.current.totatStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      actions.resetForm()
    }
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef])

  return (
    <div className='modal fade' id='kt_modal_create_app' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered mw-900px'>
        <div className='modal-content' style={{overflow: 'scroll'}}>
          <div className='modal-header'>
            <h2>Receipt</h2>
            <div className='d-flex'>
              <a
                href='#'
                className='btn mx-2 btn-custom btn-primary btn-flex btn-color-white  fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                Search Order
              </a>

              <DropdownButton id='dropdown-basic-button' title='New Document'>
                <Dropdown.Item style={{backgroundColor: 'blue'}} href='#/action-1'>
                  Select
                </Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Receipt</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>De-Receipt</Dropdown.Item>
                <Dropdown.Item href='#/action-4'>Invoice</Dropdown.Item>
                <Dropdown.Item href='#/action-5'>De-Invoice</Dropdown.Item>
                <Dropdown.Item href='#/action-6'>Delivery</Dropdown.Item>
                <Dropdown.Item href='#/action-7'>Invoice-Receipt</Dropdown.Item>
              </DropdownButton>
              <a
                href='#'
                className='btn mx-2 btn-custom btn-primary btn-flex btn-color-white  fw-bolder'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
                onClick={handleDropDown}
              >
                Search Booking
              </a>
            </div>
            <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
              <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
            </div>
          </div>
          <form className='model-form  my-3 '>
            <Container>
              <Row>
                <Col xs={6}>
                  <div className='form-group my-2'>
                    <h5>Receipt</h5>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='enter receipt number'
                    />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Receipt Date</h5>
                    <input type='date' className='form-control' />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Order</h5>
                    <input type='text' className='form-control' placeholder='order detils' />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Booking Number</h5>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='enter booking number '
                    />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Address</h5>
                    <input type='text' className='form-control' placeholder='enter address ' />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className='form-group my-2'>
                    <h5>Chinese</h5>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='enter event details '
                    />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Event</h5>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='enter event details '
                    />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Email</h5>
                    <input type='text' className='form-control' placeholder='enter email ' />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Telephone</h5>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='enter telephone number '
                    />
                  </div>
                  <div className='form-group my-2'>
                    <h5>Message</h5>
                    <textarea className='form-control'></textarea>
                  </div>
                </Col>
              </Row>
            </Container>
          </form>
          <div className='container model-table'>
            <table className='table' style={{border: '1px solid lightgray'}}>
              <thead style={{border: '1px solid lightgray'}} className='bg-primary '>
                <tr>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col py-2'
                  >
                    MONEY
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    DATE PAY
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    SCORE
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    PARTITION
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    BANK
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    CHECK NUMBER
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  >
                    TYPE
                  </th>
                  <th
                    style={{fontSize: '16px', fontWeight: 'lighter', textAlign: 'center'}}
                    scope='col'
                  ></th>
                </tr>
              </thead>
              <tbody style={{border: '1px solid lightgray'}}>
                <tr>
                  <td>
                    <input type='text' className='form-control' placeholder='0.00 ' />
                  </td>
                  <td>
                    <input type='date' className='form-control' placeholder='/2021 ' />
                  </td>
                  <td>
                    <input type='number' className='form-control' placeholder='0' />
                  </td>
                  <td>
                    <input type='text' className='form-control' />
                  </td>
                  <td>
                    <input type='text' className='form-control' />
                  </td>
                  <td>
                    <input type='number' className='form-control' />
                  </td>
                  <td style={{display: 'flex'}}>
                    <BsPencilSquare
                      style={{
                        fontSize: '22px',
                        backgroundColor: '#89F284',
                        cursor: 'pointer',
                        padding: '3px',
                      }}
                    />
                    <select>
                      <option>Money</option>
                      <option>Money</option>
                      <option>Money</option>
                      <option>Money</option>
                      <option>Money</option>
                    </select>
                  </td>
                  <td>
                    <button type='button' className='btn btn-danger my-2'>
                      Cancel
                    </button>
                    <button type='button' className='btn btn-primary'>
                      save
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type='text' className='form-control' placeholder='0.00 ' />
                  </td>
                  <td colSpan={5}></td>
                  <td style={{textAlign: 'end', fontSize: '15px'}} colSpan={2}>
                    Total
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=' container form-check d-flex justify-content-end model-checkbox'>
            <input className='form-check-input' type='checkbox' />
            <label className='form-check-label mx-3 ' style={{fontSize: '15px'}}>
              Print with Copy
            </label>
          </div>
          <div className='model-endBtn container form-check d-flex justify-content-end my-2'>
            <DropdownButton id='dropdown-basic-button' style={{marginRight: '5px'}} title='Print'>
              <Dropdown.Item href='#/action-2'>Output as PDF</Dropdown.Item>
              <Dropdown.Item href='#/action-3'>Output as Mail</Dropdown.Item>
            </DropdownButton>

            <button type='button' className='btn btn-danger'>
              Cancel
            </button>
          </div>
          <div className='modal-body py-lg-10 px-lg-10'>
            <div
              ref={stepperRef}
              className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
              id='kt_modal_create_app_stepper'
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Main}
