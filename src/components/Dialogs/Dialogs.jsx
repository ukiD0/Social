import React from "react"
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom"

const Dialogs = (props) => {
    return(
        <div className={s.dialogs}>
            <div className = {s.dialogsItems}>
                <div className={s.dialog+' '+s.active}>
                    <NavLink to = "/dialogs/1">Uki</NavLink> 
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to = "/dialogs/2"> Kate</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                <NavLink to = "/dialogs/3">  Valentina</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                <NavLink to = "/dialogs/4">  Zhenya</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                <NavLink to = "/dialogs/5">Victor</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                <NavLink to = "/dialogs/6"> Sasha</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                <NavLink to = "/dialogs/7"> Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>I am OK</div>
            </div>
        </div>
        
       
    )
}


export default Dialogs;