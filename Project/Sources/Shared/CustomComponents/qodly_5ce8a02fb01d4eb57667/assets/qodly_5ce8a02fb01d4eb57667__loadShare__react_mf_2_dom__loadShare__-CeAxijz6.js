import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__-ONSZE_L_.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Si = /*@__PURE__*/getDefaultExportFromCjs(qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__);

export { Si as S, qodly_5ce8a02fb01d4eb57667__loadShare__react_mf_2_dom__loadShare__ as q };
