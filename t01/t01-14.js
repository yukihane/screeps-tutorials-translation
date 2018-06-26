/*
https://screeps.com/a/components/game/tutorial/section1/step14.html

<section app-tutorial-content>
<p>
Here you can write scripts that will run on a permanent basis, each game tick in a loop.
It allows writing constantly working programs to control behaviour of your creeps which will work even while you
are offline (in the real game only, not the Simulation Room mode).
</p>
<p>
To commit a script to the game so it can run, use this button or <strong>Ctrl+Enter</strong>.
</p>
<p>
The code for each Tutorial section is created in its own branch. You can view code from these branches for
further use in your scripts.
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/scripting-basics.html' target='_blank'>Scripting basics</a>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
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
ここに恒久的な土台となる(ループ内でゲームティックごとに実行される)スクリプトを記述できます。
うまく書けば、たとえあなたがオフラインになろうとも、定常的にクリープの振る舞いを制御し続けることができます。
(※実際のゲームに限ります。シミュレーションルームモードではオフラインでは動作しません。)
</p>
<p>
記述したスクリプトを確定しゲームに反映させるには、このボタンを使うか<strong>Ctrl+Enter</strong>キーを押します。
</p>
<p>
本チュートリアルの各セクションのコードはそれぞれのブランチに作成されています。
将来あなたのスクリプトに組み込みたくなった場合、それらのブランチからコードを参照することができます。
</p>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/scripting-basics.html' target='_blank'>Scripting basics</a>
</li>
</ul>
</div>
<div class='tutorial-controls'>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Next</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step14.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );