/*
https://screeps.com/a/components/game/tutorial/section3/step8.html

<section app-tutorial-content>
<p>
Maintaining extensions requires you to teach your harvesters to carry energy not just to a spawn but also to
extensions. To do this, you can either use the <code>Game.structures</code> object or search within the room
with the help of <code>Room.find(FIND_STRUCTURES)</code>. In both cases, you will need to filter the list of
items on the condition <code>structure.structureType == STRUCTURE_EXTENSION</code> (or, alternatively, <code>structure instanceof StructureExtension</code>)
and also check them for energy load, as before.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Refine the logic in the module <code>role.harvester</code>.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.structures' target='_blank'>
Game.structures
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureExtension' target='_blank'>StructureExtension</a></code>
</li>
</ul>
</div>
<app-tutorial-code title='role.harvester'></app-tutorial-code>
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
エクステを取り扱うには、スポーンに対してだけでなくエクステに対してもエナジーを運ぶようharvesterに教えてあげなければいけません。
そうするために、<code>Game.structures</code>オブジェクトを使用するか、該当ルームで
<code>Room.find(FIND_STRUCTURES)</code>を用います。
両方のケースで
<code>structure.structureType == STRUCTURE_EXTENSION</code>
(もしくは代わりに<code>structure instanceof StructureExtension</code>)
という条件でリストをフィルタする必要があるでしょう。
そしてまた従来通りエナジーをロードするためにそれらをチェックします。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
<code>role.harvester</code>モジュールのロジックを改良しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.structures' target='_blank'>
Game.structures
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureExtension' target='_blank'>StructureExtension</a></code>
</li>
</ul>
</div>
<app-tutorial-code title='role.harvester'></app-tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step8.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  