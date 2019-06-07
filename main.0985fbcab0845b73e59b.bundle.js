(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components_browser_esm=__webpack_require__(1);var global=styled_components_browser_esm.a`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  :root {
    --basic-font-size: 14px;
  }

  @media ${"(max-width: 736px)"} {
    :root {
      --basic-font-size: 12px;
    }
  }

  html {
    font-size: var(--basic-font-size);
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;
    font-family: 'Brandon Text Regular', sans-serif;
    line-height: normal;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.2rem;
  }

  h4 {
    font-size: 1.0rem;
  }

  h5 {
    font-size: 0.8rem;
  }

  p {
    font-size: 1rem;
  }
`,react=__webpack_require__(0),react_default=__webpack_require__.n(react);var Button=styled_components_browser_esm.c.button`
  display: flex;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  color: ${({secondary:secondary,disabled:disabled})=>(disabled?"#5f5f5f":secondary&&"#27e200")||"#ffffff"};
  cursor: ${({disabled:disabled})=>disabled?"default":"pointer"};

  ${({round:round})=>round?styled_components_browser_esm.b`
          line-height: 40px;
          padding: 0px;
          width: 40px;
          overflow: hidden;
        `:styled_components_browser_esm.b`
          line-height: 8px;
          padding: 16px;
          width: auto;
          overflow: none;
        `};

  min-height: 40px;
  background-color: ${({secondary:secondary,disabled:disabled})=>(disabled?"#000000":secondary&&"#ffffff")||"#27e200"};
  border-radius: ${({secondary:secondary,round:round})=>round?"50%":secondary?"2px":"3px"};
  border-width: 0;
  border-style: solid;
  border-color: black;
  box-shadow: ${({shadow:shadow})=>shadow?"0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)":"none"};

  &:hover:not([disabled]) {
    color: ${"#27e200"};
    background-color: ${"#000000"};
  }

  transition: color 0.3s ease-out, background-color 0.3s ease-out;
`;function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const AnchorStyle=Object(styled_components_browser_esm.c)(Button)`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`,AnchorButton=props=>react_default.a.createElement(AnchorStyle,_extends({as:"a"},props),props.children);AnchorButton.displayName="AnchorButton";var components_AnchorButton=AnchorButton;AnchorButton.__docgenInfo={description:"",methods:[],displayName:"AnchorButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AnchorButton.jsx"]={name:"AnchorButton",docgenInfo:AnchorButton.__docgenInfo,path:"src/components/AnchorButton.jsx"});var components_CenterContainer=styled_components_browser_esm.c.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-flow: ${({column:column})=>column?"column":"row"};
  margin: ${({column:column})=>column?"0.5em":""};
`;var components_ContentContainer=Object(styled_components_browser_esm.c)(components_CenterContainer)`
  flex-flow: column;
  width: 100%;
  height: auto;

  > ${Button}, label {
    margin: 2em auto;
  }

  padding-top: 50px; /* height of top navigation bar */
  padding-bottom: 120px; /* height of bottom bar */
`;const LogoSize={XS:"3rem",S:"6rem",M:"9rem",L:"12rem",XL:"18rem"},getSize=size=>LogoSize[size],LogoImage=styled_components_browser_esm.c.img`
  display: block;
  object-fit: contain;
  max-height: 45vh;
  max-width: 800px;
  width: ${({size:size})=>size};
  height: ${({size:size})=>size};
  margin: 1rem;
`,Logo=({logo:logo})=>logo&&logo.image?react_default.a.createElement(LogoImage,{src:logo.image.url,size:getSize(logo.size)}):null;function Label_extends(){return(Label_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Logo.jsx"]={name:"Logo",docgenInfo:Logo.__docgenInfo,path:"src/components/Logo.jsx"});const LabelStyle=Object(styled_components_browser_esm.c)(Button)`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`,Label=props=>react_default.a.createElement(LabelStyle,Label_extends({as:"label"},props),props.children);Label.displayName="Label";var components_Label=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label.jsx"]={name:"Label",docgenInfo:Label.__docgenInfo,path:"src/components/Label.jsx"});const getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"20"}px;
`,Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:getDimensionsCss()};
`,defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#6F717D",fillRule:"nonzero",d:"M18.815.98A3.198 3.198 0 0 0 16.58 0a3.64 3.64 0 0 0-2.414 1.056L1.827 13.418a.625.625 0 0 0-.168.288c-.268 1-1.622 5.44-1.634 5.484a.625.625 0 0 0 .593.8.505.505 0 0 0 .2 0c.05 0 4.628-1.493 5.377-1.718a.723.723 0 0 0 .268-.156c.474-.475 11.66-11.55 12.402-12.319A3.463 3.463 0 0 0 20 3.348 3.412 3.412 0 0 0 18.815.981zm-3.097.38l2.864 2.88L6.818 16.077 4 13.2 15.718 1.36z"}))],viewBox:"0 0 20 20"};Object.assign(Image,{getDimensions:()=>({height:"20",width:"20"}),getDimensionsCss:getDimensionsCss,defaultProps:defaultProps,displayName:"Edit"});const Preview_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"32"}px;
  height: ${"26"}px;
`,Preview_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Preview_getDimensionsCss()};

  & use[id='black'] {
    fill: #000;
    transition: fill 0.3s ease-out;
  }

  & use[id='white'] {
    fill: #fff;
    transition: fill 0.3s ease-out;
  }
`,Preview_defaultProps={children:[react_default.a.createElement("defs",{key:"key-0"},react_default.a.createElement("path",{id:"s-3d4a82ba12-b",d:"M.106 11.553c.14-.281.404-.75.788-1.346a20.492 20.492 0 0 1 2.251-2.89C5.661 4.631 8.62 3 12 3c3.38 0 6.339 1.632 8.855 4.316a20.492 20.492 0 0 1 2.25 2.891c.385.596.649 1.065.79 1.346a1 1 0 0 1 0 .894c-.141.281-.405.75-.79 1.346a20.492 20.492 0 0 1-2.25 2.89C18.339 19.369 15.38 21 12 21c-3.38 0-6.339-1.632-8.855-4.316a20.492 20.492 0 0 1-2.25-2.891 15.188 15.188 0 0 1-.79-1.346 1 1 0 0 1 0-.894zm2.468 1.154c.575.89 1.254 1.781 2.03 2.61C6.777 17.631 9.255 19 12 19c2.745 0 5.224-1.368 7.395-3.684A18.513 18.513 0 0 0 21.86 12a18.513 18.513 0 0 0-2.464-3.316C17.224 6.368 14.745 5 12 5 9.255 5 6.776 6.368 4.605 8.684A18.513 18.513 0 0 0 2.14 12c.126.218.27.455.433.707zM16 12c0 2.552-1.448 4-4 4s-4-1.448-4-4 1.448-4 4-4 4 1.448 4 4zm-2 0c0-1.448-.552-2-2-2s-2 .552-2 2 .552 2 2 2 2-.552 2-2z"}),react_default.a.createElement("filter",{id:"s-3d4a82ba12-a",width:"150%",height:"166.7%",x:"-25%",y:"-33.3%",filterUnits:"objectBoundingBox"},react_default.a.createElement("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter1"}),react_default.a.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:"2"}),react_default.a.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"}))),react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-1"},react_default.a.createElement("path",{d:"M4 1h24v24H4z"}),react_default.a.createElement("g",{fillRule:"nonzero",transform:"translate(4 1)"},react_default.a.createElement("use",{id:"black",filter:"url(#s-3d4a82ba12-a)",xlinkHref:"#s-3d4a82ba12-b"}),react_default.a.createElement("use",{id:"white",fillRule:"evenodd",xlinkHref:"#s-3d4a82ba12-b"})))],viewBox:"0 0 32 26"};var Preview=Object.assign(Preview_Image,{getDimensions:()=>({height:"26",width:"32"}),getDimensionsCss:Preview_getDimensionsCss,defaultProps:Preview_defaultProps,displayName:"Preview"});const Publish_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Publish_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Publish_getDimensionsCss()};
`,Publish_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#6F717D",fillRule:"nonzero",d:"M11.545.162l10 6.5A1 1 0 0 1 22 7.5v7a1 1 0 0 1-.455.838l-10 6.5a1 1 0 0 1-1.09 0l-10-6.5A1 1 0 0 1 0 14.5v-7a1 1 0 0 1 .455-.838l10-6.5a1 1 0 0 1 1.09 0zM11 2.192l-9 5.85v5.915l9 5.85 9-5.85V8.043l-9-5.85zm0 11.087l9.427-6.598a1 1 0 0 1 1.146 1.638l-10 7a1 1 0 0 1-1.146 0l-10-7a1 1 0 1 1 1.146-1.638L11 13.279zm0-4.558l-9.427 6.598a1 1 0 0 1-1.146-1.638l10-7a1 1 0 0 1 1.146 0l10 7a1 1 0 1 1-1.146 1.638L11 8.721zM12 21a1 1 0 0 1-2 0v-6.5a1 1 0 1 1 2 0V21zM10 1a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0V1z"}))],viewBox:"0 0 22 22"};Object.assign(Publish_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Publish_getDimensionsCss,defaultProps:Publish_defaultProps,displayName:"Publish"});const Themes_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"25"}px;
  height: ${"20"}px;
`,Themes_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Themes_getDimensionsCss()};
`,Themes_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#27E200",fillRule:"nonzero",d:"M22.5 16.148h-9.75v2.314h3.75c.413 0 .75.346.75.77a.762.762 0 0 1-.75.768h-9a.762.762 0 0 1-.75-.769c0-.423.338-.769.75-.769h3.75v-2.314H1.5c-.825 0-1.5-.692-1.5-1.538V1.538C0 .692.675 0 1.5 0h21c.825 0 1.5.692 1.5 1.538V14.61c0 .846-.675 1.538-1.5 1.538zm0-14.61h-21V14.61h21V1.538z"}))],viewBox:"0 0 24 20"};Object.assign(Themes_Image,{getDimensions:()=>({height:"20",width:"25"}),getDimensionsCss:Themes_getDimensionsCss,defaultProps:Themes_defaultProps,displayName:"Themes"});const desktop_margin=8,desktop_x=288,desktop_y=184,mobile_margin=10,mobile_x=192,mobile_y=122,MovingFlexRowContainer=styled_components_browser_esm.c.div`
  position: relative;
  display: flex;
  width: 100%;

  margin-left: ${({activeIndex:activeIndex})=>`${-(desktop_x/2-activeIndex*(desktop_x+2*desktop_margin))}px`};

  @media (max-width: 600px) {
    margin-left: ${({activeIndex:activeIndex})=>`${-(mobile_x/2-activeIndex*(mobile_x+2*mobile_margin))}px`};
  }
  transition: margin-left 0.5s ease-out;
`,Slider_Preview=styled_components_browser_esm.c.div`
  box-sizing: border-box;
  color: white;
  background-color: #4a4a4a;
  user-select: none;

  background-image: ${({previewImage:previewImage})=>`url(${previewImage})`};
  background-size: cover;
  border: ${({active:active})=>active?"4px solid #27e200":"none"};

  padding: 10px;
  margin: 0 ${desktop_margin}px;
  width: ${desktop_x}px;
  height: ${desktop_y}px;

  @media (max-width: 600px) {
    margin: 0 ${mobile_margin}px;
    width: ${mobile_x}px;
    height: ${mobile_y}px;
  }
`,PreviewIconWrapper=styled_components_browser_esm.c.div`
  position: absolute;
  bottom: 40px;
  left: 20px;
`;var Slider_ref=react_default.a.createElement(PreviewIconWrapper,null,react_default.a.createElement(Preview,null));const ActiveSlideDecoration=()=>Slider_ref;ActiveSlideDecoration.displayName="ActiveSlideDecoration";var _ref2=react_default.a.createElement(ActiveSlideDecoration,null);const Slider=({slides:slides,activeIndex:activeIndex})=>react_default.a.createElement(MovingFlexRowContainer,{activeIndex:0<activeIndex?activeIndex:0},slides.map(({previewImage:previewImage,name:name,onSelect:onSelect},index)=>react_default.a.createElement(Slider_Preview,{active:index===activeIndex,key:index,onClick:onSelect,previewImage:previewImage},name,index===activeIndex&&_ref2)));Slider.displayName="Slider";Slider.__docgenInfo={description:"",methods:[],displayName:"Slider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider.jsx"]={name:"Slider",docgenInfo:Slider.__docgenInfo,path:"src/components/Slider.jsx"});var lib=__webpack_require__(231),lib_default=__webpack_require__.n(lib);__webpack_require__(16);function LogoBox_extends(){return(LogoBox_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const LogoContainer=styled_components_browser_esm.c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: var(--margin-logo);
  z-index: ${({zIndex:zIndex})=>zIndex};
  pointer-events: none;

  &.top-left {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &.top-center {
    align-items: flex-start;
    justify-content: center;
  }

  &.top-right {
    align-items: flex-start;
    justify-content: flex-end;
  }

  &.center-left {
    align-items: center;
    justify-content: flex-start;
  }

  &.center-center {
    align-items: center;
    justify-content: center;
  }

  &.center-right {
    align-items: center;
    justify-content: flex-end;
  }

  &.bottom-left {
    align-items: flex-end;
    justify-content: flex-start;
  }

  &.bottom-center {
    align-items: flex-end;
    justify-content: center;
  }

  &.bottom-right {
    align-items: flex-end;
    justify-content: flex-end;
  }
`,LogoBox=_ref=>{let{position:position,children:children}=_ref,other=_objectWithoutProperties(_ref,["position","children"]);return react_default.a.createElement(LogoContainer,LogoBox_extends({className:""<position?position.toLowerCase().replace("_","-"):"top-center"},other),children)};LogoBox.displayName="LogoBox",LogoBox.__docgenInfo={description:"",methods:[],displayName:"LogoBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/LogoBox.jsx"]={name:"LogoBox",docgenInfo:LogoBox.__docgenInfo,path:"src/components/organisms/LogoBox.jsx"});const Text=styled_components_browser_esm.c.div`
  margin: auto;
  max-height: 60vh;
  width: 60vw;
  max-width: 1200px;
  overflow: hidden;

  & li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  span {
    color: ${({color:color})=>color};
    white-space: pre-wrap;
  }

  @media ${"(max-width: 736px)"} {
    width: 80vw;
  }
`,TextBox=({children:children,color:color})=>react_default.a.createElement(Text,{color:color},children);TextBox.displayName="TextBox",TextBox.__docgenInfo={description:"",methods:[],displayName:"TextBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/TextBox.jsx"]={name:"TextBox",docgenInfo:TextBox.__docgenInfo,path:"src/components/organisms/TextBox.jsx"});var dist_web=__webpack_require__(232);const Gig=styled_components_browser_esm.c.li`
  padding: 8px;
  list-style: none;
  color: ${({color:color})=>color};
`,GigHead=styled_components_browser_esm.c.h2`
  margin-top: 0;
  color: ${({color:color})=>color};
`,GigList=styled_components_browser_esm.c.ul`
  padding: 0;
  margin: 0;
`,GigsBox_Text=styled_components_browser_esm.c.p`
  color: ${({color:color})=>color};
`;var GigsBox_ref=react_default.a.createElement(GigsBox_Text,null,"Loading gigs ..."),GigsBox_ref2=react_default.a.createElement(GigsBox_Text,null,"No gigs found");const GigsBox=({api:api,slug:slug,getGigs:getGigs,color:color})=>react_default.a.createElement("div",null,react_default.a.createElement(GigHead,{color:color},"Upcoming Gigs from ",slug,"@",api.toLowerCase()),react_default.a.createElement(dist_web.a,{promiseFn:getGigs,api:api,slug:slug,limit:5},({data:data,error:error,isLoading:isLoading})=>isLoading?GigsBox_ref:error||!data?GigsBox_ref2:react_default.a.createElement(GigList,null,data&&data.map((text,key)=>react_default.a.createElement(Gig,{key:key,color:color},text)))));GigsBox.displayName="GigsBox",GigsBox.__docgenInfo={description:"",methods:[],displayName:"GigsBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/GigsBox.jsx"]={name:"GigsBox",docgenInfo:GigsBox.__docgenInfo,path:"src/components/organisms/GigsBox.jsx"});const LinksContainer=styled_components_browser_esm.c.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 2rem;
  z-index: ${({zIndex:zIndex})=>zIndex};
  pointer-events: none;
`,LinksList=styled_components_browser_esm.c.div`
  position: absolute;
  display: flex;
  flex-flow: row;
  width: 100%;
  height: 3.6rem;
  pointer-events: all;

  &.bottom-center {
    bottom: 0;
    justify-content: center;
    white-space: nowrap;
  }

  &.bottom-left {
    bottom: 0;
    justify-content: flex-start;
    white-space: nowrap;
  }

  &.bottom-right {
    bottom: 0;
    justify-content: flex-end;
    white-space: nowrap;
  }

  &.center-right {
    right: 0;
    width: 3.6rem;
    height: 100%;
    flex-flow: column;
    justify-content: center;
  }

  &.center-left {
    left: 0;
    width: 3.6rem;
    height: 100%;
    flex-flow: column;
    justify-content: center;
  }
`,LinksBox=({children:children,position:position,zIndex:zIndex})=>react_default.a.createElement(LinksContainer,{zIndex:zIndex},react_default.a.createElement(LinksList,{className:""<position?position.toLowerCase().replace("_","-"):"bottom-center"},children));LinksBox.displayName="LinksBox",LinksBox.__docgenInfo={description:"",methods:[],displayName:"LinksBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/LinksBox.jsx"]={name:"LinksBox",docgenInfo:LinksBox.__docgenInfo,path:"src/components/organisms/LinksBox.jsx"});var ReactPlayer=__webpack_require__(137),ReactPlayer_default=__webpack_require__.n(ReactPlayer);const Fullscreen=styled_components_browser_esm.c.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`,Container=styled_components_browser_esm.c.div`
  position: relative;
  margin: auto;
  width: 80vw;
  max-width: 1200px;
`,AspectRationContainer=styled_components_browser_esm.c.h1`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`,Player=styled_components_browser_esm.c.h1`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`,MediaBox=({media:media})=>media.fullscreen?react_default.a.createElement(Fullscreen,null,react_default.a.createElement(ReactPlayer_default.a,{url:media.url,playing:!1,width:"100%",height:"100%"})):react_default.a.createElement(Container,null,react_default.a.createElement(AspectRationContainer,null,react_default.a.createElement(Player,{as:ReactPlayer_default.a,url:media.url,playing:!1,width:"none",height:"none"})));MediaBox.__docgenInfo={description:"",methods:[],displayName:"MediaBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/organisms/MediaBox.jsx"]={name:"MediaBox",docgenInfo:MediaBox.__docgenInfo,path:"src/components/organisms/MediaBox.jsx"});var classnames=__webpack_require__(25),classnames_default=__webpack_require__.n(classnames),prop_types=__webpack_require__(29),prop_types_default=__webpack_require__.n(prop_types),Bandcamp_ref=react_default.a.createElement("g",{id:"bandcamp"},react_default.a.createElement("polygon",{points:"0,78.075 70.006,78.075 97.236,19.161 27.23,19.161"}));const BandcampIcon=({className:className})=>react_default.a.createElement("svg",{className:classnames_default()("icon squid-ink",className),enableBackground:"new 0 0 97.236 97.236",version:"1.1",viewBox:"0 0 97.236 97.236",xmlns:"http://www.w3.org/2000/svg"},Bandcamp_ref);BandcampIcon.displayName="BandcampIcon",BandcampIcon.__docgenInfo={description:"",methods:[],displayName:"BandcampIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/platform/Bandcamp.jsx"]={name:"BandcampIcon",docgenInfo:BandcampIcon.__docgenInfo,path:"src/components/icons/platform/Bandcamp.jsx"});const defaultStrokeFill={fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"},toSquidInkIcon=Icon=>{const SquidInkIcon=({className:className})=>react_default.a.createElement("svg",{className:classnames_default()("icon squid-ink",className),enableBackground:"new 0 0 48 48",version:"1.1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},Icon());return SquidInkIcon.propTypes={className:prop_types_default.a.string},SquidInkIcon};function Biography_extends(){return(Biography_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const BiographyIcon=toSquidInkIcon(()=>react_default.a.createElement("g",{id:"Layer_1"},react_default.a.createElement("path",Biography_extends({},defaultStrokeFill,{d:"M36,46H11c-3.865993,0-7-3.1340065-7-7V6.5202589C4,4.0237889,6.0237889,2,8.5202589,2H12"})),react_default.a.createElement("path",Biography_extends({},defaultStrokeFill,{d:"M30,2H8.4999952C6.0147166,2,4,4.0147166,4,6.4999957v0.0000086C4,8.9852839,6.0147166,11,8.4999952,11H30"})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"9",y1:"5",x2:"30",y2:"5"})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"9",y1:"8",x2:"30",y2:"8"})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"9",y1:"11",x2:"9",y2:"45"})),react_default.a.createElement("g",null,react_default.a.createElement("rect",Biography_extends({x:"34",y:"9.3431454"},defaultStrokeFill,{width:"12",height:"26.3137093"})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"38",y1:"35.6568565",x2:"38",y2:"9.3431463"})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"42",y1:"35.6568565",x2:"42",y2:"9.3431463"})),react_default.a.createElement("path",Biography_extends({},defaultStrokeFill,{d:"M34,9.3431463V4.8710966c0-1.9484332,1.5795174-3.5279503,3.5279503-3.5279503h4.9440994C44.4204826,1.3431462,46,2.9226635,46,4.8710966v4.4720497"})),react_default.a.createElement("polyline",Biography_extends({},defaultStrokeFill,{points:"34,35.6568565 40,46.6568565 46,35.6568565     "})),react_default.a.createElement("line",Biography_extends({},defaultStrokeFill,{x1:"37",y1:"41",x2:"43",y2:"41"}))),react_default.a.createElement("polyline",Biography_extends({},defaultStrokeFill,{points:"29,18 18,18 18,29 29,29   "}))));var Facebook_ref=react_default.a.createElement("g",{id:"facebook"},react_default.a.createElement("path",{id:"Facebook",fill:"none",strokeWidth:"2",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M18,10.9089594C18,12.0681973,18,17,18,17h-5v8h5v21h9V25h6.8340988c0,0,0.599041-4,0.8893623-8C33.8908348,17,27,17,27,17s0-4.2918701,0-5.0815639C27,11.1272106,28.513258,10,29.5406246,10C30.5659466,10,33,10,35,10c0-1,0-5,0-8c-3,0-5.9853249,0-7.327034,0C17.6707039,2,18,9.7517662,18,10.9089594z"}));const FacebookIcon=toSquidInkIcon(()=>Facebook_ref);var Instagram_ref=react_default.a.createElement("g",{id:"instagram"},react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M38.432003,45.432003H10c-3.8499999,0-7-3.1499977-7-7V10c0-3.8499999,3.1500001-7,7-7h28.432003c3.8500023,0,7,3.1500001,7,7v28.432003C45.432003,42.2820053,42.2820053,45.432003,38.432003,45.432003z"}),react_default.a.createElement("circle",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"23.923645",cy:"25.416687",r:"7.4166665"}),react_default.a.createElement("circle",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",cx:"23.923645",cy:"25.416687",r:"11.833333"}),react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M38.9166679,13.5835094h-2.7510071c-1.1045685,0-2-0.8954306-2-2V8.8325033c0-1.1045694,0.8954315-2,2-2h2.7510071c1.1045685,0,2,0.8954306,2,2v2.7510061C40.9166679,12.6880789,40.0212364,13.5835094,38.9166679,13.5835094z"}),react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M37,19h4v18c0,2.2091408-1.7908592,4-4,4H11c-2.2091389,0-4-1.7908592-4-4V19h4"}));const InstagramIcon=toSquidInkIcon(()=>Instagram_ref);var LastFM_ref=react_default.a.createElement("g",{id:"lastfm"},react_default.a.createElement("path",{id:"last.fm",fill:"none",strokeWidth:"2",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M37.5164986,37.3455009c-4.6870003-0.019001-7.1844997-2.3269997-8.9204998-6.3934994l-0.4944992-1.1100006l-4.2810001-9.8220005c-1.4174995-3.4769993-4.9405003-5.8260002-8.9134998-5.8260002c-5.3759995,0-9.7375002,4.3915005-9.7375002,9.8074989c0,5.4165001,4.3614998,9.8079987,9.7375002,9.8079987c3.75,0,7.0130005-2.1349983,8.6389999-5.2654991l1.7320004,4.019001C22.8209991,35.5794983,19.0855007,37.5,14.9064999,37.5C7.5024996,37.5,1.5,31.4604988,1.5,24.0014992C1.5,16.5470009,7.5024996,10.5,14.9064999,10.5c5.5890007,0,10.1005001,3.0044994,12.3924999,8.3290005c0.1760006,0.4130001,2.4244995,5.7115002,4.3875008,10.220499c1.2159996,2.7915001,2.2514992,4.6419983,5.6139984,4.7565002c3.3030014,0.1139984,5.5699997-1.9099998,5.5699997-4.4689999c0-2.5-1.7285004-3.1009998-4.6469994-4.078001c-5.2439995-1.7399998-7.9540005-3.487999-7.9540005-7.6765003c0-4.0854998,2.7605-6.8099995,7.2469997-6.8099995c2.9230003,0,5.031498,1.309,6.4925003,3.9189997l-2.8670006,1.4744997c-1.0805016-1.5225-2.2705002-2.1234999-3.7859993-2.1234999c-2.1064987,0-3.607502,1.4744997-3.607502,3.4359999c0,2.7840004,2.4715004,3.2045002,5.9324989,4.3474998C44.3359985,23.3530006,46.5,25.0965004,46.5,29.4510002C46.5,34.0234985,42.6035004,37.3530006,37.5164986,37.3455009z"}));const LastFMIcon=toSquidInkIcon(()=>LastFM_ref);var Mail_ref=react_default.a.createElement("g",{id:"mail"},react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M43,42H5c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v29C45,41.1,44.1,42,43,42z"}),react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M3,9l18.9,18c1.2,1.1,3,1.1,4.1,0L45,9"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"3",y1:"42",x2:"21",y2:"26"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"45",y1:"42",x2:"27",y2:"26"}));const MailIcon=toSquidInkIcon(()=>Mail_ref);var Mixcloud_ref=react_default.a.createElement("g",{id:"mixcloud"},react_default.a.createElement("g",null,react_default.a.createElement("path",{stroke:"none",d:"M316,282.5c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.6-12.9c8.6-12.8,13.1-27.8,13.1-43.4c0-15.6-4.5-30.6-13.1-43.4c-2.9-4.3-1.7-10.1,2.5-12.9c4.3-2.9,10-1.7,12.9,2.5c10.7,15.9,16.3,34.5,16.3,53.8c0,19.3-5.6,37.9-16.3,53.8C321.9,281.1,319,282.5,316,282.5L316,282.5z"})),react_default.a.createElement("g",null,react_default.a.createElement("path",{stroke:"none",d:"M289.3,267.4c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.5-12.9c5.7-8.4,8.7-18.1,8.7-28.3c0-10.1-3-19.9-8.7-28.3c-2.9-4.3-1.8-10,2.5-12.9c4.3-2.9,10-1.8,12.9,2.5c7.8,11.5,11.9,24.9,11.9,38.7c0,13.9-4.1,27.3-11.9,38.7C295.3,266,292.3,267.4,289.3,267.4L289.3,267.4z"})),react_default.a.createElement("path",{stroke:"none",d:"M245.8,184c-3.7-37.3-35.2-66.5-73.5-66.5c-31.7,0-59.8,20.4-69.9,50c-23.9,3.5-42.4,24.1-42.4,49c0,27.3,22.3,49.6,49.7,49.6h127.2c22.9,0,41.6-18.6,41.6-41.5C278.5,204.7,264.5,188.1,245.8,184z M236.9,247.5H109.7c-17.1,0-31.1-13.9-31.1-31c0-17.1,13.9-31,31.1-31c8.3,0,16.1,3.2,22,9.1c3.6,3.6,9.5,3.6,13.2,0c3.6-3.6,3.6-9.5,0-13.2c-6.4-6.4-14.3-10.8-22.9-13c8.8-19.4,28.4-32.4,50.3-32.4c30.5,0,55.3,24.8,55.3,55.2c0,5.9-0.9,11.7-2.8,17.3c-1.6,4.9,1,10.1,5.9,11.8c1,0.3,2,0.5,2.9,0.5c3.9,0,7.5-2.5,8.8-6.4c1.2-3.7,2.1-7.4,2.7-11.2c8.6,3.3,14.7,11.6,14.7,21.3C259.9,237.2,249.5,247.5,236.9,247.5z"}));const MixcloudIcon=({className:className})=>react_default.a.createElement("svg",{className:classnames_default()("icon squid-ink",className),enableBackground:"new 0 0 400 400",version:"1.1",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg"},Mixcloud_ref);MixcloudIcon.displayName="MixcloudIcon",MixcloudIcon.__docgenInfo={description:"",methods:[],displayName:"MixcloudIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/platform/Mixcloud.jsx"]={name:"MixcloudIcon",docgenInfo:MixcloudIcon.__docgenInfo,path:"src/components/icons/platform/Mixcloud.jsx"});var Optune_ref=react_default.a.createElement("g",{id:"optune"},react_default.a.createElement("path",{stroke:"none",d:"M17.6,0c-1.9,0-3.9,0.3-5.9,0.9C6.6,2.5,2.6,6.6,0.9,11.8C-0.9,17.6,0,23.5,3.4,28.2c3.3,4.5,8.5,7.2,14.2,7.2c1.9,0,3.9-0.3,5.8-0.9c5.2-1.6,9.3-5.6,10.9-10.8c1.8-5.8,1-11.8-2.4-16.4C28.5,2.6,23.3,0,17.6,0z M9.1,12.3c1.9-3,5-4.8,8.5-4.8c1.6,0,3.1,0.4,4.7,1.1c1.8,0.9,3.4,2.4,4.2,4.2c1.6,3.4,1.5,7-0.4,10s-5.1,4.7-8.5,4.7l0,0c-1.6,0-3.1-0.4-4.6-1.1c-1.8-0.9-3.4-2.3-4.2-4.2C7.1,19.1,7.2,15.4,9.1,12.3z"}));const OptuneIcon=({className:className})=>react_default.a.createElement("svg",{className:classnames_default()("icon squid-ink",className),enableBackground:"new 0 0 35.2 35.4",version:"1.1",viewBox:"0 0 35.2 35.4",xmlns:"http://www.w3.org/2000/svg"},Optune_ref);OptuneIcon.displayName="OptuneIcon",OptuneIcon.__docgenInfo={description:"",methods:[],displayName:"OptuneIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/platform/Optune.jsx"]={name:"OptuneIcon",docgenInfo:OptuneIcon.__docgenInfo,path:"src/components/icons/platform/Optune.jsx"});var Soundcloud_ref=react_default.a.createElement("g",{id:"soundcloude"},react_default.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M40.6578903,23.2774296c-0.6387749,0-1.2503662,0.1494999-1.8347778,0.4484997c-0.1902695,0.0951366-0.3941345,0.1494999-0.6115913,0.1494999c-0.2310448,0-0.4620895-0.0543633-0.6659546-0.1766815c-0.3941383-0.2174549-0.6523628-0.6251831-0.6795464-1.0872746c-0.4485016-6.2382355-4.6458015-11.1173801-9.6608562-11.1173801c-0.8493366,0-1.7007198,0.1456184-2.5046692,0.4243708C24.2872944,12.0617313,24,12.4388657,24,12.8761969v22.0687904c0,0.5519676,0.4472198,0.9995499,0.9991875,1l15.7425423,0.0127792c2.7317772,0,4.9187698-2.8405037,4.9187698-6.333374C45.6604996,26.1179333,43.3896675,23.2774296,40.6578903,23.2774296z"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"20",y1:"36",x2:"20",y2:"13"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"17",y1:"36",x2:"17",y2:"15"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"14",y1:"36",x2:"14",y2:"20"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"11",y1:"36",x2:"11",y2:"25"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"8",y1:"36",x2:"8",y2:"26"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"5",y1:"36",x2:"5",y2:"29"}));const SoundcloudIcon=toSquidInkIcon(()=>Soundcloud_ref);var Spotify_ref=react_default.a.createElement("g",{id:"spotify"},react_default.a.createElement("path",{d:"M47.397,19.6c-2.047-1.217-4.237-2.247-6.51-3.06c-7.936-2.84-16.706-3.216-26.065-1.119c-2.648,0.592-4.212,1.133-4.762,1.337c-1.634,0.608-2.469,2.434-1.861,4.068c0.608,1.635,2.433,2.472,4.067,1.862l0.002-0.001c0.155-0.058,0.486-0.17,0.973-0.318c0.924-0.281,1.921-0.542,2.962-0.775c8.062-1.804,15.859-1.49,22.552,0.903c1.89,0.677,3.71,1.531,5.409,2.541c0.505,0.301,1.062,0.443,1.611,0.443c1.08,0,2.134-0.552,2.725-1.546C49.391,22.435,48.896,20.49,47.397,19.6z M46.781,22.913c-0.328,0.551-1.043,0.731-1.595,0.405c-1.809-1.075-3.745-1.985-5.756-2.705c-4.047-1.448-8.467-2.176-13.094-2.176c-3.432,0-6.979,0.4-10.569,1.204c-1.09,0.244-2.135,0.518-3.107,0.813c-0.545,0.166-0.915,0.292-1.089,0.357c-0.6,0.225-1.273-0.084-1.497-0.685c-0.224-0.602,0.083-1.272,0.685-1.496c0.511-0.19,1.973-0.695,4.5-1.261c8.986-2.013,17.382-1.658,24.955,1.051c2.152,0.771,4.225,1.745,6.162,2.896C46.926,21.646,47.108,22.361,46.781,22.913z"}),react_default.a.createElement("path",{d:"M28,0C12.561,0,0,12.561,0,28s12.561,28,28,28s28-12.561,28-28S43.439,0,28,0z M28,54C13.664,54,2,42.337,2,28S13.664,2,28,2s26,11.663,26,26S42.336,54,28,54z"}),react_default.a.createElement("path",{d:"M43.998,27.199c-10.286-4.409-19.972-5.543-28.008-3.283c-1.813,0.51-2.847,0.999-3.303,1.246c-1.533,0.83-2.105,2.754-1.275,4.288c0.832,1.534,2.753,2.104,4.288,1.275c0.049-0.025,0.174-0.083,0.375-0.166c0.475-0.196,1.022-0.383,1.627-0.553c6.63-1.865,14.862-0.824,23.803,3.008c0.4,0.172,0.823,0.258,1.246,0.258c0.397,0,0.795-0.076,1.176-0.229c0.784-0.313,1.4-0.914,1.732-1.691C46.346,29.749,45.601,27.886,43.998,27.199z M43.821,30.565c-0.123,0.285-0.349,0.507-0.638,0.622s-0.605,0.11-0.89-0.011c-6.303-2.701-12.299-4.07-17.703-4.07c-2.627,0-5.115,0.324-7.43,0.975c-0.681,0.191-1.304,0.404-1.849,0.63c-0.316,0.131-0.505,0.224-0.565,0.256c-0.273,0.148-0.589,0.181-0.884,0.092c-0.298-0.089-0.544-0.288-0.692-0.56c-0.305-0.565-0.095-1.272,0.468-1.577c0.308-0.167,1.206-0.605,2.893-1.079c7.591-2.136,16.817-1.031,26.679,3.195C43.799,29.29,44.074,29.976,43.821,30.565z"}),react_default.a.createElement("path",{d:"M40.859,35.148c-7.148-4.083-15.364-5.226-23.758-3.298c-1.253,0.288-2.419,0.63-3.2,0.938c-0.787,0.309-1.406,0.905-1.743,1.68c-0.338,0.775-0.354,1.635-0.044,2.421c0.638,1.623,2.476,2.426,4.101,1.788l0.006-0.002c0.073-0.029,0.249-0.091,0.52-0.177c0.537-0.171,1.135-0.333,1.777-0.48c6.817-1.566,13.458-0.658,19.202,2.625c0.494,0.282,1.032,0.416,1.563,0.416c1.099,0,2.169-0.573,2.753-1.594C42.902,37.95,42.374,36.014,40.859,35.148z M40.3,38.473c-0.319,0.556-1.031,0.752-1.588,0.434c-4.222-2.413-8.887-3.637-13.748-3.637c-2.264,0-4.57,0.265-6.894,0.799c-0.695,0.16-1.347,0.336-1.934,0.523c-0.339,0.106-0.56,0.187-0.655,0.225c-0.596,0.231-1.271-0.063-1.506-0.658c-0.114-0.29-0.108-0.606,0.016-0.891c0.125-0.285,0.352-0.505,0.642-0.618c0.328-0.129,1.269-0.471,2.916-0.85c7.894-1.813,15.611-0.746,22.318,3.085c0.27,0.154,0.463,0.404,0.545,0.704C40.494,37.89,40.455,38.203,40.3,38.473z"}));const SpotifyIcon=({className:className})=>react_default.a.createElement("svg",{className:classnames_default()("icon squid-ink",className),enableBackground:"new 0 0 56 56",version:"1.1",viewBox:"0 0 56 56",xmlns:"http://www.w3.org/2000/svg"},Spotify_ref);SpotifyIcon.displayName="SpotifyIcon",SpotifyIcon.__docgenInfo={description:"",methods:[],displayName:"SpotifyIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/platform/Spotify.jsx"]={name:"SpotifyIcon",docgenInfo:SpotifyIcon.__docgenInfo,path:"src/components/icons/platform/Spotify.jsx"});var TechRider_ref=react_default.a.createElement("g",{id:"jack-2"},react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M26,16.6000004V7l-0.2774048-1c0.2627659-0.451417,0.3706398-1.0046206,0.1827965-1.6021934c-0.2199955-0.6998515-0.8400688-1.2497916-1.5638504-1.3695009C23.0861359,2.8206689,22,3.7834423,22,5c0,0.3661499,0.1055908,0.704834,0.2774048,1L22,7v9.6000004C22,17.3731995,21.3731995,18,20.6000004,18h-0.0009441c-0.8467045,0-1.4996223,0.7457523-1.3877182,1.5850296l1.6266651,12.1999989C20.9307404,32.4805565,21.5240402,33,22.2257233,33h3.5485535c0.701683,0,1.2949829-0.5194435,1.3877201-1.2149715l1.6266651-12.1999989C28.9005661,18.7457523,28.2476482,18,27.4009438,18h-0.0009441C26.6268005,18,26,17.3731995,26,16.6000004z"}),react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M24,33c0,0-0.8808041,5.5934448,4,8c5.5537834,2.7383804,12.0292168,1.6175308,15,5"}),react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M15.0783405,17.0401802l-3.0308294-9.1090107l-0.578928-0.8612757c0.1068096-0.5112877,0.0345125-1.0702548-0.3323841-1.57796c-0.4296942-0.5946031-1.1916771-0.9206524-1.916234-0.8057332C7.963213,4.8855295,7.2365861,6.1419673,7.6206675,7.2963042c0.1155977,0.3474236,0.3227143,0.6354494,0.578928,0.8612752l0.052495,1.0364351l3.0308294,9.1090117c0.2441072,0.7336521-0.1527481,1.5262852-0.8864021,1.7703934l-0.0008955,0.0002975c-0.8034,0.2673149-1.1874828,1.1810589-0.8163328,1.9420815l5.3951502,11.062479c0.3075809,0.6306763,1.0345287,0.9362411,1.700325,0.7147102l3.3670635-1.1203194c0.6657963-0.2215271,1.0647564-0.9017143,0.9331646-1.5909481l-2.3082066-12.089592c-0.1587906-0.8316822-1.0137558-1.3331585-1.8171577-1.0658455l-0.0008945,0.0002975C16.1150799,18.1706886,15.3224478,17.7738342,15.0783405,17.0401802z"}),react_default.a.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M18,34c0,0-0.5498009,3.7808762,10,5s10.8154068,8,10.8154068,8"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"22",y1:"17",x2:"26",y2:"17"}),react_default.a.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"11.1026335",y1:"18.6324558",x2:"14.8973665",y2:"17.3675442"}));const TechRiderIcon=toSquidInkIcon(()=>TechRider_ref);var Tumblr_ref=react_default.a.createElement("g",{id:"tumnlr"},react_default.a.createElement("path",{id:"Tumblr",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M28.2993774,37.7747498c-0.7568913-0.4442291-2.1146793-1.208622-2.3918228-1.9455032C25.627409,35.0868607,25,33.5830879,25,30.9702377V20h11v-8H25V2h-5.1334782c-0.2881489,2.0465117-0.818922,3.7235594-1.5888195,5.2263365c-0.7713985,1.504777-2.3346605,2.534627-3.6103191,3.6091824C13.3977261,11.9080725,11.0465117,12.4786854,9,13.0489798V20h6v15.2144318c0,2.0610657,0.8481932,3.6338768,1.282917,4.7164345c0.4367256,1.081562,1.5314178,2.1065865,2.657999,3.0710869c1.1265812,0.9539909,2.6441803,1.6983757,4.2400036,2.2216492C24.774744,45.7413673,26.0790749,46,28.1551456,46c1.8259449,0,3.2625713-0.1840935,4.8388805-0.544281C34.5683441,45.0865288,36,44.4506989,38,43.5487366v-7.1031723c-2,1.4827652-4.2572517,2.2211494-6.556942,2.2211494C30.1488895,38.6672134,29.3078976,38.3695602,28.2993774,37.7747498z"}));const TumblrIcon=toSquidInkIcon(()=>Tumblr_ref);var Twitter_ref=react_default.a.createElement("g",{id:"twitter_1_"},react_default.a.createElement("path",{id:"Twitter__x28_alt_x29_",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M40.8405876,20.3372402c2.4460297-0.2017784,4.1047821-1.3137436,4.7435074-2.8224907c-0.8826027,0.5419483-3.6213837,1.1327705-5.1340027,0.570015c-0.0740318-0.3551712-0.1567764-0.6929207-0.2380676-0.9977665c-1.152607-4.2320433-5.0986786-7.6414843-9.2334595-7.2297001c0.3343639-0.1350021,0.6735649-0.2608128,1.0122852-0.3735571c0.4548512-0.1630688,3.1254025-0.5975962,2.7049046-1.5402002c-0.3546867-0.8288918-3.6170254,0.6266289-4.2310734,0.8167944c0.8105049-0.3048458,2.1518307-0.8293762,2.2950573-1.7613344c-1.2421284,0.1703267-2.4615116,0.757761-3.4036331,1.6118145c0.340168-0.3662996,0.5980797-0.8124404,0.6527576-1.2929354c-3.3136349,2.1169891-5.2491665,6.3848391-6.8154964,10.5244589c-1.230032-1.1918049-2.320219-2.130537-3.2981491-2.651679c-2.7436161-1.471489-6.0238628-3.0063658-11.1733465-4.9181881c-0.1582298,1.7037525,0.8424406,3.9692936,3.7259007,5.4756222c-0.6246929-0.0837126-1.7671413,0.1030674-2.6807127,0.3217821c0.3721056,1.9519844,1.5871372,3.5599289,4.877059,4.3375301c-1.5034256,0.0991955-2.2805414,0.4412994-2.9845924,1.1787395c0.6846952,1.3572922,2.3555431,2.9550743,5.3614244,2.6270027c-3.3416967,1.4405193-1.3626156,4.1081657,1.3568096,3.7099323c-4.6389866,4.7914085-11.9528809,4.4396248-16.152504,0.4321041c10.9652767,14.9418316,34.8013611,8.8366718,38.35355-5.5554619c2.6608734,0.0227432,4.22575-0.9217968,5.1959343-1.9631138C44.2413177,21.0969372,42.0193253,20.827898,40.8405876,20.3372402z"}));const TwitterIcon=toSquidInkIcon(()=>Twitter_ref);var Youtube_ref=react_default.a.createElement("g",{id:"youtube"},react_default.a.createElement("path",{id:"YouTube__x28_alt_x29_",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M44.4285698,17.194952c0-3.4215393-2.7715721-6.194952-6.1912651-6.194952H9.1912718C5.7715716,11,3,13.7734127,3,17.194952v16.6100941C3,37.2265854,5.7715716,40,9.1912699,40h29.0460358c3.419693,0,6.1912651-2.7734146,6.1912651-6.1949539V17.194952z M19.5714283,33.6020012V18l11.8310776,7.8010006L19.5714283,33.6020012z"}));function platform_extends(){return(platform_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const PlatformIcon={BANDCAMP:BandcampIcon,BIOGRAPHY:BiographyIcon,FACEBOOK:FacebookIcon,INSTAGRAM:InstagramIcon,LASTFM:LastFMIcon,MAIL:MailIcon,MIXCLOUD:MixcloudIcon,OPTUNE:OptuneIcon,SOUNDCLOUD:SoundcloudIcon,SPOTIFY:SpotifyIcon,TECHRIDER:TechRiderIcon,TUMBLR:TumblrIcon,TWITTER:TwitterIcon,YOUTUBE:toSquidInkIcon(()=>Youtube_ref)},Link=styled_components_browser_esm.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.6rem;
  padding: 0px;
  width: 3rem;
  height: 3rem;
  background-color: ${({colorBackground:colorBackground})=>colorBackground};
  border-radius: ${({circle:circle,square:square})=>(circle?"50%":square&&"none")||"0.4rem"};
  border-color: ${({color:color})=>color||"transparent"};
  border-width: ${({border:border})=>border/10*.5}rem;
  border-style: solid;
  box-sizing: border-box;
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out;

  &:hover {
    background-color: ${({colorBackgroundAccent:colorBackgroundAccent})=>colorBackgroundAccent};
    border-color: ${({colorAccent:colorAccent})=>colorAccent};

    & .icon g {
      & path,
      line,
      circle,
      polygon,
      polyline,
      rect,
      ellipse {
        fill: ${({colorAccent:colorAccent})=>colorAccent};
        stroke: ${({colorAccent:colorAccent})=>colorAccent};

        &[fill='none'] {
          fill: none;
        }

        &[stroke='none'] {
          stroke: none;
        }
      }
    }
  }
`,LinkIcon=({platform:platform})=>Object(styled_components_browser_esm.c)(PlatformIcon[platform])`
  width: 1.9rem;
  height: 1.9rem;

  &.icon g {
    & path,
    line,
    circle,
    polygon,
    polyline,
    rect,
    ellipse {
      fill: ${({color:color})=>color};
      stroke: ${({color:color})=>color};
      transition: fill 0.25s ease-out, stroke 0.25 ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }
`,PlatformLink=({border:border,circle:circle,color:color,colorAccent:colorAccent,colorBackground:colorBackground,colorBackgroundAccent:colorBackgroundAccent,platform:platform,square:square,url:url})=>{const Icon=LinkIcon({platform:platform});return react_default.a.createElement("a",{href:url},react_default.a.createElement(Link,{border:border,circle:circle,color:color,colorAccent:colorAccent,colorBackground:colorBackground,colorBackgroundAccent:colorBackgroundAccent,square:square},react_default.a.createElement(Icon,{color:color})))};PlatformLink.displayName="PlatformLink";Object.keys(PlatformIcon).map(platform=>{const Icon=LinkIcon({platform:platform});return{platform:platform,PlatformLinkIcon:({color:color,onClick:onClick})=>react_default.a.createElement("a",{onClick:onClick},react_default.a.createElement(Link,null,react_default.a.createElement(Icon,{color:color})))}});PlatformLink.__docgenInfo={description:"",methods:[],displayName:"PlatformLink"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/platform/index.jsx"]={name:"PlatformLink",docgenInfo:PlatformLink.__docgenInfo,path:"src/components/icons/platform/index.jsx"});__webpack_require__(432);var pipe=__webpack_require__(517),has=__webpack_require__(518),map=__webpack_require__(516),slice=__webpack_require__(233);const formatGigDate=date=>{const d=new Date(date),[Y,M,D]=[d.getFullYear(),d.getMonth()+1,d.getDate()];return`${D}.${M}.${Y}`};function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ApiProviders={OPTUNE:{url:slug=>`https://api.optune.me/v1/events/${slug}.json`,transformEvent:({title:title,playDate:playDate,venue:venue})=>({title:title,startDate:formatGigDate(playDate),venue:venue})},BANDSINTOWN:{url:slug=>`https://rest.bandsintown.com/artists/${slug}/events?app_id=onescreener.com`,transformEvent:({description:description,datetime:datetime,venue:{name:name},venue:venue})=>({title:description||name,startDate:formatGigDate(datetime),venue:venue})},GIGATOOLS:{url:slug=>`https://gigs.gigatools.com/user/${slug}.json`,extractEvents:result=>{const[{},events]=0===result.length?[{},[]]:result;return events.map(({event:event})=>event)},transformEvent:({eventdate:eventdate,name:name,venue:venue,city:city})=>({title:name,startDate:eventdate,venue:{name:venue,city:city}})}},transformVenue=({startDate:startDate,title:title,venue:venue})=>{const{name:name,city:city}=venue||[{name:null,city:null}].filter(venue=>venue).reduce((acc,cur,idx)=>0===idx&&function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null==arguments[i]?{}:arguments[i],ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}({},acc,cur),{name:"unknown",city:"unknown"});return`${startDate}: ${title}, ${name}, ${city}`},gigs_getGigs=async({api:api,slug:slug,limit:limit=5})=>{const Api=ApiProviders[api],transforms=Object(pipe.a)(Api.transformEvent,transformVenue),data=await(async url=>new Promise((resolve,reject)=>{try{fetch(url).then(res=>{console.log(res.json());try{resolve(res.json())}catch(e){console.error("Parse error",e),reject("Parsing failed")}})}catch(e){console.error("fetching failed",e),reject("Fetch failed")}}))(Api.url(slug)).catch(error=>{throw error}),result=Object(has.a)("extractEvents")(Api)?Api.extractEvents(data):data;return Object(map.a)(transforms,Object(slice.a)(0,limit)(result))};function Page_extends(){return(Page_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const PageContainer=styled_components_browser_esm.c.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({color:color})=>color};
  background-image: ${({image:image})=>`url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({fullscreen:fullscreen})=>fullscreen?"cover":"contain"};
  display: flex;
`,BackLink=styled_components_browser_esm.c.a`
  position: fixed;
  background-image: url(https://www.onescreener.com/img/onescreener-logo.svg);
  background-size: 60px 15px;
  background-color: #808080;
  background-position: center;
  background-repeat: no-repeat;
  width: 70px;
  height: 15px;
  opacity: 0.3;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
`;var Page_ref=react_default.a.createElement(global,null),Page_ref2=react_default.a.createElement(BackLink,{href:"http://www.onescreener.com",target:"_blank",title:"created with onescreener.com"},react_default.a.createElement("span",null,"created by onescreener.com"));const Page=({page:page})=>{const{background:background,logo:logo,content:content,gigAPI:gigAPI}=page,{type:type,color:color,colorAccent:colorAccent,colorBackground:colorBackground,gigsAPI:gigsAPI,media:media,text:text}=content,{provider:provider,slug:slug}=gigsAPI||{provider:"",slug:""},{links:links}=page||{links:{list:[]}},colors={color:color,colorBackground:colorBackground,colorAccent:colorAccent};let Content;switch(type){case"GIGS":Content=react_default.a.createElement(TextBox,Page_extends({},colors,{id:"gigs"}),react_default.a.createElement(GigsBox,Page_extends({getGigs:gigs_getGigs,api:provider,slug:slug},colors)));break;case"MEDIA":Content=react_default.a.createElement(MediaBox,{media:media});break;default:Content=react_default.a.createElement(TextBox,colors,(text=>"string"==typeof text?lib_default()(text):"")(text))}return react_default.a.createElement(react.Fragment,null,Page_ref,react_default.a.createElement(PageContainer,{image:background.image&&background.image.url,fullscreen:background.fullscreen,color:background.color},Page_ref2,logo&&logo.image&&react_default.a.createElement(LogoBox,{position:logo.position,zIndex:2},react_default.a.createElement(Logo,{logo:logo})),Content,0<links.list.length&&react_default.a.createElement(LinksBox,{position:links.position},((links,content)=>links.list.filter(({platform:platform,url:url})=>!!PlatformIcon[platform]&&""<url).map(link=>react_default.a.createElement(PlatformLink,platform_extends({key:link.platform,border:links.border,circle:links.circle,square:links.square},link,content))))(links,content))))};Page.displayName="Page",Page.__docgenInfo={description:"",methods:[],displayName:"Page"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/templates/Page.jsx"]={name:"Page",docgenInfo:Page.__docgenInfo,path:"src/components/templates/Page.jsx"});__webpack_require__.d(__webpack_exports__,"i",function(){return global}),__webpack_require__.d(__webpack_exports__,"b",function(){return components_AnchorButton}),__webpack_require__.d(__webpack_exports__,"d",function(){return Button}),__webpack_require__.d(__webpack_exports__,"e",function(){return components_CenterContainer}),__webpack_require__.d(__webpack_exports__,"g",function(){return components_ContentContainer}),__webpack_require__.d(__webpack_exports__,"j",function(){return components_Label}),__webpack_require__.d(__webpack_exports__,"k",function(){return gigs_getGigs})},236:function(module,exports,__webpack_require__){__webpack_require__(237),__webpack_require__(323),module.exports=__webpack_require__(324)},324:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(16);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_3__.i,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)(story=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,story(),_ref));const req=__webpack_require__(434);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(50)(module))},409:function(module,exports){},434:function(module,exports,__webpack_require__){var map={"./button.stories.js":435,"./container.stories.js":505,"./gigs.stories.js":512,"./input.stories.js":513,"./text.stories.js":514};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=434},435:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(21),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/Button",module).add("primary with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("primary with text and shadow",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("secondary with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("secondary with text and shadow",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{secondary:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("round with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",flexFlow:"row",margin:"2em"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"S"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"M"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"L"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"XL"))).add("primary with some emoji",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},_ref));var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,"Next"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"https://www.onescreener.com"},"Next"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Next")," is a great name for an AnchorButton. By the way, you could click here, and try to copy it's text but nothing will happen!"),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0,shadow:!0,href:"https://www.onescreener.com"},"Next"),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AnchorButton",module).add("primary with text",()=>_ref2).add("primary with text and a Link",()=>_ref3).add("secondary with much more text",()=>_ref4).add("secondary with text, a Link and shadow",()=>_ref5).add("primary with some emoji",()=>_ref6);var _ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.AddButton,{href:"#"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AddButton",module).add("addButton",()=>_ref7)}.call(this,__webpack_require__(50)(module))},505:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(99),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Left"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Right"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,secondary:!0},"Doge"),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0},"Much wow"),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Right")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0,secondary:!0},"Doge"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,{shadow:!0},"Much wow")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Center",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Centered elements",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},_ref,_ref2,_ref3),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},_ref4,_ref5))).add("non-centered elements",()=>_ref6);var _ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.g,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.d,null,"Bottom"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Content",module).add("primary with text",()=>_ref7),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Background",module).add("plain",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.Background,{color:"lightblue",fullscreen:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"100%"}},"Test")))}.call(this,__webpack_require__(50)(module))},512:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(21),__webpack_require__(2)),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.Gigs,{slug:"skrillex",api:"bandsintown",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.k}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.Gigs,{slug:"ARADOShows",api:"gigatools",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.k}),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.Gigs,{slug:"Ray-Douglas",api:"optune",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.k});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Organism/Gigs",module).add("Bandsintown",()=>_ref).add("Gigatools",()=>_ref2).add("Optune",()=>_ref3)}.call(this,__webpack_require__(50)(module))},513:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(21),__webpack_require__(2)),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,null,"Label Text"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{secondary:!0},"Label Text"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{key:1,secondary:!0,shadow:!0},"secondary shadow");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Label",module).add("primary with text",()=>_ref).add("secondary with text",()=>_ref2).add("shadow with text",()=>[react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{style:{marginBottom:"2em"},key:0,shadow:!0},"primary shadow"),_ref3])}.call(this,__webpack_require__(50)(module))},514:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_src_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Hello ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://app.optune.me"},"https://app.optune.me")),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.ColoredTextContainer,{color:"#efbf00"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Bold")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Text",module).add("text",()=>_ref).add("ColoredTextContainer",()=>_ref2)}.call(this,__webpack_require__(50)(module))}},[[236,1,2]]]);
//# sourceMappingURL=main.0985fbcab0845b73e59b.bundle.js.map