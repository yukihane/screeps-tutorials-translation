/*
https://screeps.com/a/components/game/tutorial/section4/step7.html

<section app-tutorial-content>
<p>
Now the memory of the deceased is relegated to oblivion which saves us resources.
</p>
<p>
Apart from creating new creeps after the death of old ones, there is another way to maintain the needed number
of creeps: the method <code>StructureSpawn.renewCreep</code>. Creep aging is disabled in the Tutorial, so we recommend
that you familiarize yourself with it on your own.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.renewCreep' target='_blank'>
StructureSpawn.renewCreep
</a></code>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
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
Now the memory of the deceased is relegated to oblivion which saves us resources.
</p>
<p>
Apart from creating new creeps after the death of old ones, there is another way to maintain the needed number
of creeps: the method <code>StructureSpawn.renewCreep</code>. Creep aging is disabled in the Tutorial, so we recommend
that you familiarize yourself with it on your own.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.renewCreep' target='_blank'>
StructureSpawn.renewCreep
</a></code>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step7.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  