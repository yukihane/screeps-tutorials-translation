/*
https://screeps.com/a/components/game/tutorial/section3/step11.html

<section app-tutorial-content>
<p>
In total, we have 550 energy units in our spawn and extensions. It is enough to build a creep with the body
<code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>. This creep will work 4 times faster than a regular worker
creep. Its body is heavier, so we’ll add another <code>MOVE</code> to it. However, two parts are still not
enough to move it at the speed of a small fast creep which would require 4x<code>MOVEs</code> or building a road.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Spawn a creep with the body <code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>, the name <code>HarvesterBig</code>, and
<code>harvester</code> role.
</div>
<app-tutorial-code></app-tutorial-code>
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
スポーンとエクステ合計で550エナジーを所有しています。
これでボディ<code>[WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>のクリープを作れます。
このクリープは通常のワーカーより4倍早く仕事が行えます。
ボディは通常より重いので、<code>MOVE</code>も1つ多く加えましょう。
しかし、2個のパーツではまだ十分でなく、小さなクリープと同じ速度で動くには
4個の<code>MOVE</code>を付けるか、道(road)を建設する必要があります。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
ボディ<code>[WORK,WORK,WORK,CARRY,MOVE,MOVE]</code>、名前<code>HarvesterBig</code>、
ロール<code>harvester</code>でクリープを作成します。
</div>
<app-tutorial-code></app-tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step11.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  