/*
https://screeps.com/a/components/game/tutorial/section4/step6.html

<section app-tutorial-content>
<p>
An important point here is that the memory of dead creeps is not erased but kept for later reuse.
If you create creeps with random names each time it may lead to memory overflow, so you should clear
it in the beginning of each tick (prior to the creep creation code).
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Add code to clear the memory.
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
ここで重要なことは、死んだクリープのメモリは削除されず後で再利用できるように保持されるということです。
もしランダムな名前で毎回クリープを生成するとしたら、メモリオーバーフローを引き起こします。
ですので、毎ティックのはじめに(クリープ生成コードの冒頭で)メモリをクリアすべきです。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
メモリをクリアするコードを追加しましょう。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step6.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  