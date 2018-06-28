/*
https://screeps.com/a/components/game/tutorial/section3/step1.html

<section app-tutorial-content>
<p>
The Controller upgrade gives access to some new structures: walls, ramparts, and extensions.
We’ll discuss walls and ramparts in the next Tutorial section, for now let’s talk about extensions.
</p>
<p>
<b>Extensions</b> are required to build larger creeps. A creep with only one body part of one type works poorly.
Giving it several <code>WORKs</code> will make him work proportionally faster.
</p>
<p>
However, such a creep will be costly and a lone spawn can only contain 300 energy units.
To build creeps costing over 300 energy units you need spawn extensions.
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
コントローラをアップグレードすると新しい構造物にアクセスできるようになります:
壁(wall)、城壁(rampart)、そしてエクステ(extension)です。
今からエクステについて説明します。壁と城壁については次のチュートリアルセクションで述べます。
</p>
<p>
<b>エクステ</b>を建設するにはより大きなクリープが欲しくなります。
ボディパーツを1つしか持たないクリープは仕事量が貧弱です。
複数の<code>WORK</code>を付与すれば比例して働きが早くなります。
</p>
<p>
しかしそのようなクリープはコストが高くつきますし、そもそも1つのスポーンは300エナジーユニットしか保有できません。
300エナジーユニットを超えるコストが必要なユニットを作るにはスポーンエクステが必要です。
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
    {urls: ["https://screeps.com/a/components/game/tutorial/section3/step1.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  