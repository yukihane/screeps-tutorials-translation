/*
https://screeps.com/a/components/game/tutorial/section2/step5.html

<section app-tutorial-content>
<p>
You can check your creeps' memory in either the creep information panel on the left or on the "Memory" tab.
</p>
<p>
Now let's define the behavior of the new creep. Both creeps should harvest energy, but the creep with the role
<code>harvester</code> should bring it to the spawn, while the creep with the role <code>upgrader</code>
should go to the Controller and apply the function <code>upgradeController</code> to it (you can get the
Controller object with the help of the <code>Creep.room.controller</code> property).
</p>
<p>
In order to do this, we’ll create a new module called <code>role.upgrader</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Create a new module <code>role.upgrader</code> with the behavior logic of your new creep.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomObject.room' target='_blank'>
RoomObject.room
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.controller' target='_blank'>
Room.controller
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.upgradeController' target='_blank'>
Creep.upgradeController
</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='role.upgrader'></app:tutorial-code>
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
左のクリープ情報パネルでも"Memory"タブでも、どちらでもクリープのメモリをチェックできます。
</p>
<p>
さあ、新しいクリープの振る舞いを定義しましょう。
両方のクリープともエナジーを収穫すべきですが、<code>harvester</code>ロールのクリープは
エナジーをスポーンに送るべきで、一方<code>upgrader</code>ロールのクリープはコントローラへ向かい
<code>upgradeController</code>関数をコントローラに適用すべきです(<code>Creep.room.controller</code>
プロパティでコントローラオブジェクトを取得することができます)。
</p>
<p>
それを達成するために、新しいモジュール<code>role.upgrader</code>を作成しましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
新しいクリープの行動ロジックである<code>role.upgrader</code>を作成します。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#RoomObject.room' target='_blank'>
RoomObject.room
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.controller' target='_blank'>
Room.controller
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.upgradeController' target='_blank'>
Creep.upgradeController
</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='role.upgrader'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step5.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  