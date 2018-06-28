/*
https://screeps.com/a/components/game/tutorial/section2/step6.html

<section app-tutorial-content>
<p>
In our main module, all creeps run the same role. We need to divide their behavior depending on the previously
defined property <code>Creep.memory.role</code> by connecting the new module.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Apply the logic from the module <code>role.upgrader</code> to the creep with the role <code>upgrader</code>
and check how it performed.
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
現時点のメインモジュールでは全クリープが同じロールを実行します。
先ほど新しく作成したモジュールを<code>Creep.memory.role</code>プロパティに設定し振る舞いを割り振ります。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
<code>role.upgrader</code>モジュールのロジックを<code>upgrader</code>ロールのクリープに適用し動きを確認してみましょう。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step6.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  