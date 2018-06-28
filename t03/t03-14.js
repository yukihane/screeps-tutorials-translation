/*
https://screeps.com/a/components/game/tutorial/section3/step14.html

<section app-tutorial-content>
<p>
Hence, by upgrading your Controller, constructing new extensions and more powerful creeps, you
considerably improve the effectiveness of your colony work. Also, by replacing a lot of small creeps
with fewer large ones, you save CPU resources on controlling them which is an important prerequisite to
play in the online mode.
</p>
<p>
In the next section, we’ll talk about how to set up the automatic manufacturing of new creeps.
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
</div>
</section>
*/


function listener(details) {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
  
    filter.ondata = event => {
      let str = decoder.decode(event.data, {stream: true});
      // Just change any instance of Example in the HTTP response
      // to WebExtension Example.
      str = 
`<section app-tutorial-content>
<p>
そんなわけで、コントローラをアップグレードし、新しいエクステとより強力なクリープを作成することにより
大幅にコロニーの機能を改良できます。
また、大量の小さなクリープを少数の大きなクリープに置き換えることで、
制御用CPUリソースを節約できます。
CPUリソースの節約はオンラインモードでプレイする際に重要な事項です。
</p>
<p>
次のセクションでは、新しいクリープの自動生成方法について説明していきます。
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step14.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  