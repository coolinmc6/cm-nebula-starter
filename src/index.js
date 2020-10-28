import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import Chart from './components/Chart';
import Selections from './components/Selections'
import { line, sankey, mekko, bar, funnel, pie } from './config/qlikObjects';

const App = () => {
    
    return (
        <div>
            <Selections />
            <Chart properties={line} type="line" />
            <Chart type="sankey" properties={sankey} />
            <Chart type="mekko" properties={mekko} />
            <Chart type="bar" properties={bar} />
            <Chart type="funnel" properties={funnel} />
            <Chart type="pie" properties={pie} />
        </div>
    )
}

render(<App />, document.getElementById('root'));
