import {fontInfo} from './Date.jsx'
import { css } from "uebersicht"

const command = './forecast.sh'

const refreshFrequency = 60 * 1000 * 60;

const className = {
    ...fontInfo,
    font: '15px Inconsolata',
    bottom: '1%',
    left: '35%',
    textAlign: 'left',
    whiteSpace: 'pre-wrap'
}

const render = ({output}) => <div>{output}</div>   

export {command, refreshFrequency, className, render}
   