/*
https://screeps.com/a/components/game/tutorial/section5/step10.html

<section app-tutorial-content>
<p>
Damaged structures can be repaired by both creeps and towers. Let’s try to use a tower for that.
We’ll need the method <code>repair</code>. You will also need the method <code>Room.find</code> and a filter to locate the damaged walls.
</p>
<p>
Note that since walls don’t belong to any player, finding them requires the constant <code>FIND_STRUCTURES</code>
rather than <code>FIND_MY_STRUCTURES</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Repair all the damaged walls.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower.repair' target='_blank'>StructureTower.repair</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='main'></app:tutorial-code>
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
Damaged structures can be repaired by both creeps and towers. Let’s try to use a tower for that.
We’ll need the method <code>repair</code>. You will also need the method <code>Room.find</code> and a filter to locate the damaged walls.
</p>
<p>
Note that since walls don’t belong to any player, finding them requires the constant <code>FIND_STRUCTURES</code>
rather than <code>FIND_MY_STRUCTURES</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Repair all the damaged walls.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureTower.repair' target='_blank'>StructureTower.repair</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='main'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step10.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  