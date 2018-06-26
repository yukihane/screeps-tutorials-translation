/*
https://screeps.com/a/components/game/tutorial/section1/step15.html

<section app-tutorial-content>
<p>
To send a creep to harvest energy, you need to use the methods described in the documentation section below.
Commands will be passed each game tick. The <code>harvest</code> method requires that the energy source is adjacent to the creep.
</p>
<p>
You give orders to a creep by its name this way: <code>Game.creeps['Harvester1']</code>.
Use the <code>FIND_SOURCES</code> constant as an argument to the <code>Room.find</code> method.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Send your creep to harvest energy by typing code in the "Script" tab.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.creeps' target='_blank'>
Game.creeps
</a></code>
</li>
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
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.moveTo' target='_blank'>
Creep.moveTo
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.harvest' target='_blank'>
Creep.harvest
</a></code>
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
エナジーを収穫するクリープを作るために、後述しているドキュメントに記載されているメソッドを使う必要があります。
コマンドはゲームティックごとに渡されます。 <code>harvest</code>メソッドを実行するにはエナジーソースがクリープと隣接していなければなりません。
</p>
<p>
次の方法で名前指定で命令を与えられます: <code>Game.creeps['Harvester1']</code>。
<code>Room.find</code>メソッドの引数として<code>FIND_SOURCES</code>を使いましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
"Script" タブにコードをタイプしあなたのクリープにエナジー収穫命令を与えましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.creeps' target='_blank'>
Game.creeps
</a></code>
</li>
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
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.moveTo' target='_blank'>
Creep.moveTo
</a></code>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Creep.harvest' target='_blank'>
Creep.harvest
</a></code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step15.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );