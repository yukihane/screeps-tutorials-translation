/*
https://screeps.com/a/components/game/tutorial/section4/step2.html

<section app-tutorial-content>
<p>
You will have to create new creeps when old ones die from age or some other reasons. Since there are no
events in the game to report death of a particular creep, the easiest way is to just count the number of
required creeps, and if it becomes less than a defined value, to start spawning.
</p>
<p>
There are several ways to count the number of creeps of the required type. One of them is filtering
<code>Game.creeps</code> with the help of the <code>_.filter</code> function and using the role in
their memory. Let’s try to do that and bring the number of creeps into the console.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Add the output of the number of creeps with the role <code>harvester</code> into the console.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.creeps' target='_blank'>Game.creeps</a></code>
</li>
<li>
<code><a app-nw-external-link href='https://lodash.com/docs#filter' target='_blank'>lodash.filter</a></code>
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
古いクリープが寿命その他の理由で死んだとき新しいクリープを生成しなければならないでしょう。
個々のクリープが死んだときにゲーム内では特にイベント通知は行われないので
最も簡単な方法はクリープの数をカウントし、事前定義した数より少なくなれば生成するということになります。
</p>
<p>
クリープの数をカウントする方法は何種類かあります。
1つは<code>Game.creeps</code>を<code>_.filter</code>機能でフィルタしロールで絞り込む方法です。
コンソールでこの方法を試してみましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
コンソールでロール<code>harvester</code>のクリープの数を出力しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Game.creeps' target='_blank'>Game.creeps</a></code>
</li>
<li>
<code><a app-nw-external-link href='https://lodash.com/docs#filter' target='_blank'>lodash.filter</a></code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section4/step2.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  