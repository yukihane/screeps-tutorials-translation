/*
https://screeps.com/a/components/game/tutorial/section1/step21.html

<section app-tutorial-content>
<p>
Now you can rewrite the main module code, leaving only the loop and a call to your new module by the method
<code>require('role.harvester')</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Include the <code>role.harvester</code> module in the main module.
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
メインモジュールのコードを書き直しましょう。<code>require('role.harvester')</code>を行えばループ内で新しく作ったモジュールを呼び出すだけにできます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
メインモジュールに<code>role.harvester</code>をインクルードします。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step21.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );