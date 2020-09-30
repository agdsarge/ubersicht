// the Keck lab report does not have a friendly API.
// However, it seems to be stable web page.
// I just need line 86 of the html!

import {fontInfo} from './Date.jsx'

const command = "wget -qO- https://media.wm.edu/content/as/kecklab/Weather/KeckWeather.htm | sed '86q;d'";

const refreshFrequency = 11 * 60000;

const convertFtoC = (f) => {
    let m = 5 / 9
    let b = -160 / 9
    let c = m * parseFloat(f) + b
    return Math.round((c + Number.EPSILON) * 10) / 10
}

const className = {
    ...fontInfo,
    bottom: '98%',
    right: '47%',
    textAlign: 'right'
};

const render = ({output}) => {

    let fah = output
    let cel = convertFtoC(fah)
    return (
        <div> {`${fah} | ${cel}`} </div>
    )
}

export {command, refreshFrequency, className, render}
