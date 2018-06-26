/*
https://screeps.com/a/components/game/tutorial/section1/step12.html

<section app-tutorial-content>
<p>
It is time to put the creep to work! This yellow square is an energy source &mdash; a valuable game resource.
It can be harvested by creeps with one or more <code>WORK</code> body parts and transported to the spawn by creeps with <code>CARRY</code> parts.
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
さあクリープを配置し動かしましょう！この黄色の四角はエナジーソース &mdash; このゲームにおける重要な資源です。
エナジーソースは1つ以上の<code>WORK</code>ボディーパーツを備えたクリープが収穫でき、
また、1つ以上の<code>CARRY</code>ボディーパーツを備えたクリープが輸送できます。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step12.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );