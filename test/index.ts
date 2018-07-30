import {expect} from 'chai';
import m from 'mocha';

import RPSMarkdown from '../src/index';
import { RpsContext } from 'rpscript-interface';

m.describe('RPSHogan', () => {

  m.it('should moustach to html', async function () {
    let md = new RPSMarkdown;
    let ctx = new RpsContext;

    let output:any = await md.moustacheToHtml(ctx,{},"Follow @{{screenName}}.",{screenName:'wei3hua2'});
    expect(output).to.be.equals('Follow @wei3hua2.');

  }).timeout(0);

})
