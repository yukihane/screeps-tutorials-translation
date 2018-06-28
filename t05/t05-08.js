/*
https://screeps.com/a/components/game/tutorial/section5/step8.html

<section app-tutorial-content>
<p>
Excellent, your tower is ready to use!
</p>
<p>
Like a creep, a tower has several similar methods: <code>attack</code>, <code>heal</code>, and
<code>repair</code>. Each action spends 10 energy units. We need to use <code>attack</code> on the closest
enemy creep upon its discovery. Remember that distance is vital: the effect can be several times stronger
with the same energy cost!
</p>
<p>
To get the tower object directly you can use its ID from the right panel and the method <code>Game.getObjectById</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Destroy the enemy creep with the help of the tower.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.getObjectById' target='_blank'>
Game.getObjectById
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomObject.pos' target='_blank'>
RoomObject.pos
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomPosition.findClosestByRange' target='_blank'>
RoomPosition.findClosestByRange
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower.attack' target='_blank'>StructureTower.attack</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='main'></app:tutorial-code>
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
すばらしい！タワーの準備ができました！
</p>
<p>
タワーもクリープと似たメソッドをいくつか持っています: <code>attack</code>, <code>heal</code>, <code>repair</code>です。
それぞれ10エナジーユニットを消費します。
発見している敵クリープのうち最も近接しているものを対象に<code>attack</code>を使用する必要があります。
距離は生命に関わるものだということを覚えておいてください:
同じコストを払っても効果は数倍変わります！
</p>
<p>
右部のパネルからIDと<code>Game.getObjectById</code>メソッドを用いてタワーオブジェクトを直接取得できます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
タワーを使って敵クリープを破壊します。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.getObjectById' target='_blank'>
Game.getObjectById
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomObject.pos' target='_blank'>
RoomObject.pos
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomPosition.findClosestByRange' target='_blank'>
RoomPosition.findClosestByRange
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower.attack' target='_blank'>StructureTower.attack</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='main'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step8.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  