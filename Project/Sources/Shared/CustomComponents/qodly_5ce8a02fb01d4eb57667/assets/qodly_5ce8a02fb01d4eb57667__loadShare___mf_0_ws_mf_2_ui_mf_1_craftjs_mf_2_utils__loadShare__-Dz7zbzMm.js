import { q as qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__ } from './qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__-CJvru0EK.js';

// dev uses dynamic import to separate chunks
    
    const {initPromise} = qodly_5ce8a02fb01d4eb57667__mf_v__runtimeInit__mf_v__;
    const res = initPromise.then(runtime => runtime.loadShare("@ws-ui/craftjs-utils", {
      customShareInfo: {shareConfig:{
        singleton: true,
        strictVersion: false,
        requiredVersion: "^0.2.3"
      }}
    }));
    const exportModule = await res.then(factory => factory());
    var qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ = exportModule;

export { qodly_5ce8a02fb01d4eb57667__loadShare___mf_0_ws_mf_2_ui_mf_1_craftjs_mf_2_utils__loadShare__ as q };
