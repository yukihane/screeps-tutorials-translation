/*
https://screeps.com/a/components/game/tutorial/section2/step7.html

<section app-tutorial-content>
<p>
Perfect, you have upgraded your Controller level!
</p>
<p>
<strong>Important:</strong> If you don’t upgrade your Controller within 20,000 game ticks, it loses one level.
On reaching level 0, you will lose control over the room, and another player will be able to capture it freely.
Make sure that at least one of your creeps regularly performs the function <code>upgradeController</code>.
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
<p>
素晴らしい、コントローラレベルをアップグレードできました！
</p>
<p>
<strong>重要:</strong> もし20,000ゲームティック以内にコントローラをアップグレードしなかった場合、
1レベルを失います。レベル0になるとルームの制御権を失い、他のプレーヤーが自由にルームの制御を行えるようになります。
通常は少なくとも1機のクリープに<code>upgradeController</code>機能を割り当てておくようにしましょう。
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Next section</md:button>
</div>
</section>
`
      
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section2/step7.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  