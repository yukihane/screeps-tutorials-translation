/*
https://screeps.com/a/components/game/tutorial/section1/step22.html

<section app-tutorial-content>
<p>It's much better now!</p>
<p>
By adding new roles and modules to your creeps this way, you can control and manage the work of many creeps.
In the next Tutorial section, we’ll develop a new creep role.
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
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
<p>It's much better now!</p>
<p>
この方法でクリープに新しいロールとモジュールを追加することで複数のクリープの動きを制御し管理することができます。
次のチュートリアルセクションでは、新しいクリープのロールを開発していきます。
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>留まる</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>次のセクションへ</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step22.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );