/*
https://screeps.com/a/components/game/tutorial/section1/step7.html

<section app-tutorial-content>
<p>
Your spawn creates new units called "creeps" by its method <code>spawnCreep</code>.
Usage of this method is described in the <a href="http://docs.screeps.com" app-nw-external-link target="_blank">documentation</a>. Each creep has a name and certain body parts that give it
various skills.
</p>
<p>
You can address your spawn by its name the following way: <code>Game.spawns['Spawn1']</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Create a worker creep with the body array <code>[WORK,CARRY,MOVE]</code> and name <code>Harvester1</code> (the name is important for the tutorial!).
You can type the code in the console yourself or copy&nbsp;&&nbsp;paste the hint below.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/introduction.html#Your-colony' target='_blank'>Your colony</a>
</li>
<li>
<a app-nw-external-link href='http://docs.screeps.com/creeps.html' target='_blank'>Creeps</a>
</li>
<li>
<a app-nw-external-link href='http://docs.screeps.com/global-objects.html#Game-object' target='_blank'>Game object</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
</ul>
</div>
<app:tutorial-code visible='true'></app:tutorial-code>
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
spawnは<code>spawnCreep</code>メソッドで"creeps"(クリープ)と呼ばれるユニットを生成します。
このメソッドの使用方法は<a href="http://docs.screeps.com" app-nw-external-link target="_blank">ドキュメント</a>に記載されています。
各creepは名前と、多様なスキルが得られるいくつかのボディパーツを持っています。
</p>
<p>
次の方法で名前によってspawnを指定することが出来ます: <code>Game.spawns['Spawn1']</code>
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
ボディ配列<code>[WORK,CARRY,MOVE]</code>でワーカーcreepを作成し、<code>Harvester1</code>と名づけます(この名前はチュートリアルに置いて重要です！)。
コンソールにコードをタイプします。次のヒントをcopy&nbsp;&&nbsp;pasteすることもできます。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/introduction.html#Your-colony' target='_blank'>Your colony</a>
</li>
<li>
<a app-nw-external-link href='http://docs.screeps.com/creeps.html' target='_blank'>Creeps</a>
</li>
<li>
<a app-nw-external-link href='http://docs.screeps.com/global-objects.html#Game-object' target='_blank'>Game object</a>
</li>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#StructureSpawn.spawnCreep' target='_blank'>StructureSpawn.spawnCreep</a></code>
</li>
</ul>
</div>
<app:tutorial-code visible='true'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step7.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );