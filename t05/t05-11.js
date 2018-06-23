/*
https://screeps.com/a/components/game/tutorial/section5/step11.html

<section app-tutorial-content>
<p>
All the damage from the attack has been repaired!
</p>
<p>
Congratulations, you have completed the Tutorial! Now you have enough knowledge and code to start playing in
the online mode. Choose your room, found a colony, and set out on your own quest for domination in the
world of Screeps!
</p>
<p>
If you want to delve deeper in the subtleties of the game or have any questions, please feel free to refer to:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/' target='_blank'>
Documentation
</a>
</li>
<li>
<a app-nw-external-link href='http://support.screeps.com/hc/communities/public/topics' target='_blank'>
Community forums
</a>
</li>
<li>
<a app-nw-external-link href='http://chat.screeps.com' target='_blank'>
Slack chat
</a>
</li>
</ul>
</p>
<p>
Have fun scripting!
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Finish</md:button>
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
All the damage from the attack has been repaired!
</p>
<p>
Congratulations, you have completed the Tutorial! Now you have enough knowledge and code to start playing in
the online mode. Choose your room, found a colony, and set out on your own quest for domination in the
world of Screeps!
</p>
<p>
If you want to delve deeper in the subtleties of the game or have any questions, please feel free to refer to:
<ul>
<li>
<a app-nw-external-link href='http://docs.screeps.com/' target='_blank'>
Documentation
</a>
</li>
<li>
<a app-nw-external-link href='http://support.screeps.com/hc/communities/public/topics' target='_blank'>
Community forums
</a>
</li>
<li>
<a app-nw-external-link href='http://chat.screeps.com' target='_blank'>
Slack chat
</a>
</li>
</ul>
</p>
<p>
Have fun scripting!
</p>
<div class='tutorial-controls'>
<md:button ng:click='Tutorial.close()'>Stay</md:button>
<md:button class='md-raised md-primary' ng:click='Tutorial.finish()'>Finish</md:button>
</div>
</section>`
  
      filter.write(encoder.encode(str));
      filter.disconnect();
    }
  
    return {};
  }
  
  browser.webRequest.onBeforeRequest.addListener(
    listener,
    {urls: ["https://screeps.com/a/components/game/tutorial/section5/step11.html*"], 
    types: ["main_frame", "xmlhttprequest"]},
    ["blocking"]
  );
  