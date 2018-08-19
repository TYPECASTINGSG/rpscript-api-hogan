
let Hogan = require('hogan.js');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Module for moustache templating
 * @see {@link http://twitter.github.io/hogan.js/}
 * @namespace Hogan
 * @example
 * rps install hogan
*/
@RpsModule("hogan")
export default class RPSHogan {

  /**
 * @function hogan
 * @memberof Hogan
 * @example
 * hogan 'Follow @{{screenName}}' {screenName:'therpscript'}
 * 
 * @param {String} template template content.
 * @param {Object} context context to be passed into the template.
 * @param {*} options refer to Hogan.js documentation.
 *
 * @returns {String}  Compiled content.
 * 
 * @summary hogan :: String → Object → String
 * 
*/
  @rpsAction({verbName:'hogan'})
  async moustacheToHtml (ctx:RpsContext,opts:Object, content?:string, context?:Object) : Promise<string|Function>{
    function compile (content,context?) {
      let compiled = Hogan.compile(content,opts);

      if(!context) return function(context){return compiled.render(context);};
      else return compiled.render(context);
    }
    
    if(!content) return compile;
    else if(!context) return compile(content);
    else return compile(content,context);

  }

}
