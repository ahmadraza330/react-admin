import React from 'react'
import './widgetSm.css'
import {Visibility} from '@material-ui/icons'

function WidgetSm() {
    return (
        <div className="WidgetSm">
            <span className="WidgetSmTitle">New Join Members</span>
            <ul className="WidgetSmList">
                <li className="WidgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetSmImg" alt="" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Anna Keller</span>
                        <span className="WidgetSmUserTitle">Front End Developer</span>
                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetSmImg" alt="" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Anna Keller</span>
                        <span className="WidgetSmUserTitle">Front End Developer</span>
                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetSmImg" alt="" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Anna Keller</span>
                        <span className="WidgetSmUserTitle">Front End Developer</span>
                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetSmImg" alt="" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Anna Keller</span>
                        <span className="WidgetSmUserTitle">Front End Developer</span>
                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="WidgetSmListItem">
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" className="WidgetSmImg" alt="" />
                    <div className="WidgetSmUser">
                        <span className="WidgetSmUserName">Anna Keller</span>
                        <span className="WidgetSmUserTitle">Front End Developer</span>
                    </div>
                    <button className="WidgetSmBtn">
                        <Visibility className="WidgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
