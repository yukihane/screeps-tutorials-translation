/*
https://screeps.com/a/components/game/tutorial/section2/step4.html

<section app-tutorial-content>
<p>
To do that, we need to utilize the <code>memory</code> property of each creep that allows writing custom information
into the creep's "memory". Let's do this to assign different roles to our creeps.
</p>
<p>
All your stored memory is accessible via the global <code>Memory</code> object. You can use it any way you like.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Write a property <code>role='harvester'</code> into the memory of the harvester creep and <code>role='upgrader'</code>
&mdash; to the upgrader creep with the help of the console.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/global-objects#Memory-object' target='_blank'>
Memory object
</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.memory' target='_blank'>
Creep.memory
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
そうするためには、各クリープの<code>memory</code>プロパティを活用し、クリープの"メモリ"にカスタム情報を書き込めるようにする必要があります。
クリープに異なるロールを割り当ててみましょう。
</p>
<p>
ストアされたメモリはグローバルな<code>Memory</code>オブジェクトを介してアクセスできます。
この領域はあなたの好きなように使うことができます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
コンソールを使い、
harvesterクリープのメモリにプロパティ<code>role='harvester'</code>を、
upgraderクリープにはプロパティ<code>role='upgrader'</code>を設定します。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/global-objects#Memory-object' target='_blank'>
Memory object
</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.memory' target='_blank'>
Creep.memory
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step4.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  