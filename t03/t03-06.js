/*
https://screeps.com/a/components/game/tutorial/section3/step6.html

<section app-tutorial-content>
<p>
Let’s create a call of the new role in the main module and wait for the result.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
By using the module <code>role.builder</code> in the new creep, build all 5 extensions.
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
メインモジュールで新しいロールを呼び結果を待ちましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
新しいクリープで<code>role.builder</code>モジュールを使うことで、5つ全ての拡張を建設します。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step6.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  