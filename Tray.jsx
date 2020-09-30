import {fontInfo} from './Date.jsx'
const kaffeine = "test $(pgrep KeepingYouAwake) && if [[ $(pgrep caffeinate) ]]; then echo 'K+'; else echo 'K'; fi;"
const fluxStatus = 'test $(pgrep Flux) && echo Flux'

const command = kaffeine + fluxStatus;

const refreshFrequency = 2000;

const className = {
    ...fontInfo,
    bottom: '1%',
    left: '1%',
    textAlign: 'left'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}
