
let Hogan = require('hogan.js');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

/** Hogan Module
 * @namespace Hogan
*/
@RpsModule("hogan")
export default class RPSHogan {

  @rpsAction({verbName:'compile-hogan'})
  async moustacheToHtml (ctx:RpsContext,opts:Object, content:string) : Promise<string>{
    let compiled = Hogan.compile(content,opts);

    return compiled.render(ctx.variables);
  }

}
