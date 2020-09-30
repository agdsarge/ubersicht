import {fontInfo} from './Date.jsx'

const vol = "osascript -e 'output volume of (get volume settings)';";
const line = "echo ' |';"
const batt = "./battery_check.sh"
const command = vol + line + batt

const refreshFrequency = 4000;

const className = {
    ...fontInfo,
    bottom: '1%',
    right: '1%',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}
