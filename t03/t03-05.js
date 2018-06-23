/*
https://screeps.com/a/components/game/tutorial/section3/step5.html

<section app-tutorial-content>
<p>
As before, let’s move this role into a separate module <code>role.builder</code>. The building is carried out
by applying the method <code>Creep.build</code> to the construction sites searchable by
<code>Room.find(FIND_CONSTRUCTION_SITES)</code>. The structure requires energy which your creep can harvest on its own.
</p>
<p>
To avoid having the creep run back and forth too often but make it deplete the cargo, let’s complicate our logic by
creating a new Boolean variable <code>creep.memory.building</code> which will tell the creep when to switch tasks.
We'll also add new <code>creep.say</code> call and <code>visualizePathStyle</code> option to the <code>moveTo</code>
method to visualize the creep's intentions.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Create the module <code>role.builder</code> with a behavior logic for a new creep.
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
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.build' target='_blank'>
Creep.build
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.say' target='_blank'>
Creep.say
</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='role.builder'></app:tutorial-code>
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
それではこのロールを<code>role.builder</code>モジュールへ分割しましょう。
建築は、<code>Creep.build</code>メソッドを
<code>Room.find(FIND_CONSTRUCTION_SITES)</code>によって検索可能な建設地に対し適用することで実行されます。
建造物にはエナジーが必要です。
</p>
<p>
エナジーの消耗を早めるのでなるべくクリープの頻繁な行き来を避けられるよう、
いつタスクの切り替えを行うべきかクリープに教えられるような
<code>creep.memory.building</code>というboolean変数を新しく作りロジックを組みましょう。
また、クリープの行動意図をビジュアルで示せるよう、
新規に<code>creep.say</code>を呼び、
<code>moveTo</code>メソッドに<code>visualizePathStyle</code>オプションオプションを付与しましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
新しいクリープ用のロジックを<code>role.builder</code>モジュールに作成しましょう。
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
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.find' target='_blank'>
Room.find
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.build' target='_blank'>
Creep.build
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.say' target='_blank'>
Creep.say
</a></code>
</li>
</ul>
</div>
<app:tutorial-code title='role.builder'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step5.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  