/*
https://screeps.com/a/components/game/tutorial/section3/step13.html

<section app-tutorial-content>
<p>
As you can see on the right panel, this powerful creep harvests 8 energy units per tick.
A few such creeps can completely drain an energy source before it refills thus giving your colony a
maximum energy boost.
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
右のパネルを見るとわかる通り、この強力なクリープは1ティックごとに8エナジーユニットを収穫します。
そういうクリープは少数でエナジーソースを(補充する前に)完全に空にします。
従ってコロニーに最大限のエナジーブーストを与えます。
(訳注: エナジーソースの保有エナジー量は有限で、一定期間ごとに回復します。
その回復分を上回る収穫効率であれば、最大量のエナジーが取得できている状態だ、と言えます。)
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step13.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  