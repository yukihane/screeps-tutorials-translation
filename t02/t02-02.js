/*
https://screeps.com/a/components/game/tutorial/section2/step2.html

<section app-tutorial-content>
<p>
You will need a new worker creep to upgrade your controller level. Let's call it "Upgrader1".
In following sections we'll discuss how to create creeps automatically, but for now let's send a
command manually to the console.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code> and the name <code>Upgrader1</code>.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/control.html' target='_blank'>Control</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.spawns' target='_blank'>Game.spawns</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
コントローラレベルをアップグレードするためには新しいワーカークリープが必要になるでしょう。
そのクリープを"Upgrader1"と呼ぶことにしましょう。
後ろのセクションでクリープを自動的に生成する方法について検討しますが、今回はコンソールでコマンドを実行し
手動で生成することにします。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
ボディ<code>[WORK,CARRY,MOVE]</code>、名前<code>Upgrader1</code>でクリープを生成します。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/control.html' target='_blank'>Control</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.spawns' target='_blank'>Game.spawns</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step2.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  