/*
https://screeps.com/a/components/game/tutorial/section1/step13.html

<section app-tutorial-content>
<p>
To give your creep a permanently working command, the console is not enough, since we want the creep to work all the time.
So we'll be using the Script tab rather than the console.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Click the "Script" tab.
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
クリープに恒久的なワークコマンドを与えようとした場合、コンソール入力では十分ではありません。
クリープには常に働いていて欲しいのです。
そういう場合にはコンソールではなくScriptタブを使いましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
"Script" タブをクリックして下さい。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step13.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );