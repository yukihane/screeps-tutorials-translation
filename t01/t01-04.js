/*
https://screeps.com/a/components/game/tutorial/section1/step4.html

<section app-tutorial-content>
<p>
You play by writing code in the panel in the bottom of the screen.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Click the "Console" tab.
</div>
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
画面下部のパネル内にコードを書くことでゲームをプレイします。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
"Console" タブをクリックしてください。
</div>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step4.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  