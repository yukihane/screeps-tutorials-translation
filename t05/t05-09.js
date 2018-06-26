/*
https://screeps.com/a/components/game/tutorial/section5/step9.html

<section app-tutorial-content>
<p>
The enemy creep is eliminated and our colony can breathe easy. However, the invader has damaged some walls during the brief
attack. You’d better set up auto-repair.
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
敵クリープを殲滅し一息つけるようになりました。
しかし、侵略者は壁にダメージを与えていました。
自動修復をセットアップしておいた方が良いでしょう。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step9.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  