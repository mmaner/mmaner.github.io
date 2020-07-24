

(function (window) {
    window.numeral.locale('');
})(this);

(function ($) {
    var APY = {};
    APY.cells = {};
        APY.cells.s0r0c0 = {
                                    value: 'Cell\u0020Type',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r0c1 = {
                                    value: '30Q',
                                    type: 'text',
                                    format: '0.[000000000]'
                                };
                                                                                                                                                                    APY.cells.s0r1c0 = {
                                    value: 'S\u0020Count\u0020\u0028Series\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r1c1 = {value: 12,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r1c2 = {
                                    value: 'S',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r2c0 = {
                                    value: 'P\u0020Count\u0020\u0028Parallel\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r2c1 = {value: 5,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r2c2 = {
                                    value: 'P',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r3c0 = {
                                    value: 'Motor\u0020KV',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r3c1 = {value: 190,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r3c2 = {
                                    value: 'KV',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r4c0 = {
                                    value: 'Motor\u0020Poles\u0020\u002814\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s0r4c1 = {
                                    value: '14',
                                    type: 'number',
                                    format: ''
                                };
                                                                            APY.cells.s0r4c2 = {
                                    value: 'poles',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r5c0 = {
                                    value: 'Motor\u0020Pulley\u0020Teeth',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r5c1 = {value: 15,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r5c2 = {
                                    value: 'T',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r6c0 = {
                                    value: 'Wheel\u0020Pulley\u0020Teeth',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r6c1 = {value: 72,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r6c2 = {
                                    value: 'T',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r7c0 = {
                                    value: 'Wheel\u0020size\u0020\u0028mm\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r7c1 = {value: 200,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r7c2 = {
                                    value: 'mm',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r8c0 = {
                                    value: 'Efficiency\u0020\u0028Loaded\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r8c1 = {value: 85,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r8c2 = {
                                    value: '\u0025',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                                                            APY.cells.s0r10c0 = {
                                    value: 'Watt\u0020Hours\u0020\u0028Max\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r10c1 = {value: 756,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r10c2 = {
                                    value: 'WH',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r11c0 = {
                                    value: 'Watt\u0020Hours\u0020\u0028Nominal\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r11c1 = {value: 648,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r11c2 = {
                                    value: 'WH',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r12c0 = {
                                    value: 'ERPM\u0020\u0028Electrical\u0020RPM\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r12c1 = {value: 67032,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r12c2 = {
                                    value: 'ERPM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r13c0 = {
                                    value: 'RPM\u0020\u0028\u0040\u0020shaft\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r13c1 = {value: 9576,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r13c2 = {
                                    value: 'RPM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r14c0 = {
                                    value: 'Max\u0020KV\u0020\u0028\u0040\u002060k\u0020erpm\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r14c1 = {value: 170.634920634921,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r14c2 = {
                                    value: 'KV',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r15c0 = {
                                    value: 'Max\u0020Voltage\u0020\u0028V\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r15c1 = {value: 45.2631578947368,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r15c2 = {
                                    value: 'V',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r16c0 = {
                                    value: 'Max\u0020Wattage',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r16c1 = {value: 5040,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r16c2 = {
                                    value: 'W',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r17c0 = {
                                    value: 'Max\u0020Charge\u0020Rate',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r17c1 = {value: 15,type: 'number',
                                    format: '0.[000000000]'
                                };                                                                            APY.cells.s0r17c2 = {
                                    value: 'A',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                                                            APY.cells.s0r19c0 = {
                                    value: 'Cell\u0020Capacity\u0020\u0028mAh\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r19c1 = {value: 3000,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r19c2 = {
                                    value: 'mAh',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r20c0 = {
                                    value: 'Cell\u0020Nom\u0020Volts\u0020\u0028V\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r20c1 = {value: 3.6,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r20c2 = {
                                    value: 'V',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r21c0 = {
                                    value: 'Cell\u0020Max\u0020Volts\u0020\u0028V\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r21c1 = {value: 4.2,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r21c2 = {
                                    value: 'V',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r22c0 = {
                                    value: 'Cell\u0020Cont\u0020Discharge',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r22c1 = {value: 20,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r22c2 = {
                                    value: 'A',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r23c0 = {
                                    value: 'Battery\u0020Capacity\u0020\u0028mAh\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r23c1 = {value: 15000,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r23c2 = {
                                    value: 'mAh',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r24c0 = {
                                    value: 'Battery\u0020Voltage\u0020\u0028MAX\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r24c1 = {value: 50.4,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r24c2 = {
                                    value: 'V',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r25c0 = {
                                    value: 'Battery\u0020Voltage\u0020\u0028NOM\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r25c1 = {value: 43.2,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r25c2 = {
                                    value: 'V',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r26c0 = {
                                    value: 'Battery\u0020Cont\u0020Discharge\u0020\u0028A\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r26c1 = {value: 100,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r26c2 = {
                                    value: 'A',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r27c0 = {
                                    value: 'Gear\u0020Ratio',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r27c1 = {value: 4.8,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r27c2 = {
                                    value: '\u003A1',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                                                            APY.cells.s0r29c0 = {
                                    value: 'Range,\u0020Max\u0020\u0028Miles\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r29c1 = {value: 25.2,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r29c2 = {
                                    value: 'M',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r30c0 = {
                                    value: 'Range,\u0020Max\u0020\u0028KM\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r30c1 = {value: 40.32,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r30c2 = {
                                    value: 'KM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r31c0 = {
                                    value: 'Range,\u0020Loaded\u0020\u0028Miles\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r31c1 = {value: 21.42,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r31c2 = {
                                    value: 'M',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r32c0 = {
                                    value: 'Range,\u0020Loaded\u0020\u0028KM\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r32c1 = {value: 34.272,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r32c2 = {
                                    value: 'KM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r33c0 = {
                                    value: 'Top\u0020Speed,\u0020Max\u0020\u0028MPH\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r33c1 = {value: 46.3793323449461,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r33c2 = {
                                    value: 'MPH',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r34c0 = {
                                    value: 'Top\u0020Speed,\u0020Max\u0020\u0028KMPH\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r34c1 = {value: 74.2069317519138,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r34c2 = {
                                    value: 'KM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r35c0 = {
                                    value: 'Top\u0020Speed,\u0020Loaded\u0020\u0028MPH\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r35c1 = {value: 39.4224324932042,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r35c2 = {
                                    value: 'MPH',
                                    type: 'text',
                                    format: ''
                                };
                                                                                                                    APY.cells.s0r36c0 = {
                                    value: 'Top\u0020Speed,\u0020Loaded\u0020\u0028KMPH\u0029',
                                    type: 'text',
                                    format: ''
                                };
                                            APY.cells.s0r36c1 = {value: 63.0758919891267,type: 'number',
                                    format: '0.00'
                                };                                                                            APY.cells.s0r36c2 = {
                                    value: 'KM',
                                    type: 'text',
                                    format: ''
                                };    APY.cells.s1r0c0 = {
                                    value: 'Cell\u0020Type',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s1r0c1 = {
                                    value: 'Nom\u0020Capacity',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s1r0c2 = {
                                    value: 'Cont\u0020Discharge',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s1r0c3 = {
                                    value: 'Nom\u0020Voltage',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s1r0c4 = {
                                    value: 'Max\u0020Voltage',
                                    type: 'text',
                                    format: ''
                                };
                                                                            APY.cells.s1r0c5 = {
                                    value: 'Cell\u0020Info',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r1c0 = {
                                    value: '25R',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r1c1 = {value: 2500,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r1c2 = {value: 20,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r1c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r1c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r1c5 = {
                                    value: 'Samsung\u0020INR18650\u002D25R',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r2c0 = {
                                    value: '30Q',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r2c1 = {value: 3000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r2c2 = {value: 20,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r2c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r2c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r2c5 = {
                                    value: 'Samsung\u002018650\u002030Q',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r3c0 = {
                                    value: '40T',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r3c1 = {value: 4000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r3c2 = {value: 35,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r3c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r3c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r3c5 = {
                                    value: 'Samsung\u002040T\u002021700',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r4c0 = {
                                    value: '50E',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r4c1 = {value: 5000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r4c2 = {value: 9.8,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r4c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r4c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r4c5 = {
                                    value: 'Samsung\u002050E\u002021700',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r5c0 = {
                                    value: 'NCRB',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r5c1 = {value: 4250,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r5c2 = {value: 15,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r5c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r5c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r5c5 = {
                                    value: 'Sanyo\u0020NCR20700B',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r6c0 = {
                                    value: 'P42A',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r6c1 = {value: 4200,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r6c2 = {value: 45,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r6c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r6c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r6c5 = {
                                    value: 'Molicel\u002021700\u0020P42A',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r7c0 = {
                                    value: 'VTC6',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r7c1 = {value: 3000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r7c2 = {value: 15,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r7c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r7c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r7c5 = {
                                    value: 'Sony\u0020\u007C\u0020Murata\u0020VTC6',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r8c0 = {
                                    value: 'USER\u002D1',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r8c1 = {value: 1000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r8c2 = {value: 10,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r8c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r8c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r8c5 = {
                                    value: 'Define\u0020Cell\u0020Info\u0020Here',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s1r9c0 = {
                                    value: 'USER\u002D2',
                                    type: 'text',
                                    format: ''
                                };
                                                                        APY.cells.s1r9c1 = {value: 1000,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r9c2 = {value: 10,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r9c3 = {value: 3.6,type: 'number',
                                    format: ''
                                };                                            APY.cells.s1r9c4 = {value: 4.2,type: 'number',
                                    format: ''
                                };                                                                            APY.cells.s1r9c5 = {
                                    value: 'Define\u0020Cell\u0020Info\u0020Here',
                                    type: 'text',
                                    format: ''
                                };    APY.cells.s2r0c0 = {
                                    value: 'MM\/Min',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s2r1c0 = {value: 46.3793323449461,type: 'number',
                                    format: ''
                                };                                                                                                                                                            APY.cells.s2r3c0 = {
                                    value: 'Wheel\u0020Circumfrence',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s2r4c0 = {value: 628.318530717959,type: 'number',
                                    format: ''
                                };                                                                                                                                                            APY.cells.s2r6c0 = {
                                    value: 'Wheel\u0020RPM',
                                    type: 'text',
                                    format: ''
                                };
                                                                                    APY.cells.s2r7c0 = {value: 1995,type: 'number',
                                    format: ''
                                };
            APY.formulas = {
                            s0r10c1: function() { APY.set('s0r10c1',formulajs.SUM(APY.RANGE([0,23,1])*APY.RANGE([0,24,1])/1000)) },
                                    s0r11c1: function() { APY.set('s0r11c1',formulajs.SUM(APY.RANGE([0,23,1])*APY.RANGE([0,25,1])/1000)) },
                                    s0r12c1: function() { APY.set('s0r12c1',formulajs.SUM(APY.RANGE([0,3,1])*APY.RANGE([0,24,1])*7)) },
                                    s0r13c1: function() { APY.set('s0r13c1',formulajs.SUM(APY.RANGE([0,24,1])*APY.RANGE([0,3,1]))) },
                                    s0r14c1: function() { APY.set('s0r14c1',formulajs.SUM(8600/APY.RANGE([0,24,1]))) },
                                    s0r15c1: function() { APY.set('s0r15c1',formulajs.SUM(8600/APY.RANGE([0,3,1]))) },
                                    s0r16c1: function() { APY.set('s0r16c1',formulajs.SUM(APY.RANGE([0,26,1])*APY.RANGE([0,21,1])*APY.RANGE([0,1,1]))) },
                                    s0r17c1: function() { APY.set('s0r17c1',formulajs.SUM(APY.RANGE([0,23,1])/1000)) },
                                    s0r19c1: function() { APY.set('s0r19c1',formulajs.VLOOKUP(APY.RANGE([0,0,1]),APY.RANGE([1,1,0],[1,9,4]),2,0)) },
                                    s0r20c1: function() { APY.set('s0r20c1',formulajs.VLOOKUP(APY.RANGE([0,0,1]),APY.RANGE([1,1,0],[1,9,4]),4,0)) },
                                    s0r21c1: function() { APY.set('s0r21c1',formulajs.VLOOKUP(APY.RANGE([0,0,1]),APY.RANGE([1,1,0],[1,9,4]),5,0)) },
                                    s0r22c1: function() { APY.set('s0r22c1',formulajs.VLOOKUP(APY.RANGE([0,0,1]),APY.RANGE([1,1,0],[1,9,4]),3,0)) },
                                    s0r23c1: function() { APY.set('s0r23c1',formulajs.SUM(APY.RANGE([0,2,1])*APY.RANGE([0,19,1]))) },
                                    s0r24c1: function() { APY.set('s0r24c1',formulajs.SUM(APY.RANGE([0,1,1])*APY.RANGE([0,21,1]))) },
                                    s0r25c1: function() { APY.set('s0r25c1',formulajs.SUM(APY.RANGE([0,1,1])*APY.RANGE([0,20,1]))) },
                                    s0r26c1: function() { APY.set('s0r26c1',formulajs.SUM(APY.RANGE([0,22,1])*APY.RANGE([0,2,1]))) },
                                    s0r27c1: function() { APY.set('s0r27c1',formulajs.SUM(APY.RANGE([0,6,1])/APY.RANGE([0,5,1]))) },
                                    s0r29c1: function() { APY.set('s0r29c1',formulajs.SUM(APY.RANGE([0,10,1])/30)) },
                                    s0r30c1: function() { APY.set('s0r30c1',formulajs.SUM(APY.RANGE([0,10,1])/30*1.6)) },
                                    s0r31c1: function() { APY.set('s0r31c1',formulajs.SUM(APY.RANGE([0,10,1])/30*APY.RANGE([0,8,1])/100)) },
                                    s0r32c1: function() { APY.set('s0r32c1',formulajs.SUM(APY.RANGE([0,10,1])/30*1.6*APY.RANGE([0,8,1])/100)) },
                                    s0r33c1: function() { APY.set('s0r33c1',formulajs.SUM(APY.RANGE([2,1,0]))) },
                                    s0r34c1: function() { APY.set('s0r34c1',formulajs.SUM(APY.RANGE([2,1,0])*1.6)) },
                                    s0r35c1: function() { APY.set('s0r35c1',formulajs.SUM(APY.RANGE([0,33,1])*APY.RANGE([0,8,1])/100)) },
                                    s0r36c1: function() { APY.set('s0r36c1',formulajs.SUM(APY.RANGE([0,34,1])*APY.RANGE([0,8,1])/100)) },
                                    s2r1c0: function() { APY.set('s2r1c0',formulajs.SUM(APY.RANGE([2,7,0])*APY.RANGE([2,4,0])*0.000037)) },
                                    s2r4c0: function() { APY.set('s2r4c0',formulajs.PI()*APY.RANGE([0,7,1])) },
                                    s2r7c0: function() { APY.set('s2r7c0',formulajs.SUM(APY.RANGE([0,13,1])/APY.RANGE([0,27,1]))) },
                };

    APY.calculate = function () {
                // Step 1
                APY.formulas.s0r15c1();
                APY.formulas.s0r19c1();
                APY.formulas.s0r20c1();
                APY.formulas.s0r21c1();
                APY.formulas.s0r22c1();
                APY.formulas.s0r27c1();
                APY.formulas.s2r4c0();
                        // Step 2
                APY.formulas.s0r23c1();
                APY.formulas.s0r24c1();
                APY.formulas.s0r25c1();
                APY.formulas.s0r26c1();
                        // Step 3
                APY.formulas.s0r10c1();
                APY.formulas.s0r11c1();
                APY.formulas.s0r12c1();
                APY.formulas.s0r13c1();
                APY.formulas.s0r14c1();
                APY.formulas.s0r16c1();
                APY.formulas.s0r17c1();
                        // Step 4
                APY.formulas.s0r29c1();
                APY.formulas.s0r30c1();
                APY.formulas.s0r31c1();
                APY.formulas.s0r32c1();
                APY.formulas.s2r7c0();
                        // Step 5
                APY.formulas.s2r1c0();
                        // Step 6
                APY.formulas.s0r33c1();
                APY.formulas.s0r34c1();
                        // Step 7
                APY.formulas.s0r35c1();
                APY.formulas.s0r36c1();
                            };
    
    APY.getValue = function (value, type, format) {
        type = type ? type : 'text';
        var returnedValue;
        if (type === 'boolean') {
            returnedValue = (value === 'true');
        } else if (type === 'number') {
            returnedValue = numeral(value).value();
        } else if (type === 'date') {
            var m = format ? moment(value, format) : moment(value);
            if (!!value && m.isValid()) {
                returnedValue = m.toDate();
            } else {
                returnedValue = null;
            }
        } else {
            returnedValue = value;
        }

        return returnedValue;
};

APY.set = function (cellId, value) {
        var cell = APY.cells[cellId];
        if (!cell) {
            return;
        }

        cell.value = value;

        var $cell = $('#' + cellId);
        if ($cell.length === 0) {
            return;
        }

        var displayedValue = APY.formatValue(value, cell.type, cell.format);
        if ($cell.is('div')) {
            $cell.html(displayedValue);
            $cell.siblings('input').val(displayedValue);
        } else {
            $cell.val(displayedValue);
        }
};

APY.formatValue = function (value, type, format) {
        if (value instanceof Error) {
            return value;
        }

        var formattedValue = value;

        if (type === 'number') {
            if (value === null) {
                return '';
            }
            format = format ? format : '0.[000000000]';
            value = Math.abs(value) <= 1e-7 ? 0 : value;
            formattedValue = numeral(value).format(format);
        }

        if (type === 'date') {
            if (!value) {
                return value;
            }

            formattedValue = moment(value).format(format);
        }

        return formattedValue;
};

APY.getInputs = function () {
        var inputs = {};
        var $applicationInput = $('.application input[type!=hidden], .application select, .application textarea');
        $applicationInput.each(function () {
            var cellId = $(this).attr('id');
            var cell = APY.cells[cellId];

            if (cell) {
                var value = cell.value;

                if (value instanceof Date) {
                    value = APY.dateToString(value);
                }

                inputs[cellId] = {
                    value: value,
                    type: cell.type
                };
            }
        });

        return inputs;
};

APY.setInputs = function (data) {
        Object.keys(data).forEach(function (key) {
            if (data.hasOwnProperty(key)) {
                var value = APY.getValue(data[key].value, data[key].type);
                APY.set(key, value);
            }
        });
};

APY.dateToString = function (date) {
        return date.getFullYear() + '-' +
            ((date.getMonth() + 1) < 10 ? '0' : '') +
            (date.getMonth() + 1) + '-' +
            (date.getDate() < 10 ? '0' : '') +
            date.getDate() +
            'T' +
            (date.getHours() < 10 ? '0' : '') +
            date.getHours() +
            ':' +
            (date.getMinutes() < 10 ? '0' : '') +
            date.getMinutes() +
            ':' +
            (date.getSeconds() < 10 ? '0' : '') +
            date.getSeconds();
};

APY.RANGE = function () {
        var value = null;
        if (arguments.length === 1) {
            var cellId = 's' + arguments[0][0] + 'r' + arguments[0][1] + 'c' + arguments[0][2];

            if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                value = APY.cells[cellId].value;
            }

            return value;
        } else if (arguments.length === 2) {
            var values = [];
            var head = arguments[0];
            var tail = arguments[1];
            for (var i = 0; i <= (tail[1] - head[1]); i++) {
                var row = [];
                for (var j = 0; j <= tail[2] - head[2]; j++) {
                    value = null;
                    cellId = 's' + head[0] + 'r' + (head[1] + i) + 'c' + (head[2] + j);

                    if (APY.cells && APY.cells.hasOwnProperty(cellId)) {
                        value = APY.cells[cellId].value;
                    }
                    row.push(value);
                }
                values.push(row);
            }

            return values;
        }
};

APY.onSaveButtonClicked = function () {
        var blob = new Blob([JSON.stringify(APY.getInputs())], {type: 'application/json'});
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = document.title + ' ' + (new Date()).toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
};

APY.onDataFileSelected = function () {
        var file = document.getElementById('data-file');
        var blob = file.files[0];
        if (blob) {
            var reader = new FileReader();

            reader.onload = function (evt) {
                APY.setInputs(JSON.parse(evt.target.result));
                APY.calculate();
            };

            reader.onerror = function (evt) {
                console.error("An error occurred reading the file", evt);
            };

            reader.readAsText(blob, "UTF-8");
        }
};

APY.onCalculateButtonClicked = function () {
        APY.calculate();
};

APY.onSendButtonClicked = function () {
        $('form.application').submit();
};

// Expose Appizy App API called APY :)
window.APY = APY;


    window.onload = function () {
        var $applicationInput = $('.application input[type!=hidden], .application select, .application textarea');

        // Update values in input fields on change
        $applicationInput.on('change', function () {
            var cell = APY.cells[$(this).attr('id')];
            cell.value = APY.getValue($(this).val(), cell.type, cell.format);
            $(this).val(APY.formatValue(cell.value, cell.type, cell.format));

                        APY.calculate();
                    });

        // Display formatted values in input fields on application start
        $applicationInput.each(function () {
            var cell = APY.cells[$(this).attr('id')];
            // Recompute Office value in Javascript value
            cell.value = APY.getValue(cell.value, cell.type);
            $(this).val(APY.formatValue(cell.value, cell.type, cell.format));
        });

        APY.calculate();
    };

    $('form.application').on('submit', function (event) {
        if (event.keyCode === '13') {
            event.preventDefault();
                        APY.calculate();
                    }
    });

    })(jQuery);

$(document).ready(function () {
    $(".nav a").click(function (event) {
        event.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });
});

