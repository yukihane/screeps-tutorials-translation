/*
https://screeps.com/a/components/game/tutorial/section3/step2.html

<section app-tutorial-content>
<p>
The second Controller level has <strong>5 extensions</strong> available for you to build.
This number increases with each new level.
</p>
<p>
You can place extensions at any spot in your room, and a spawn can use them regardless of the distance.
In this Tutorial we have already placed corresponding construction sites for your convenience.
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
The second Controller level has <strong>5 extensions</strong> available for you to build.
This number increases with each new level.
</p>
<p>
You can place extensions at any spot in your room, and a spawn can use them regardless of the distance.
In this Tutorial we have already placed corresponding construction sites for your convenience.
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step2.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  