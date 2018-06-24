/*
https://screeps.com/a/components/game/tutorial/section3/step12.html

<section app-tutorial-content>
<p>
Building this creep took energy from all storages and completely drained them.
</p>
<p>
Now let’s select our creep and watch it work.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Click on the creep Harvester2.
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.close()'>Got it</md:button>
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
このクリープを作成することで完全に蓄えていたエナジーを使い切ります。
</p>
<p>
クリープを選択して働きを確認してみましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Harvester2のクリープをクリックしてください。
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.close()'>Got it</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step12.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  