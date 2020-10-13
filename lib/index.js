import e,{createGlobalStyle as t,css as i,keyframes as n}from"styled-components";import o,{useState as r,Fragment as c,useEffect as l,Component as a,createRef as s}from"react";import d from"prop-types";import m from"simplebar-react";import{useMediaQuery as p}from"react-responsive";import"isomorphic-fetch";import h from"dateformat";import u from"react-player";import g from"react-html-parser";import C from"classnames";const v="(max-width: 736px)",w="(max-width: 480px)",f="(min-width: 736px)",b="#27E200",M="#FFFFFF",E="#0A0F2C",x="#FFFFFF",y=(e=20)=>`linear-gradient(${e}deg, #005AE2 61.46%, rgba(74,144,226,0.5) 100%)`,k="#FFFFFF",z="#D6D3CF",L="#27E200",P="#4F4F4F",S="#FFFFFF";var $=t`
  @font-face {
    font-family: 'CeraPRO-Regular', Helvetica, sans-serif;
    src: url(/fonts/brandon-text-regular.woff2);
  }

  html {
    font-size: 14px;

    @media ${v} {
      font-size: 12px;
    }

    @media ${w} {
      font-size: 10px;
    }
  }

  body {
    min-height: 100%;
    padding: 0;
    margin: 0 auto;
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
    /* define grid layout desktop main mode */
    width: 100%;
    font-family: 'CeraPRO-Regular', Helvetica, sans-serif;
    line-height: normal;
  }

  h1, h2, h3, h4, h5, p, li, ul, i, span, b {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  ol, ul {
    list-style: none;
  }

  #font-picker {
    box-shadow: none;
    
    > button {
      background-color: ${"#FFFFFF"};
      border: 2px solid ${"#DADDE5"};
      border-radius: 2px;
      min-height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.6rem 0.58rem;
    }

    > ul {
      background-color: ${"#FFFFFF"};
    }
  }
`;const H={XS:"8.333%",S:"16.666%",M:"33.333%",L:"50%",XL:"66.666%"},T={XS:"16.666%",S:"33.333%",M:"50%",L:"66.666%",XL:"calc(100% - 2rem)"},R={XS:17,S:34,M:50,L:67,XL:100},V=e.img`
  display: flex;
  object-fit: contain;
  margin: 1rem;
  max-width: unset;
  max-height: unset;

  @media screen and (orientation: portrait) {
    ${({orientation:e,size:t})=>i(["width:",";"],T[t])}
  }

  @media screen and (orientation: landscape) {
    ${({isPreviewMobile:e,orientation:t,size:n})=>e&&i(["width:",";"],T[n])||"LANDSCAPE"===t&&i(["width:",";"],H[n])||i(["height:",";"],H[n])}
  }
`,A=({logo:e,getImageUrl:t,isPreviewMobile:i})=>o.createElement(V,{isPreviewMobile:i,orientation:e.image.orientation,src:t({image:e.image,maxWidth:R[e.size]}),size:e.size}),_=e.div`
  width: 100%;
  height: 100%;
`,O=({url:e})=>{let t,i;return-1!==e.indexOf("open.spotify.com")?(i=e.split("/"),i.length>3&&(i[3]=i[3].replace(i[3],"embed/"+i[3]),t=i.join("/"))):-1!==e.indexOf("spotify:")&&(i=e.split(":"),i.length>2&&(i[1]=`embed/${i[1]}/`,t=`https://open.spotify.com/${i[1]}${i[2]}`)),t?o.createElement(_,null,o.createElement("iframe",{src:t,width:"100%",height:"100%",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})):o.createElement(o.Fragment,null)},B=e.div`
  width: 100%;
  height: 100%;
`,F=({url:e})=>{let t,i;return-1===e.indexOf("music.apple.com")?o.createElement(o.Fragment,null):(i=e.split("/"),i[2]=i[2].replace(i[2],"embed."+i[2]),-1===i.indexOf("?app=music")&&i.push("?app=music"),t=i.join("/"),o.createElement(B,null,o.createElement("iframe",{src:t,width:"100%",height:"100%",frameBorder:"0",allowtransparency:"true",allow:"autoplay *; encrypted-media *;",sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"})))},I=e.div`
  max-width: ${({isSquare:e,isSidePreview:t})=>(e&&t?"200px":e&&"700px")||"100%"};
  max-height: ${({isSquare:e,isSidePreview:t})=>(e&&t?"200px":e&&"700px")||"100%"};
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`,D=({url:e,format:t="CLASSIC",autoplay:i=!1,theme:n="DARK",color:r="ff0000",isSidePreview:c})=>{let l,a,s,d;const m=["artist","playlist","track","album","podcast"];if(!(e=>{let t=e.split("/"),i=[];return t.forEach((e,t)=>""===e&&i.push(t)),(2!==i.length||i[i.length-1]===t.length-1)&&!(i.length>2)})(e))return null;if(-1===e.indexOf("deezer.com/"))return null;try{if(a=e.split("/"),typeIndex=a.findIndex(e=>(e=>m.some(t=>t===e))(e)),s=a[typeIndex],!s)return null;d=-1!==e.indexOf("?utm_")?a[typeIndex+1].slice(0,a[typeIndex+1].indexOf("?")):a[typeIndex+1],"track"===s&&(s="tracks"),"artist"===s&&(s="radio",d="artist-"+d),l=`https://www.deezer.com/plugins/player?format=${t.toLowerCase()}&playlist=true&autoplay=${i}&color=${r}&width=100%&height=100%&layout=${n.toLowerCase()}&type=${s}&id=${d}&app_id=1`}catch(e){return null}return o.createElement(I,{isSquare:"SQUARE"===t,isSidePreview:c},o.createElement("iframe",{src:l,width:"100%",height:"100%",frameBorder:"0",allowtransparency:"true",scrolling:"no"}))},Z=e.div`
  position: absolute;
  display: block;
  opacity: ${({open:e})=>e?1:.3};
  bottom: 2em;
  right: ${({open:e})=>e?0:"-100px"};
  width: 80px;
  cursor: pointer;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: center;
  z-index: 5;
  transition: right 0.25s, opacity 0.3s;

  &.open {
    opacity: 1;
    right: 0px;
  }
`,N=e.div`
  font-size: 0.7em;
  position: absolute;
  bottom: 15em;
  right: -2px;
  background-color: #808080;
  color: #FFFFFF;
  border: none;
  opacity: 0.6;
  padding: 0.1em 0.5em 5px 0.5em;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  transition: opacity 0.3s;
  z-index: 3;

  &:hover {
    opacity: 1;
  }
`,j=e.div`
  position: absolute;
  top: 25%;
  right: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  max-width: 90px;
  z-index: 9999;

  h2,
  a {
    &.transparent {
      opacity: 0.3;
      color: white;
    }
  }

  img {
    margin-bottom: 1rem;

    @media ${w} {
      margin-bottom: 0.5rem;
    }
    ${({isPreviewMobile:e})=>e&&i(["margin-bottom:0.5rem;"])}
  }

  @media ${w} {
    max-width: 50px;
  }

  ${({isPreviewMobile:e})=>e&&i(["max-width:50px;"])}
`,W=e.h2`
  margin-top: ${({isFirst:e})=>e?"":"1rem"};
  margin-bottom: 1rem;
  border-bottom: 1px solid #fff;
  display: block;
  text-align: center;
  border-bottom: 1px solid #fff;
  font-weight: 300;
  font-size: 1rem;
  text-transform: uppercase;

  @media ${w} {
    font-size: 0.8rem;
  }

  ${({isPreviewMobile:e})=>e&&i(["font-size:0.8rem;"])}
`,U=e.a`
  display: block;
  width: ${({bigger:e})=>e?"120%":"100%"};

  &.transparent {
    transition: opacity 0.3s, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`,G=e.img`
  margin-bottom: 1rem;
  width: 100%;
`,q=[{href:"https://exil.cl",src:"https://res.cloudinary.com/optune-me/image/upload/v1588226253/onescreener-v2/prod/ray-douglas/custom/exil_logo.jpg",alt:"Exil, Zürich"},{href:"https://www.mascotte.ch/",src:"https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,h_53,q_auto:best/v1588226156/onescreener-v2/prod/ray-douglas/custom/Mascotte.png",alt:"Mascotte, Zürich"},{href:"https://www.nachtseminar.ch/",src:"https://res.cloudinary.com/optune-me/image/upload/v1588226155/onescreener-v2/prod/ray-douglas/custom/NachtSeminarLogo.svg",alt:"Nachtseminar"},{href:"https://www.plaza-zurich.ch/",src:"https://res.cloudinary.com/optune-me/image/upload/v1588226253/onescreener-v2/prod/ray-douglas/custom/Plaza_Schwarz_ZH.png",alt:"Plaza Club, Zürich",bigger:!0},{href:"https://www.trischli.ch/",src:"https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,q_auto:best,w_100/v1588226166/onescreener-v2/prod/ray-douglas/custom/trischli_white.png",alt:"Trischli Club, St. Gallen"},{href:"http://www.useit-party.ch/",src:"https://res.cloudinary.com/optune-me/image/upload/c_scale,f_auto,q_auto:best,w_100/v1588226157/onescreener-v2/prod/ray-douglas/custom/use_it.png",alt:"useit - Kaufleuten, Zürich"}],K={"sponsors-iouripodladtchikov":()=>{const[e,t]=r(!1);return o.createElement(c,null,o.createElement(N,{onMouseEnter:()=>t(!0),onClick:()=>t(!0)},"supported by"),o.createElement(Z,{open:e,onMouseLeave:()=>t(!1)},o.createElement("div",{className:"sponsors-inner"},o.createElement("a",{title:"Audi",href:"https://www.audi.com/",target:"_blank",style:{display:"inline-block",marginBottom:"2em",marginTop:"1.5em"}},o.createElement("img",{alt:"Audi",width:"100%",src:"https://daks2k3a4ib2z.cloudfront.net/58907b372ec3cb834efe0854/594cd98a8372272ab27971b5_Rings_1C_Solid-bl_Audi.png"})),o.createElement("a",{title:"Monster Energy",href:"https://www.monsterenergy.com/",target:"_blank",style:{display:"inline-block",marginBottom:"2em"}},o.createElement("img",{alt:"Monster Energy",width:"100%",src:"http://res.cloudinary.com/optune-me/image/upload/c_scale,e_grayscale,w_180/v1464265981/custom/iouripodladtchikov.ch/MonsterLogo2-icon.png"})),o.createElement("a",{title:"Moncler",href:"http://www.moncler.com/",target:"_blank",style:{display:"inline-block",marginBottom:"3em"}},o.createElement("img",{alt:"Moncler",width:"100%",src:"http://res.cloudinary.com/optune-me/image/upload/e_grayscale/v1464265981/custom/iouripodladtchikov.ch/moncler-logo-icon.png"})),o.createElement("a",{title:"TSG",href:"http://www.tsg.ch/",target:"_blank",style:{display:"inline-block",marginBottom:"3em"}},o.createElement("img",{title:"TSG",width:"60%",src:"http://res.cloudinary.com/optune-me/image/upload/c_scale,e_grayscale,w_180/v1464266024/custom/iouripodladtchikov.ch/TSG-Logo-icon.png"})))))},"references-raydouglas":({isPreviewMobile:e})=>o.createElement(j,{isPreviewMobile:e},o.createElement(W,{className:"transparent",isFirst:!0,isPreviewMobile:e},"Residencies"),q.map(({href:e,src:t,alt:i,bigger:n},r)=>o.createElement(U,{key:"ref-"+r,className:"transparent",href:e||"#",target:e&&"#"!==e?"__blank":"",bigger:n},o.createElement(G,{src:t,title:i}))))};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}const Q=({secondary:e,selected:t,disabled:i})=>i&&z||t&&S||e&&P||k,Y=e.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: ${Q};
  cursor: ${({disabled:e})=>e?"default":"pointer"};

  ${({round:e})=>i(e?["line-height:40px;padding:0px;width:40px;overflow:hidden;"]:["line-height:1.2;padding:16px;width:auto;overflow:none;"])};

  min-height: 40px;
  background: ${({secondary:e,selected:t,disabled:i})=>i&&M||t&&y()||e&&x||b};
  border-radius: ${({secondary:e,round:t})=>t?"50%":e?"2px":"3px"};
  border: none;
  box-shadow: ${({shadow:e})=>e?"0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 0 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)":"none"};
  padding: 0.5rem 1rem;

  & svg.icon {
    height: 24px;
    width: 24px;

    & * {
      fill: ${Q};
      stroke: ${Q};
      transition: fill 0.3s ease-out, stroke 0.3s ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }

  &:hover {
    ${({selected:e,disabled:t})=>!e&&!t&&i(["color:",";background-color:",";& svg{& *{fill:",";stroke:",";transition:fill 0.3s ease-out,stroke 0.3s ease-out;&[fill='none']{fill:none;}&[stroke='none']{stroke:none;}}}"],L,E,L,L)}
  }

  transition: color 0.3s ease-out, background-color 0.35s ease-out, border 0.3s ease-out;
`,J=({children:e,...t})=>o.createElement(Y,X({type:"button"},t),e);J.propTypes={children:d.node};n(["from{opacity:0;}to{opacity:1;}"]),n(["from{opacity:1;}to{opacity:0;}"]);const ee=e.div`
  position: ${({isSidePreview:e})=>e?"absolute":"fixed"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: ${({show:e})=>e?1:0};
  z-index: 999999;
  overflow: hidden;
  background-color: ${({isPreviewMobile:e})=>e?"transparent":"rgba(10, 15, 44, 0.95)"};
  pointer-events: none;
  transition: opacity 0.5s ease-out;
`,te=e.div`
  position: relative;
  width: ${({isSidePreview:e,isPreviewMobile:t})=>e&&t?"100%":t?"334px":"50%"};
  height: ${({isSidePreview:e,isPreviewMobile:t})=>e&&t?"100%":t?"520px":"80%"};
  margin: ${({isSidePreview:e,isPreviewMobile:t})=>e&&t?"0":t?"75px":"calc(100vh / 10)"}
    auto;
  padding: ${({isSidePreview:e,isPreviewMobile:t})=>e&&t?"50px 0 0":"0"};
  background: ${({isPreviewMobile:e})=>e?"rgba(10, 15, 44, 0.95)":"transparent"};
  pointer-events: ${({show:e})=>e?"all":"none"};
  overflow: hidden;

  @media ${v} {
    margin: 0;
    width: 100%;
    height: 100%;
  }
`,ie=({children:e,show:t,isPreviewMobile:i,isSidePreview:n})=>o.createElement(ee,{show:t,isPreviewMobile:i,isSidePreview:n},o.createElement(te,{show:t,isPreviewMobile:i,isSidePreview:n},e));ie.propTypes={children:d.node,isPreviewMobile:d.bool,show:d.bool,style:d.object};const ne=e.div`
  background: ${({colorBackground:e})=>e||"rgba(255,255,255, 0.9)"};
`,oe=e.div`
  position: relative;
  margin: 0;
  padding: 1rem 3rem 0 3rem;
  color: ${({color:e})=>e||"#000000"};
  overflow: hidden;

  @media ${v} {
    padding: 2rem 1.5rem 0 1.5rem;
  }

  & h2,
  p {
    color: ${({color:e})=>e||"#000000"};
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    word-break: break-word;
    white-space: pre-wrap;
  }

  & b {
    font-weight: bold;
  }

  & i {
    font-style: italic;
  }
`,re=e.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
`,ce=e(({isSidePreview:e,...t})=>o.createElement(m,t))`
  margin-top: 0.5rem;
  margin-bottom: 0;
  width: 100%;
  padding-right: 15px;
  max-height: ${({isSidePreview:e})=>e?"150px":"300px"};
`,le=e.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
`,ae=e(J)`
  justify-self: flex-end;
  margin: 1rem auto 1rem;
`,se=({isSidePreview:e,border:t,circle:i,color:n,colorAccent:c,colorBackground:a,colorBackgroundAccent:s,content:d,isPreviewMobile:m,label:p,onClose:h,show:u,square:g})=>{const[C,v]=r(!1);return l(()=>{v(!0)},[]),o.createElement(ie,{isPreviewMobile:m,show:C&&u,isSidePreview:e?1:void 0},o.createElement(ne,null,o.createElement(oe,null,o.createElement(re,null,p),o.createElement(ce,{isSidePreview:e?1:void 0},d.split("\n").map((e,t)=>o.createElement("p",{key:t},e)))),o.createElement(le,null,o.createElement(ae,{onClick:h},"Close"))))};se.propTypes={colorBackground:d.string,colorBackgroundAccent:d.string,border:d.number,circle:d.bool,color:d.string,colorAccent:d.string,content:d.string,isPreviewMobile:d.bool,label:d.string,onClose:d.func,show:d.bool,square:d.bool};const de=e.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: ${({image:e})=>`url(${e})`};
  background-repeat: no-repeat;
  background-position: ${({focusPoint:e})=>e};
  background-size: ${({fullscreen:e})=>e?"cover":"contain"};
  display: flex;
  z-index: 1;
`,me=(e,t)=>{var i,n;return e.background.focusPoint===t.background.focusPoint&&e.background.fullscreen===t.background.fullscreen&&(null===(i=e.background.image)||void 0===i?void 0:i.url)===(null===(n=t.background.image)||void 0===n?void 0:n.url)},pe=o.memo(({background:e,getImageUrl:t})=>o.createElement(de,{image:t(e),focusPoint:e.focusPoint,fullscreen:e.fullscreen}),me),he={CENTER_LEFT:"flex-start",CENTER_CENTER:"center",CENTER_RIGHT:"flex-end"},ue=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${({show:e})=>e?1:.1};
  transition: opacity 0.3s;

  display: flex;
  justify-content: ${({alignHorizontal:e="CENTER_LEFT"})=>he[e]};
`,ge=e.div`
  padding: ${({padding:e,isMobileView:t,isSidePreview:i})=>e||(t||i)&&"1em 1em"||"1em 2em"};
  background-color: ${({colorBackground:e})=>e||"transparent"};


  ${({includeWidth:e})=>e&&i(["& > *{display:table-row;}"])}
  ${({adjustWidth:e})=>i(e?["max-width:100%;"]:["width:100%;"])}

  @media ${w} {
    padding: 1em 1em;
  }
`,Ce=(e,{maxFontSize:t,minFontSize:i,step:n,includeWidth:o,isLogo:r})=>{const c=window.getComputedStyle(e);let l=parseInt(c.fontSize),a=t;const s=e.parentElement.clientWidth,d=e.parentElement.clientHeight,m=()=>d>=e.scrollHeight&&(!o||s>=e.scrollWidth)&&(r||(({element:e})=>![...e.children].some(t=>{let i=parseInt(window.getComputedStyle(e).padding);return e.scrollWidth-2*i<parseInt(t.scrollWidth)}))({element:e})),p=()=>{l+=n,l>=a||l>=t||(e.style.fontSize=l+"px",m()?p():(a=l,h()))},h=()=>{l-=n,l<=i||(e.style.fontSize=l+"px",m()?p():h())};m()?p():h()};class ve extends a{constructor(e){super(e),this.state={ssrDone:!1,resized:!0},this.setNewWindowSize=this.setNewWindowSize.bind(this),this.TextRef=s(),this.resizeObserver=null}setNewWindowSize(){this.setState({resized:!1})}componentDidMount(){window.addEventListener("resize",this.setNewWindowSize);const{maxFontSize:e,minFontSize:t,step:i,includeWidth:n,isLogo:o}=this.props,r={maxFontSize:e,minFontSize:t,step:i,includeWidth:n,isLogo:o},c=this.TextRef.current;this.resizeObserver=new ResizeObserver(()=>{Ce(c,r)}),this.resizeObserver.observe(c.parentElement),this.setState({ssrDone:!0,resized:!1})}componentDidUpdate(e){const{ssrDone:t,resized:i}=this.state,n=this.props.isMobileView!==e.isMobileView||this.props.textValue!==e.textValue||this.props.includeWidth!==e.includeWidth;if(i&&n&&this.setState({resized:!1}),t&&!i){const{maxFontSize:e,minFontSize:t,step:i,includeWidth:n}=this.props,o={maxFontSize:e,minFontSize:t,step:i,includeWidth:n},r=this.TextRef.current;Ce(r,o),this.setState({resized:!0})}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}render(){const{alignHorizontal:e,adjustWidth:t,children:i,colorBackground:n,padding:r,includeWidth:c,isMobileView:l,isSidePreview:a,isLogo:s}=this.props,{ssrDone:d,resized:m}=this.state;return o.createElement(ue,{id:"auto-text-fit-container",show:d&&m,alignHorizontal:e},o.createElement(ge,{adjustWidth:t,colorBackground:n,padding:r,ref:this.TextRef,includeWidth:c,isMobileView:l,isSidePreview:a},i,!s&&o.createElement("p",null,o.createElement("br",null))))}}ve.propTypes={alignHorizontal:d.oneOf(Object.keys(he)),adjustWidth:d.bool,children:d.node,colorBackground:d.string,includeWidth:d.bool,isMobileView:d.bool,isLogo:d.bool,isSidePreview:d.bool,maxFontSize:d.number,minFontSize:d.number,onResize:d.bool,padding:d.string,step:d.number,textValue:d.string},ve.defaultProps={step:.5,maxFontSize:100,minFontSize:1,includeWidth:!1};const we={Desktop:{XS:"8.333%",S:"16.666%",M:"33.333%",L:"50%",XL:"66.666%"},Mobile:{XS:"33.333%",S:"33.333%",M:"50%",L:"50%",XL:"75%"}},fe=e.div`
  position: relative;
  width: ${({size:e,isPreviewMobile:t})=>t?we.Mobile[e]:we.Desktop[e]};
  height: ${({size:e,isPreviewMobile:t})=>t?we.Mobile[e]:we.Desktop[e]};
  margin: 1rem;

  @media ${v} {
    width: ${({size:e})=>we.Mobile[e]};
    height: ${({size:e})=>we.Mobile[e]};
  }

  & #auto-text-fit-container {
    display: flex;
    align-items: ${({logoPosition:e,isPreviewMobile:t})=>t?e.mobile:e.desktop};
  }
  & p {
    color: ${({color:e})=>e};
    display: inline-block;
    font-size: 1em;
    text-align: center;
    line-height: 1;
    white-space: nowrap;
  }
`,be=["TOP_LEFT","TOP_CENTER","TOP_RIGHT"],Me=["BOTTOM_LEFT","BOTTOM_CENTER","BOTTOM_RIGHT"],Ee={top:"flex-start",bottom:"flex-end",center:"center"},xe=({logo:e,isPreviewMobile:t})=>{var i;const n=(({logo:e})=>{const t=e.positionDesktop||e.position,i=e.isDifferentPositions&&e.positionMobile||t,n=(be.includes(t)?"top":Me.includes(t)&&"bottom")||"center",o=(be.includes(i)?"top":Me.includes(i)&&"bottom")||"center";return{desktop:Ee[n],mobile:Ee[o]}})({logo:e});return(null===(i=e.text)||void 0===i?void 0:i.title)?o.createElement(fe,{size:e.size,color:e.text.color,isPreviewMobile:t,logoPosition:n},o.createElement(ve,{adjustWidth:!0,includeWidth:!0,padding:"0",maxFontSize:300,isMobileView:t,isLogo:!0,textValue:e.text.title},o.createElement("p",{className:"apply-font"},e.text.title))):null},ye=e.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: ${({zIndex:e})=>e};
  pointer-events: none;

  ${"\n&.desktop- {\n  &top-left {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n\n  &top-center {\n    align-items: flex-start;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &top-right {\n    align-items: flex-start;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n\n  &center-left {\n    align-items: center;\n    justify-content: flex-start;\n  }\n\n  &center-center {\n    align-items: center;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &center-right {\n    align-items: center;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n\n  &bottom-left {\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  &bottom-center {\n    align-items: flex-end;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &bottom-right {\n    align-items: flex-end;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n}"}

  ${({isDifferentPositions:e})=>e&&i(["",""],({isPreviewMobile:e})=>e&&i(["",""],"\n&.mobile- {\n  &top-left {\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n\n  &top-center {\n    align-items: flex-start;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &top-right {\n    align-items: flex-start;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n\n  &center-left {\n    align-items: center;\n    justify-content: flex-start;\n  }\n\n  &center-center {\n    align-items: center;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &center-right {\n    align-items: center;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n\n  &bottom-left {\n    align-items: flex-end;\n    justify-content: flex-start;\n  }\n\n  &bottom-center {\n    align-items: flex-end;\n    justify-content: center;\n\n    & > div > div {\n      justify-content: center;\n    }\n  }\n\n  &bottom-right {\n    align-items: flex-end;\n    justify-content: flex-end;\n\n    & > div > div {\n      justify-content: flex-end;\n    }\n  }\n}"))}


  ${({isPreviewMobile:e,padding:t})=>i(["",";"],e?t.mobile:t.desktop)}
`,ke=["BOTTOM_LEFT","CENTER_LEFT","TOP_LEFT"],ze=["BOTTOM_RIGHT","CENTER_RIGHT","TOP_RIGHT"],Le=["BOTTOM_LEFT","BOTTOM_CENTER","BOTTOM_RIGHT"],Pe=["BOTTOM_LEFT","BOTTOM_CENTER"],Se=["BOTTOM_RIGHT","BOTTOM_CENTER"],$e=({logo:e,links:t,getImageUrl:i,isPreviewMobile:n,isPreviewMobileReady:r,isSidePreview:c,zIndex:l})=>{var a;const s=(({logo:e})=>{const t=e.positionDesktop>""&&e.positionDesktop||e.position,i=t>""&&t.toLowerCase().replace("_","-")||"top-center",n=e.isDifferentPositions&&e.positionMobile||e.positionDesktop||e.position;return{classnameMobile:n>""&&n.toLowerCase().replace("_","-")||"top-center",classnameDesktop:i}})({logo:e}),d=(({logo:e,links:t,isPreviewMobile:i,isSidePreview:n})=>{const o=e.positionDesktop||e.position,r=e.isDifferentPositions&&e.positionMobile||o,c=(({isPreviewMobile:e,isSidePreview:t})=>({left:`padding-left:  ${(t?3.3:e&&4.5)||6}rem`,right:`padding-right: ${(t?3.3:e&&4.5)||6}rem`,bottom:`padding-bottom: ${(t?3.3:e&&4.5)||6}rem`,none:"padding: 0"}))({isPreviewMobile:i,isSidePreview:n}),l=t.list.length>0?t.position:"",a=("CENTER_LEFT"===l&&ke.includes(o)?"left":"CENTER_RIGHT"===l&&ze.includes(o)&&"right")||Pe.includes(l)&&Pe.includes(o)&&"bottom"||Se.includes(l)&&Se.includes(o)&&"bottom"||"none",s=("CENTER_LEFT"===l&&ke.includes(r)?"left":"CENTER_RIGHT"===l&&ze.includes(r)&&"right")||Le.includes(l)&&Le.includes(r)&&"bottom"||i&&"bottom"||"none";return{desktop:c[a],mobile:c[s]}})({logo:e,links:t,isPreviewMobile:n,isSidePreview:c});return o.createElement(ye,{className:`desktop-${s.classnameDesktop} mobile-${s.classnameMobile}`,zIndex:l,isPreviewMobile:n,isDifferentPositions:(null==e?void 0:e.isDifferentPositions)||!1,padding:d},"TEXT"===e.type?o.createElement(xe,{logo:e,isPreviewMobile:r}):(null===(a=e.image)||void 0===a?void 0:a.url)>""&&o.createElement(A,{logo:e,getImageUrl:i,isPreviewMobile:n})||o.createElement(xe,{logo:e,isPreviewMobile:r}))},He=n(["from{opacity:0.1;}to{opacity:1;}"]),Te=e.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${He} 0.3s ease-out;
`,Re=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  
  color: ${({colorPrimary:e})=>e};
  transition: color 0.3s ease-out;

  & h1,
  h2,
  h3,
  h4,
  h5,
  a,
  li,
  p,
  span {
    font-size: 1em;
    color: ${({colorPrimary:e})=>e};
    white-space: ${({wordWrap:e})=>e?"pre-line":"nowrap"};
    transition: color 0.3s ease-out;
    line-height: 1.4;
    margin: 0 0 0.1em;
    padding: 0;
  }

  & a {
    word-break: ${({wordWrap:e})=>e?"break-word":"normal"};
  }

  & .separator-line {
    background: ${({colorPrimary:e})=>e};
    height: 0.1em;
    min-height: 1px;
    margin 1em 0;
    padding: 0;
    border: none;
  }

  & a:hover {
    color: ${({colorPrimary:e,colorAccent:t})=>t||e};
  }

  & h1 {
    font-size: 1.8em;
    font-weight: bold;
    margin: 1em 0;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  & h3 {
    font-size: 1.2em;
  }

  & h4 {
    font-size: 1em;
  }

  & h5 {
    font-size: 0.8em;
  }
`,Ve=({children:e,color:t,colorBackground:i,colorAccent:n,isPreviewMobile:r,isSidePreview:c,textValue:l,wordWrap:a,...s})=>o.createElement(Te,null,o.createElement(Re,{colorPrimary:t,colorAccent:n,wordWrap:a},o.createElement(ve,X({colorBackground:i,includeWidth:!a,isMobileView:r,isSidePreview:c,textValue:l},s),e))),Ae=e=>{const t=new Date(e);return{date:t,formattedDate:h(t,"dd.mm.yy"),day:h(t,"dd"),month:h(t,"mm"),year:h(t,"yy")}},_e={OPTUNE:{url:(e="https://api.optune.me")=>({slug:t,limit:i,includePast:n})=>`${e}/v2/events/${t}.json?limit=${i}&inclpast=${n}`,transformEvent:({title:e,playDate:t,venue:i,website:n})=>({title:e,startDate:Ae(t),venue:i,website:n})}},Oe=({startDate:e,title:t,venue:i,website:n})=>{const{name:o,city:r}=i||[{name:null,city:null}].filter(e=>e).reduce((e,t,i)=>0===i&&{...e,...t},{name:"unknown",city:"unknown"});return{startDate:e,title:t,venue:{name:o,city:r},website:n}},Be="month",Fe="gig",Ie=async({gigsAPI:e,gigsAPIDomain:t})=>{const{slug:i,limit:n,includeMonthTitle:o,includePast:r}=e,c=_e.OPTUNE,l=await(a=c.url(t)({slug:i,limit:n,includePast:r}),new Promise((e,t)=>{fetch(a).then(i=>{try{e(i.json())}catch(e){console.error("Parse error",e),t("Parsing failed")}}).catch(e=>{console.error("fetching failed",e),t("Fetch failed")})})).catch(()=>[]);var a;const s=c.extractEvents?c.extractEvents(l):l;return(e=>t=>i=>{const n=[];let o=0,r=0;return i.map(e.transformEvent).map(Oe).sort((e,t)=>e.startDate.date-t.startDate.date).forEach(e=>{if(t){const{year:t,month:i}=e.startDate;(t>o||i>r)&&(n.push({type:Be,year:t,month:i}),o=t,r=i)}n.push({type:Fe,...e})}),n})(c)(o)(s)},De={CENTER_LEFT:"left",CENTER_CENTER:"center",CENTER_RIGHT:"right"},Ze=e.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: ${({active:e})=>e?1:0};
  transition: opacity 0.3s ease-out;

  & h2, p, span {
    font-size: 1em;
    color: ${({color:e})=>e};
    text-align: ${({alignHorizontal:e})=>De[e]};
    line-height: 1.4;
    margin: 0 0 0.1em;
    padding: 0;
  }

  & .separator-line {
    background: ${({color:e})=>e};
    height: 0.1em;
    min-height: 1px;
    margin 1em 0;
    padding: 0;
    border: none;
  }

  & h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

`,Ne=e.h2`
  text-align: ${({alignHorizontal:e})=>De[e]};
`,je=e.ul`
  padding: 0;
  margin: 0;
`,We=e.li`
  padding: 8px;
  list-style: none;
  line-height: 1.5;
  margin: 1em 0;
  transition: all 0.3s ease-out;
  text-align: ${({alignHorizontal:e})=>De[e]};
`,Ue=(e.span`
  width: 7em;
`,e.span`
  min-width: 10em;

  & a {
    text-decoration: underline ${({color:e})=>e};

    & :hover {
      color: ${({colorAccent:e})=>e};
      text-decoration: underline ${({colorAccent:e})=>e};
    }
  }
`,e.span`
  min-width: 10em;
`,e.div`
  padding-top: 1.5em;

  & p {
    text-align: ${({alignHorizontal:e})=>De[e]};
  }
`),Ge=({title:e,alignHorizontal:t,withLine:i})=>o.createElement(c,null,o.createElement(Ne,{alignHorizontal:t},e),i&&o.createElement("hr",{className:"separator-line"})),qe=({month:e,alignHorizontal:t})=>o.createElement(We,{alignHorizontal:t},o.createElement("hr",{className:"separator-line"}),o.createElement("b",null,e.month)," | ",e.year),Ke=({gig:e,alignHorizontal:t,showDay:i})=>{const{title:n,startDate:r,venue:c,website:l}=e,a=((e,t)=>t?e.day:e.formattedDate)(r,i),s=((e,t)=>e>""?e:t.name)(n,c),d=((e,t)=>e>""?`${t.name||""}${t.name>""&&t.city>""?", ":""}${t.city||""}`:t.city||"")(n,c);return o.createElement(We,{alignHorizontal:t},a," | ",l?o.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},s):s,d>""&&" | ",d)},Xe=({alignHorizontal:e,border:t,circle:i,color:n,colorAccent:a,colorBackground:s,colorBackgroundAccent:d,gigsAPI:m,gigsAPIDomain:h,gigsList:u,gigsLoading:g,isPreviewMobile:C,square:w})=>{const[f,b]=r(!1);l(()=>{f||b(!0)},[f]);const[M,E]=r(Array.isArray(u)&&u.length>0?{loading:!1,data:u}:{loading:!0,data:[]});l(()=>{Array.isArray(u)&&u.length>0&&E({...M,data:u})},[u]),l(()=>{M.loading&&Ie({gigsAPI:m,gigsAPIDomain:h}).then(e=>{E({loading:!1,data:e})})},[M.loading]);const x=!M.loading&&!g&&M.data.length>0,y=p({query:v});return o.createElement(c,null,o.createElement(Ze,{color:n,alignHorizontal:e,active:!x},o.createElement(ve,{adjustWidth:!0,alignHorizontal:e,colorBackground:s,includeWidth:!0,isMobileView:C,value:M.loading||g?"Loading events ...":"No events found"},o.createElement(Ge,{alignHorizontal:e,color:n,title:m.title,withLine:m.includeMonthTitle}),o.createElement("p",null,M.loading||g?"Loading events ...":"No events found"))),x&&o.createElement(Ve,{alignHorizontal:e,color:n,colorAccent:a,colorBackground:s,colorBackgroundAccent:d,wordWrap:f&&y,adjustWidth:!0,isPreviewMobile:C},o.createElement(Ge,{alignHorizontal:e,title:m.title}),o.createElement(je,null,M.data.map(({type:t,...i},n)=>t===Be?o.createElement(qe,{key:n,month:i,alignHorizontal:e}):o.createElement(Ke,{key:n,alignHorizontal:e,showDay:m.includeMonthTitle,gig:i}))),m.includeShowMore&&o.createElement(Ue,{alignHorizontal:e},o.createElement("p",null,o.createElement("a",{href:`https://api.optune.me/v4/events/${m.slug}?header=1&theme=black&ticketlinks=true`,target:"_blank",rel:"noopener noreferrer"},"Show More")))))},Qe=e.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`,Ye=e.div`
  position: relative;
  padding-top: 56.25%;
  opacity: ${({show:e})=>e?1:.1};
`,Je=e=>{const t=window.getComputedStyle(e),i=window.getComputedStyle(e.parentElement.parentElement);return e.style.margin=`${(parseInt(i.height)-parseInt(t.height))/2}px ${(parseInt(i.width)-parseInt(t.width))/2}px`},et=(e,{step:t,minPercent:i,maxPercent:n})=>{let o=n-2,r=n;const c=e.parentElement.parentElement.clientHeight,l=()=>c>e.clientHeight,a=()=>{o+=t,o>=n||o>=r||(e.style.width=o+"%",e.style.height=o+"%",Je(e),l()?a():(r=o,s()))},s=()=>{o-=t,o<=i||(e.style.width=o+"%",e.style.height=o+"%",Je(e),l()?a():s())};l()?a():s()};class tt extends a{constructor(e){super(e),this.state={ssrDone:!1,resized:!0},this.setNewWindowSize=this.setNewWindowSize.bind(this),this.PlayerRef=s(),this.resizeObserver=null}setNewWindowSize(){this.setState({resized:!1})}componentDidMount(){window.addEventListener("resize",this.setNewWindowSize);const{minPercent:e,maxPercent:t,step:i}=this.props,n={minPercent:e,maxPercent:t,step:i},o=this.PlayerRef.current;this.resizeObserver=new ResizeObserver(()=>{et(o,n)}),this.resizeObserver.observe(o.parentElement.parentElement),this.setState({ssrDone:!0,resized:!1})}componentDidUpdate(e){const{ssrDone:t,resized:i}=this.state,n=this.props.isPreviewMobile!==e.isPreviewMobile;if(i&&n&&this.setState({resized:!1}),t&&!i){const{minPercent:e,maxPercent:t,step:i}=this.props,n={minPercent:e,maxPercent:t,step:i},o=this.PlayerRef.current;et(o,n),this.setState({resized:!0})}}componentWillUnmount(){this.resizeObserver&&this.resizeObserver.disconnect()}render(){const{children:e}=this.props,{ssrDone:t,resized:i}=this.state;return o.createElement(Ye,{show:t&&i},o.createElement(Qe,{ref:this.PlayerRef},e))}}tt.propTypes={children:d.node,isPreviewMobile:d.bool,maxHeight:d.number,minHeight:d.number,maxPercent:d.number,minPercent:d.number,onResize:d.bool,step:d.number},tt.defaultProps={step:.5,minPercent:1,maxPercent:100};const it=e.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,nt=e(u)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: ${({isDeezer:e})=>e?"700px":"unset"};
`,ot=e.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,rt=({media:e,isPreviewMobile:t,isSidePreview:i})=>{var n;const[c,a]=r(!1);l(()=>{a(!0)},[]);let s,d,m,p=c&&(null==e?void 0:e.url)&&nt,h=(null==e?void 0:e.url)||"";(null==e?void 0:e.deezer)&&(s=e.deezer.format,d=e.deezer.autoplay,m=e.deezer.theme),-1!==(null==e?void 0:e.url.indexOf("spotify"))?p=O:-1!==(null==e?void 0:e.url.indexOf("apple"))?p=F:-1!==(null==e?void 0:e.url.indexOf("deezer"))&&(p=D);let u=!!(null==e?void 0:e.fullscreen)&&it||p===nt&&tt||p!==nt&&"SQUARE"===(null==e||null===(n=e.deezer)||void 0===n?void 0:n.format)&&!t&&tt||ot;return(null==e?void 0:e.fullscreen)?p&&o.createElement(it,null,o.createElement(p,{url:h,playing:!1,width:"100%",height:"100%",format:s,autoplay:d,theme:m,controls:!0,isSidePreview:i})):p&&o.createElement(u,{isPreviewMobile:t},o.createElement(p,{url:h,playing:!1,width:"100%",height:"100%",format:s,autoplay:d,theme:m,controls:!0,isSidePreview:i}))},ct=e.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`,lt=e.a`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
`,at=e.img`
  width: ${({fullscreen:e})=>e?"100%":"auto"};
  height: 100%;
  object-fit: ${({fullscreen:e})=>e?"cover":"contain"};
`,st=({cover:e})=>{var t;return e&&!!(null===(t=e.image)||void 0===t?void 0:t.url)&&o.createElement(ct,null,o.createElement(lt,{href:e.url||"",target:"__blank"},o.createElement(at,{src:e.image.url||"",alt:"image",fullscreen:e.fullscreen||!1})))||null},dt=e=>"string"==typeof e?g(e):"",mt={RowSize:6,ColumnSize:6,Unit:16.666},pt={RowSize:3,ColumnSize:2,RowUnit:33.333,ColumnUnit:50},ht={L:9,M:7,S:5},ut={S:4.2,M:4.6,L:5},gt={L:3,M:2,S:1},Ct=333,vt=520,wt=e=>e.toFixed(2),ft=({startRow:e,startColumn:t,endRow:n,endColumn:o,rowSpan:r,columnSpan:c},{linksPosition:l,linksSize:a="M",isSidePreview:s=!1})=>{const{ColumnSize:d,RowSize:m,Unit:p}=mt,h=d-o>=t-1,u=h?"left":"right",g=m-n<e-1||n===m&&["BOTTOM_CENTER","BOTTOM_LEFT","BOTTOM_RIGHT"].includes(l),C=g?"bottom":"top",v=((h?t-1:d-o)*p).toFixed(3),w=((g?m-n:e-1)*p).toFixed(3);let f=0,b=0;const M=s?gt[a]:ht[a];switch(l){case"BOTTOM_CENTER":case"BOTTOM_LEFT":case"BOTTOM_RIGHT":g&&n===m&&(f+=M);break;case"CENTER_RIGHT":h||o!==d||(b+=M);break;case"CENTER_LEFT":h&&1===t&&(b+=M)}const E=wt(c*p),x=wt(c*(b+2)/d),y=wt(r*p),k=wt(r*(f+2)/m);return i(["",""],`\n    ${u}: calc(${v}${s?"%":"vw"} + ${b+1}rem);\n    ${C}: calc(${w}${s?"%":"vh"} + ${f+1}rem);\n    width: calc(${E}${s?"%":"vw"} - ${x}rem);\n    height: calc(${y}${s?"%":"vh"} - ${k}rem);\n  `)},bt=({startRow:e,startColumn:t,endRow:n,endColumn:o,rowSpan:r,columnSpan:c},{linksSize:l="M",isPreviewMobile:a=!1})=>{const{ColumnSize:s,ColumnUnit:d,RowSize:m,RowUnit:p}=pt,h=s-o>=t-1,u=h?"left":"right";let g=((h?t-1:s-o)*d).toFixed(3);let C=((m-n)*p).toFixed(3);const v=n===m?ut[l]:0,w=`${wt(r*p)}${a?"%":"vh"}`,f=r*(v+2)/m,b=`${wt(c*d)}${a?"%":"vw"}`,M=2*c/s,E=a?" !important":"";g=a?Math.round(Ct*g)/100+"px":g+"%",C=a?Math.round(vt*C)/100+"px":C+"%";return i(["",""],`\n    ${u}: calc(${g} + 1rem)${E};\n    bottom: calc(${C} + ${v+1}rem)${E};\n    width: calc(${b} - ${M}rem)${E};\n    height: calc(${w} - ${f}rem)${E};\n  `)},Mt=e.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`,Et=e.div`
  position: absolute;
  z-index: 3;

  @media ${"(min-width: 481px)"} {
    ${({area:e,areaMobile:t,linksPosition:i,linksSize:n,isPreviewMobile:o,isSidePreview:r})=>o?bt(t,{linksSize:n,isPreviewMobile:!0}):ft(e,{linksPosition:i,linksSize:n,isSidePreview:r})}
  }

  @media ${w} {
    ${({area:e,areaMobile:t,linksPosition:i,linksSize:n,isPreviewMobile:o,isSidePreview:r})=>!r&&bt(t,{linksSize:n})||o?bt(t,{linksSize:n,isPreviewMobile:!0}):ft(e,{linksPosition:i,linksSize:n,isSidePreview:r})} }
  }
`,xt=({position:e,span:t})=>{const[i,n]=e.split("/"),[o,r]=t.split("/"),c=parseInt(i),l=parseInt(n),a=parseInt(o),s=parseInt(r);return{startRow:c,startColumn:l,endRow:c+parseInt(a)-1,endColumn:l+parseInt(s)-1,rowSpan:a,columnSpan:s}},yt=({content:e,links:t,isPreviewMobile:i,isPreviewMobileReady:n,isSidePreview:r})=>{const{alignHorizontal:c,color:l,colorAccent:a,colorBackground:s,colorBackgroundAccent:d,cover:m,gigsAPI:p,gigsAPIDomain:h,gigsList:u,gigsLoading:g,media:C,position:v="4/2",positionMobile:w="2/1",span:f="2/4",spanMobile:b="2/2",text:M,type:E,wordWrap:x}=e,y={color:l,colorAccent:a,colorBackground:s,colorBackgroundAccent:d},k=xt({position:v,span:f}),z=xt({position:w,span:b}),{border:L,circle:P,square:S}=t;let $,H=!1;switch(E){case"COVER":$=o.createElement(st,{cover:m});break;case"GIGS":$=o.createElement(Xe,X({alignHorizontal:c,border:L,circle:P,gigsAPI:p,gigsAPIDomain:h,gigsList:u,gigsLoading:g,isPreviewMobile:n,square:S},y));break;case"MEDIA":$=C?o.createElement(rt,{media:C,isPreviewMobile:i,isSidePreview:r}):null,H=!!C&&C.fullscreen;break;case"TEXT":$=o.createElement(Ve,X({},y,{alignHorizontal:c,isPreviewMobile:n,isSidePreview:r,textValue:M,wordWrap:x,value:M}),dt(M));break;default:$=null}return H?o.createElement(Mt,null,$):o.createElement(Et,{area:k,areaMobile:z,linksPosition:t.list.length>0?t.position:"NONE",linksSize:t.size,isPreviewMobile:i,isSidePreview:r},$)},kt=e.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 0;
  z-index: ${({zIndex:e})=>e};
  pointer-events: none;
`,zt=e.div`
  position: absolute;
  display: flex;
  flex-flow: row;
  width: 100%;
  height: auto;
  pointer-events: all;

  ${({isPreviewMobile:e})=>i(e?["bottom:0 !important;justify-content:space-evenly !important;white-space:nowrap !important;"]:["&.bottom-center{bottom:0;justify-content:center;white-space:nowrap;}&.bottom-left{bottom:0;justify-content:flex-start;white-space:nowrap;}&.bottom-right{bottom:0;justify-content:flex-end;white-space:nowrap;}&.center-right{right:0;width:auto;height:100%;flex-flow:column;justify-content:center;}&.center-left{left:0;width:auto;height:100%;flex-flow:column;justify-content:center;}"])}
`,Lt=({children:e,position:t,zIndex:i,isPreviewMobile:n})=>o.createElement(kt,{zIndex:i},o.createElement(zt,{className:t>""?t.toLowerCase().replace("_","-"):"bottom-center",isPreviewMobile:n},e)),Pt={fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10"},St=(e,t="0 0 48 48")=>{const i=({className:i})=>o.createElement("svg",{className:C("icon squid-ink",i),enableBackground:"new "+t,version:"1.1",viewBox:t,xmlns:"http://www.w3.org/2000/svg"},e());return i.propTypes={className:d.string},i},$t=St(()=>o.createElement("g",{id:"notify"},o.createElement("path",X({},Pt,{d:"M23.7922153,32h-1l-1.7834263-14.7715702C20.8923397,16.0302334,21.947998,15,23.2922115,15h0.0000057c1.3442135,0,2.3998718,1.0302334,2.2834244,2.2284298L23.7922153,32z"})),o.createElement("circle",X({},Pt,{cx:"23",cy:"38",r:"2"}))),"7 8 33 40"),Ht=St(()=>o.createElement("g",{id:"arto"},o.createElement("path",X({},Pt,{d:"M19.7780323,40.6750259c2.1686897,0,3.7365913,0.931488,4.9317913,2.9295158 c0.7719879,1.3238602,2.5323544,3.532959,5.6963367,3.532959c1.5524807,0,3.2953014-0.5221024,5.1795483-1.5492935 c0.882576-0.6853256,2.2165413-2.1963387,2.2973557-6.5055428c0.0366859-0.4152336,0.0494461-1.0372887,0.0648651-1.8108749 c0.1079292-4.9955902,0.3636627-9.199522,2.3063927-9.8752766c0.3657913-0.5045567,0.913414-1.4652882,0.7863388-2.2340851 c-0.0404053-0.2440376-0.162159-0.6103592-0.7416801-0.962328c-0.2908249-0.2195797-2.0756493-1.7598362-1.9842033-6.6820564 c0.0866661-4.6234207,0.1722603-8.5593901,0.1722603-8.5593901c-0.0116959-0.1855545-0.3960953-6.0961533-4.6531906-6.0961533 c-1.8204498,0-4.1289673,1.0112407-6.8649521,3.0092645L6.8275604,29.1542206l0,0 c0.012229,0-2.5408611,4.0997238-1.014431,7.5640984c1.0463309,2.3792343,3.7881641,3.9987106,8.1531925,4.8164177 c0.8490801-0.0664597,1.7231493-0.2450981,2.5685081-0.4152336C17.6066837,40.9004517,18.713623,40.6750259,19.7780323,40.6750259z M35.6245193,25.8339272c-1.5546112,0.0861301-2.9342957,0.0861301-2.9342957,0.0861301l-0.0015945-13.3486929 c0,0-0.432251-3.5956993-3.8875885-1.1133213L10.5827618,32.8530617c0,0-1.2084913,1.7965202,0,2.1362572 c0,0,1.2084913,0.943718,2.2452517,0.5141296c0.8634348-0.7682686,4.7488966-5.9898186,14.6799994-7.1339779 c-0.0861301,5.1683865,0.0861301,12.4400654,0.0861301,12.4400654s2.7630997,2.9098434,5.4390068,0 c0-2.9794922-0.086132-12.4650517-0.086132-13.6054897c0.1908684,0.0435982,0.9022446-0.1908703,2.7630997-0.4248047 C35.7106514,26.7792416,37.1801949,26.3459263,35.6245193,25.8339272z M27.9701309,26c0,0-4.1617107,0.3029575-5.8024502,0.3827076 c-1.6407394,0.0818768-0.4094505-0.7845306-0.4094505-0.7845306L28,18.6457176V26H27.9701309z"})))),Tt=St(()=>o.createElement("g",{id:"aws"},o.createElement("path",X({},Pt,{d:"M1.9942529,10.785655L22,17.1971035v28.210474L2.2405748,38.721817L1.9942529,10.785655z M26.2818737,45.5L46,38.721817V10.9695177 l-19.7132301,6.1361475L26.2818737,45.5z M23.9807243,13.8999424l18.1504478-5.904839L23.9807243,2.5L5.4131265,7.9951034 L23.9807243,13.8999424z"})))),Rt=St(()=>o.createElement("g",{id:"amazon"},o.createElement("g",null,o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M38.2007484,37.472393c-0.2007256-0.0015945-0.407074,0.0458832-0.5995789,0.1359711c-0.2170677,0.0868988-0.4391174,0.1868019-0.645546,0.2752914l-0.3079948,0.1277542l-0.3988686,0.1589546v0.0048637c-4.3349571,1.7578888-8.8877525,2.7883644-13.1015034,2.8785362c-0.1548424,0.0048637-0.3096027,0.0048637-0.4620152,0.0048637c-6.6252365,0.0032692-12.0316019-3.0701218-17.4879608-6.0977097c-0.1908288-0.099987-0.3833351-0.1524124-0.5750027-0.1524124c-0.2466092,0-0.4972453,0.0917664-0.6799374,0.2638054c-0.1834471,0.172039-0.2924082,0.4226761-0.2908146,0.6765785c-0.0008388,0.3309975,0.1777573,0.6340599,0.4252055,0.830677c5.119648,4.4446716,10.7307663,8.574791,18.2759361,8.578064c0.1474495,0,0.2965889-0.003273,0.4480782-0.006546c4.7994041-0.10812,10.2295074-1.7283592,14.4415932-4.3758888l0.0245628-0.0163574c0.5521049-0.3293152,1.1042061-0.7044296,1.6235962-1.1205635c0.3243675-0.2409019,0.5471535-0.6144257,0.5438843-1.004303C39.4237289,37.9409485,38.8348045,37.472393,38.2007484,37.472393z"})),o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M45.4958382,34.6983833V34.696682c-0.0166054-0.4498978-0.1133919-0.7899818-0.2999954-1.074173l-0.0191956-0.0261574l-0.0226784-0.0279465c-0.1900864-0.2074966-0.3714218-0.285984-0.5701675-0.3731194c-0.5876694-0.2267838-1.4439049-0.3470459-2.4762955-0.3505287c-0.7410583,0-1.5597954,0.0697289-2.3803177,0.2493706l-0.8291817,0.2214241l-0.0148201,0.0069656l-0.4665108,0.1726723c-0.5483818,0.2266922-1.047123,0.5109749-1.5101509,0.8457909c-0.286869,0.216156-0.5274925,0.5004387-0.54142,0.9381065c-0.0060539,0.2372246,0.1133041,0.5109749,0.3156204,0.6731148c0.1988525,0.1622276,0.4324913,0.2162476,0.6365051,0.2162476c0.0488396,0,0.0941963-0.0016975,0.1351776-0.0086632l0.039196-0.003479l0.0314293-0.0052681c0.4045448-0.0854454,0.9939079-0.1430359,1.6827354-0.2406235c0.5911522-0.0645523,1.218998-0.1133881,1.7630234-0.1133881c0.3863144-0.0016975,0.7306862,0.0244637,0.9678383,0.0767822c0.1185532,0.0243759,0.208374,0.0558014,0.2581062,0.0801773c0.0157127,0.006958,0.0287476,0.0139275,0.0357132,0.0191956c0.0096436,0.0331268,0.0252686,0.1167831,0.023571,0.2371407c0.0052681,0.4551697-0.1900864,1.2991714-0.4524918,2.1222839c-0.2590141,0.8248062-0.5728493,1.6513977-0.7812386,2.200676c-0.0488205,0.1273193-0.080265,0.2650795-0.080265,0.4167786c-0.0043755,0.2214241,0.0854454,0.4882927,0.277317,0.6661453c0.1865158,0.1778564,0.4272232,0.2475891,0.631237,0.2475891h0.0078583c0.305191-0.0034828,0.563221-0.1237488,0.7864304-0.2981224c2.1004829-1.8886261,2.8294144-4.9001808,2.8581505-6.5969353L45.4958382,34.6983833z"})),o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M26.3014431,14.466506c-1.2337303,0.0924091-2.6576328,0.1866035-4.0814323,0.3749037c-2.1823883,0.2877579-4.3648491,0.6644535-6.1670494,1.5205994c-3.5103855,1.4230099-5.8837376,4.4590244-5.8837376,8.9179688c0,5.6012421,3.6053991,8.4471722,8.1620007,8.4471722c1.5172062,0,2.7527199-0.1918716,3.8887863-0.4743652c1.8048649-0.5702591,3.3210869-1.6130085,5.125967-3.5137787c1.0428391,1.4247036,1.3288155,2.0908566,3.1302128,3.607975c0.4751701,0.1882973,0.9495373,0.1882973,1.3279228-0.0941963c1.1404285-0.9503403,3.1336956-2.6593285,4.1755543-3.6062756c0.4761505-0.3800888,0.3810616-0.9503422,0.0941925-1.4212265c-1.0410538-1.3305111-2.0864792-2.4692421-2.0864792-5.0326786v-8.5394945c0-3.6062756,0.285099-6.928277-2.3715668-9.3923359c-2.1815701-1.9913938-5.5986519-2.7517378-8.2561951-2.7517378h-1.1396084c-4.8382339,0.2807987-9.9634123,2.3698695-11.1021423,8.3494968c-0.1899967,0.7602549,0.3801718,1.0427504,0.7603588,1.1369448l5.3125706,0.6644526c0.5711498-0.0941944,0.8544502-0.5702581,0.9495373-1.0411425c0.4742775-2.0890703,2.1823883-3.133606,4.0796757-3.3236914h0.3810501c1.1387291,0,2.3715801,0.4760628,3.0360184,1.4247065c0.7585583,1.13873,0.6643639,2.6575432,0.6643639,3.9863596V14.466506z M25.258604,25.7560406c-0.6643639,1.3253345-1.8047905,2.1797829-3.0385933,2.4692421c-0.189209,0-0.4725952,0.0941963-0.7594662,0.0941963c-2.0855885,0-3.3202095-1.6147938-3.3202095-3.9863605c0-3.0378036,1.803093-4.4607258,4.0796757-5.1251774c1.2338028-0.2841969,2.6576176-0.3800831,4.0814323-0.3800831v1.1404266C26.3014431,22.1498547,26.3956375,23.8570557,25.258604,25.7560406z"}))))),Vt=St(()=>o.createElement("g",{id:"apple"},o.createElement("path",X({id:"Apple"},Pt,{d:"M26.2708321,5.3328276c1.5800858-1.8577747,4.2508812-3.2398612,6.4547882-3.3327498c0.2811089,2.5808392-0.7533779,5.1651015-2.2826176,7.0272765c-1.5316868,1.8587523-4.0387058,3.306838-6.4992771,3.1137276C23.6093254,9.6159744,24.8491459,6.9828243,26.2708321,5.3328276z M38.8088531,40.5376549c-1.8289299,2.6820374-3.7204361,5.3479462-6.7065659,5.4036789c-2.9387074,0.0557327-3.8807926-1.7463074-7.2345657-1.7463074c-3.357193,0-4.407814,1.6905746-7.1822529,1.8020401c-2.8829718,0.108532-5.075635-2.8966637-6.9187431-5.566967c-3.7659039-5.4594116-6.6415434-15.4371281-2.7754169-22.1705837c1.9144855-3.3439932,5.3455014-5.4594116,9.0625172-5.5156336c2.8316402-0.0523109,5.5063457,1.9149742,7.235054,1.9149742c1.7326183,0,4.9793243-2.3618174,8.3917618-2.0151958c1.4285278,0.0591555,5.4379005,0.5773764,8.0133629,4.3569689c-0.2038651,0.133955-4.7857246,2.8086605-4.730484,8.3800316c0.0557365,6.6552277,5.8138618,8.8669586,5.8808403,8.8972702C41.7915573,34.4343758,40.9232941,37.4361496,38.8088531,40.5376549z"})))),At=St(()=>o.createElement("g",{id:"artist-profile"},o.createElement("path",{stroke:"#3A4B69",strokeWidth:"0.67",fill:"#3A4B69",d:"M20.9154 13.7605L21.4194 13.9057L21.4197 13.9048L20.9154 13.7605ZM21.3691 13.4316L20.9124 13.1735L20.9116 13.1748L21.3691 13.4316ZM21.2339 10.57L20.7101 10.5411C20.6956 10.8048 20.8793 11.0381 21.139 11.0859L21.2339 10.57ZM20.9717 7.94385L21.4788 7.80956L21.4782 7.80731L20.9717 7.94385ZM11.4083 7.94385L10.9018 7.80731L10.9012 7.80956L11.4083 7.94385ZM11.1461 10.57L11.241 11.0859C11.5007 11.0381 11.6844 10.8048 11.6699 10.5411L11.1461 10.57ZM11.0109 13.4316L11.4683 13.1748L11.4676 13.1735L11.0109 13.4316ZM11.4646 13.7605L10.9603 13.9047L10.9605 13.9057L11.4646 13.7605ZM19.1191 17.2255C18.9867 16.9679 18.6704 16.8664 18.4127 16.9989C18.1551 17.1314 18.0536 17.4477 18.1861 17.7053L19.1191 17.2255ZM19.5666 18.8559C19.8238 18.9892 20.1404 18.8888 20.2738 18.6316C20.4071 18.3744 20.3067 18.0578 20.0495 17.9245L19.5666 18.8559ZM14.0966 17.8381C14.3024 17.6342 14.3039 17.302 14.1 17.0962C13.8961 16.8904 13.5639 16.8889 13.3581 17.0928L14.0966 17.8381ZM10.7585 19.0927L10.9164 19.593L10.9164 19.593L10.7585 19.0927ZM5.43262 25.9251L4.90862 25.9002C4.89589 26.1675 5.08641 26.4015 5.35074 26.4433L5.43262 25.9251ZM18.8208 27.3926C19.1104 27.3845 19.3386 27.1432 19.3305 26.8536C19.3224 26.564 19.0811 26.3358 18.7915 26.3439L18.8208 27.3926ZM21.561 19.6133L21.5034 19.0919L21.561 19.6133ZM19.7088 21.5063L20.2313 21.5531L19.7088 21.5063ZM20.4501 23.3087L20.7875 22.9071L20.4501 23.3087ZM20.8401 24.0401L21.3629 23.9965L20.8401 24.0401ZM21.1178 27.3724L20.595 27.4159L21.1178 27.3724ZM22.4824 27.3724L21.9596 27.3288L22.4824 27.3724ZM22.7601 24.0394L22.2374 23.9958L22.7601 24.0394ZM23.1418 23.3156L23.4772 23.719L23.1418 23.3156ZM20.9001 23.0755C20.6104 23.0755 20.3755 23.3104 20.3755 23.6001C20.3755 23.8898 20.6104 24.1247 20.9001 24.1247V23.0755ZM22.5801 24.1247C22.8698 24.1247 23.1047 23.8898 23.1047 23.6001C23.1047 23.3104 22.8698 23.0755 22.5801 23.0755V24.1247ZM16.19 18.7571C17.7714 18.7571 19.0221 17.7115 19.8688 16.6655C20.7225 15.6107 21.2682 14.4308 21.4194 13.9057L20.4113 13.6153C20.3022 13.994 19.8265 15.0501 19.0533 16.0054C18.273 16.9694 17.2913 17.7079 16.19 17.7079V18.7571ZM21.4197 13.9048C21.3945 13.9929 21.352 14.0498 21.3372 14.0688C21.3183 14.0931 21.3022 14.1084 21.2966 14.1136C21.2855 14.124 21.2821 14.1254 21.2952 14.116C21.3201 14.0982 21.359 14.0733 21.4141 14.039C21.4619 14.0092 21.5265 13.9695 21.5782 13.935C21.6042 13.9176 21.6372 13.8948 21.6688 13.8695C21.6847 13.8568 21.7065 13.8384 21.7294 13.8155C21.748 13.797 21.7901 13.7532 21.8265 13.6884L20.9116 13.1748C20.9439 13.1174 20.979 13.0822 20.988 13.0732C21.0014 13.0598 21.0111 13.052 21.0127 13.0507C21.016 13.0481 21.0119 13.0515 20.9953 13.0626C20.9618 13.085 20.9185 13.1116 20.8594 13.1484C20.8076 13.1806 20.7405 13.2227 20.6837 13.2635C20.656 13.2833 20.6179 13.3119 20.5811 13.3462C20.5627 13.3634 20.5361 13.3899 20.5092 13.4244C20.4864 13.4537 20.4386 13.5199 20.411 13.6162L21.4197 13.9048ZM21.8258 13.6897C22.5819 12.3517 22.6537 11.4217 22.3064 10.7857C22.1381 10.4775 21.8984 10.2959 21.7069 10.1933C21.6111 10.142 21.5247 10.1089 21.4594 10.088C21.4266 10.0775 21.3985 10.0698 21.3764 10.0644C21.3654 10.0617 21.3558 10.0595 21.3479 10.0578C21.3439 10.057 21.3403 10.0562 21.3371 10.0556C21.3355 10.0553 21.334 10.055 21.3327 10.0548C21.332 10.0546 21.3313 10.0545 21.3307 10.0544C21.3304 10.0543 21.3299 10.0542 21.3298 10.0542C21.3293 10.0541 21.3289 10.054 21.2339 10.57C21.139 11.0859 21.1386 11.0858 21.1381 11.0857C21.138 11.0857 21.1376 11.0856 21.1373 11.0856C21.1368 11.0855 21.1363 11.0854 21.1358 11.0853C21.1348 11.0851 21.1339 11.0849 21.133 11.0848C21.1314 11.0844 21.13 11.0842 21.129 11.0839C21.127 11.0835 21.1261 11.0833 21.1263 11.0833C21.1268 11.0835 21.1314 11.0846 21.1391 11.0871C21.155 11.0922 21.1812 11.1019 21.2116 11.1182C21.2722 11.1507 21.3386 11.2027 21.3856 11.2886C21.4689 11.4411 21.6083 11.9419 20.9124 13.1735L21.8258 13.6897ZM21.2339 10.57C21.7577 10.5988 21.7577 10.5987 21.7577 10.5987C21.7577 10.5986 21.7577 10.5985 21.7577 10.5985C21.7578 10.5983 21.7578 10.5982 21.7578 10.598C21.7578 10.5976 21.7578 10.5971 21.7578 10.5966C21.7579 10.5955 21.758 10.5941 21.7581 10.5924C21.7582 10.589 21.7585 10.5842 21.7587 10.5782C21.7593 10.5663 21.76 10.5493 21.7607 10.5276C21.7623 10.4844 21.764 10.4225 21.7649 10.3447C21.7667 10.1894 21.7654 9.96991 21.7531 9.70924C21.7287 9.19152 21.6602 8.4947 21.4788 7.80956L20.4646 8.07814C20.62 8.6651 20.6826 9.28133 20.7051 9.75865C20.7163 9.9955 20.7174 10.1941 20.7158 10.3323C20.715 10.4014 20.7135 10.4552 20.7122 10.491C20.7116 10.5088 20.711 10.5222 20.7106 10.5307C20.7104 10.5349 20.7103 10.5379 20.7102 10.5397C20.7102 10.5406 20.7101 10.5411 20.7101 10.5414C20.7101 10.5415 20.7101 10.5415 20.7101 10.5415C20.7101 10.5415 20.7101 10.5414 20.7101 10.5414C20.7101 10.5413 20.7101 10.5413 20.7101 10.5412C20.7101 10.5412 20.7101 10.5411 21.2339 10.57ZM20.9717 7.94385C21.4782 7.80731 21.4781 7.80701 21.478 7.8067C21.478 7.80658 21.4779 7.80625 21.4778 7.80601C21.4777 7.80553 21.4776 7.805 21.4774 7.80443C21.4771 7.80327 21.4767 7.80192 21.4763 7.80037C21.4754 7.79729 21.4743 7.79344 21.473 7.78884C21.4703 7.77966 21.4667 7.7675 21.4621 7.75257C21.4528 7.72272 21.4394 7.68172 21.4212 7.63116C21.385 7.53013 21.3298 7.39032 21.2507 7.22466C21.0931 6.89416 20.8382 6.45533 20.4463 6.01603C19.6512 5.12474 18.3172 4.26203 16.19 4.26203V5.31121C17.9934 5.31121 19.0502 6.02712 19.6633 6.71444C19.9755 7.06444 20.1791 7.41492 20.3038 7.6764C20.366 7.80673 20.4079 7.91358 20.4336 7.98521C20.4464 8.02098 20.4551 8.04781 20.4602 8.0642C20.4628 8.0724 20.4644 8.07797 20.4652 8.08073C20.4656 8.08211 20.4658 8.08279 20.4658 8.08274C20.4658 8.08272 20.4657 8.08251 20.4656 8.08212C20.4656 8.08192 20.4655 8.08168 20.4654 8.08139C20.4654 8.08125 20.4653 8.08099 20.4653 8.08092C20.4652 8.08066 20.4652 8.08038 20.9717 7.94385ZM16.19 4.26203C14.0628 4.26203 12.7288 5.12474 11.9337 6.01603C11.5418 6.45533 11.2869 6.89416 11.1292 7.22466C11.0502 7.39032 10.995 7.53013 10.9588 7.63116C10.9406 7.68172 10.9272 7.72272 10.9179 7.75257C10.9133 7.7675 10.9097 7.77966 10.907 7.78884C10.9057 7.79344 10.9046 7.79729 10.9037 7.80037C10.9033 7.80192 10.9029 7.80327 10.9026 7.80443C10.9024 7.805 10.9023 7.80553 10.9022 7.80601C10.9021 7.80626 10.902 7.80658 10.902 7.8067C10.9019 7.80701 10.9018 7.80731 11.4083 7.94385C11.9148 8.08038 11.9148 8.08066 11.9147 8.08092C11.9147 8.08099 11.9146 8.08125 11.9146 8.08139C11.9145 8.08168 11.9144 8.08192 11.9144 8.08212C11.9143 8.08251 11.9142 8.08272 11.9142 8.08274C11.9142 8.08279 11.9144 8.08211 11.9148 8.08073C11.9156 8.07797 11.9172 8.0724 11.9198 8.0642C11.9249 8.04781 11.9336 8.02098 11.9464 7.98521C11.9721 7.91358 12.014 7.80673 12.0762 7.6764C12.2009 7.41492 12.4044 7.06444 12.7167 6.71444C13.3298 6.02712 14.3866 5.31121 16.19 5.31121V4.26203ZM10.9012 7.80956C10.7198 8.4947 10.6513 9.19152 10.6269 9.70924C10.6146 9.96991 10.6133 10.1894 10.6151 10.3447C10.616 10.4225 10.6177 10.4844 10.6192 10.5276C10.62 10.5493 10.6207 10.5663 10.6213 10.5782C10.6215 10.5842 10.6218 10.589 10.6219 10.5924C10.622 10.5941 10.6221 10.5955 10.6221 10.5966C10.6222 10.5971 10.6222 10.5976 10.6222 10.598C10.6222 10.5982 10.6222 10.5983 10.6222 10.5985C10.6223 10.5985 10.6223 10.5986 10.6223 10.5987C10.6223 10.5987 10.6223 10.5988 11.1461 10.57C11.6699 10.5411 11.6699 10.5412 11.6699 10.5412C11.6699 10.5413 11.6699 10.5413 11.6699 10.5413C11.6699 10.5414 11.6699 10.5415 11.6699 10.5415C11.6699 10.5415 11.6699 10.5415 11.6699 10.5414C11.6699 10.5411 11.6698 10.5406 11.6698 10.5397C11.6697 10.5379 11.6695 10.5349 11.6694 10.5307C11.669 10.5222 11.6684 10.5088 11.6678 10.491C11.6665 10.4552 11.665 10.4014 11.6642 10.3323C11.6626 10.1941 11.6637 9.9955 11.6749 9.75865C11.6974 9.28133 11.76 8.6651 11.9154 8.07814L10.9012 7.80956ZM11.1461 10.57C11.0511 10.054 11.0507 10.0541 11.0502 10.0542C11.0501 10.0542 11.0496 10.0543 11.0493 10.0544C11.0487 10.0545 11.048 10.0546 11.0473 10.0548C11.0459 10.055 11.0445 10.0553 11.0429 10.0556C11.0397 10.0562 11.0361 10.057 11.0321 10.0578C11.0242 10.0595 11.0146 10.0617 11.0035 10.0644C10.9815 10.0698 10.9534 10.0775 10.9205 10.088C10.8553 10.1089 10.7688 10.142 10.6731 10.1933C10.4816 10.2959 10.2419 10.4775 10.0736 10.7857C9.72628 11.4217 9.79811 12.3517 10.5542 13.6897L11.4676 13.1735C10.7717 11.9419 10.9111 11.4411 10.9944 11.2886C11.0413 11.2027 11.1077 11.1507 11.1684 11.1182C11.1988 11.1019 11.225 11.0922 11.2409 11.0871C11.2486 11.0846 11.2531 11.0835 11.2536 11.0833C11.2539 11.0833 11.253 11.0835 11.251 11.0839C11.2499 11.0842 11.2486 11.0844 11.247 11.0848C11.2461 11.0849 11.2452 11.0851 11.2442 11.0853C11.2437 11.0854 11.2432 11.0855 11.2427 11.0856C11.2424 11.0856 11.242 11.0857 11.2419 11.0857C11.2414 11.0858 11.241 11.0859 11.1461 10.57ZM10.5535 13.6884C10.5899 13.7532 10.632 13.797 10.6506 13.8155C10.6735 13.8384 10.6953 13.8568 10.7112 13.8695C10.7428 13.8948 10.7758 13.9176 10.8018 13.935C10.8535 13.9695 10.9181 14.0092 10.9659 14.039C11.021 14.0733 11.0599 14.0982 11.0847 14.116C11.0979 14.1254 11.0945 14.124 11.0834 14.1136C11.0778 14.1084 11.0617 14.0931 11.0428 14.0688C11.028 14.0497 10.9855 13.9928 10.9603 13.9047L11.969 13.6162C11.9414 13.5199 11.8936 13.4537 11.8708 13.4244C11.8439 13.3899 11.8173 13.3634 11.7988 13.3462C11.7621 13.3119 11.7239 13.2833 11.6963 13.2635C11.6395 13.2227 11.5724 13.1806 11.5206 13.1484C11.4615 13.1116 11.4182 13.085 11.3847 13.0626C11.368 13.0515 11.364 13.0481 11.3672 13.0507C11.3689 13.052 11.3786 13.0598 11.392 13.0732C11.401 13.0822 11.4361 13.1174 11.4683 13.1748L10.5535 13.6884ZM10.9605 13.9057C11.1118 14.4308 11.6575 15.6107 12.5112 16.6655C13.3579 17.7115 14.6086 18.7571 16.19 18.7571V17.7079C15.0887 17.7079 14.107 16.9694 13.3267 16.0054C12.5535 15.0501 12.0778 13.994 11.9687 13.6153L10.9605 13.9057ZM18.6526 17.4654C18.1861 17.7053 18.1863 17.7056 18.1864 17.7059C18.1864 17.706 18.1866 17.7063 18.1867 17.7065C18.1869 17.7069 18.1871 17.7072 18.1873 17.7076C18.1877 17.7084 18.1881 17.7092 18.1886 17.7101C18.1895 17.7118 18.1904 17.7136 18.1914 17.7155C18.1935 17.7193 18.1958 17.7235 18.1984 17.7281C18.2036 17.7373 18.21 17.7482 18.2176 17.7605C18.2328 17.7852 18.253 17.8159 18.2792 17.8518C18.3316 17.9235 18.4074 18.0152 18.5138 18.1205C18.7269 18.3313 19.0595 18.5929 19.5666 18.8559L20.0495 17.9245C19.6295 17.7066 19.3843 17.5059 19.2516 17.3746C19.185 17.3087 19.1458 17.2594 19.1264 17.2329C19.1167 17.2196 19.1118 17.2118 19.1109 17.2104C19.1105 17.2097 19.111 17.2105 19.1124 17.213C19.1131 17.2143 19.1141 17.2159 19.1152 17.218C19.1157 17.219 19.1164 17.2202 19.117 17.2214C19.1174 17.2221 19.1177 17.2227 19.118 17.2234C19.1182 17.2237 19.1184 17.2241 19.1186 17.2245C19.1187 17.2246 19.1188 17.2249 19.1189 17.225C19.119 17.2253 19.1191 17.2255 18.6526 17.4654ZM13.7274 17.4654C13.3581 17.0928 13.3582 17.0927 13.3584 17.0926C13.3584 17.0925 13.3585 17.0924 13.3586 17.0924C13.3587 17.0922 13.3588 17.0921 13.3589 17.092C13.3591 17.0919 13.3592 17.0917 13.3593 17.0917C13.3594 17.0915 13.3593 17.0916 13.359 17.092C13.3583 17.0926 13.3566 17.0942 13.354 17.0967C13.3487 17.1018 13.3396 17.1103 13.3266 17.1222C13.3006 17.1458 13.2592 17.1824 13.2026 17.2293C13.0894 17.323 12.9159 17.4574 12.6835 17.6112C12.2185 17.9188 11.5202 18.3022 10.6006 18.5925L10.9164 19.593C11.9434 19.2688 12.7295 18.8387 13.2623 18.4862C13.5288 18.3099 13.7325 18.1527 13.8718 18.0373C13.9415 17.9796 13.9952 17.9323 14.0327 17.8982C14.0515 17.8811 14.0662 17.8673 14.0768 17.8572C14.0822 17.8521 14.0865 17.848 14.0898 17.8448C14.0914 17.8432 14.0928 17.8418 14.0939 17.8407C14.0945 17.8401 14.095 17.8396 14.0955 17.8392C14.0957 17.839 14.0959 17.8388 14.0961 17.8386C14.0962 17.8385 14.0963 17.8384 14.0963 17.8383C14.0965 17.8382 14.0966 17.8381 13.7274 17.4654ZM10.6006 18.5925C9.17803 19.0414 7.79906 19.7057 6.7502 20.8613C5.69283 22.0263 5.01627 23.6401 4.90862 25.9002L5.95661 25.9501C6.05492 23.8863 6.66245 22.5191 7.52711 21.5664C8.40028 20.6044 9.58128 20.0143 10.9164 19.593L10.6006 18.5925ZM5.43262 25.9251C5.35074 26.4433 5.3508 26.4433 5.3509 26.4433C5.35097 26.4433 5.35109 26.4433 5.35122 26.4433C5.35149 26.4434 5.35187 26.4435 5.35236 26.4435C5.35333 26.4437 5.35473 26.4439 5.35655 26.4442C5.3602 26.4448 5.36555 26.4456 5.37257 26.4467C5.38661 26.4489 5.40734 26.4521 5.43451 26.4562C5.48885 26.4645 5.56897 26.4766 5.67294 26.4919C5.88087 26.5224 6.18427 26.5658 6.56774 26.6172C7.33457 26.7199 8.42217 26.855 9.70729 26.9846C12.2745 27.2434 15.6429 27.4815 18.8208 27.3926L18.7915 26.3439C15.6775 26.4309 12.3591 26.1974 9.81253 25.9407C8.54076 25.8125 7.46472 25.6788 6.70712 25.5773C6.32837 25.5265 6.02937 25.4838 5.82545 25.4538C5.7235 25.4389 5.64532 25.4271 5.59286 25.4191C5.56662 25.4151 5.54682 25.412 5.53368 25.4099C5.52711 25.4089 5.5222 25.4082 5.519 25.4077C5.51739 25.4074 5.51621 25.4072 5.51546 25.4071C5.51509 25.407 5.51482 25.407 5.51466 25.407C5.51458 25.407 5.51454 25.407 5.5145 25.407C5.51448 25.4069 5.5145 25.407 5.43262 25.9251ZM24.4247 21.7001C24.4247 20.1524 23.0842 18.9174 21.5034 19.0919L21.6186 20.1348C22.5715 20.0295 23.3755 20.7707 23.3755 21.7001H24.4247ZM21.5034 19.0919C20.2774 19.2273 19.2963 20.2324 19.1863 21.4594L20.2313 21.5531C20.2968 20.8219 20.8904 20.2152 21.6186 20.1348L21.5034 19.0919ZM19.1863 21.4594C19.1055 22.3612 19.4835 23.1819 20.1126 23.7104L20.7875 22.9071C20.4087 22.5888 20.1825 22.0977 20.2313 21.5531L19.1863 21.4594ZM20.1126 23.7104C20.2369 23.8148 20.3061 23.9492 20.3173 24.0837L21.3629 23.9965C21.3262 23.5568 21.1044 23.1733 20.7875 22.9071L20.1126 23.7104ZM20.3173 24.0837L20.595 27.4159L21.6405 27.3288L21.3629 23.9965L20.3173 24.0837ZM20.595 27.4159C20.6472 28.0426 21.1711 28.5247 21.8 28.5247V27.4755C21.7168 27.4755 21.6475 27.4117 21.6405 27.3288L20.595 27.4159ZM21.8 28.5247C22.4287 28.5247 22.9529 28.0428 23.0052 27.4159L21.9596 27.3288C21.9527 27.4116 21.8834 27.4755 21.8 27.4755V28.5247ZM23.0052 27.4159L23.2829 24.083L22.2374 23.9958L21.9596 27.3288L23.0052 27.4159ZM23.2829 24.083C23.2944 23.9457 23.3624 23.8144 23.4772 23.719L22.8064 22.9122C22.4842 23.1802 22.2731 23.5668 22.2374 23.9958L23.2829 24.083ZM23.4772 23.719C24.0552 23.2384 24.4247 22.5122 24.4247 21.7001H23.3755C23.3755 22.1872 23.155 22.6224 22.8064 22.9122L23.4772 23.719ZM21.3781 27.9479C21.3417 28.3122 21.3192 29.0417 21.6732 29.6989C22.0574 30.412 22.8193 30.9247 24.1001 30.9247V29.8755C23.1409 29.8755 22.7694 29.5216 22.5969 29.2013C22.3943 28.8251 22.3918 28.3547 22.4221 28.0523L21.3781 27.9479ZM24.1001 30.9247C24.8684 30.9247 25.4325 30.7606 25.8306 30.4273C26.2285 30.0942 26.3757 29.6607 26.459 29.3273C26.48 29.2432 26.498 29.1608 26.514 29.0868C26.5305 29.0103 26.5444 28.9446 26.5595 28.8814C26.5904 28.752 26.6174 28.6727 26.6453 28.62C26.6685 28.576 26.6846 28.5649 26.6955 28.5587C26.7107 28.55 26.7646 28.5247 26.9001 28.5247V27.4755C26.6355 27.4755 26.3895 27.5252 26.175 27.6478C25.9562 27.7728 25.8129 27.9493 25.7174 28.1303C25.6265 28.3025 25.5754 28.4857 25.5391 28.6376C25.5206 28.715 25.5037 28.7947 25.4883 28.8657C25.4725 28.9394 25.4576 29.007 25.4411 29.0729C25.3745 29.3395 25.2966 29.506 25.1571 29.6229C25.0176 29.7396 24.7318 29.8755 24.1001 29.8755V30.9247ZM20.9001 24.1247H22.5801V23.0755H20.9001V24.1247Z"})),"0 0 32 33"),_t=St(()=>o.createElement("g",{id:"bandcamp"},o.createElement("path",{stroke:"none",d:"M25.2,16.9h2.1V22h0c0.6-1,1.8-1.6,2.9-1.6c3,0,4.5,2.4,4.5,5.3c0,2.7-1.3,5.2-4.2,5.2c-1.3,0-2.7-0.3-3.3-1.6 h0v1.4h-2L25.2,16.9L25.2,16.9z M30,22.2c-1.8,0-2.7,1.4-2.7,3.5c0,2,1,3.5,2.7,3.5c1.9,0,2.7-1.8,2.7-3.5 C32.6,23.9,31.7,22.2,30,22.2"}),o.createElement("path",{stroke:"none",d:"M42.6,24.1c-0.2-1.2-1-1.9-2.2-1.9c-1.1,0-2.7,0.6-2.7,3.6c0,1.7,0.7,3.4,2.6,3.4c1.2,0,2.1-0.9,2.3-2.3h2.1 c-0.4,2.6-1.9,4-4.4,4c-3,0-4.7-2.2-4.7-5.2c0-3,1.6-5.4,4.8-5.4c2.2,0,4.2,1.2,4.4,3.6H42.6L42.6,24.1z"}),o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M21.8,18.9l-5.3,9.8H5.1l5.3-9.8H21.8 M25.2,16.9h-16L1.7,30.7h16L25.2,16.9L25.2,16.9z"}))),Ot=St(()=>o.createElement("g",{id:"baidu"},o.createElement("path",X({},Pt,{d:"M14.7613897,18.6744003c0.2496672,3.5700016-1.685133,6.6140671-4.3232002,6.7993336 c-2.6371331,0.1847992-4.9779329-2.558733-5.2275996-6.1296654c-0.2496662-3.5700016,1.6851335-6.6145334,4.3231997-6.7997999 C12.1713896,12.3594666,14.5121899,15.1039333,14.7613897,18.6744003z M32.926857,3.8745334 c-2.5624657-0.6538-5.3545322,1.6281998-6.2360649,5.0964661c-0.8838673,3.4682674,0.4778652,6.8096008,3.0403328,7.4634008 c2.5615311,0.6533337,5.3549995-1.6277323,6.2365341-5.0964661C37.1156578,6.8238668,33.5409889,4.0304003,32.926857,3.8745334z M38.9347229,15.5649996c-2.6954651,0.0401325-4.834198,2.6035318-4.7749329,6.5744009 c0.0587997,3.9703999,2.2885323,5.7805996,4.9858665,5.7404652c2.6940689-0.0401325,4.8337326-1.9142666,4.7754021-5.8865337 C43.8431244,16.8254662,39.5801239,15.5556669,38.9347229,15.5649996z M19.4061222,3 c-2.5647984,0-4.6437998,2.8746667-4.6437998,6.419467s2.0790014,6.4180679,4.6437998,6.4180679 s4.644268-2.8732672,4.644268-6.418067S21.9709244,3,19.4061222,3z M18.8125229,22.9360008 c-1.4816666,2.127533-3.1616659,4.204668-6.422267,6.9262657c-3.2610664,2.7215996-4.6442666,4.6008644-4.6442666,7.3710022 c0,2.770134,1.5810666,7.3709984,6.0769334,7.3709984s6.6696005-0.9897995,10.2270002-0.9897995S29.9793911,45,34.4747887,45 c4.4963341,0,6.3737297-4.2545967,6.3737297-7.0247345c0-2.770134-0.780262-4.3385963-4.3819962-7.5002651 c-2.308136-2.0281334-4.2644005-3.6796684-7.3276024-7.934267c-1.5147991-2.1037331-3.2610645-2.3743992-5.0885315-2.3743992 C22.2219906,20.1663342,20.2951221,20.8093987,18.8125229,22.9360008z"})))),Bt=St(()=>o.createElement("g",{id:"behance"},o.createElement("path",X({},Pt,{d:"M40.9147377,14H30v-3h11v2.6794643L40.9147377,14z M23.474308,25.3441067 c0.6755371,1.0460358,1.0130711,2.3167877,1.0130711,3.8080711c0,1.5428219-0.3807144,2.9263935-1.1551418,4.1488552 c-0.4926071,0.8092537-1.1040707,1.4922142-1.839035,2.0419312c-0.8278217,0.6365356-1.80793,1.0724983-2.9342861,1.3055687 C17.4288445,36.8820724,16.2054501,37,14.8878078,37H3.1785223V11h12.5566063 c3.1650372,0.0515356,5.4089298,0.9685001,6.7339993,2.7694645c0.794857,1.1045351,1.1890354,2.4296055,1.1890354,3.9701061 c0,1.5897141-0.3988209,2.8613949-1.2015705,3.8280354c-0.4466438,0.5418224-1.1063938,1.0344296-1.9797153,1.4792156 C21.7996292,23.5310726,22.8034153,24.2938919,23.474308,25.3441067z M9.1747723,21.2504997h5.5017862 c1.1305351,0,2.0447149-0.2149658,2.7485723-0.6444283c0.703392-0.4290009,1.0543919-1.1913567,1.0543919-2.2861443 c0-1.2094631-0.4647503-2.0122128-1.3965702-2.3984995c-0.8008938-0.2683563-1.825572-0.4067135-3.0689297-0.4067135H9.1747723 V21.2504997z M19.0092716,28.7812138c0-1.3510704-0.5520344-2.2842865-1.6537857-2.7852497 c-0.616106-0.2850704-1.4852505-0.4303913-2.5999994-0.4406071H9.1747723v6.9285336h5.4943571 c1.1286783,0,2.0024652-0.147644,2.632966-0.4559288C18.4391289,31.461071,19.0092716,30.3825359,19.0092716,28.7812138z M44.7989502,24.5515709c0.1267509,0.8505726,0.183857,2.0846443,0.1606407,3.6975727h-13.559927 c0.0752144,1.8719997,0.7210369,3.1808205,1.9467487,3.9297123c0.7386818,0.4698563,1.6347542,0.6992111,2.6840363,0.6992111 c1.1059303,0,2.0080338-0.2799606,2.7021408-0.8547516c0.3783951-0.3045692,0.7122154-0.7349625,1.0005379-1.2772484h4.9697151 c-0.1300011,1.1049995-0.728466,2.2262497-1.8037529,3.3660698c-1.666317,1.8102531-4.0035362,2.7188606-7.0042114,2.7188606 c-2.47929,0-4.6642132-0.7660713-6.5608234-2.2921791c-1.8905697-1.5312119-2.839571-4.0151424-2.839571-7.4606056 c0-3.2309647,0.8524284-5.7037506,2.5628567-7.4253216c1.7160015-1.7243576,3.9315701-2.5828209,6.6625004-2.5828209 c1.6184998,0,3.0777512,0.2892513,4.3791428,0.8710003c1.2981415,0.5822144,2.370182,1.4987144,3.2151794,2.7578564 C44.0783806,21.8081074,44.5700569,23.0904636,44.7989502,24.5515709z M39.907238,25.0367508 c-0.091465-1.2944298-0.523716-2.2740707-1.3013954-2.9435711c-0.7721062-0.6713581-1.7359619-1.0084286-2.8860016-1.0084286 c-1.2521782,0-2.2183571,0.3602848-2.9054985,1.0683193c-0.6913223,0.7066441-1.1217155,1.6672497-1.2981434,2.8836784 L39.907238,25.0367508z"})))),Ft=St(()=>o.createElement("g",{id:"blogger"},o.createElement("path",X({},Pt,{d:"M32.0236893,46c7.6861725,0,13.9298439-6.219635,13.9729462-13.8636856l0.0866966-11.2341328l-0.1297989-0.6018505 l-0.3693199-0.7652721l-0.6245155-0.4803524c-0.8111305-0.6362686-4.9211693,0.044405-6.0276604-0.9606934 c-0.7851715-0.7170887-0.9076233-2.0119991-1.1451836-3.7679844c-0.4413261-3.4007845-0.7200317-3.5777721-1.2529488-4.7307959 C34.5991364,5.5013609,29.3488102,2.4251592,25.7413254,2h-9.7703381C8.2843237,2,2,8.2706089,2,15.9293537v16.2486286 C2,39.8220329,8.2843237,46,15.9709873,46H32.0236893z M16.1487923,13h7.7464199 c1.4787521,0,2.6768379,1.5388832,2.6768379,2.9980402C26.5720501,17.4513206,25.3739643,19,23.8952122,19h-7.7464199 c-1.4792414,0-2.6743889-1.5491695-2.6743889-3.0019598C13.4744024,14.5388832,14.6695499,13,16.1487923,13z M13.4744024,32.0002441C13.4744024,30.5415764,14.6695509,29,16.1487923,29h15.7401962 c1.4694443,0,2.662632,1.5415764,2.662632,3.0002441C34.5516205,33.4398117,33.3584328,35,31.8889885,35H16.1487923 C14.6695499,35,13.4744024,33.4398079,13.4744024,32.0002441z"})))),It=St(()=>o.createElement("g",{id:"leaf"},o.createElement("path",X({},Pt,{d:"M45,2C21.9721107,7.8791499,6,46,6,46"})),o.createElement("path",X({},Pt,{d:"M9,40c0,0-5.1806107-6.5883141-2-16c0,0,0.2217793,6.5537853,2,8c0,0-2.936255-7.1195221,3-14C20.3549213,8.3161421,34.0610886,1.3014609,46,2c0,0-13.8472252,18.5241756-18,25C19.0119514,41.0159378,11.7410355,42.1088982,9,40"})),o.createElement("path",X({},Pt,{d:"M16,28c0,0,6.9070377,1.9907036,11,0"})),o.createElement("path",X({},Pt,{d:"M18,25c0,0,6.9070377,1.9907036,11,0"})),o.createElement("path",X({},Pt,{d:"M22,18c0,0-2.4970016-4.1559143-1-8"})))),Dt=St(()=>o.createElement("g",{id:"digg6"},o.createElement("path",X({},Pt,{d:"M9,9v8H2v3.4374905v7.4453449l0,0V32l0,0 l0,0h4.5371046l0,0h2.0679798l0,0H13V20.5197811v-4.295557V9H9z M6,28v-8h3v8H6z M16,17h4v15h-4V17z M16,9h4v5h-4V9z M33,17L33,17 H23v3.5197811l0,0V32h6v3h-6v6h6.626749H33v-8.8729172v-4.3851089V17L33,17z M26,28v-8h3v8H26z M46,17L46,17H36v3.5197811l0,0V32h6 v3h-6v6h6.6267509H46v-8.8729172v-4.3851089V17L46,17z M39,28v-8h3v8H39z"})))),Zt=St(()=>o.createElement("g",{id:"dribbble"},o.createElement("path",X({},Pt,{d:"M23.4990444,2C11.6248331,2.0009556,2,11.6262674,2,23.5009556C2,35.3737335,11.6248331,45,23.4990444,45 S44.9985657,35.3737335,45,23.5009556C44.9985657,11.6262674,35.3732529,2.0009556,23.4990444,2z M36.6728096,13.1475115 c2.0974464,2.6636114,3.2153816,5.9621897,3.3811684,9.5641546C37.6263885,22.1966228,36,21.9731331,33,21.9731331V22h0.3751869 c-1.720953,0-3.3367996,0.1288891-4.8589973,0.3988323c-0.3702793-0.9068222-0.7448559-1.7914848-1.1227779-2.6256828 C30.7837238,18.2858276,34.0378647,16.154644,36.6728096,13.1475115z M23.4990444,6.7266555 c3.956955,0,7.5861549,1.3831668,10.4595127,3.6860557c-2.1987343,2.632556-5.1012363,4.5393667-8.2368889,5.885745 c-2.2030334-4.2603445-4.3320122-7.3080883-5.787323-9.1714211C21.0862675,6.8714223,22.2754555,6.7266555,23.4990444,6.7266555z M16.0901451,8.4753218c1.1643448,1.3750448,3.4954205,4.1706161,5.9851227,8.8934507 C17.0117779,18.8761597,11.9129343,19,8.8279238,19c-0.0879116,0-0.1748667,0-0.2603893,0H8.5646667 c-0.5193443,0-0.9660664,0.2206402-1.339211,0.2091732C8.428977,14.3931713,11.7285109,10.6334438,16.0901451,8.4753218z M6.7252226,23.5009556c0-0.0788345,0.0028663-0.3051834,0.0076442-0.3878403C7.2115998,23.1307926,7.8260221,23,8.5651445,23 h0.0043011c3.3716784,0,9.2588549-0.1577835,15.2248659-2.0411835c0.325367,0.7109337,0.6469116,1.5245323,0.9655895,2.2932739 c-3.98419,1.3325233-7.1222324,3.4918098-9.4432783,5.605978c-2.2340889,2.0353336-3.7438669,4.0688572-4.625844,5.4147587 C8.222578,31.3507404,6.7266555,27.6136665,6.7252226,23.5009556z M23.4990444,40.2752571 c-3.7328777,0-7.1733551-1.234581-9.9645329-3.306221c0.5934-0.9770584,1.8652449-2.8523369,3.890543-4.7906799 c2.0840683-1.9971104,4.9607677-4.0525112,8.7165775-5.2761002c1.2766228,3.5785561,2.4318905,7.6697693,3.3119564,12.2745895 C27.5998116,39.8829994,25.596489,40.2752571,23.4990444,40.2752571z M32.9924889,37.2967873 C32.1415672,33.132,31.0713444,29.4864502,29.8964882,26.13484C30.9862995,25.9786053,32.1300964,26,33.3369637,26h0.0429993 h0.0028648h0.0028648c2.0009346,0,4.199192,0.1391392,6.5833015,0.6809387 C39.1438751,31.1161499,36.5748672,34.8262024,32.9924889,37.2967873z"})))),Nt=(St(()=>o.createElement("g",{id:"etsy"},o.createElement("path",X({},Pt,{d:"M11.23734,45.2663193c3.689477-0.1606026,8.1707716,0,12.539649,0c4.5095234,0,9.1270866-0.2997894,12.7635193,0 c1.469265,0.1211815,2.8207626,1.0006027,4.0316086,0.2219238c0.9344139-1.2035446,0.241394-2.8188171,0.4482269-4.4379845 c0.3922577-3.0738335,3.2266502-6.7594185-0.8969421-7.5434494c-1.7564087,1.6006737-0.5723305,3.1205559-1.5666046,5.1032677 c-1.2045174,2.4007607-5.5198593,3.2310295-9.628849,3.5493126c-3.5264416,0.2739983-9.7076931,0.6273232-10.9730453-1.7744141 c-1.0682487-2.0270004-0.4487133-5.1709137-0.4487133-7.765377c0-2.9346447-0.3148785-5.744215,0.4487133-7.9882698 c4.4798374,0.3275318,10.2732067-1.4931183,13.4356174,0.4433594c2.115572,1.2965012,0.9125118,3.8335323,3.359026,4.65942 c1.6838913-0.4521217,0.7850037-2.6285286,0.6711235-4.65942c-0.0720291-1.3086662-0.0666771-3.1478081,0-4.65942 c0.090519-2.0401382,0.8779602-4.4063492-1.3441963-4.4374952c-1.7452126,1.3563604-0.4331398,3.6169615-2.2396736,4.8808546 c-0.5771942,0.4049149-1.8308697,0.5757351-2.6854687,0.6667442c-3.3561058,0.3542995-8.619976,0.0652142-11.4217567-0.4443321 c-0.3859329-4.0890388-0.3528385-9.6614571,0-13.7563353c1.5208569-1.5106368,5.0190716-1.5631976,7.3901482-1.5539508 c4.1537647,0.0165472,10.6313992,0.3620858,11.8680363,2.4411578c0.6730728,1.131031,0.139679,3.4982147,1.3441963,3.7717257 c2.4231491,0.5533476,1.2453995-3.7702656,1.3441925-5.7690368c0.0730019-1.4984698,0.7353668-2.4635448,0.4467697-3.5502884 c-0.7840347-1.07117-1.9525375-0.5343683-2.6864433-0.4433603c-7.6203461,0.9422085-19.1934586,0.4433675-27.3189716,0.4433675 c-0.9704285,0-2.6655154-0.4837542-3.3585391,0.6657703c-0.4686675,2.5628266,3.0300336,1.5033364,4.2540193,2.8845181 c0.3980999,0.4492006,0.9864893,2.4333715,1.1198378,3.772212c0.3542995,3.5561285,0,8.9874125,0,14.2006674 c0,5.508667,0.4180527,11.0655117,0,14.4225941c-0.1460018,1.1723938-0.8531399,3.0606918-1.1198378,3.3283615 c-1.5257235,1.5242615-5.5587931-0.1640091-5.1509595,3.1069298C7.2792177,45.9987679,9.3320093,45.3495445,11.23734,45.2663193z"})))),St(()=>o.createElement("g",{id:"facebook"},o.createElement("path",{id:"Facebook",fill:"none",strokeWidth:"2",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M18,10.9089594C18,12.0681973,18,17,18,17h-5v8h5v21h9V25h6.8340988c0,0,0.599041-4,0.8893623-8C33.8908348,17,27,17,27,17s0-4.2918701,0-5.0815639C27,11.1272106,28.513258,10,29.5406246,10C30.5659466,10,33,10,35,10c0-1,0-5,0-8c-3,0-5.9853249,0-7.327034,0C17.6707039,2,18,9.7517662,18,10.9089594z"})))),jt=St(()=>o.createElement("g",{id:"flickr"},o.createElement("circle",X({},Pt,{cx:"11.8544006",cy:"24.1992188",r:"9.0941143"})),o.createElement("circle",X({f:!0},Pt,{cx:"36.3222351",cy:"24.1992188",r:"9.0941143"})))),Wt=St(()=>o.createElement("g",{id:"gigs"},o.createElement("path",X({d:"M12.5036 37.9789H4.79167H4.34375H3V33.4366H4.79167M12.5036 8H4.79167V33.4366M12.5036 8H36.4964M12.5036 8V11.4262V30.27V33.4366H36.4964M36.4964 37.9789H44.2083H46V33.4366H44.2083M36.4964 8H44.2083V30.27V33.4366M36.4964 8V11.4262V33.4366M17.2165 13.9958H18.0734M18.9303 13.9958H18.0734M18.0734 13.9958V11.4262M21.5009 13.9958H22.3578M23.2147 13.9958H22.3578M22.3578 13.9958V11.4262M25.7853 13.9958H26.6422M27.4991 13.9958H26.6422M26.6422 13.9958V11.4262M30.0697 13.9958H30.9266M31.7835 13.9958H30.9266M30.9266 13.9958V11.4262M15.0743 11.4262H33.9257M36.4964 33.4366H12.4062H4.79167M36.4964 33.4366H44.2083M5.6875 32.5282L11.9583 26.169L5.6875 19.8099L11.9583 13.4507L5.6875 8.90845M11.9583 32.5282L5.6875 26.169L11.9583 19.8099L5.6875 13.4507L8.59896 11.1796L11.5104 8.90845M37.0417 32.5282L43.3125 26.169L37.0417 19.8099L43.3125 13.4507L37.0417 8.90845M43.3125 32.5282L37.0417 26.169L43.3125 19.8099L37.0417 13.4507L39.9531 11.1796L42.8646 8.90845M15.0743 40.25V36.6162H33.9257V40.25H15.0743Z"},Pt)))),Ut=St(()=>o.createElement("g",{id:"github"},o.createElement("path",X({},Pt,{d:" M36.9692879,2.195667c0.7404289,1.6814754,1.2201309,4.4742308,0.5043755,6.518959 c3.5867653,2.3613844,3.5317879,8.576931,1.8846931,13.1607246c-1.8671608,5.1962395-7.8165455,7.5695076-10.5787468,7.7725945 c0.5588036,1.2157001,1.6289482,1.6789436,1.8903141,3.6350784c0.3898335,2.9224892-0.6100655,7.2024307,0.376545,9.1503372 c0.4733696,0.9334488,1.2448101,0.9581299,1.7650127,1.7561531c-1.2732906,1.5068054-4.4305649-0.168972-4.7893906-1.7561531 c-0.6157589-2.7180786,0.9378796-6.932209-0.7549858-8.7744255c0.1196079,2.9642563-0.7011967,7.1283913,0.1259365,9.7768555 c0.3259163,1.0416679,1.2669601,1.4435234,1.0081253,2.3826675c-5.9183884,0.6012039-3.4452209-7.6599808-4.4122105-12.536068 c-0.8929482,0.063282-0.5005836,1.337204-0.5037479,1.8808212c-0.0253143,4.7615433,0.9745846,11.2925262-4.1578064,10.6552467 c-0.1499844-1.0005302,0.6885376-1.3410034,1.0081253-2.254837c0.9359798-2.6794739-0.1753006-6.6714745,0.2537708-9.9046898 c-1.958662,1.4764328,0.205677,6.6322403-1.0081234,9.2756386c-0.699297,1.5213661-2.9528656,2.1833229-4.6621866,1.5042763 c0.2227631-1.1327972,1.3922644-0.9499016,1.8884172-2.0054893c0.6936016-1.4713707,0.0050621-3.5907745,0.2525043-5.765873 c-3.6255817,0.7233429-6.4379549-0.1050529-7.8143969-2.3820381c-0.6157608-1.0220451-0.7682772-2.227623-1.5125051-3.1332264 c-0.7404313-0.9062366-1.9238563-1.0283756-2.2668591-2.2554665c4.4900508-1.0809021,4.6621861,4.6210537,8.6946888,4.7621784 c1.2365828,0.0449295,1.8795576-0.3569298,3.0237436-0.625885c0.3202209-1.43783,1.0055962-2.5098743,2.0162525-3.2610626 C14.1829882,29.0853443,8.42764,26.335947,6.9603381,21.875351c-0.5204167-1.5820675-0.465179-10.2110233,2.4136443-12.6595087 c-0.8157396-2.0561209-0.5626011-5.4190707,0.503746-7.020175c3.2142315,0.144289,5.1633997,1.5460465,7.1828165,2.8838856 C19.5647221,4.3676,22.198,4.013206,25.6292973,4.2017946c1.4428921,0.0797381,2.944006,0.7284064,4.0306034,0.625886 c1.066349-0.0999904,2.2415447-1.2967038,3.2768822-1.7536194C34.2853813,2.4785495,35.4264069,2.2513571,36.9692879,2.195667z"})))),Gt=St(()=>o.createElement("g",{id:"instagram"},o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M38.432003,45.432003H10c-3.8499999,0-7-3.1499977-7-7V10c0-3.8499999,3.1500001-7,7-7h28.432003c3.8500023,0,7,3.1500001,7,7v28.432003C45.432003,42.2820053,42.2820053,45.432003,38.432003,45.432003z"})),o.createElement("circle",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{cx:"23.923645",cy:"25.416687",r:"7.4166665"})),o.createElement("circle",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{cx:"23.923645",cy:"25.416687",r:"11.833333"})),o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M38.9166679,13.5835094h-2.7510071c-1.1045685,0-2-0.8954306-2-2V8.8325033c0-1.1045694,0.8954315-2,2-2h2.7510071c1.1045685,0,2,0.8954306,2,2v2.7510061C40.9166679,12.6880789,40.0212364,13.5835094,38.9166679,13.5835094z"})),o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M37,19h4v18c0,2.2091408-1.7908592,4-4,4H11c-2.2091389,0-4-1.7908592-4-4V19h4"})))),qt=St(()=>o.createElement("g",{id:"itunes"},o.createElement("path",X({id:"iTunes"},Pt,{d:"M36.4579773,36.378624c0.2548485,3.3756485-2.2786484,6.4488258-5.6631145,6.8703384c-3.3791752,0.418869-6.3350716-1.9752998-6.5881557-5.3509483c-0.2583752-3.3712349,2.2839413-6.4488239,5.6631145-6.8668098c1.0696621-0.1313915,2.0925846,0.0158749,3.00704,0.3871231V14.8443289l-15.872942,2.9523668v20.7053719h-0.0308647c0.0070534,0.0582008,0.022047,0.1119919,0.022047,0.1701927c0.2566128,3.3756485-2.2786493,6.4452972-5.6578236,6.8668137c-3.3862281,0.418869-6.3315411-1.9761772-6.5881538-5.3474197c-0.2601404-3.3756447,2.2751236-6.4514732,5.6578226-6.8668098c1.0696611-0.1358032,2.0925846,0.015873,3.007041,0.3906517V9.8487616V9.8443527l23.027235-3.9329615l0.022049-0.0079374V5.906981l0.0088196-0.0035272l-0.0088196,0.1049376v30.2026863h-0.0308685C36.4429817,36.2701607,36.4535637,36.3195419,36.4579773,36.378624z"})))),Kt=St(()=>o.createElement("g",{id:"kik"},o.createElement("path",X({},Pt,{d:"M5,41.4933891 V6.5066304C5,4.0166903,6.3082862,2,8.5004892,2C10.6907358,2,12,4.0166903,12,6.5066304v19.6877842l10.588583-10.6740351 c1.1479244-1.2457037,2.4242363-2.0166903,3.8322525-2.0166903c2.1394024,0,3.6646595,1.9570436,3.6646595,4.0328903 c0,1.5419731-0.6456337,2.7285213-1.7412472,3.9136028l-6.2191296,6.1082478l7.4835587,11.4445305 c0.6785851,1.0677452,1.0020142,1.897892,1.0020142,2.9055023c0,2.4312706-1.7175961,4.0915604-3.7005539,4.0915604 c-1.5649509,0-2.5014858-0.593029-3.4411392-2.0753593l-7.6133204-10.8510132L12,36.3355522v5.158329 c0,2.4914055-1.3092642,4.5071182-3.4995108,4.5071182C6.3082862,46.0005112,5,43.9847984,5,41.4933891z M37.3181038,36.1693306 c2.6322098,0,4.7657433-2.1457596,4.7657433-4.7921467s-2.1335335-4.792635-4.7657433-4.792635 c-2.6326981,0-4.7662354,2.1462479-4.7662354,4.792635S34.6854095,36.1693306,37.3181038,36.1693306z"})))),Xt=St(()=>o.createElement("g",{id:"lastfm"},o.createElement("path",X({},Pt,{d:"M37.5164986,37.3455009c-4.6870003-0.019001-7.1844997-2.3269997-8.9204998-6.3934994l-0.4944992-1.1100006l-4.2810001-9.8220005c-1.4174995-3.4769993-4.9405003-5.8260002-8.9134998-5.8260002c-5.3759995,0-9.7375002,4.3915005-9.7375002,9.8074989c0,5.4165001,4.3614998,9.8079987,9.7375002,9.8079987c3.75,0,7.0130005-2.1349983,8.6389999-5.2654991l1.7320004,4.019001C22.8209991,35.5794983,19.0855007,37.5,14.9064999,37.5C7.5024996,37.5,1.5,31.4604988,1.5,24.0014992C1.5,16.5470009,7.5024996,10.5,14.9064999,10.5c5.5890007,0,10.1005001,3.0044994,12.3924999,8.3290005c0.1760006,0.4130001,2.4244995,5.7115002,4.3875008,10.220499c1.2159996,2.7915001,2.2514992,4.6419983,5.6139984,4.7565002c3.3030014,0.1139984,5.5699997-1.9099998,5.5699997-4.4689999c0-2.5-1.7285004-3.1009998-4.6469994-4.078001c-5.2439995-1.7399998-7.9540005-3.487999-7.9540005-7.6765003c0-4.0854998,2.7605-6.8099995,7.2469997-6.8099995c2.9230003,0,5.031498,1.309,6.4925003,3.9189997l-2.8670006,1.4744997c-1.0805016-1.5225-2.2705002-2.1234999-3.7859993-2.1234999c-2.1064987,0-3.607502,1.4744997-3.607502,3.4359999c0,2.7840004,2.4715004,3.2045002,5.9324989,4.3474998C44.3359985,23.3530006,46.5,25.0965004,46.5,29.4510002C46.5,34.0234985,42.6035004,37.3530006,37.5164986,37.3455009z"})))),Qt=St(()=>o.createElement("g",{id:"linkedin"},o.createElement("path",X({},Pt,{d:"M45,28.4110813V44H35V29.4214535c0-3.5367546-1.0577316-5.950222-4.2244434-5.950222 C28.3584633,23.4712315,27,25.958334,27,28.8042545V44h-9.5458603c0,0,0.1179066-25,0-27H27v5c0,0,2.541666-5.125,8-5 C40.7574883,17.0000019,45,20.328104,45,28.4110813z M8.300477,3.5c-2.9934769,0-4.9516401,2.4123216-4.9516401,4.7485638 C3.3488371,10.5339289,5.2503138,13,8.1843834,13h0.0585003c3.0515232,0,4.9493723-2.4656601,4.9493723-4.7514362 C13.1346626,5.9123216,11.2944069,3.5,8.300477,3.5z M4,44h9V17H4V44z"})))),Yt=St(()=>o.createElement("g",{id:"mail"},o.createElement("path",{fill:"none",strokeWidth:"2",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M43,42H5c-1.1,0-2-0.9-2-2V11c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v29C45,41.1,44.1,42,43,42z"}),o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M3,9l18.9,18c1.2,1.1,3,1.1,4.1,0L45,9"}),o.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"3",y1:"42",x2:"21",y2:"26"}),o.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"45",y1:"42",x2:"27",y2:"26"}))),Jt=St(()=>o.createElement("g",{id:"medium"},o.createElement("path",{d:"M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"})),"0 0 22 22"),ei=St(()=>o.createElement("g",{id:"messenger"},o.createElement("path",X({d:"M16.0008 5.33337C9.99132 5.33337 5.33398 9.73531 5.33398 15.6804C5.33398 18.7903 6.60885 21.4774 8.68426 23.3339C8.85811 23.4905 8.96327 23.7073 8.97186 23.9413L9.02981 25.8385C9.04912 26.4438 9.67368 26.8365 10.2274 26.594L12.3436 25.6604C12.5239 25.581 12.7235 25.566 12.9124 25.6175C13.8846 25.8857 14.9212 26.0274 16.0008 26.0274C22.0103 26.0274 26.6676 21.6255 26.6676 15.6804C26.6676 9.73531 22.0103 5.33337 16.0008 5.33337Z"},Pt)),o.createElement("path",X({d:"M9.59591 18.7066L12.7294 13.7359C13.2273 12.9461 14.2962 12.7486 15.0431 13.3088L17.5348 15.1781C17.7645 15.3498 18.0778 15.3477 18.3053 15.176L21.6706 12.622C22.1192 12.2807 22.7073 12.8194 22.4047 13.2959L19.2712 18.2666C18.7732 19.0564 17.7044 19.2539 16.9575 18.6937L14.4657 16.8243C14.2361 16.6526 13.9227 16.6548 13.6952 16.8265L10.3299 19.3805C9.88136 19.7217 9.29329 19.183 9.59591 18.7066Z"},Pt))),"0  0 28  28"),ti=St(()=>o.createElement("g",{id:"about"},o.createElement("path",X({d:"M9 3.00173H40C40 3.00173 45 2.7595 45 8.00173C45 13.8044 44.3106 40.5235 40 44.0017C33.0062 44.2502 9 44.0017 9 44.0017C12.8199 35.244 13.9572 17.4642 14 8.50173C14.0145 5.4642 11.5376 3.00173 8.5 3.00173C5.46243 3.00173 3 5.46417 3 8.50173L13 9.00173"},Pt)),o.createElement("path",X({d:"M20 14.0017H30"},Pt)),o.createElement("path",X({d:"M20 20.0017H39"},Pt)),o.createElement("path",X({d:"M19 26.0017H38"},Pt)),o.createElement("path",X({d:"M18 32.0017H37"},Pt)))),ii=St(()=>o.createElement("g",{id:"jack-2"},o.createElement("path",X({d:"M42 46H6C3.79086 46 2 44.2091 2 42V2H35C36.6569 2 38 3.34315 38 5V42C38 44.2091 39.7909 46 42 46H42C44.2091 46 46 44.2091 46 42V3"},Pt)),o.createElement("path",X({d:"M42 3V42"},Pt)),o.createElement("path",X({d:"M19 7H7V19H19V7Z"},Pt)),o.createElement("path",X({d:"M23 7H32"},Pt)),o.createElement("path",X({d:"M23 11H32"},Pt)),o.createElement("path",X({d:"M23 15H32"},Pt)),o.createElement("path",X({d:"M23 19H32"},Pt)),o.createElement("path",X({d:"M7 25H32"},Pt)),o.createElement("path",X({d:"M7 29H32"},Pt)),o.createElement("path",X({d:"M7 33H19"},Pt)),o.createElement("path",X({d:"M7 37H19"},Pt)),o.createElement("path",X({d:"M7 41H19"},Pt)),o.createElement("path",X({d:"M32 33H23V41H32V33Z"},Pt)))),ni=St(()=>o.createElement("g",{id:"pandora"},o.createElement("path",X({},Pt,{d:"M37.9285774,5.5204482C35.2113647,3.1733198,31.4254551,2,26.6387997,2H7.7781734v1.5404708 c6.0005531,0,6.7866774,1.026655,6.7866774,8.5060797v23.8330574c0,7.4799156-0.7856359,8.5789261-6.7866774,8.5789261v1.5404701 h19.2903557v-1.5404701c-6.0020199,0-6.7881451-1.0990105-6.7881451-8.5789261v-9.1675377h6.3584156 c4.7866554,0,8.5725651-1.1718521,11.2897778-3.4466267C40.6428604,20.9197826,42,17.9859943,42,14.3922119 C42,10.8003874,40.6428604,7.8665991,37.9285774,5.5204482z M26.5684013,24.072588H20.280386V4.7137909h6.2875271 c5.9296646,0,9.0736732,4.0318203,9.0736732,9.678421C35.6415863,20.0393028,32.4975777,24.072588,26.5684013,24.072588z"})))),oi=St(()=>o.createElement("g",{id:"picasa"},o.createElement("path",X({},Pt,{d:"M17,35 c0,0,25.9190979,0,26.6462669,0c-3.0782928,6.4166679-9.2732658,10.3522911-16.2128162,11H23.751194 C21.5500546,45.7946625,19,45.2944832,17,44.3771553C17,44.0887909,17,35,17,35z M32,4 c-3-1.3011808-4.900526-1.8271925-8.0375786-1.8271925c-2.6111259,0-5.1804104,0.5040126-7.6508045,1.4321752 C16.8906212,4.1313958,31,17.3192158,32,18C32,16.9939213,32,4.3092251,32,4z M12.9772024,5.6086254 C5.6186171,9.3918858,2.0479279,15.8527346,2.0479279,24.1321793c0,1.8855438,0.2839029,3.8027382,0.797168,5.7033787 c0.5950758-0.5415096,18.0443764-16.3370647,18.4246979-16.684761 C20.8987236,12.8138161,13.2255564,5.8350658,12.9772024,5.6086254z M13,42.886322c0-0.8575516,0-16.8693199,0-17.8807526 c-1,0.6676331-8.8024483,8.0174484-9.0542107,8.2463264C5.7027726,37.6648102,8,40.4095955,13,42.886322z M35,5.3999496 C35,6.2730846,35,31,35,31c1,0,9.2846794,0,9.6333542,0c0.8151855-2,1.087822-4.5894852,1.087822-7.048193 C45.7211723,16.3205185,42,9.3765364,35,5.3999496z"})))),ri=St(()=>o.createElement("g",{id:"pinterest"},o.createElement("path",{d:"M24.5853882,3.109375c1.9550781,0.000061,3.9710083,0.3492432,6.0358276,1.0501709 c5.0384521,1.7086792,7.6964111,5.315918,8.5581055,10.4273682c0.8616333,5.140686-0.0438232,9.8870239-3.0668945,14.1368408 c-1.5042114,2.1322632-3.1983032,3.3590088-5.5496216,4.0015869c-1.1222534,0.3056641-2.138855,0.4602051-3.0679932,0.4602051 c-2.0452881,0-3.6661377-0.7492676-5.0519409-2.2857666c-0.1752319-0.2044067-0.4672852-0.4526978-0.8470459-0.4526978 c-0.3504639,0-0.7739868,0.1606445-0.9492188,1.0368652l-0.248291,0.9639282 c-0.2628784,0.9784546-0.5111694,1.9569092-0.7156372,2.9500122c-0.6279297,3.1983032-2.0007324,6.3528442-4.2644043,9.4927368 c-0.2920532-2.5703125-0.4526978-5.564209,0.248291-8.5726929c0.5111084-2.1906128,1.0076904-4.3812256,1.5042114-6.5864868 l1.3289795-5.7686157c0.2044678-0.8908691,0.1752319-1.6210938-0.072998-2.3513184 c-0.3796997-1.0661011-0.5257568-2.1322021-0.4527588-3.2128906c0.1606445-2.3220825,0.8324585-3.8117065,2.1906128-4.819397 c0.5695801-0.4381104,1.1975708-0.6571655,1.7963257-0.6571655c1.2705688,0,2.2636719,0.9492798,2.5411377,2.4242554 c0.1752319,0.9639282-0.0438232,1.9423828-0.3067017,2.9500732c-0.2336426,0.8908691-0.4819336,1.7817383-0.744812,2.6725464 c-0.3358765,1.168335-0.6717529,2.3366699-0.9638672,3.5342407c-0.3796997,1.5772705-0.1168213,3.0668945,0.7302246,4.1914063 s2.1760254,1.737915,3.7532959,1.737915H27.18927c2.3074341-0.0876465,3.8847046-1.3436279,5.3743286-3.8262939 c1.9569702-3.2713623,2.7456055-7.0684814,2.4243164-11.5957642c-0.175293-2.4243164-1.1975708-4.5565186-2.9354858-6.1775513 c-2.0153809-1.8839722-4.2498169-2.7747803-7.7548218-2.7747803c-6.2797852,0.0584106-11.201416,4.3228149-12.2528687,10.6464233 c-0.5111694,3.1253052,0,5.5787964,1.5918579,7.5065308c0.2044067,0.2337036,0.24823,0.4819946,0.1752319,0.8324585 c-0.1168213,0.4819336-0.248291,0.9785156-0.3651123,1.4750366c-0.1314697,0.4819336-0.2336426,0.5841675-0.2336426,0.5841675 c-0.0584717,0-0.2191162-0.0292358-0.5988159-0.2190552c-1.4165649-0.7594604-2.4534912-1.9715576-3.1983032-3.7240601 c-0.3942871-0.9054565-0.5695801-1.8839722-0.7740479-2.90625l-0.1168213-0.6425781L8.510498,17.0696411l0.0438232-0.2336426 l0.1022339-0.496582c0.569519-3.6072388,2.1176147-6.5426636,4.6002808-8.7041016 C16.7008667,4.6254883,20.5114746,3.109314,24.5853882,3.109375 M24.5853882,1.109375 c-4.5787354-0.000061-8.8330078,1.6889038-12.6446533,5.0199585c-2.8321533,2.4657593-4.6000366,5.7808228-5.2521973,9.8511353 l-0.0931396,0.4522705l-0.0505981,0.2681885c-0.0235596,0.1253662-0.0349731,0.2526855-0.0342407,0.380188l0.0145874,2.5411377 c0.0006714,0.1161499,0.0114136,0.2319946,0.0321655,0.3462524l0.1168213,0.6425781l0.0551147,0.2781982 c0.1988525,1.0023193,0.40448,2.0386963,0.8530273,3.0688477c0.9224854,2.1707153,2.2615967,3.7095337,4.0869751,4.6881714 c0.0167847,0.0090332,0.0336914,0.0177612,0.0506592,0.0263062c0.6031494,0.3014526,1.0496826,0.4301147,1.4931641,0.4301147 c0.5306396,0,1.0395508-0.2108765,1.4146729-0.5862427c0.3301392-0.3303223,0.5609131-0.7841797,0.7484741-1.4715576 c0.0061646-0.0227051,0.0119629-0.0454712,0.017334-0.0682983c0.0643311-0.2734985,0.1333618-0.5469971,0.2016602-0.8178711 c0.0546265-0.2166748,0.1088867-0.4317627,0.1603394-0.644104c0.0050659-0.0209961,0.0098267-0.0421143,0.0142212-0.0632935 c0.2507935-1.2039185-0.1827393-2.0354004-0.6028442-2.5281372c-1.2018433-1.4645996-1.5666504-3.3386841-1.1484375-5.895874 c0.8835449-5.3136597,5.0222168-8.9202881,10.2977295-8.9693604c2.8579102,0.0001221,4.649231,0.6270142,6.3704224,2.2359619 c1.3720093,1.2797241,2.1690674,2.960022,2.3064575,4.8607178c0.2918701,4.1122437-0.4099731,7.5230713-2.145874,10.4248047 c-1.3691406,2.2819214-2.4715576,2.7977295-3.6990967,2.8530273h-0.1779175c-0.6600342,0-1.5698242-0.1633301-2.1557617-0.9412231 c-0.4838257-0.6422119-0.6199341-1.5371704-0.3833008-2.5200195c0.2810059-1.1519165,0.6166992-2.3197021,0.9413452-3.4489746 c0.263855-0.8939819,0.5199585-1.8128662,0.7574463-2.7185059c0.3084717-1.1825562,0.5882568-2.4489136,0.3399048-3.8151855 c-0.4584351-2.4371338-2.2695313-4.0665283-4.5089111-4.0665283c-1.0612183,0-2.1040649,0.3706665-3.015686,1.0718994 c-1.8128052,1.3446045-2.7641602,3.3425293-2.9664917,6.2666626c-0.0919189,1.3612671,0.0978394,2.7133179,0.5639038,4.0219116 c0.0855713,0.2522583,0.1533813,0.5983887,0.0077515,1.2329102l-1.3285522,5.7670288 c-0.4976196,2.2098389-0.993042,4.3954468-1.5029907,6.5810547c-0.7979126,3.4243774-0.572937,6.7436523-0.2877808,9.2529297 c0.0932617,0.8209839,0.6818237,1.5001221,1.4812622,1.7091064c0.1678467,0.0438843,0.3378296,0.0651855,0.5059204,0.0651855 c0.6326904,0,1.2406006-0.3009644,1.6223755-0.8305054c2.3588867-3.2720337,3.9080811-6.7297363,4.6045532-10.2770386 c0.1710815-0.8305054,0.3803711-1.6657715,0.5650024-2.3669434c1.5148315,1.1881104,3.2572632,1.7692871,5.2846069,1.7692871 c1.1073608,0,2.2828369-0.1735229,3.5935669-0.5305176c2.7789917-0.7594604,4.894165-2.2776489,6.6583252-4.7783813 c3.2330322-4.5449829,4.380249-9.8025513,3.4050903-15.6203613c-1.0249023-6.0795288-4.3516846-10.1131592-9.8882446-11.9907837 C29.0039063,1.4984741,26.7568359,1.109375,24.5853882,1.109375L24.5853882,1.109375z"}))),ci=St(()=>o.createElement("g",{id:"podcast"},o.createElement("circle",X({},Pt,{cx:"24",cy:"18",r:"5"})),o.createElement("path",X({},Pt,{d:"M32,31c0,4.4182777-3.5817223,15-8,15s-8-10.5817223-8-15s3.5817223-8,8-8S32,26.5817223,32,31z"})),o.createElement("path",X({},Pt,{d:"M11.2720776,12.2720776C14.5294371,9.014719,19.029438,7,24,7s9.470562,2.014719,12.7279205,5.2720776"})),o.createElement("path",X({},Pt,{d:"M8.0311718,9.0311718C12.1179514,4.9443922,17.7637844,2.4166667,24,2.4166667s11.8820496,2.5277255,15.9688263,6.6145048"})))),li=St(()=>o.createElement("g",{id:"patreon"},o.createElement("path",X({d:"M26.4755 13.3423V13.3424C26.4755 17.4161 23.1748 20.7273 19.1237 20.7273C15.0575 20.7273 11.7471 17.4144 11.7471 13.3424C11.7471 9.25533 15.0592 5.93337 19.124 5.93337C23.1734 5.93337 26.4759 9.25353 26.4755 13.3423ZM8.21751 5.93337V26.0667H5.52285V5.93337H8.21751Z"},Pt))),"0  0 28  28"),ai=St(()=>o.createElement("g",{id:"quora"},o.createElement("path",X({},Pt,{d:"M34.165535,38.4112091c5.5694313-3.4936028,9.3750229-9.7391644,9.3750229-16.8652153 c0-10.9476976-8.709034-19.8229942-19.5095749-19.8229942S4.4998765,10.5982962,4.4998765,21.5459938 c0,10.9486771,8.7657967,19.8229942,19.5663376,19.8229942c1.5888901,0,2.9498005-0.1965332,4.4282017-0.5597763 C30.350729,44.1864586,32,46.5766373,39,45.4341049V42.073967C39,42.073967,35.3378944,41.1059647,34.165535,38.4112091z M33,24.1669292c0,3.309782-0.7745056,6.3135166-2.4856186,8.5325871C28.3652229,30.4115124,25,28.530756,21,28.7703114v0.4018669 v3.4940929c0,0,3.2298031,0.1148872,5.2146931,3.5263557c-0.7435989,0.2185326-1.9734097,0.3373337-2.7717648,0.3373337 C17.9258118,36.5299606,13,30.9952469,13,24.1664391c0-0.8760891,0-4.2308464,0-5.1074257 c0-6.8283157,4.4821529-12.3635216,9.9992676-12.3635216S33,12.2306976,33,19.0590134C33,19.9360828,33,23.2908401,33,24.1669292z"})))),si=St(()=>o.createElement("g",{id:"reddit"},o.createElement("ellipse",X({},Pt,{cx:"24",cy:"28",rx:"20",ry:"14"})),o.createElement("path",X({},Pt,{d:" M24,13c0,0-0.166666-10.5,10-6"})),o.createElement("circle",X({},Pt,{cx:"39",cy:"9",r:"5"})),o.createElement("path",X({},Pt,{d:" M3.799078,24.8411064c-2.1213846-1.7678204-2.4080048-4.9206448-0.6401844-7.0420284s4.9206438-2.4080048,7.0420284-0.6401844"})),o.createElement("path",X({},Pt,{d:" M37.9304008,17.0772038c2.1494102-1.7336378,5.2972412-1.3965874,7.03088,0.7528229 c1.7336349,2.1494083,1.3965874,5.2972412-0.7528229,7.0308781"})),o.createElement("circle",X({},Pt,{cx:"16",cy:"25",r:"2"})),o.createElement("circle",X({},Pt,{cx:"31",cy:"25",r:"2"})),o.createElement("path",X({},Pt,{d:" M16,32c0,0,7.833334,6.3333321,15,0"})))),di=St(()=>o.createElement("g",{id:"profile"},o.createElement("path",X({},Pt,{strokeWidth:"0.68",d:"M5.2633 4.68C5.6833 4.32 5.9233 3.804 5.9233 3.192C5.9233 1.956 4.9873 1.08 3.5473 1.08H0.775297V9H4.1713C5.7313 9 6.7393 8.028 6.7393 6.696C6.7393 5.712 6.1873 4.98 5.2633 4.68ZM3.4273 2.196C4.2313 2.196 4.6513 2.616 4.6513 3.252C4.6513 3.888 4.2313 4.332 3.4273 4.332H2.0233V2.196H3.4273ZM4.0633 7.884H2.0233V5.424H4.0633C4.9633 5.424 5.4553 5.916 5.4553 6.66C5.4553 7.404 4.9633 7.884 4.0633 7.884ZM10.8453 9.132C12.5973 9.132 13.9773 7.764 13.9773 6.048C13.9773 4.332 12.5973 2.976 10.8453 2.976C9.10527 2.976 7.73727 4.32 7.73727 6.048C7.73727 7.764 9.10527 9.132 10.8453 9.132ZM10.8453 7.968C9.80127 7.968 9.02127 7.152 9.02127 6.06C9.02127 4.956 9.80127 4.128 10.8573 4.128C11.8893 4.128 12.6813 4.956 12.6813 6.06C12.6813 7.14 11.8893 7.968 10.8453 7.968ZM18.1578 9.132C19.9098 9.132 21.2898 7.764 21.2898 6.048C21.2898 4.332 19.9098 2.976 18.1578 2.976C16.4178 2.976 15.0498 4.32 15.0498 6.048C15.0498 7.764 16.4178 9.132 18.1578 9.132ZM18.1578 7.968C17.1138 7.968 16.3338 7.152 16.3338 6.06C16.3338 4.956 17.1138 4.128 18.1698 4.128C19.2018 4.128 19.9938 4.956 19.9938 6.06C19.9938 7.14 19.2018 7.968 18.1578 7.968ZM22.7343 9H23.9943V-7.15256e-07H22.7343V9ZM25.5183 5.7L27.8943 3.108H26.3343L24.0303 5.688L26.5863 9H28.0983L25.5183 5.7ZM7.35552 13.08V18.42L2.54352 12.948H2.09952V21H3.37152V15.636L8.19552 21.132H8.62752V13.08H7.35552ZM13.2242 21.132C14.9762 21.132 16.3562 19.764 16.3562 18.048C16.3562 16.332 14.9762 14.976 13.2242 14.976C11.4842 14.976 10.1162 16.32 10.1162 18.048C10.1162 19.764 11.4842 21.132 13.2242 21.132ZM13.2242 19.968C12.1802 19.968 11.4002 19.152 11.4002 18.06C11.4002 16.956 12.1802 16.128 13.2362 16.128C14.2682 16.128 15.0602 16.956 15.0602 18.06C15.0602 19.14 14.2682 19.968 13.2242 19.968ZM25.3303 15.108L23.8063 18.912L21.9943 14.976H21.5623L19.7743 18.96L18.2263 15.108H16.8823L19.4983 21.132H19.9303L21.7783 17.208L23.6263 21.132H24.0583L26.6743 15.108H25.3303Z",fill:"#3A4B69"}))),"0 0 29 22"),mi=St(()=>o.createElement("g",{id:"soundcloude"},o.createElement("path",X({fillRule:"evenodd",clipRule:"evenodd"},Pt,{d:"M40.6578903,23.2774296c-0.6387749,0-1.2503662,0.1494999-1.8347778,0.4484997c-0.1902695,0.0951366-0.3941345,0.1494999-0.6115913,0.1494999c-0.2310448,0-0.4620895-0.0543633-0.6659546-0.1766815c-0.3941383-0.2174549-0.6523628-0.6251831-0.6795464-1.0872746c-0.4485016-6.2382355-4.6458015-11.1173801-9.6608562-11.1173801c-0.8493366,0-1.7007198,0.1456184-2.5046692,0.4243708C24.2872944,12.0617313,24,12.4388657,24,12.8761969v22.0687904c0,0.5519676,0.4472198,0.9995499,0.9991875,1l15.7425423,0.0127792c2.7317772,0,4.9187698-2.8405037,4.9187698-6.333374C45.6604996,26.1179333,43.3896675,23.2774296,40.6578903,23.2774296z"})),o.createElement("line",X({},Pt,{x1:"20",y1:"36",x2:"20",y2:"13"})),o.createElement("line",X({},Pt,{x1:"17",y1:"36",x2:"17",y2:"15"})),o.createElement("line",X({},Pt,{x1:"14",y1:"36",x2:"14",y2:"20"})),o.createElement("line",X({},Pt,{x1:"11",y1:"36",x2:"11",y2:"25"})),o.createElement("line",X({},Pt,{x1:"8",y1:"36",x2:"8",y2:"26"})),o.createElement("line",X({},Pt,{x1:"5",y1:"36",x2:"5",y2:"29"})))),pi=St(()=>o.createElement("g",{id:"spotify"},o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",strokeLinejoin:"round",d:"M24,2C11.8,2,2,11.8,2,24c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22C46,11.8,36.2,2,24,2z M34.1,33.7 c-0.4,0.6-1.2,0.9-1.9,0.5C27,31,20.5,30.3,12.9,32.1c-0.7,0.2-1.5-0.3-1.6-1c-0.2-0.7,0.3-1.5,1-1.6c8.4-1.9,15.6-1.1,21.4,2.5 C34.3,32.2,34.5,33.1,34.1,33.7z M36.8,27.7c-0.5,0.8-1.6,1.1-2.4,0.6c-5.9-3.6-14.9-4.7-21.9-2.6c-0.9,0.3-1.9-0.2-2.1-1.1 c-0.3-0.9,0.2-1.9,1.1-2.1c8-2.4,17.9-1.3,24.7,2.9C37,25.9,37.3,26.9,36.8,27.7z M37,21.5c-7.1-4.2-18.8-4.6-25.6-2.5 c-1.1,0.3-2.2-0.3-2.6-1.4c-0.3-1.1,0.3-2.2,1.4-2.6C18,12.7,31,13.1,39.1,18c1,0.6,1.3,1.8,0.7,2.8C39.3,21.8,38,22.1,37,21.5z"}))),hi=St(()=>o.createElement("g",{id:"jack-2"},o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M26,16.6000004V7l-0.2774048-1c0.2627659-0.451417,0.3706398-1.0046206,0.1827965-1.6021934c-0.2199955-0.6998515-0.8400688-1.2497916-1.5638504-1.3695009C23.0861359,2.8206689,22,3.7834423,22,5c0,0.3661499,0.1055908,0.704834,0.2774048,1L22,7v9.6000004C22,17.3731995,21.3731995,18,20.6000004,18h-0.0009441c-0.8467045,0-1.4996223,0.7457523-1.3877182,1.5850296l1.6266651,12.1999989C20.9307404,32.4805565,21.5240402,33,22.2257233,33h3.5485535c0.701683,0,1.2949829-0.5194435,1.3877201-1.2149715l1.6266651-12.1999989C28.9005661,18.7457523,28.2476482,18,27.4009438,18h-0.0009441C26.6268005,18,26,17.3731995,26,16.6000004z"}),o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M24,33c0,0-0.8808041,5.5934448,4,8c5.5537834,2.7383804,12.0292168,1.6175308,15,5"}),o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M15.0783405,17.0401802l-3.0308294-9.1090107l-0.578928-0.8612757c0.1068096-0.5112877,0.0345125-1.0702548-0.3323841-1.57796c-0.4296942-0.5946031-1.1916771-0.9206524-1.916234-0.8057332C7.963213,4.8855295,7.2365861,6.1419673,7.6206675,7.2963042c0.1155977,0.3474236,0.3227143,0.6354494,0.578928,0.8612752l0.052495,1.0364351l3.0308294,9.1090117c0.2441072,0.7336521-0.1527481,1.5262852-0.8864021,1.7703934l-0.0008955,0.0002975c-0.8034,0.2673149-1.1874828,1.1810589-0.8163328,1.9420815l5.3951502,11.062479c0.3075809,0.6306763,1.0345287,0.9362411,1.700325,0.7147102l3.3670635-1.1203194c0.6657963-0.2215271,1.0647564-0.9017143,0.9331646-1.5909481l-2.3082066-12.089592c-0.1587906-0.8316822-1.0137558-1.3331585-1.8171577-1.0658455l-0.0008945,0.0002975C16.1150799,18.1706886,15.3224478,17.7738342,15.0783405,17.0401802z"}),o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M18,34c0,0-0.5498009,3.7808762,10,5s10.8154068,8,10.8154068,8"}),o.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"22",y1:"17",x2:"26",y2:"17"}),o.createElement("line",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",x1:"11.1026335",y1:"18.6324558",x2:"14.8973665",y2:"17.3675442"}))),ui=St(()=>o.createElement("g",{id:"tiktok"},o.createElement("path",{id:"tiktok1",d:"m432.734375 112.464844c-53.742187 0-97.464844-43.722656-97.464844-97.464844 0-8.285156-6.71875-15-15-15h-80.335937c-8.285156 0-15 6.714844-15 15v329.367188c0 31.59375-25.703125 57.296874-57.300782 57.296874-31.59375 0-57.296874-25.703124-57.296874-57.296874 0-31.597657 25.703124-57.300782 57.296874-57.300782 8.285157 0 15-6.714844 15-15v-80.335937c0-8.28125-6.714843-15-15-15-92.433593 0-167.632812 75.203125-167.632812 167.636719 0 92.433593 75.199219 167.632812 167.632812 167.632812 92.433594 0 167.636719-75.199219 167.636719-167.632812v-145.792969c29.855469 15.917969 63.074219 24.226562 97.464844 24.226562 8.285156 0 15-6.714843 15-15v-80.335937c0-8.28125-6.714844-15-15-15zm-15 79.714844c-32.023437-2.664063-62.433594-13.851563-88.707031-32.75-4.566406-3.289063-10.589844-3.742188-15.601563-1.171876-5.007812 2.5625-8.15625 7.71875-8.15625 13.347657v172.761719c0 75.890624-61.746093 137.632812-137.636719 137.632812-75.890624 0-137.632812-61.742188-137.632812-137.632812 0-70.824219 53.773438-129.328126 122.632812-136.824219v50.8125c-41.015624 7.132812-72.296874 42.984375-72.296874 86.011719 0 48.136718 39.160156 87.300781 87.296874 87.300781 48.140626 0 87.300782-39.164063 87.300782-87.300781v-314.367188h51.210937c6.871094 58.320312 53.269531 104.71875 111.589844 111.589844zm0 0"})),"-32 0 512 512"),gi=St(()=>o.createElement("g",{id:"tumnlr"},o.createElement("path",X({id:"Tumblr"},Pt,{d:"M28.2993774,37.7747498c-0.7568913-0.4442291-2.1146793-1.208622-2.3918228-1.9455032C25.627409,35.0868607,25,33.5830879,25,30.9702377V20h11v-8H25V2h-5.1334782c-0.2881489,2.0465117-0.818922,3.7235594-1.5888195,5.2263365c-0.7713985,1.504777-2.3346605,2.534627-3.6103191,3.6091824C13.3977261,11.9080725,11.0465117,12.4786854,9,13.0489798V20h6v15.2144318c0,2.0610657,0.8481932,3.6338768,1.282917,4.7164345c0.4367256,1.081562,1.5314178,2.1065865,2.657999,3.0710869c1.1265812,0.9539909,2.6441803,1.6983757,4.2400036,2.2216492C24.774744,45.7413673,26.0790749,46,28.1551456,46c1.8259449,0,3.2625713-0.1840935,4.8388805-0.544281C34.5683441,45.0865288,36,44.4506989,38,43.5487366v-7.1031723c-2,1.4827652-4.2572517,2.2211494-6.556942,2.2211494C30.1488895,38.6672134,29.3078976,38.3695602,28.2993774,37.7747498z"})))),Ci=St(()=>o.createElement("g",{id:"twitch"},o.createElement("path",{id:"twitch1",strokeWidth:"1",d:"M9.5,37h10v5c0,0.404,0.244,0.77,0.617,0.924C20.241,42.976,20.371,43,20.5,43c0.26,0,0.516-0.102,0.707-0.293L26.914,37 H38c0.265,0,0.52-0.105,0.707-0.293l6.5-6.5C45.395,30.02,45.5,29.766,45.5,29.5V6c0-0.553-0.448-1-1-1h-35c-0.552,0-1,0.447-1,1 v30C8.5,36.553,8.948,37,9.5,37z M10.5,7h33v22.086L37.586,35H26.5c-0.265,0-0.52,0.105-0.707,0.293L21.5,39.586V36 c0-0.553-0.448-1-1-1h-10V7z"}),o.createElement("path",{id:"twitch2",strokeWidth:"1",d:"M50.5,0H5C4.644,0,4.315,0.189,4.136,0.496l-3.5,6C0.547,6.649,0.5,6.823,0.5,7v37c0,0.553,0.448,1,1,1h11v6 c0,0.553,0.448,1,1,1h7c0.247,0,0.485-0.092,0.669-0.257L28.662,45H38c0.251,0,0.493-0.095,0.677-0.264l12.5-11.5 c0.206-0.189,0.323-0.457,0.323-0.736V1C51.5,0.447,51.052,0,50.5,0z M49.5,32.062L37.61,43h-9.332 c-0.247,0-0.485,0.092-0.669,0.257L20.116,50H14.5v-6c0-0.553-0.448-1-1-1h-11V7.271L5.574,2H49.5V32.062z"}),o.createElement("path",{id:"twitch3",strokeWidth:"1",d:"M21.5,28h4c0.552,0,1-0.447,1-1V14c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v13C20.5,27.553,20.948,28,21.5,28z M22.5,15h2v11h-2V15z"}),o.createElement("path",{id:"twitch4",strokeWidth:"1",d:"M31.5,28h4c0.552,0,1-0.447,1-1V14c0-0.553-0.448-1-1-1h-4c-0.552,0-1,0.447-1,1v13C30.5,27.553,30.948,28,31.5,28z M32.5,15h2v11h-2V15z"})),"0 0 52 52"),vi=St(()=>o.createElement("g",{id:"twitter_1_"},o.createElement("path",X({id:"Twitter__x28_alt_x29_"},Pt,{d:"M40.8405876,20.3372402c2.4460297-0.2017784,4.1047821-1.3137436,4.7435074-2.8224907c-0.8826027,0.5419483-3.6213837,1.1327705-5.1340027,0.570015c-0.0740318-0.3551712-0.1567764-0.6929207-0.2380676-0.9977665c-1.152607-4.2320433-5.0986786-7.6414843-9.2334595-7.2297001c0.3343639-0.1350021,0.6735649-0.2608128,1.0122852-0.3735571c0.4548512-0.1630688,3.1254025-0.5975962,2.7049046-1.5402002c-0.3546867-0.8288918-3.6170254,0.6266289-4.2310734,0.8167944c0.8105049-0.3048458,2.1518307-0.8293762,2.2950573-1.7613344c-1.2421284,0.1703267-2.4615116,0.757761-3.4036331,1.6118145c0.340168-0.3662996,0.5980797-0.8124404,0.6527576-1.2929354c-3.3136349,2.1169891-5.2491665,6.3848391-6.8154964,10.5244589c-1.230032-1.1918049-2.320219-2.130537-3.2981491-2.651679c-2.7436161-1.471489-6.0238628-3.0063658-11.1733465-4.9181881c-0.1582298,1.7037525,0.8424406,3.9692936,3.7259007,5.4756222c-0.6246929-0.0837126-1.7671413,0.1030674-2.6807127,0.3217821c0.3721056,1.9519844,1.5871372,3.5599289,4.877059,4.3375301c-1.5034256,0.0991955-2.2805414,0.4412994-2.9845924,1.1787395c0.6846952,1.3572922,2.3555431,2.9550743,5.3614244,2.6270027c-3.3416967,1.4405193-1.3626156,4.1081657,1.3568096,3.7099323c-4.6389866,4.7914085-11.9528809,4.4396248-16.152504,0.4321041c10.9652767,14.9418316,34.8013611,8.8366718,38.35355-5.5554619c2.6608734,0.0227432,4.22575-0.9217968,5.1959343-1.9631138C44.2413177,21.0969372,42.0193253,20.827898,40.8405876,20.3372402z"})))),wi=St(()=>o.createElement("g",{id:"youtube"},o.createElement("path",X({id:"YouTube"},Pt,{d:"M44.4285698,17.194952c0-3.4215393-2.7715721-6.194952-6.1912651-6.194952H9.1912718C5.7715716,11,3,13.7734127,3,17.194952v16.6100941C3,37.2265854,5.7715716,40,9.1912699,40h29.0460358c3.419693,0,6.1912651-2.7734146,6.1912651-6.1949539V17.194952z M19.5714283,33.6020012V18l11.8310776,7.8010006L19.5714283,33.6020012z"})))),fi=St(()=>o.createElement("g",{id:"vimeo"},o.createElement("path",X({id:"Vimeo"},Pt,{d:"M38.5883179,6.1411314c-5.7319756-0.1869121-9.6108646,3.028162-11.6417046,9.6493464c1.0458851-0.4306316,2.0624485-0.6482372,3.05336-0.6482372c2.0903931,0,3.0157928,1.1732407,2.7684097,3.5256767c-0.1223183,1.4242916-1.0458851,3.4968166-2.7684097,6.217123c-1.7289391,2.7244301-3.0203743,4.0845833-3.8784294,4.0845833c-1.1141434,0-2.1279602-2.1050529-3.0538177-6.3096619c-0.3106041-1.2382946-0.8658428-4.3915234-1.6606789-9.467473c-0.7453575-4.701211-2.7148075-6.8978877-5.9170551-6.5891161c-1.3546562,0.1241503-3.3841209,1.3647346-6.0925159,3.7125912c-1.9758635,1.7949076-3.9778404,3.5902719-6.0128021,5.3838062l1.9387565,2.5031586c1.8503399-1.3001404,2.9328742-1.9470024,3.2333999-1.9470024c1.4187918,0,2.7441282,2.2255383,3.9769239,6.6766167c1.1054401,4.0877895,2.2200422,8.1700783,3.3305206,12.2519131c1.6542645,4.4542847,3.6933498,6.6821136,6.0920563,6.6821136c3.8798065,0,8.6300316-3.6489105,14.231905-10.9490261c5.4195404-6.9890537,8.2177238-12.495636,8.4064713-16.5206642C44.8434639,9.0176563,42.8414841,6.262991,38.5883179,6.1411314z"})))),bi=St(()=>o.createElement("g",{id:"whatsapp"},o.createElement("path",X({},Pt,{d:"M5.38379 26.6667L6.88334 21.1885C5.95801 19.5849 5.47179 17.7672 5.47268 15.9032C5.47534 10.0756 10.2176 5.33337 16.0442 5.33337C18.8718 5.33426 21.526 6.4356 23.5225 8.43382C25.518 10.432 26.6167 13.088 26.6158 15.9129C26.6131 21.7414 21.8709 26.4836 16.0442 26.4836C14.2753 26.4827 12.5322 26.0392 10.9882 25.1965L5.38379 26.6667ZM11.2478 23.2827C12.7376 24.1672 14.1598 24.6969 16.0407 24.6978C20.8833 24.6978 24.8282 20.7565 24.8309 15.9112C24.8327 11.056 20.9065 7.12004 16.0478 7.11826C11.2016 7.11826 7.25934 11.0596 7.25757 15.904C7.25668 17.8818 7.83623 19.3627 8.80957 20.912L7.92157 24.1547L11.2478 23.2827ZM21.3696 18.4258C21.3038 18.3156 21.1278 18.2498 20.8629 18.1174C20.5989 17.9849 19.3002 17.3458 19.0576 17.2578C18.8158 17.1698 18.6398 17.1254 18.4629 17.3903C18.2869 17.6543 17.7802 18.2498 17.6265 18.4258C17.4727 18.6018 17.318 18.624 17.054 18.4916C16.79 18.3592 15.9385 18.0809 14.9296 17.1805C14.1447 16.48 13.614 15.6152 13.4602 15.3503C13.3065 15.0863 13.4442 14.9432 13.5758 14.8116C13.6949 14.6934 13.8398 14.5032 13.9722 14.3485C14.1065 14.1956 14.15 14.0854 14.2389 13.9085C14.3269 13.7325 14.2833 13.5778 14.2167 13.4454C14.15 13.3138 13.622 12.0134 13.4025 11.4845C13.1873 10.9698 12.9696 11.0392 12.8078 11.0312L12.3011 11.0223C12.1251 11.0223 11.8389 11.088 11.5971 11.3529C11.3553 11.6178 10.6727 12.256 10.6727 13.5565C10.6727 14.8569 11.6193 16.1129 11.7509 16.2889C11.8833 16.4649 13.6131 19.1334 16.2629 20.2774C16.8931 20.5494 17.3856 20.712 17.7687 20.8338C18.4016 21.0347 18.9776 21.0063 19.4327 20.9387C19.9402 20.8632 20.9953 20.2996 21.2158 19.6827C21.4362 19.0649 21.4362 18.536 21.3696 18.4258Z",strokeWidth:"1.2"}))),"0  0 28  28"),Mi=St(()=>o.createElement("g",{id:"wechat"},o.createElement("path",X({},Pt,{fillRule:"evenodd",clipRule:"evenodd",d:"M25.1398 23.9314C26.6058 22.8685 27.5427 21.2977 27.5427 19.5509C27.5427 16.3516 24.429 13.7574 20.5891 13.7574C16.7492 13.7574 13.6355 16.3516 13.6355 19.5509C13.6355 22.7511 16.7492 25.3454 20.5891 25.3454C21.3827 25.3454 22.1483 25.2328 22.8592 25.028L23.0631 24.9972C23.1968 24.9972 23.318 25.0385 23.4325 25.1039L24.891 25.9419L25.0889 26.0264C25.2168 26.0264 25.3207 25.9225 25.3207 25.7946L25.2685 25.5734L24.9696 24.4566L24.9455 24.3085C24.9455 24.1526 25.0225 24.0151 25.1398 23.9314ZM12.8015 7.35974C8.19306 7.35974 4.45703 10.4725 4.45703 14.3133C4.45703 16.4084 5.58053 18.2946 7.33985 19.5692C7.48125 19.6692 7.57359 19.8346 7.57359 20.0222L7.54474 20.1992L7.16863 21.6017L7.12342 21.8046C7.12342 21.9585 7.24847 22.0836 7.40141 22.0836C7.55436 22.0836 7.65272 22.0001 7.65272 22.0001L9.38966 20.9764C9.52625 20.8975 9.6715 20.8485 9.83214 20.8485L10.0774 20.885C10.9297 21.1303 11.8492 21.2669 12.8015 21.2669L13.2594 21.2554C13.0786 20.7129 12.9795 20.1415 12.9795 19.5518C12.9795 16.0496 16.3865 13.21 20.5891 13.21L21.0421 13.2216C20.414 9.90012 16.9637 7.35974 12.8015 7.35974ZM18.2709 18.6246C17.7592 18.6246 17.3446 18.209 17.3446 17.6973C17.3446 17.1846 17.7592 16.77 18.2709 16.77C18.7836 16.77 19.1982 17.1846 19.1982 17.6973C19.1982 18.209 18.7836 18.6246 18.2709 18.6246ZM22.9073 18.6246C22.3946 18.6246 21.98 18.209 21.98 17.6973C21.98 17.1846 22.3946 16.77 22.9073 16.77C23.419 16.77 23.8336 17.1846 23.8336 17.6973C23.8336 18.209 23.419 18.6246 22.9073 18.6246ZM10.0197 13.2004C9.40505 13.2004 8.90775 12.7021 8.90775 12.0885C8.90775 11.4738 9.40505 10.9755 10.0197 10.9755C10.6344 10.9755 11.1326 11.4738 11.1326 12.0885C11.1326 12.7021 10.6344 13.2004 10.0197 13.2004ZM15.5824 13.2004C14.9677 13.2004 14.4704 12.7021 14.4704 12.0885C14.4704 11.4738 14.9677 10.9755 15.5824 10.9755C16.197 10.9755 16.6953 11.4738 16.6953 12.0885C16.6953 12.7021 16.197 13.2004 15.5824 13.2004Z",strokeWidth:"1.2"}))),"0  0 28  28"),Ei=St(()=>o.createElement("g",{id:"star"},o.createElement("path",X({},Pt,{d:"M24.9510574,4.0194278l3.9931278,12.2895889C29.0780602,16.7210388,29.4620171,17,29.8952427,17H42.802742c0.9701309,0,1.3719711,1.2425823,0.5855446,1.8106384l-10.4341469,7.5368614c-0.3521767,0.254385-0.4998169,0.7070522-0.3653488,1.1201591l3.9884644,12.2532158c0.3000298,0.9217415-0.7554131,1.6884384-1.539238,1.1181297l-10.4503136-7.603611c-0.3504143-0.2549629-0.8251705-0.2552071-1.1758499-0.0006104l-10.4504232,7.5871696c-0.7841768,0.5693245-1.838623-0.1978531-1.5382566-1.1191788l3.9876451-12.2314434c0.1346922-0.4131451-0.012846-0.8659878-0.3650637-1.1204967L4.6106577,18.8105373C3.8244004,18.2423954,4.2263002,17,5.1963439,17h12.9084129c0.4332256,0,0.8171825-0.2789612,0.9510574-0.6909828l3.9931278-12.2895889C23.3482952,3.0981169,24.6517048,3.0981169,24.9510574,4.0194278z"})))),xi=({className:e})=>o.createElement("svg",{className:C("icon squid-ink",e),enableBackground:"new 4 8 40 43",version:"1.1",viewBox:"4 8 40 43",xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",{id:"heart"},o.createElement("path",{fill:"none",strokeWidth:"2",strokeMiterlimit:"10",d:"M44,25c0.2038269-5.8696365-3.7009888-10-9.5-10c-4.6829834,0-8.6465454,3.0672607-10,7.3012695C23.1465454,18.0672607,19.1829834,15,14.5,15C8.7009888,15,3.4401827,19.4592209,4,26c0.802125,9.3718452,20,21,20,21S43.6467476,35.1726418,44,25z"})));xi.propTypes={className:d.string};const yi={OPTUNEARTISTPROFILE:At,OPTUNEBOOKINGS:Wt,OPTUNEREQUESTFORM:di,ARTO:Ht,AMAZON:Rt,AWS:Tt,APPLEMUSIC:Vt,BANDCAMP:_t,BAIDU:Ot,BEHANCE:Bt,BLOGGER:Ft,DIGG:Dt,DRIBBBLE:Zt,FACEBOOK:Nt,FLICKR:jt,GITHUB:Ut,INSTAGRAM:Gt,ITUNES:qt,KIK:Kt,LASTFM:Xt,LINKEDIN:Qt,MIXCLOUD:({className:e})=>o.createElement("svg",{className:C("icon squid-ink",e),enableBackground:"new 0 0 400 400",version:"1.1",viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg"},o.createElement("g",{id:"mixcloud"},o.createElement("g",null,o.createElement("path",{stroke:"none",d:"M316,282.5c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.6-12.9c8.6-12.8,13.1-27.8,13.1-43.4c0-15.6-4.5-30.6-13.1-43.4c-2.9-4.3-1.7-10.1,2.5-12.9c4.3-2.9,10-1.7,12.9,2.5c10.7,15.9,16.3,34.5,16.3,53.8c0,19.3-5.6,37.9-16.3,53.8C321.9,281.1,319,282.5,316,282.5L316,282.5z"})),o.createElement("g",null,o.createElement("path",{stroke:"none",d:"M289.3,267.4c-1.8,0-3.6-0.5-5.2-1.6c-4.3-2.9-5.4-8.7-2.5-12.9c5.7-8.4,8.7-18.1,8.7-28.3c0-10.1-3-19.9-8.7-28.3c-2.9-4.3-1.8-10,2.5-12.9c4.3-2.9,10-1.8,12.9,2.5c7.8,11.5,11.9,24.9,11.9,38.7c0,13.9-4.1,27.3-11.9,38.7C295.3,266,292.3,267.4,289.3,267.4L289.3,267.4z"})),o.createElement("path",{stroke:"none",d:"M245.8,184c-3.7-37.3-35.2-66.5-73.5-66.5c-31.7,0-59.8,20.4-69.9,50c-23.9,3.5-42.4,24.1-42.4,49c0,27.3,22.3,49.6,49.7,49.6h127.2c22.9,0,41.6-18.6,41.6-41.5C278.5,204.7,264.5,188.1,245.8,184z M236.9,247.5H109.7c-17.1,0-31.1-13.9-31.1-31c0-17.1,13.9-31,31.1-31c8.3,0,16.1,3.2,22,9.1c3.6,3.6,9.5,3.6,13.2,0c3.6-3.6,3.6-9.5,0-13.2c-6.4-6.4-14.3-10.8-22.9-13c8.8-19.4,28.4-32.4,50.3-32.4c30.5,0,55.3,24.8,55.3,55.2c0,5.9-0.9,11.7-2.8,17.3c-1.6,4.9,1,10.1,5.9,11.8c1,0.3,2,0.5,2.9,0.5c3.9,0,7.5-2.5,8.8-6.4c1.2-3.7,2.1-7.4,2.7-11.2c8.6,3.3,14.7,11.6,14.7,21.3C259.9,237.2,249.5,247.5,236.9,247.5z"}))),MESSENGER:ei,FACEBOOKMESSENGER:ei,MEDIUM:Jt,PANDORA:ni,PATREON:li,PICASA:oi,PINTEREST:ri,PODCAST:ci,QUORA:ai,REDDIT:si,SOUNDCLOUD:mi,SPOTIFY:pi,TIKTOK:ui,TUMBLR:gi,TWITCH:Ci,TWITTER:vi,YOUTUBE:wi,VIMEO:fi,WHATSAPP:bi,WECHAT:Mi,HEART:xi,NEWSLETTER:ti,STAR:Ei,SHOPPING:St(()=>o.createElement("g",{id:"cart"},o.createElement("path",X({},Pt,{d:"M44,17l-3.6212692,14.4850712C40.156147,32.3754044,39.3561821,33,38.438446,33H18.4734097c-0.8762207,0-1.6504154-0.5703545-1.9101276-1.4072018L8,4H3"})),o.createElement("circle",X({},Pt,{cx:"22",cy:"41",r:"4"})),o.createElement("circle",X({},Pt,{cx:"37",cy:"41",r:"4"})),o.createElement("line",X({},Pt,{x1:"19",y1:"21",x2:"43",y2:"21"})))),CALL:St(()=>o.createElement("g",null,o.createElement("path",X({},Pt,{d:"M44.301548,19.0324593 c2.1602173-5.0219517,0.8455734-10.8719664-3.0950928-14.6611176c-0.8551483-0.8222678-1.4886818-1.423099-1.4886818-1.423099 c-1.7698975-1.7698975-4.6394043-1.7698975-6.4093018,0l-2.7830811,2.7830811 c-1.7698803,1.7698798-1.7698803,4.6394215,0,6.4093018l0.9068966,0.9068966 c2.1743679,2.174366,3.0298023,5.3713932,2.1465435,8.3168278c-2.0833855,6.9475269-7.7182655,10.2208538-11.9738579,11.7357712 c-2.9236641,1.0407753-6.1789799,0.3881569-8.4835987-1.6902485l-0.9807491-0.8844814 c-1.7698975-1.7698975-4.6394043-1.7698975-6.4093018,0l-2.7830813,2.7830811 c-1.7698797,1.7698784-1.7698798,4.6394234-0.0000002,6.4093018l1.4967251,1.496727 c3.8993554,3.899353,9.8203888,5.0579262,14.8360291,2.7659187C24.1313705,41.7639313,29.4892406,37.8801422,34.3693848,33 C38.8669624,28.5024223,42.3476868,23.5746841,44.301548,19.0324593z"})),o.createElement("line",X({},Pt,{x1:"14",y1:"33",x2:"5.5",y2:"41.5"})),o.createElement("line",X({},Pt,{x1:"41",y1:"5",x2:"32.5",y2:"13.5"})))),CLOCK:St(()=>o.createElement("g",{id:"clock"},o.createElement("circle",X({},Pt,{cx:"24",cy:"24",r:"22.5"})),o.createElement("text",{transform:"matrix(1 0 0 1 22 12)",fontFamily:"'GothamRounded-Bold'",fontSize:"10"},"1"),o.createElement("text",{transform:"matrix(1 0 0 1 37 28)",fontFamily:"'GothamRounded-Bold'",fontSize:"10"},"3"),o.createElement("text",{transform:"matrix(1 0 0 1 4 27)",fontFamily:"'GothamRounded-Bold'",fontSize:"10"},"9"),o.createElement("text",{transform:"matrix(1 0 0 1 21 43)",fontFamily:"'GothamRounded-Bold'",fontSize:"10"},"6"),o.createElement("polyline",X({},Pt,{points:"15,15 24,24 36,12"})),o.createElement("circle",X({},Pt,{cx:"24",cy:"24",r:"2"})))),ABOUT:$t,BIOGRAPHY:It,MAIL:Yt,PRESSKIT:ii,TECHRIDER:hi},ki={Desktop:{S:"51px",M:"62px",L:"73px"},Mobile:{S:"33px",M:"36px",L:"40px"}},zi={Desktop:{S:"33px",M:"36px",L:"40px"},Mobile:{S:"29px",M:"32px",L:"36px"}},Li={Desktop:{S:"26px",M:"32px",L:"42px"},Mobile:{S:"20px",M:"22px",L:"26px"}},Pi=e.a`
  text-decoration: none;
  cursor: ${({notInteractive:e})=>e?"default":"pointer"};
`,Si=e.div`
  cursor: ${({notInteractive:e})=>e?"default":"pointer"};
`,$i=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  background-color: ${({colorBackground:e})=>e};
  border-radius: ${({circle:e,square:t})=>(e?"50%":t&&"none")||"0.4rem"};
  border-color: ${({color:e})=>e||"transparent"};
  border-width: ${({border:e})=>e/10}rem;
  border-style: solid;
  box-sizing: border-box;
  box-shadow: ${({noShadow:e})=>e?"none":"0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.05)"};
  color: ${({color:e})=>e};
  transition: border-color 0.25s ease-out, background-color 0.25s ease-out, color 0.25s ease-out;

  width: ${({isSidePreview:e,isPreviewMobile:t,size:i})=>t?e&&zi.Mobile[i]||ki.Mobile[i]:e&&zi.Desktop[i]||ki.Desktop[i]};

  height: ${({isSidePreview:e,isPreviewMobile:t,size:i})=>t?e&&zi.Mobile[i]||ki.Mobile[i]:e&&zi.Desktop[i]||ki.Desktop[i]};

  margin: ${({isSidePreview:e,isPreviewMobile:t,size:i,margin:n})=>t&&("L"===i&&(e?"0.5rem 0rem":"2px")||"0.5rem 0.1rem")||n||"0.5rem 0.35rem"};

  ${({isPreview:e})=>e&&i(["@media (min-width:737px) and (max-width:991px){max-width:",";max-height:",";margin:",";}"],({size:e})=>`calc(${ki.Mobile[e]} + 8px)`,({size:e})=>`calc(${ki.Mobile[e]} + 8px)`,({size:e})=>"L"===e?"0.5rem 0.2rem":"0.5rem")}

  @media ${w} {
    width: ${({size:e})=>ki.Mobile[e]};
    height: ${({size:e})=>ki.Mobile[e]};
    margin: ${({size:e,margin:t})=>t||"L"===e&&"2px"||"5px"};
  }

  &:hover:not(:focus) {
    ${({notInteractive:e})=>!e&&i(["background-color:",";border-color:",";color:",";& .icon g{& path,line,circle,polygon,polyline,rect,ellipse{fill:",";stroke:",";&[fill='none']{fill:none;}&[stroke='none']{stroke:none;}}}"],({colorBackgroundAccent:e})=>e,({colorAccent:e})=>e,({colorAccent:e})=>e,({colorAccent:e})=>e,({colorAccent:e})=>e)}
  }
`,Hi=({platform:t,size:n="M"})=>e(yi[t])`
  width: ${({isSidePreview:e,isPreviewMobile:t})=>t||e?Li.Mobile[n]:Li.Desktop[n]};
  height: ${({isSidePreview:e,isPreviewMobile:t})=>t||e?Li.Mobile[n]:Li.Desktop[n]};

  ${({isPreview:e})=>e&&i(["@media (min-width:737px) and (max-width:991px){max-width:",";max-height:",";}"],({size:e})=>Li.Mobile[e],({size:e})=>Li.Mobile[e])}

  @media ${w} {
    width: ${Li.Mobile[n]};
    height: ${Li.Mobile[n]};
  }

  &.icon g {
    & path,
    line,
    circle,
    polygon,
    polyline,
    rect,
    ellipse {
      fill: ${({color:e})=>e};
      stroke: ${({color:e})=>e};
      transition: fill 0.25s ease-out, stroke 0.25 ease-out;

      &[fill='none'] {
        fill: none;
      }

      &[stroke='none'] {
        stroke: none;
      }
    }
  }
`,Ti=({border:e,circle:t,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,label:l,margin:a,modalData:s,setModalData:d,noShadow:m,platform:p,isPreviewMobile:h,isSidePreview:u,size:g,square:C,text:v,name:w,url:f})=>{const b=Hi({platform:p,size:g}),M=(w||l||p).replace(/\b\w/g,e=>e.toUpperCase());return f>""?o.createElement(Pi,{href:f,title:M,target:"_blank",rel:"noopener noreferrer"},o.createElement($i,{border:e,circle:t,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,margin:a,noShadow:!0,isPreviewMobile:h,isSidePreview:u,size:g||"M",square:C},o.createElement(b,{color:i,size:g,isPreviewMobile:h,isSidePreview:u}))):v>""&&d?o.createElement(Si,{onClick:()=>d({show:!0,content:v,label:M})},o.createElement($i,{border:e,circle:t,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,margin:a,noShadow:!0,isPreviewMobile:h,isSidePreview:u,size:g||"M",square:C},o.createElement(b,{color:i,size:g,isPreviewMobile:h,isSidePreview:u}))):o.createElement($i,{border:e,circle:t,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,noShadow:!0,isPreviewMobile:h,isSidePreview:u,isPreview:!0,size:g||"M",square:C},o.createElement(b,{color:i,size:g,isPreviewMobile:h,isSidePreview:u,isPreview:!0}))},Ri=Object.keys(yi).map(e=>{const t=Hi({platform:e});return{platform:e,LinkIcon:({border:e,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,notInteractive:l,onClick:a})=>o.createElement(Pi,{onClick:a,notInteractive:l,target:"_blank",rel:"noopener noreferrer"},o.createElement($i,{border:e,color:i,colorAccent:n,colorBackground:r,colorBackgroundAccent:c,notInteractive:l,size:"M"},o.createElement(t,{color:i})))}}),Vi=({links:e,linksColorState:t,content:i,isPreviewMobile:n,isSidePreview:r,modalData:l,setModalData:a})=>{const s=(null==t?void 0:t.colorLinks)||e.colorLinks||i.color,d=(null==t?void 0:t.colorLinksAccent)||e.colorLinksAccent||i.colorAccent,m=(null==t?void 0:t.colorLinksBackground)||e.colorLinksBackground||i.colorBackground,p=(null==t?void 0:t.colorLinksBackgroundAccent)||e.colorLinksBackgroundAccent||i.colorBackgroundAccent;return o.createElement(c,null,e.list.filter(({platform:e,url:t})=>!!yi[e]).map(t=>o.createElement(Ti,X({key:t.platform,border:e.border,circle:e.circle,square:e.square,size:e.size,color:s,colorAccent:d,colorBackground:m,colorBackgroundAccent:p,isPreviewMobile:n,isSidePreview:r,text:t.text,name:t.name,modalData:l,setModalData:a},t))))},Ai=({width:e,height:t,fullscreen:i=!1})=>`q_auto:best,f_auto,c_fit${e?",w_"+e:""}${t?",h_"+t:""}`,_i=({fullscreen:e=!1})=>"q_auto:eco,f_auto,c_fit,w_1000,h_1000,e_pixelate:3",Oi=()=>"q_auto:best,f_auto,c_fit,w_300,h_300",Bi=(e,t)=>({fullscreen:i,image:n,maxHeight:o=100,maxWidth:r=100})=>{let c;if((null==n?void 0:n.url)>""){const s=n.url.split("/"),d=s.findIndex(e=>"upload"===e)+1,m=s.slice(d);let p="";if(e){var l,a;const e=(null===(l=window)||void 0===l?void 0:l.innerWidth)||1e3,t=(null===(a=window)||void 0===a?void 0:a.innerHeight)||1e3,n=Math.round(e*r/100),c=Math.round(t*o/100);p=Ai({width:n>c?n:void 0,height:n<c?c:void 0,fullscreen:i})}else p=t?Oi():_i({fullscreen:i,width:800,height:800});c=`https://res.cloudinary.com/optune-me/image/upload/${p}/${m.join("/")}`}return c},Fi=e.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;

  background-color: ${({color:e="#000000"})=>e};
  background-image: ${({preloadImage:e})=>`url(${e})`};
  background-repeat: no-repeat;
  background-position: ${({focusPoint:e})=>e};
  background-size: ${({fullscreen:e})=>e?"cover":"contain"};
  display: flex;
  overflow: hidden;

  ${({isSidePreview:e})=>e&&i(["box-shadow:-16px 3px 25px -22px rgba(255,255,255,0.7),16px 3px 25px -22px rgba(255,255,255,0.7),0 5px 8px 7px rgba(0,0,0,0.68),0 0 0 10px black;border-radius:",";transition:border-radius 0.3s ease-out;"],({isPreviewMobile:e})=>e?"16px":"6px")}
`,Ii=e.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  z-index: 2;
`,Di=e.a`
  position: ${({isSidePreview:e,isPreviewMobile:t})=>t||e?"absolute":"fixed"};
  background-image: url(${"https://res.cloudinary.com/optune-me/image/upload/v1598948675/onescreener-v2/app/back_link.png"});
  background-size: contain;
  background-color: #606060;
  background-position: center;
  background-repeat: no-repeat;
  width: 90px;
  height: 26px;
  opacity: 0.4;
  transform: rotate(-90deg);
  transform-origin: 100% 100%;
  right: 0;
  color: #ffffff;
  transition: opacity 0.3s ease-out;
  z-index: 9999;

  &:hover {
    opacity: 0.6;
  }

  & h1 {
    color: #808080;
    font-size: 5px;
    opacity: 0.1;
  }
`,Zi=(e.div`
  display: flex;
  flex-direction: column;
`,e.div`
  position: absolute;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: rgba(0, 0, 0, 0.5);

  ${({isSidePreview:e})=>e&&i(["box-shadow:-16px 3px 25px -22px rgba(255,255,255,0.7),16px 3px 25px -22px rgba(255,255,255,0.7),0 5px 8px 7px rgba(0,0,0,0.68),0 0 0 10px black;border-radius:",";transition:border-radius 0.3s ease-out;"],({isPreviewMobile:e})=>e?"16px":"6px")}
`),Ni=e.p`
  padding: 3rem 4rem;
  font-size: 36px;
  color: red;
  background-color: rgba(255, 255, 255, 0.8);
  transform: rotate(-22.2deg);
`,ji=({isPreviewMobile:e,isPreviewMobileReady:t,isSidePreview:i,Modal:n,noBacklink:a,page:s})=>{const[d,m]=r(!1);l(()=>{m(!0)},[]);const p=Bi(d),[h,u]=r({show:!1,content:"",label:""});let g=null;if(s){const{background:r,logo:l,content:m}=s,{links:C}=s||{links:{list:[]}},v=(null==m?void 0:m.customHTML)>""?K[m.customHTML]:null;g=o.createElement(c,null,o.createElement($,null),o.createElement(Fi,{preloadImage:Bi(!1)(r),focusPoint:r.focusPoint,fullscreen:r.fullscreen,color:r.color,isPreviewMobile:e,isSidePreview:i},d&&o.createElement(pe,{background:r,getImageUrl:p}),o.createElement(Ii,null,!a&&!i&&o.createElement(Di,{href:"https://www.onescreener.com",target:"_blank",title:"created with onescreener.com",isPreviewMobile:e},o.createElement("h1",null,"created by onescreener.com")),l&&o.createElement($e,{logo:l,links:C,getImageUrl:p,isPreviewMobile:e,isPreviewMobileReady:t,isSidePreview:i,zIndex:10}),o.createElement(yt,{content:m,links:C,isPreviewMobile:e,isPreviewMobileReady:t,isSidePreview:i}),C.list.length>0&&o.createElement(c,null,o.createElement(se,{border:C.border,circle:C.circle,color:C.colorLinks||m.color,colorAccent:C.colorLinksAccent||m.colorAccent,colorBackground:C.colorLinksBackground||m.colorBackground,colorBackgroundAccent:C.colorLinksBackgroundAccent||m.colorBackgroundAccent,content:h.content,isPreviewMobile:e,isSidePreview:i,label:h.label,onClose:()=>u({...h,show:!1}),show:h.show,square:C.square}),o.createElement(Lt,{position:C.position,zIndex:4,isPreviewMobile:e},Vi({links:C,content:m,isPreviewMobile:e,isSidePreview:i,Modal:n,modalData:h,setModalData:u})))),v&&o.createElement(v,{isPreviewMobile:e})),s.isBlocked&&o.createElement(Zi,null,o.createElement(Ni,null,"Page temporarily unavailable")))}return g},Wi=(e=32)=>`q_auto:eco,f_auto,c_fit,w_${e},h_${e}/`,Ui=({image:e})=>{let t="/favicon.png";if((null==e?void 0:e.url)>""){const i=e.url.split("/"),n=i.findIndex(e=>"upload"===e)+1,o=i.slice(n);t=`https://res.cloudinary.com/optune-me/image/upload/${"ico"===e.format?"":Wi()}${o.join("/")}`}return t};export{F as ApplePlayer,D as DeezerPlayer,$ as GlobalStyle,Vi as Links,A as Logo,w as MediaMobile,v as MediaSmall,f as NotMediaSmall,ji as Page,Ti as PlatformLink,Ri as PlatformLinks,O as SpotifyPlayer,Ui as getFavionUrl,Ie as getGigs,Bi as getImageUrl,dt as renderHtml};
