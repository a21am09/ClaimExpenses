export const testExpensesSets =
{
  wholeNumbersValues: [
    {
      type: 'mileage',
      description: 'Travel to training',
      date: '2026-03-05',
      inputValue: '100',
      monetaryValue: '55'
    },
    {
      type: 'accommodation',
      description: 'Hotel',
      date: '2026-03-05',
      inputValue: '95',
      monetaryValue: '95'
    },
    {
      type: 'sustenance',
      description: 'Evening meal',
      date: '2026-03-05',
      inputValue: '25',
      monetaryValue: '25'
    }
  ],
  decimalNumberValues: [
    {
      type: 'mileage',
      description: 'Travel to training',
      date: '2026-03-05',
      inputValue: '85',
      monetaryValue: '46.75'
    },
    {
      type: 'accommodation',
      description: 'Hotel',
      date: '2026-03-05',
      inputValue: '109.84',
      monetaryValue: '109.84'
    },
    {
      type: 'sustenance',
      description: 'Evening meal',
      date: '2026-03-05',
      inputValue: '26.98',
      monetaryValue: '26.98'
    }
  ],
  blankExpense: [],
  exceedThreshold: [
    {
      type: 'mileage',
      description: 'Travel to training',
      date: '2026-03-05',
      inputValue: '200',
      monetaryValue: '110'
    },
    {
      type: 'accommodation',
      description: 'Hotel',
      date: '2026-03-05',
      inputValue: '275',
      monetaryValue: '275'
    },
    {
      type: 'sustenance',
      description: 'Evening meal',
      date: '2026-03-05',
      inputValue: '30',
      monetaryValue: '30'
    },
    {
      type: 'public transport',
      description: 'Train journey',
      date: '2026-03-06',
      inputValue: '180',
      monetaryValue: '180'
    },
    {
      type: 'other',
      description: 'Stationery',
      date: '2026-04-01',
      inputValue: '30.99',
      monetaryValue: '30.99'
    }
  ],
  'underThreshold': [
    {
      type: 'mileage',
      description: 'Travel to training',
      date: '2026-03-05',
      inputValue: '50',
      monetaryValue: '27.50'
    },
    {
      type: 'accommodation',
      description: 'Hotel',
      date: '2026-03-05',
      inputValue: '75',
      monetaryValue: '75'
    },
    {
      type: 'sustenance',
      description: 'Evening meal',
      date: '2026-03-05',
      inputValue: '10.75',
      monetaryValue: '10.75'
    },
    {
      type: 'public transport',
      description: 'Train journey',
      date: '2026-03-06',
      inputValue: '108',
      monetaryValue: '108'
    },
    {
      type: 'other',
      description: 'Stationery',
      date: '2026-04-01',
      inputValue: '15.99',
      monetaryValue: '15.99'
    }
  ],
  thresholdBoundary: [
    {
      type: 'mileage',
      description: 'Travel to training',
      date: '2026-03-05',
      inputValue: '181.8181',
      monetaryValue: '100'
    },
    {
      type: 'accommodation',
      description: 'Hotel',
      date: '2026-03-05',
      inputValue: '250',
      monetaryValue: '250'
    },
    {
      type: 'sustenance',
      description: 'Evening meal',
      date: '2026-03-05',
      inputValue: '25',
      monetaryValue: '25'
    },
    {
      type: 'public transport',
      description: 'Train journey',
      date: '2026-03-06',
      inputValue: '150',
      monetaryValue: '150'
    },
    {
      type: 'other',
      description: 'Stationery',
      date: '2026-04-01',
      inputValue: '25',
      monetaryValue: '25'
    }
  ]
};