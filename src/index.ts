/**
 * @module Hogan
 */

// import Hogan from 'hogan.js';
let Hogan = require('hogan.js');
import {RpsContext,RpsModule,rpsAction} from 'rpscript-interface';

@RpsModule("hogan")
export default class RPSHogan {

  @rpsAction({verbName:'compile-hogan'})
  async moustacheToHtml (ctx:RpsContext,opts:Object, content:string) : Promise<string>{
    let compiled = Hogan.compile(content,opts);

    return compiled.render(ctx.variables);
  }

}
