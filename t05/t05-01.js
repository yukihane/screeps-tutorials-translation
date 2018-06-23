/*
https://screeps.com/a/components/game/tutorial/section5/step1.html

<section app-tutorial-content>
<p>
The world of Screeps is not the safest place. Other players may have claims on your territory.
Besides, your room may be raided by neutral NPC creeps occasionally. So you ought to think about your
colony defense in order to develop it successfully.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/defense.html' target='_blank'>Defending your room</a>
</li>
</ul>
</div>
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
The world of Screeps is not the safest place. Other players may have claims on your territory.
Besides, your room may be raided by neutral NPC creeps occasionally. So you ought to think about your
colony defense in order to develop it successfully.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/defense.html' target='_blank'>Defending your room</a>
</li>
</ul>
</div>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step1.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  