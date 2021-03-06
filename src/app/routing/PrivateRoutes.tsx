import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DeInvoice} from '../modules/documents/components/DeInvoice'
import Delivery from '../modules/documents/components/Delivery'
import Deposit from '../modules/documents/components/Deposit'
import {DereceiptPage} from '../modules/documents/components/DereceiptPage'
import {Invoice} from '../modules/documents/components/Invoice'
import InvoiceReceipt from '../modules/documents/components/InvoiceReceipt'
import {Receipt} from '../modules/documents/components/Receipt'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const DocumentPage = lazy(() => import('../modules/documents/DocumentPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        {/* <Route path='/receipt' component={Receipt} /> */}
        <Route path='/receipt' component={DocumentPage} />
        <Route path='/dereceipt' component={DereceiptPage} />
        <Route path='/invoice' component={Invoice} />
        <Route path='/deinvoice' component={DeInvoice} />
        <Route path='/deposit' component={Deposit} />
        <Route path='/delivery' component={Delivery} />
        <Route path='/invoicereceipt' component={InvoiceReceipt} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
