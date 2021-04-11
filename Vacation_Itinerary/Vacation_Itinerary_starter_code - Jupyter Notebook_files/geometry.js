google.maps.__gjsload__('geometry', function(_){var Iv=function(a,b){return Math.abs(_.He(b-a,-180,180))},Jv=function(a,b,c,d,e){if(!d){c=Iv(a.lng(),c)/Iv(a.lng(),b.lng());if(!e)return e=Math.sin(_.Gc(a.lat())),e=Math.log((1+e)/(1-e))/2,b=Math.sin(_.Gc(b.lat())),_.Hc(2*Math.atan(Math.exp(e+c*(Math.log((1+b)/(1-b))/2-e)))-Math.PI/2);a=e.fromLatLngToPoint(a);b=e.fromLatLngToPoint(b);return e.fromPointToLatLng(new _.N(a.x+c*(b.x-a.x),a.y+c*(b.y-a.y))).lat()}e=_.Gc(a.lat());a=_.Gc(a.lng());d=_.Gc(b.lat());b=_.Gc(b.lng());c=_.Gc(c);return _.He(_.Hc(Math.atan2(Math.sin(e)*
Math.cos(d)*Math.sin(c-b)-Math.sin(d)*Math.cos(e)*Math.sin(c-a),Math.cos(e)*Math.cos(d)*Math.sin(a-b))),-90,90)},Kv=function(){},Lv={containsLocation:function(a,b){var c=_.He(a.lng(),-180,180),d=!!b.get("geodesic"),e=b.get("latLngs"),f=b.get("map");f=!d&&f?f.getProjection():null;for(var g=!1,h=0,k=e.getLength();h<k;++h)for(var l=e.getAt(h),m=0,q=l.getLength();m<q;++m){var r=l.getAt(m),u=l.getAt((m+1)%q),v=_.He(r.lng(),-180,180),x=_.He(u.lng(),-180,180),w=Math.max(v,x);v=Math.min(v,x);(180<w-v?c>=
w||c<v:c<w&&c>=v)&&Jv(r,u,c,d,f)<a.lat()&&(g=!g)}return g||Lv.isLocationOnEdge(a,b)}};_.Sa("module$exports$PolyGeometry.containsLocation",Lv.containsLocation);
Lv.isLocationOnEdge=function(a,b,c){c=c||1E-9;var d=_.He(a.lng(),-180,180),e=b instanceof _.vj,f=!!b.get("geodesic"),g=b.get("latLngs");b=b.get("map");b=!f&&b?b.getProjection():null;for(var h=0,k=g.getLength();h<k;++h)for(var l=g.getAt(h),m=l.getLength(),q=e?m:m-1,r=0;r<q;++r){var u=l.getAt(r),v=l.getAt((r+1)%m),x=_.He(u.lng(),-180,180),w=_.He(v.lng(),-180,180),D=Math.max(x,w),G=Math.min(x,w);if(x=1E-9>=Math.abs(_.He(x-w,-180,180))&&(Math.abs(_.He(x-d,-180,180))<=c||Math.abs(_.He(w-d,-180,180))<=
c)){x=a.lat();w=Math.min(u.lat(),v.lat())-c;var L=Math.max(u.lat(),v.lat())+c;x=x>=w&&x<=L}if(x)return!0;if(180<D-G?d+c>=D||d-c<=G:d+c>=G&&d-c<=D)if(u=Jv(u,v,d,f,b),Math.abs(u-a.lat())<c)return!0}return!1};_.Sa("module$exports$PolyGeometry.isLocationOnEdge",Lv.isLocationOnEdge);var Mv={},Nv={},Ov;
for(Ov in Lv)Nv.Ce=Ov,Mv[Nv.Ce]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "PolyGeometry.'+a.Ce+'()" is not supported, use "google.maps.geometry.poly.'+a.Ce+'()" instead.');_.$g(Mv,"Lagpg");return Lv[a.Ce].apply(Lv,_.la(c))}}(Nv),Nv={Ce:Nv.Ce};_.y.PolyGeometry=Mv;var Pv={computeHeading:function(a,b){var c=_.gf(a),d=_.hf(a);a=_.gf(b);b=_.hf(b)-d;return _.He(_.Hc(Math.atan2(Math.sin(b)*Math.cos(a),Math.cos(c)*Math.sin(a)-Math.sin(c)*Math.cos(a)*Math.cos(b))),-180,180)}};_.Sa("module$exports$Spherical.computeHeading",Pv.computeHeading);
Pv.computeOffset=function(a,b,c,d){b/=d||6378137;c=_.Gc(c);var e=_.gf(a);a=_.hf(a);d=Math.cos(b);b=Math.sin(b);var f=Math.sin(e);e=Math.cos(e);var g=d*f+b*e*Math.cos(c);return new _.I(_.Hc(Math.asin(g)),_.Hc(a+Math.atan2(b*e*Math.sin(c),d-f*g)))};_.Sa("module$exports$Spherical.computeOffset",Pv.computeOffset);
Pv.computeOffsetOrigin=function(a,b,c,d){c=_.Gc(c);b/=d||6378137;d=Math.cos(b);var e=Math.sin(b)*Math.cos(c);b=Math.sin(b)*Math.sin(c);c=Math.sin(_.gf(a));var f=e*e*d*d+d*d*d*d-d*d*c*c;if(0>f)return null;var g=e*c+Math.sqrt(f);g/=d*d+e*e;var h=(c-e*g)/d;g=Math.atan2(h,g);if(g<-Math.PI/2||g>Math.PI/2)g=e*c-Math.sqrt(f),g=Math.atan2(h,g/(d*d+e*e));if(g<-Math.PI/2||g>Math.PI/2)return null;a=_.hf(a)-Math.atan2(b,d*Math.cos(g)-e*Math.sin(g));return new _.I(_.Hc(g),_.Hc(a))};
_.Sa("module$exports$Spherical.computeOffsetOrigin",Pv.computeOffsetOrigin);Pv.interpolate=function(a,b,c){var d=_.gf(a),e=_.hf(a),f=_.gf(b),g=_.hf(b),h=Math.cos(d),k=Math.cos(f);b=Pv.lh(a,b);var l=Math.sin(b);if(1E-6>l)return new _.I(a.lat(),a.lng());a=Math.sin((1-c)*b)/l;c=Math.sin(c*b)/l;b=a*h*Math.cos(e)+c*k*Math.cos(g);e=a*h*Math.sin(e)+c*k*Math.sin(g);return new _.I(_.Hc(Math.atan2(a*Math.sin(d)+c*Math.sin(f),Math.sqrt(b*b+e*e))),_.Hc(Math.atan2(e,b)))};
_.Sa("module$exports$Spherical.interpolate",Pv.interpolate);Pv.lh=function(a,b){var c=_.gf(a);a=_.hf(a);var d=_.gf(b);b=_.hf(b);return 2*Math.asin(Math.sqrt(Math.pow(Math.sin((c-d)/2),2)+Math.cos(c)*Math.cos(d)*Math.pow(Math.sin((a-b)/2),2)))};Pv.computeDistanceBetween=function(a,b,c){c=c||6378137;return Pv.lh(a,b)*c};_.Sa("module$exports$Spherical.computeDistanceBetween",Pv.computeDistanceBetween);
Pv.computeLength=function(a,b){b=b||6378137;var c=0;a instanceof _.bi&&(a=a.getArray());for(var d=0,e=a.length-1;d<e;++d)c+=Pv.computeDistanceBetween(a[d],a[d+1],b);return c};_.Sa("module$exports$Spherical.computeLength",Pv.computeLength);Pv.computeArea=function(a,b){return Math.abs(Pv.computeSignedArea(a,b))};_.Sa("module$exports$Spherical.computeArea",Pv.computeArea);
Pv.computeSignedArea=function(a,b){b=b||6378137;a instanceof _.bi&&(a=a.getArray());for(var c=a[0],d=0,e=1,f=a.length-1;e<f;++e)d+=Pv.um(c,a[e],a[e+1]);return d*b*b};_.Sa("module$exports$Spherical.computeSignedArea",Pv.computeSignedArea);Pv.um=function(a,b,c){return Pv.vm(a,b,c)*Pv.En(a,b,c)};Pv.vm=function(a,b,c){var d=[a,b,c,a];a=[];for(c=b=0;3>c;++c)a[c]=Pv.lh(d[c],d[c+1]),b+=a[c];b/=2;d=Math.tan(b/2);for(c=0;3>c;++c)d*=Math.tan((b-a[c])/2);return 4*Math.atan(Math.sqrt(Math.abs(d)))};
Pv.En=function(a,b,c){a=[a,b,c];b=[];for(c=0;3>c;++c){var d=a[c],e=_.gf(d);d=_.hf(d);var f=b[c]=[];f[0]=Math.cos(e)*Math.cos(d);f[1]=Math.cos(e)*Math.sin(d);f[2]=Math.sin(e)}return 0<b[0][0]*b[1][1]*b[2][2]+b[1][0]*b[2][1]*b[0][2]+b[2][0]*b[0][1]*b[1][2]-b[0][0]*b[2][1]*b[1][2]-b[1][0]*b[0][1]*b[2][2]-b[2][0]*b[1][1]*b[0][2]?1:-1};var Qv={},Rv={},Sv;
for(Sv in Pv)Rv.Ae=Sv,Qv[Rv.Ae]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "Spherical.'+a.Ae+'()" is not supported, use "google.maps.geometry.spherical.'+a.Ae+'()" instead.');_.$g(Qv,"Lags");return Pv[a.Ae].apply(Pv,_.la(c))}}(Rv),Rv={Ae:Rv.Ae};_.y.Spherical=Qv;var Tv={decodePath:function(a){for(var b=_.De(a),c=Array(Math.floor(a.length/2)),d=0,e=0,f=0,g=0;d<b;++g){var h=1,k=0;do{var l=a.charCodeAt(d++)-63-1;h+=l<<k;k+=5}while(31<=l);e+=h&1?~(h>>1):h>>1;h=1;k=0;do l=a.charCodeAt(d++)-63-1,h+=l<<k,k+=5;while(31<=l);f+=h&1?~(h>>1):h>>1;c[g]=new _.I(1E-5*e,1E-5*f,!0)}c.length=g;return c}};_.Sa("module$exports$PolylineCodec.decodePath",Tv.decodePath);
Tv.encodePath=function(a){a instanceof _.bi&&(a=a.getArray());return Tv.Wo(a,function(b){return[Math.round(1E5*b.lat()),Math.round(1E5*b.lng())]})};_.Sa("module$exports$PolylineCodec.encodePath",Tv.encodePath);Tv.Wo=function(a,b){for(var c=[],d=[0,0],e,f=0,g=_.De(a);f<g;++f)e=b?b(a[f]):a[f],Tv.jk(e[0]-d[0],c),Tv.jk(e[1]-d[1],c),d=e;return c.join("")};Tv.jk=function(a,b){Tv.Xo(0>a?~(a<<1):a<<1,b)};
Tv.Xo=function(a,b){for(;32<=a;)b.push(String.fromCharCode((32|a&31)+63)),a>>=5;b.push(String.fromCharCode(a+63))};var Uv={},Vv={},Wv;for(Wv in Tv)Vv.Be=Wv,Uv[Vv.Be]=function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];console.warn('Invoking "PolylineCodec.'+a.Be+'()" is not supported, use "google.maps.geometry.encoding.'+a.Be+'()" instead.');_.$g(Uv,"Lagpc");return Tv[a.Be].apply(Tv,_.la(c))}}(Vv),Vv={Be:Vv.Be};_.y.PolylineCodec=Uv;_.y.google.maps.geometry={encoding:Tv,spherical:Pv,poly:Lv};_.n=Kv.prototype;_.n.decodePath=Tv.decodePath;_.n.encodePath=Tv.encodePath;_.n.computeDistanceBetween=Pv.computeDistanceBetween;_.n.interpolate=Pv.interpolate;_.n.computeHeading=Pv.computeHeading;_.n.computeOffset=Pv.computeOffset;_.n.computeOffsetOrigin=Pv.computeOffsetOrigin;_.If("geometry",new Kv);});
