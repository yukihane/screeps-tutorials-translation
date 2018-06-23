/*
https://screeps.com/a/components/game/tutorial/section5/step3.html

<section app-tutorial-content>
<p>
The surest way to fend off an attack is using the room <strong>Safe Mode</strong>.
In safe mode, no other creep will be able to use any harmful methods in the room (but you’ll still be able to defend against strangers).
</p>
<p>
The safe mode is activated via the room controller which should have activations available to use.
Let’s spend one activation to turn it on in our room.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Activate safe mode.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureController.activateSafeMode' target='_blank'>StructureController.activateSafeMode</a></code>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
The surest way to fend off an attack is using the room <strong>Safe Mode</strong>.
In safe mode, no other creep will be able to use any harmful methods in the room (but you’ll still be able to defend against strangers).
</p>
<p>
The safe mode is activated via the room controller which should have activations available to use.
Let’s spend one activation to turn it on in our room.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Activate safe mode.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureController.activateSafeMode' target='_blank'>StructureController.activateSafeMode</a></code>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step3.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  