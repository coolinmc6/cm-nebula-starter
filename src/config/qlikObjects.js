const line = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Date.autoCalendar.YearMonth'] } },
    ],
    qMeasures: [
      { qDef: { qDef: 'Sum([Number of New Cases])', autoSort: false }, qSortBy: { qSortByNumeric: 1 } },
    ],
    qInterColumnSortOrder: [1, 0],
  },
  showTitles: true,
  title: 'Line-chart',
  subtitle: 'Sample supernova linechart',
  footnote: '',
};

const mekko = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Case Owner Group'] } },
      { qDef: { qFieldDefs: ['Priority'] } },
    ],
    qMeasures: [
      { qDef: { qDef: '=Count([Case Is Closed])' } },
    ],
    qInterColumnSortOrder: [2, 0, 1],
    qInitialDataFetch: [{
      qWidth: 3,
      qHeight: 100,
    }],
  },
  showTitles: true,
  title: 'Mekko-chart',
  subtitle: 'Sample supernova mekkochart',
  footnote: '',
};

const sankey = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
      { qDef: { qFieldDefs: ['Priority'] }, qNullSuppression: true },
    ],
    qMeasures: [
      { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
    ],
    qInterColumnSortOrder: [2, 0, 1],
    qInitialDataFetch: [{
      qWidth: 3,
      qHeight: 3000,
    }],
  },
  showTitles: true,
  title: 'Sankey-chart',
  subtitle: 'Sample supernova sankeychart',
  footnote: '',
};

const bar = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
    ],
    qMeasures: [
      { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
    ],
    qInterColumnSortOrder: [1, 0],
  },
  showTitles: true,
  title: 'Bar-chart',
  subtitle: 'Sample supernova barchart',
  footnote: 'Case Owner Group / Avg([Case Duration Time])',
};

const funnel = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true, qLabel: 'Department' },
    ],
    qMeasures: [
      { qDef: { qDef: 'Avg([Case Duration Time])', autoSort: false }, qSortBy: { qSortByNumeric: -1 }, qLabel: 'Avg Duration' },
    ],
    qInterColumnSortOrder: [1, 0],
    qInitialDataFetch: [{
      qWidth: 2,
      qHeight: 5000,
    }],
  },
  showTitles: true,
  title: 'Funnel-chart',
  subtitle: 'Sample supernova funnelchart',
  footnote: 'Case Owner Group / Avg([Case Duration Time])',
};

const pie = {
  qHyperCubeDef: {
    qDimensions: [
      { qDef: { qFieldDefs: ['Case Owner Group'] }, qNullSuppression: true },
    ],
    qMeasures: [
      { qDef: { qDef: 'Avg([Case Duration Time])' } },
    ],
    qInitialDataFetch: [{
      qWidth: 2,
      qHeight: 100,
    }],
  },
  showTitles: true,
  title: 'Pie-chart',
  subtitle: 'Sample supernova piechart',
  footnote: '',
};

export {
  line, mekko, sankey, bar, funnel, pie
};
