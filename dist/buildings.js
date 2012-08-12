(function(r){function pa(a){j=r.document.createElement("canvas");j.style.webkitTransform="translate3d(0,0,0)";j.style.position="absolute";j.style.pointerEvents="none";j.style.left=0;j.style.top=0;j.style.imageRendering="optimizeSpeed";a.appendChild(j);n=j.getContext("2d");n.lineCap="round";n.lineJoin="round";n.lineWidth=1;try{n.mozImageSmoothingEnabled=!1}catch(c){}}function N(a,c){var b={},a=a/U,c=c/U;b[u]=0>=c?90:1<=c?-90:qa*(2*ra(sa(v*(1-2*c)))-ea);b[z]=360*(1===a?1:(a%1+1)%1)-180;return b}function ta(a,
c){return a.replace(/\{ *([\w_]+) *\}/g,function(a,d){return c[d]||""})}function ua(a,c){var b=new XMLHttpRequest;b.onreadystatechange=function(){4!==b.readyState||!b.status||200>b.status||299<b.status||b.responseText&&c(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function V(){if(W&&!(w<O)){var a=N(G-s,H-X),c=N(G+A+s,H+x+X);P&&P.abort();P=ua(ta(W,{w:a[z],n:a[u],e:c[z],s:c[u],z:w}),va)}}function fa(a,c,b){var b=b||[],d=a[0]?a:a.features,f,l,e,I=c?1:0,h=c?0:1;if(d){a=0;for(f=
d.length;a<f;a++)fa(d[a],c,b);return b}"Feature"===a.type&&(f=a.geometry,l=a.properties);if("Polygon"==f.type){d=f.coordinates[0];c=[];a=e=0;for(f=d.length;a<f;a++)c.push(d[a][I]),c.push(d[a][h]),e+=d[a][2]||0;if(e){I=[];I[B]=~~(e/d.length);var h=y,i;a=c.length;f=-90;d=-180;e=180;for(var m,g,k=0;k<a-1;k+=2)if(c[k+1]<e?(e=c[k+1],m=k):c[k+1]>d&&(d=c[k+1],i=k),c[k]>f)f=c[k],g=k;m-=g;i-=g;0>m&&(m+=a);0>i&&(i+=a);if("CW"===(m>i?"CW":"CCW"))i=c;else{i=[];for(g=c.length-2;0<=g;g-=2)i.push(c[g]),i.push(c[g+
1])}I[h]=i;l.color&&(I[C]=[l.color,Y(l.color,0.2)]);b.push(I)}}return b}function ga(a,c,b){var d,f,l=[],e,g,h,i,m,j,k,n=Z-c;e=0;for(g=a.length;e<g;e++){m=a[e];j=m[y];k=new Int32Array(j.length);h=0;for(i=j.length-1;h<i;h+=2){d=j[h+1];f=ha<<c;var o=Q(1,ia(0,0.5-wa(xa(ya+ea*j[h]/180))/v/2));d=~~((d/360+0.5)*f);f=~~(o*f);k[h]=d;k[h+1]=f}l[e]=[];l[e][B]=Q(m[B]>>n,ja);l[e][y]=k;l[e][C]=m[C];l[e][R]=b}return l}function M(a,c){var b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/);return"rgba("+[b[1],
b[2],b[3],b[4]?c*b[5]:c].join()+")"}function $(a,c,b){0>b&&(b+=1);1<b&&(b-=1);return b<1/6?a+6*(c-a)*b:0.5>b?c:b<2/3?a+6*(c-a)*(2/3-b):a}function Y(a,c){var b,d,f,l=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/);b=l[1];d=l[2];var e=l[3];b/=255;d/=255;var e=e/255,g=Math.max(b,d,e),h=Math.min(b,d,e),i;f=(g+h)/2;var m;if(g==h)i=h=0;else{m=g-h;h=0.5<f?m/(2-g-h):m/(g+h);switch(g){case b:i=(d-e)/m+(d<e?6:0);break;case d:i=(e-b)/m+2;break;case e:i=(b-d)/m+4}i/=6}b=i;d=h;f=Q(1,ia(0,f+c));0==d?f=
d=b=f:(e=0.5>f?f*(1+d):f+d-f*d,g=2*f-e,f=$(g,e,b+1/3),d=$(g,e,b),b=$(g,e,b-1/3));a={r:~~(255*f),g:~~(255*d),b:~~(255*b)};return"rgba("+[a.r,a.g,a.b,l[4]?l[5]:1].join()+")"}function ka(a,c){A=a;x=c;s=~~(A/2);X=~~(x/2);D=s;E=x;j.width=A;j.height=x}function la(a,c){G=a;H=c}function ma(a){w=a;U=ha<<w;J=1-0.3*(w-O)/(Z-O)}function za(){aa=!0;t()}function va(a){var c,b,d,f=[],l=0,e=0;P=null;if(a&&a.meta.z===w){d=a.meta;b=a.data;if(p&&g&&p.z===d.z){l=p.x-d.x;e=p.y-d.y;a=0;for(c=g.length;a<c;a++)f[a]=g[a][y][0]+
l+","+(g[a][y][1]+e)}p=d;g=[];a=0;for(c=b.length;a<c;a++)g[a]=b[a],g[a][B]=Q(g[a][B],ja),d=g[a][y][0]+","+g[a][y][1],g[a][R]=!(f&&~f.indexOf(d));na()}}function na(){K=0;clearInterval(ba);ba=setInterval(function(){K+=0.1;if(1<K){clearInterval(ba);K=1;for(var a=0,c=g.length;a<c;a++)g[a][R]=0}t()},33)}function t(){var a,c,b,d;n.clearRect(0,0,A,x);if(p&&g&&!(w<O||aa)){var f,l,e,j,h,i,m=G-p.x,t=H-p.y,k,s,o,q,r,u,v,z=M(S,J),F=M(oa,J);T&&(n.strokeStyle=M(Aa,J));f=0;for(l=g.length;f<l;f++){h=g[f];d=!1;a=
h[y];k=new Int32Array(a.length);e=0;for(j=a.length-1;e<j;e+=2)k[e]=c=a[e]-m,k[e+1]=b=a[e+1]-t,d||(d=0<c&&c<A&&0<b&&b<x);if(d){n.fillStyle=h[C]?M(h[C][0],J):z;e=h[R]?h[B]*K:h[B];i=ca/(ca-e);s=new Int32Array(k.length-2);o=[];e=0;for(j=k.length-3;e<j;e+=2)q=k[e],r=k[e+1],u=k[e+2],v=k[e+3],b=~~((q-D)*i+D),d=~~((r-E)*i+E),a=~~((u-D)*i+D),c=~~((v-E)*i+E),(u-q)*(d-r)>(b-q)*(v-r)?(o.length||(o.unshift(r),o.unshift(q),o.push(b),o.push(d)),o.unshift(v),o.unshift(u),o.push(a),o.push(c)):(da(o),o=[]),s[e]=b,
s[e+1]=d;da(o);n.fillStyle=h[C]?M(h[C][1],J):F;da(s,T)}}}}function da(a,c){if(a.length){n.beginPath();n.moveTo(a[0],a[1]);for(var b=2,d=a.length;b<d;b+=2)n.lineTo(a[b],a[b+1]);n.closePath();c&&n.stroke();n.fill()}}r.Int32Array=r.Int32Array||r.Array;var sa=Math.exp,wa=Math.log,xa=Math.tan,ra=Math.atan,Q=Math.min,ia=Math.max,v=Math.PI,ea=v/2,ya=v/4,qa=180/v,u="latitude",z="longitude",B=0,y=1,C=2,R=3,A=0,x=0,s=0,X=0,G=0,H=0,w,U,P,j,n,W,T,S="rgb(200,190,180)",oa=Y(S,0.2),Aa="rgb(145,140,135)",F,p,g,J=
1,K=1,ba,ha=256,O=14,Z,D,E,ca=400,ja=ca-50,aa=!1,q=r.OSMBuildings=function(a){this.addTo(a)};q.prototype.VERSION="0.1a";q.prototype.render=function(){this.map&&t();return this};q.prototype.setStyle=function(a){this.map&&(a=a||{},T=void 0!==a.strokeRoofs?a.strokeRoofs:T,a.fillColor&&(S=a.fillColor,oa=Y(S,0.2)),t());return this};q.prototype.setData=function(a,c){this.map&&(a?(F=fa(a,c),p={n:90,w:-180,s:-90,e:180,x:0,y:0,z:w},g=ga(F,w,!0),na()):(F=null,t()));return this};q.prototype.loadData=function(a){this.map&&
(W=a,V());return this};(function(a){var c,b,d,f;a.VERSION+="-leaflet";a.addTo=function(a){a.addLayer(this);return this};a.onAdd=function(a){this.map=a;pa(a._panes.overlayPane);Z=a._layersMaxZoom;ka(a._size.x,a._size.y);var e=a.getPixelOrigin();la(e.x,e.y);ma(a._zoom);var n=0,h=0;c=function(){var b=L.DomUtil.getPosition(a._mapPane);D=s-(b.x-n);E=x-(b.y-h);t()};b=function(){var b=L.DomUtil.getPosition(a._mapPane);n=b.x;h=b.y;j.style.left=-b.x+"px";j.style.top=-b.y+"px";D=s;E=x;ka(a._size.x,a._size.y);
var c=a.getPixelOrigin();la(c.x-b.x,c.y-b.y);b=N(G,H);c=N(G+A,H+x);p&&(b[u]>p.n||b[z]<p.w||c[u]<p.s||c[z]>p.e)&&V();t()};d=za;f=function(){var b=a._zoom;aa=!1;ma(b);F?(g=ga(F,w),t()):V()};a.on({move:c,moveend:b,zoomstart:d,zoomend:f});a.options.zoomAnimation&&(j.className="leaflet-zoom-animated");a.attributionControl.addAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');t()};a.onRemove=function(a){a.attributionControl.removeAttribution('Buildings &copy; <a href="http://osmbuildings.org">OSM Buildings</a>');
a.off({move:c,moveend:b,zoomstart:d,zoomend:f});j.parentNode.removeChild(j);this.map=null}})(q.prototype)})(this);
