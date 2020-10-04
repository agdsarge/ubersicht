const command = 'date +"%A, %d %B | %R"';

const refreshFrequency = 12000;

const fontInfo = {
    color: '#F0F0F0',
    font: '14px Futura',
    "webkitFontSmoothing": 'antialiased'
}

const className = {
    ...fontInfo,
    bottom: '98%',
    right: '1%',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render, fontInfo}
