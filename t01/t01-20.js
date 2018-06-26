/*
https://screeps.com/a/components/game/tutorial/section1/step20.html

<section app-tutorial-content>
<p>
Now let's improve our code by taking the workers' behavior out into a separate <em>module</em>. Create a module called <code>role.harvester</code>
with the help of the Modules section on the left of the script editor and define a <code>run</code> function inside the <code>module.exports</code> object,
containing the creep behavior.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Create a <code>role.harvester</code> module.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/modules.html' target='_blank'>
Organizing scripts using modules
</a>
</li>
</ul>
</div>
<app:tutorial-code title='role.harvester'></app:tutorial-code>
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
さて、次は<em>モジュール</em>にワーカーの振る舞いを分割しコードを改善しましょう。
スクリプトエディタの左側にあるモジュールセクションで<code>role.harvester</code>というモジュールを作成します。
そして、<code>module.exports</code>オブジェクトの中で<code>run</code>関数を定義します。
この関数にクリープの振る舞いを含めます。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
<code>role.harvester</code> モジュールを作成します。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/modules.html' target='_blank'>
Organizing scripts using modules
</a>
</li>
</ul>
</div>
<app:tutorial-code title='role.harvester'></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step20.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );