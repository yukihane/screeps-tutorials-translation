/*
https://screeps.com/a/components/game/tutorial/section1/step6.html

<section app-tutorial-content>
<p>
Your command returns a response (or execution error) in the console below. All output is duplicated into your browser console (<strong>Ctrl+Shift+J</strong>) where you can expand objects for debugging purposes.
You can open and close the bottom panel by pressing <strong>Alt+Enter</strong>.
</p>
<p>Now we'll write something real.</p>
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
入力したコマンドの下に実行結果(あるいは実行エラー)が返ります。
全ての出力はブラウザコンソール(<strong>Ctrl+Shift+J</strong>)にも複製されます。
ブラウザコンソールではデバッグの際にオブジェクトを展開することができます。
<strong>Alt+Enter</strong>キーで下部パネルを開閉できます。
</p>
<p>実際にコードを入力していきましょう。</p>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step6.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  