const command = 'date +"%A, %d %B | %R"';

const refreshFrequency = 12000;

const className = {
    bottom: '98%',
    right: '1%',
    color: '#F0F0F0',
    font: '14px Futura',
    "-webkit-font-smoothing": 'antialiased',
    textAlign: 'right'
};

const render = ({output}) => <div> {output} </div>;

export {command, refreshFrequency, className, render}