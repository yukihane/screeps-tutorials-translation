/*
https://screeps.com/a/components/game/tutorial/section1/step17.html

<section app-tutorial-content>
<p>
To make the creep transfer energy back to the spawn, you need to use the method
<code>Creep.transfer</code>.
However, remember that it should be done when the creep is next to the spawn, so the creep needs to walk back.
</p>
<p>
If you modify the code by adding the check <code>.carry.energy&nbsp;<&nbsp;.carryCapacity</code> to the creep,
it will be able to go back and forth on its own, giving energy to the spawn and returning to the source.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Extend the creep program so that it can transfer harvested energy to the spawn and return back to work.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.transfer' target='_blank'>
Creep.transfer
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.carry' target='_blank'>
Creep.carry
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.carryCapacity' target='_blank'>
Creep.carryCapacity
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
クリープにスポーンまでエナジーを輸送させたい場合、
<code>Creep.transfer</code>メソッドを使う必要があります。
ただし、クリープがスポーンに隣接している場合、クリープは後退する必要があることを覚えておいて下さい。
</p>
<p>
クリープに対して<code>.carry.energy&nbsp;<&nbsp;.carryCapacity</code>というチェックを行う変更を加えたなら、
クリープ自身で行くか戻るか(スポーンまでエナジーを輸送するのかエナジーソースへエナジーをとりに戻るのか)を判断できるようになるでしょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
収穫したエナジーをスポーンへ輸送し、その後収穫作業へ戻るようにクリープのプログラムを拡張しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.transfer' target='_blank'>
Creep.transfer
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.carry' target='_blank'>
Creep.carry
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.carryCapacity' target='_blank'>
Creep.carryCapacity
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step17.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );