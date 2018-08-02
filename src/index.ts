
let Hogan = require('hogan.js');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Module for Hogan templating
 * @see {@link http://twitter.github.io/hogan.js/|Hogan}
 * @namespace Hogan
 * @example
 * rps install hogan
*/
@RpsModule("hogan")
export default class RPSHogan {

  /**
 * @function hogan-compile
 * @memberof Hogan
 * 
 * hogan-compile '<template-content' {a:1,b:2}
 * 
 * @param {String} template template content.
 * @param {Object} context context to be processed.
 * @param {*} options List of options provided.
 * 
 * @returns {void}
 * @summary hogan-compile :: String → String
 * 
*/
  @rpsAction({verbName:'hogan-compile'})
  async moustacheToHtml (ctx:RpsContext,opts:Object, content:string, context?:Object) : Promise<string|Function>{
    if(!content) throw Error('Hogan content not found');
    else {
      let compiled = Hogan.compile(content,opts);

      if(!context) return compiled;
      else return compiled.render(context);
    }
  }

}
