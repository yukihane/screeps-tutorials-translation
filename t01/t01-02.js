/*
https://screeps.com/a/components/game/tutorial/section1/step2.html

<section app-tutorial-content>
<p>
Remember that if you accidentally close a hint window in the tutorial, you can always open it again with this button.
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
  チュートリアル中、もし誤ってヒントウィンドウを閉じてしまった場合は、このボタンを押せば再度開くことができます。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step2.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  