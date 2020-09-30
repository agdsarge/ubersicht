import {fontInfo} from './Date.jsx'
import { css } from "uebersicht"

const command = './forecast.sh'

const refreshFrequency = 60 * 1000 * 60;

const className = {
    ...fontInfo,
    bottom: '1%',
    right: '20%',
    textAlign: 'right',
    width: '620px'
}


const column = css({
    float: 'left',
    width: '180px',
    textAlign: 'left'
})

const row = css({
    content: '',
    display: 'table',
    clear: 'both',
})

const render = ({output}) => {
    output = output.trim()
    output = output.slice(0, output.length - 1)
    let [now, next, later] = output.split(',').map(f => f.split(':'))
    return (
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
    )
}

export {command, refreshFrequency, className, render}
