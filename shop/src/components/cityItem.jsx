import React from 'react'
import {withRouter} from 'react-router-dom'

function CityItem(props){
    let {store_id,store_name} = props;
    return <div>
        <h1 onClick={() => {props.history.push(`/list/${store_id}`)}}>{store_name}</h1>
    </div>
}

export default withRouter(CityItem)