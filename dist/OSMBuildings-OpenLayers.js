!function(a){"use strict";function b(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function c(a){var c=a.length;if(c<16)return!1;var d,e=1/0,f=-(1/0),g=1/0,h=-(1/0);for(d=0;d<c-1;d+=2)e=Math.min(e,a[d]),f=Math.max(f,a[d]),g=Math.min(g,a[d+1]),h=Math.max(h,a[d+1]);var i=f-e,j=h-g,k=i/j;if(k<.85||k>1.15)return!1;var l={x:e+i/2,y:g+j/2},m=(i+j)/4,n=m*m;for(d=0;d<c-1;d+=2){var o=b({x:a[d],y:a[d+1]},l);if(o/n<.8||o/n>1.2)return!1}return!0}function d(a,b,c,d,e,f){var g,h=e-c,i=f-d;return 0===h&&0===i||(g=((a-c)*h+(b-d)*i)/(h*h+i*i),g>1?(c=e,d=f):g>0&&(c+=h*g,d+=i*g)),h=a-c,i=b-d,h*h+i*i}function e(a){var b,c,e,f,g=2,h=a.length/2,i=new H(h),j=0,k=h-1,l=[],m=[],n=[];for(i[j]=i[k]=1;k;){for(c=0,b=j+1;b<k;b++)e=d(a[2*b],a[2*b+1],a[2*j],a[2*j+1],a[2*k],a[2*k+1]),e>c&&(f=b,c=e);c>g&&(i[f]=1,l.push(j),m.push(f),l.push(f),m.push(k)),j=l.pop(),k=m.pop()}for(b=0;b<h;b++)i[b]&&n.push(a[2*b],a[2*b+1]);return n}function f(a){for(var b=1/0,c=-(1/0),d=1/0,e=-(1/0),f=0,g=a.length-3;f<g;f+=2)b=B(b,a[f]),c=C(c,a[f]),d=B(d,a[f+1]),e=C(e,a[f+1]);return{x:b+(c-b)/2<<0,y:d+(e-d)/2<<0}}function g(a){for(var b=180,c=-180,d=0,e=a.length;d<e;d+=2)b=B(b,a[d+1]),c=C(c,a[d+1]);return(c-b)/2}function h(a){return a/Y*180}function i(a,b){var c={};return a/=N,b/=N,c[ba]=b<=0?90:b>=1?-90:h(2*z(u(Y*(1-2*b)))-Z),c[ca]=360*(1===a?1:(a%1+1)%1)-180,c}function j(a,b){var c=B(1,C(0,.5-v(y($+Z*a/180))/Y/2)),d=b/360+.5;return{x:d*N<<0,y:c*N<<0}}function k(a){for(var b=da+ha,c=ea+ia,d=0,e=a.length-3;d<e;d+=2)if(a[d]>ha&&a[d]<b&&a[d+1]>ia&&a[d+1]<c)return!0;return!1}function l(){S||(S=setInterval(function(){for(var a=ua.items,b=!1,c=0,d=a.length;c<d;c++)a[c].scale<1&&(a[c].scale+=.1,a[c].scale>1&&(a[c].scale=1),b=!0);Ca.render(),b||(clearInterval(S),S=null)},33))}function m(a){ha=a.x,ia=a.y}function n(a){P=fa+a.x,Q=ea+a.y,Ca.render(!0)}function o(a){da=a.width,ea=a.height,fa=da/2<<0,ga=ea/2<<0,P=fa,Q=ea,Ca.setSize(da,ea),O=sa-50}function p(a){M=a,N=_<<M;var b=i(ha+fa,ia+ga),c=j(b.latitude,0),d=j(b.latitude,1);pa=d.x-c.x,qa=F(.95,M-aa),ma=""+ja.alpha(qa),na=""+ka.alpha(qa),oa=""+la.alpha(qa)}function q(a){o(a),Ca.render(),ua.update()}function r(a){Ca.render(),ua.update()}function s(a){R=!1,p(a.zoom),ua.update(),Ca.render()}var t=Math,u=t.exp,v=t.log,w=t.sin,x=t.cos,y=t.tan,z=t.atan,A=t.atan2,B=t.min,C=t.max,D=t.sqrt,E=t.ceil,F=(t.floor,t.round,t.pow),G=G||Array,H=H||Array,I=/iP(ad|hone|od)/g.test(navigator.userAgent),J=!!~navigator.userAgent.indexOf("Trident"),K=!a.requestAnimationFrame||I||J?function(a){a()}:a.requestAnimationFrame,L=function(){function a(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(2/3-c)*6:a}function b(a,b){if(void 0!==a)return Math.min(b,Math.max(0,a||0))}var c={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgrey:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},d=function(a,c,d,e){this.r=b(a,1),this.g=b(c,1),this.b=b(d,1),this.a=b(e,1)||1};return d.parse=function(a){if("string"==typeof a){a=a.toLowerCase(),a=c[a]||a;var b;if(b=a.match(/^#?(\w{2})(\w{2})(\w{2})$/))return new d(parseInt(b[1],16)/255,parseInt(b[2],16)/255,parseInt(b[3],16)/255);if(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new d(parseFloat(b[1])/255,parseFloat(b[2])/255,parseFloat(b[3])/255,b[4]?parseFloat(b[5]):1)}return new d},d.fromHSL=function(b,c,e,f){if(0===c)return new d(e,e,e,f);var g=e<.5?e*(1+c):e+c-e*c,h=2*e-g;return b/=360,new d(a(h,g,b+1/3),a(h,g,b),a(h,g,b-1/3),f)},d.prototype={toHSL:function(){if(void 0!==this.r&&void 0!==this.g&&void 0!==this.b){var a,b,c=Math.max(this.r,this.g,this.b),d=Math.min(this.r,this.g,this.b),e=(c+d)/2,f=c-d;if(f){switch(b=e>.5?f/(2-c-d):f/(c+d),c){case this.r:a=(this.g-this.b)/f+(this.g<this.b?6:0);break;case this.g:a=(this.b-this.r)/f+2;break;case this.b:a=(this.r-this.g)/f+4}a*=60}else a=b=0;return{h:a,s:b,l:e,a:this.a}}},toString:function(){if(void 0!==this.r&&void 0!==this.g&&void 0!==this.b)return 1===this.a?"#"+((1<<24)+(Math.round(255*this.r)<<16)+(Math.round(255*this.g)<<8)+Math.round(255*this.b)).toString(16).slice(1,7):"rgba("+[Math.round(255*this.r),Math.round(255*this.g),Math.round(255*this.b),this.a.toFixed(2)].join(",")+")"},toArray:function(){if(void 0!==this.r&&void 0!==this.g&&void 0!==this.b)return[this.r,this.g,this.b]},hue:function(a){var b=this.toHSL();return d.fromHSL(b.h+a,b.s,b.l)},saturation:function(a){var b=this.toHSL();return d.fromHSL(b.h,b.s*a,b.l)},lightness:function(a){var b=this.toHSL();return d.fromHSL(b.h,b.s,b.l*a)},red:function(a){return new d(this.r*a,this.g,this.b,this.a)},green:function(a){return new d(this.r,this.g*a,this.b,this.a)},blue:function(a){return new d(this.r,this.g,this.b*a,this.a)},alpha:function(a){return new d(this.r,this.g,this.b,this.a*a)},copy:function(){return new d(this.r,this.g,this.b,this.a)}},d}();"object"==typeof module&&(module.exports=L);var M,N,O,P,Q,R,S,T=function(){function a(a){return a.valueOf()/s-.5+t}function b(b){return a(b)-u}function c(a,b){return q(m(a)*n(v)-o(b)*m(v),n(a))}function d(a,b){return p(m(b)*n(v)+n(b)*m(v)*m(a))}function e(a,b,c){return q(m(a),n(a)*m(b)-o(c)*n(b))}function f(a,b,c){return p(m(b)*m(c)+n(b)*n(c)*n(a))}function g(a,b){return r*(280.16+360.9856235*a)-b}function h(a){return r*(357.5291+.98560028*a)}function i(a){return r*(1.9148*m(a)+.02*m(2*a)+3e-4*m(3*a))}function j(a,b){var c=102.9372*r;return a+b+c+l}var k=Math,l=k.PI,m=k.sin,n=k.cos,o=k.tan,p=k.asin,q=k.atan2,r=l/180,s=864e5,t=2440588,u=2451545,v=23.4397*r;return function(a,k,m){var n=r*-m,o=r*k,p=b(a),q=h(p),s=i(q),t=j(q,s),u=d(t,0),v=c(t,0),w=g(p,n),x=w-v;return{altitude:f(x,o,u),azimuth:e(x,o,u)-l/2}}}(),U=function(){function a(a){return a=a.toLowerCase(),"#"===a[0]?a:i[j[a]||a]||null}function b(a){var b,c,d,e,f,g,h=0;for(f=0,g=a.length-3;f<g;f+=2)b=a[f],c=a[f+1],d=a[f+2],e=a[f+3],h+=b*e-d*c;return h/2>0?k:l}function c(a,c){var d=b(a);if(d===c)return a;for(var e=[],f=a.length-2;f>=0;f-=2)e.push(a[f],a[f+1]);return e}function d(b){var c={};b=b||{},c.height=b.height||(b.levels?b.levels*h:ra),c.minHeight=b.minHeight||(b.minLevel?b.minLevel*h:0);var d=b.material?a(b.material):b.wallColor||b.color;d&&(c.wallColor=d);var e=b.roofMaterial?a(b.roofMaterial):b.roofColor;switch(e&&(c.roofColor=e),b.shape){case"cylinder":case"cone":case"dome":case"sphere":c.shape=b.shape,c.isRotational=!0;break;case"pyramid":c.shape=b.shape}switch(b.roofShape){case"cone":case"dome":c.roofShape=b.roofShape,c.isRotational=!0;break;case"pyramid":c.roofShape=b.roofShape}return c.roofShape&&b.roofHeight?(c.roofHeight=b.roofHeight,c.height=C(0,c.height-c.roofHeight)):c.roofHeight=0,c}function e(a){var b,d,f,g,h=[];switch(a.type){case"GeometryCollection":for(h=[],b=0,d=a.geometries.length;b<d;b++)(g=e(a.geometries[b]))&&h.push.apply(h,g);return h;case"MultiPolygon":for(h=[],b=0,d=a.coordinates.length;b<d;b++)(g=e({type:"Polygon",coordinates:a.coordinates[b]}))&&h.push.apply(h,g);return h;case"Polygon":f=a.coordinates;break;default:return[]}var i,j,m,n=1,o=0,p=[],q=[];for(m=f[0],b=0,d=m.length;b<d;b++)p.push(m[b][n],m[b][o]);for(p=c(p,k),b=0,d=f.length-1;b<d;b++){for(m=f[b+1],q[b]=[],i=0,j=m.length;i<j;i++)q[b].push(m[i][n],m[i][o]);q[b]=c(q[b],l)}return[{outer:p,inner:q.length?q:null}]}function f(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}var h=3,i={brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},j={asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},k="CW",l="CCW";return{read:function(a){if(!a||"FeatureCollection"!==a.type)return[];var b,c,h,i,j,k,l,m,n=a.features,o=[];for(b=0,c=n.length;b<c;b++)if(j=n[b],"Feature"===j.type&&Ga(j)!==!1)for(l=d(j.properties),k=e(j.geometry),h=0,i=k.length;h<i;h++)m=f(l),m.footprint=k[h].outer,m.isRotational&&(m.radius=g(m.footprint)),k[h].inner&&(m.holes=k[h].inner),(j.id||j.properties.id)&&(m.id=j.id||j.properties.id),j.properties.relationId&&(m.relationId=j.properties.relationId),o.push(m);return o}}}(),V="0.2.3b",W='&copy; <a href="https://osmbuildings.org">OSM Buildings</a>',X="https://{s}.data.osmbuildings.org/0.2/{k}/tile/{z}/{x}/{y}.json",Y=Math.PI,Z=Y/2,$=Y/4,_=256,aa=15,ba="latitude",ca="longitude",da=0,ea=0,fa=0,ga=0,ha=0,ia=0,ja=L.parse("rgba(200, 190, 180)"),ka=ja.lightness(.8),la=ja.lightness(1.2),ma=""+ja,na=""+ka,oa=""+la,pa=0,qa=1,ra=5,sa=450,ta=function(){function a(a,f){if(b[a])return void(f&&f(b[a]));var g=new XMLHttpRequest;return g.onreadystatechange=function(){if(4===g.readyState&&!(!g.status||g.status<200||g.status>299)&&f&&g.responseText){var h=g.responseText;for(b[a]=h,c.push({url:a,size:h.length}),d+=h.length,f(h);d>e;){var i=c.shift();d-=i.size,delete b[i.url]}}},g.open("GET",a),g.send(null),g}var b={},c=[],d=0,e=5242880;return{loadJSON:function(b,c){return a(b,function(a){var b;try{b=JSON.parse(a)}catch(d){}c(b)})}}}(),ua={loadedItems:{},items:[],getPixelFootprint:function(a){for(var b,c=new G(a.length),d=0,f=a.length-1;d<f;d+=2)b=j(a[d],a[d+1]),c[d]=b.x,c[d+1]=b.y;if(c=e(c),!(c.length<8))return c},resetItems:function(){this.items=[],this.loadedItems={},Ba.reset()},addRenderItems:function(a,b){for(var c,d,e,f=U.read(a),g=0,h=f.length;g<h;g++)c=f[g],e=c.id||[c.footprint[0],c.footprint[1],c.height,c.minHeight].join(","),this.loadedItems[e]||(d=this.scale(c))&&(d.scale=b?0:1,this.items.push(d),this.loadedItems[e]=1);l()},scale:function(a){var b={},d=6/F(2,M-aa);if(a.id&&(b.id=a.id),b.height=B(a.height/d,O),b.minHeight=isNaN(a.minHeight)?0:a.minHeight/d,!(b.minHeight>O)&&(b.footprint=this.getPixelFootprint(a.footprint),b.footprint)){if(b.center=f(b.footprint),a.radius&&(b.radius=a.radius*pa),a.shape&&(b.shape=a.shape),a.roofShape&&(b.roofShape=a.roofShape),"cone"!==b.roofShape&&"dome"!==b.roofShape||b.shape||!c(b.footprint)||(b.shape="cylinder"),a.holes){b.holes=[];for(var e,g=0,h=a.holes.length;g<h;g++)(e=this.getPixelFootprint(a.holes[g]))&&b.holes.push(e)}var i;if(a.wallColor&&(i=L.parse(a.wallColor))&&(i=i.alpha(qa),b.altColor=""+i.lightness(.8),b.wallColor=""+i),a.roofColor&&(i=L.parse(a.roofColor))&&(b.roofColor=""+i.alpha(qa)),a.relationId&&(b.relationId=a.relationId),b.hitColor=Ba.idToColor(a.relationId||a.id),b.roofHeight=isNaN(a.roofHeight)?0:a.roofHeight/d,!(b.height+b.roofHeight<=b.minHeight))return b}},set:function(a){this.isStatic=!0,this.resetItems(),this._staticData=a,this.addRenderItems(this._staticData,!0)},load:function(a,b){this.src=a||X.replace("{k}",b||"anonymous"),this.update()},update:function(){function a(a){k.addRenderItems(a)}if(this.resetItems(),!(M<aa)){if(this.isStatic&&this._staticData)return void this.addRenderItems(this._staticData);if(this.src){var b,c,d=16,e=256,f=M>d?e<<M-d:e>>d-M,g=ha/f<<0,h=ia/f<<0,i=E((ha+da)/f),j=E((ia+ea)/f),k=this;for(c=h;c<=j;c++)for(b=g;b<=i;b++)this.loadTile(b,c,d,a)}}},loadTile:function(a,b,c,d){var e="abcd"[(a+b)%4],f=this.src.replace("{s}",e).replace("{x}",a).replace("{y}",b).replace("{z}",c);return ta.loadJSON(f,d)}},va={draw:function(a,b,c,d,e,f,g,h){var i,j,k=this._extrude(a,b,d,e,f,g),l=[];if(c)for(i=0,j=c.length;i<j;i++)l[i]=this._extrude(a,c[i],d,e,f,g);if(a.fillStyle=h,a.beginPath(),this._ring(a,k),c)for(i=0,j=l.length;i<j;i++)this._ring(a,l[i]);a.closePath(),a.stroke(),a.fill()},_extrude:function(a,b,c,d,e,f){for(var g,h,i=sa/(sa-c),j=sa/(sa-d),k={x:0,y:0},l={x:0,y:0},m=[],n=0,o=b.length-3;n<o;n+=2)k.x=b[n]-ha,k.y=b[n+1]-ia,l.x=b[n+2]-ha,l.y=b[n+3]-ia,g=ya.project(k,i),h=ya.project(l,i),d&&(k=ya.project(k,j),l=ya.project(l,j)),(l.x-k.x)*(g.y-k.y)>(g.x-k.x)*(l.y-k.y)&&(k.x<l.x&&k.y<l.y||k.x>l.x&&k.y>l.y?a.fillStyle=f:a.fillStyle=e,a.beginPath(),this._ring(a,[l.x,l.y,k.x,k.y,g.x,g.y,h.x,h.y]),a.closePath(),a.fill()),m[n]=g.x,m[n+1]=g.y;return m},_ring:function(a,b){a.moveTo(b[0],b[1]);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c],b[c+1])},simplified:function(a,b,c){if(a.beginPath(),this._ringAbs(a,b),c)for(var d=0,e=c.length;d<e;d++)this._ringAbs(a,c[d]);a.closePath(),a.stroke(),a.fill()},_ringAbs:function(a,b){a.moveTo(b[0]-ha,b[1]-ia);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-ha,b[c+1]-ia)},shadow:function(a,b,c,d,e){for(var f,g,h=null,i={x:0,y:0},j={x:0,y:0},k=0,l=b.length-3;k<l;k+=2)i.x=b[k]-ha,i.y=b[k+1]-ia,j.x=b[k+2]-ha,j.y=b[k+3]-ia,f=Aa.project(i,d),g=Aa.project(j,d),e&&(i=Aa.project(i,e),j=Aa.project(j,e)),(j.x-i.x)*(f.y-i.y)>(f.x-i.x)*(j.y-i.y)?(1===h&&a.lineTo(i.x,i.y),h=0,k||a.moveTo(i.x,i.y),a.lineTo(j.x,j.y)):(0===h&&a.lineTo(f.x,f.y),h=1,k||a.moveTo(f.x,f.y),a.lineTo(g.x,g.y));if(c)for(k=0,l=c.length;k<l;k++)this._ringAbs(a,c[k])},shadowMask:function(a,b,c){if(this._ringAbs(a,b),c)for(var d=0,e=c.length;d<e;d++)this._ringAbs(a,c[d])},hitArea:function(a,b,c,d,e,f){var g,h,i=null,j={x:0,y:0},k={x:0,y:0},l=sa/(sa-d),m=sa/(sa-e);a.fillStyle=f,a.beginPath();for(var n=0,o=b.length-3;n<o;n+=2)j.x=b[n]-ha,j.y=b[n+1]-ia,k.x=b[n+2]-ha,k.y=b[n+3]-ia,g=ya.project(j,l),h=ya.project(k,l),e&&(j=ya.project(j,m),k=ya.project(k,m)),(k.x-j.x)*(g.y-j.y)>(g.x-j.x)*(k.y-j.y)?(1===i&&a.lineTo(j.x,j.y),i=0,n||a.moveTo(j.x,j.y),a.lineTo(k.x,k.y)):(0===i&&a.lineTo(g.x,g.y),i=1,n||a.moveTo(g.x,g.y),a.lineTo(h.x,h.y));a.closePath(),a.fill()}},wa={draw:function(a,b,c,d,e,f,g,h,i){var j,k,l={x:b.x-ha,y:b.y-ia},m=sa/(sa-e),n=sa/(sa-f),o=ya.project(l,m);d*=m,f&&(l=ya.project(l,n),c*=n);var p=this._tangents(l,c,o,d);p?(j=A(p[0].y1-l.y,p[0].x1-l.x),k=A(p[1].y1-l.y,p[1].x1-l.x)):(j=1.5*Y,k=1.5*Y),a.fillStyle=g,a.beginPath(),a.arc(o.x,o.y,d,Z,j,!0),a.arc(l.x,l.y,c,j,Z),a.closePath(),a.fill(),a.fillStyle=h,a.beginPath(),a.arc(o.x,o.y,d,k,Z,!0),a.arc(l.x,l.y,c,Z,k),a.closePath(),a.fill(),a.fillStyle=i,this._circle(a,o,d)},simplified:function(a,b,c){this._circle(a,{x:b.x-ha,y:b.y-ia},c)},shadow:function(a,b,c,d,e,f){var g,h,i={x:b.x-ha,y:b.y-ia},j=Aa.project(i,e);f&&(i=Aa.project(i,f));var k=this._tangents(i,c,j,d);k?(g=A(k[0].y1-i.y,k[0].x1-i.x),h=A(k[1].y1-i.y,k[1].x1-i.x),a.moveTo(k[1].x2,k[1].y2),a.arc(j.x,j.y,d,h,g),a.arc(i.x,i.y,c,g,h)):(a.moveTo(i.x+c,i.y),a.arc(i.x,i.y,c,0,2*Y))},shadowMask:function(a,b,c){var d={x:b.x-ha,y:b.y-ia};a.moveTo(d.x+c,d.y),a.arc(d.x,d.y,c,0,2*Y)},hitArea:function(a,b,c,d,e,f,g){var h,i,j={x:b.x-ha,y:b.y-ia},k=sa/(sa-e),l=sa/(sa-f),m=ya.project(j,k);d*=k,f&&(j=ya.project(j,l),c*=l);var n=this._tangents(j,c,m,d);a.fillStyle=g,a.beginPath(),n?(h=A(n[0].y1-j.y,n[0].x1-j.x),i=A(n[1].y1-j.y,n[1].x1-j.x),a.moveTo(n[1].x2,n[1].y2),a.arc(m.x,m.y,d,i,h),a.arc(j.x,j.y,c,h,i)):(a.moveTo(j.x+c,j.y),a.arc(j.x,j.y,c,0,2*Y)),a.closePath(),a.fill()},_circle:function(a,b,c){a.beginPath(),a.arc(b.x,b.y,c,0,2*Y),a.stroke(),a.fill()},_tangents:function(a,b,c,d){var e=a.x-c.x,f=a.y-c.y,g=b-d,h=e*e+f*f;if(!(h<=g*g)){var i,j,k,l=D(h),m=-e/l,n=-f/l,o=g/l,p=[];i=D(C(0,1-o*o));for(var q=1;q>=-1;q-=2)j=m*o-q*i*n,k=n*o+q*i*m,p.push({x1:a.x+b*j<<0,y1:a.y+b*k<<0,x2:c.x+d*j<<0,y2:c.y+d*k<<0});return p}}},xa={draw:function(a,b,c,d,e,f,g){for(var h={x:c.x-ha,y:c.y-ia},i=sa/(sa-d),j=sa/(sa-e),k=ya.project(h,i),l={x:0,y:0},m={x:0,y:0},n=0,o=b.length-3;n<o;n+=2)l.x=b[n]-ha,l.y=b[n+1]-ia,m.x=b[n+2]-ha,m.y=b[n+3]-ia,e&&(l=ya.project(l,j),m=ya.project(m,j)),(m.x-l.x)*(k.y-l.y)>(k.x-l.x)*(m.y-l.y)&&(l.x<m.x&&l.y<m.y||l.x>m.x&&l.y>m.y?a.fillStyle=g:a.fillStyle=f,a.beginPath(),this._triangle(a,l,m,k),a.closePath(),a.fill())},_triangle:function(a,b,c,d){a.moveTo(b.x,b.y),a.lineTo(c.x,c.y),a.lineTo(d.x,d.y)},_ring:function(a,b){a.moveTo(b[0]-ha,b[1]-ia);for(var c=2,d=b.length-1;c<d;c+=2)a.lineTo(b[c]-ha,b[c+1]-ia)},shadow:function(a,b,c,d,e){for(var f={x:0,y:0},g={x:0,y:0},h={x:c.x-ha,y:c.y-ia},i=Aa.project(h,d),j=0,k=b.length-3;j<k;j+=2)f.x=b[j]-ha,f.y=b[j+1]-ia,g.x=b[j+2]-ha,g.y=b[j+3]-ia,e&&(f=Aa.project(f,e),g=Aa.project(g,e)),(g.x-f.x)*(i.y-f.y)>(i.x-f.x)*(g.y-f.y)&&this._triangle(a,f,g,i)},shadowMask:function(a,b){this._ring(a,b)},hitArea:function(a,b,c,d,e,f){var g={x:c.x-ha,y:c.y-ia},h=sa/(sa-d),i=sa/(sa-e),j=ya.project(g,h),k={x:0,y:0},l={x:0,y:0};a.fillStyle=f,a.beginPath();for(var m=0,n=b.length-3;m<n;m+=2)k.x=b[m]-ha,k.y=b[m+1]-ia,l.x=b[m+2]-ha,l.y=b[m+3]-ia,e&&(k=ya.project(k,i),l=ya.project(l,i)),(l.x-k.x)*(j.y-k.y)>(j.x-k.x)*(l.y-k.y)&&this._triangle(a,k,l,j);a.closePath(),a.fill()}},ya={project:function(a,b){return{x:(a.x-P)*b+P<<0,y:(a.y-Q)*b+Q<<0}},render:function(){var a=this.context;if(a.clearRect(0,0,da,ea),!(M<aa||R)){var c,d,e,f,g,h,i,j={x:P+ha,y:Q+ia},l=ua.items;l.sort(function(a,c){return a.minHeight-c.minHeight||b(c.center,j)-b(a.center,j)||c.height-a.height});for(var m=0,n=l.length;m<n;m++)if(c=l[m],!za.isSimple(c)&&(f=c.footprint,k(f))){switch(d=c.scale<1?c.height*c.scale:c.height,e=0,c.minHeight&&(e=c.scale<1?c.minHeight*c.scale:c.minHeight),g=c.wallColor||ma,h=c.altColor||na,i=c.roofColor||oa,a.strokeStyle=h,c.shape){case"cylinder":wa.draw(a,c.center,c.radius,c.radius,d,e,g,h,i);break;case"cone":wa.draw(a,c.center,c.radius,0,d,e,g,h);break;case"dome":wa.draw(a,c.center,c.radius,c.radius/2,d,e,g,h);break;case"sphere":wa.draw(a,c.center,c.radius,c.radius,d,e,g,h,i);break;case"pyramid":xa.draw(a,f,c.center,d,e,g,h);break;default:va.draw(a,f,c.holes,d,e,g,h,i)}switch(c.roofShape){case"cone":wa.draw(a,c.center,c.radius,0,d+c.roofHeight,d,i,""+L.parse(i).lightness(.9));break;case"dome":wa.draw(a,c.center,c.radius,c.radius/2,d+c.roofHeight,d,i,""+L.parse(i).lightness(.9));break;case"pyramid":xa.draw(a,f,c.center,d+c.roofHeight,d,i,L.parse(i).lightness(.9))}}}}},za={maxZoom:aa+2,maxHeight:5,isSimple:function(a){return M<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},render:function(){var a=this.context;if(a.clearRect(0,0,da,ea),!(M<aa||R||M>this.maxZoom))for(var b,c,d=ua.items,e=0,f=d.length;e<f;e++)if(b=d[e],!(b.height>=this.maxHeight)&&(c=b.footprint,k(c)))switch(a.strokeStyle=b.altColor||na,a.fillStyle=b.roofColor||oa,b.shape){case"cylinder":case"cone":case"dome":case"sphere":wa.simplified(a,b.center,b.radius);break;default:va.simplified(a,c,b.holes)}}},Aa={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,date:new Date,direction:{x:0,y:0},project:function(a,b){return{x:a.x+this.direction.x*b,y:a.y+this.direction.y*b}},render:function(){var a,b,c,d,e=this.context;if(e.clearRect(0,0,da,ea),!(!this.enabled||M<aa||R||(a=i(fa+ha,ga+ia),b=T(this.date,a.latitude,a.longitude),b.altitude<=0))){c=1/y(b.altitude),d=c<5?.75:1/c*5,this.direction.x=x(b.azimuth)*c,this.direction.y=w(b.azimuth)*c;var f,g,h,j,l,m,n=ua.items;for(e.canvas.style.opacity=d/(2*qa),e.shadowColor=this.blurColor,e.shadowBlur=this.blurSize*(qa/2),e.fillStyle=this.color,e.beginPath(),f=0,g=n.length;f<g;f++)if(h=n[f],m=h.footprint,k(m)){switch(j=h.scale<1?h.height*h.scale:h.height,l=0,h.minHeight&&(l=h.scale<1?h.minHeight*h.scale:h.minHeight),h.shape){case"cylinder":wa.shadow(e,h.center,h.radius,h.radius,j,l);break;case"cone":wa.shadow(e,h.center,h.radius,0,j,l);break;case"dome":wa.shadow(e,h.center,h.radius,h.radius/2,j,l);break;case"sphere":wa.shadow(e,h.center,h.radius,h.radius,j,l);break;case"pyramid":xa.shadow(e,m,h.center,j,l);break;default:va.shadow(e,m,h.holes,j,l)}switch(h.roofShape){case"cone":wa.shadow(e,h.center,h.radius,0,j+h.roofHeight,j);break;case"dome":wa.shadow(e,h.center,h.radius,h.radius/2,j+h.roofHeight,j);break;case"pyramid":xa.shadow(e,m,h.center,j+h.roofHeight,j)}}for(e.closePath(),e.fill(),e.shadowBlur=null,e.globalCompositeOperation="destination-out",e.beginPath(),f=0,g=n.length;f<g;f++)if(h=n[f],m=h.footprint,k(m)&&!h.minHeight)switch(h.shape){case"cylinder":case"cone":case"dome":wa.shadowMask(e,h.center,h.radius);break;default:va.shadowMask(e,m,h.holes)}e.fillStyle="#00ff00",e.fill(),e.globalCompositeOperation="source-over"}}},Ba={_idMapping:[null],reset:function(){this._idMapping=[null]},render:function(){if(!this._timer){var a=this;this._timer=setTimeout(function(){a._timer=null,a._render()},500)}},_render:function(){var a=this.context;if(a.clearRect(0,0,da,ea),!(M<aa||R)){var c,d,e,f,g,h={x:P+ha,y:Q+ia},i=ua.items;i.sort(function(a,c){return a.minHeight-c.minHeight||b(c.center,h)-b(a.center,h)||c.height-a.height});for(var j=0,l=i.length;j<l;j++)if(c=i[j],(g=c.hitColor)&&(f=c.footprint,k(f))){switch(d=c.height,e=0,c.minHeight&&(e=c.minHeight),c.shape){case"cylinder":wa.hitArea(a,c.center,c.radius,c.radius,d,e,g);break;case"cone":wa.hitArea(a,c.center,c.radius,0,d,e,g);break;case"dome":wa.hitArea(a,c.center,c.radius,c.radius/2,d,e,g);break;case"sphere":wa.hitArea(a,c.center,c.radius,c.radius,d,e,g);break;case"pyramid":xa.hitArea(a,f,c.center,d,e,g);break;default:va.hitArea(a,f,c.holes,d,e,g)}switch(c.roofShape){case"cone":wa.hitArea(a,c.center,c.radius,0,d+c.roofHeight,d,g);break;case"dome":wa.hitArea(a,c.center,c.radius,c.radius/2,d+c.roofHeight,d,g);break;case"pyramid":xa.hitArea(a,f,c.center,d+c.roofHeight,d,g)}}da&&ea&&(this._imageData=this.context.getImageData(0,0,da,ea).data)}},getIdFromXY:function(a,b){var c=this._imageData;if(c){var d=4*((0|b)*da+(0|a)),e=c[d]|c[d+1]<<8|c[d+2]<<16;return this._idMapping[e]}},idToColor:function(a){var b=this._idMapping.indexOf(a);b===-1&&(this._idMapping.push(a),b=this._idMapping.length-1);var c=255&b,d=b>>8&255,e=b>>16&255;return"rgb("+[c,d,e].join(",")+")"}},Ca={container:document.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none",this.container.style.position="absolute",this.container.style.left=0,this.container.style.top=0,Aa.context=this.createContext(this.container),za.context=this.createContext(this.container),ya.context=this.createContext(this.container),Ba.context=this.createContext()},render:function(a){K(function(){a||(Aa.render(),za.render(),Ba.render()),ya.render()})},createContext:function(a){var b=document.createElement("CANVAS");b.style.transform="translate3d(0, 0, 0)",b.style.imageRendering="optimizeSpeed",b.style.position="absolute",b.style.left=0,b.style.top=0;var c=b.getContext("2d");return c.lineCap="round",c.lineJoin="round",c.lineWidth=1,c.imageSmoothingEnabled=!1,this.items.push(b),a&&a.appendChild(b),c},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<d;c++)this.items[c].width=a,this.items[c].height=b},setPosition:function(a,b){this.container.style.left=a+"px",this.container.style.top=b+"px"}};Ca.init();var Da=OpenLayers.Layer.prototype,Ea=function(a){this.offset={x:0,y:0},Da.initialize.call(this,this.name,{projection:"EPSG:900913"}),a&&a.addLayer(this)},Fa=Ea.prototype=new OpenLayers.Layer;Fa.name="OSM Buildings",Fa.attribution=W,Fa.isBaseLayer=!1,Fa.alwaysInRange=!0,Fa.addTo=function(a){return this.setMap(a),this},Fa.setOrigin=function(){var a=this.map,b=a.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),c=a.resolution,d=this.maxExtent,e=(b.lon-d.left)/c<<0,f=(d.top-b.lat)/c<<0;m({x:e,y:f})},Fa.setMap=function(a){this.map||Da.setMap.call(this,a),Ca.appendTo(this.div),o({width:a.size.w,height:a.size.h}),p(a.zoom),this.setOrigin();var b=this.projection;a.events.register("click",a,function(c){var d=Ba.getIdFromXY(c.xy.x,c.xy.y);if(d){var e=a.getLonLatFromPixel(c.xy).transform(b,this.projection);Ha({feature:d,lat:e.lat,lon:e.lon})}}),ua.update()},Fa.removeMap=function(a){Ca.remove(),Da.removeMap.call(this,a),this.map=null},Fa.onMapResize=function(){var a=this.map;Da.onMapResize.call(this),q({width:a.size.w,height:a.size.h})},Fa.moveTo=function(a,b,c){var d=this.map,e=Da.moveTo.call(this,a,b,c);if(!c){var f=parseInt(d.layerContainerDiv.style.left,10),g=parseInt(d.layerContainerDiv.style.top,10);this.div.style.left=-f+"px",this.div.style.top=-g+"px"}return this.setOrigin(),this.offset.x=0,this.offset.y=0,n(this.offset),b?s({zoom:d.zoom}):r(),e},Fa.moveByPx=function(a,b){this.offset.x+=a,this.offset.y+=b;var c=Da.moveByPx.call(this,a,b);return n(this.offset),c},Fa.style=function(a){a=a||{};var b;return(b=a.color||a.wallColor)&&(ja=L.parse(b),ma=""+ja.alpha(qa),ka=ja.lightness(.8),na=""+ka.alpha(qa),la=ja.lightness(1.2),oa=""+la.alpha(qa)),a.roofColor&&(la=L.parse(a.roofColor),oa=""+la.alpha(qa)),void 0!==a.shadows&&(Aa.enabled=!!a.shadows),Ca.render(),this},Fa.date=function(a){return Aa.date=a,Aa.render(),this},Fa.load=function(a){return ua.load(a),this},Fa.set=function(a){return ua.set(a),this};var Ga=function(){};Fa.each=function(a){return Ga=function(b){return a(b)},this};var Ha=function(){};Fa.click=function(a){return Ha=function(b){return a(b)},this},Ea.VERSION=V,Ea.ATTRIBUTION=W,a.OSMBuildings=Ea}(this);