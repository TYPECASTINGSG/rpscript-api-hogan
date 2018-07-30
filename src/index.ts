
let Hogan = require('hogan.js');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Hogan Module
 * @namespace Hogan
*/
@RpsModule("hogan")
export default class RPSHogan {

  @rpsAction({verbName:'compile-hogan'})
  async moustacheToHtml (ctx:RpsContext,opts:Object, content:string, data?:Object) : Promise<string|Function>{
    if(!content) throw Error('Hogan content not found');
    else {
      let compiled = Hogan.compile(content,opts);

      if(!data) return compiled;
      else return compiled.render(data);
    }
  }

}
