const vol = "osascript -e 'output volume of (get volume settings)';";
const line = "echo ' |';"
const batt = "./battery_check.sh"
const command = vol + line + batt

const refreshFrequency = 4000;

const className = {
    bottom: '1%',
    right: '1%',
    color: '#F0F0F0',
    font: '14px Futura',
    "-webkit-font-smoothing": 'antialiased',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}