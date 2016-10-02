/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict'

const {
    generateLibTree,
    generateDrinkStats,
} = require('nivo-generators')


module.exports = {
    line: {
        type: 'line',
        props: {
            width:      800,
            height:     500,
            data:       generateDrinkStats(),
            keys:       ['whisky', 'rhum', 'gin', 'vodka', 'cognac'],
            identity:   'country',
            cumulative: false,
            curve:      'monotoneX',
            colors:     'nivo',
        },
    },
    bar: {
        type:  'bar',
        props: {
            width:      800,
            height:     500,
            data:       generateDrinkStats(),
            keys:       ['whisky', 'rhum', 'gin', 'vodka', 'cognac'],
            identity:   'country',
            colors:     'nivo',
        },
    },
    bubble: {
        type:  'bubble',
        props: {
            width:    600,
            height:   600,
            root:     generateLibTree(),
            identity: 'name',
            value:    'loc',
            label:    'name',
            margin:   { top: 0, right: 0, bottom: 0, left: 0 },
            colors:   'nivo',
        },
    },
    treemap: {
        type:  'treemap',
        props: {
            type:         'treemap',
            width:        800,
            height:       500,
            root:         generateLibTree(),
            identity:     'name',
            value:        'loc',
            label:        'loc',
            labelFormat:  '.0s',
            leavesOnly:   false,
            innerPadding: 3,
            outerPadding: 3,
            colors:       'nivo',
        },
    },
    chord: {
        type:  'chord',
        props: {
            width:             800,
            height:            800,
            data:              [
                [ 11975,  5871, 8916, 2868, 1967, 2987, 4300 ],
                [  1951, 10048, 2060, 6171, 1967, 2987, 4300 ],
                [  8010, 16145, 8090, 8045, 1967, 2987, 4300 ],
                [  1013,   990,  940, 6907, 2306, 1200, 900  ],
                [  1013,   990,  940, 6907,  800, 3400, 1200 ],
                [  1013,   990,  940, 6907, 1967, 2987, 4300 ],
                [  1013,   990,  940, 6907, 3000, 3456, 876  ],
            ],
            colors:            'd320c',
            padAngle:          0.01,
            innerRadiusRatio:  0.98,
            innerRadiusOffset: 0.01,
        },
    },
}