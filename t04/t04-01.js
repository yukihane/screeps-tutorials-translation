/*
https://screeps.com/a/components/game/tutorial/section4/step1.html

<section app-tutorial-content>
<p>
Until now, we have created new creeps directly in the console. It’s not a good idea to do it constantly since
the very idea of Screeps is making your colony control itself. You will do well if you teach your spawn to
produce creeps in the room on its own.
</p>
<p>
This is a rather complicated topic and many players spend months perfecting and refining their auto-spawning
code. But let’s try at least something simple and master some basic principles to start with.
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
Until now, we have created new creeps directly in the console. It’s not a good idea to do it constantly since
the very idea of Screeps is making your colony control itself. You will do well if you teach your spawn to
produce creeps in the room on its own.
</p>
<p>
This is a rather complicated topic and many players spend months perfecting and refining their auto-spawning
code. But let’s try at least something simple and master some basic principles to start with.
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step1.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  