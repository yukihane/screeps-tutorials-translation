/*
https://screeps.com/a/components/game/tutorial/section1/step11.html

<section app-tutorial-content>
<p>
Here you can see the characteristics of the object you are now looking at.
Values of each characteristic and functions of body parts are described in the documentation.
</p>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
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
ここでオブジェクトの特性を見ることができます。
個々の特性値やボディーパーツの機能はドキュメントに記述されています。
</p>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step11.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );