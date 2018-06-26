/*
https://screeps.com/a/components/game/tutorial/section2/step3.html

<section app-tutorial-content>
<p>
Creep "Upgrader1" went to perform the same task as the harvester, but we don't want it to. We need to differentiate creep roles.
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
クリープ "Upgrader1" はharvesterとして同じように働こうとしますが、実際にはそうして欲しいわけではありません。
異なるロールを割り当てる必要があります。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step3.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  