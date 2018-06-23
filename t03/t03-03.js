/*
https://screeps.com/a/components/game/tutorial/section3/step3.html

<section app-tutorial-content>
<p>
Let’s create a new creep whose purpose is to build structures. This process will be similar to the previous Tutorial sections.
But this time let’s set <code>memory</code> for the new creep right in the method <code>Spawn.spawnCreep</code> by
passing it in the third argument.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code>, the name <code>Builder1</code>, and <code>{role:'builder'}</code>
as its memory.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
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
Let’s create a new creep whose purpose is to build structures. This process will be similar to the previous Tutorial sections.
But this time let’s set <code>memory</code> for the new creep right in the method <code>Spawn.spawnCreep</code> by
passing it in the third argument.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Spawn a creep with the body <code>[WORK,CARRY,MOVE]</code>, the name <code>Builder1</code>, and <code>{role:'builder'}</code>
as its memory.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step3.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  