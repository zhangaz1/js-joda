/**
 * @copyright (c) 2016, Philipp Thuerwaechter & Pattrick Hueper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */
import {NullPointerException} from './errors';

export function assert(assertion, msg, error) {
    if(!assertion){
        if(arguments.length === 2){
            error = msg;
            msg = null;
        }

        if (error) {
            throw new error(msg);
        } else {
            throw new Error(msg);
        }
    }
}

export function requireNonNull(value, parameterName) {
    if (value == null) {
        throw new NullPointerException(parameterName + ' must not be null');
    }
    return value;
}
