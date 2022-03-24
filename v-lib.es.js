import { defineComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, defineCustomElement } from "vue";
var _style_0 = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:currentColor}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.tw-my-4{margin-top:1rem;margin-bottom:1rem}.tw-mt-4{margin-top:1rem}.tw-mb-1{margin-bottom:.25rem}.tw-flex{display:flex}.tw-h-\\[5px\\]{height:5px}.tw-h-full{height:100%}.tw-max-w-xs{max-width:20rem}.tw-gap-1{gap:.25rem}.tw-rounded-md{border-radius:.375rem}.tw-rounded-lg{border-radius:.5rem}.tw-bg-green{--tw-bg-opacity: 1;background-color:rgb(0 144 13 / var(--tw-bg-opacity))}.tw-bg-\\[rgb\\(231\\,231\\,231\\)\\]{--tw-bg-opacity: 1;background-color:rgb(231 231 231 / var(--tw-bg-opacity))}.tw-px-3{padding-left:.75rem;padding-right:.75rem}.tw-py-1{padding-top:.25rem;padding-bottom:.25rem}.tw-text-lg{font-size:1.125rem;line-height:1.75rem}.tw-text-base{font-size:1rem;line-height:1.5rem}.tw-font-bold{font-weight:700}.tw-text-green{--tw-text-opacity: 1;color:rgb(0 144 13 / var(--tw-text-opacity))}.tw-text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.hover\\:tw-bg-green-light:hover{--tw-bg-opacity: 1;background-color:rgb(0 175 16 / var(--tw-bg-opacity))}\n';
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = {
  "data-test-id": "ff-progress-bar",
  class: "tw-h-[5px] tw-bg-[rgb(231,231,231)] tw-rounded-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          style: normalizeStyle({
            width: `${__props.value}%`
          }),
          "data-test-id": "ff-progress-bar-progress",
          class: "tw-rounded-lg tw-bg-green tw-h-full"
        }, null, 4)
      ]);
    };
  }
});
var ProgressBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]]]);
const VProgressBar = defineCustomElement(ProgressBar);
export { VProgressBar };
