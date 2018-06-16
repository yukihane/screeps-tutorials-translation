/*
https://screeps.com/a/components/game/tutorial/section1/step5.html

<section app-tutorial-content>
<p>
You can enter your code in this field. It will run once.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Type anything in this field and press Enter.
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
<p>
このフィールドにコードを入力できます。入力したコードは1回実行されます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
フィールドに何か入力した後Enterキーを押してください。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step5.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  