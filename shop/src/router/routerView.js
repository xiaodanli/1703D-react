import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

function RouterView(props){
    let {routes} = props;
    let routeArr = routes.filter(item => !item.redirect);
    let RedirectArr = routes.filter(item => item.redirect);
    return <Switch>
        {routeArr.map(item => <Route path={item.path} component={item.component} key={item.path}/>)}
        {RedirectArr.map(item => <Redirect key={item.path} from={item.path} to={item.redirect}></Redirect>)}
    </Switch>
}

export default RouterView
