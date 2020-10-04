import {fontInfo} from './Date.jsx'

const command = './tray.sh' 

const refreshFrequency = 10000;

const className = {
    ...fontInfo,
    bottom: '1%',
    left: '1%',
    textAlign: 'left'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}
