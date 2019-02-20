(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(19);var styled_components_browser_cjs=__webpack_require__(3),styled_components_browser_cjs_default=__webpack_require__.n(styled_components_browser_cjs),white="#ffffff",grey="#5f5f5f",colors_poison="#27e200";function _templateObject(){var strings,raw,data=(strings=["\n  @font-face {\n    font-family: 'Brandon Text Regular', sans-serif;\n    src: url(/fonts/brandon-text-regular.woff2);\n  }\n\n  body {\n    min-height: 100%;\n    padding: 0;\n    margin: 0 auto;\n    color: ",";\n    background-color: #f7f7f7;\n    display: flex;\n    justify-content: center;\n    /* define grid layout desktop main mode */\n    width: 100%;\n\n    font-family: 'Brandon Text Regular', sans-serif;\n\n    a {\n      color: ",";\n      background: ",";\n    }\n\n    span, p {\n      color: ",";\n    }\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return _templateObject=function(){return data},data}var global=Object(styled_components_browser_cjs.createGlobalStyle)(_templateObject(),grey,"#47d629",white,grey);function AddButton_templateObject(){var strings,raw,data=(strings=["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  text-decoration: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.2em;\n  height: 32px;\n  width: 32px;\n  color: ",";\n  background-color: ",";\n  border: 0px solid black;\n  border-radius: 2em;\n  opacity: 1;\n  cursor: pointer;\n  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.75);\n  &:before {\n    content: '+';\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return AddButton_templateObject=function(){return data},data}var components_AddButton=styled_components_browser_cjs_default.a.a(AddButton_templateObject(),white,"#47d629"),react=(__webpack_require__(67),__webpack_require__(0)),react_default=__webpack_require__.n(react);function Button_templateObject(){var strings,raw,data=(strings=["\n  display: flex;\n  justify-content: center;\n  font-size: 1em;\n  font-weight: 600;\n  color: ",";\n\n  ",";\n\n  min-height: 40px;\n  background-color: ",";\n  border-radius: ",";\n  border-width: 0;\n  border-style: solid;\n  border-color: black;\n  box-shadow: ",";\n  /* 4px 4px 10px 0px rgba(0,0,0,0.75) */\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return Button_templateObject=function(){return data},data}var Button=styled_components_browser_cjs_default.a.button(Button_templateObject(),function(_ref){var secondary=_ref.secondary;return _ref.disabled?grey:secondary?"#27e200":white},function(_ref2){return _ref2.round?"\n        line-height: 40px;\n        padding: 0px;\n        width: 40px;\n        overflow: hidden;\n        ":"\n        line-height: 8px;\n        padding: 16px;\n        width: auto;\n        overflow: none;\n        "},function(_ref3){var secondary=_ref3.secondary;return _ref3.disabled?"#000000":secondary?white:"#27e200"},function(_ref4){var secondary=_ref4.secondary;return _ref4.round?"50%":secondary?"2px":"3px"},function(_ref5){return _ref5.shadow?"0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)":"none"});function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function AnchorButton_templateObject(){var strings,raw,data=(strings=["\n  text-decoration: none;\n  min-height: unset;\n  line-height: 2;\n  padding: 4px 28px;\n  cursor: pointer;\n  user-select: none;\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return AnchorButton_templateObject=function(){return data},data}var AnchorStyle=styled_components_browser_cjs_default()(Button)(AnchorButton_templateObject()),AnchorButton=function(props){return react_default.a.createElement(AnchorStyle,_extends({as:"a"},props),props.children)},components_AnchorButton=AnchorButton;function BottomBar_templateObject(){var strings,raw,data=(strings=["\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);\n  z-index: 1;\n\n  /* positioning & dimensions are most important for Bottombar of SubNavigation */\n  /* FIXME: maybe use this part in SubNavigation Component? */\n  &&& {\n    margin: 0 20px 20px 20px;\n    padding: 1em 0;\n    position: fixed;\n    left: 0;\n    right: 0;\n    bottom: 0;\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return BottomBar_templateObject=function(){return data},data}AnchorButton.__docgenInfo={description:"",methods:[],displayName:"AnchorButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AnchorButton.jsx"]={name:"AnchorButton",docgenInfo:AnchorButton.__docgenInfo,path:"src/components/AnchorButton.jsx"});var components_BottomBar=styled_components_browser_cjs_default.a.div(BottomBar_templateObject());function CenterContainer_templateObject(){var strings,raw,data=(strings=["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  flex-flow: ",";\n  margin: ",";\n\n  > * {\n    margin: 0 0.5em;\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return CenterContainer_templateObject=function(){return data},data}var components_CenterContainer=styled_components_browser_cjs_default.a.div(CenterContainer_templateObject(),function(_ref){return _ref.column?"column":"row"},function(_ref2){return _ref2.column?"0.5em":""});function ButtonContainer_templateObject(){var strings,raw,data=(strings=["\n  height: 100%;\n  &&& {\n    width: 6em;\n  }\n\n  > "," {\n    width: 100%;\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return ButtonContainer_templateObject=function(){return data},data}var components_ButtonContainer=styled_components_browser_cjs_default()(components_CenterContainer)(ButtonContainer_templateObject(),Button);function ColoredTextContainer_templateObject(){var strings,raw,data=(strings=["\n  p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5 {\n    color: ",";\n  }\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return ColoredTextContainer_templateObject=function(){return data},data}var components_ColoredTextContainer=styled_components_browser_cjs_default.a.div(ColoredTextContainer_templateObject(),function(_ref){return _ref.color});function ContentContainer_templateObject(){var strings,raw,data=(strings=["\n  flex-flow: column;\n  width: 100%;\n  height: auto;\n\n  > ",", label {\n    margin: 2em auto;\n  }\n\n  > p,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  span {\n    margin: 1.2em;\n  }\n\n  margin-bottom: 120px; /* height of bottom subnavigation bar */\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return ContentContainer_templateObject=function(){return data},data}var components_ContentContainer=styled_components_browser_cjs_default()(components_CenterContainer)(ContentContainer_templateObject(),Button);__webpack_require__(15),__webpack_require__(13),__webpack_require__(5),__webpack_require__(28),__webpack_require__(40);function _templateObject2(){var data=Slider_taggedTemplateLiteral(["\n          padding: 10px;\n          margin: 0 ","px;\n          width: ","px;\n          height: ","px;\n\n          @media (max-width: 600px) {\n            margin: 0 ","px;\n            width: ","px;\n            height: ","px;\n          }\n        "]);return _templateObject2=function(){return data},data}function _slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Slider_templateObject(){var data=Slider_taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row;\n  max-width: 100%;\n\n  position: relative;\n  left: ",";\n\n  @media (max-width: 600px) {\n    left: ",";\n  }\n  transition: all 0.5s ease-out;\n"]);return Slider_templateObject=function(){return data},data}function Slider_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var desktop_margin=8,desktop_x=288,desktop_y=184,mobile_margin=10,mobile_x=192,mobile_y=122,MovingFlexRowContainer=styled_components_browser_cjs_default.a.div(Slider_templateObject(),function(_ref){var id=_ref.id;return"".concat(desktop_x/2-id*(desktop_x+2*desktop_margin),"px")},function(_ref2){var id=_ref2.id;return"".concat(mobile_x/2-id*(mobile_x+2*mobile_margin),"px")}),Slider=function(props){var id=props.id,slides=props.slides;return react_default.a.createElement(MovingFlexRowContainer,{id:id},slides.map(function(_ref3,key){var _ref4=_slicedToArray(_ref3,3),SlideContainer=_ref4[0],Slide=_ref4[1],componentProps=_ref4[2],ResponsiveSlide=styled_components_browser_cjs_default()(Slide)(_templateObject2(),desktop_margin,desktop_x,desktop_y,mobile_margin,mobile_x,mobile_y);return react_default.a.createElement(SlideContainer,{key:key},react_default.a.createElement(ResponsiveSlide,componentProps))}))};function Logo_templateObject(){var strings,raw,data=(strings=["\n  display: block;\n  margin: 0 auto;\n  object-fit: contain;\n  height: 100%;\n  max-height: 45vh;\n  max-width: 800px;\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return Logo_templateObject=function(){return data},data}Slider.__docgenInfo={description:"",methods:[],displayName:"Slider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider.jsx"]={name:"Slider",docgenInfo:Slider.__docgenInfo,path:"src/components/Slider.jsx"});styled_components_browser_cjs_default.a.img(Logo_templateObject());function Label_extends(){return(Label_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function Label_templateObject(){var strings,raw,data=(strings=["\n  text-decoration: none;\n  min-height: unset;\n  line-height: 2;\n  padding: 4px 28px;\n  cursor: pointer;\n  user-select: none;\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return Label_templateObject=function(){return data},data}var LabelStyle=styled_components_browser_cjs_default()(Button)(Label_templateObject()),Label=function(props){return react_default.a.createElement(LabelStyle,Label_extends({as:"label"},props),props.children)},components_Label=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label.jsx"]={name:"Label",docgenInfo:Label.__docgenInfo,path:"src/components/Label.jsx"});var faintShadow="2px 2px 5px 0px rgba(0, 127, 0, 0.25)";function Profile_slicedToArray(arr,i){return function(arr){if(Array.isArray(arr))return arr}(arr)||function(arr,i){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _templateObject4(){var data=Profile_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  border: rgba(127, 255, 127, 0.3) 1px solid;\n  border-radius: 1em;\n  box-shadow: ",";\n  color: ",";\n  font-weight: 600;\n  user-select: none;\n  overflow: hidden;\n\n  background: ",";\n  min-width: ",";\n  right: ",";\n  opacity: ",";\n  z-index: ",";\n  transition: all 0.4s cubic-bezier(0.45, 0.96, 0, 1);\n"]);return _templateObject4=function(){return data},data}function _templateObject3(){var data=Profile_taggedTemplateLiteral(["\n  padding: 2em;\n  color: inherit;\n"]);return _templateObject3=function(){return data},data}function Profile_templateObject2(){var data=Profile_taggedTemplateLiteral(["\n  ",";\n  transition: all 0.6s ease;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-image: ",";\n  background: ",";\n"]);return Profile_templateObject2=function(){return data},data}function Profile_templateObject(){var data=Profile_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 8px;\n  width: 36px;\n  height: 36px;\n  border-radius: 28px;\n  z-index: 1;\n"]);return Profile_templateObject=function(){return data},data}function Profile_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Round=styled_components_browser_cjs_default.a.div(Profile_templateObject()),ProfilePic=styled_components_browser_cjs_default()(Round)(Profile_templateObject2(),function(_ref){return _ref.shadow&&"box-shadow: ".concat(faintShadow)},function(_ref2){var url=_ref2.url;return"url(".concat(url,")")},function(_ref3){return _ref3.url||"".concat(colors_poison)}),Text=styled_components_browser_cjs_default.a.span(_templateObject3()),Tooltip=styled_components_browser_cjs_default.a.div(_templateObject4(),faintShadow,colors_poison,function(_ref4){return _ref4.open?"rgba(255, 255, 255, 0.8)":"rgba(0, 255, 0, 1)"},function(_ref5){return _ref5.open?"300%":"100%"},function(_ref6){return _ref6.open?"200%":"0%"},function(_ref7){return _ref7.open?1:0},function(_ref8){return _ref8.open?1:2}),Profile=function(_ref9){var url=_ref9.url,username=_ref9.username,_ref9$openDefault=_ref9.openDefault,_useState2=Profile_slicedToArray(Object(react.useState)(void 0!==_ref9$openDefault&&_ref9$openDefault),2),open=_useState2[0],setOpen=_useState2[1];return react_default.a.createElement(ProfilePic,{url:url,shadow:!open},react_default.a.createElement(Tooltip,{onClick:function(){return setOpen(!open)},open:open},react_default.a.createElement(Text,null,username)))},components_Profile=Profile;Profile.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{openDefault:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Profile.jsx"]={name:"Profile",docgenInfo:Profile.__docgenInfo,path:"src/components/Profile.jsx"}),__webpack_require__.d(__webpack_exports__,"i",function(){return global}),__webpack_require__.d(__webpack_exports__,"a",function(){return components_AddButton}),__webpack_require__.d(__webpack_exports__,"b",function(){return components_AnchorButton}),__webpack_require__.d(__webpack_exports__,"c",function(){return components_BottomBar}),__webpack_require__.d(__webpack_exports__,"d",function(){return Button}),__webpack_require__.d(__webpack_exports__,"e",function(){return components_ButtonContainer}),__webpack_require__.d(__webpack_exports__,"f",function(){return components_CenterContainer}),__webpack_require__.d(__webpack_exports__,"g",function(){return components_ColoredTextContainer}),__webpack_require__.d(__webpack_exports__,"h",function(){return components_ContentContainer}),__webpack_require__.d(__webpack_exports__,"j",function(){return components_Label}),__webpack_require__.d(__webpack_exports__,"k",function(){return components_Profile})},204:function(module,exports,__webpack_require__){__webpack_require__(205),__webpack_require__(284),module.exports=__webpack_require__(285)},285:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(9),__webpack_require__(5),__webpack_require__(10);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_src_index__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(function(story){return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div",null,story(),react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_5__.i,null))});var req=__webpack_require__(398);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(45)(module))},398:function(module,exports,__webpack_require__){var map={"./bottombar.stories.js":399,"./button.stories.js":508,"./container.stories.js":509,"./input.stories.js":516,"./profile.stories.js":517,"./text.stories.js":518};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=398},399:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(18),__webpack_require__(19);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),styled_components__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__),_storybook_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),_src_index_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(27),__webpack_require__(1));function _templateObject(){var strings,raw,data=(strings=["\n  height: 4em;\n"],raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}})));return _templateObject=function(){return data},data}var HighButton=styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d)(_templateObject());Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Molecule/Bottombar/text",module).add("Bottombar with text",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,"Text 1 2 3")}).add("Bottombar with wrapped text",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.e,null,"Text 1 2 3"))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Molecule/Bottombar/1button",module).add("Bottombar with 1 button",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next"))}).add("Bottombar with wrapped 1 button",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.e,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next")))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Molecule/Bottombar/2buttons",module).add("Bottombar with 2 buttons",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next"))}).add("Bottombar with 2 wrapped buttons",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.e,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next")))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.storiesOf)("Molecule/Bottombar/3buttons",module).add("Bottombar with 3 buttons",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HighButton,{secondary:!0,shadow:!0},"Preview"))}).add("Bottombar with 3 wrapped buttons",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.c,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.e,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_6__.d,null,"Next"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HighButton,{secondary:!0,shadow:!0},"Preview")))})}.call(this,__webpack_require__(45)(module))},508:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(27),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/Button",module).add("primary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("primary with text and shadow",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("secondary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("secondary with text and shadow",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{secondary:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")}).add("round with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",flexFlow:"row",margin:"2em"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"S"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"M"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"L"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"XL"))}).add("primary with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AnchorButton",module).add("primary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,"Next")}).add("primary with text and a Link",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"https://www.onescreener.com"},"Next")}).add("secondary with much more text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Next")," is a great name for an AnchorButton. By the way, you could click here, and try to copy it's text but nothing will happen!")}).add("secondary with text, a Link and shadow",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0,shadow:!0,href:"https://www.onescreener.com"},"Next")}).add("primary with some emoji",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AddButton",module).add("addButton",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.a,{href:"#"})})}.call(this,__webpack_require__(45)(module))},509:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(91),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Center",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Centered elements",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.f,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Right")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.f,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,secondary:!0},"Doge"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0},"Much wow")))}).add("non-centered elements",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Right")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,secondary:!0},"Doge"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0},"Much wow")))}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Content",module).add("primary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.h,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Bottom"))})}.call(this,__webpack_require__(45)(module))},516:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(27),__webpack_require__(1));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Label",module).add("primary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,null,"Label Text")}).add("secondary with text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{secondary:!0},"Label Text")}).add("shadow with text",function(){return[react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{style:{marginBottom:"2em"},key:0,shadow:!0},"primary shadow"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{key:1,secondary:!0,shadow:!0},"secondary shadow")]})}.call(this,__webpack_require__(45)(module))},517:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_src_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Molecule/Profile",module).add("Profile",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.k,{username:"Dev"})}).add("Profile with a long name",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.k,{username:"abcdefghijklmn opqrstuvwxyz",openDefault:!0}))}).add("Profile open",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.k,{username:"Username",openDefault:!0})}).add("Profile with a picture",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.k,{username:"Dev",url:"https://interactive-examples.mdn.mozilla.net/media/dino.svg"})})}.call(this,__webpack_require__(45)(module))},518:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_src_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Text",module).add("text",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Hello ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://app.optune.me"},"https://app.optune.me"))}).add("ColoredTextContainer",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.g,{color:"#efbf00"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Bold")))})}.call(this,__webpack_require__(45)(module))}},[[204,1,2]]]);
//# sourceMappingURL=main.efacb889eb5eeb51656d.bundle.js.map