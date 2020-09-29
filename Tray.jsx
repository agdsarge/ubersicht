const kaffeine = "test $(pgrep KeepingYouAwake) && if [[ $(pgrep caffeinate) ]]; then echo 'K+'; else echo 'K'; fi;"
const fluxStatus = 'test $(pgrep Flux) && echo Flux'

const command = kaffeine + fluxStatus;

const refreshFrequency = 2000;

const className = {
    bottom: '1%',
    left: '1%',
    color: '#F0F0F0',
    font: '14px Futura',
    "-webkit-font-smoothing": 'antialiased',
    textAlign: 'left'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}