/*
https://screeps.com/a/components/game/tutorial/section1/step1.html

<section app-tutorial-content>
<b>Welcome to Screeps!<br><br></b>
<p>
This tutorial will help you learn basic game concepts step by step.
You can take it later, but we strongly advise you to do it now, before you start a real game.
</p>
<p ng-if='!nw'>
If you experience any performance issues, please note that Screeps is best played in Chrome browser.
</p>
<p>
Screeps is a game for programmers. If you don't know how to code in JavaScript, check out this&nbsp;<a app-nw-external-link href='https://codecademy.com/learn/javascript' target='_blank'>free interactive course</a>.
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.quit()'>Back</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Start</md:button>
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
<b>Screeps へようこそ!<br><br></b>
<p>
このチュートリアルはゲームコンセプトの基礎を順に学ぶのに役立ちます。
後回しにもできますが、実際のゲームを始める前にゲームコンセプトを知ることを強く推奨します。
</p>
<p ng-if='!nw'>
パフォーマンスに問題が有るようならChromeブラウザでプレイしてみてください。
</p>
<p>
Screepsはプログラマのためのゲームです。もしJavaScriptを知らないのであれば、<a app-nw-external-link href='https://codecademy.com/learn/javascript' target='_blank'>無料学習コース</a>を検討してみてください。
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.quit()'>Back</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.next()'>Start</md:button>
</div>
</section>`

    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://screeps.com/a/components/game/tutorial/section1/step1.html*"], 
  types: ["main_frame", "xmlhttprequest"]},
  ["blocking"]
);
