import React from 'react'
import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,45</span>
                    <span className="featuredMoneyRate">-11 <ArrowDownward className="featuredIcon nagtive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$11,45</span>
                    <span className="featuredMoneyRate">-12.1 <ArrowDownward className="featuredIcon nagtive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,45</span>
                    <span className="featuredMoneyRate">+21.5 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
