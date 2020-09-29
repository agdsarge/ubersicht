const command = "/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport -I | awk '/ SSID/ {print $0}'";

const refreshFrequency = 60000;

const className = {
    bottom: '98%',
    left: '1%',
    color: '#F0F0F0',
    font: '14px Futura',
    "-webkit-font-smoothing": 'antialiased',
    textAlign: 'left'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}