/*
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

import {expect} from 'chai';

import {assertEquals} from '../testUtils';

import {DateTimeException, NullPointerException} from '../../src/errors';

import {DayOfWeek} from '../../src/DayOfWeek';
import {LocalDate} from '../../src/LocalDate';
import {LocalTime} from '../../src/LocalTime';
import {ChronoField} from '../../src/temporal/ChronoField';
import {ChronoUnit} from '../../src/temporal/ChronoUnit';
import {TemporalQueries} from '../../src/temporal/TemporalQueries';

describe('org.threeten.bp.TestDayOfWeek', () => {

/*
    it('test_factory_CalendricalObject', () => {
        assertEquals(DayOfWeek.from(LocalDate.of(2011, 6, 6)), DayOfWeek.MONDAY);
    });
*/

/*
    it('test_factory_CalendricalObject_invalid_noDerive', () => {
        expect(() => {
            DayOfWeek.from(LocalTime.of(12, 30));
        }).to.throw(DateTimeException);
    });
*/

    it('test_factory_CalendricalObject_null', () => {
        expect(() => {
            DayOfWeek.from(null);
        }).to.throw(NullPointerException);
    });

    describe('get(TemporalField)', function () {

        it('test_get_TemporalField', () => {
            assertEquals(DayOfWeek.WEDNESDAY.get(ChronoField.DAY_OF_WEEK), 3);
        });
    
        it('test_getLong_TemporalField', () => {
            assertEquals(DayOfWeek.WEDNESDAY.getLong(ChronoField.DAY_OF_WEEK), 3);
        });

    });

    describe('query(TemporalQuery)', function () {
        
        it('test_query', () => {
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.chronology()), null);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.localDate()), null);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.localTime()), null);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.offset()), null);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.precision()), ChronoUnit.DAYS);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.zone()), null);
            assertEquals(DayOfWeek.FRIDAY.query(TemporalQueries.zoneId()), null);
        });
    
        it('test_query_null', () => {
            expect(() => {
                DayOfWeek.FRIDAY.query(null);
            }).to.throw(NullPointerException);
        });
    
    });

    describe('getDisplayName()', function () {
        /*
            it('test_getDisplayName', () => {
                assertEquals(DayOfWeek.MONDAY.getDisplayName(TextStyle.SHORT, Locale.US), 'Mon');
            });
        */
        
        /*
            @Test(expectedExceptions = NullPointerException.class)
            public void test_getDisplayName_nullStyle() {
                DayOfWeek.MONDAY.getDisplayName(null, Locale.US);
            }
            
            @Test(expectedExceptions = NullPointerException.class)
            public void test_getDisplayName_nullLocale() {
                DayOfWeek.MONDAY.getDisplayName(TextStyle.FULL, null);
            }
        */
    });

    describe('plus(long), plus(long,unit)', function () {
        function data_plus() {
            return [
                [1, -8, 7],
                [1, -7, 1],
                [1, -6, 2],
                [1, -5, 3],
                [1, -4, 4],
                [1, -3, 5],
                [1, -2, 6],
                [1, -1, 7],
                [1, 0, 1],
                [1, 1, 2],
                [1, 2, 3],
                [1, 3, 4],
                [1, 4, 5],
                [1, 5, 6],
                [1, 6, 7],
                [1, 7, 1],
                [1, 8, 2],

                [1, 1, 2],
                [2, 1, 3],
                [3, 1, 4],
                [4, 1, 5],
                [5, 1, 6],
                [6, 1, 7],
                [7, 1, 1],

                [1, -1, 7],
                [2, -1, 1],
                [3, -1, 2],
                [4, -1, 3],
                [5, -1, 4],
                [6, -1, 5],
                [7, -1, 6]
            ];
        }

        it('test_plus_long', () => {
            data_plus().forEach((sample) => {
                test_plus_long.apply(this, sample);
            });
        });

        function test_plus_long(base, amount, expected) {
            assertEquals(DayOfWeek.of(base).plus(amount), DayOfWeek.of(expected));
        }
    });

    describe('minus(long), minus(long,unit)', function () {

        function data_minus() {
            return [
                [1, -8, 2],
                [1, -7, 1],
                [1, -6, 7],
                [1, -5, 6],
                [1, -4, 5],
                [1, -3, 4],
                [1, -2, 3],
                [1, -1, 2],
                [1, 0, 1],
                [1, 1, 7],
                [1, 2, 6],
                [1, 3, 5],
                [1, 4, 4],
                [1, 5, 3],
                [1, 6, 2],
                [1, 7, 1],
                [1, 8, 7]
            ];
        }

        it('test_minus_long', () => {
            data_minus().forEach((sample) => {
                test_minus_long.apply(this, sample);
            });
        });

        function test_minus_long(base, amount, expected) {
            assertEquals(DayOfWeek.of(base).minus(amount), DayOfWeek.of(expected));
        }

    });

/*
    describe('adjustInto()', function () {

        it('test_adjustInto', () => {
            assertEquals(DayOfWeek.MONDAY.adjustInto(LocalDate.of(2012, 9, 2)), LocalDate.of(2012, 8, 27));
            assertEquals(DayOfWeek.MONDAY.adjustInto(LocalDate.of(2012, 9, 3)), LocalDate.of(2012, 9, 3));
            assertEquals(DayOfWeek.MONDAY.adjustInto(LocalDate.of(2012, 9, 4)), LocalDate.of(2012, 9, 3));
            assertEquals(DayOfWeek.MONDAY.adjustInto(LocalDate.of(2012, 9, 10)), LocalDate.of(2012, 9, 10));
            assertEquals(DayOfWeek.MONDAY.adjustInto(LocalDate.of(2012, 9, 11)), LocalDate.of(2012, 9, 10));
        });

        it('test_adjustInto_null', () => {
            expect(() => {
                DayOfWeek.MONDAY.adjustInto(null);
            }).to.throw(NullPointerException);
        });

    });
*/

    describe('toString()', function() {

        it('test_toString', () => {
            assertEquals(DayOfWeek.MONDAY.toString(), 'MONDAY');
            assertEquals(DayOfWeek.TUESDAY.toString(), 'TUESDAY');
            assertEquals(DayOfWeek.WEDNESDAY.toString(), 'WEDNESDAY');
            assertEquals(DayOfWeek.THURSDAY.toString(), 'THURSDAY');
            assertEquals(DayOfWeek.FRIDAY.toString(), 'FRIDAY');
            assertEquals(DayOfWeek.SATURDAY.toString(), 'SATURDAY');
            assertEquals(DayOfWeek.SUNDAY.toString(), 'SUNDAY');
        });

    });

    describe('generated methods', function () {

        it('test_enum', () => {
            assertEquals(DayOfWeek.valueOf('MONDAY'), DayOfWeek.MONDAY);
            assertEquals(DayOfWeek.valueOf('SUNDAY'), DayOfWeek.SUNDAY);
            assertEquals(DayOfWeek.values()[0], DayOfWeek.MONDAY);
        });
        
    });

});
