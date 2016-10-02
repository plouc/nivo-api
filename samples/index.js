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
}