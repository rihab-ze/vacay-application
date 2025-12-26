import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__ } from './qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__-BkIshbwQ.js';
import { LSPProvider, useLSP } from '@ws-ui/code-editor';
import { f as fk, j as jI, l as lir, K as KI, q as qr, Z as ZM, y as yD, R as Rf, A as Af, D as Df, C as Cn, g as g_, P as Pf, X as Xnr, a as qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__, u as uir, v as v8t, b as Pie, c as bir, d as b5, F as Fr, e as DM, T as Tf, h as uI, M as Mt, H as HM, V as VN, Y as YN } from './index.es-BGNQKy9S.js';
import { q as qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__ } from './qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__-DcycRsyb.js';
import './qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__-CeAxijz6.js';
import './qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_core__loadShare__-BAWyIKZ9.js';
import './qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__-ONSZE_L_.js';
import './preload-helper-CqoC6PUU.js';
import './emotion-react.browser.esm-DN4TZuFL.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './tiny-invariant-w-EUxzzv.js';

const K = () => {
  const t = qr(HM), s = KI();
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.Fragment, { children: t.map((o, n) => /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.Modal,
    {
      hasOverlay: n === 0,
      ...o,
      onClose: (i) => s(YN(i)),
      onEdit: (i) => s(VN(i))
    },
    o.id
  )) });
};
function Q(t) {
  const s = KI(), o = qr(Fr(t.path)), n = qr(DM);
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    o ? (t.replace && t.date && o && o.date !== t.date && s(Tf(o)), n !== t.path && s(uI(t.path))) : s(
      Mt({
        date: t.date,
        view: {
          panel: {
            isOpen: false,
            type: "",
            current: ""
          }
        },
        flags: { enabled: true },
        name: t.name,
        path: t.path,
        type: qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.FileFolderType.WEBFORM,
        initialContent: t.content,
        content: t.content
      })
    );
  }, []), o;
}
function V({ webform: t, onChange: s, userComponents: o }) {
  const { inited: n, lastError: i, reload: S } = useLSP(), r = KI(), c = Q(t), d = qr(
    ZM("studio.tips", "studio.tipsBaseUrl")
  ), f = d["studio.tips"], v = d["studio.tipsBaseUrl"];
  return qodly_5ce8a02fb01d4eb57667__loadShare__react__loadShare__.useEffect(() => {
    r(yD()), r(Rf()), r(Af()), r(Df()), r(Cn()), r(g_()), r(Pf());
  }, []), /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs("div", { className: "flex flex-1 bg-grey-900 h-screen", children: [
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(Xnr, { isInsideStudio: true, isStandaloneEditor: true, children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_shared__loadShare__.TipsProvider, { enabled: f, baseUrl: v, children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(uir, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(v8t, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsxs(Pie, { children: [
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
        bir,
        {
          useDispatch: KI,
          useSelector: qr,
          store: jI(),
          lspProps: {
            inited: n,
            lastError: i,
            reload: S
          },
          path: t.path,
          content: (c == null ? void 0 : c.content) || t.content,
          userComponents: o,
          onChange: s
        }
      ),
      /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(b5.Global, {})
    ] }) }) }) }) }),
    /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(K, {})
  ] });
}
const at = (t) => {
  const s = `ws${location.protocol === "https:" ? "s" : ""}://${location.host}/LSP`;
  return /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(fk, { store: jI(), children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(lir, { children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(
    LSPProvider,
    {
      url: s,
      qodly: true,
      defaultZoom: 0,
      defaultInited: true,
      children: /* @__PURE__ */ qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.jsx(V, { ...t })
    }
  ) }) });
};

export { at as default };
