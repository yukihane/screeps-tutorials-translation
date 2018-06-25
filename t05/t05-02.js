/*
https://screeps.com/a/components/game/tutorial/section5/step2.html

<section app-tutorial-content>
<p>
This hostile creep has come from the left entry and attacked your colony. It’s good that we have walls to
restrain it temporarily. But they will fall sooner or later, so we need to deal with the problem.
</p>
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
この敵クリープは左の入り口からやって来てあなたの領土を攻撃しています。
一時的に敵の動きを抑えるのに壁は役に立ちます。
しかし、その壁もいつかは破られてしまいますので対応が必要です。
</p>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step2.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  