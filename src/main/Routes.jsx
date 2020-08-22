import React from 'react'
import { Route, Switch, Redirect } from "react-router";

import Home from '../components/home/Home'
import StockCrud from '../components/stock/StockCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/stocks' component={StockCrud} />
        <Redirect from='*' to='/' />
    </Switch>
