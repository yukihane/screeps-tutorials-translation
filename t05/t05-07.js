/*
https://screeps.com/a/components/game/tutorial/section5/step7.html

<section app-tutorial-content>
<p>
A tower uses energy, so let’s set the harvester role to bring energy to the tower along with other structures.
To do this, you need to add the constant <code>STRUCTURE_TOWER</code> to the filter of structures your
harvester is aimed at.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Add <code>STRUCTURE_TOWER</code> to the module <code>role.harvester</code> and wait for the energy to appear in the tower.
</div>
<app:tutorial-code title='role.harvester'></app:tutorial-code>
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
タワーはエナジーを消費しますので、他の建築物と合わせてharvesterロールに対しタワーにエナジーを運ぶようセットしましょう。
これを成すため、定数<code>STRUCTURE_TOWER</code>をharvesterが利用しているフィルタに追加する必要があります。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
<code>STRUCTURE_TOWER</code>をモジュール<code>role.harvester</code>に追加し、タワーにエナジーが供給されるのを待ちます。
</div>
<app:tutorial-code title='role.harvester'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step7.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  