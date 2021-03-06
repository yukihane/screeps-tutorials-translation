/*
https://screeps.com/a/components/game/tutorial/section4/step5.html

<section app-tutorial-content>
<p>
As you can see from the console, after we lacked one harvester, the spawn instantly started building a new
one with a new name.
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
コンソールから見られる通り、harvesterが不足すると新しい名前ですぐに新しいクリープが生成され始めます。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step5.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  