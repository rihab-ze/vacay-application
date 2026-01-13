import { _ as __vitePreload } from './preload-helper-CqoC6PUU.js';
import { q as qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-tHd4XWGl.js';
import { q as qodly_064baed7a010e6deba40__loadShare__react__loadShare__ } from './qodly_064baed7a010e6deba40__loadShare__react__loadShare__-DUOS1bWf.js';
import { T as Tk, K as KI, I as Iir, G as Gd, N as ND, q as qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, l as lir } from './index.es-idgafHWB.js';
import './qodly_064baed7a010e6deba40__mf_v__runtimeInit__mf_v__-BtDtkUZh.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './index.es-BXhwY473.js';
import './tiny-invariant-w-EUxzzv.js';
import './qodly_064baed7a010e6deba40__loadShare__react_mf_2_dom__loadShare__-3DaumWqB.js';
import './qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-BUlv7PYi.js';
import '@ws-ui/code-editor';

const t = {}, r = (t == null ? void 0 : t.VITE_WEBFORM) || "standalone", u = {
  name: r,
  path: `WebForms/${r}.WebForm`,
  content: ND(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM, {}),
  date: (/* @__PURE__ */ new Date()).toISOString()
};
async function E() {
  try {
    await qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.loadI18n();
  } catch {
  }
  return __vitePreload(() => import('./Editor-D3zQ2atK-a32_bo-h.js'),true              ?[]:void 0);
}
const I = qodly_064baed7a010e6deba40__loadShare__react__loadShare__.lazy(E), b = Gd("i18n"), O = ({
  onChange: o,
  userComponents: n
}) => /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
  qodly_064baed7a010e6deba40__loadShare__react__loadShare__.Suspense,
  {
    fallback: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_064baed7a010e6deba40__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.AppLoader, { message: "Initializing...", version: lir }),
    children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Tk, { store: KI(), children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Iir, { isI18nEnabled: b, children: /* @__PURE__ */ qodly_064baed7a010e6deba40__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
      I,
      {
        webform: u,
        userComponents: n,
        onChange: o
      }
    ) }) })
  }
);

export { O as default };
