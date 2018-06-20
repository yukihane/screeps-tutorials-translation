/*
https://screeps.com/a/components/game/tutorial/section2/step1.html

<section app-tutorial-content>
<p>
In this Tutorial section we’ll talk about a key strategic object in your room: <strong>Room Controller</strong>.
By controlling this invincible structure you can build facilities in the room.
The higher the controller level, the more structures available to build.
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
このチュートリアルセクションではあなたのルーム内の重要な戦略オブジェクト <strong>Room Controller</strong> (ルームコントローラ)について説明します。
この無敵の建造物をコントロールすることでルームの中に施設を建築できます。
コントローラレベルが高くなると、より多くの施設を建築できるようになります。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step1.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  