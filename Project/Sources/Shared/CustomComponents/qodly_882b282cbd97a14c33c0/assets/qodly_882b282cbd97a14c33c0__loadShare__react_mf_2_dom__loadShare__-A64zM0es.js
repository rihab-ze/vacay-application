import { g as getDefaultExportFromCjs } from './_commonjsHelpers-BFTU3MAI.js';
import { q as qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__, a as index_cjs } from './qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__-BIorW6lM.js';

// dev uses dynamic import to separate chunks
    
    const {loadShare} = index_cjs;
    const {initPromise} = qodly_882b282cbd97a14c33c0__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(_ => loadShare("react-dom", {
    customShareInfo: {shareConfig:{
      singleton: true,
      strictVersion: false,
      requiredVersion: "^17.0.2"
    }}}));
    const exportModule = await res.then(factory => factory());
    var qodly_882b282cbd97a14c33c0__loadShare__react_mf_2_dom__loadShare__ = exportModule;

const Mi = /*@__PURE__*/getDefaultExportFromCjs(qodly_882b282cbd97a14c33c0__loadShare__react_mf_2_dom__loadShare__);

export { Mi as M, qodly_882b282cbd97a14c33c0__loadShare__react_mf_2_dom__loadShare__ as q };
