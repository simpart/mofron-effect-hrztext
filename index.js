/**
 * @file mofron-effect-selectable/index.js
 * @brief selectable effect for mofron component
 * @license MIT
 */
const Click   = require("mofron-event-click"); 
const Color   = require("mofron-effect-color");
const ConfArg = mofron.class.ConfArg;
const comutl  = mofron.util.common;

module.exports = class extends mofron.class.Effect {
    /**
     * initialize effect
     * 
     * @param (mixed) 
     *                key-value: effect config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname("HrzText");
            
            /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    contents (cmp) {
        try {
            cmp.style({
                'display':     'flex',
                'align-items': 'center'
            });
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
