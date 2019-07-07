import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
function tick() {
    ReactDOM.render(
        <App data={new Date()}/>,
        document.getElementById('foot')
    )
}
setInterval(tick, 1000);
registerServiceWorker();
//这是整个页面运行的主函数index