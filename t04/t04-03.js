/*
https://screeps.com/a/components/game/tutorial/section4/step3.html

<section app-tutorial-content>
<p>
Let’s say we want to have at least two harvesters at any time. The easiest way to achieve this is to run
<code>StructureSpawn.spawnCreep</code> each time we discover it’s less than this number. You may not define its
name (it will be given automatically in this case), but don’t forget to define the needed role.
</p>
<p>
We may also add some new <code>RoomVisual</code> call in order to visualize what creep is being spawned.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Add the logic for <code>StructureSpawn.spawnCreep</code> in your main module.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomVisual' target='_blank'>
RoomVisual
</a></code>
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
Let’s say we want to have at least two harvesters at any time. The easiest way to achieve this is to run
<code>StructureSpawn.spawnCreep</code> each time we discover it’s less than this number. You may not define its
name (it will be given automatically in this case), but don’t forget to define the needed role.
</p>
<p>
We may also add some new <code>RoomVisual</code> call in order to visualize what creep is being spawned.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Add the logic for <code>StructureSpawn.spawnCreep</code> in your main module.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomVisual' target='_blank'>
RoomVisual
</a></code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step3.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  