import {fontInfo} from './Date.jsx'

const command = "./vol_and_batt_check.sh"

const refreshFrequency = 4000;

const className = {
    ...fontInfo,
    bottom: '1%',
    right: '1%',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render};
