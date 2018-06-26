/*
https://screeps.com/a/components/game/tutorial/section1/step10.html

<section app-tutorial-content>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Hide the editor panel with <strong>Alt+Enter</strong> and select your creep with the help of the "View" action.
</div>
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
<div class='objective'>
<div class='fa fa-caret-right'></div>
<strong>Alt+Enter</strong> で編集パネルを隠し "View" をアクティブにした状態でクリープを選択します。
</div>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step10.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );