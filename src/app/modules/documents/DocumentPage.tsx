import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {DereceiptPage} from './components/DereceiptPage'
import {Receipt} from './components/Receipt'

const chatBreadCrumbs: Array<PageLink> = [
  {
    title: 'Documents',
    path: '/receipt',
    isSeparator: false,
    isActive: false,
  },

  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const DocumentPage: React.FC = () => {
  return (
    <Switch>
      <Route path='/receipt'>
        <PageTitle breadcrumbs={chatBreadCrumbs}>Receipt</PageTitle>
        <Receipt />
      </Route>
    </Switch>
  )
}

export default DocumentPage
