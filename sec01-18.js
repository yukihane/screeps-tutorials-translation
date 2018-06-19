/*
https://screeps.com/a/components/game/tutorial/section1/step18.html

<section app-tutorial-content>
<p>
Great! This creep will now work as a harvester until it dies. Remember that almost any creep has a life cycle of 1500
game ticks, then it "ages" and dies (this behavior is disabled in the Tutorial).
</p>
<p>
Let's create another worker creep to help the first one. It will cost another 200 energy units, so you may
need to wait until your harvester collects enough energy. The <code>spawnCreep</code> method will return an
error code <code>ERR_NOT_ENOUGH_ENERGY</code> (-6) until then.
</p>
<p>
Remember: to execute code once just type it in the "Console" tab.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Spawn a second creep with the body <code>[WORK,CARRY,MOVE]</code> and name <code>Harvester2</code>.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
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
素晴らしい！このクリープは死ぬまでharvester(収穫者)として働くでしょう。
ほとんどすべてのクリープは1500ゲームティックが寿命であることを覚えておいて下さい。
寿命を迎えるとクリープは死にます(ただしこの振る舞いはこのチュートリアルでは無効化されています)。
</p>
<p>
ひとつめのクリープを助けるために、もうひとつ別のクリープを作りましょう。
クリープを作るのに更に200エナジーが必要になります。
従ってharvesterが十分にエナジーを集めるまで待つ必要があります。
エナジーが貯まるまでは<code>spawnCreep</code>メソッドはエラーコード<code>ERR_NOT_ENOUGH_ENERGY</code> (-6) を返します。
</p>
<p>
情報: 1回だけコードを実行するには"Console"タブにタイプしましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
2つめのクリープをボディ<code>[WORK,CARRY,MOVE]</code>、名前<code>Harvester2</code>で生成しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step18.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );