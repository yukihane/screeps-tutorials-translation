/*
https://screeps.com/a/components/game/tutorial/section4/step4.html

<section app-tutorial-content>
<p>
Now let’s try to emulate a situation when one of our harvesters dies. You can now give the command
<code>suicide</code> to the creep via the console or its properties panel on the right.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Make one of the harvesters suicide.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.suicide' target='_blank'>
Creep.suicide
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
harvesterが死んだ時のシチュエーションをエミュレートしてみましょう。
コンソールあるいは右のプロパティパネルで<code>suicide</code>コマンドをクリープに対して実行できます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
harvesterを自殺させましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.suicide' target='_blank'>
Creep.suicide
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step4.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  