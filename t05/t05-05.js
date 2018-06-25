/*
https://screeps.com/a/components/game/tutorial/section5/step5.html

<section app-tutorial-content>
<p>
Towers are the easiest way to actively defend a room. They use energy and can be targeted at any creep in a room
to attack or heal it. The effect depends on the distance between the tower and the target.
</p>
<p>
To start with, let’s lay a foundation for our new tower. You can set any place you wish inside the walls
and place the construction site there with the help of the button “Construct” on the upper panel.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Place the construction site for the tower (manually or using the code below).
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower' target='_blank'>StructureTower</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.createConstructionSite' target='_blank'>
Room.createConstructionSite
</a></code>
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
タワー(tower)はルームを積極的に防衛するのに最も簡単な方法です。
タワーはエナジーを消費した上でルーム内の全クリープをターゲットにし、攻撃または回復を行います。
効果はタワーとターゲットの距離に依存します。
</p>
<p>
実行するために、新しいタワーのための基盤を構築しましょう。
壁の内側の好きなところを決め、上部パネルにある“Construct”ボタンで実行します。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
タワー建設地を決定します(手動、あるいは下記コードを用います)。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower' target='_blank'>StructureTower</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.createConstructionSite' target='_blank'>
Room.createConstructionSite
</a></code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step5.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  