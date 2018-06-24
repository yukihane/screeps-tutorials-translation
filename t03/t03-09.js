/*
https://screeps.com/a/components/game/tutorial/section3/step9.html

<section app-tutorial-content>
<p>
To know the total amount of energy in the room, you can use the property <code>Room.energyAvailable</code>.
Let’s add the output of this property into the console in order to track it during the filling of extensions.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Fill all the 5 extensions and the spawn with energy.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.energyAvailable' target='_blank'>
Room.energyAvailable
</a></code>
</li>
</ul>
</div>
<app-tutorial-code title='main'></app-tutorial-code>
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
<code>Room.energyAvailable</code>プロパティでルーム内にあるエナジーの総量がわかります。
拡張の補充を行っている間エナジー量をトラッキングするためにコンソールにこのプロパティの出力を行ってみましょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
5つの拡張とスポーンにエナジーを補充しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
<code><a app-nw-external-link href='http://docs.screeps.com/api/#Room.energyAvailable' target='_blank'>
Room.energyAvailable
</a></code>
</li>
</ul>
</div>
<app-tutorial-code title='main'></app-tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step9.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  