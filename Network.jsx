import {fontInfo} from './Date.jsx'

const command = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | grep ' SSID'"

const refreshFrequency = 60000;

const className = {
    ...fontInfo,
    bottom: '98%',
    left: '1%',
    textAlign: 'left'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}
