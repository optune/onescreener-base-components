(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{2:function(module,__webpack_exports__,__webpack_require__){"use strict";var styled_components_browser_esm=__webpack_require__(1);const white="#ffffff",grey="#5f5f5f";var colors_poison="#27e200",global=styled_components_browser_esm.a`
  @font-face {
    font-family: 'Brandon Text Regular', sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    color: ${grey};
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;

    font-family: 'Brandon Text Regular', sans-serif;

    a {
      color: ${"#47d629"};
      background: ${white};
    }

    span, p {
      color: ${grey};
    }
  }
`;var components_AddButton=styled_components_browser_esm.c.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  height: 32px;
  width: 32px;
  color: ${white};
  background-color: ${"#47d629"};
  border: 0px solid black;
  border-radius: 2em;
  opacity: 1;
  cursor: pointer;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.75);
  &:before {
    content: '+';
  }
`,react=__webpack_require__(0),react_default=__webpack_require__.n(react);var Button=styled_components_browser_esm.c.button`
  display: flex;
  justify-content: center;
  font-size: 1em;
  font-weight: 600;
  color: ${({secondary:secondary,disabled:disabled})=>disabled?grey:secondary?"#27e200":white};

  ${({round:round})=>round?"\n        line-height: 40px;\n        padding: 0px;\n        width: 40px;\n        overflow: hidden;\n        ":"\n        line-height: 8px;\n        padding: 16px;\n        width: auto;\n        overflow: none;\n        "};

  min-height: 40px;
  background-color: ${({secondary:secondary,disabled:disabled})=>disabled?"#000000":secondary?white:"#27e200"};
  border-radius: ${({secondary:secondary,round:round})=>round?"50%":secondary?"2px":"3px"};
  border-width: 0;
  border-style: solid;
  border-color: black;
  box-shadow: ${({shadow:shadow})=>shadow?"0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)":"none"};
  /* 4px 4px 10px 0px rgba(0,0,0,0.75) */
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

  > * {
    margin: 0 0.5em;
  }
`;var components_ContentContainer=Object(styled_components_browser_esm.c)(components_CenterContainer)`
  flex-flow: column;
  width: 100%;
  height: auto;

  > ${Button}, label {
    margin: 2em auto;
  }

  > p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    margin: 1.2em;
  }

  margin-bottom: 120px; /* height of bottom subnavigation bar */
`;var components_Background=Object(styled_components_browser_esm.c)(components_ContentContainer)`
  background-color: ${({color:color})=>color};
  background-image: ${({image:image})=>`url(${image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${({fullscreen:fullscreen})=>fullscreen?"cover":"contain"};
`;var components_BottomBar=styled_components_browser_esm.c.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.11);
  z-index: 1;

  /* positioning & dimensions are most important for Bottombar of SubNavigation */
  /* FIXME: maybe use this part in SubNavigation Component? */
  &&& {
    margin: 0 20px 20px 20px;
    padding: 1em 0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;var components_ButtonContainer=Object(styled_components_browser_esm.c)(components_CenterContainer)`
  height: 100%;
  &&& {
    width: 6em;
  }

  > ${Button} {
    width: 100%;
  }
`;var components_ColoredTextContainer=styled_components_browser_esm.c.div`
  li,
  p,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({color:color})=>color};
  }
`,ReactPlayer=__webpack_require__(222),ReactPlayer_default=__webpack_require__.n(ReactPlayer),dist_web=__webpack_require__(223);const Gig=styled_components_browser_esm.c.li`
  padding: 8px;
  list-style: none;
`,GigHead=styled_components_browser_esm.c.h2`
  margin-top: 0;
`,GigList=styled_components_browser_esm.c.ul`
  padding: 0;
  margin: 0;
`;var Gigs_ref=react_default.a.createElement("div",null,"Loading gigs"),_ref2=react_default.a.createElement("div",null,"Error when loading gigs");const Gigs=({api:api,slug:slug,getGigs:getGigs})=>react_default.a.createElement("div",null,react_default.a.createElement(GigHead,null,"Upcoming Gigs from ",slug,"@",api),react_default.a.createElement(dist_web.a,{promiseFn:getGigs,api:api,slug:slug,limit:5},({data:data,error:error,isLoading:isLoading})=>isLoading?Gigs_ref:error?_ref2:react_default.a.createElement(GigList,null,data&&data.map((text,key)=>react_default.a.createElement(Gig,{key:key},text)))));Gigs.displayName="Gigs";var components_Gigs=Gigs;Gigs.__docgenInfo={description:"",methods:[],displayName:"Gigs"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Gigs.jsx"]={name:"Gigs",docgenInfo:Gigs.__docgenInfo,path:"src/components/Gigs.jsx"});__webpack_require__(16),__webpack_require__(405);var pipe=__webpack_require__(504),has=__webpack_require__(505),map=__webpack_require__(503),slice=__webpack_require__(224);const formatGigDate=date=>{const d=new Date(date),[Y,M,D]=[d.getFullYear(),d.getMonth()+1,d.getDate()];return`${D}.${M}.${Y}`};function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ApiProviders={optune:{url:slug=>`https://api.optune.me/v1/events/${slug}.json`,transformEvent:({title:title,playDate:playDate,venue:venue})=>({title:title,startDate:formatGigDate(playDate),venue:venue})},bandsintown:{url:slug=>`https://rest.bandsintown.com/artists/${slug}/events?app_id=onescreener.com`,transformEvent:({description:description,datetime:datetime,venue:{name:name},venue:venue})=>({title:description||name,startDate:formatGigDate(datetime),venue:venue})},gigatools:{url:slug=>`http://gigs.gigatools.com/user/${slug}.json`,extractEvents:result=>{const[{},events]=0===result.length?[{},[]]:result;return events.map(({event:event})=>event)},transformEvent:({eventdate:eventdate,name:name,venue:venue,city:city})=>({title:name,startDate:eventdate,venue:{name:venue,city:city}})}},transformVenue=({startDate:startDate,title:title,venue:venue})=>{const{name:name,city:city}=venue||[{name:null,city:null}].filter(venue=>venue).reduce((acc,cur,idx)=>0===idx&&function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null==arguments[i]?{}:arguments[i],ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_defineProperty(target,key,source[key])})}return target}({},acc,cur),{name:"unknown",city:"unknown"});return`${startDate}: ${title}, ${name}, ${city}`},gigs_getGigs=async({api:api,slug:slug,limit:limit=5})=>{const Api=ApiProviders[api],transforms=Object(pipe.a)(Api.transformEvent,transformVenue),data=await(async url=>{let res={ok:!1};try{res=await fetch(url)}catch(e){console.error("fetching failed",e)}let parsedResult=[];if(res.ok)try{parsedResult=await res.json()}catch(e){console.warn(`parsing error for ${url}, setting empty data`),parsedResult=[]}return parsedResult})(Api.url(slug)),result=Object(has.a)("extractEvents")(Api)?Api.extractEvents(data):data;return Object(map.a)(transforms,Object(slice.a)(0,limit)(result))},ContentBox=({content:content})=>{const type=content.__typename||content.activeContent;return"Text"===type?react_default.a.createElement(components_ColoredTextContainer,{color:content.color,dangerouslySetInnerHTML:{__html:content.html}}):"Gigs"===type?react_default.a.createElement(components_ColoredTextContainer,{color:content.color,id:"gigs"},react_default.a.createElement(components_Gigs,{getGigs:gigs_getGigs,api:content.api,slug:content.slug})):"Media"===type?react_default.a.createElement(ReactPlayer_default.a,{url:content.url,playing:!0}):react_default.a.createElement("div",null,"Content of type ",'"',content.__typename.toString(),'"'," is missing")};ContentBox.__docgenInfo={description:"",methods:[],displayName:"ContentBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentBox.jsx"]={name:"ContentBox",docgenInfo:ContentBox.__docgenInfo,path:"src/components/ContentBox.jsx"});const getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"20"}px;
`,Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:getDimensionsCss()};
`,defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#6F717D",fillRule:"nonzero",d:"M18.815.98A3.198 3.198 0 0 0 16.58 0a3.64 3.64 0 0 0-2.414 1.056L1.827 13.418a.625.625 0 0 0-.168.288c-.268 1-1.622 5.44-1.634 5.484a.625.625 0 0 0 .593.8.505.505 0 0 0 .2 0c.05 0 4.628-1.493 5.377-1.718a.723.723 0 0 0 .268-.156c.474-.475 11.66-11.55 12.402-12.319A3.463 3.463 0 0 0 20 3.348 3.412 3.412 0 0 0 18.815.981zm-3.097.38l2.864 2.88L6.818 16.077 4 13.2 15.718 1.36z"}))],viewBox:"0 0 20 20"};Object.assign(Image,{getDimensions:()=>({height:"20",width:"20"}),getDimensionsCss:getDimensionsCss,defaultProps:defaultProps,displayName:"Edit"});const StyledContent=styled_components_browser_esm.c.div`
  > * {
    text-align: center;
  }

  margin: 0 auto;
  width: 100%;
`,Fields=({fields:fields})=>react_default.a.createElement(StyledContent,null,fields);Fields.displayName="Fields";Fields.__docgenInfo={description:"",methods:[],displayName:"Fields"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Fields.jsx"]={name:"Fields",docgenInfo:Fields.__docgenInfo,path:"src/components/Fields.jsx"});styled_components_browser_esm.c.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
  height: 100%;
  max-height: 45vh;
  max-width: 800px;
`;function Label_extends(){return(Label_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}const LabelStyle=Object(styled_components_browser_esm.c)(Button)`
  text-decoration: none;
  min-height: unset;
  line-height: 2;
  padding: 4px 28px;
  cursor: pointer;
  user-select: none;
`,Label=props=>react_default.a.createElement(LabelStyle,Label_extends({as:"label"},props),props.children);Label.displayName="Label";var components_Label=Label;Label.__docgenInfo={description:"",methods:[],displayName:"Label"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Label.jsx"]={name:"Label",docgenInfo:Label.__docgenInfo,path:"src/components/Label.jsx"});const Preview_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"32"}px;
  height: ${"26"}px;
`,Preview_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Preview_getDimensionsCss()};
`,Preview_defaultProps={children:[react_default.a.createElement("defs",{key:"key-0"},react_default.a.createElement("path",{id:"s-3d4a82ba12-b",d:"M.106 11.553c.14-.281.404-.75.788-1.346a20.492 20.492 0 0 1 2.251-2.89C5.661 4.631 8.62 3 12 3c3.38 0 6.339 1.632 8.855 4.316a20.492 20.492 0 0 1 2.25 2.891c.385.596.649 1.065.79 1.346a1 1 0 0 1 0 .894c-.141.281-.405.75-.79 1.346a20.492 20.492 0 0 1-2.25 2.89C18.339 19.369 15.38 21 12 21c-3.38 0-6.339-1.632-8.855-4.316a20.492 20.492 0 0 1-2.25-2.891 15.188 15.188 0 0 1-.79-1.346 1 1 0 0 1 0-.894zm2.468 1.154c.575.89 1.254 1.781 2.03 2.61C6.777 17.631 9.255 19 12 19c2.745 0 5.224-1.368 7.395-3.684A18.513 18.513 0 0 0 21.86 12a18.513 18.513 0 0 0-2.464-3.316C17.224 6.368 14.745 5 12 5 9.255 5 6.776 6.368 4.605 8.684A18.513 18.513 0 0 0 2.14 12c.126.218.27.455.433.707zM16 12c0 2.552-1.448 4-4 4s-4-1.448-4-4 1.448-4 4-4 4 1.448 4 4zm-2 0c0-1.448-.552-2-2-2s-2 .552-2 2 .552 2 2 2 2-.552 2-2z"}),react_default.a.createElement("filter",{id:"s-3d4a82ba12-a",width:"150%",height:"166.7%",x:"-25%",y:"-33.3%",filterUnits:"objectBoundingBox"},react_default.a.createElement("feOffset",{in:"SourceAlpha",result:"shadowOffsetOuter1"}),react_default.a.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:"2"}),react_default.a.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"}))),react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-1"},react_default.a.createElement("path",{d:"M4 1h24v24H4z"}),react_default.a.createElement("g",{fillRule:"nonzero",transform:"translate(4 1)"},react_default.a.createElement("use",{fill:"#000",filter:"url(#s-3d4a82ba12-a)",xlinkHref:"#s-3d4a82ba12-b"}),react_default.a.createElement("use",{fill:"#FFF",fillRule:"evenodd",xlinkHref:"#s-3d4a82ba12-b"})))],viewBox:"0 0 32 26"};Object.assign(Preview_Image,{getDimensions:()=>({height:"26",width:"32"}),getDimensionsCss:Preview_getDimensionsCss,defaultProps:Preview_defaultProps,displayName:"Preview"});const faintShadow="2px 2px 5px 0px rgba(0, 127, 0, 0.25)",Round=styled_components_browser_esm.c.div`
  box-sizing: border-box;
  margin: 8px;
  width: 36px;
  height: 36px;
  border-radius: 28px;
  z-index: 1;
`,ProfilePic=Object(styled_components_browser_esm.c)(Round)`
  ${({shadow:shadow})=>shadow&&`box-shadow: ${faintShadow}`};
  transition: all 0.6s ease;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({url:url})=>`url(${url})`};
  background: ${({url:url})=>url||`${colors_poison}`};
`,Text=styled_components_browser_esm.c.span`
  padding: 2em;
  color: inherit;
`,Tooltip=styled_components_browser_esm.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border: rgba(127, 255, 127, 0.3) 1px solid;
  border-radius: 1em;
  box-shadow: ${faintShadow};
  color: ${colors_poison};
  font-weight: 600;
  user-select: none;
  overflow: hidden;

  background: ${({open:open})=>open?"rgba(255, 255, 255, 0.8)":"rgba(0, 255, 0, 1)"};
  min-width: ${({open:open})=>open?"300%":"100%"};
  right: ${({open:open})=>open?"200%":"0%"};
  opacity: ${({open:open})=>open?1:0};
  z-index: ${({open:open})=>open?1:2};
  transition: all 0.4s cubic-bezier(0.45, 0.96, 0, 1);
`,Profile=({url:url,username:username,openDefault:openDefault=!1})=>{const[open,setOpen]=Object(react.useState)(openDefault);return react_default.a.createElement(ProfilePic,{url:url,shadow:!open},react_default.a.createElement(Tooltip,{onClick:()=>setOpen(!open),open:open},react_default.a.createElement(Text,null,username)))};Profile.displayName="Profile";var components_Profile=Profile;Profile.__docgenInfo={description:"",methods:[],displayName:"Profile",props:{openDefault:{defaultValue:{value:"false",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Profile.jsx"]={name:"Profile",docgenInfo:Profile.__docgenInfo,path:"src/components/Profile.jsx"});const Bio_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"24"}px;
`,Bio_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Bio_getDimensionsCss()};
`,Bio_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",fillRule:"nonzero",d:"M3 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 4a1 1 0 1 0 0 2h7a1 1 0 0 0 0-2H5zm0 14a1 1 0 0 0 0 2h7a1 1 0 0 0 0-2H5zM5 8a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H5zm0 6a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H5zm0-3a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H5z"}))],viewBox:"0 0 20 24"};var Bio=Object.assign(Bio_Image,{getDimensions:()=>({height:"24",width:"20"}),getDimensionsCss:Bio_getDimensionsCss,defaultProps:Bio_defaultProps,displayName:"Bio"});const Calendar2_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"22"}px;
`,Calendar2_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Calendar2_getDimensionsCss()};
`,Calendar2_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-2-1h24v24H-2z"}),react_default.a.createElement("path",{fill:"#5F5F5F",fillRule:"nonzero",d:"M3 2h14c1.886 0 3 1.114 3 3v14c0 1.886-1.114 3-3 3H3c-1.886 0-3-1.114-3-3V5c0-1.886 1.114-3 3-3zm-.991 17a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1V8H2.009v11zM5 0a1 1 0 0 1 1 1v1H4V1a1 1 0 0 1 1-1zm9 0a1 1 0 0 1 1 1v1h-2V1a1 1 0 0 1 1-1z"}))],viewBox:"0 0 20 22"};Object.assign(Calendar2_Image,{getDimensions:()=>({height:"22",width:"20"}),getDimensionsCss:Calendar2_getDimensionsCss,defaultProps:Calendar2_defaultProps,displayName:"Calendar2"});const Calendar_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"22"}px;
`,Calendar_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Calendar_getDimensionsCss()};
`,Calendar_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-2-1h24v24H-2z"}),react_default.a.createElement("path",{fill:"#5F5F5F",fillRule:"nonzero",d:"M7 2h6V1a1 1 0 0 1 2 0v1h2c1.886 0 3 1.114 3 3v14c0 1.886-1.114 3-3 3H3c-1.886 0-3-1.114-3-3V5c0-1.886 1.114-3 3-3h2V1a1 1 0 1 1 2 0v1zm0 2v1a1 1 0 1 1-2 0V4H3.009a1 1 0 0 0-1 1v3H18V5a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V4H7zM2.009 19a1 1 0 0 0 1 1H17a1 1 0 0 0 1-1v-9H2.009v9z"}))],viewBox:"0 0 20 22"};Object.assign(Calendar_Image,{getDimensions:()=>({height:"22",width:"20"}),getDimensionsCss:Calendar_getDimensionsCss,defaultProps:Calendar_defaultProps,displayName:"Calendar"});const Caret_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"8"}px;
  height: ${"14"}px;
`,Caret_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Caret_getDimensionsCss()};
`,Caret_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-5-5h24v24H-5z"}),react_default.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M7.707 12.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 1.414L2.414 7l5.293 5.293z"}))],viewBox:"0 0 8 14"};Object.assign(Caret_Image,{getDimensions:()=>({height:"14",width:"8"}),getDimensionsCss:Caret_getDimensionsCss,defaultProps:Caret_defaultProps,displayName:"Caret"});const Facebook_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Facebook_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Facebook_getDimensionsCss()};
`,Facebook_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M11.75 22H1.215C.544 22 0 21.456 0 20.786V1.214C0 .544.544 0 1.214 0h19.572C21.456 0 22 .544 22 1.214v19.572c0 .67-.544 1.214-1.214 1.214H15.18v-8.52h2.86l.428-3.32H15.18V8.04c0-.96.267-1.616 1.645-1.616h1.758v-2.97c-.304-.04-1.347-.131-2.562-.131-2.535 0-4.27 1.547-4.27 4.389v2.448H8.884v3.32h2.867V22z"}))],viewBox:"0 0 22 22"};var Facebook=Object.assign(Facebook_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Facebook_getDimensionsCss,defaultProps:Facebook_defaultProps,displayName:"Facebook"});const Focus_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Focus_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Focus_getDimensionsCss()};
`,Focus_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-1-1h24v24H-1z"}),react_default.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M12 19.951c2.064-.205 3.84-1.063 5.364-2.587 1.524-1.524 2.382-3.3 2.587-5.364H17a1 1 0 0 1 0-2h2.951c-.205-2.064-1.063-3.84-2.587-5.364-1.524-1.524-3.3-2.382-5.364-2.587V5a1 1 0 0 1-2 0V2.049c-2.064.205-3.84 1.063-5.364 2.587C3.112 6.16 2.254 7.936 2.049 10H5a1 1 0 0 1 0 2H2.049c.205 2.064 1.063 3.84 2.587 5.364 1.524 1.524 3.3 2.382 5.364 2.587V17a1 1 0 0 1 2 0v2.951zM22 11c0 3.027-1.082 5.638-3.222 7.778C16.638 20.918 14.027 22 11 22c-3.027 0-5.638-1.082-7.778-3.222C1.082 16.638 0 14.027 0 11c0-3.027 1.082-5.638 3.222-7.778C5.362 1.082 7.973 0 11 0c3.027 0 5.638 1.082 7.778 3.222C20.918 5.362 22 7.973 22 11z"}))],viewBox:"0 0 22 22"};Object.assign(Focus_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Focus_getDimensionsCss,defaultProps:Focus_defaultProps,displayName:"Focus"});const Instagram_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Instagram_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Instagram_getDimensionsCss()};
`,Instagram_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M16.022 0A5.985 5.985 0 0 1 22 5.978v10.044A5.985 5.985 0 0 1 16.022 22H5.978A5.985 5.985 0 0 1 0 16.022V5.978A5.985 5.985 0 0 1 5.978 0h10.044zM11 5c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm6-13c-.551 0-1 .449-1 1 0 .551.449 1 1 1 .551 0 1-.449 1-1 0-.551-.449-1-1-1z"}))],viewBox:"0 0 22 22"};var Instagram=Object.assign(Instagram_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Instagram_getDimensionsCss,defaultProps:Instagram_defaultProps,displayName:"Instagram"});const Mail_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"18"}px;
`,Mail_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Mail_getDimensionsCss()};
`,Mail_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-1-3h24v24H-1z"}),react_default.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M22 2.983V15c0 1.652-1.348 3-3 3H3c-1.652 0-3-1.348-3-3V3.012v-.03A3.006 3.006 0 0 1 3 0h16a3.006 3.006 0 0 1 3 2.983zm-2.107-.43A1.006 1.006 0 0 0 19 2H3c-.388 0-.728.227-.893.554L11 8.779l8.893-6.225zM20 4.922l-8.427 5.898a1 1 0 0 1-1.146 0L2 4.921V15c0 .548.452 1 1 1h16c.548 0 1-.452 1-1V4.92z"}))],viewBox:"0 0 22 18"};Object.assign(Mail_Image,{getDimensions:()=>({height:"18",width:"22"}),getDimensionsCss:Mail_getDimensionsCss,defaultProps:Mail_defaultProps,displayName:"Mail"});const Menu_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"4"}px;
  height: ${"20"}px;
`,Menu_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Menu_getDimensionsCss()};
`,Menu_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-10-2h24v24h-24z"}),react_default.a.createElement("path",{fill:"#6F717D",d:"M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}))],viewBox:"0 0 4 20"};Object.assign(Menu_Image,{getDimensions:()=>({height:"20",width:"4"}),getDimensionsCss:Menu_getDimensionsCss,defaultProps:Menu_defaultProps,displayName:"Menu"});const Mixcloud_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"23"}px;
  height: ${"14"}px;
`,Mixcloud_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Mixcloud_getDimensionsCss()};
`,Mixcloud_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M13.732 4.614A3.213 3.213 0 0 1 16.5 7.792C16.5 9.56 15.06 11 13.292 11H3.667A3.67 3.67 0 0 1 0 7.333a3.67 3.67 0 0 1 3.861-3.659A5.04 5.04 0 0 1 8.708 0a5.049 5.049 0 0 1 5.024 4.614zm4.063 6.832a.503.503 0 0 1-.43-.763 5.428 5.428 0 0 0 .828-2.872 5.442 5.442 0 0 0-.84-2.897.496.496 0 0 1 .16-.689.507.507 0 0 1 .693.159 6.421 6.421 0 0 1 .995 3.427 6.43 6.43 0 0 1-.977 3.398.506.506 0 0 1-.43.237zm2.413 1.846a.501.501 0 0 1-.42-.777 8.428 8.428 0 0 0 1.428-4.723 8.428 8.428 0 0 0-1.427-4.723.497.497 0 0 1 .14-.693.506.506 0 0 1 .698.139 9.423 9.423 0 0 1 1.597 5.277 9.423 9.423 0 0 1-1.597 5.277.504.504 0 0 1-.419.223z"}))],viewBox:"0 0 23 14"};var Mixcloud=Object.assign(Mixcloud_Image,{getDimensions:()=>({height:"14",width:"23"}),getDimensionsCss:Mixcloud_getDimensionsCss,defaultProps:Mixcloud_defaultProps,displayName:"Mixcloud"});function PlatformIcon_extends(){return(PlatformIcon_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const platforms={youtube:{path:"M16.000694,20 L16,14 L22,17.0103437 L16.000694,20 Z M28.79,13.23566 C28.79,13.23566 28.5845937,11.7661172 27.95525,11.1189852\n      C27.1565937,10.2692496 26.2614687,10.2652508 25.8513125,10.2159328 C22.912625,10 18.5045937,10 18.5045937,10 L18.4954062,10\n      C18.4954062,10 14.087375,10 11.1486875,10.2159328 C10.737875,10.2652508 9.84340625,10.2692496 9.04409375,11.1189852 C8.41475,11.7661172 8.21,13.23566 8.21,13.23566\n      C8.21,13.23566 8,14.9617897 8,16.6872529 L8,18.3054161 C8,20.0315457 8.21,21.7570089 8.21,21.7570089 C8.21,21.7570089 8.41475,23.2265517 9.04409375,23.8736837\n      C9.84340625,24.7234194 10.89275,24.696761 11.36,24.7854001 C13.04,24.9493491 18.5,25 18.5,25 C18.5,25 22.912625,24.9933354 25.8513125,24.7774026\n      C26.2614687,24.7274181 27.1565937,24.7234194 27.95525,23.8736837\n      C28.5845937,23.2265517 28.79,21.7570089 28.79,21.7570089\n      C28.79,21.7570089 29,20.0315457 29,18.3054161 L29,16.6872529 C29,14.9617897 28.79,13.23566 28.79,13.23566 L28.79,13.23566 Z",viewBox:"0 0 36 32",width:"32px",height:"32px"},facebook:{path:"M8.50060855,15.3333333 L1.47615408,15.3333333 C1.02895553,15.3333333\n       0.666666667,14.9708196 0.666666667,14.5237953 L0.666666667,1.47614779\n       C0.666666667,1.02900963 1.02901244,0.666666667 1.47615408,0.666666667 L14.5239028,0.666666667\n       C14.9709306,0.666666667 15.3333333,1.02900963 15.3333333,1.47614779 L15.3333333,14.5237953\n       C15.3333333,14.9708765 14.9708737,15.3333333 14.5239028,15.3333333 L10.7864544,15.3333333 L10.7864544,9.6535917\n       L12.6928815,9.6535917 L12.9783419,7.44009561 L10.7864544,7.44009561 L10.7864544,6.02691821\n       C10.7864544,5.38606001 10.9644119,4.94933629 11.8833941,4.94933629 L13.0555118,4.94882411 L13.0555118,2.96905544\n       C12.8527985,2.94208033 12.1570172,2.88181314 11.3475298,2.88181314 C9.65758823,2.88181314 8.50060855,3.91335524 8.50060855,5.8077027 L8.50060855,7.44009561\n       L6.58928722,7.44009561 L6.58928722,9.6535917 L8.50060855,9.6535917 L8.50060855,15.3333333 L8.50060855,15.3333333 Z",viewBox:"0 0 16 16",width:"32px",height:"32px"},soundcloud:{path:"M9,21.2408707 C9,21.489089 9.08772761,21.676769 9.26314565,21.8039871 C9.43858228,21.9311861 9.62610517,21.9761607 9.8257329,21.9389489\n      C10.0132558,21.901718 10.1448286,21.8334552 10.22047,21.7341793 C10.2960741,21.6349034 10.3338948,21.4704545 10.3338948,21.2408707 L10.3338948,18.541635\n      C10.3338948,18.349263 10.2688708,18.1863781 10.1388041,18.0529803C10.008756,17.9195634 9.84996119,17.8528645 9.66241971,17.8528645\n      C9.48093995,17.8528645 9.32517603,17.9195634 9.19510933,18.0529803 C9.06504264,18.1863781 9,18.349263 9,18.541635 L9,21.2408707 L9,21.2408707 Z\n      M11.0870172,22.3950266 C11.0870172,22.5750011 11.149029,22.7099438 11.273034,22.7999311 C11.3970575,22.8899183 11.5558523,22.9348929 11.7494183,22.9348929\n      C11.9490461,22.9348929 12.1108531,22.8898992 12.2348767,22.7999311 C12.3588817,22.7099629 12.4208934,22.5750011 12.4208934,22.3950266\n      L12.4208934,16.1030152 C12.4208934,15.916861 12.3558508,15.7570659 12.2258027,15.6236682 C12.095736,15.4902704 11.9369412,15.4235524 11.7494183,15.4235524\n      C11.5679386,15.4235524 11.4121561,15.4902704 11.282108,15.6236682 C11.1520413,15.757085 11.0870172,15.916861 11.0870172,16.1030152 L11.0870172,22.3950266 L11.0870172,22.3950266 Z\n      M13.1649604,22.6928733 C13.1649604,22.8728287 13.2284784,23.0077905 13.3555142,23.0977778 C13.48255,23.1877459 13.6458818,23.2327395 13.8455281,23.2327395\n      C14.0390941,23.2327395 14.1978889,23.1877459 14.3218939,23.0977778 C14.4459175,23.0077905 14.5079293,22.8728287 14.5079293,22.6928733 L14.5079293,16.9500167\n      C14.5079293,16.7576638 14.4428866,16.5932148 14.3128385,16.4567081 C14.1827718,16.3202014 14.0270079,16.2519576 13.8455281,16.2519576\n      C13.6579867,16.2519576 13.4976857,16.3202014 13.3646068,16.4567081 C13.2315278,16.5932148 13.164979,16.7576638 13.164979,16.9500167\n      L13.164979,22.6928733 L13.1649604,22.6928733 Z M15.2519777,22.7207965 C15.2519777,23.0620919 15.4757965,23.2327395 15.9234528,23.2327395\n      C16.3710904,23.2327395 16.5949093,23.0620919 16.5949093,22.7207965 L16.5949093,13.4130872 C16.5949093,12.8918555 16.4406515,12.5971177 16.1321359,12.5288548\n      C15.9325082,12.4792073 15.7358927,12.5381625 15.5423267,12.7057013 C15.3487421,12.8732401 15.2519591,13.1090227 15.2519591,13.4130872 L15.2519591,22.7207965 L15.2519777,22.7207965 Z\n      M17.3753094,22.99072 L17.3753094,12.8639324 C17.3753094,12.5412715 17.4690616,12.3489185 17.6566031,12.2868544\n      C18.0619016,12.1875785 18.464188,12.137931 18.8634434,12.137931 C19.7889716,12.137931 20.6510191,12.3613161 21.4495114,12.8080861\n      C22.2480223,13.2548561 22.8938002,13.8645111 23.3868078,14.637051 C23.879834,15.4096099 24.1656646,16.2612462 24.2442997,17.1920362\n      C24.6133023,17.0306963 25.0064961,16.9500358 25.4238995,16.9500358 C26.2708112,16.9500358 26.9952241,17.2571902 27.5971196,17.871499\n      C28.1990337,18.4858269 28.5,19.2242258 28.5,20.0867529 C28.5,20.9554788 28.1990337,21.6969866 27.5971196,22.3112954\n      C26.9952241,22.9256042 26.2738421,23.2327586 25.4329735,23.2327586 L17.538604,23.2234509 C17.4841415,23.2048355 17.4433086,23.1706945 17.4160866,23.1210661\n      C17.3888646,23.0714377 17.3753094,23.0279509 17.3753094,22.99072 L17.3753094,22.99072 L17.3753094,22.99072 Z",viewBox:"0 0 36 32",width:"32px",height:"32px"},spotify:{path:"M 16.50054,9.863523 C 13.12251,7.774764 7.47486,7.554894 4.25517,8.599274 3.72735,8.764176 3.19954,8.434372 3.04119,7.939666 2.88284,7.389992 3.19954,6.840319 3.67457,6.675416 7.42208,5.521102 13.59754,5.740971 17.50339,8.159535 c 0.47504,0.274837 0.63338,0.934445 0.36948,1.429151 -0.26391,0.384772 -0.89729,0.549674 -1.37233,0.274837 m 0.36387,1.794876\n      C 16.59585,11.977956 16.11245,12.11491 15.73647,11.886654 12.83605,10.380168 8.43171,9.923658 5.04789,10.836679 4.6182,10.927979 4.1348,10.745379 4.02737,10.380168 3.91995,10.01496 4.1348,9.6041 4.56449,9.512798\n      c 3.92093,-1.004324 8.75497,-0.502162 12.08507,1.232579 0.32227,0.136953 0.48341,0.593464 0.21485,0.913022 m -1.94792,4.004193\n      c -0.20948,0.332912 -0.57607,0.443882 -0.8903,0.221941 -2.4614,-1.609075 -5.55125,-1.941987 -9.21718,-1.054221 -0.36659,0.11097 -0.68081,-0.166456 -0.78555,-0.499368 -0.10474,-0.388398 0.15711,-0.72131 0.47133,-0.83228 3.98015,-0.943251 7.43659,-0.554853 10.15985,1.220677 0.36659,0.166456 0.41896,0.610339 0.26185,0.943251 M 10.5,0\n      C 4.725,0 0,4.725 0,10.5 0,16.275 4.725,21 10.5,21 16.275,21 21,16.275 21,10.5 21,4.725 16.3275,0 10.5,0",viewBox:"0 0 21 21",width:"32px",height:"32px"},instagram:{path:"m 9.000018,0 c 2.444235,0 2.750725,0.01036 3.71067,0.05416 0.957946,0.043692 1.612188,0.1958475 2.184654,0.4183463 0.591829,0.2299654 1.093738,0.5377057 1.59411,1.0380417 0.500336,0.500372 0.808076,1.00228 1.038077,1.59411 0.222464,0.572466 0.374619,1.226708 0.418311,2.184654\n      C 17.98964,6.249257 18,6.555747 18,9.000018 c 0,2.444235 -0.01036,2.750725 -0.05416,3.71067 -0.04369,0.957946 -0.195847,1.612188 -0.418311,2.184654 -0.230001,0.591829 -0.537741,1.093738 -1.038077,1.59411 -0.500372,0.500336 -1.002281,0.808076 -1.59411,1.038077 -0.572466,0.222464 -1.226708,0.374619 -2.184654,0.418311\n      C 11.750743,17.98964 11.444253,18 9.000018,18 6.555747,18 6.249257,17.98964 5.289312,17.94584 4.331366,17.902148 3.677124,17.749993 3.104658,17.527529 2.512828,17.297528 2.01092,16.989788 1.510548,16.489452 1.010212,15.98908 0.7024716,15.487171 0.4725062,14.895342 0.2500074,14.322876 0.0978523,13.668634 0.0541599,12.710688 0.0103604,11.750743 0,11.444253 0,9.000018 0,6.555747 0.01036,6.249257 0.05416,5.289312 0.097852,4.331366 0.2500075,3.677124 0.4725063,3.104658 0.7024717,2.512828 1.010212,2.01092 1.510548,1.510548 2.01092,1.010212 2.512828,0.7024716 3.104658,0.4725062 3.677124,0.2500074 4.331366,0.0978523 5.289312,0.0541599 6.249257,0.0103604 6.555747,0 9.000018,0 Z\n      m 0.5,2 C 7.057292,2 6.767939,2.0093 5.803282,2.05335 4.911327,2.09402 4.426929,2.243056 4.104566,2.368341 3.677545,2.534298 3.372794,2.732539 3.052683,3.052687 2.732535,3.372798 2.534294,3.677549 2.368337,4.10457 2.243052,4.426933 2.094018,4.911331 2.053346,5.803286 2.009333,6.767939 2,7.057292 2,9.500018\n      c 0,2.44269 0.0093,2.732043 0.05335,3.6967 0.04067,0.891955 0.189706,1.376353 0.314991,1.698716 0.165957,0.427021 0.364234,0.731772 0.684346,1.051883 0.320111,0.320148 0.624862,0.518389 1.051883,0.684346 0.322363,0.125285 0.806761,0.274319 1.698716,0.314991\n      C 6.76783,16.990667 7.05711,17 9.500018,17\n      c 2.442871,0 2.732188,-0.0093 3.6967,-0.05335 0.891955,-0.04067 1.376353,-0.189706 1.698716,-0.314991 0.427021,-0.165957 0.731772,-0.364198 1.051883,-0.684346 0.320148,-0.320111 0.518389,-0.624862 0.684346,-1.051883 0.125285,-0.322363 0.274319,-0.806761 0.314991,-1.698716\n      C 16.990667,12.232061 17,11.942708 17,9.500018 17,7.057292 16.9907,6.767939 16.94665,5.803282 16.90598,4.911327 16.756944,4.426929 16.631659,4.104566 16.465706,3.677545 16.267465,3.372794 15.947317,3.052683 15.627206,2.732535 15.322455,2.534294 14.895434,2.368337 14.573071,2.243052 14.088673,2.094018 13.196718,2.053346 12.232061,2.009333 11.942708,2 9.500018,2 Z\n      M 8.500017,4 C 10.985297,4 13,6.014703 13,8.500017 13,10.985297 10.985297,13 8.500017,13 6.014703,13 4,10.985297 4,8.500017 4,6.014703 6.014703,4 8.500017,4 Z\n      m 0.500001,8 C 10.656862,12 12,10.656862 12,9.000018 12,7.343138 10.656862,6 9.000018,6 7.343138,6 6,7.343138 6,9.000018 6,10.656862 7.343138,12 9.000018,12 Z\n      M 15,4.000016 C 15,4.552306 14.552273,5 13.999983,5 13.447727,5 13,4.552306 13,4.000016 13,3.447727 13.447727,3 13.999983,3 14.552273,3 15,3.447727 15,4.000016 Z",viewBox:"0 0 18 18",width:"32px",height:"32px"}},PlatformIcon_Icon=styled_components_browser_esm.c.svg`
  > path {
    fill: ${({color:color})=>color};
  }
`;var PlatformIcon_ref=react_default.a.createElement("div",null);const PlatformIcon=({platform:platform="youtube",color:color="red"})=>{if(platform in platforms){const _platforms$platform=platforms[platform],{path:path}=_platforms$platform,rest=_objectWithoutProperties(_platforms$platform,["path"]);return react_default.a.createElement(PlatformIcon_Icon,PlatformIcon_extends({},rest,{color:color}),react_default.a.createElement("path",{d:path}))}return PlatformIcon_ref};PlatformIcon.__docgenInfo={description:"",methods:[],displayName:"PlatformIcon",props:{platform:{defaultValue:{value:"'youtube'",computed:!1},required:!1},color:{defaultValue:{value:"'red'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/PlatformIcon.jsx"]={name:"PlatformIcon",docgenInfo:PlatformIcon.__docgenInfo,path:"src/components/icons/PlatformIcon.jsx"});const Presskit_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Presskit_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Presskit_getDimensionsCss()};
`,Presskit_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",fillRule:"nonzero",d:"M10.553.106a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 0-1.788l10-5zM11 2.118L3.236 6 11 9.882 18.764 6 11 2.118zm9.553 12.988a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 .894-1.788L11 19.882l9.553-4.776zm0-5a1 1 0 1 1 .894 1.788l-10 5a1 1 0 0 1-.894 0l-10-5a1 1 0 0 1 .894-1.788L11 14.882l9.553-4.776z"}))],viewBox:"0 0 22 22"};var Presskit=Object.assign(Presskit_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Presskit_getDimensionsCss,defaultProps:Presskit_defaultProps,displayName:"Presskit"});const Publish_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Publish_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Publish_getDimensionsCss()};
`,Publish_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#6F717D",fillRule:"nonzero",d:"M11.545.162l10 6.5A1 1 0 0 1 22 7.5v7a1 1 0 0 1-.455.838l-10 6.5a1 1 0 0 1-1.09 0l-10-6.5A1 1 0 0 1 0 14.5v-7a1 1 0 0 1 .455-.838l10-6.5a1 1 0 0 1 1.09 0zM11 2.192l-9 5.85v5.915l9 5.85 9-5.85V8.043l-9-5.85zm0 11.087l9.427-6.598a1 1 0 0 1 1.146 1.638l-10 7a1 1 0 0 1-1.146 0l-10-7a1 1 0 1 1 1.146-1.638L11 13.279zm0-4.558l-9.427 6.598a1 1 0 0 1-1.146-1.638l10-7a1 1 0 0 1 1.146 0l10 7a1 1 0 1 1-1.146 1.638L11 8.721zM12 21a1 1 0 0 1-2 0v-6.5a1 1 0 1 1 2 0V21zM10 1a1 1 0 1 1 2 0v6.5a1 1 0 0 1-2 0V1z"}))],viewBox:"0 0 22 22"};Object.assign(Publish_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Publish_getDimensionsCss,defaultProps:Publish_defaultProps,displayName:"Publish"});const Snapchat_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"21"}px;
`,Snapchat_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Snapchat_getDimensionsCss()};
`,Snapchat_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-1-2h24v24H-1z"}),react_default.a.createElement("path",{fill:"#5F5F5F",d:"M21.657 15.14c-2.16-.561-3.815-1.858-4.654-3.64 0-.001.002-.006.005-.009h.001l2.011-1.564c.459-.358.643-.968.46-1.52a1.382 1.382 0 0 0-1.559-.916l-1.407.252c.387-2.354-.074-4.443-1.297-5.884C14.2.66 12.702 0 11 0 9.3 0 7.8.66 6.783 1.86 5.559 3.302 5.099 5.392 5.49 7.76c-.601-.108-1.403-.26-1.403-.26a1.37 1.37 0 0 0-1.569.91c-.183.55.001 1.158.46 1.514l2.02 1.565c-.842 1.793-2.494 3.09-4.656 3.65a.46.46 0 0 0-.342.478c.029.38.172.682.425.898.521.444 1.333.373 2.048.312.302-.026.754-.066.835-.04.348.436.358 1.084.358 1.088 0 .254.205.459.458.459H5.96c.505 0 1.147.354 1.828.73.937.517 1.999 1.103 3.213 1.103 1.215 0 2.277-.586 3.213-1.103.68-.376 1.323-.73 1.828-.73h1.834a.46.46 0 0 0 .458-.457c0-.006.01-.654.32-1.057.119-.059.573-.018.873.007.714.061 1.527.132 2.047-.312.254-.216.397-.518.426-.898a.458.458 0 0 0-.342-.477"}))],viewBox:"0 0 22 21"};Object.assign(Snapchat_Image,{getDimensions:()=>({height:"21",width:"22"}),getDimensionsCss:Snapchat_getDimensionsCss,defaultProps:Snapchat_defaultProps,displayName:"Snapchat"});const Soundcloud_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"12"}px;
`,Soundcloud_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Soundcloud_getDimensionsCss()};
`,Soundcloud_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M17.415 5.813a3.172 3.172 0 0 1 1.377-.313C20.56 5.5 22 6.94 22 8.708c0 1.77-1.44 3.209-3.208 3.209h-7.334a.459.459 0 0 1-.458-.459v-11c0-.253.205-.458.458-.458a5.966 5.966 0 0 1 5.957 5.813zm-16.79.604c.345 0 .625.205.625.458v3.667c0 .253-.28.458-.625.458S0 10.795 0 10.542V6.875c0-.253.28-.458.625-.458zm2.75-2.75c.345 0 .625.205.625.458v7.333c0 .253-.28.459-.625.459s-.625-.206-.625-.459V4.125c0-.253.28-.458.625-.458zm2.75.916c.345 0 .625.206.625.459v6.416c0 .253-.28.459-.625.459s-.625-.206-.625-.459V5.042c0-.253.28-.459.625-.459zM8.875.917c.345 0 .625.205.625.458v10.083c0 .253-.28.459-.625.459s-.625-.206-.625-.459V1.375c0-.253.28-.458.625-.458z"}))],viewBox:"0 0 22 12"};var Soundcloud=Object.assign(Soundcloud_Image,{getDimensions:()=>({height:"12",width:"22"}),getDimensionsCss:Soundcloud_getDimensionsCss,defaultProps:Soundcloud_defaultProps,displayName:"Soundcloud"});const Spotify_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"22"}px;
`,Spotify_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Spotify_getDimensionsCss()};
`,Spotify_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M0 10.987A10.97 10.97 0 0 1 11 0a10.97 10.97 0 0 1 10.994 11.034c-.019 6.065-4.9 10.94-11 10.966-6.102-.03-11-4.918-10.994-11.013zm6.787 2.382c-.563.088-1.124.196-1.68.322a.689.689 0 0 0-.375 1.113c.21.259.484.299.8.228 1.367-.309 2.749-.481 4.154-.44.81.024 1.61.116 2.399.297 1.064.246 2.065.65 3.002 1.214.353.212.776.106.975-.228a.697.697 0 0 0-.261-.978 14.406 14.406 0 0 0-.908-.496c-1.76-.864-3.635-1.216-5.68-1.227-.75.007-1.591.064-2.426.195zm2.475-3.786c-.978.004-1.857.053-2.723.215a20.06 20.06 0 0 0-1.584.364c-.162.043-.334.077-.474.173a.861.861 0 0 0-.362.783.902.902 0 0 0 .364.643c.23.164.524.192.79.113a12.36 12.36 0 0 1 2.954-.505c.656-.03 1.317-.02 1.972.022.614.04 1.228.116 1.833.228 1.486.276 2.898.768 4.197 1.558a.8.8 0 0 0 .707.071c.362-.128.568-.39.598-.768a.814.814 0 0 0-.428-.809 15.654 15.654 0 0 0-1.15-.62c-2.149-1.012-4.426-1.447-6.694-1.468zm2.579-1.55c.804.073 1.595.23 2.377.427 1.158.292 2.27.701 3.302 1.308.18.106.38.16.587.138.497-.05.858-.375.959-.848.091-.43-.118-.873-.531-1.116a12.946 12.946 0 0 0-2.118-.99c-1.667-.61-3.394-.945-5.158-1.079-.8-.06-1.605-.06-2.407-.063a16.276 16.276 0 0 0-3.136.302c-.542.104-1.08.236-1.611.384-.48.134-.743.557-.723 1.087.016.426.35.811.8.921.272.067.514-.018.786-.085 1.568-.385 2.947-.559 4.43-.53.2-.005 1.63.072 2.443.145z"}))],viewBox:"0 0 22 22"};var Spotify=Object.assign(Spotify_Image,{getDimensions:()=>({height:"22",width:"22"}),getDimensionsCss:Spotify_getDimensionsCss,defaultProps:Spotify_defaultProps,displayName:"Spotify"});const Themes_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"25"}px;
  height: ${"20"}px;
`,Themes_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Themes_getDimensionsCss()};
`,Themes_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#27E200",fillRule:"nonzero",d:"M22.5 16.148h-9.75v2.314h3.75c.413 0 .75.346.75.77a.762.762 0 0 1-.75.768h-9a.762.762 0 0 1-.75-.769c0-.423.338-.769.75-.769h3.75v-2.314H1.5c-.825 0-1.5-.692-1.5-1.538V1.538C0 .692.675 0 1.5 0h21c.825 0 1.5.692 1.5 1.538V14.61c0 .846-.675 1.538-1.5 1.538zm0-14.61h-21V14.61h21V1.538z"}))],viewBox:"0 0 24 20"};Object.assign(Themes_Image,{getDimensions:()=>({height:"20",width:"25"}),getDimensionsCss:Themes_getDimensionsCss,defaultProps:Themes_defaultProps,displayName:"Themes"});const Trash_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"20"}px;
  height: ${"22"}px;
`,Trash_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Trash_getDimensionsCss()};
`,Trash_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-2-1h24v24H-2z"}),react_default.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M15 4h4a1 1 0 1 1 0 2h-1v13c0 1.886-1.114 3-3 3H5c-1.886 0-3-1.114-3-3V6H1a1 1 0 1 1 0-2h4V3c0-.818.3-1.543.879-2.121A2.926 2.926 0 0 1 8 0h4c1.886 0 3 1.114 3 3v1zm-2 0V3c0-.781-.219-1-1-1H8a.93.93 0 0 0-.707.293A.93.93 0 0 0 7 3v1h6zm3 2H4v13c0 .781.219 1 1 1h10c.781 0 1-.219 1-1V6zm-9 4a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6zm4 0a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0v-6z"}))],viewBox:"0 0 20 22"};Object.assign(Trash_Image,{getDimensions:()=>({height:"22",width:"20"}),getDimensionsCss:Trash_getDimensionsCss,defaultProps:Trash_defaultProps,displayName:"Trash"});const Twitter_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"18"}px;
`,Twitter_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Twitter_getDimensionsCss()};
`,Twitter_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M22 .074a10.83 10.83 0 0 1-3.14 1.53C17.49.029 15.831-.386 13.882.358c-1.95.744-2.91 2.16-2.882 4.246v1c-3.81.098-6.81-1.412-9-4.53 0 0-4 9 5 13-2.114 1.435-4.447 2.101-7 2 9 5 20 0 20-11.5 0-.28-.028-.556-.08-.83A7.576 7.576 0 0 0 22 .074z"}))],viewBox:"0 0 22 18"};var Twitter=Object.assign(Twitter_Image,{getDimensions:()=>({height:"18",width:"22"}),getDimensionsCss:Twitter_getDimensionsCss,defaultProps:Twitter_defaultProps,displayName:"Twitter"});const X_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"14"}px;
  height: ${"14"}px;
`,X_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:X_getDimensionsCss()};
`,X_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{d:"M-5-5h24v24H-5z"}),react_default.a.createElement("path",{fill:"#000",fillRule:"nonzero",d:"M8.414 7l5.293 5.293a1 1 0 1 1-1.414 1.414L7 8.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L5.586 7 .293 1.707A1 1 0 0 1 1.707.293L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414L8.414 7z"}))],viewBox:"0 0 14 14"};Object.assign(X_Image,{getDimensions:()=>({height:"14",width:"14"}),getDimensionsCss:X_getDimensionsCss,defaultProps:X_defaultProps,displayName:"X"});const Youtube_getDimensionsCss=()=>styled_components_browser_esm.b`
  width: ${"22"}px;
  height: ${"17"}px;
`,Youtube_Image=styled_components_browser_esm.c.svg`
  ${({noStyles:noStyles})=>noStyles?null:Youtube_getDimensionsCss()};
`,Youtube_defaultProps={children:[react_default.a.createElement("g",{fill:"none",fillRule:"evenodd",key:"key-0"},react_default.a.createElement("path",{fill:"#5F5F5F",d:"M9.167 11.534V4.963l5.11 3.285-5.11 3.286zM19.189.618C20.793.818 22 2.187 22 3.8v8.895a3.214 3.214 0 0 1-2.81 3.183l-1.741.217a52.141 52.141 0 0 1-12.898 0l-1.74-.217A3.214 3.214 0 0 1 0 12.696V3.8A3.213 3.213 0 0 1 2.81.618L4.552.399A52.256 52.256 0 0 1 17.45.4l1.74.219z"}))],viewBox:"0 0 22 17"};const PlatformIcon_platforms={bio:Bio,presskit:Presskit,youtube:Object.assign(Youtube_Image,{getDimensions:()=>({height:"17",width:"22"}),getDimensionsCss:Youtube_getDimensionsCss,defaultProps:Youtube_defaultProps,displayName:"Youtube"}),facebook:Facebook,soundcloud:Soundcloud,spotify:Spotify,instagram:Instagram,mixcloud:Mixcloud,twitter:Twitter};var components_PlatformIcon_ref=react_default.a.createElement("div",null);const PlatformIcon_PlatformIcon=({platform:platform})=>{if(platform in PlatformIcon_platforms){const Icon=PlatformIcon_platforms[platform];return react_default.a.createElement(Icon,null)}return components_PlatformIcon_ref};var components_PlatformIcon=PlatformIcon_PlatformIcon;PlatformIcon_PlatformIcon.__docgenInfo={description:"",methods:[],displayName:"PlatformIcon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PlatformIcon.jsx"]={name:"PlatformIcon",docgenInfo:PlatformIcon_PlatformIcon.__docgenInfo,path:"src/components/PlatformIcon.jsx"});var components_PlatformIconWrapper=styled_components_browser_esm.c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 32px;
  height: 32px;
  background-color: ${({active:active})=>active?"#27e200":"#000000"};
  border-radius: 6px;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;

  > svg {
    height: 18px;
    width: 18px;
  }

  g > path {
    fill: ${({color:color})=>color||white};
  }
`;const desktop_margin=8,desktop_x=288,desktop_y=184,mobile_margin=10,mobile_x=192,mobile_y=122,MovingFlexRowContainer=styled_components_browser_esm.c.div`
  display: flex;
  flex-flow: row;
  max-width: 100%;

  position: relative;
  left: ${({id:id})=>`${desktop_x/2-id*(desktop_x+2*desktop_margin)}px`};

  @media (max-width: 600px) {
    left: ${({id:id})=>`${mobile_x/2-id*(mobile_x+2*mobile_margin)}px`};
  }
  transition: all 0.5s ease-out;
`,Slider=props=>{const{id:id,slides:slides}=props;return react_default.a.createElement(MovingFlexRowContainer,{id:id},slides.map(([SlideContainer,Slide,componentProps],key)=>{const ResponsiveSlide=Object(styled_components_browser_esm.c)(Slide)`
          padding: 10px;
          margin: 0 ${desktop_margin}px;
          width: ${desktop_x}px;
          height: ${desktop_y}px;

          @media (max-width: 600px) {
            margin: 0 ${mobile_margin}px;
            width: ${mobile_x}px;
            height: ${mobile_y}px;
          }
        `;return react_default.a.createElement(SlideContainer,{key:key},react_default.a.createElement(ResponsiveSlide,componentProps))}))};Slider.displayName="Slider";function SocialLink_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function SocialLink_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}Slider.__docgenInfo={description:"",methods:[],displayName:"Slider"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Slider.jsx"]={name:"Slider",docgenInfo:Slider.__docgenInfo,path:"src/components/Slider.jsx"});const LinkBox=styled_components_browser_esm.c.div`
  margin: 10px;
  width: 32px;
  height: 32px;
`,Link=styled_components_browser_esm.c.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
`,SocialLink=_ref=>{let{children:children}=_ref,rest=SocialLink_objectWithoutProperties(_ref,["children"]);return react_default.a.createElement(LinkBox,null,react_default.a.createElement(Link,rest,children))};SocialLink.displayName="SocialLink";var components_SocialLink=SocialLink;SocialLink.__docgenInfo={description:"",methods:[],displayName:"SocialLink"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SocialLink.jsx"]={name:"SocialLink",docgenInfo:SocialLink.__docgenInfo,path:"src/components/SocialLink.jsx"});function linkGenerator_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function linkGenerator_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const LinkMapper=_ref=>{let{href:href}=_ref,props=linkGenerator_objectWithoutProperties(_ref,["href"]);return react_default.a.createElement(components_SocialLink,{href:href},react_default.a.createElement(components_PlatformIconWrapper,null,react_default.a.createElement(components_PlatformIcon,props)))};LinkMapper.displayName="LinkMapper";__webpack_require__.d(__webpack_exports__,"k",function(){return global}),__webpack_require__.d(__webpack_exports__,"a",function(){return components_AddButton}),__webpack_require__.d(__webpack_exports__,"b",function(){return components_AnchorButton}),__webpack_require__.d(__webpack_exports__,"c",function(){return components_Background}),__webpack_require__.d(__webpack_exports__,"d",function(){return components_BottomBar}),__webpack_require__.d(__webpack_exports__,"e",function(){return Button}),__webpack_require__.d(__webpack_exports__,"f",function(){return components_ButtonContainer}),__webpack_require__.d(__webpack_exports__,"g",function(){return components_CenterContainer}),__webpack_require__.d(__webpack_exports__,"h",function(){return components_ColoredTextContainer}),__webpack_require__.d(__webpack_exports__,"i",function(){return components_ContentContainer}),__webpack_require__.d(__webpack_exports__,"j",function(){return components_Gigs}),__webpack_require__.d(__webpack_exports__,"l",function(){return components_Label}),__webpack_require__.d(__webpack_exports__,"m",function(){return components_Profile}),__webpack_require__.d(__webpack_exports__,"n",function(){return gigs_getGigs})},226:function(module,exports,__webpack_require__){__webpack_require__(227),__webpack_require__(322),module.exports=__webpack_require__(323)},323:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(16);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_src_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_index__WEBPACK_IMPORTED_MODULE_3__.k,null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.addDecorator)(story=>react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,story(),_ref));const req=__webpack_require__(407);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.configure)(function loadStories(){req.keys().forEach(filename=>req(filename))},module)}.call(this,__webpack_require__(33)(module))},407:function(module,exports,__webpack_require__){var map={"./bottombar.stories.js":408,"./button.stories.js":484,"./container.stories.js":485,"./gigs.stories.js":498,"./input.stories.js":499,"./profile.stories.js":500,"./text.stories.js":501};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=407},408:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_src_index_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(20),__webpack_require__(2));const HighButton=Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.c)(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e)`
  height: 4em;
`;var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,"Text 1 2 3"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.f,null,"Text 1 2 3"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Molecule/Bottombar/text",module).add("Bottombar with text",()=>_ref).add("Bottombar with wrapped text",()=>_ref2);var _ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next")),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Molecule/Bottombar/1button",module).add("Bottombar with 1 button",()=>_ref3).add("Bottombar with wrapped 1 button",()=>_ref4);var _ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next")),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Molecule/Bottombar/2buttons",module).add("Bottombar with 2 buttons",()=>_ref5).add("Bottombar with 2 wrapped buttons",()=>_ref6);var _ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HighButton,{secondary:!0,shadow:!0},"Preview")),_ref8=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.d,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.f,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,{secondary:!0},"Previous"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_4__.e,null,"Next"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HighButton,{secondary:!0,shadow:!0},"Preview")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Molecule/Bottombar/3buttons",module).add("Bottombar with 3 buttons",()=>_ref7).add("Bottombar with 3 wrapped buttons",()=>_ref8)}.call(this,__webpack_require__(33)(module))},484:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(20),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/Button",module).add("primary with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("primary with text and shadow",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("secondary with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("secondary with text and shadow",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{secondary:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"Hello Button")).add("round with text",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",flexFlow:"row",margin:"2em"}},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"S"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{round:!0,shadow:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"M"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"L"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{round:!0,shadow:!0,secondary:!0,onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},"XL"))).add("primary with some emoji",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("clicked")},_ref));var _ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,"Next"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"https://www.onescreener.com"},"Next"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em",null,"Next")," is a great name for an AnchorButton. By the way, you could click here, and try to copy it's text but nothing will happen!"),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{secondary:!0,shadow:!0,href:"https://www.onescreener.com"},"Next"),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AnchorButton",module).add("primary with text",()=>_ref2).add("primary with text and a Link",()=>_ref3).add("secondary with much more text",()=>_ref4).add("secondary with text, a Link and shadow",()=>_ref5).add("primary with some emoji",()=>_ref6);var _ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.a,{href:"#"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Buttons/AddButton",module).add("addButton",()=>_ref7)}.call(this,__webpack_require__(33)(module))},485:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(96),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Left"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Right"),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{shadow:!0,secondary:!0},"Doge"),_ref5=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{shadow:!0},"Much wow"),_ref6=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Left"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Right")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{shadow:!0,secondary:!0},"Doge"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,{shadow:!0},"Much wow")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Center",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs).add("Centered elements",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.g,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},_ref,_ref2,_ref3),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.g,{column:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.boolean)("Column",!1)},_ref4,_ref5))).add("non-centered elements",()=>_ref6);var _ref7=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.i,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Top"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text Lorem ipsum whatever you like to read here it should be reaaaaally long and have ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.b,{href:"#"},"Links")," and such.",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"And also Linebreaks"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.e,null,"Bottom"));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Content",module).add("primary with text",()=>_ref7),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Container/Background",module).add("plain",()=>react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.c,{color:"lightblue",fullscreen:!0},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{width:"100%"}},"Test")))}.call(this,__webpack_require__(33)(module))},498:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(20),__webpack_require__(2)),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{slug:"skrillex",api:"bandsintown",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.n}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{slug:"ARADOShows",api:"gigatools",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.n}),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.j,{slug:"Ray-Douglas",api:"optune",getGigs:_src_index_js__WEBPACK_IMPORTED_MODULE_3__.n});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Organism/Gigs",module).add("Bandsintown",()=>_ref).add("Gigatools",()=>_ref2).add("Optune",()=>_ref3)}.call(this,__webpack_require__(33)(module))},499:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_src_index_js__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(20),__webpack_require__(2)),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.l,null,"Label Text"),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.l,{secondary:!0},"Label Text"),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.l,{key:1,secondary:!0,shadow:!0},"secondary shadow");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Label",module).add("primary with text",()=>_ref).add("secondary with text",()=>_ref2).add("shadow with text",()=>[react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_3__.l,{style:{marginBottom:"2em"},key:0,shadow:!0},"primary shadow"),_ref3])}.call(this,__webpack_require__(33)(module))},500:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_src_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{username:"Dev"}),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.g,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{username:"abcdefghijklmn opqrstuvwxyz",openDefault:!0})),_ref3=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{username:"Username",openDefault:!0}),_ref4=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.m,{username:"Dev",url:"https://interactive-examples.mdn.mozilla.net/media/dino.svg"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Molecule/Profile",module).add("Profile",()=>_ref).add("Profile with a long name",()=>_ref2).add("Profile open",()=>_ref3).add("Profile with a picture",()=>_ref4)}.call(this,__webpack_require__(33)(module))},501:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_src_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),_ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Hello ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://app.optune.me"},"https://app.optune.me")),_ref2=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_index_js__WEBPACK_IMPORTED_MODULE_2__.h,{color:"#efbf00"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Header"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Text"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"Bold")));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Atom/Text",module).add("text",()=>_ref).add("ColoredTextContainer",()=>_ref2)}.call(this,__webpack_require__(33)(module))}},[[226,1,2]]]);
//# sourceMappingURL=main.59adb75a55828c2622d5.bundle.js.map