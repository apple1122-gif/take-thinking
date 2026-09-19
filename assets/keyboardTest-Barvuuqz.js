import{t as e}from"./common-DMP5SA1A.js";var t=[{id:`enter`,label:`Enter（決定）`,values:[`Enter`,`NumpadEnter`]},{id:`space`,label:`Space（決定）`,values:[`Space`,`Spacebar`,` `]},{id:`key-a`,label:`A（1ボタン決定）`,values:[`KeyA`,`a`,`A`]},{id:`key-b`,label:`B（戻る／標準操作）`,values:[`KeyB`,`b`,`B`]},{id:`up`,label:`↑`,values:[`ArrowUp`]},{id:`down`,label:`↓`,values:[`ArrowDown`]},{id:`left`,label:`←`,values:[`ArrowLeft`]},{id:`right`,label:`→`,values:[`ArrowRight`]},{id:`digit-1`,label:`1（はい）`,values:[`Digit1`,`1`]},{id:`digit-2`,label:`2（いいえ）`,values:[`Digit2`,`2`]},{id:`digit-0`,label:`0（🔄 更新）`,values:[`Digit0`,`0`,`Numpad0`]},{id:`key-c`,label:`C（モード切替）`,values:[`KeyC`,`c`,`C`]},{id:`key-h`,label:`H（ホーム）`,values:[`KeyH`,`h`,`H`]},{id:`key-r`,label:`R（もう一度）`,values:[`KeyR`,`r`,`R`]},{id:`escape`,label:`Escape（戻る）`,values:[`Escape`]}],n=document.querySelector(`#app`);if(!n)throw Error(`診断画面の表示領域が見つかりません。`);n.innerHTML=`
  <section class="diagnostics-screen" aria-labelledby="screen-title">
    <header class="diagnostics-header">
      <div>
        <p class="phase-label">家族・開発者用</p>
        <h1 id="screen-title">8BitDo & マウス入力確認</h1>
        <p>コントローラーのキーやマウス操作がSafari/PWAへ届いているか確認します。</p>
      </div>
      <a href="./">たけシンキングへ</a>
    </header>

    <section class="mouse-panel" aria-labelledby="mouse-title">
      <div class="mouse-heading">
        <div>
          <h2 id="mouse-title">マウス・極小動作 入力確認</h2>
          <p>有線マウス／通常マウスのクリックやホイール回転をリアルタイムに検出します。</p>
        </div>
        <strong id="mouse-detected-state" class="mouse-state-badge">未検出</strong>
      </div>

      <div class="mouse-grid">
        <div class="mouse-key" data-mouse-action="left-click" data-observed="false">
          <strong>左クリック</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="right-click" data-observed="false">
          <strong>右クリック</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="middle-click" data-observed="false">
          <strong>ホイールクリック</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="wheel-up" data-observed="false">
          <strong>ホイール上</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="wheel-down" data-observed="false">
          <strong>ホイール下</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="pointermove" data-observed="false">
          <strong>pointermove</strong>
          <span>未検出</span>
        </div>
        <div class="mouse-key" data-mouse-action="scroll" data-observed="false">
          <strong>scroll</strong>
          <span>未検出</span>
        </div>
      </div>

      <dl class="mouse-detail-grid">
        <div><dt>最後に検出した操作</dt><dd id="mouse-last-action">—</dd></div>
        <div><dt>イベント種類</dt><dd id="mouse-last-event">—</dd></div>
        <div><dt>button / buttons</dt><dd id="mouse-last-button">—</dd></div>
        <div><dt>deltaY（ホイール量）</dt><dd id="mouse-last-delta">—</dd></div>
        <div><dt>デバイス種別 (pointerType)</dt><dd id="mouse-last-pointer-type">—</dd></div>
        <div><dt>検出時刻</dt><dd id="mouse-last-time">—</dd></div>
      </dl>
    </section>

    <section class="latest-event" aria-labelledby="latest-title">
      <p id="event-state" class="event-state">入力待ち</p>
      <h2 id="latest-title">直近のキーボードイベント</h2>
      <dl class="event-grid">
        <div><dt>種類</dt><dd id="event-type">—</dd></div>
        <div><dt>event.key</dt><dd id="event-key">—</dd></div>
        <div><dt>event.code</dt><dd id="event-code">—</dd></div>
        <div><dt>repeat</dt><dd id="event-repeat">—</dd></div>
        <div><dt>keyCode</dt><dd id="event-key-code">—</dd></div>
        <div><dt>which</dt><dd id="event-which">—</dd></div>
        <div><dt>location</dt><dd id="event-location">—</dd></div>
        <div><dt>修飾キー</dt><dd id="event-modifiers">—</dd></div>
        <div><dt>isComposing</dt><dd id="event-composing">—</dd></div>
        <div><dt>isTrusted</dt><dd id="event-trusted">—</dd></div>
        <div><dt>フォーカス</dt><dd id="event-target">—</dd></div>
        <div><dt>画面状態</dt><dd id="event-visibility">—</dd></div>
        <div><dt>時刻</dt><dd id="event-time">—</dd></div>
      </dl>
    </section>

    <section class="expected-panel" aria-labelledby="expected-title">
      <div class="expected-heading">
        <div>
          <h2 id="expected-title">8BitDo Micro想定キー</h2>
          <p>実機で各ボタンを1回ずつ押し、すべて「確認済み」になるか確認します。</p>
        </div>
        <strong id="expected-count">0 / ${t.length} 確認済み</strong>
      </div>
      <div class="expected-grid">
        ${t.map(e=>`
              <div class="expected-key" data-expected-id="${e.id}" data-observed="false">
                <strong>${e.label}</strong>
                <span>未確認</span>
              </div>`).join(``)}
      </div>
      <p id="page-state" class="page-state" role="status">画面のフォーカスを確認中</p>
    </section>

    <div class="diagnostic-actions">
      <label class="prevent-option">
        <input id="prevent-default" type="checkbox" />
        ブラウザの既定動作を抑制する
      </label>
      <button id="copy-history" type="button">履歴をコピー</button>
      <button id="clear-history" type="button">履歴を消去</button>
      <p id="action-status" role="status"></p>
    </div>

    <section class="history-panel" aria-labelledby="history-title">
      <div class="history-heading">
        <h2 id="history-title">イベント履歴</h2>
        <span id="history-count">0件</span>
      </div>
      <div class="history-table-wrap">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>種類</th>
              <th>key</th>
              <th>code</th>
              <th>repeat</th>
              <th>時刻</th>
            </tr>
          </thead>
          <tbody id="history-body">
            <tr><td colspan="6" class="empty-history">まだ入力されていません</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <footer class="diagnostics-footer">
      <span id="pwa-status">オフライン準備を確認中</span>
      <span>keyCode / whichは調査用の非推奨値です</span>
    </footer>
  </section>
`;var r=e=>{let t=document.querySelector(e);if(!t)throw Error(`診断画面の要素が見つかりません: ${e}`);return t},i={state:r(`#event-state`),type:r(`#event-type`),key:r(`#event-key`),code:r(`#event-code`),repeat:r(`#event-repeat`),keyCode:r(`#event-key-code`),which:r(`#event-which`),location:r(`#event-location`),modifiers:r(`#event-modifiers`),composing:r(`#event-composing`),trusted:r(`#event-trusted`),target:r(`#event-target`),visibility:r(`#event-visibility`),time:r(`#event-time`)},a=r(`#history-body`),o=r(`#history-count`),s=r(`#prevent-default`),c=r(`#action-status`),l=r(`#pwa-status`),u=r(`#expected-count`),d=r(`#page-state`),f=[],p=new Set,m=0,h=e=>{if(!(e instanceof Element))return`window`;let t=e.id?`#${e.id}`:``;return`${e.tagName.toLowerCase()}${t}`},g=e=>{let t=[e.ctrlKey?`Ctrl`:``,e.altKey?`Alt`:``,e.shiftKey?`Shift`:``,e.metaKey?`Meta`:``].filter(Boolean);return t.length>0?t.join(` + `):`なし`},_=e=>({number:++m,type:e.type,key:e.key||`(空)`,code:e.code||`(空)`,repeat:e.repeat,keyCode:e.keyCode,which:e.which,location:e.location,modifiers:g(e),isComposing:e.isComposing,isTrusted:e.isTrusted,target:h(e.target),visibility:document.visibilityState,time:new Intl.DateTimeFormat(`ja-JP`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,fractionalSecondDigits:3}).format(new Date)}),v=e=>{i.state.textContent=e.type===`keydown`?`押されました`:`離されました`,i.state.dataset.eventType=e.type,i.type.textContent=e.type,i.key.textContent=e.key,i.code.textContent=e.code,i.repeat.textContent=String(e.repeat),i.keyCode.textContent=String(e.keyCode),i.which.textContent=String(e.which),i.location.textContent=String(e.location),i.modifiers.textContent=e.modifiers,i.composing.textContent=String(e.isComposing),i.trusted.textContent=String(e.isTrusted),i.target.textContent=e.target,i.visibility.textContent=e.visibility,i.time.textContent=e.time},y=e=>{if(e.type!==`keydown`)return;let n=t.find(t=>t.values.includes(e.code)||t.values.includes(e.key));if(!n)return;p.add(n.id);let r=document.querySelector(`[data-expected-id="${n.id}"]`),i=r?.querySelector(`span`);r&&i&&(r.dataset.observed=`true`,i.textContent=`確認済み: ${e.key} / ${e.code}`),u.textContent=`${p.size} / ${t.length} 確認済み`},b=()=>{if(document.visibilityState!==`visible`){d.textContent=`画面状態: ${document.visibilityState}（入力は待機中）`,d.dataset.active=`false`;return}let e=document.hasFocus();d.textContent=e?`画面状態: visible / フォーカスあり`:`画面状態: visible / フォーカスなし`,d.dataset.active=String(e)},x=()=>{if(a.replaceChildren(),o.textContent=`${f.length}件`,f.length===0){let e=document.createElement(`tr`),t=document.createElement(`td`);t.colSpan=6,t.className=`empty-history`,t.textContent=`まだ入力されていません`,e.append(t),a.append(e);return}for(let e of f){let t=document.createElement(`tr`),n=[String(e.number),e.type,e.key,e.code,String(e.repeat),e.time];for(let e of n){let n=document.createElement(`td`);n.textContent=e,t.append(n)}a.append(t)}},S=e=>{s.checked&&e.preventDefault();let t=_(e);f.unshift(t),f.splice(80),v(t),y(t),x(),c.textContent=``};window.addEventListener(`keydown`,S,{capture:!0}),window.addEventListener(`keyup`,S,{capture:!0});var C={state:r(`#mouse-detected-state`),lastAction:r(`#mouse-last-action`),lastEvent:r(`#mouse-last-event`),lastButton:r(`#mouse-last-button`),lastDelta:r(`#mouse-last-delta`),lastPointerType:r(`#mouse-last-pointer-type`),lastTime:r(`#mouse-last-time`)},w=(e,t,n,r,i,a)=>{let o=new Intl.DateTimeFormat(`ja-JP`,{hour:`2-digit`,minute:`2-digit`,second:`2-digit`,fractionalSecondDigits:3}).format(new Date);C.state.textContent=`${t} を検出`,C.state.dataset.detected=`true`,C.lastAction.textContent=t,C.lastEvent.textContent=n,C.lastButton.textContent=r,C.lastDelta.textContent=i,C.lastPointerType.textContent=a||`mouse`,C.lastTime.textContent=o;let s=document.querySelector(`[data-mouse-action="${e}"]`);if(s){s.dataset.observed=`true`;let e=s.querySelector(`span`);e&&(e.textContent=`検出済み`)}};window.addEventListener(`pointerdown`,e=>{w(e.button===2?`right-click`:e.button===1?`middle-click`:`left-click`,e.button===2?`右クリック`:e.button===1?`ホイールクリック`:`左クリック`,`pointerdown`,`button: ${e.button}, buttons: ${e.buttons}`,`—`,e.pointerType),s.checked&&e.preventDefault()},{capture:!0}),window.addEventListener(`contextmenu`,e=>{w(`right-click`,`右クリック (contextmenu)`,`contextmenu`,`button: ${e.button}, buttons: ${e.buttons}`,`—`,`mouse`),s.checked&&e.preventDefault()},{capture:!0}),window.addEventListener(`wheel`,e=>{w(e.deltaY<0?`wheel-up`:`wheel-down`,e.deltaY<0?`ホイール上回転`:`ホイール下回転`,`wheel`,`buttons: ${e.buttons}`,`deltaY: ${e.deltaY.toFixed(1)} (X:${e.deltaX.toFixed(1)})`,`mouse`),s.checked&&e.preventDefault()},{capture:!0,passive:!1});var T=0;window.addEventListener(`pointermove`,e=>{if(e.pointerType!==`mouse`&&e.pointerType!==`pen`)return;let t=performance.now();t-T<120||(T=t,w(`pointermove`,`ポインタ移動`,`pointermove`,`buttons: ${e.buttons}`,`pos: (${Math.round(e.clientX)}, ${Math.round(e.clientY)})`,e.pointerType))},{passive:!0}),window.addEventListener(`scroll`,()=>{w(`scroll`,`スクロール`,`scroll`,`—`,`scrollY: ${Math.round(window.scrollY)}`,`scroll`)},{passive:!0}),r(`#clear-history`).addEventListener(`click`,()=>{f.length=0,p.clear(),m=0,i.state.textContent=`入力待ち`,i.state.removeAttribute(`data-event-type`),document.querySelectorAll(`[data-expected-id]`).forEach(e=>{e.dataset.observed=`false`;let t=e.querySelector(`span`);t&&(t.textContent=`未確認`)}),document.querySelectorAll(`[data-mouse-action]`).forEach(e=>{e.dataset.observed=`false`;let t=e.querySelector(`span`);t&&(t.textContent=`未検出`)}),C.state.textContent=`未検出`,C.state.removeAttribute(`data-detected`),C.lastAction.textContent=`—`,C.lastEvent.textContent=`—`,C.lastButton.textContent=`—`,C.lastDelta.textContent=`—`,C.lastPointerType.textContent=`—`,C.lastTime.textContent=`—`,u.textContent=`0 / ${t.length} 確認済み`,x(),c.textContent=`履歴を消去しました`}),window.addEventListener(`focus`,b),window.addEventListener(`blur`,b),document.addEventListener(`visibilitychange`,b),b(),r(`#copy-history`).addEventListener(`click`,async()=>{if(f.length===0){c.textContent=`コピーする履歴がありません`;return}let e=JSON.stringify([...f].reverse(),null,2);try{await navigator.clipboard.writeText(e),c.textContent=`履歴をコピーしました`}catch{c.textContent=`コピーできませんでした。画面を撮影してください`}}),e({onReady:()=>{l.textContent=`オフライン準備済み`},onError:()=>{l.textContent=`オフライン準備を確認できません`}});