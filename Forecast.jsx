import {fontInfo} from './Date.jsx'
import { css } from "uebersicht"

const command = './forecast.sh'

const refreshFrequency = 60 * 1000 * 60;

const className = {
    ...fontInfo,
    bottom: '1%',
    right: '20%',
    textAlign: 'left',
    width: '620px'
}


const column = css({
    float: 'left',
    width: '180px',
    textAlign: 'left'
})

const row = css({
    display: 'table',
    clear: 'both',
})

const render = ({output}) => {
    console.log(output)
    let [now, w0, next, w1, later, w2] = output.split(',')
    if (!!output) {
        return (
            <div>
                <div className={row}>
                    <div className={column} >
                        <div> {now} </div>
                        <div> {w0} </div>
                    </div>
                    <div className={column} >
                        <div> {next} </div>
                        <div> {w1} </div>
                    </div>
                    <div className={column} >
                        <div> {later} </div>
                        <div> {w2} </div>
                    </div>
                </div>
            </div>
            
        )
    } else {
        return <div></div>
    }

    // let [now, next, later] = output.split(',').map(f => f.split(':'))
    // if (next[0]) {
    //     return (
            <div>
                <div className={row}>
                    <div className={column} >
                        <div> {now[0]} </div>
                        <div> {now[1]} </div>
                    </div>
                    <div className={column} >
                        <div> {next[0]} </div>
                        <div> {next[1]} </div>
                    </div>
                    <div className={column} >
                        <div> {later[0]} </div>
                        <div> {later[1]} </div>
                    </div>
                </div>
            </div>
    //     )
    // } else {
    //     return null
    // }
    
}

export {command, refreshFrequency, className, render}
