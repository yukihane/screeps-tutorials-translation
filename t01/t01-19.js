/*
https://screeps.com/a/components/game/tutorial/section1/step19.html

<section app-tutorial-content>
<p>
The second creep is ready, but it won't move until we include it into the program.
</p>
<p>
To set the behavior of both creeps we could just duplicate the entire script for the second one,
but it's much better to use the <code>for</code> loop against all the screeps in <code>Game.creeps</code>.
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
Expand your program to both the creeps.
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
Documentation:
<ul>
<li>
JavaScript Reference:
<a app-nw-external-link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in' target='_blank'>
for...in loops
</a>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
2つめのクリープが準備できましたが、まだプログラムされていないので動きません。
</p>
<p>
2つめのクリープのためにスクリプト全体を複製することもできますが、
それよりも<code>Game.creeps</code>の全クリープに対して<code>for</code> ループを使うのが良いでしょう。
</p>
<div class='objective'>
<div class='fa fa-caret-right'></div>
両方のクリープに対してプログラムを拡張しましょう。
</div>
<div class='objective'>
<div class='fa fa-caret-down'></div>
ドキュメント:
<ul>
<li>
JavaScript Reference:
<a app-nw-external-link href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in' target='_blank'>
for...in loops
</a>
</li>
</ul>
</div>
<app:tutorial-code></app:tutorial-code>
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section1/step19.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );