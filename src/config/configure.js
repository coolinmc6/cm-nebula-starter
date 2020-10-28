// https://qlik.dev/tutorials/build-a-simple-mashup-using-nebulajs
import { embed } from '@nebula.js/stardust';
import barChart from '@nebula.js/sn-bar-chart';
import lineChart from '@nebula.js/sn-line-chart';
import pieChart from '@nebula.js/sn-pie-chart';
import sankeyChart from '@nebula.js/sn-sankey-chart';
import funnelChart from '@nebula.js/sn-funnel-chart';
import mekkoChart from '@nebula.js/sn-mekko-chart';

const configure = embed.createConfiguration({
  context: {
    theme: 'light',
    language: 'en-US',
    constraints: {
      active: false,
      passive: false,
      select: false,
    },
  },
  types: [
    {
      name: 'bar',
      load: () => barChart,
    },
    {
      name: 'line',
      load: () => lineChart,
    },
    {
      name: 'pie',
      load: () => pieChart,
    },
    {
      name: 'sankey',
      load: () => sankeyChart,
    },
    {
      name: 'funnel',
      load: () => funnelChart,
    },
    {
      name: 'mekko',
      load: () => mekkoChart,
    },
  ],
});

export default configure;
