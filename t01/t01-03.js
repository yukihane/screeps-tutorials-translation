/*
https://screeps.com/a/components/game/tutorial/section1/step3.html

<section app-tutorial-content>
<p>
Let's begin. This is a playing field called a "room". In the real game, rooms are connected to each other with
exits, but in the simulation mode only one room is available to you.
</p>
<p>
The object in the center of the screen is your first spawn, your colony center.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/introduction.html#Game-world' target='_blank'>Game world</a>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
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
始めましょう。これは"room"(ルーム/部屋)と呼ばれるプレイフィールドです。
実際のゲームではそれぞれのroomは隣り合って接続されています。
ただし、今回のシミュレーションモードではこの1つしかroomは存在しません。
</p>
<p>
画面中央の物体は1つめの"spawn"(スポーン)で、あなたのコロニーの中心部です。
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/introduction.html#Game-world' target='_blank'>Game world</a>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step3.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  