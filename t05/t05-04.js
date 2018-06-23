/*
https://screeps.com/a/components/game/tutorial/section5/step4.html

<section app-tutorial-content>
<p>
As you can see, the enemy creep stopped attacking the wall – its harmful methods are blocked.
We recommend that you activate safe mode when your defenses fail.
</p>
<p>
Now let’s cleanse the room from unwanted guests.
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
As you can see, the enemy creep stopped attacking the wall – its harmful methods are blocked.
We recommend that you activate safe mode when your defenses fail.
</p>
<p>
Now let’s cleanse the room from unwanted guests.
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step4.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  