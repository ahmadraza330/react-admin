import React from 'react'
import Chart from '../../components/charts/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './homePage.css'
import {data} from '../../data'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function HomePage() {
  
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWdgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default HomePage
