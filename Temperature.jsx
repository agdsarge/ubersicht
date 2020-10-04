// the Keck lab report does not have a friendly API.
// However, it seems to be stable web page.
// I just need line 86 of the html!

import {fontInfo} from './Date.jsx'

const command = './temp.sh'

const refreshFrequency = 11 * 60000;

const className = {
    ...fontInfo,
    bottom: '98%',
    right: '47%',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>
    
export {command, refreshFrequency, className, render}
