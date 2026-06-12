var p1=Object.defineProperty;var m1=(n,t,e)=>t in n?p1(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var O=(n,t,e)=>m1(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="170",g1=0,Ff=1,_1=2,hm=1,v1=2,Pi=3,ns=0,pn=1,Fn=2,Di=0,fr=1,is=2,Of=3,Bf=4,x1=5,bs=100,y1=101,M1=102,S1=103,E1=104,b1=200,T1=201,w1=202,A1=203,Yl=204,jl=205,C1=206,R1=207,P1=208,L1=209,I1=210,D1=211,U1=212,N1=213,F1=214,Kl=0,Zl=1,$l=2,_r=3,Jl=4,Ql=5,th=6,eh=7,um=0,O1=1,B1=2,ts=0,fm=1,dm=2,pm=3,mm=4,z1=5,gm=6,_m=7,vm=300,vr=301,xr=302,nh=303,ih=304,pc=306,sh=1e3,ws=1001,rh=1002,bn=1003,k1=1004,Zo=1005,hi=1006,Kc=1007,As=1008,zi=1009,xm=1010,ym=1011,bo=1012,au=1013,Ds=1014,ui=1015,Ui=1016,cu=1017,lu=1018,yr=1020,Mm=35902,Sm=1021,Em=1022,Kn=1023,bm=1024,Tm=1025,dr=1026,Mr=1027,hu=1028,uu=1029,wm=1030,fu=1031,du=1033,Fa=33776,Oa=33777,Ba=33778,za=33779,oh=35840,ah=35841,ch=35842,lh=35843,hh=36196,uh=37492,fh=37496,dh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,xh=37814,yh=37815,Mh=37816,Sh=37817,Eh=37818,bh=37819,Th=37820,wh=37821,ka=36492,Ah=36494,Ch=36495,Am=36283,Rh=36284,Ph=36285,Lh=36286,V1=3200,G1=3201,Cm=0,H1=1,Ji="",Un="srgb",Dr="srgb-linear",mc="linear",ue="srgb",Gs=7680,zf=519,W1=512,X1=513,q1=514,Rm=515,Y1=516,j1=517,K1=518,Z1=519,Ih=35044,kf="300 es",Ii=2e3,Za=2001;class Ur{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vf=1234567;const uo=Math.PI/180,To=180/Math.PI;function di(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]).toLowerCase()}function Ze(n,t,e){return Math.max(t,Math.min(e,n))}function pu(n,t){return(n%t+t)%t}function $1(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function J1(n,t,e){return n!==t?(e-n)/(t-n):0}function fo(n,t,e){return(1-e)*n+e*t}function Q1(n,t,e,i){return fo(n,t,1-Math.exp(-e*i))}function t_(n,t=1){return t-Math.abs(pu(n,t*2)-t)}function e_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function n_(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function i_(n,t){return n+Math.floor(Math.random()*(t-n+1))}function s_(n,t){return n+Math.random()*(t-n)}function r_(n){return n*(.5-Math.random())}function o_(n){n!==void 0&&(Vf=n);let t=Vf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a_(n){return n*uo}function c_(n){return n*To}function l_(n){return(n&n-1)===0&&n!==0}function h_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function u_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function f_(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+i)/2),h=o((t+i)/2),u=r((t-i)/2),f=o((t-i)/2),p=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,c*u,c*f,a*l);break;case"YZY":n.set(c*f,a*h,c*u,a*l);break;case"ZXZ":n.set(c*u,c*f,a*h,a*l);break;case"XZX":n.set(a*h,c*g,c*p,a*l);break;case"YXY":n.set(c*p,a*h,c*g,a*l);break;case"ZYZ":n.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:uo,RAD2DEG:To,generateUUID:di,clamp:Ze,euclideanModulo:pu,mapLinear:$1,inverseLerp:J1,lerp:fo,damp:Q1,pingpong:t_,smoothstep:e_,smootherstep:n_,randInt:i_,randFloat:s_,randFloatSpread:r_,seededRandom:o_,degToRad:a_,radToDeg:c_,isPowerOfTwo:l_,ceilPowerOfTwo:h_,floorPowerOfTwo:u_,setQuaternionFromProperEuler:f_,normalize:fe,denormalize:jn};class J{constructor(t=0,e=0){J.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,s,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],E=s[1],M=s[4],v=s[7],U=s[2],R=s[5],A=s[8];return r[0]=o*_+a*E+c*U,r[3]=o*m+a*M+c*R,r[6]=o*d+a*v+c*A,r[1]=l*_+h*E+u*U,r[4]=l*m+h*M+u*R,r[7]=l*d+h*v+u*A,r[2]=f*_+p*E+g*U,r[5]=f*m+p*M+g*R,r[8]=f*d+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zc.makeScale(t,e)),this}rotate(t){return this.premultiply(Zc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zc=new Xt;function Pm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function $a(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function d_(){const n=$a("canvas");return n.style.display="block",n}const Gf={};function oo(n){n in Gf||(Gf[n]=!0,console.warn(n))}function p_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function m_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function g_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(n.r=Ni(n.r),n.g=Ni(n.g),n.b=Ni(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ji?mc:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function pr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hf=[.64,.33,.3,.6,.15,.06],Wf=[.2126,.7152,.0722],Xf=[.3127,.329],qf=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Dr]:{primaries:Hf,whitePoint:Xf,transfer:mc,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:Hf,whitePoint:Xf,transfer:ue,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:Wf,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}});let Hs;class __{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=$a("canvas")),Hs.width=t.width,Hs.height=t.height;const i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$a("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ni(e[i]/255)*255):e[i]=Ni(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let v_=0;class Lm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($c(s[o].image)):r.push($c(s[o]))}else r=$c(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function $c(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?__.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x_=0;class sn extends Ur{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ws,s=ws,r=hi,o=As,a=Kn,c=zi,l=sn.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=di(),this.name="",this.source=new Lm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sh:t.x=t.x-Math.floor(t.x);break;case ws:t.x=t.x<0?0:1;break;case rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sh:t.y=t.y-Math.floor(t.y);break;case ws:t.y=t.y<0?0:1;break;case rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=vm;sn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(p+1)/2,U=(d+1)/2,R=(h+f)/4,A=(u+_)/4,L=(g+m)/4;return M>v&&M>U?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=A/i):v>U?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=L/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=A/r,s=L/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class y_ extends Ur{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends y_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Im extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class M_ extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=ws,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,E=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const U=Math.sqrt(M),R=Math.atan2(U,d*E);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}const v=a*E;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ze(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,i=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Jc.copy(this).projectOnVector(t),this.sub(Jc)}reflect(t){return this.sub(Jc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ze(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new w,jf=new Os;class Bs{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(t.matrixWorld),this.union($o)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Jo.subVectors(this.max,Yr),Ws.subVectors(t.a,Yr),Xs.subVectors(t.b,Yr),qs.subVectors(t.c,Yr),Wi.subVectors(Xs,Ws),Xi.subVectors(qs,Xs),ds.subVectors(Ws,qs);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-ds.z,ds.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,ds.z,0,-ds.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-ds.y,ds.x,0];return!Qc(e,Ws,Xs,qs,Jo)||(e=[1,0,0,0,1,0,0,0,1],!Qc(e,Ws,Xs,qs,Jo))?!1:(Qo.crossVectors(Wi,Xi),e=[Qo.x,Qo.y,Qo.z],Qc(e,Ws,Xs,qs,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const bi=[new w,new w,new w,new w,new w,new w,new w,new w],Xn=new w,$o=new Bs,Ws=new w,Xs=new w,qs=new w,Wi=new w,Xi=new w,ds=new w,Yr=new w,Jo=new w,Qo=new w,ps=new w;function Qc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ps.fromArray(n,r);const a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),c=t.dot(ps),l=e.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const S_=new Bs,jr=new w,tl=new w;class zs{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):S_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;jr.subVectors(t,this.center);const e=jr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(jr.copy(t.center).add(tl)),this.expandByPoint(jr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new w,el=new w,ta=new w,qi=new w,nl=new w,ea=new w,il=new w;class gc{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ti.copy(this.origin).addScaledVector(this.direction,e),Ti.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),ta.copy(e).sub(t).normalize(),qi.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ta),a=qi.dot(this.direction),c=-qi.dot(ta),l=qi.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(el).addScaledVector(ta,f),p}intersectSphere(t,e){Ti.subVectors(t.center,this.origin);const i=Ti.dot(this.direction),s=Ti.dot(Ti)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ti)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),ea.subVectors(i,t),il.crossVectors(nl,ea);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,t);const c=a*this.direction.dot(ea.crossVectors(qi,ea));if(c<0)return null;const l=a*this.direction.dot(nl.cross(qi));if(l<0||c+l>o)return null;const h=-a*qi.dot(il);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,i,s,r,o,a,c,l,h,u,f,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,p,g,_,m)}set(t,e,i,s,r,o,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ys.setFromMatrixColumn(t,0).length(),r=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(E_,t,b_)}lookAt(t,e,i){const s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Yi.crossVectors(i,xn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Yi.crossVectors(i,xn)),Yi.normalize(),na.crossVectors(xn,Yi),s[0]=Yi.x,s[4]=na.x,s[8]=xn.x,s[1]=Yi.y,s[5]=na.y,s[9]=xn.y,s[2]=Yi.z,s[6]=na.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],E=i[3],M=i[7],v=i[11],U=i[15],R=s[0],A=s[4],L=s[8],b=s[12],y=s[1],P=s[5],H=s[9],k=s[13],X=s[2],K=s[6],W=s[10],Q=s[14],V=s[3],ct=s[7],mt=s[11],St=s[15];return r[0]=o*R+a*y+c*X+l*V,r[4]=o*A+a*P+c*K+l*ct,r[8]=o*L+a*H+c*W+l*mt,r[12]=o*b+a*k+c*Q+l*St,r[1]=h*R+u*y+f*X+p*V,r[5]=h*A+u*P+f*K+p*ct,r[9]=h*L+u*H+f*W+p*mt,r[13]=h*b+u*k+f*Q+p*St,r[2]=g*R+_*y+m*X+d*V,r[6]=g*A+_*P+m*K+d*ct,r[10]=g*L+_*H+m*W+d*mt,r[14]=g*b+_*k+m*Q+d*St,r[3]=E*R+M*y+v*X+U*V,r[7]=E*A+M*P+v*K+U*ct,r[11]=E*L+M*H+v*W+U*mt,r[15]=E*b+M*k+v*Q+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+i*o*p+r*a*h-i*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,M=g*f*l-h*m*l-g*c*p+o*m*p+h*c*d-o*f*d,v=h*_*l-g*u*l+g*a*p-o*_*p-h*a*d+o*u*d,U=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,R=e*E+i*M+s*v+r*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=E*A,t[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*A,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*A,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*p-i*c*p)*A,t[4]=M*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*A,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*d-e*u*d)*A,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*d+e*a*d)*A,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*p-e*a*p)*A,t[12]=U*A,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*A,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=c*l,M=c*h,v=c*u,U=i.x,R=i.y,A=i.z;return s[0]=(1-(_+d))*U,s[1]=(p+v)*U,s[2]=(g-M)*U,s[3]=0,s[4]=(p-v)*R,s[5]=(1-(f+d))*R,s[6]=(m+E)*R,s[7]=0,s[8]=(g+M)*A,s[9]=(m-E)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const l=1/r,h=1/o,u=1/a;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=u,qn.elements[9]*=u,qn.elements[10]*=u,e.setFromRotationMatrix(qn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Ii){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let p,g;if(a===Ii)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Za)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Ii){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,p=(i+s)*h;let g,_;if(a===Ii)g=(o+r)*u,_=-2*u;else if(a===Za)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ys=new w,qn=new ie,E_=new w(0,0,0),b_=new w(1,1,1),Yi=new w,na=new w,xn=new w,Kf=new ie,Zf=new Os;class $n{constructor(t=0,e=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let T_=0;const $f=new w,js=new Os,wi=new ie,ia=new w,Kr=new w,w_=new w,A_=new Os,Jf=new w(1,0,0),Qf=new w(0,1,0),td=new w(0,0,1),ed={type:"added"},C_={type:"removed"},Ks={type:"childadded",child:null},sl={type:"childremoved",child:null};class He extends Ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new w,e=new $n,i=new Os,s=new w(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Xt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Jf,t)}rotateY(t){return this.rotateOnAxis(Qf,t)}rotateZ(t){return this.rotateOnAxis(td,t)}translateOnAxis(t,e){return $f.copy(t).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jf,t)}translateY(t){return this.translateOnAxis(Qf,t)}translateZ(t){return this.translateOnAxis(td,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ia.copy(t):ia.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Kr,ia,this.up):wi.lookAt(ia,Kr,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(wi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ed),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C_),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ed),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,w_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,A_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new w(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new w,Ai=new w,rl=new w,Ci=new w,Zs=new w,$s=new w,nd=new w,ol=new w,al=new w,cl=new w,ll=new pe,hl=new pe,ul=new pe;class On{constructor(t=new w,e=new w,i=new w){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Yn.subVectors(t,e),s.cross(Yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Yn.subVectors(s,e),Ai.subVectors(i,e),rl.subVectors(t,e);const o=Yn.dot(Yn),a=Yn.dot(Ai),c=Yn.dot(rl),l=Ai.dot(Ai),h=Ai.dot(rl),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ci.x),c.addScaledVector(o,Ci.y),c.addScaledVector(a,Ci.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return ll.setScalar(0),hl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,i),ul.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(ul,r.z),o}static isFrontFacing(t,e,i,s){return Yn.subVectors(i,e),Ai.subVectors(t,e),Yn.cross(Ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Yn.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),$s.subVectors(r,i),ol.subVectors(t,i);const c=Zs.dot(ol),l=$s.dot(ol);if(c<=0&&l<=0)return e.copy(i);al.subVectors(t,s);const h=Zs.dot(al),u=$s.dot(al);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Zs,o);cl.subVectors(t,r);const p=Zs.dot(cl),g=$s.dot(cl);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector($s,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return nd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(nd,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(Zs,o).addScaledVector($s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},sa={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=pu(t,1),e=Ze(e,0,1),i=Ze(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Un){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const i=Dm[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return Qt.fromWorkingColorSpace(Qe.copy(this),t),Math.round(Ze(Qe.r*255,0,255))*65536+Math.round(Ze(Qe.g*255,0,255))*256+Math.round(Ze(Qe.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Qe.copy(this),e);const i=Qe.r,s=Qe.g,r=Qe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Un){Qt.fromWorkingColorSpace(Qe.copy(this),t);const e=Qe.r,i=Qe.g,s=Qe.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(sa);const i=fo(ji.h,sa.h,e),s=fo(ji.s,sa.s,e),r=fo(ji.l,sa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new zt;zt.NAMES=Dm;let R_=0;class ls extends Ur{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=di(),this.name="",this.blending=fr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=jl,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Yl&&(i.blendSrc=this.blendSrc),this.blendDst!==jl&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ke extends ls{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=um,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ze=new w,ra=new J;class De{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class Um extends De{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nm extends De{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class $t extends De{constructor(t,e,i){super(new Float32Array(t),e,i)}}let P_=0;const Pn=new ie,dl=new He,Js=new w,yn=new Bs,Zr=new Bs,Ye=new w;class de extends Ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pm(t)?Nm:Um)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,i){return Pn.makeTranslation(t,e,i),this.applyMatrix4(Pn),this}scale(t,e,i){return Pn.makeScale(t,e,i),this.applyMatrix4(Pn),this}lookAt(t){return dl.lookAt(t),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(yn.min,Zr.min),yn.expandByPoint(Ye),Ye.addVectors(yn.max,Zr.max),yn.expandByPoint(Ye)):(yn.expandByPoint(Zr.min),yn.expandByPoint(Zr.max))}yn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ye.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(t,l),Ye.add(Js)),s=Math.max(s,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new w,c[L]=new w;const l=new w,h=new w,u=new w,f=new J,p=new J,g=new J,_=new w,m=new w;function d(L,b,y){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[L].add(_),a[b].add(_),a[y].add(_),c[L].add(m),c[b].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,b=E.length;L<b;++L){const y=E[L],P=y.start,H=y.count;for(let k=P,X=P+H;k<X;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new w,v=new w,U=new w,R=new w;function A(L){U.fromBufferAttribute(s,L),R.copy(U);const b=a[L];M.copy(b),M.sub(U.multiplyScalar(U.dot(b))).normalize(),v.crossVectors(R,b);const P=v.dot(c[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,P)}for(let L=0,b=E.length;L<b;++L){const y=E[L],P=y.start,H=y.count;for(let k=P,X=P+H;k<X;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new De(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new de,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const id=new ie,ms=new gc,oa=new zs,sd=new w,aa=new w,ca=new w,la=new w,pl=new w,ha=new w,rd=new w,ua=new w;class ee extends He{constructor(t=new de,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(pl.fromBufferAttribute(u,t),o?ha.addScaledVector(pl,h):ha.addScaledVector(pl.sub(e),h))}e.add(ha)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(oa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(oa,sd)===null||ms.origin.distanceToSquared(sd)>(t.far-t.near)**2))&&(id.copy(r).invert(),ms.copy(t.ray).applyMatrix4(id),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,U=M;v<U;v+=3){const R=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=fa(this,d,t,i,l,h,u,R,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=fa(this,o,t,i,l,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=E,U=M;v<U;v+=3){const R=v,A=v+1,L=v+2;s=fa(this,d,t,i,l,h,u,R,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,M=m+1,v=m+2;s=fa(this,o,t,i,l,h,u,E,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function L_(n,t,e,i,s,r,o,a){let c;if(t.side===pn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===ns,a),c===null)return null;ua.copy(a),ua.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ua);return l<e.near||l>e.far?null:{distance:l,point:ua.clone(),object:n}}function fa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,aa),n.getVertexPosition(c,ca),n.getVertexPosition(l,la);const h=L_(n,t,e,i,aa,ca,la,rd);if(h){const u=new w;On.getBarycoord(rd,aa,ca,la,u),s&&(h.uv=On.getInterpolatedAttribute(s,a,c,l,u,new J)),r&&(h.uv1=On.getInterpolatedAttribute(r,a,c,l,u,new J)),o&&(h.normal=On.getInterpolatedAttribute(o,a,c,l,u,new w),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new w,materialIndex:0};On.getNormal(aa,ca,la,f.normal),h.face=f,h.barycoord=u}return h}class ks extends de{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(_,m,d,E,M,v,U,R,A,L,b){const y=v/A,P=U/L,H=v/2,k=U/2,X=R/2,K=A+1,W=L+1;let Q=0,V=0;const ct=new w;for(let mt=0;mt<W;mt++){const St=mt*P-k;for(let Gt=0;Gt<K;Gt++){const oe=Gt*y-H;ct[_]=oe*E,ct[m]=St*M,ct[d]=X,l.push(ct.x,ct.y,ct.z),ct[_]=0,ct[m]=0,ct[d]=R>0?1:-1,h.push(ct.x,ct.y,ct.z),u.push(Gt/A),u.push(1-mt/L),Q+=1}}for(let mt=0;mt<L;mt++)for(let St=0;St<A;St++){const Gt=f+St+K*mt,oe=f+St+K*(mt+1),j=f+(St+1)+K*(mt+1),st=f+(St+1)+K*mt;c.push(Gt,oe,st),c.push(oe,j,st),V+=6}a.addGroup(p,V,b),p+=V,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Sr(n[e]);for(const s in i)t[s]=i[s]}return t}function I_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Fm(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const wo={clone:Sr,merge:cn};var D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ls{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=I_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Om extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Ii}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new w,od=new J,ad=new J;class nn extends Om{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=To*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return To*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-t/Ki.z)}getViewSize(t,e){return this.getViewBounds(t,od,ad),e.subVectors(ad,od)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qs=-90,tr=1;class N_ extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Qs,tr,t,e);s.layers=this.layers,this.add(s);const r=new nn(Qs,tr,t,e);r.layers=this.layers,this.add(r);const o=new nn(Qs,tr,t,e);o.layers=this.layers,this.add(o);const a=new nn(Qs,tr,t,e);a.layers=this.layers,this.add(a);const c=new nn(Qs,tr,t,e);c.layers=this.layers,this.add(c);const l=new nn(Qs,tr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bm extends sn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vr,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class F_ extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Bm(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:hi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ks(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Di});r.uniforms.tEquirect.value=e;const o=new ee(s,r),a=e.minFilter;return e.minFilter===As&&(e.minFilter=hi),new N_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=new w,O_=new w,B_=new Xt;class Ms{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ml.subVectors(i,e).cross(O_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||B_.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new zs,da=new w;class gu{constructor(t=new Ms,e=new Ms,i=new Ms,s=new Ms,r=new Ms,o=new Ms){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ii){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],M=s[14],v=s[15];if(i[0].setComponents(c-r,f-l,m-p,v-d).normalize(),i[1].setComponents(c+r,f+l,m+p,v+d).normalize(),i[2].setComponents(c+o,f+h,m+g,v+E).normalize(),i[3].setComponents(c-o,f-h,m-g,v-E).normalize(),i[4].setComponents(c-a,f-u,m-_,v-M).normalize(),e===Ii)i[5].setComponents(c+a,f+u,m+_,v+M).normalize();else if(e===Za)i[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(da.x=s.normal.x>0?t.max.x:t.min.x,da.y=s.normal.y>0?t.max.y:t.min.y,da.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zm(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function z_(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=n.SHORT;else if(l instanceof Uint32Array)p=n.UNSIGNED_INT;else if(l instanceof Int32Array)p=n.INT;else if(l instanceof Int8Array)p=n.BYTE;else if(l instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class No extends de{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let M=0;M<l;M++){const v=M*u-r;g.push(v,-E,0),_.push(0,0,1),m.push(M/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const M=E+l*d,v=E+l*(d+1),U=E+1+l*(d+1),R=E+1+l*d;p.push(M,v,R),p.push(v,U,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new No(t.width,t.height,t.widthSegments,t.heightSegments)}}var k_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,G_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,H_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,K_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ov=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,av=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",_v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Iv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Dv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ov=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,c2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,m2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,E2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,C2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ox=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ax=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:k_,alphahash_pars_fragment:V_,alphamap_fragment:G_,alphamap_pars_fragment:H_,alphatest_fragment:W_,alphatest_pars_fragment:X_,aomap_fragment:q_,aomap_pars_fragment:Y_,batching_pars_vertex:j_,batching_vertex:K_,begin_vertex:Z_,beginnormal_vertex:$_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:tv,clipping_planes_fragment:ev,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:sv,color_fragment:rv,color_pars_fragment:ov,color_pars_vertex:av,color_vertex:cv,common:lv,cube_uv_reflection_fragment:hv,defaultnormal_vertex:uv,displacementmap_pars_vertex:fv,displacementmap_vertex:dv,emissivemap_fragment:pv,emissivemap_pars_fragment:mv,colorspace_fragment:gv,colorspace_pars_fragment:_v,envmap_fragment:vv,envmap_common_pars_fragment:xv,envmap_pars_fragment:yv,envmap_pars_vertex:Mv,envmap_physical_pars_fragment:Iv,envmap_vertex:Sv,fog_vertex:Ev,fog_pars_vertex:bv,fog_fragment:Tv,fog_pars_fragment:wv,gradientmap_pars_fragment:Av,lightmap_pars_fragment:Cv,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Pv,lights_pars_begin:Lv,lights_toon_fragment:Dv,lights_toon_pars_fragment:Uv,lights_phong_fragment:Nv,lights_phong_pars_fragment:Fv,lights_physical_fragment:Ov,lights_physical_pars_fragment:Bv,lights_fragment_begin:zv,lights_fragment_maps:kv,lights_fragment_end:Vv,logdepthbuf_fragment:Gv,logdepthbuf_pars_fragment:Hv,logdepthbuf_pars_vertex:Wv,logdepthbuf_vertex:Xv,map_fragment:qv,map_pars_fragment:Yv,map_particle_fragment:jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Zv,metalnessmap_pars_fragment:$v,morphinstance_vertex:Jv,morphcolor_vertex:Qv,morphnormal_vertex:t2,morphtarget_pars_vertex:e2,morphtarget_vertex:n2,normal_fragment_begin:i2,normal_fragment_maps:s2,normal_pars_fragment:r2,normal_pars_vertex:o2,normal_vertex:a2,normalmap_pars_fragment:c2,clearcoat_normal_fragment_begin:l2,clearcoat_normal_fragment_maps:h2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:f2,opaque_fragment:d2,packing:p2,premultiplied_alpha_fragment:m2,project_vertex:g2,dithering_fragment:_2,dithering_pars_fragment:v2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:y2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:S2,shadowmap_vertex:E2,shadowmask_pars_fragment:b2,skinbase_vertex:T2,skinning_pars_vertex:w2,skinning_vertex:A2,skinnormal_vertex:C2,specularmap_fragment:R2,specularmap_pars_fragment:P2,tonemapping_fragment:L2,tonemapping_pars_fragment:I2,transmission_fragment:D2,transmission_pars_fragment:U2,uv_pars_fragment:N2,uv_pars_vertex:F2,uv_vertex:O2,worldpos_vertex:B2,background_vert:z2,background_frag:k2,backgroundCube_vert:V2,backgroundCube_frag:G2,cube_vert:H2,cube_frag:W2,depth_vert:X2,depth_frag:q2,distanceRGBA_vert:Y2,distanceRGBA_frag:j2,equirect_vert:K2,equirect_frag:Z2,linedashed_vert:$2,linedashed_frag:J2,meshbasic_vert:Q2,meshbasic_frag:tx,meshlambert_vert:ex,meshlambert_frag:nx,meshmatcap_vert:ix,meshmatcap_frag:sx,meshnormal_vert:rx,meshnormal_frag:ox,meshphong_vert:ax,meshphong_frag:cx,meshphysical_vert:lx,meshphysical_frag:hx,meshtoon_vert:ux,meshtoon_frag:fx,points_vert:dx,points_frag:px,shadow_vert:mx,shadow_frag:gx,sprite_vert:_x,sprite_frag:vx},lt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ci={basic:{uniforms:cn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:cn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:cn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:cn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:cn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:cn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:cn([lt.points,lt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:cn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:cn([lt.common,lt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:cn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:cn([lt.sprite,lt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:cn([lt.common,lt.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:cn([lt.lights,lt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ci.physical={uniforms:cn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const pa={r:0,b:0,g:0},_s=new $n,xx=new ie;function yx(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?e:t).get(M)),M}function _(E){let M=!1;const v=g(E);v===null?d(a,c):v&&v.isColor&&(d(v,1),M=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===pc)?(h===void 0&&(h=new ee(new ks(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Sr(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(M.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xx.makeRotationFromEuler(_s)),h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ue,(u!==v||f!==v.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ee(new No(2,2),new ln({name:"BackgroundMaterial",uniforms:Sr(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,M){E.getRGB(pa,Fm(n)),i.buffers.color.setClear(pa.r,pa.g,pa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:_,addToRenderList:m}}function Mx(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,P,H,k,X){let K=!1;const W=u(k,H,P);r!==W&&(r=W,l(r.object)),K=p(y,k,H,X),K&&g(y,k,H,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(y,P,H,k),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(y){return n.bindVertexArray(y)}function h(y){return n.deleteVertexArray(y)}function u(y,P,H){const k=H.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let K=X[P.id];K===void 0&&(K={},X[P.id]=K);let W=K[k];return W===void 0&&(W=f(c()),K[k]=W),W}function f(y){const P=[],H=[],k=[];for(let X=0;X<e;X++)P[X]=0,H[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:y,attributes:{},index:null}}function p(y,P,H,k){const X=r.attributes,K=P.attributes;let W=0;const Q=H.getAttributes();for(const V in Q)if(Q[V].location>=0){const mt=X[V];let St=K[V];if(St===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),mt===void 0||mt.attribute!==St||St&&mt.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(y,P,H,k){const X={},K=P.attributes;let W=0;const Q=H.getAttributes();for(const V in Q)if(Q[V].location>=0){let mt=K[V];mt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor));const St={};St.attribute=mt,mt&&mt.data&&(St.data=mt.data),X[V]=St,W++}r.attributes=X,r.attributesNum=W,r.index=k}function _(){const y=r.newAttributes;for(let P=0,H=y.length;P<H;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const H=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;H[y]=1,k[y]===0&&(n.enableVertexAttribArray(y),k[y]=1),X[y]!==P&&(n.vertexAttribDivisor(y,P),X[y]=P)}function E(){const y=r.newAttributes,P=r.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==y[H]&&(n.disableVertexAttribArray(H),P[H]=0)}function M(y,P,H,k,X,K,W){W===!0?n.vertexAttribIPointer(y,P,H,X,K):n.vertexAttribPointer(y,P,H,k,X,K)}function v(y,P,H,k){_();const X=k.attributes,K=H.getAttributes(),W=P.defaultAttributeValues;for(const Q in K){const V=K[Q];if(V.location>=0){let ct=X[Q];if(ct===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ct=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ct=y.instanceColor)),ct!==void 0){const mt=ct.normalized,St=ct.itemSize,Gt=t.get(ct);if(Gt===void 0)continue;const oe=Gt.buffer,j=Gt.type,st=Gt.bytesPerElement,bt=j===n.INT||j===n.UNSIGNED_INT||ct.gpuType===au;if(ct.isInterleavedBufferAttribute){const ot=ct.data,Ut=ot.stride,kt=ct.offset;if(ot.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)d(V.location+Ot,ot.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Ot=0;Ot<V.locationSize;Ot++)M(V.location+Ot,St/V.locationSize,j,mt,Ut*st,(kt+St/V.locationSize*Ot)*st,bt)}else{if(ct.isInstancedBufferAttribute){for(let ot=0;ot<V.locationSize;ot++)d(V.location+ot,ct.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let ot=0;ot<V.locationSize;ot++)m(V.location+ot);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let ot=0;ot<V.locationSize;ot++)M(V.location+ot,St/V.locationSize,j,mt,St*st,St/V.locationSize*ot*st,bt)}}else if(W!==void 0){const mt=W[Q];if(mt!==void 0)switch(mt.length){case 2:n.vertexAttrib2fv(V.location,mt);break;case 3:n.vertexAttrib3fv(V.location,mt);break;case 4:n.vertexAttrib4fv(V.location,mt);break;default:n.vertexAttrib1fv(V.location,mt)}}}}E()}function U(){L();for(const y in i){const P=i[y];for(const H in P){const k=P[H];for(const X in k)h(k[X].object),delete k[X];delete P[H]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const H in P){const k=P[H];for(const X in k)h(k[X].object),delete k[X];delete P[H]}delete i[y.id]}function A(y){for(const P in i){const H=i[P];if(H[y.id]===void 0)continue;const k=H[y.id];for(const X in k)h(k[X].object),delete k[X];delete H[y.id]}}function L(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Sx(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Ex(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Ui&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zi&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!L)}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:U,maxSamples:R}}function bx(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ms,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const E=r?0:i,M=E*4;let v=d.clippingState||null;c.value=v,v=h(g,f,M,p);for(let U=0;U!==M;++U)v[U]=e[U];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let M=0,v=p;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Tx(n){let t=new WeakMap;function e(o,a){return a===nh?o.mapping=vr:a===ih&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nh||a===ih)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new F_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class _u extends Om{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,cd=[.125,.215,.35,.446,.526,.582],Ts=20,gl=new _u,ld=new zt;let _l=null,vl=0,xl=0,yl=!1;const Ss=(1+Math.sqrt(5))/2,er=1/Ss,hd=[new w(-Ss,er,0),new w(Ss,er,0),new w(-er,0,Ss),new w(er,0,Ss),new w(0,Ss,-er),new w(0,Ss,er),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)];class ud{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,ma(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:hi,minFilter:hi,generateMipmaps:!1,type:Ui,format:Kn,colorSpace:Dr,depthBuffer:!1},s=fd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(r)),this._blurMaterial=Ax(r,t,e)}return s}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new nn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ld),h.toneMapping=ts,h.autoClear=!1;const p=new ke({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new ee(new ks,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ld),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const M=this._cubeSize;ma(s,E*M,d>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===vr||t.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ma(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hd[(s-r-1)%hd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ee(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ts-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ts;m>Ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const d=[];let E=0;for(let A=0;A<Ts;++A){const L=A/_,b=Math.exp(-L*L/2);d.push(b),A===0?E+=b:A<m&&(E+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const v=this._sizeLods[s],U=3*v*(s>M-cr?s-M+cr:0),R=4*(this._cubeSize-v);ma(e,U,R,3*v,2*v),c.setRenderTarget(e),c.render(u,gl)}}function wx(n){const t=[],e=[],i=[];let s=n;const r=n-cr+1+cd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-cr?c=cd[o-n+cr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,L=R>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];E.set(b,_*g*R),M.set(f,m*g*R);const y=[R,R,R,R,R,R];v.set(y,d*g*R)}const U=new de;U.setAttribute("position",new De(E,_)),U.setAttribute("uv",new De(M,m)),U.setAttribute("faceIndex",new De(v,d)),t.push(U),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fd(n,t,e){const i=new Zn(n,t,e);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ma(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ax(n,t,e){const i=new Float32Array(Ts),s=new w(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function dd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function pd(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cx(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===nh||c===ih,h=c===vr||c===xr;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ud(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new ud(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Rx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&oo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Px(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let M=0,v=E.length;M<v;M+=3){const U=E[M+0],R=E[M+1],A=E[M+2];f.push(U,R,R,A,A,U)}}else if(g!==void 0){const E=g.array;_=g.version;for(let M=0,v=E.length/3-1;M<v;M+=3){const U=M+0,R=M+1,A=M+2;f.push(U,R,R,A,A,U)}}else return;const m=new(Pm(f)?Nm:Um)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Lx(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function l(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,f*o,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ix(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Dx(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=a.attributes.position.count*v,R=1;U>t.maxTextureSize&&(R=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*R*4*u),L=new Im(A,U,R,u);L.type=ui,L.needsUpdate=!0;const b=v*4;for(let P=0;P<u;P++){const H=d[P],k=E[P],X=M[P],K=U*R*4*P;for(let W=0;W<H.count;W++){const Q=W*b;g===!0&&(s.fromBufferAttribute(H,W),A[K+Q+0]=s.x,A[K+Q+1]=s.y,A[K+Q+2]=s.z,A[K+Q+3]=0),_===!0&&(s.fromBufferAttribute(k,W),A[K+Q+4]=s.x,A[K+Q+5]=s.y,A[K+Q+6]=s.z,A[K+Q+7]=0),m===!0&&(s.fromBufferAttribute(X,W),A[K+Q+8]=s.x,A[K+Q+9]=s.y,A[K+Q+10]=s.z,A[K+Q+11]=X.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new J(U,R)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Ux(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class km extends sn{constructor(t,e,i,s,r,o,a,c,l,h=dr){if(h!==dr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===dr&&(i=Ds),i===void 0&&h===Mr&&(i=yr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=c!==void 0?c:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vm=new sn,md=new km(1,1),Gm=new Im,Hm=new M_,Wm=new Bm,gd=[],_d=[],vd=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function Nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=gd[s];if(r===void 0&&(r=new Float32Array(s),gd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function We(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function _c(n,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Nx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Fx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2fv(this.addr,t),Xe(e,t)}}function Ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;n.uniform3fv(this.addr,t),Xe(e,t)}}function Bx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4fv(this.addr,t),Xe(e,t)}}function zx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;yd.set(i),n.uniformMatrix2fv(this.addr,!1,yd),Xe(e,i)}}function kx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;xd.set(i),n.uniformMatrix3fv(this.addr,!1,xd),Xe(e,i)}}function Vx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(We(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,i))return;vd.set(i),n.uniformMatrix4fv(this.addr,!1,vd),Xe(e,i)}}function Gx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2iv(this.addr,t),Xe(e,t)}}function Wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3iv(this.addr,t),Xe(e,t)}}function Xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4iv(this.addr,t),Xe(e,t)}}function qx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;n.uniform2uiv(this.addr,t),Xe(e,t)}}function jx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;n.uniform3uiv(this.addr,t),Xe(e,t)}}function Kx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;n.uniform4uiv(this.addr,t),Xe(e,t)}}function Zx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(md.compareFunction=Rm,r=md):r=Vm,e.setTexture2D(t||r,s)}function $x(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hm,s)}function Jx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wm,s)}function Qx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Gm,s)}function ty(n){switch(n){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return zx;case 35675:return kx;case 35676:return Vx;case 5124:case 35670:return Gx;case 35667:case 35671:return Hx;case 35668:case 35672:return Wx;case 35669:case 35673:return Xx;case 5125:return qx;case 36294:return Yx;case 36295:return jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Zx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return Qx}}function ey(n,t){n.uniform1fv(this.addr,t)}function ny(n,t){const e=Nr(t,this.size,2);n.uniform2fv(this.addr,e)}function iy(n,t){const e=Nr(t,this.size,3);n.uniform3fv(this.addr,e)}function sy(n,t){const e=Nr(t,this.size,4);n.uniform4fv(this.addr,e)}function ry(n,t){const e=Nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function oy(n,t){const e=Nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function ay(n,t){const e=Nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function cy(n,t){n.uniform1iv(this.addr,t)}function ly(n,t){n.uniform2iv(this.addr,t)}function hy(n,t){n.uniform3iv(this.addr,t)}function uy(n,t){n.uniform4iv(this.addr,t)}function fy(n,t){n.uniform1uiv(this.addr,t)}function dy(n,t){n.uniform2uiv(this.addr,t)}function py(n,t){n.uniform3uiv(this.addr,t)}function my(n,t){n.uniform4uiv(this.addr,t)}function gy(n,t,e){const i=this.cache,s=t.length,r=_c(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vm,r[o])}function _y(n,t,e){const i=this.cache,s=t.length,r=_c(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hm,r[o])}function vy(n,t,e){const i=this.cache,s=t.length,r=_c(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Wm,r[o])}function xy(n,t,e){const i=this.cache,s=t.length,r=_c(e,s);We(i,r)||(n.uniform1iv(this.addr,r),Xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Gm,r[o])}function yy(n){switch(n){case 5126:return ey;case 35664:return ny;case 35665:return iy;case 35666:return sy;case 35674:return ry;case 35675:return oy;case 35676:return ay;case 5124:case 35670:return cy;case 35667:case 35671:return ly;case 35668:case 35672:return hy;case 35669:case 35673:return uy;case 5125:return fy;case 36294:return dy;case 36295:return py;case 36296:return my;case 35678:case 36198:case 36298:case 36306:case 35682:return gy;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return vy;case 36289:case 36303:case 36311:case 36292:return xy}}class My{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ty(e.type)}}class Sy{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yy(e.type)}}class Ey{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Md(n,t){n.seq.push(t),n.map[t.id]=t}function by(n,t,e){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Md(e,l===void 0?new My(a,n,t):new Sy(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Ey(a),Md(e,u)),e=u}}}class Va{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);by(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Sd(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Ty=37297;let wy=0;function Ay(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Ed=new Xt;function Cy(n){Qt._getMatrix(Ed,Qt.workingColorSpace,n);const t=`mat3( ${Ed.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case mc:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function bd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ay(n.getShaderSource(t),o)}else return s}function Ry(n,t){const e=Cy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Py(n,t){let e;switch(t){case fm:e="Linear";break;case dm:e="Reinhard";break;case pm:e="Cineon";break;case mm:e="ACESFilmic";break;case gm:e="AgX";break;case _m:e="Neutral";break;case z1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ga=new w;function Ly(){Qt.getLuminanceCoefficients(ga);const n=ga.x.toFixed(4),t=ga.y.toFixed(4),e=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Dy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Uy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ao(n){return n!==""}function Td(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(n){return n.replace(Ny,Oy)}const Fy=new Map;function Oy(n,t){let e=Yt[t];if(e===void 0){const i=Fy.get(t);if(i!==void 0)e=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Dh(e)}const By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(n){return n.replace(By,zy)}function zy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ky(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===hm?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===v1?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function Vy(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vr:case xr:t="ENVMAP_TYPE_CUBE";break;case pc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function Hy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case um:t="ENVMAP_BLENDING_MULTIPLY";break;case O1:t="ENVMAP_BLENDING_MIX";break;case B1:t="ENVMAP_BLENDING_ADD";break}return t}function Wy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Xy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ky(e),l=Vy(e),h=Gy(e),u=Hy(e),f=Wy(e),p=Iy(e),g=Dy(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?Yt.tonemapping_pars_fragment:"",e.toneMapping!==ts?Py("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Ry("linearToOutputTexel",e.outputColorSpace),Ly(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=Dh(o),o=Td(o,e),o=wd(o,e),a=Dh(a),a=Td(a,e),a=wd(a,e),o=Ad(o),a=Ad(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=E+m+o,v=E+d+a,U=Sd(s,s.VERTEX_SHADER,M),R=Sd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,R),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(U).trim(),X=s.getShaderInfoLog(R).trim();let K=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,R);else{const Q=bd(s,U,"vertex"),V=bd(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+V)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:d}})}s.deleteShader(U),s.deleteShader(R),L=new Va(s,_),b=Uy(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,Ty)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=R,this}let qy=0;class Yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new jy(t),e.set(t,i)),i}}class jy{constructor(t){this.id=qy++,this.code=t,this.usedTimes=0}}function Ky(n,t,e,i,s,r,o){const a=new mu,c=new Yy,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,H,k){const X=H.fog,K=k.geometry,W=b.isMeshStandardMaterial?H.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),V=Q&&Q.mapping===pc?Q.image.height:null,ct=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=mt!==void 0?mt.length:0;let Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let oe,j,st,bt;if(ct){const he=ci[ct];oe=he.vertexShader,j=he.fragmentShader}else oe=b.vertexShader,j=b.fragmentShader,c.update(b),st=c.getVertexShaderID(b),bt=c.getFragmentShaderID(b);const ot=n.getRenderTarget(),Ut=n.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,te=!!b.map,$=!!b.matcap,it=!!Q,C=!!b.aoMap,Pt=!!b.lightMap,et=!!b.bumpMap,xt=!!b.normalMap,at=!!b.displacementMap,Nt=!!b.emissiveMap,gt=!!b.metalnessMap,T=!!b.roughnessMap,x=b.anisotropy>0,F=b.clearcoat>0,q=b.dispersion>0,tt=b.iridescence>0,Y=b.sheen>0,Tt=b.transmission>0,ht=x&&!!b.anisotropyMap,_t=F&&!!b.clearcoatMap,jt=F&&!!b.clearcoatNormalMap,nt=F&&!!b.clearcoatRoughnessMap,yt=tt&&!!b.iridescenceMap,Ft=tt&&!!b.iridescenceThicknessMap,Bt=Y&&!!b.sheenColorMap,Mt=Y&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,qt=!!b.specularColorMap,_e=!!b.specularIntensityMap,I=Tt&&!!b.transmissionMap,ut=Tt&&!!b.thicknessMap,G=!!b.gradientMap,Z=!!b.alphaMap,pt=b.alphaTest>0,ft=!!b.alphaHash,Ht=!!b.extensions;let Pe=ts;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Pe=n.toneMapping);const $e={shaderID:ct,shaderType:b.type,shaderName:b.name,vertexShader:oe,fragmentShader:j,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:bt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Dr,alphaToCoverage:!!b.alphaToCoverage,map:te,matcap:$,envMap:it,envMapMode:it&&Q.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Pt,bumpMap:et,normalMap:xt,displacementMap:f&&at,emissiveMap:Nt,normalMapObjectSpace:xt&&b.normalMapType===H1,normalMapTangentSpace:xt&&b.normalMapType===Cm,metalnessMap:gt,roughnessMap:T,anisotropy:x,anisotropyMap:ht,clearcoat:F,clearcoatMap:_t,clearcoatNormalMap:jt,clearcoatRoughnessMap:nt,dispersion:q,iridescence:tt,iridescenceMap:yt,iridescenceThicknessMap:Ft,sheen:Y,sheenColorMap:Bt,sheenRoughnessMap:Mt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:_e,transmission:Tt,transmissionMap:I,thicknessMap:ut,gradientMap:G,opaque:b.transparent===!1&&b.blending===fr&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:ft,combine:b.combine,mapUv:te&&_(b.map.channel),aoMapUv:C&&_(b.aoMap.channel),lightMapUv:Pt&&_(b.lightMap.channel),bumpMapUv:et&&_(b.bumpMap.channel),normalMapUv:xt&&_(b.normalMap.channel),displacementMapUv:at&&_(b.displacementMap.channel),emissiveMapUv:Nt&&_(b.emissiveMap.channel),metalnessMapUv:gt&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:ht&&_(b.anisotropyMap.channel),clearcoatMapUv:_t&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(b.sheenRoughnessMap.channel),specularMapUv:Jt&&_(b.specularMap.channel),specularColorMapUv:qt&&_(b.specularColorMap.channel),specularIntensityMapUv:_e&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:ut&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(xt||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(te||Z),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Gt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Pe,decodeVideoTexture:te&&b.map.isVideoTexture===!0&&Qt.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:Nt&&b.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ht&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&b.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(E(y,b),M(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function E(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function M(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const y=g[b.type];let P;if(y){const H=ci[y];P=wo.clone(H.uniforms)}else P=b.uniforms;return P}function U(b,y){let P;for(let H=0,k=h.length;H<k;H++){const X=h[H];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Xy(n,y,b,r),h.push(P)),P}function R(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function A(b){c.remove(b)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:U,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:L}}function Zy(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function $y(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pd(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||$y),i.length>1&&i.sort(f||Rd),s.length>1&&s.sort(f||Rd)}function h(){for(let u=t,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Jy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Pd,n.set(i,[o])):s>=r.length?(o=new Pd,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new zt};break;case"SpotLight":e={position:new w,direction:new w,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new w,halfWidth:new w,halfHeight:new w};break}return n[t.id]=e,e}}}function t3(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let e3=0;function n3(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function i3(n){const t=new Qy,e=t3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new w);const s=new w,r=new ie,o=new ie;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,M=0,v=0,U=0,R=0,A=0;l.sort(n3);for(let b=0,y=l.length;b<y;b++){const P=l[b],H=P.color,k=P.intensity,X=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*k,u+=H.g*k,f+=H.b*k;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],k);A++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,E++}i.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(H).multiplyScalar(k),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[_]=W;const Q=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,Q.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=K,v++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(H).multiplyScalar(k),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,V=e.get(P);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(k),W.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==M||L.numSpotShadows!==v||L.numSpotMaps!==U||L.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=M,L.numSpotShadows=v,L.numSpotMaps=U,L.numLightProbes=A,i.version=e3++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const M=l[d];if(M.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function Ld(n){const t=new i3(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function s3(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ld(n),t.set(s,[a])):r>=o.length?(a=new Ld(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class r3 extends ls{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=V1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class o3 extends ls{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const a3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l3(n,t,e){let i=new gu;const s=new J,r=new J,o=new pe,a=new r3({depthPacking:G1}),c=new o3,l={},h=e.maxTextureSize,u={[ns]:pn,[pn]:ns,[Fn]:Fn},f=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:a3,fragmentShader:c3}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new de;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let d=this.type;this.render=function(R,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Di),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=d!==Pi&&this.type===Pi,X=d===Pi&&this.type!==Pi;for(let K=0,W=R.length;K<W;K++){const Q=R[K],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ct=V.getFrameExtents();if(s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y)),V.map===null||k===!0||X===!0){const St=this.type!==Pi?{minFilter:bn,magFilter:bn}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(s.x,s.y,St),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const mt=V.getViewportCount();for(let St=0;St<mt;St++){const Gt=V.getViewport(St);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),H.viewport(o),V.updateMatrices(Q,St),i=V.getFrustum(),v(A,L,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===Pi&&E(V,L),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,P)};function E(R,A){const L=t.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,L,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,L,p,_,null)}function M(R,A,L,b){let y=null;const P=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)y=P;else if(y=L.isPointLight===!0?c:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=y.uuid,k=A.uuid;let X=l[H];X===void 0&&(X={},l[H]=X);let K=X[k];K===void 0&&(K=y.clone(),X[k]=K,A.addEventListener("dispose",U)),y=K}if(y.visible=A.visible,y.wireframe=A.wireframe,b===Pi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=n.properties.get(y);H.light=L}return y}function v(R,A,L,b,y){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const k=t.update(R),X=R.material;if(Array.isArray(X)){const K=k.groups;for(let W=0,Q=K.length;W<Q;W++){const V=K[W],ct=X[V.materialIndex];if(ct&&ct.visible){const mt=M(R,ct,b,y);R.onBeforeShadow(n,R,A,L,k,mt,V),n.renderBufferDirect(L,null,k,mt,R,V),R.onAfterShadow(n,R,A,L,k,mt,V)}}}else if(X.visible){const K=M(R,X,b,y);R.onBeforeShadow(n,R,A,L,k,K,null),n.renderBufferDirect(L,null,k,K,R,null),R.onAfterShadow(n,R,A,L,k,K,null)}}const H=R.children;for(let k=0,X=H.length;k<X;k++)v(H[k],A,L,b,y)}function U(R){R.target.removeEventListener("dispose",U);for(const L in l){const b=l[L],y=R.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const h3={[Kl]:Zl,[$l]:th,[Jl]:eh,[_r]:Ql,[Zl]:Kl,[th]:$l,[eh]:Jl,[Ql]:_r};function u3(n,t){function e(){let I=!1;const ut=new pe;let G=null;const Z=new pe(0,0,0,0);return{setMask:function(pt){G!==pt&&!I&&(n.colorMask(pt,pt,pt,pt),G=pt)},setLocked:function(pt){I=pt},setClear:function(pt,ft,Ht,Pe,$e){$e===!0&&(pt*=Pe,ft*=Pe,Ht*=Pe),ut.set(pt,ft,Ht,Pe),Z.equals(ut)===!1&&(n.clearColor(pt,ft,Ht,Pe),Z.copy(ut))},reset:function(){I=!1,G=null,Z.set(-1,0,0,0)}}}function i(){let I=!1,ut=!1,G=null,Z=null,pt=null;return{setReversed:function(ft){if(ut!==ft){const Ht=t.get("EXT_clip_control");ut?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const Pe=pt;pt=null,this.setClear(Pe)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?ot(n.DEPTH_TEST):Ut(n.DEPTH_TEST)},setMask:function(ft){G!==ft&&!I&&(n.depthMask(ft),G=ft)},setFunc:function(ft){if(ut&&(ft=h3[ft]),Z!==ft){switch(ft){case Kl:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case $l:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case Jl:n.depthFunc(n.EQUAL);break;case Ql:n.depthFunc(n.GEQUAL);break;case th:n.depthFunc(n.GREATER);break;case eh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=ft}},setLocked:function(ft){I=ft},setClear:function(ft){pt!==ft&&(ut&&(ft=1-ft),n.clearDepth(ft),pt=ft)},reset:function(){I=!1,G=null,Z=null,pt=null,ut=!1}}}function s(){let I=!1,ut=null,G=null,Z=null,pt=null,ft=null,Ht=null,Pe=null,$e=null;return{setTest:function(he){I||(he?ot(n.STENCIL_TEST):Ut(n.STENCIL_TEST))},setMask:function(he){ut!==he&&!I&&(n.stencilMask(he),ut=he)},setFunc:function(he,Hn,Si){(G!==he||Z!==Hn||pt!==Si)&&(n.stencilFunc(he,Hn,Si),G=he,Z=Hn,pt=Si)},setOp:function(he,Hn,Si){(ft!==he||Ht!==Hn||Pe!==Si)&&(n.stencilOp(he,Hn,Si),ft=he,Ht=Hn,Pe=Si)},setLocked:function(he){I=he},setClear:function(he){$e!==he&&(n.clearStencil(he),$e=he)},reset:function(){I=!1,ut=null,G=null,Z=null,pt=null,ft=null,Ht=null,Pe=null,$e=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,M=null,v=null,U=null,R=null,A=new zt(0,0,0),L=0,b=!1,y=null,P=null,H=null,k=null,X=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=Q>=2);let ct=null,mt={};const St=n.getParameter(n.SCISSOR_BOX),Gt=n.getParameter(n.VIEWPORT),oe=new pe().fromArray(St),j=new pe().fromArray(Gt);function st(I,ut,G,Z){const pt=new Uint8Array(4),ft=n.createTexture();n.bindTexture(I,ft),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ht=0;Ht<G;Ht++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ut+Ht,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ft}const bt={};bt[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(_r),et(!1),xt(Ff),ot(n.CULL_FACE),C(Di);function ot(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Ut(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function kt(I,ut){return u[I]!==ut?(n.bindFramebuffer(I,ut),u[I]=ut,I===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),I===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ot(I,ut){let G=p,Z=!1;if(I){G=f.get(ut),G===void 0&&(G=[],f.set(ut,G));const pt=I.textures;if(G.length!==pt.length||G[0]!==n.COLOR_ATTACHMENT0){for(let ft=0,Ht=pt.length;ft<Ht;ft++)G[ft]=n.COLOR_ATTACHMENT0+ft;G.length=pt.length,Z=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Z=!0);Z&&n.drawBuffers(G)}function te(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const $={[bs]:n.FUNC_ADD,[y1]:n.FUNC_SUBTRACT,[M1]:n.FUNC_REVERSE_SUBTRACT};$[S1]=n.MIN,$[E1]=n.MAX;const it={[b1]:n.ZERO,[T1]:n.ONE,[w1]:n.SRC_COLOR,[Yl]:n.SRC_ALPHA,[I1]:n.SRC_ALPHA_SATURATE,[P1]:n.DST_COLOR,[C1]:n.DST_ALPHA,[A1]:n.ONE_MINUS_SRC_COLOR,[jl]:n.ONE_MINUS_SRC_ALPHA,[L1]:n.ONE_MINUS_DST_COLOR,[R1]:n.ONE_MINUS_DST_ALPHA,[D1]:n.CONSTANT_COLOR,[U1]:n.ONE_MINUS_CONSTANT_COLOR,[N1]:n.CONSTANT_ALPHA,[F1]:n.ONE_MINUS_CONSTANT_ALPHA};function C(I,ut,G,Z,pt,ft,Ht,Pe,$e,he){if(I===Di){_===!0&&(Ut(n.BLEND),_=!1);return}if(_===!1&&(ot(n.BLEND),_=!0),I!==x1){if(I!==m||he!==b){if((d!==bs||v!==bs)&&(n.blendEquation(n.FUNC_ADD),d=bs,v=bs),he)switch(I){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.ONE,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case is:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Of:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,M=null,U=null,R=null,A.set(0,0,0),L=0,m=I,b=he}return}pt=pt||ut,ft=ft||G,Ht=Ht||Z,(ut!==d||pt!==v)&&(n.blendEquationSeparate($[ut],$[pt]),d=ut,v=pt),(G!==E||Z!==M||ft!==U||Ht!==R)&&(n.blendFuncSeparate(it[G],it[Z],it[ft],it[Ht]),E=G,M=Z,U=ft,R=Ht),(Pe.equals(A)===!1||$e!==L)&&(n.blendColor(Pe.r,Pe.g,Pe.b,$e),A.copy(Pe),L=$e),m=I,b=!1}function Pt(I,ut){I.side===Fn?Ut(n.CULL_FACE):ot(n.CULL_FACE);let G=I.side===pn;ut&&(G=!G),et(G),I.blending===fr&&I.transparent===!1?C(Di):C(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):Ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){y!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),y=I)}function xt(I){I!==g1?(ot(n.CULL_FACE),I!==P&&(I===Ff?n.cullFace(n.BACK):I===_1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ut(n.CULL_FACE),P=I}function at(I){I!==H&&(W&&n.lineWidth(I),H=I)}function Nt(I,ut,G){I?(ot(n.POLYGON_OFFSET_FILL),(k!==ut||X!==G)&&(n.polygonOffset(ut,G),k=ut,X=G)):Ut(n.POLYGON_OFFSET_FILL)}function gt(I){I?ot(n.SCISSOR_TEST):Ut(n.SCISSOR_TEST)}function T(I){I===void 0&&(I=n.TEXTURE0+K-1),ct!==I&&(n.activeTexture(I),ct=I)}function x(I,ut,G){G===void 0&&(ct===null?G=n.TEXTURE0+K-1:G=ct);let Z=mt[G];Z===void 0&&(Z={type:void 0,texture:void 0},mt[G]=Z),(Z.type!==I||Z.texture!==ut)&&(ct!==G&&(n.activeTexture(G),ct=G),n.bindTexture(I,ut||bt[I]),Z.type=I,Z.texture=ut)}function F(){const I=mt[ct];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){oe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function Mt(I){j.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Jt(I,ut){let G=l.get(ut);G===void 0&&(G=new WeakMap,l.set(ut,G));let Z=G.get(I);Z===void 0&&(Z=n.getUniformBlockIndex(ut,I.name),G.set(I,Z))}function qt(I,ut){const Z=l.get(ut).get(I);c.get(ut)!==Z&&(n.uniformBlockBinding(ut,Z,I.__bindingPointIndex),c.set(ut,Z))}function _e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ct=null,mt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,M=null,v=null,U=null,R=null,A=new zt(0,0,0),L=0,b=!1,y=null,P=null,H=null,k=null,X=null,oe.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:Ut,bindFramebuffer:kt,drawBuffers:Ot,useProgram:te,setBlending:C,setMaterial:Pt,setFlipSided:et,setCullFace:xt,setLineWidth:at,setPolygonOffset:Nt,setScissorTest:gt,activeTexture:T,bindTexture:x,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:tt,texImage2D:yt,texImage3D:Ft,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:jt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Bt,viewport:Mt,reset:_e}}function Id(n,t,e,i){const s=f3(i);switch(e){case Sm:return n*t;case bm:return n*t;case Tm:return n*t*2;case hu:return n*t/s.components*s.byteLength;case uu:return n*t/s.components*s.byteLength;case wm:return n*t*2/s.components*s.byteLength;case fu:return n*t*2/s.components*s.byteLength;case Em:return n*t*3/s.components*s.byteLength;case Kn:return n*t*4/s.components*s.byteLength;case du:return n*t*4/s.components*s.byteLength;case Fa:case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ba:case za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ah:case lh:return Math.max(n,16)*Math.max(t,8)/4;case oh:case ch:return Math.max(n,8)*Math.max(t,8)/2;case hh:case uh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case fh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ph:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case gh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case xh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case yh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case bh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Th:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ka:case Ah:case Ch:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Am:case Rh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ph:case Lh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function f3(n){switch(n){case zi:case xm:return{byteLength:1,components:1};case bo:case ym:case Ui:return{byteLength:2,components:1};case cu:case lu:return{byteLength:2,components:4};case Ds:case au:case ui:return{byteLength:4,components:1};case Mm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function d3(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new J,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return p?new OffscreenCanvas(T,x):$a("canvas")}function _(T,x,F){let q=1;const tt=gt(T);if((tt.width>F||tt.height>F)&&(q=F/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*tt.width),Tt=Math.floor(q*tt.height);u===void 0&&(u=g(Y,Tt));const ht=x?g(Y,Tt):u;return ht.width=Y,ht.height=Tt,ht.getContext("2d").drawImage(T,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+Tt+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function m(T){return T.generateMipmaps}function d(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,x,F,q,tt=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=x;if(x===n.RED&&(F===n.FLOAT&&(Y=n.R32F),F===n.HALF_FLOAT&&(Y=n.R16F),F===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.R8UI),F===n.UNSIGNED_SHORT&&(Y=n.R16UI),F===n.UNSIGNED_INT&&(Y=n.R32UI),F===n.BYTE&&(Y=n.R8I),F===n.SHORT&&(Y=n.R16I),F===n.INT&&(Y=n.R32I)),x===n.RG&&(F===n.FLOAT&&(Y=n.RG32F),F===n.HALF_FLOAT&&(Y=n.RG16F),F===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RG8UI),F===n.UNSIGNED_SHORT&&(Y=n.RG16UI),F===n.UNSIGNED_INT&&(Y=n.RG32UI),F===n.BYTE&&(Y=n.RG8I),F===n.SHORT&&(Y=n.RG16I),F===n.INT&&(Y=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),F===n.UNSIGNED_INT&&(Y=n.RGB32UI),F===n.BYTE&&(Y=n.RGB8I),F===n.SHORT&&(Y=n.RGB16I),F===n.INT&&(Y=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),F===n.UNSIGNED_INT&&(Y=n.RGBA32UI),F===n.BYTE&&(Y=n.RGBA8I),F===n.SHORT&&(Y=n.RGBA16I),F===n.INT&&(Y=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),x===n.RGBA){const Tt=tt?mc:Qt.getTransfer(q);F===n.FLOAT&&(Y=n.RGBA32F),F===n.HALF_FLOAT&&(Y=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Y=Tt===ue?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(T,x){let F;return T?x===null||x===Ds||x===yr?F=n.DEPTH24_STENCIL8:x===ui?F=n.DEPTH32F_STENCIL8:x===bo&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ds||x===yr?F=n.DEPTH_COMPONENT24:x===ui?F=n.DEPTH_COMPONENT32F:x===bo&&(F=n.DEPTH_COMPONENT16),F}function U(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==hi?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){const x=T.target;x.removeEventListener("dispose",R),L(x),x.isVideoTexture&&h.delete(x)}function A(T){const x=T.target;x.removeEventListener("dispose",A),y(x)}function L(T){const x=i.get(T);if(x.__webglInit===void 0)return;const F=T.source,q=f.get(F);if(q){const tt=q[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(T),Object.keys(q).length===0&&f.delete(F)}i.remove(T)}function b(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const F=T.source,q=f.get(F);delete q[x.__cacheKey],o.memory.textures--}function y(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let tt=0;tt<x.__webglFramebuffer[q].length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[q][tt]);else n.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)n.deleteFramebuffer(x.__webglFramebuffer[q]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=T.textures;for(let q=0,tt=F.length;q<tt;q++){const Y=i.get(F[q]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(T)}let P=0;function H(){P=0}function k(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function X(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function K(T,x){const F=i.get(T);if(T.isVideoTexture&&at(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,T,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function W(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){j(F,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Q(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){j(F,T,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function V(T,x){const F=i.get(T);if(T.version>0&&F.__version!==T.version){st(F,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const ct={[sh]:n.REPEAT,[ws]:n.CLAMP_TO_EDGE,[rh]:n.MIRRORED_REPEAT},mt={[bn]:n.NEAREST,[k1]:n.NEAREST_MIPMAP_NEAREST,[Zo]:n.NEAREST_MIPMAP_LINEAR,[hi]:n.LINEAR,[Kc]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},St={[W1]:n.NEVER,[Z1]:n.ALWAYS,[X1]:n.LESS,[Rm]:n.LEQUAL,[q1]:n.EQUAL,[K1]:n.GEQUAL,[Y1]:n.GREATER,[j1]:n.NOTEQUAL};function Gt(T,x){if(x.type===ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===hi||x.magFilter===Kc||x.magFilter===Zo||x.magFilter===As||x.minFilter===hi||x.minFilter===Kc||x.minFilter===Zo||x.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ct[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ct[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ct[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,St[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==Zo&&x.minFilter!==As||x.type===ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function oe(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let tt=f.get(q);tt===void 0&&(tt={},f.set(q,tt));const Y=X(x);if(Y!==T.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),tt[Y].usedTimes++;const Tt=tt[T.__cacheKey];Tt!==void 0&&(tt[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(x)),T.__cacheKey=Y,T.__webglTexture=tt[Y].texture}return F}function j(T,x,F){let q=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=n.TEXTURE_3D);const tt=oe(T,x),Y=x.source;e.bindTexture(q,T.__webglTexture,n.TEXTURE0+F);const Tt=i.get(Y);if(Y.version!==Tt.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);const ht=Qt.getPrimaries(Qt.workingColorSpace),_t=x.colorSpace===Ji?null:Qt.getPrimaries(x.colorSpace),jt=x.colorSpace===Ji||ht===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=_(x.image,!1,s.maxTextureSize);nt=Nt(x,nt);const yt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type);let Bt=M(x.internalFormat,yt,Ft,x.colorSpace,x.isVideoTexture);Gt(q,x);let Mt;const Jt=x.mipmaps,qt=x.isVideoTexture!==!0,_e=Tt.__version===void 0||tt===!0,I=Y.dataReady,ut=U(x,nt);if(x.isDepthTexture)Bt=v(x.format===Mr,x.type),_e&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Bt,nt.width,nt.height):e.texImage2D(n.TEXTURE_2D,0,Bt,nt.width,nt.height,0,yt,Ft,null));else if(x.isDataTexture)if(Jt.length>0){qt&&_e&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,Jt[0].width,Jt[0].height);for(let G=0,Z=Jt.length;G<Z;G++)Mt=Jt[G],qt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,G,Bt,Mt.width,Mt.height,0,yt,Ft,Mt.data);x.generateMipmaps=!1}else qt?(_e&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,nt.width,nt.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,nt.width,nt.height,yt,Ft,nt.data)):e.texImage2D(n.TEXTURE_2D,0,Bt,nt.width,nt.height,0,yt,Ft,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Bt,Jt[0].width,Jt[0].height,nt.depth);for(let G=0,Z=Jt.length;G<Z;G++)if(Mt=Jt[G],x.format!==Kn)if(yt!==null)if(qt){if(I)if(x.layerUpdates.size>0){const pt=Id(Mt.width,Mt.height,x.format,x.type);for(const ft of x.layerUpdates){const Ht=Mt.data.subarray(ft*pt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,ft,Mt.width,Mt.height,1,yt,Ht)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,nt.depth,yt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,Bt,Mt.width,Mt.height,nt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,Mt.width,Mt.height,nt.depth,yt,Ft,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,Bt,Mt.width,Mt.height,nt.depth,0,yt,Ft,Mt.data)}else{qt&&_e&&e.texStorage2D(n.TEXTURE_2D,ut,Bt,Jt[0].width,Jt[0].height);for(let G=0,Z=Jt.length;G<Z;G++)Mt=Jt[G],x.format!==Kn?yt!==null?qt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,G,Bt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,Mt.width,Mt.height,yt,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,G,Bt,Mt.width,Mt.height,0,yt,Ft,Mt.data)}else if(x.isDataArrayTexture)if(qt){if(_e&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Bt,nt.width,nt.height,nt.depth),I)if(x.layerUpdates.size>0){const G=Id(nt.width,nt.height,x.format,x.type);for(const Z of x.layerUpdates){const pt=nt.data.subarray(Z*G/nt.data.BYTES_PER_ELEMENT,(Z+1)*G/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,nt.width,nt.height,1,yt,Ft,pt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Bt,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(x.isData3DTexture)qt?(_e&&e.texStorage3D(n.TEXTURE_3D,ut,Bt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,yt,Ft,nt.data)):e.texImage3D(n.TEXTURE_3D,0,Bt,nt.width,nt.height,nt.depth,0,yt,Ft,nt.data);else if(x.isFramebufferTexture){if(_e)if(qt)e.texStorage2D(n.TEXTURE_2D,ut,Bt,nt.width,nt.height);else{let G=nt.width,Z=nt.height;for(let pt=0;pt<ut;pt++)e.texImage2D(n.TEXTURE_2D,pt,Bt,G,Z,0,yt,Ft,null),G>>=1,Z>>=1}}else if(Jt.length>0){if(qt&&_e){const G=gt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,ut,Bt,G.width,G.height)}for(let G=0,Z=Jt.length;G<Z;G++)Mt=Jt[G],qt?I&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,yt,Ft,Mt):e.texImage2D(n.TEXTURE_2D,G,Bt,yt,Ft,Mt);x.generateMipmaps=!1}else if(qt){if(_e){const G=gt(nt);e.texStorage2D(n.TEXTURE_2D,ut,Bt,G.width,G.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt,Ft,nt)}else e.texImage2D(n.TEXTURE_2D,0,Bt,yt,Ft,nt);m(x)&&d(q),Tt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,F){if(x.image.length!==6)return;const q=oe(T,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);const Y=i.get(tt);if(tt.version!==Y.__version||q===!0){e.activeTexture(n.TEXTURE0+F);const Tt=Qt.getPrimaries(Qt.workingColorSpace),ht=x.colorSpace===Ji?null:Qt.getPrimaries(x.colorSpace),_t=x.colorSpace===Ji||Tt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const jt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let Z=0;Z<6;Z++)!jt&&!nt?yt[Z]=_(x.image[Z],!0,s.maxCubemapSize):yt[Z]=nt?x.image[Z].image:x.image[Z],yt[Z]=Nt(x,yt[Z]);const Ft=yt[0],Bt=r.convert(x.format,x.colorSpace),Mt=r.convert(x.type),Jt=M(x.internalFormat,Bt,Mt,x.colorSpace),qt=x.isVideoTexture!==!0,_e=Y.__version===void 0||q===!0,I=tt.dataReady;let ut=U(x,Ft);Gt(n.TEXTURE_CUBE_MAP,x);let G;if(jt){qt&&_e&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Jt,Ft.width,Ft.height);for(let Z=0;Z<6;Z++){G=yt[Z].mipmaps;for(let pt=0;pt<G.length;pt++){const ft=G[pt];x.format!==Kn?Bt!==null?qt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Bt,ft.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,ft.width,ft.height,Bt,Mt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Jt,ft.width,ft.height,0,Bt,Mt,ft.data)}}}else{if(G=x.mipmaps,qt&&_e){G.length>0&&ut++;const Z=gt(yt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Jt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(nt){qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,yt[Z].width,yt[Z].height,Bt,Mt,yt[Z].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Jt,yt[Z].width,yt[Z].height,0,Bt,Mt,yt[Z].data);for(let pt=0;pt<G.length;pt++){const Ht=G[pt].image[Z].image;qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Ht.width,Ht.height,Bt,Mt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Jt,Ht.width,Ht.height,0,Bt,Mt,Ht.data)}}else{qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Bt,Mt,yt[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Jt,Bt,Mt,yt[Z]);for(let pt=0;pt<G.length;pt++){const ft=G[pt];qt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Bt,Mt,ft.image[Z]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Jt,Bt,Mt,ft.image[Z])}}}m(x)&&d(n.TEXTURE_CUBE_MAP),Y.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function bt(T,x,F,q,tt,Y){const Tt=r.convert(F.format,F.colorSpace),ht=r.convert(F.type),_t=M(F.internalFormat,Tt,ht,F.colorSpace),jt=i.get(x),nt=i.get(F);if(nt.__renderTarget=x,!jt.__hasExternalTextures){const yt=Math.max(1,x.width>>Y),Ft=Math.max(1,x.height>>Y);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,_t,yt,Ft,x.depth,0,Tt,ht,null):e.texImage2D(tt,Y,_t,yt,Ft,0,Tt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,tt,nt.__webglTexture,0,et(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,tt,nt.__webglTexture,Y),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ot(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const q=x.depthTexture,tt=q&&q.isDepthTexture?q.type:null,Y=v(x.stencilBuffer,tt),Tt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=et(x);xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,Y,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,Y,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Y,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,T)}else{const q=x.textures;for(let tt=0;tt<q.length;tt++){const Y=q[tt],Tt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),_t=M(Y.internalFormat,Tt,ht,Y.colorSpace),jt=et(x);F&&xt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,jt,_t,x.width,x.height):xt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,jt,_t,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_t,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ut(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(x.depthTexture);q.__renderTarget=x,(!q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const tt=q.__webglTexture,Y=et(x);if(x.depthTexture.format===dr)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Mr)xt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,Y):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function kt(T){const x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=q}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(x.__webglFramebuffer,T)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=n.createRenderbuffer(),ot(x.__webglDepthbuffer[q],T,!1);else{const tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ot(x.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,tt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(T,x,F){const q=i.get(T);x!==void 0&&bt(q.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&kt(T)}function te(T){const x=T.texture,F=i.get(T),q=i.get(x);T.addEventListener("dispose",A);const tt=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=x.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[ht]=[];for(let _t=0;_t<x.mipmaps.length;_t++)F.__webglFramebuffer[ht][_t]=n.createFramebuffer()}else F.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)F.__webglFramebuffer[ht]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let ht=0,_t=tt.length;ht<_t;ht++){const jt=i.get(tt[ht]);jt.__webglTexture===void 0&&(jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&xt(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const _t=tt[ht];F.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);const jt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),yt=M(_t.internalFormat,jt,nt,_t.colorSpace,T.isXRRenderTarget===!0),Ft=et(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,yt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ot(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Gt(n.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)bt(F.__webglFramebuffer[ht][_t],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else bt(F.__webglFramebuffer[ht],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(x)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,_t=tt.length;ht<_t;ht++){const jt=tt[ht],nt=i.get(jt);e.bindTexture(n.TEXTURE_2D,nt.__webglTexture),Gt(n.TEXTURE_2D,jt),bt(F.__webglFramebuffer,T,jt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(jt)&&d(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),Gt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)bt(F.__webglFramebuffer[_t],T,x,n.COLOR_ATTACHMENT0,ht,_t);else bt(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ht,0);m(x)&&d(ht),e.unbindTexture()}T.depthBuffer&&kt(T)}function $(T){const x=T.textures;for(let F=0,q=x.length;F<q;F++){const tt=x[F];if(m(tt)){const Y=E(T),Tt=i.get(tt).__webglTexture;e.bindTexture(Y,Tt),d(Y),e.unbindTexture()}}}const it=[],C=[];function Pt(T){if(T.samples>0){if(xt(T)===!1){const x=T.textures,F=T.width,q=T.height;let tt=n.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(T),ht=x.length>1;if(ht)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=i.get(x[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,jt,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,tt,n.NEAREST),c===!0&&(it.length=0,C.length=0,it.push(n.COLOR_ATTACHMENT0+_t),T.depthBuffer&&T.resolveDepthBuffer===!1&&(it.push(Y),C.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const jt=i.get(x[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function xt(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function at(T){const x=o.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Nt(T,x){const F=T.colorSpace,q=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Dr&&F!==Ji&&(Qt.getTransfer(F)===ue?(q!==Kn||tt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function gt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=te,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=xt}function p3(n,t){function e(i,s=Ji){let r;const o=Qt.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===cu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xm)return n.BYTE;if(i===ym)return n.SHORT;if(i===bo)return n.UNSIGNED_SHORT;if(i===au)return n.INT;if(i===Ds)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===Sm)return n.ALPHA;if(i===Em)return n.RGB;if(i===Kn)return n.RGBA;if(i===bm)return n.LUMINANCE;if(i===Tm)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===hu)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===wm)return n.RG;if(i===fu)return n.RG_INTEGER;if(i===du)return n.RGBA_INTEGER;if(i===Fa||i===Oa||i===Ba||i===za)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===ah||i===ch||i===lh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hh||i===uh||i===fh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hh||i===uh)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dh||i===ph||i===mh||i===gh||i===_h||i===vh||i===xh||i===yh||i===Mh||i===Sh||i===Eh||i===bh||i===Th||i===wh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===dh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ph)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ka||i===Ah||i===Ch)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ka)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ah)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Am||i===Rh||i===Ph||i===Lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ph)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===yr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class m3 extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class lr extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g3={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g3)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new lr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,v3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class x3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ln({vertexShader:_3,fragmentShader:v3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y3 extends Ur{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new x3,m=e.getContextAttributes();let d=null,E=null;const M=[],v=[],U=new J;let R=null;const A=new nn;A.viewport=new pe;const L=new nn;L.viewport=new pe;const b=[A,L],y=new m3;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=M[j];return st===void 0&&(st=new Sl,M[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=M[j];return st===void 0&&(st=new Sl,M[j]=st),st.getGripSpace()},this.getHand=function(j){let st=M[j];return st===void 0&&(st=new Sl,M[j]=st),st.getHandSpace()};function k(j){const st=v.indexOf(j.inputSource);if(st===-1)return;const bt=M[st];bt!==void 0&&(bt.update(j.inputSource,j.frame,l||o),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",K);for(let j=0;j<M.length;j++){const st=v[j];st!==null&&(v[j]=null,M[j].disconnect(st))}P=null,H=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,oe.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Kn,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,bt=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Mr:dr,bt=m.stencil?yr:Ds);const Ut={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Zn(f.textureWidth,f.textureHeight,{format:Kn,type:zi,depthTexture:new km(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),oe.setContext(s),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let st=0;st<j.removed.length;st++){const bt=j.removed[st],ot=v.indexOf(bt);ot>=0&&(v[ot]=null,M[ot].disconnect(bt))}for(let st=0;st<j.added.length;st++){const bt=j.added[st];let ot=v.indexOf(bt);if(ot===-1){for(let kt=0;kt<M.length;kt++)if(kt>=v.length){v.push(bt),ot=kt;break}else if(v[kt]===null){v[kt]=bt,ot=kt;break}if(ot===-1)break}const Ut=M[ot];Ut&&Ut.connect(bt)}}const W=new w,Q=new w;function V(j,st,bt){W.setFromMatrixPosition(st.matrixWorld),Q.setFromMatrixPosition(bt.matrixWorld);const ot=W.distanceTo(Q),Ut=st.projectionMatrix.elements,kt=bt.projectionMatrix.elements,Ot=Ut[14]/(Ut[10]-1),te=Ut[14]/(Ut[10]+1),$=(Ut[9]+1)/Ut[5],it=(Ut[9]-1)/Ut[5],C=(Ut[8]-1)/Ut[0],Pt=(kt[8]+1)/kt[0],et=Ot*C,xt=Ot*Pt,at=ot/(-C+Pt),Nt=at*-C;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Nt),j.translateZ(at),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const gt=Ot+at,T=te+at,x=et-Nt,F=xt+(ot-Nt),q=$*te/T*gt,tt=it*te/T*gt;j.projectionMatrix.makePerspective(x,F,q,tt,gt,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,bt=j.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),y.near=L.near=A.near=st,y.far=L.far=A.far=bt,(P!==y.near||H!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,H=y.far),A.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,y.layers.mask=A.layers.mask|L.layers.mask;const ot=j.parent,Ut=y.cameras;ct(y,ot);for(let kt=0;kt<Ut.length;kt++)ct(Ut[kt],ot);Ut.length===2?V(y,A,L):y.projectionMatrix.copy(A.projectionMatrix),mt(j,y,ot)};function mt(j,st,bt){bt===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=To*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let St=null;function Gt(j,st){if(h=st.getViewerPose(l||o),g=st,h!==null){const bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let ot=!1;bt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let kt=0;kt<bt.length;kt++){const Ot=bt[kt];let te=null;if(p!==null)te=p.getViewport(Ot);else{const it=u.getViewSubImage(f,Ot);te=it.viewport,kt===0&&(t.setRenderTargetTextures(E,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(E))}let $=b[kt];$===void 0&&($=new nn,$.layers.enable(kt),$.viewport=new pe,b[kt]=$),$.matrix.fromArray(Ot.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ot.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(te.x,te.y,te.width,te.height),kt===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push($)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const kt=u.getDepthInformation(bt[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,s.renderState)}}for(let bt=0;bt<M.length;bt++){const ot=v[bt],Ut=M[bt];ot!==null&&Ut!==void 0&&Ut.update(ot,st,l||o)}St&&St(j,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),g=null}const oe=new zm;oe.setAnimationLoop(Gt),this.setAnimationLoop=function(j){St=j},this.dispose=function(){}}}const vs=new $n,M3=new ie;function S3(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Fm(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,E,M):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===pn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===pn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),M=E.envMap,v=E.envMapRotation;M&&(m.envMap.value=M,vs.copy(v),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),m.envMapRotation.value.setFromMatrix4(M3.makeRotationFromEuler(vs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,E,M){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=M*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===pn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E3(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const v=M.program;i.uniformBlockBinding(E,v)}function l(E,M){let v=s[E.id];v===void 0&&(g(E),v=h(E),s[E.id]=v,E.addEventListener("dispose",m));const U=M.program;i.updateUBOMapping(E,U);const R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){const M=u();E.__bindingPointIndex=M;const v=n.createBuffer(),U=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,U,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const M=s[E.id],v=E.uniforms,U=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=v.length;R<A;R++){const L=Array.isArray(v[R])?v[R]:[v[R]];for(let b=0,y=L.length;b<y;b++){const P=L[b];if(p(P,R,b,U)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let K=0;K<k.length;K++){const W=k[K],Q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,H+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,M,v,U){const R=E.value,A=M+"_"+v;if(U[A]===void 0)return typeof R=="number"||typeof R=="boolean"?U[A]=R:U[A]=R.clone(),!0;{const L=U[A];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return U[A]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const M=E.uniforms;let v=0;const U=16;for(let A=0,L=M.length;A<L;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,P=b.length;y<P;y++){const H=b[y],k=Array.isArray(H.value)?H.value:[H.value];for(let X=0,K=k.length;X<K;X++){const W=k[X],Q=_(W),V=v%U,ct=V%Q.boundary,mt=V+ct;v+=ct,mt!==0&&U-mt<Q.storage&&(v+=U-mt),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=Q.storage}}}const R=v%U;return R>0&&(v+=U-R),E.__size=v,E.__cache={},this}function _(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function m(E){const M=E.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class b3{constructor(t={}){const{canvas:e=d_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=ts,this.toneMappingExposure=1;const v=this;let U=!1,R=0,A=0,L=null,b=-1,y=null;const P=new pe,H=new pe;let k=null;const X=new zt(0);let K=0,W=e.width,Q=e.height,V=1,ct=null,mt=null;const St=new pe(0,0,W,Q),Gt=new pe(0,0,W,Q);let oe=!1;const j=new gu;let st=!1,bt=!1;const ot=new ie,Ut=new ie,kt=new w,Ot=new pe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function it(){return L===null?V:1}let C=i;function Pt(S,D){return e.getContext(S,D)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ou}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),C===null){const D="webgl2";if(C=Pt(D,S),C===null)throw Pt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let et,xt,at,Nt,gt,T,x,F,q,tt,Y,Tt,ht,_t,jt,nt,yt,Ft,Bt,Mt,Jt,qt,_e,I;function ut(){et=new Rx(C),et.init(),qt=new p3(C,et),xt=new Ex(C,et,t,qt),at=new u3(C,et),xt.reverseDepthBuffer&&f&&at.buffers.depth.setReversed(!0),Nt=new Ix(C),gt=new Zy,T=new d3(C,et,at,gt,xt,qt,Nt),x=new Tx(v),F=new Cx(v),q=new z_(C),_e=new Mx(C,q),tt=new Px(C,q,Nt,_e),Y=new Ux(C,tt,q,Nt),Bt=new Dx(C,xt,T),nt=new bx(gt),Tt=new Ky(v,x,F,et,xt,_e,nt),ht=new S3(v,gt),_t=new Jy,jt=new s3(et),Ft=new yx(v,x,F,at,Y,p,c),yt=new l3(v,Y,xt),I=new E3(C,Nt,xt,at),Mt=new Sx(C,et,Nt),Jt=new Lx(C,et,Nt),Nt.programs=Tt.programs,v.capabilities=xt,v.extensions=et,v.properties=gt,v.renderLists=_t,v.shadowMap=yt,v.state=at,v.info=Nt}ut();const G=new y3(v,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=et.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=et.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(W,Q,!1))},this.getSize=function(S){return S.set(W,Q)},this.setSize=function(S,D,B=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,Q=D,e.width=Math.floor(S*V),e.height=Math.floor(D*V),B===!0&&(e.style.width=S+"px",e.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(W*V,Q*V).floor()},this.setDrawingBufferSize=function(S,D,B){W=S,Q=D,V=B,e.width=Math.floor(S*B),e.height=Math.floor(D*B),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,D,B,z){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,D,B,z),at.viewport(P.copy(St).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(Gt)},this.setScissor=function(S,D,B,z){S.isVector4?Gt.set(S.x,S.y,S.z,S.w):Gt.set(S,D,B,z),at.scissor(H.copy(Gt).multiplyScalar(V).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){at.setScissorTest(oe=S)},this.setOpaqueSort=function(S){ct=S},this.setTransparentSort=function(S){mt=S},this.getClearColor=function(S){return S.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(S=!0,D=!0,B=!0){let z=0;if(S){let N=!1;if(L!==null){const rt=L.texture.format;N=rt===du||rt===fu||rt===uu}if(N){const rt=L.texture.type,dt=rt===zi||rt===Ds||rt===bo||rt===yr||rt===cu||rt===lu,At=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Vt=At.r,Wt=At.g,Rt=At.b;dt?(g[0]=Vt,g[1]=Wt,g[2]=Rt,g[3]=Ct,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Vt,_[1]=Wt,_[2]=Rt,_[3]=Ct,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}D&&(z|=C.DEPTH_BUFFER_BIT),B&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),jt.dispose(),gt.dispose(),x.dispose(),F.dispose(),Y.dispose(),_e.dispose(),I.dispose(),Tt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Cf),G.removeEventListener("sessionend",Rf),fs.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const S=Nt.autoReset,D=yt.enabled,B=yt.autoUpdate,z=yt.needsUpdate,N=yt.type;ut(),Nt.autoReset=S,yt.enabled=D,yt.autoUpdate=B,yt.needsUpdate=z,yt.type=N}function ft(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ht(S){const D=S.target;D.removeEventListener("dispose",Ht),Pe(D)}function Pe(S){$e(S),gt.remove(S)}function $e(S){const D=gt.get(S).programs;D!==void 0&&(D.forEach(function(B){Tt.releaseProgram(B)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,B,z,N,rt){D===null&&(D=te);const dt=N.isMesh&&N.matrixWorld.determinant()<0,At=u1(S,D,B,z,N);at.setMaterial(z,dt);let Ct=B.index,Vt=1;if(z.wireframe===!0){if(Ct=tt.getWireframeAttribute(B),Ct===void 0)return;Vt=2}const Wt=B.drawRange,Rt=B.attributes.position;let se=Wt.start*Vt,ve=(Wt.start+Wt.count)*Vt;rt!==null&&(se=Math.max(se,rt.start*Vt),ve=Math.min(ve,(rt.start+rt.count)*Vt)),Ct!==null?(se=Math.max(se,0),ve=Math.min(ve,Ct.count)):Rt!=null&&(se=Math.max(se,0),ve=Math.min(ve,Rt.count));const Me=ve-se;if(Me<0||Me===1/0)return;_e.setup(N,z,At,B,Ct);let un,ae=Mt;if(Ct!==null&&(un=q.get(Ct),ae=Jt,ae.setIndex(un)),N.isMesh)z.wireframe===!0?(at.setLineWidth(z.wireframeLinewidth*it()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(N.isLine){let It=z.linewidth;It===void 0&&(It=1),at.setLineWidth(It*it()),N.isLineSegments?ae.setMode(C.LINES):N.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else N.isPoints?ae.setMode(C.POINTS):N.isSprite&&ae.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ae.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ae.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const It=N._multiDrawStarts,Ei=N._multiDrawCounts,ce=N._multiDrawCount,Wn=Ct?q.get(Ct).bytesPerElement:1,Vs=gt.get(z).currentProgram.getUniforms();for(let vn=0;vn<ce;vn++)Vs.setValue(C,"_gl_DrawID",vn),ae.render(It[vn]/Wn,Ei[vn])}else if(N.isInstancedMesh)ae.renderInstances(se,Me,N.count);else if(B.isInstancedBufferGeometry){const It=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ei=Math.min(B.instanceCount,It);ae.renderInstances(se,Me,Ei)}else ae.render(se,Me)};function he(S,D,B){S.transparent===!0&&S.side===Fn&&S.forceSinglePass===!1?(S.side=pn,S.needsUpdate=!0,Ko(S,D,B),S.side=ns,S.needsUpdate=!0,Ko(S,D,B),S.side=Fn):Ko(S,D,B)}this.compile=function(S,D,B=null){B===null&&(B=S),d=jt.get(B),d.init(D),M.push(d),B.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==B&&S.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const At=rt[dt];he(At,B,N),z.add(At)}else he(rt,B,N),z.add(rt)}),M.pop(),d=null,z},this.compileAsync=function(S,D,B=null){const z=this.compile(S,D,B);return new Promise(N=>{function rt(){if(z.forEach(function(dt){gt.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){N(S);return}setTimeout(rt,10)}et.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Hn=null;function Si(S){Hn&&Hn(S)}function Cf(){fs.stop()}function Rf(){fs.start()}const fs=new zm;fs.setAnimationLoop(Si),typeof self<"u"&&fs.setContext(self),this.setAnimationLoop=function(S){Hn=S,G.setAnimationLoop(S),S===null?fs.stop():fs.start()},G.addEventListener("sessionstart",Cf),G.addEventListener("sessionend",Rf),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,D,L),d=jt.get(S,M.length),d.init(D),M.push(d),Ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),j.setFromProjectionMatrix(Ut),bt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,bt),m=_t.get(S,E.length),m.init(),E.push(m),G.enabled===!0&&G.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&jc(rt,D,-1/0,v.sortObjects)}jc(S,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ct,mt),$=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,$&&Ft.addToRenderList(m,S),this.info.render.frame++,st===!0&&nt.beginShadows();const B=d.state.shadowsArray;yt.render(B,S,D),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){const rt=D.cameras;if(N.length>0)for(let dt=0,At=rt.length;dt<At;dt++){const Ct=rt[dt];Lf(z,N,S,Ct)}$&&Ft.render(S);for(let dt=0,At=rt.length;dt<At;dt++){const Ct=rt[dt];Pf(m,S,Ct,Ct.viewport)}}else N.length>0&&Lf(z,N,S,D),$&&Ft.render(S),Pf(m,S,D);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),S.isScene===!0&&S.onAfterRender(v,S,D),_e.resetDefaultState(),b=-1,y=null,M.pop(),M.length>0?(d=M[M.length-1],st===!0&&nt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function jc(S,D,B,z){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){z&&Ot.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ut);const dt=Y.update(S),At=S.material;At.visible&&m.push(S,dt,At,B,Ot.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const dt=Y.update(S),At=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ot.copy(S.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ot.copy(dt.boundingSphere.center)),Ot.applyMatrix4(S.matrixWorld).applyMatrix4(Ut)),Array.isArray(At)){const Ct=dt.groups;for(let Vt=0,Wt=Ct.length;Vt<Wt;Vt++){const Rt=Ct[Vt],se=At[Rt.materialIndex];se&&se.visible&&m.push(S,dt,se,B,Ot.z,Rt)}}else At.visible&&m.push(S,dt,At,B,Ot.z,null)}}const rt=S.children;for(let dt=0,At=rt.length;dt<At;dt++)jc(rt[dt],D,B,z)}function Pf(S,D,B,z){const N=S.opaque,rt=S.transmissive,dt=S.transparent;d.setupLightsView(B),st===!0&&nt.setGlobalState(v.clippingPlanes,B),z&&at.viewport(P.copy(z)),N.length>0&&jo(N,D,B),rt.length>0&&jo(rt,D,B),dt.length>0&&jo(dt,D,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Lf(S,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new Zn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ui:zi,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[z.id],dt=z.viewport||P;rt.setSize(dt.z,dt.w);const At=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(X),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),$&&Ft.render(B);const Ct=v.toneMapping;v.toneMapping=ts;const Vt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),st===!0&&nt.setGlobalState(v.clippingPlanes,z),jo(S,B,z),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),et.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Rt=0,se=D.length;Rt<se;Rt++){const ve=D[Rt],Me=ve.object,un=ve.geometry,ae=ve.material,It=ve.group;if(ae.side===Fn&&Me.layers.test(z.layers)){const Ei=ae.side;ae.side=pn,ae.needsUpdate=!0,If(Me,B,z,un,ae,It),ae.side=Ei,ae.needsUpdate=!0,Wt=!0}}Wt===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}v.setRenderTarget(At),v.setClearColor(X,K),Vt!==void 0&&(z.viewport=Vt),v.toneMapping=Ct}function jo(S,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,rt=S.length;N<rt;N++){const dt=S[N],At=dt.object,Ct=dt.geometry,Vt=z===null?dt.material:z,Wt=dt.group;At.layers.test(B.layers)&&If(At,D,B,Ct,Vt,Wt)}}function If(S,D,B,z,N,rt){S.onBeforeRender(v,D,B,z,N,rt),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,D,B,z,S,rt),N.transparent===!0&&N.side===Fn&&N.forceSinglePass===!1?(N.side=pn,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,S,rt),N.side=ns,N.needsUpdate=!0,v.renderBufferDirect(B,D,z,N,S,rt),N.side=Fn):v.renderBufferDirect(B,D,z,N,S,rt),S.onAfterRender(v,D,B,z,N,rt)}function Ko(S,D,B){D.isScene!==!0&&(D=te);const z=gt.get(S),N=d.state.lights,rt=d.state.shadowsArray,dt=N.state.version,At=Tt.getParameters(S,N.state,rt,D,B),Ct=Tt.getProgramCacheKey(At);let Vt=z.programs;z.environment=S.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(S.isMeshStandardMaterial?F:x).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Vt===void 0&&(S.addEventListener("dispose",Ht),Vt=new Map,z.programs=Vt);let Wt=Vt.get(Ct);if(Wt!==void 0){if(z.currentProgram===Wt&&z.lightsStateVersion===dt)return Uf(S,At),Wt}else At.uniforms=Tt.getUniforms(S),S.onBeforeCompile(At,v),Wt=Tt.acquireProgram(At,Ct),Vt.set(Ct,Wt),z.uniforms=At.uniforms;const Rt=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=nt.uniform),Uf(S,At),z.needsLights=d1(S),z.lightsStateVersion=dt,z.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Wt,z.uniformsList=null,Wt}function Df(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Va.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Uf(S,D){const B=gt.get(S);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function u1(S,D,B,z,N){D.isScene!==!0&&(D=te),T.resetTextureUnits();const rt=D.fog,dt=z.isMeshStandardMaterial?D.environment:null,At=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Dr,Ct=(z.isMeshStandardMaterial?F:x).get(z.envMap||dt),Vt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Wt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Rt=!!B.morphAttributes.position,se=!!B.morphAttributes.normal,ve=!!B.morphAttributes.color;let Me=ts;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Me=v.toneMapping);const un=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=un!==void 0?un.length:0,It=gt.get(z),Ei=d.state.lights;if(st===!0&&(bt===!0||S!==y)){const Rn=S===y&&z.id===b;nt.setState(z,S,Rn)}let ce=!1;z.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Ei.state.version||It.outputColorSpace!==At||N.isBatchedMesh&&It.batching===!1||!N.isBatchedMesh&&It.batching===!0||N.isBatchedMesh&&It.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&It.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&It.instancing===!1||!N.isInstancedMesh&&It.instancing===!0||N.isSkinnedMesh&&It.skinning===!1||!N.isSkinnedMesh&&It.skinning===!0||N.isInstancedMesh&&It.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&It.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&It.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&It.instancingMorph===!1&&N.morphTexture!==null||It.envMap!==Ct||z.fog===!0&&It.fog!==rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==nt.numPlanes||It.numIntersection!==nt.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==Wt||It.morphTargets!==Rt||It.morphNormals!==se||It.morphColors!==ve||It.toneMapping!==Me||It.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,It.__version=z.version);let Wn=It.currentProgram;ce===!0&&(Wn=Ko(z,D,N));let Vs=!1,vn=!1,Xr=!1;const Se=Wn.getUniforms(),ni=It.uniforms;if(at.useProgram(Wn.program)&&(Vs=!0,vn=!0,Xr=!0),z.id!==b&&(b=z.id,vn=!0),Vs||y!==S){at.buffers.depth.getReversed()?(ot.copy(S.projectionMatrix),m_(ot),g_(ot),Se.setValue(C,"projectionMatrix",ot)):Se.setValue(C,"projectionMatrix",S.projectionMatrix),Se.setValue(C,"viewMatrix",S.matrixWorldInverse);const Gi=Se.map.cameraPosition;Gi!==void 0&&Gi.setValue(C,kt.setFromMatrixPosition(S.matrixWorld)),xt.logarithmicDepthBuffer&&Se.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Se.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,vn=!0,Xr=!0)}if(N.isSkinnedMesh){Se.setOptional(C,N,"bindMatrix"),Se.setOptional(C,N,"bindMatrixInverse");const Rn=N.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Se.setValue(C,"boneTexture",Rn.boneTexture,T))}N.isBatchedMesh&&(Se.setOptional(C,N,"batchingTexture"),Se.setValue(C,"batchingTexture",N._matricesTexture,T),Se.setOptional(C,N,"batchingIdTexture"),Se.setValue(C,"batchingIdTexture",N._indirectTexture,T),Se.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&Se.setValue(C,"batchingColorTexture",N._colorsTexture,T));const qr=B.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0)&&Bt.update(N,B,Wn),(vn||It.receiveShadow!==N.receiveShadow)&&(It.receiveShadow=N.receiveShadow,Se.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ni.envMap.value=Ct,ni.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(ni.envMapIntensity.value=D.environmentIntensity),vn&&(Se.setValue(C,"toneMappingExposure",v.toneMappingExposure),It.needsLights&&f1(ni,Xr),rt&&z.fog===!0&&ht.refreshFogUniforms(ni,rt),ht.refreshMaterialUniforms(ni,z,V,Q,d.state.transmissionRenderTarget[S.id]),Va.upload(C,Df(It),ni,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Va.upload(C,Df(It),ni,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Se.setValue(C,"center",N.center),Se.setValue(C,"modelViewMatrix",N.modelViewMatrix),Se.setValue(C,"normalMatrix",N.normalMatrix),Se.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Rn=z.uniformsGroups;for(let Gi=0,Hi=Rn.length;Gi<Hi;Gi++){const Nf=Rn[Gi];I.update(Nf,Wn),I.bind(Nf,Wn)}}return Wn}function f1(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function d1(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(S,D,B){gt.get(S.texture).__webglTexture=D,gt.get(S.depthTexture).__webglTexture=B;const z=gt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){const B=gt.get(S);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,B=0){L=S,R=D,A=B;let z=!0,N=null,rt=!1,dt=!1;if(S){const Ct=gt.get(S);if(Ct.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Ct.__hasExternalTextures)T.rebindTextures(S,gt.get(S.texture).__webglTexture,gt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Rt=S.depthTexture;if(Ct.__boundDepthTexture!==Rt){if(Rt!==null&&gt.has(Rt)&&(S.width!==Rt.image.width||S.height!==Rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Vt=S.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(dt=!0);const Wt=gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Wt[D])?N=Wt[D][B]:N=Wt[D],rt=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?N=gt.get(S).__webglMultisampledFramebuffer:Array.isArray(Wt)?N=Wt[B]:N=Wt,P.copy(S.viewport),H.copy(S.scissor),k=S.scissorTest}else P.copy(St).multiplyScalar(V).floor(),H.copy(Gt).multiplyScalar(V).floor(),k=oe;if(at.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&at.drawBuffers(S,N),at.viewport(P),at.scissor(H),at.setScissorTest(k),rt){const Ct=gt.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ct.__webglTexture,B)}else if(dt){const Ct=gt.get(S.texture),Vt=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,B||0,Vt)}b=-1},this.readRenderTargetPixels=function(S,D,B,z,N,rt,dt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(At=At[dt]),At){at.bindFramebuffer(C.FRAMEBUFFER,At);try{const Ct=S.texture,Vt=Ct.format,Wt=Ct.type;if(!xt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-z&&B>=0&&B<=S.height-N&&C.readPixels(D,B,z,N,qt.convert(Vt),qt.convert(Wt),rt)}finally{const Ct=L!==null?gt.get(L).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(S,D,B,z,N,rt,dt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&dt!==void 0&&(At=At[dt]),At){const Ct=S.texture,Vt=Ct.format,Wt=Ct.type;if(!xt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-z&&B>=0&&B<=S.height-N){at.bindFramebuffer(C.FRAMEBUFFER,At);const Rt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.bufferData(C.PIXEL_PACK_BUFFER,rt.byteLength,C.STREAM_READ),C.readPixels(D,B,z,N,qt.convert(Vt),qt.convert(Wt),0);const se=L!==null?gt.get(L).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,se);const ve=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await p_(C,ve,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Rt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,rt),C.deleteBuffer(Rt),C.deleteSync(ve),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,B=0){S.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(S.image.width*z),rt=Math.floor(S.image.height*z),dt=D!==null?D.x:0,At=D!==null?D.y:0;T.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,dt,At,N,rt),at.unbindTexture()},this.copyTextureToTexture=function(S,D,B=null,z=null,N=0){S.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],D=arguments[2],N=arguments[3]||0,B=null);let rt,dt,At,Ct,Vt,Wt,Rt,se,ve;const Me=S.isCompressedTexture?S.mipmaps[N]:S.image;B!==null?(rt=B.max.x-B.min.x,dt=B.max.y-B.min.y,At=B.isBox3?B.max.z-B.min.z:1,Ct=B.min.x,Vt=B.min.y,Wt=B.isBox3?B.min.z:0):(rt=Me.width,dt=Me.height,At=Me.depth||1,Ct=0,Vt=0,Wt=0),z!==null?(Rt=z.x,se=z.y,ve=z.z):(Rt=0,se=0,ve=0);const un=qt.convert(D.format),ae=qt.convert(D.type);let It;D.isData3DTexture?(T.setTexture3D(D,0),It=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(T.setTexture2DArray(D,0),It=C.TEXTURE_2D_ARRAY):(T.setTexture2D(D,0),It=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const Ei=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Wn=C.getParameter(C.UNPACK_SKIP_PIXELS),Vs=C.getParameter(C.UNPACK_SKIP_ROWS),vn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt);const Xr=S.isDataArrayTexture||S.isData3DTexture,Se=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const ni=gt.get(S),qr=gt.get(D),Rn=gt.get(ni.__renderTarget),Gi=gt.get(qr.__renderTarget);at.bindFramebuffer(C.READ_FRAMEBUFFER,Rn.__webglFramebuffer),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,Gi.__webglFramebuffer);for(let Hi=0;Hi<At;Hi++)Xr&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(S).__webglTexture,N,Wt+Hi),S.isDepthTexture?(Se&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(D).__webglTexture,N,ve+Hi),C.blitFramebuffer(Ct,Vt,rt,dt,Rt,se,rt,dt,C.DEPTH_BUFFER_BIT,C.NEAREST)):Se?C.copyTexSubImage3D(It,N,Rt,se,ve+Hi,Ct,Vt,rt,dt):C.copyTexSubImage2D(It,N,Rt,se,ve+Hi,Ct,Vt,rt,dt);at.bindFramebuffer(C.READ_FRAMEBUFFER,null),at.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Se?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(It,N,Rt,se,ve,rt,dt,At,un,ae,Me.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(It,N,Rt,se,ve,rt,dt,At,un,Me.data):C.texSubImage3D(It,N,Rt,se,ve,rt,dt,At,un,ae,Me):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Rt,se,rt,dt,un,ae,Me.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Rt,se,Me.width,Me.height,un,Me.data):C.texSubImage2D(C.TEXTURE_2D,N,Rt,se,rt,dt,un,ae,Me);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ei),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Wn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vs),C.pixelStorei(C.UNPACK_SKIP_IMAGES,vn),N===0&&D.generateMipmaps&&C.generateMipmap(It),at.unbindTexture()},this.copyTextureToTexture3D=function(S,D,B=null,z=null,N=0){return S.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,S=arguments[2],D=arguments[3],N=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,B,z,N)},this.initRenderTarget=function(S){gt.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){R=0,A=0,L=null,at.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Fo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new zt(t),this.density=e}clone(){return new Fo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vc extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class T3{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ih,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const an=new w;class Ja{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=jn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ja(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mr extends ls{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let nr;const $r=new w,ir=new w,sr=new w,rr=new J,Jr=new J,Xm=new ie,_a=new w,Qr=new w,va=new w,Dd=new J,El=new J,Ud=new J;class po extends He{constructor(t=new mr){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new de;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new T3(e,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Ja(i,3,0,!1)),nr.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=nr,this.material=t,this.center=new J(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),Xm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;xa(_a.set(-.5,-.5,0),sr,o,ir,s,r),xa(Qr.set(.5,-.5,0),sr,o,ir,s,r),xa(va.set(.5,.5,0),sr,o,ir,s,r),Dd.set(0,0),El.set(1,0),Ud.set(1,1);let a=t.ray.intersectTriangle(_a,Qr,va,!1,$r);if(a===null&&(xa(Qr.set(-.5,.5,0),sr,o,ir,s,r),El.set(0,1),a=t.ray.intersectTriangle(_a,va,Qr,!1,$r),a===null))return;const c=t.ray.origin.distanceTo($r);c<t.near||c>t.far||e.push({distance:c,point:$r.clone(),uv:On.getInterpolation($r,_a,Qr,va,Dd,El,Ud,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function xa(n,t,e,i,s,r){rr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Jr.x=r*rr.x-s*rr.y,Jr.y=s*rr.x+r*rr.y):Jr.copy(rr),n.copy(t),n.x+=Jr.x,n.y+=Jr.y,n.applyMatrix4(Xm)}class w3 extends sn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=bn,h=bn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nd extends De{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const or=new ie,Fd=new ie,ya=[],Od=new Bs,A3=new ie,to=new ee,eo=new zs;class qm extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,A3)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),Od.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(Od)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new zs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,or),eo.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(eo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),eo.copy(this.boundingSphere),eo.applyMatrix4(i),t.ray.intersectsSphere(eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),Fd.multiplyMatrices(i,or),to.matrixWorld=Fd,to.raycast(t,ya);for(let o=0,a=ya.length;o<a;o++){const c=ya[o];c.instanceId=r,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new w3(new Float32Array(s*this.count),s,this.count,hu,ui));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fr extends ls{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Qa=new w,tc=new w,Bd=new ie,no=new gc,Ma=new zs,bl=new w,zd=new w;class Ym extends He{constructor(t=new de,e=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qa.fromBufferAttribute(e,s-1),tc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qa.distanceTo(tc);t.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Bd.copy(s).invert(),no.copy(t.ray).applyMatrix4(Bd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),E=h.getX(_+1),M=Sa(this,t,no,c,d,E);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Sa(this,t,no,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=l){const d=Sa(this,t,no,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Sa(this,t,no,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Sa(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(Qa.fromBufferAttribute(o,s),tc.fromBufferAttribute(o,r),e.distanceSqToSegment(Qa,tc,bl,zd)>i)return;bl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(bl);if(!(c<t.near||c>t.far))return{distance:c,point:zd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const kd=new w,Vd=new w;class xc extends Ym{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)kd.fromBufferAttribute(e,s),Vd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kd.distanceTo(Vd);t.setAttribute("lineDistance",new $t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Er extends ls{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Gd=new ie,Uh=new gc,Ea=new zs,ba=new w;class Ao extends He{constructor(t=new de,e=new Er){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,t.ray.intersectsSphere(Ea)===!1)return;Gd.copy(s).invert(),Uh.copy(t.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,u=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);ba.fromBufferAttribute(u,m),Hd(ba,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)ba.fromBufferAttribute(u,g),Hd(ba,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Hd(n,t,e,i,s,r,o){const a=Uh.distanceSqToPoint(n);if(a<e){const c=new w;Uh.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ec extends sn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new J:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new w,s=[],r=[],o=[],a=new w,c=new ie;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ze(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ze(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xu extends vi{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new J){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class C3 extends xu{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function yu(){let n=0,t=0,e=0,i=0;function s(r,o,a,c){n=r,t=a,e=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,p*=h,s(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Ta=new w,Tl=new yu,wl=new yu,Al=new yu;class R3 extends vi{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new w){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Ta.subVectors(s[0],s[1]).add(s[0]),l=Ta);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ta.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ta),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Tl.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),wl.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Al.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Al.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(Tl.calc(c),wl.calc(c),Al.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Wd(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,c=n*a;return(2*e-2*i+r+o)*c+(-3*e+3*i-2*r-o)*a+r*n+e}function P3(n,t){const e=1-n;return e*e*t}function L3(n,t){return 2*(1-n)*n*t}function I3(n,t){return n*n*t}function mo(n,t,e,i){return P3(n,t)+L3(n,e)+I3(n,i)}function D3(n,t){const e=1-n;return e*e*e*t}function U3(n,t){const e=1-n;return 3*e*e*n*t}function N3(n,t){return 3*(1-n)*n*n*t}function F3(n,t){return n*n*n*t}function go(n,t,e,i,s){return D3(n,t)+U3(n,e)+N3(n,i)+F3(n,s)}class jm extends vi{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O3 extends vi{constructor(t=new w,e=new w,i=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(t,s.x,r.x,o.x,a.x),go(t,s.y,r.y,o.y,a.y),go(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Km extends vi{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class B3 extends vi{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zm extends vi{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z3 extends vi{constructor(t=new w,e=new w,i=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new w){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(t,s.x,r.x,o.x),mo(t,s.y,r.y,o.y),mo(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Wd(a,c.x,l.x,h.x,u.x),Wd(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this}}var Nh=Object.freeze({__proto__:null,ArcCurve:C3,CatmullRomCurve3:R3,CubicBezierCurve:jm,CubicBezierCurve3:O3,EllipseCurve:xu,LineCurve:Km,LineCurve3:B3,QuadraticBezierCurve:Zm,QuadraticBezierCurve3:z3,SplineCurve:$m});class k3 extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Nh[s.type]().fromJSON(s))}return this}}class Xd extends k3{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Km(this.currentPoint.clone(),new J(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Zm(this.currentPoint.clone(),new J(t,e),new J(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new jm(this.currentPoint.clone(),new J(t,e),new J(i,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new $m(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,o,a,c),this}absellipse(t,e,i,s,r,o,a,c){const l=new xu(t,e,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Mu extends de{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new w,h=new J;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=i+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Oo extends de{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const M=new w,v=new w,U=new w;for(let R=0;R<e.length;R+=3)p(e[R+0],M),p(e[R+1],v),p(e[R+2],U),c(M,v,U,E)}function c(E,M,v,U){const R=U+1,A=[];for(let L=0;L<=R;L++){A[L]=[];const b=E.clone().lerp(v,L/R),y=M.clone().lerp(v,L/R),P=R-L;for(let H=0;H<=P;H++)H===0&&L===R?A[L][H]=b:A[L][H]=b.clone().lerp(y,H/P)}for(let L=0;L<R;L++)for(let b=0;b<2*(R-L)-1;b++){const y=Math.floor(b/2);b%2===0?(f(A[L][y+1]),f(A[L+1][y]),f(A[L][y])):(f(A[L][y+1]),f(A[L+1][y+1]),f(A[L+1][y]))}}function l(E){const M=new w;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(E),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const E=new w;for(let M=0;M<r.length;M+=3){E.x=r[M+0],E.y=r[M+1],E.z=r[M+2];const v=m(E)/2/Math.PI+.5,U=d(E)/Math.PI+.5;o.push(v,1-U)}g(),u()}function u(){for(let E=0;E<o.length;E+=6){const M=o[E+0],v=o[E+2],U=o[E+4],R=Math.max(M,v,U),A=Math.min(M,v,U);R>.9&&A<.1&&(M<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),U<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function p(E,M){const v=E*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const E=new w,M=new w,v=new w,U=new w,R=new J,A=new J,L=new J;for(let b=0,y=0;b<r.length;b+=9,y+=6){E.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),R.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),L.set(o[y+4],o[y+5]),U.copy(E).add(M).add(v).divideScalar(3);const P=m(U);_(R,y+0,E,P),_(A,y+2,M,P),_(L,y+4,v,P)}}function _(E,M,v,U){U<0&&E.x===1&&(o[M]=E.x-1),v.x===0&&v.z===0&&(o[M]=U/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.vertices,t.indices,t.radius,t.details)}}class Su extends Oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Su(t.radius,t.detail)}}class Jm extends Xd{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Xd().fromJSON(s))}return this}}const V3={triangulate:function(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Qm(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,p;if(i&&(r=q3(n,t,r,e)),n.length>80*e){a=l=n[0],c=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Co(r,o,e,a,c,p,0),o}};function Qm(n,t,e,i,s){let r,o;if(s===iM(n,t,e,i)>0)for(r=t;r<e;r+=i)o=qd(r,n[r],n[r+1],o);else for(r=e-i;r>=t;r-=i)o=qd(r,n[r],n[r+1],o);return o&&yc(o,o.next)&&(Po(o),o=o.next),o}function Us(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(yc(e,e.next)||Re(e.prev,e,e.next)===0)){if(Po(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Co(n,t,e,i,s,r,o){if(!n)return;!o&&r&&$3(n,i,s,r);let a=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?H3(n,i,s,r):G3(n)){t.push(c.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),Po(n),n=l.next,a=l.next;continue}if(n=l,n===a){o?o===1?(n=W3(Us(n),t,e),Co(n,t,e,i,s,r,2)):o===2&&X3(n,t,e,i,s,r):Co(Us(n),t,e,i,s,r,1);break}}}function G3(n){const t=n.prev,e=n,i=n.next;if(Re(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,c=e.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&hr(s,a,r,c,o,l,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function H3(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Re(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Fh(p,g,t,e,i),E=Fh(_,m,t,e,i);let M=n.prevZ,v=n.nextZ;for(;M&&M.z>=d&&v&&v.z<=E;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&hr(a,h,c,u,l,f,M.x,M.y)&&Re(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hr(a,h,c,u,l,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=d;){if(M.x>=p&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&hr(a,h,c,u,l,f,M.x,M.y)&&Re(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=E;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&hr(a,h,c,u,l,f,v.x,v.y)&&Re(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function W3(n,t,e){let i=n;do{const s=i.prev,r=i.next.next;!yc(s,r)&&t0(s,i,i.next,r)&&Ro(s,r)&&Ro(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),Po(i),Po(i.next),i=n=r),i=i.next}while(i!==n);return Us(i)}function X3(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&tM(o,a)){let c=e0(o,a);o=Us(o,o.next),c=Us(c,c.next),Co(o,t,e,i,s,r,0),Co(c,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function q3(n,t,e,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:n.length,l=Qm(n,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Q3(l));for(s.sort(Y3),r=0;r<s.length;r++)e=j3(s[r],e);return e}function Y3(n,t){return n.x-t.x}function j3(n,t){const e=K3(n,t);if(!e)return t;const i=e0(e,n);return Us(i,i.next),Us(e,e.next)}function K3(n,t){let e=t,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&hr(o<l?r:i,o,c,l,o<l?i:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ro(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Z3(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Z3(n,t){return Re(n.prev,n,t.prev)<0&&Re(t.next,n,n.next)<0}function $3(n,t,e,i){let s=n;do s.z===0&&(s.z=Fh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,J3(s)}function J3(n){let t,e,i,s,r,o,a,c,l=1;do{for(e=n,n=null,r=null,o=0;e;){for(o++,i=e,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,l*=2}while(o>1);return n}function Fh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Q3(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function hr(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function tM(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!eM(n,t)&&(Ro(n,t)&&Ro(t,n)&&nM(n,t)&&(Re(n.prev,n,t.prev)||Re(n,t.prev,t))||yc(n,t)&&Re(n.prev,n,n.next)>0&&Re(t.prev,t,t.next)>0)}function Re(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function yc(n,t){return n.x===t.x&&n.y===t.y}function t0(n,t,e,i){const s=Aa(Re(n,t,e)),r=Aa(Re(n,t,i)),o=Aa(Re(e,i,n)),a=Aa(Re(e,i,t));return!!(s!==r&&o!==a||s===0&&wa(n,e,t)||r===0&&wa(n,i,t)||o===0&&wa(e,n,i)||a===0&&wa(e,t,i))}function wa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Aa(n){return n>0?1:n<0?-1:0}function eM(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&t0(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Ro(n,t){return Re(n.prev,n,n.next)<0?Re(n,t,n.next)>=0&&Re(n,n.prev,t)>=0:Re(n,t,n.prev)<0||Re(n,n.next,t)<0}function nM(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function e0(n,t){const e=new Oh(n.i,n.x,n.y),i=new Oh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function qd(n,t,e,i){const s=new Oh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Po(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oh(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iM(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class _o{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return _o.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];Yd(t),jd(i,t);let o=t.length;e.forEach(Yd);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,jd(i,e[c]);const a=V3.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Yd(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function jd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Eu extends de{constructor(t=new Jm([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:sM;let M,v=!1,U,R,A,L;d&&(M=d.getSpacedPoints(h),v=!0,f=!1,U=d.computeFrenetFrames(h,!1),R=new w,A=new w,L=new w),f||(m=0,p=0,g=0,_=0);const b=a.extractPoints(l);let y=b.shape;const P=b.holes;if(!_o.isClockWise(y)){y=y.reverse();for(let $=0,it=P.length;$<it;$++){const C=P[$];_o.isClockWise(C)&&(P[$]=C.reverse())}}const k=_o.triangulateShape(y,P),X=y;for(let $=0,it=P.length;$<it;$++){const C=P[$];y=y.concat(C)}function K($,it,C){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(it,C)}const W=y.length,Q=k.length;function V($,it,C){let Pt,et,xt;const at=$.x-it.x,Nt=$.y-it.y,gt=C.x-$.x,T=C.y-$.y,x=at*at+Nt*Nt,F=at*T-Nt*gt;if(Math.abs(F)>Number.EPSILON){const q=Math.sqrt(x),tt=Math.sqrt(gt*gt+T*T),Y=it.x-Nt/q,Tt=it.y+at/q,ht=C.x-T/tt,_t=C.y+gt/tt,jt=((ht-Y)*T-(_t-Tt)*gt)/(at*T-Nt*gt);Pt=Y+at*jt-$.x,et=Tt+Nt*jt-$.y;const nt=Pt*Pt+et*et;if(nt<=2)return new J(Pt,et);xt=Math.sqrt(nt/2)}else{let q=!1;at>Number.EPSILON?gt>Number.EPSILON&&(q=!0):at<-Number.EPSILON?gt<-Number.EPSILON&&(q=!0):Math.sign(Nt)===Math.sign(T)&&(q=!0),q?(Pt=-Nt,et=at,xt=Math.sqrt(x)):(Pt=at,et=Nt,xt=Math.sqrt(x/2))}return new J(Pt/xt,et/xt)}const ct=[];for(let $=0,it=X.length,C=it-1,Pt=$+1;$<it;$++,C++,Pt++)C===it&&(C=0),Pt===it&&(Pt=0),ct[$]=V(X[$],X[C],X[Pt]);const mt=[];let St,Gt=ct.concat();for(let $=0,it=P.length;$<it;$++){const C=P[$];St=[];for(let Pt=0,et=C.length,xt=et-1,at=Pt+1;Pt<et;Pt++,xt++,at++)xt===et&&(xt=0),at===et&&(at=0),St[Pt]=V(C[Pt],C[xt],C[at]);mt.push(St),Gt=Gt.concat(St)}for(let $=0;$<m;$++){const it=$/m,C=p*Math.cos(it*Math.PI/2),Pt=g*Math.sin(it*Math.PI/2)+_;for(let et=0,xt=X.length;et<xt;et++){const at=K(X[et],ct[et],Pt);ot(at.x,at.y,-C)}for(let et=0,xt=P.length;et<xt;et++){const at=P[et];St=mt[et];for(let Nt=0,gt=at.length;Nt<gt;Nt++){const T=K(at[Nt],St[Nt],Pt);ot(T.x,T.y,-C)}}}const oe=g+_;for(let $=0;$<W;$++){const it=f?K(y[$],Gt[$],oe):y[$];v?(A.copy(U.normals[0]).multiplyScalar(it.x),R.copy(U.binormals[0]).multiplyScalar(it.y),L.copy(M[0]).add(A).add(R),ot(L.x,L.y,L.z)):ot(it.x,it.y,0)}for(let $=1;$<=h;$++)for(let it=0;it<W;it++){const C=f?K(y[it],Gt[it],oe):y[it];v?(A.copy(U.normals[$]).multiplyScalar(C.x),R.copy(U.binormals[$]).multiplyScalar(C.y),L.copy(M[$]).add(A).add(R),ot(L.x,L.y,L.z)):ot(C.x,C.y,u/h*$)}for(let $=m-1;$>=0;$--){const it=$/m,C=p*Math.cos(it*Math.PI/2),Pt=g*Math.sin(it*Math.PI/2)+_;for(let et=0,xt=X.length;et<xt;et++){const at=K(X[et],ct[et],Pt);ot(at.x,at.y,u+C)}for(let et=0,xt=P.length;et<xt;et++){const at=P[et];St=mt[et];for(let Nt=0,gt=at.length;Nt<gt;Nt++){const T=K(at[Nt],St[Nt],Pt);v?ot(T.x,T.y+M[h-1].y,M[h-1].x+C):ot(T.x,T.y,u+C)}}}j(),st();function j(){const $=s.length/3;if(f){let it=0,C=W*it;for(let Pt=0;Pt<Q;Pt++){const et=k[Pt];Ut(et[2]+C,et[1]+C,et[0]+C)}it=h+m*2,C=W*it;for(let Pt=0;Pt<Q;Pt++){const et=k[Pt];Ut(et[0]+C,et[1]+C,et[2]+C)}}else{for(let it=0;it<Q;it++){const C=k[it];Ut(C[2],C[1],C[0])}for(let it=0;it<Q;it++){const C=k[it];Ut(C[0]+W*h,C[1]+W*h,C[2]+W*h)}}i.addGroup($,s.length/3-$,0)}function st(){const $=s.length/3;let it=0;bt(X,it),it+=X.length;for(let C=0,Pt=P.length;C<Pt;C++){const et=P[C];bt(et,it),it+=et.length}i.addGroup($,s.length/3-$,1)}function bt($,it){let C=$.length;for(;--C>=0;){const Pt=C;let et=C-1;et<0&&(et=$.length-1);for(let xt=0,at=h+m*2;xt<at;xt++){const Nt=W*xt,gt=W*(xt+1),T=it+Pt+Nt,x=it+et+Nt,F=it+et+gt,q=it+Pt+gt;kt(T,x,F,q)}}}function ot($,it,C){c.push($),c.push(it),c.push(C)}function Ut($,it,C){Ot($),Ot(it),Ot(C);const Pt=s.length/3,et=E.generateTopUV(i,s,Pt-3,Pt-2,Pt-1);te(et[0]),te(et[1]),te(et[2])}function kt($,it,C,Pt){Ot($),Ot(it),Ot(Pt),Ot(it),Ot(C),Ot(Pt);const et=s.length/3,xt=E.generateSideWallUV(i,s,et-6,et-3,et-2,et-1);te(xt[0]),te(xt[1]),te(xt[3]),te(xt[1]),te(xt[2]),te(xt[3])}function Ot($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function te($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return rM(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nh[s.type]().fromJSON(s)),new Eu(i,t.options)}}const sM={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new J(r,o),new J(a,c),new J(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new J(o,1-c),new J(l,1-u),new J(f,1-g),new J(_,1-d)]:[new J(a,1-c),new J(h,1-u),new J(p,1-g),new J(m,1-d)]}};function rM(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Cs extends Oo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cs(t.radius,t.detail)}}class bu extends Oo{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bu(t.radius,t.detail)}}class nc extends de{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,p=new w,g=new J;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let d=0;d<i;d++){const E=d+m,M=E,v=E+i+1,U=E+i+2,R=E+1;a.push(M,v,R),a.push(v,U,R)}}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fi extends de{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new w,f=new w,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const E=[],M=d/i;let v=0;d===0&&o===0?v=.5/e:d===i&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const R=U/e;u.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(R+v,1-M),E.push(l++)}h.push(E)}for(let d=0;d<i;d++)for(let E=0;E<e;E++){const M=h[d][E+1],v=h[d][E],U=h[d+1][E],R=h[d+1][E+1];(d!==0||o>0)&&p.push(M,v,R),(d!==i-1||c<Math.PI)&&p.push(v,U,R)}this.setIndex(p),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(_,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vo extends de{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new w,u=new w,f=new w;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,d,E)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Tu extends de{constructor(t=1,e=.4,i=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:o},i=Math.floor(i),s=Math.floor(s);const a=[],c=[],l=[],h=[],u=new w,f=new w,p=new w,g=new w,_=new w,m=new w,d=new w;for(let M=0;M<=i;++M){const v=M/i*r*Math.PI*2;E(v,r,o,t,p),E(v+.01,r,o,t,g),m.subVectors(g,p),d.addVectors(g,p),_.crossVectors(m,d),d.crossVectors(_,m),_.normalize(),d.normalize();for(let U=0;U<=s;++U){const R=U/s*Math.PI*2,A=-e*Math.cos(R),L=e*Math.sin(R);u.x=p.x+(A*d.x+L*_.x),u.y=p.y+(A*d.y+L*_.y),u.z=p.z+(A*d.z+L*_.z),c.push(u.x,u.y,u.z),f.subVectors(u,p).normalize(),l.push(f.x,f.y,f.z),h.push(M/i),h.push(U/s)}}for(let M=1;M<=i;M++)for(let v=1;v<=s;v++){const U=(s+1)*(M-1)+(v-1),R=(s+1)*M+(v-1),A=(s+1)*M+v,L=(s+1)*(M-1)+v;a.push(U,R,L),a.push(R,A,L)}this.setIndex(a),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(h,2));function E(M,v,U,R,A){const L=Math.cos(M),b=Math.sin(M),y=U/v*M,P=Math.cos(y);A.x=R*(2+P)*.5*L,A.y=R*(2+P)*b*.5,A.z=R*Math.sin(y)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tu(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class oM extends ln{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Lo extends ls{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cm,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mc extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class aM extends Mc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cl=new ie,Kd=new w,Zd=new w;class n0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),Zd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zd),e.updateMatrixWorld(),Cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $d=new ie,io=new w,Rl=new w;class cM extends n0{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),io.setFromMatrixPosition(t.matrixWorld),i.position.copy(io),Rl.copy(i.position),Rl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-io.x,-io.y,-io.z),$d.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d)}}class i0 extends Mc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new cM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class lM extends n0{constructor(){super(new _u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hM extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class s0 extends Mc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bo{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Jd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Jd(){return performance.now()}const Qd=new ie;class r0{constructor(t,e,i=0,s=1/0){this.ray=new gc(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Qd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qd),this}intersectObject(t,e=!0,i=[]){return Bh(t,this,i,e),i.sort(tp),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bh(t[s],this,i,e);return i.sort(tp),i}}function tp(n,t){return n.distance-t.distance}function Bh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bh(r[o],t,e,!0)}}class uM{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o0 extends xc{constructor(t=10,e=10,i=4473924,s=8947848){i=new zt(i),s=new zt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const h=new de;h.setAttribute("position",new $t(c,3)),h.setAttribute("color",new $t(l,3));const u=new Fr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class fM extends xc{constructor(t=10,e=16,i=8,s=64,r=4473924,o=8947848){r=new zt(r),o=new zt(o);const a=[],c=[];if(e>1)for(let u=0;u<e;u++){const f=u/e*(Math.PI*2),p=Math.sin(f)*t,g=Math.cos(f)*t;a.push(0,0,0),a.push(p,0,g);const _=u&1?r:o;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<i;u++){const f=u&1?r:o,p=t-t/i*u;for(let g=0;g<s;g++){let _=g/s*(Math.PI*2),m=Math.sin(_)*p,d=Math.cos(_)*p;a.push(m,0,d),c.push(f.r,f.g,f.b),_=(g+1)/s*(Math.PI*2),m=Math.sin(_)*p,d=Math.cos(_)*p,a.push(m,0,d),c.push(f.r,f.g,f.b)}}const l=new de;l.setAttribute("position",new $t(a,3)),l.setAttribute("color",new $t(c,3));const h=new Fr({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);var zo=typeof self<"u"?self:{};function a0(n){t:{for(var t=["CLOSURE_FLAGS"],e=zo,i=0;i<t.length;i++)if((e=e[t[i]])==null){t=null;break t}t=e}return(n=t&&t[n])!=null&&n}function xs(){throw Error("Invalid UTF8")}function ep(n,t){return t=String.fromCharCode.apply(null,t),n==null?t:n+t}let Ca,Pl;const dM=typeof TextDecoder<"u";let pM;const mM=typeof TextEncoder<"u";function c0(n){if(mM)n=(pM||(pM=new TextEncoder)).encode(n);else{let e=0;const i=new Uint8Array(3*n.length);for(let s=0;s<n.length;s++){var t=n.charCodeAt(s);if(128>t)i[e++]=t;else{if(2048>t)i[e++]=t>>6|192;else{if(55296<=t&&57343>=t){if(56319>=t&&s<n.length){const r=n.charCodeAt(++s);if(56320<=r&&57343>=r){t=1024*(t-55296)+r-56320+65536,i[e++]=t>>18|240,i[e++]=t>>12&63|128,i[e++]=t>>6&63|128,i[e++]=63&t|128;continue}s--}t=65533}i[e++]=t>>12|224,i[e++]=t>>6&63|128}i[e++]=63&t|128}}n=e===i.length?i:i.subarray(0,e)}return n}var Io,l0=a0(610401301),gM=a0(188588736);const np=zo.navigator;function zh(n){return!!l0&&!!Io&&Io.brands.some((({brand:t})=>t&&t.indexOf(n)!=-1))}function Nn(n){var t;return(t=zo.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(n)!=-1}function Qi(){return!!l0&&!!Io&&0<Io.brands.length}function Ll(){return Qi()?zh("Chromium"):(Nn("Chrome")||Nn("CriOS"))&&!(!Qi()&&Nn("Edge"))||Nn("Silk")}function wu(n){return wu[" "](n),n}Io=np&&np.userAgentData||null,wu[" "]=function(){};var _M=!Qi()&&(Nn("Trident")||Nn("MSIE"));!Nn("Android")||Ll(),Ll(),Nn("Safari")&&(Ll()||!Qi()&&Nn("Coast")||!Qi()&&Nn("Opera")||!Qi()&&Nn("Edge")||(Qi()?zh("Microsoft Edge"):Nn("Edg/"))||Qi()&&zh("Opera"));var h0={},co=null;function vM(n){var t=n.length,e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(n[t-1])!=-1&&(e="=.".indexOf(n[t-2])!=-1?e-2:e-1);var i=new Uint8Array(e),s=0;return(function(r,o){function a(p){for(;c<r.length;){var g=r.charAt(c++),_=co[g];if(_!=null)return _;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return p}u0();for(var c=0;;){var l=a(-1),h=a(0),u=a(64),f=a(64);if(f===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),f!=64&&o(u<<6&192|f))}})(n,(function(r){i[s++]=r})),s!==e?i.subarray(0,s):i}function u0(){if(!co){co={};for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var i=n.concat(t[e].split(""));h0[e]=i;for(var s=0;s<i.length;s++){var r=i[s];co[r]===void 0&&(co[r]=s)}}}}var f0=typeof Uint8Array<"u",d0=!_M&&typeof btoa=="function";function ip(n){if(!d0){var t;t===void 0&&(t=0),u0(),t=h0[t];var e=Array(Math.floor(n.length/3)),i=t[64]||"";let c=0,l=0;for(;c<n.length-2;c+=3){var s=n[c],r=n[c+1],o=n[c+2],a=t[s>>2];s=t[(3&s)<<4|r>>4],r=t[(15&r)<<2|o>>6],o=t[63&o],e[l++]=a+s+r+o}switch(a=0,o=i,n.length-c){case 2:o=t[(15&(a=n[c+1]))<<2]||i;case 1:n=n[c],e[l]=t[n>>2]+t[(3&n)<<4|a>>4]+o+i}return e.join("")}for(t="",e=0,i=n.length-10240;e<i;)t+=String.fromCharCode.apply(null,n.subarray(e,e+=10240));return t+=String.fromCharCode.apply(null,e?n.subarray(e):n),btoa(t)}const sp=/[-_.]/g,xM={"-":"+",_:"/",".":"="};function yM(n){return xM[n]||""}function p0(n){if(!d0)return vM(n);sp.test(n)&&(n=n.replace(sp,yM)),n=atob(n);const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}function ko(n){return f0&&n!=null&&n instanceof Uint8Array}let MM;function Sc(){return MM||(MM=new Uint8Array(0))}var br={};let SM;function m0(n){if(n!==br)throw Error("illegal external caller")}function Ns(){return SM||(SM=new Fi(null,br))}function Au(n){m0(br);var t=n.g;return(t=t==null||ko(t)?t:typeof t=="string"?p0(t):null)==null?t:n.g=t}var Fi=class{constructor(n,t){if(m0(t),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const n=Au(this);return n?new Uint8Array(n):Sc()}};function g0(n,t){return Error(`Invalid wire type: ${n} (at position ${t})`)}function Cu(){return Error("Failed to read varint, encoding is invalid.")}function _0(n,t){return Error(`Tried to read past the end of the data ${t} > ${n}`)}function Ru(n){if(typeof n=="string")return{buffer:p0(n),P:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Uint8Array)return{buffer:n,P:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),P:!1};if(n.constructor===Fi)return{buffer:Au(n)||Sc(),P:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Pu(){return typeof BigInt=="function"}const EM=typeof Uint8Array.prototype.slice=="function";let v0,Ee=0,Ve=0;function Rs(n){const t=0>n;let e=(n=Math.abs(n))>>>0;if(n=Math.floor((n-e)/4294967296),t){const[i,s]=Du(e,n);n=s,e=i}Ee=e>>>0,Ve=n>>>0}function Lu(n){const t=v0||(v0=new DataView(new ArrayBuffer(8)));t.setFloat32(0,+n,!0),Ve=0,Ee=t.getUint32(0,!0)}function kh(n,t){return 4294967296*t+(n>>>0)}function Iu(n,t){const e=2147483648&t;return e&&(t=~t>>>0,(n=1+~n>>>0)==0&&(t=t+1>>>0)),n=kh(n,t),e?-n:n}function ic(n,t){if(n>>>=0,2097151>=(t>>>=0))var e=""+(4294967296*t+n);else Pu()?e=""+(BigInt(t)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(e=16777215&(n>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),1e7<=e&&(t+=Math.floor(e/1e7),e%=1e7),e=t+rp(e)+rp(n));return e}function rp(n){return n=String(n),"0000000".slice(n.length)+n}function x0(){var n=Ee,t=Ve;if(2147483648&t)if(Pu())n=""+(BigInt(0|t)<<BigInt(32)|BigInt(n>>>0));else{const[e,i]=Du(n,t);n="-"+ic(e,i)}else n=ic(n,t);return n}function Ec(n){if(16>n.length)Rs(Number(n));else if(Pu())n=BigInt(n),Ee=Number(n&BigInt(4294967295))>>>0,Ve=Number(n>>BigInt(32)&BigInt(4294967295));else{const t=+(n[0]==="-");Ve=Ee=0;const e=n.length;for(let i=t,s=(e-t)%6+t;s<=e;i=s,s+=6){const r=Number(n.slice(i,s));Ve*=1e6,Ee=1e6*Ee+r,4294967296<=Ee&&(Ve+=Math.trunc(Ee/4294967296),Ve>>>=0,Ee>>>=0)}if(t){const[i,s]=Du(Ee,Ve);Ee=i,Ve=s}}}function Du(n,t){return t=~t,n?n=1+~n:t+=1,[n,t]}function Uu(n,t){let e,i=0,s=0,r=0;const o=n.h;let a=n.g;do e=o[a++],i|=(127&e)<<r,r+=7;while(32>r&&128&e);for(32<r&&(s|=(127&e)>>4),r=3;32>r&&128&e;r+=7)e=o[a++],s|=(127&e)<<r;if(Ps(n,a),128>e)return t(i>>>0,s>>>0);throw Cu()}function Nu(n){let t=0,e=n.g;const i=e+10,s=n.h;for(;e<i;){const r=s[e++];if(t|=r,(128&r)==0)return Ps(n,e),!!(127&t)}throw Cu()}function ss(n){const t=n.h;let e=n.g,i=t[e++],s=127&i;if(128&i&&(i=t[e++],s|=(127&i)<<7,128&i&&(i=t[e++],s|=(127&i)<<14,128&i&&(i=t[e++],s|=(127&i)<<21,128&i&&(i=t[e++],s|=i<<28,128&i&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Cu();return Ps(n,e),s}function rs(n){return ss(n)>>>0}function Vh(n){var t=n.h;const e=n.g,i=t[e],s=t[e+1],r=t[e+2];return t=t[e+3],Ps(n,n.g+4),(i<<0|s<<8|r<<16|t<<24)>>>0}function Gh(n){var t=Vh(n);n=2*(t>>31)+1;const e=t>>>23&255;return t&=8388607,e==255?t?NaN:1/0*n:e==0?n*Math.pow(2,-149)*t:n*Math.pow(2,e-150)*(t+Math.pow(2,23))}function bM(n){return ss(n)}function Il(n,t,{ca:e=!1}={}){n.ca=e,t&&(t=Ru(t),n.h=t.buffer,n.m=t.P,n.j=0,n.l=n.h.length,n.g=n.j)}function Ps(n,t){if(n.g=t,t>n.l)throw _0(n.l,t)}function y0(n,t){if(0>t)throw Error(`Tried to read a negative byte length: ${t}`);const e=n.g,i=e+t;if(i>n.l)throw _0(t,n.l-e);return n.g=i,e}function M0(n,t){if(t==0)return Ns();var e=y0(n,t);return n.ca&&n.m?e=n.h.subarray(e,e+t):(n=n.h,e=e===(t=e+t)?Sc():EM?n.slice(e,t):new Uint8Array(n.subarray(e,t))),e.length==0?Ns():new Fi(e,br)}var op=[];function S0(n){var t=n.g;if(t.g==t.l)return!1;n.l=n.g.g;var e=rs(n.g);if(t=e>>>3,!(0<=(e&=7)&&5>=e))throw g0(e,n.l);if(1>t)throw Error(`Invalid field number: ${t} (at position ${n.l})`);return n.m=t,n.h=e,!0}function Ga(n){switch(n.h){case 0:n.h!=0?Ga(n):Nu(n.g);break;case 1:Ps(n=n.g,n.g+8);break;case 2:if(n.h!=2)Ga(n);else{var t=rs(n.g);Ps(n=n.g,n.g+t)}break;case 5:Ps(n=n.g,n.g+4);break;case 3:for(t=n.m;;){if(!S0(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=t)throw Error("Unmatched end-group tag");break}Ga(n)}break;default:throw g0(n.h,n.l)}}function Vo(n,t,e){const i=n.g.l,s=rs(n.g),r=n.g.g+s;let o=r-i;if(0>=o&&(n.g.l=r,e(t,n,void 0,void 0,void 0),o=r-n.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${s} bytes, instead read ${s-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=r,n.g.l=i,t}function Fu(n){var t=rs(n.g),e=y0(n=n.g,t);if(n=n.h,dM){var i,s=n;(i=Pl)||(i=Pl=new TextDecoder("utf-8",{fatal:!0})),t=e+t,s=e===0&&t===s.length?s:s.subarray(e,t);try{var r=i.decode(s)}catch(a){if(Ca===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Ca=!0}catch{Ca=!1}}throw!Ca&&(Pl=void 0),a}}else{t=(r=e)+t,e=[];let a,c=null;for(;r<t;){var o=n[r++];128>o?e.push(o):224>o?r>=t?xs():(a=n[r++],194>o||(192&a)!=128?(r--,xs()):e.push((31&o)<<6|63&a)):240>o?r>=t-1?xs():(a=n[r++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=n[r++]))!=128?(r--,xs()):e.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?r>=t-2?xs():(a=n[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=n[r++]))!=128||(192&(s=n[r++]))!=128?(r--,xs()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,e.push(55296+(o>>10&1023),56320+(1023&o)))):xs(),8192<=e.length&&(c=ep(c,e),e.length=0)}r=ep(c,e)}return r}function E0(n){const t=rs(n.g);return M0(n.g,t)}function bc(n,t,e){var i=rs(n.g);for(i=n.g.g+i;n.g.g<i;)e.push(t(n.g))}var Ra=[];function ap(n){return n?/^\d+$/.test(n)?(Ec(n),new cp(Ee,Ve)):null:TM||(TM=new cp(0,0))}var cp=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let TM;function lp(n){return n?/^-?\d+$/.test(n)?(Ec(n),new hp(Ee,Ve)):null:wM||(wM=new hp(0,0))}var hp=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let wM;function sc(n,t,e){for(;0<e||127<t;)n.g.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;n.g.push(t)}function Go(n,t){for(;127<t;)n.g.push(127&t|128),t>>>=7;n.g.push(t)}function Tc(n,t){if(0<=t)Go(n,t);else{for(let e=0;9>e;e++)n.g.push(127&t|128),t>>=7;n.g.push(1)}}function Do(n,t){n.g.push(t>>>0&255),n.g.push(t>>>8&255),n.g.push(t>>>16&255),n.g.push(t>>>24&255)}function Tr(n,t){t.length!==0&&(n.l.push(t),n.h+=t.length)}function kn(n,t,e){Go(n.g,8*t+e)}function Ou(n,t){return kn(n,t,2),t=n.g.end(),Tr(n,t),t.push(n.h),t}function Bu(n,t){var e=t.pop();for(e=n.h+n.g.length()-e;127<e;)t.push(127&e|128),e>>>=7,n.h++;t.push(e),n.h++}function wc(n,t,e){kn(n,t,2),Go(n.g,e.length),Tr(n,n.g.end()),Tr(n,e)}function Hh(n,t,e,i){e!=null&&(t=Ou(n,t),i(e,n),Bu(n,t))}class Or{constructor(t,e,i,s){this.g=t,this.h=e,this.l=i,this.pa=s}}function Tn(n){return Array.prototype.slice.call(n)}function zu(n){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():n}var pi=zu(),up=zu("0di"),Dl=zu("2ex"),ku=pi?(n,t)=>{n[pi]|=t}:(n,t)=>{n.g!==void 0?n.g|=t:Object.defineProperties(n,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}})},rc=pi?(n,t)=>{n[pi]&=~t}:(n,t)=>{n.g!==void 0&&(n.g&=~t)};function tn(n,t,e){return e?n|t:n&~t}var Ue=pi?n=>0|n[pi]:n=>0|n.g,le=pi?n=>n[pi]:n=>n.g,Ie=pi?(n,t)=>(n[pi]=t,n):(n,t)=>(n.g!==void 0?n.g=t:Object.defineProperties(n,{g:{value:t,configurable:!0,writable:!0,enumerable:!1}}),n);function Br(n){return ku(n,34),n}function AM(n,t){Ie(t,-14591&(0|n))}function Wh(n,t){Ie(t,-14557&(34|n))}function b0(n){return(n=n>>14&1023)===0?536870912:n}var Vu,Ho={},T0={};function fp(n){return!(!n||typeof n!="object"||n.Ja!==T0)}function Gu(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function Hu(n,t,e){if(n!=null){if(typeof n=="string")n=n?new Fi(n,br):Ns();else if(n.constructor!==Fi)if(ko(n))n=n.length?new Fi(e?n:new Uint8Array(n),br):Ns();else{if(!t)throw Error();n=void 0}}return n}function oc(n,t,e){if(!Array.isArray(n)||n.length)return!1;const i=Ue(n);return!!(1&i)||!(!t||!(Array.isArray(t)?t.includes(e):t.has(e)))&&(Ie(n,1|i),!0)}const dp=[];function xi(n){if(2&n)throw Error()}Ie(dp,55),Vu=Object.freeze(dp);class ac{constructor(t,e,i){this.l=0,this.g=t,this.h=e,this.m=i}next(){if(this.l<this.g.length){const t=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,t):t}}return{done:!0,value:void 0}}[Symbol.iterator](){return new ac(this.g,this.h,this.m)}}let es,CM,RM;function w0(n,t){(t=es?t[es]:void 0)&&(n[es]=Tn(t))}function A0(n,t){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=t}function PM(){const n=Error();A0(n,"incident"),(function(t){zo.setTimeout((()=>{throw t}),0)})(n)}function Xh(n){return A0(n=Error(n),"warning"),n}function hs(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function C0(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}Object.freeze(new class{}),Object.freeze(new class{});const LM=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ac(n){const t=typeof n;return t==="number"?Number.isFinite(n):t==="string"&&LM.test(n)}function zr(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?0|n:void 0}function IM(n){if(n==null)return n;if(typeof n=="string"){if(!n)return;n=+n}return typeof n=="number"&&Number.isFinite(n)?n>>>0:void 0}function pp(n){return n[0]!=="-"&&(20>n.length||n.length===20&&184467>Number(n.substring(0,6)))}function R0(n){return n[0]==="-"?20>n.length||n.length===20&&-922337<Number(n.substring(0,7)):19>n.length||n.length===19&&922337>Number(n.substring(0,6))}function Wu(n){return n=Math.trunc(n),Number.isSafeInteger(n)||(Rs(n),n=Iu(Ee,Ve)),n}function Xu(n){var t=Math.trunc(Number(n));return Number.isSafeInteger(t)?String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),R0(n)||(Ec(n),n=x0()),n)}function cc(n){return n==null?n:Ac(n)?typeof n=="number"?Wu(n):Xu(n):void 0}function Wo(n){if(typeof n!="string")throw Error();return n}function kr(n){if(n!=null&&typeof n!="string")throw Error();return n}function Ls(n){return n==null||typeof n=="string"?n:void 0}function qu(n,t,e,i){if(n!=null&&typeof n=="object"&&n.X===Ho)return n;if(!Array.isArray(n))return e?2&i?(n=t[up])?t=n:(Br((n=new t).s),t=t[up]=n):t=new t:t=void 0,t;let s=e=Ue(n);return s===0&&(s|=32&i),s|=2&i,s!==e&&Ie(n,s),new t(n)}function DM(n,t,e){if(t){var i=!!i;if(!Ac(t=n))throw Xh("int64");typeof t=="string"?i=Xu(t):i?(i=Math.trunc(t),Number.isSafeInteger(i)?i=String(i):R0(t=String(i))?i=t:(Rs(i),i=x0())):i=Wu(t)}else i=cc(n);return typeof(e=(n=i)==null?e?0:void 0:n)=="string"&&(i=+e,Number.isSafeInteger(i))?i:e}let lc,Yu,UM;function hc(n){switch(typeof n){case"boolean":return Yu||(Yu=[0,void 0,!0]);case"number":return 0<n?void 0:n===0?UM||(UM=[0,void 0]):[-n,void 0];case"string":return[0,n];case"object":return n}}function Is(n,t){return P0(n,t[0],t[1])}function P0(n,t,e){if(n==null&&(n=lc),lc=void 0,n==null){var i=96;e?(n=[e],i|=512):n=[],t&&(i=-16760833&i|(1023&t)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(2048&(i=Ue(n)))throw Error("farr");if(64&i)return n;if(i|=64,e&&(i|=512,e!==n[0]))throw Error("mid");t:{const s=(e=n).length;if(s){const r=s-1;if(Gu(e[r])){if(1024<=(t=r-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&t)<<14;break t}}if(t){if(1024<(t=Math.max(t,s-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&t)<<14}}}return Ie(n,i),n}const NM={};let FM=(function(){try{return wu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Ul{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const OM=FM?(Object.setPrototypeOf(Ul.prototype,Map.prototype),Object.defineProperties(Ul.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Ul):class extends Map{constructor(){super()}};function mp(n){return n}function Nl(n){if(2&n.N)throw Error("Cannot mutate an immutable Map")}var zn=class extends OM{constructor(n,t,e=mp,i=mp){super();let s=Ue(n);s|=64,Ie(n,s),this.N=s,this.U=t,this.S=e,this.Z=this.U?BM:i;for(let r=0;r<n.length;r++){const o=n[r],a=e(o[0],!1,!0);let c=o[1];t?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,s),super.set(a,c)}}oa(n=gp){if(this.size!==0)return this.Y(n)}Y(n=gp){const t=[],e=super.entries();for(var i;!(i=e.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),t.push(i);return t}clear(){Nl(this),super.clear()}delete(n){return Nl(this),super.delete(this.S(n,!0,!1))}entries(){var n=this.na();return new ac(n,zM,this)}keys(){return this.Ia()}values(){var n=this.na();return new ac(n,zn.prototype.get,this)}forEach(n,t){super.forEach(((e,i)=>{n.call(t,this.get(i),i,this)}))}set(n,t){return Nl(this),(n=this.S(n,!0,!1))==null?this:t==null?(super.delete(n),this):super.set(n,this.Z(t,!0,!0,this.U,!1,this.N))}Oa(n){const t=this.S(n[0],!1,!0);n=n[1],n=this.U?n===void 0?null:n:this.Z(n,!1,!0,void 0,!1,this.N),super.set(t,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const t=super.get(n);if(t!==void 0){var e=this.U;return e?((e=this.Z(t,!1,!0,e,this.ta,this.N))!==t&&super.set(n,e),e):t}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function BM(n,t,e,i,s,r){return n=qu(n,i,e,r),s&&(n=Rc(n)),n}function gp(n){return n}function zM(n){return[n,this.get(n)]}let kM;function _p(){return kM||(kM=new zn(Br([]),void 0,void 0,void 0,NM))}function ju(n,t,e,i,s){if(n!=null){if(Array.isArray(n))n=oc(n,void 0,0)?void 0:s&&2&Ue(n)?n:Cc(n,t,e,i!==void 0,s);else if(Gu(n)){const r={};for(let o in n)r[o]=ju(n[o],t,e,i,s);n=r}else n=t(n,i);return n}}function Cc(n,t,e,i,s){const r=i||e?Ue(n):0;i=i?!!(32&r):void 0;const o=Tn(n);for(let a=0;a<o.length;a++)o[a]=ju(o[a],t,e,i,s);return e&&(w0(o,n),e(r,o)),o}function VM(n){return ju(n,Ku,void 0,void 0,!1)}function Ku(n){return n.X===Ho?n.toJSON():n instanceof zn?n.oa(VM):(function(t){switch(typeof t){case"number":return isFinite(t)?t:String(t);case"boolean":return t?1:0;case"object":if(t)if(Array.isArray(t)){if(oc(t,void 0,0))return}else{if(ko(t))return ip(t);if(t instanceof Fi){const e=t.g;return e==null?"":typeof e=="string"?e:t.g=ip(e)}if(t instanceof zn)return t.oa()}}return t})(n)}function qh(n,t,e=Wh){if(n!=null){if(f0&&n instanceof Uint8Array)return t?n:new Uint8Array(n);if(Array.isArray(n)){var i=Ue(n);return 2&i||(t&&(t=i===0||!!(32&i)&&!(64&i||!(16&i))),n=t?Ie(n,-12293&(34|i)):Cc(n,qh,4&i?Wh:e,!0,!0)),n}return n.X===Ho?(e=n.s,n=2&(i=le(e))?n:Zu(n,e,i,!0)):n instanceof zn&&!(2&n.N)&&(e=Br(n.Y(qh)),n=new zn(e,n.U,n.S,n.Z)),n}}function Zu(n,t,e,i){return n=n.constructor,lc=t=L0(t,e,i),t=new n(t),lc=void 0,t}function L0(n,t,e){const i=e||2&t?Wh:AM,s=!!(32&t);return n=(function(r,o,a){const c=Tn(r);var l=c.length;const h=256&o?c[l-1]:void 0;for(l+=h?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(h){o=c[o]={};for(const u in h)o[u]=a(h[u])}return w0(c,r),c})(n,t,(r=>qh(r,s,i))),ku(n,32|(e?2:0)),n}function Rc(n){const t=n.s,e=le(t);return 2&e?Zu(n,t,e,!1):n}function I0(n,t,e,i){return!(4&t)||e!=null}function os(n,t){return yi(n=n.s,le(n),t)}function vp(n,t,e,i){if(!(0>(t=i+(+!!(512&t)-1))||t>=n.length||t>=e))return n[t]}function yi(n,t,e,i){if(e===-1)return null;const s=b0(t);if(!(e>=s)){var r=n.length;return i&&256&t&&(i=n[r-1][e])!=null?(vp(n,t,s,e)&&Dl!=null&&(4<=(t=(n=RM??(RM={}))[Dl]||0)||(n[Dl]=t+1,PM())),i):vp(n,t,s,e)}return 256&t?n[n.length-1][e]:void 0}function xe(n,t,e,i){const s=n.s;let r=le(s);return xi(r),be(s,r,t,e,i),n}function be(n,t,e,i,s){const r=b0(t);if(e>=r||s){let o=t;if(256&t)s=n[n.length-1];else{if(i==null)return o;s=n[r+(+!!(512&t)-1)]={},o|=256}return s[e]=i,e<r&&(n[e+(+!!(512&t)-1)]=void 0),o!==t&&Ie(n,o),o}return n[e+(+!!(512&t)-1)]=i,256&t&&e in(n=n[n.length-1])&&delete n[e],t}function Vr(n,t,e,i,s){var r=2&t;let o=yi(n,t,e,s);Array.isArray(o)||(o=Vu);const a=!(2&i);i=!(1&i);const c=!!(32&t);let l=Ue(o);return l!==0||!c||r||a?1&l||(l|=1,Ie(o,l)):(l|=33,Ie(o,l)),r?(n=!1,2&l||(Br(o),n=!!(4&l)),(i||n)&&Object.freeze(o)):(r=!!(2&l)||!!(2048&l),i&&r?(o=Tn(o),i=1,c&&!a&&(i|=32),Ie(o,i),be(n,t,e,o,s)):a&&32&l&&!r&&rc(o,32)),o}function Ha(n,t){n=n.s;let e=le(n);const i=yi(n,e,t),s=hs(i);return s!=null&&s!==i&&be(n,e,t,s),s}function D0(n){n=n.s;let t=le(n);const e=yi(n,t,1),i=Hu(e,!0,!!(34&t));return i!=null&&i!==e&&be(n,t,1,i),i}function ur(n,t,e){const i=n.s;let s=le(i);const r=2&s?1:2;let o=U0(i,s,t);var a=Ue(o);if(I0(n,a,void 0)){(4&a||Object.isFrozen(o))&&(o=Tn(o),a=Fs(a,s),s=be(i,s,t,o));let c=n=0;for(;n<o.length;n++){const l=e(o[n]);l!=null&&(o[c++]=l)}c<n&&(o.length=c),a=tn(a=N0(a,s),20,!0),a=tn(a,4096,!1),a=tn(a,8192,!1),Ie(o,a),2&a&&Object.freeze(o)}return xo(a)||(e=a,(a=(n=r===1||r===4&&!!(32&a))?tn(a,2,!0):wr(a,s,!1))!==e&&Ie(o,a),n&&Object.freeze(o)),r===2&&xo(a)&&(o=Tn(o),a=wr(a=Fs(a,s),s,!1),Ie(o,a),be(i,s,t,o)),o}function U0(n,t,e){return n=yi(n,t,e),Array.isArray(n)?n:Vu}function N0(n,t){return n===0&&(n=Fs(n,t)),tn(n,1,!0)}function xo(n){return!!(2&n)&&!!(4&n)||!!(2048&n)}function F0(n){n=Tn(n);for(let t=0;t<n.length;t++){const e=n[t]=Tn(n[t]);Array.isArray(e[1])&&(e[1]=Br(e[1]))}return n}function uc(n,t,e){{const a=n.s;let c=le(a);if(xi(c),e==null)be(a,c,t);else{var i,s=Ue(e),r=s,o=!!(2&s)||Object.isFrozen(e);if((i=!o)&&(i=!1),I0(n,s))for(s=21,o&&(e=Tn(e),r=0,s=wr(s=Fs(s,c),c,!0)),n=0;n<e.length;n++)e[n]=Wo(e[n]);i&&(e=Tn(e),r=0,s=wr(s=Fs(s,c),c,!0)),s!==r&&Ie(e,s),be(a,c,t,e)}}}function Yh(n,t,e,i){n=n.s;let s=le(n);xi(s),be(n,s,t,(i==="0"?Number(e)===0:e===i)?void 0:e)}function Xo(n,t,e,i){const s=le(n);xi(s),n=Vr(n,s,t,2),i=e(i,!!(4&(t=Ue(n)))&&!!(4096&t)),n.push(i)}function GM(n){return n}function Fl(n,t){return $u(n=n.s,le(n),yg)===t?t:-1}function $u(n,t,e){let i=0;for(let s=0;s<e.length;s++){const r=e[s];yi(n,t,r)!=null&&(i!==0&&(t=be(n,t,i)),i=r)}return i}function Ju(n,t,e,i){let s=le(n);xi(s);const r=yi(n,s,e,i);let o;if(r!=null&&r.X===Ho)return(t=Rc(r))!==r&&be(n,s,e,t,i),t.s;if(Array.isArray(r)){const a=Ue(r);o=2&a?L0(r,a,!1):r,o=Is(o,t)}else o=Is(void 0,t);return o!==r&&be(n,s,e,o,i),o}function O0(n,t,e,i){n=n.s;let s=le(n);const r=yi(n,s,e,i);return(t=qu(r,t,!1,s))!==r&&t!=null&&be(n,s,e,t,i),t}function ne(n,t,e,i=!1){if((t=O0(n,t,e,i))==null)return t;n=n.s;let s=le(n);if(!(2&s)){const r=Rc(t);r!==t&&be(n,s,e,t=r,i)}return t}function B0(n,t,e,i,s,r){var o=2,a=!!(2&t);o=a?1:o,s=!!s,r&&(r=!a),a=U0(n,t,i);var c=Ue(a);const l=!!(4&c);if(!l){var h=a,u=t;const f=!!(2&(c=N0(c,t)));f&&(u=tn(u,2,!0));let p=!f,g=!0,_=0,m=0;for(;_<h.length;_++){const d=qu(h[_],e,!1,u);if(d instanceof e){if(!f){const E=!!(2&Ue(d.s));p&&(p=!E),g&&(g=E)}h[m++]=d}}m<_&&(h.length=m),c=tn(c,4,!0),c=tn(c,16,g),c=tn(c,8,p),Ie(h,c),f&&Object.freeze(h)}if(r&&!(8&c||!a.length&&(o===1||o===4&&32&c))){for(xo(c)&&(a=Tn(a),c=Fs(c,t),t=be(n,t,i,a)),e=a,r=c,h=0;h<e.length;h++)(c=e[h])!==(u=Rc(c))&&(e[h]=u);r=tn(r,8,!0),r=tn(r,16,!e.length),Ie(e,r),c=r}return xo(c)||(e=c,(c=(r=o===1||o===4&&!!(32&c))?tn(c,!a.length||16&c&&(!l||32&c)?2:2048,!0):wr(c,t,s))!==e&&Ie(a,c),r&&Object.freeze(a)),o===2&&xo(c)&&(a=Tn(a),c=wr(c=Fs(c,t),t,s),Ie(a,c),be(n,t,i,a)),a}function ki(n,t,e){n=n.s;const i=le(n);return B0(n,i,t,e,!1,!(2&i))}function Dt(n,t,e,i,s){return i==null&&(i=void 0),xe(n,e,i,s)}function yo(n,t,e,i){i==null&&(i=void 0),n=n.s;let s=le(n);xi(s),(e=$u(n,s,e))&&e!==t&&i!=null&&(s=be(n,s,e)),be(n,s,t,i)}function Fs(n,t){return n=tn(n,2,!!(2&t)),n=tn(n,32,!0),tn(n,2048,!1)}function wr(n,t,e){return 32&t&&e||(n=tn(n,32,!1)),n}function fc(n,t,e,i){n=n.s;const s=le(n);xi(s),t=B0(n,s,e,t,!0),e=i??new e,t.push(e),2&Ue(e.s)?rc(t,8):rc(t,16)}function Bn(n,t){return zr(os(n,t))}function Jn(n,t){return n??t}function Fe(n,t){return Jn(Ha(n,t),0)}function mi(n,t){return Jn(Ls(os(n,t)),"")}function Uo(n,t,e){if(e!=null&&typeof e!="boolean")throw n=typeof e,Error(`Expected boolean but got ${n!="object"?n:e?Array.isArray(e)?"array":n:"null"}: ${e}`);xe(n,t,e)}function gi(n,t,e){if(e!=null){if(typeof e!="number"||!Number.isFinite(e))throw Xh("int32");e|=0}xe(n,t,e)}function wt(n,t,e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);xe(n,t,e)}function Qn(n,t,e){t.g?t.m(n,t.g,t.h,e,!0):t.m(n,t.h,e,!0)}zn.prototype.toJSON=void 0,zn.prototype.Ja=T0;var Et=class{constructor(n,t){this.s=P0(n,t)}toJSON(){return z0(this,Cc(this.s,Ku,void 0,void 0,!1),!0)}l(){var n=jS;return n.g?n.l(this,n.g,n.h,!0):n.l(this,n.h,n.defaultValue,!0)}clone(){const n=this.s;return Zu(this,n,le(n),!1)}P(){return!!(2&Ue(this.s))}};function z0(n,t,e){var i=gM?void 0:n.constructor.B;const s=le(e?n.s:t);if(!(n=t.length))return t;let r,o;if(Gu(e=t[n-1])){t:{var a=e;let h={},u=!1;for(var c in a){let f=a[c];if(Array.isArray(f)){let p=f;(oc(f,i,+c)||fp(f)&&f.size===0)&&(f=null),f!=p&&(u=!0)}f!=null?h[c]=f:u=!0}if(u){for(var l in h){a=h;break t}a=null}}a!=e&&(r=!0),n--}for(c=+!!(512&s)-1;0<n&&(e=t[l=n-1],l-=c,e==null||oc(e,i,l)||fp(e)&&e.size===0);n--)o=!0;return(r||o)&&(t=Array.prototype.slice.call(t,0,n),a&&t.push(a)),t}function k0(n){return Array.isArray(n)?n[0]instanceof Or?n:[QM,n]:[n,void 0]}function Gr(n,t){if(Array.isArray(t)){var e=Ue(t);if(4&e)return t;for(var i=0,s=0;i<t.length;i++){const r=n(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),Ie(t,-12289&(5|e)),2&e&&Object.freeze(t),t}}Et.prototype.X=Ho,Et.prototype.toString=function(){return z0(this,this.s,!1).toString()};const xp=Symbol();function Qu(n){let t=n[xp];if(!t){const e=G0(n),i=ef(n),s=i.l;t=s?(r,o)=>s(r,o,i):(r,o)=>{for(;S0(o)&&o.h!=4;){var a=o.m,c=i[a];if(!c){var l=i.ea;l&&(l=l[a])&&(c=i[a]=HM(l))}c&&c(o,r,a)||(a=(c=o).l,Ga(c),c.ia?c=void 0:(l=c.g.g-a,c.g.g=a,c=M0(c.g,l)),a=r,c&&(es||(es=Symbol()),(l=a[es])?l.push(c):a[es]=[c]))}e===V0||e===Wa||e.j||(r[CM||(CM=Symbol())]=e)},n[xp]=t}return t}function HM(n){const t=(n=k0(n))[0].g;if(n=n[1]){const e=Qu(n),i=ef(n).T;return(s,r,o)=>t(s,r,o,i,e)}return t}class Ol{}let V0,Wa;const Mo=Symbol();function WM(n,t,e){const i=e[1];let s;if(i){const r=i[Mo];s=r?r.T:hc(i[0]),n[t]=r??i}s&&s===Yu?(n.g||(n.g=new Set)).add(t):e[0]&&(n.h||(n.h=new Set)).add(t)}function yp(n,t){return[n.l,!t||0<t[0]?void 0:t]}function G0(n){var t=n[Mo];if(t)return t;if(!(t=tf(n,n[Mo]=new Ol,yp,yp,WM)).ea&&!t.h&&!t.g){let e=!0;for(let i in t)isNaN(i)||(e=!1);e?(hc(n[0])===Yu?Wa?t=Wa:((t=new Ol).T=hc(!0),t=Wa=t):t=V0||(V0=new Ol),t=n[Mo]=t):t.j=!0}return t}function XM(n,t,e){n[t]=e}function tf(n,t,e,i,s=XM){t.T=hc(n[0]);let r=0;var o=n[++r];o&&o.constructor===Object&&(t.ea=o,typeof(o=n[++r])=="function"&&(t.l=o,t.m=n[++r],o=n[++r]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var c=0;c<o.length;c++)a[o[c]]=o;o=n[++r]}for(c=1;o!==void 0;){let u;typeof o=="number"&&(c+=o,o=n[++r]);var l=void 0;if(o instanceof Or?u=o:(u=tS,r--),u.pa){o=n[++r],l=n;var h=r;typeof o=="function"&&(o=o(),l[h]=o),l=o}for(h=c+1,typeof(o=n[++r])=="number"&&0>o&&(h-=o,o=n[++r]);c<h;c++){const f=a[c];s(t,c,l?i(u,l,f):e(u,f))}}return t}const Mp=Symbol();function H0(n){let t=n[Mp];if(!t){const e=Pc(n);t=(i,s)=>X0(i,s,e),n[Mp]=t}return t}const jh=Symbol();function qM(n){return n.h}function YM(n,t){let e,i;const s=n.h;return(r,o,a)=>s(r,o,a,i||(i=Pc(t).T),e||(e=H0(t)))}function Pc(n){let t=n[jh];return t||(t=tf(n,n[jh]={},qM,YM),W0(n),t)}const Kh=Symbol();function jM(n,t){const e=n.g;return t?(i,s,r)=>e(i,s,r,t):e}function KM(n,t,e){const i=n.g;let s,r;return(o,a,c)=>i(o,a,c,r||(r=ef(t).T),s||(s=Qu(t)),e)}function ef(n){let t=n[Kh];return t||(G0(n),t=tf(n,n[Kh]={},jM,KM),W0(n),t)}function W0(n){Kh in n&&Mo in n&&jh in n&&(n.length=0)}function Sp(n,t){var e=n[t];if(e)return e;if((e=n.ea)&&(e=e[t])){var i=(e=k0(e))[0].h;if(e=e[1]){const s=H0(e),r=Pc(e).T;e=(e=n.m)?e(r,s):(o,a,c)=>i(o,a,c,r,s)}else e=i;return n[t]=e}}function X0(n,t,e){for(var i=le(n),s=+!!(512&i)-1,r=n.length,o=512&i?1:0,a=r+(256&i?-1:0);o<a;o++){const c=n[o];if(c==null)continue;const l=o-s,h=Sp(e,l);h&&h(t,c,l)}if(256&i){i=n[r-1];for(let c in i)s=+c,Number.isNaN(s)||(r=i[c])!=null&&(a=Sp(e,s))&&a(t,r,s)}if(n=es?n[es]:void 0)for(Tr(t,t.g.end()),e=0;e<n.length;e++)Tr(t,Au(n[e])||Sc())}function gn(n,t){return new Or(n,t,!1,!1)}function Hr(n,t){return new Or(n,t,!0,!1)}function Lc(n,t){return new Or(n,t,!1,!0)}function _n(n,t,e){be(n,le(n),t,e)}var ZM=Lc((function(n,t,e,i,s){return n.h===2&&(n=Vo(n,Is([void 0,void 0],i),s),xi(i=le(t)),(s=yi(t,i,e))instanceof zn?(2&s.N)!=0?((s=s.Y()).push(n),be(t,i,e,s)):s.Oa(n):Array.isArray(s)?(2&Ue(s)&&be(t,i,e,s=F0(s)),s.push(n)):be(t,i,e,[n]),!0)}),(function(n,t,e,i,s){if(t instanceof zn)t.forEach(((r,o)=>{Hh(n,e,Is([o,r],i),s)}));else if(Array.isArray(t))for(let r=0;r<t.length;r++){const o=t[r];Array.isArray(o)&&Hh(n,e,Is(o,i),s)}}));function q0(n,t,e){t:if(t!=null){if(Ac(t)){if(typeof t=="string"){t=Xu(t);break t}if(typeof t=="number"){t=Wu(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&lp(t),t!=null&&(kn(n,e,0),typeof t=="number"?(n=n.g,Rs(t),sc(n,Ee,Ve)):(e=lp(t),sc(n.g,e.h,e.g))))}function Y0(n,t,e){(t=zr(t))!=null&&t!=null&&(kn(n,e,0),Tc(n.g,t))}function j0(n,t,e){(t=C0(t))!=null&&(kn(n,e,0),n.g.g.push(t?1:0))}function K0(n,t,e){(t=Ls(t))!=null&&wc(n,e,c0(t))}function Ic(n,t,e,i,s){Hh(n,e,t instanceof Et?t.s:Array.isArray(t)?Is(t,i):void 0,s)}function Z0(n,t,e){(t=t==null||typeof t=="string"||ko(t)||t instanceof Fi?t:void 0)!=null&&wc(n,e,Ru(t).buffer)}function $0(n,t,e){return(n.h===5||n.h===2)&&(t=Vr(t,le(t),e,2,!1),n.h==2?bc(n,Gh,t):t.push(Gh(n.g)),!0)}var Ge,Oi=gn((function(n,t,e){if(n.h!==1)return!1;var i=n.g;n=Vh(i);const s=Vh(i);i=2*(s>>31)+1;const r=s>>>20&2047;return n=4294967296*(1048575&s)+n,_n(t,e,r==2047?n?NaN:1/0*i:r==0?i*Math.pow(2,-1074)*n:i*Math.pow(2,r-1075)*(n+4503599627370496)),!0}),(function(n,t,e){(t=hs(t))!=null&&(kn(n,e,1),n=n.g,(e=v0||(v0=new DataView(new ArrayBuffer(8)))).setFloat64(0,+t,!0),Ee=e.getUint32(0,!0),Ve=e.getUint32(4,!0),Do(n,Ee),Do(n,Ve))})),qe=gn((function(n,t,e){return n.h===5&&(_n(t,e,Gh(n.g)),!0)}),(function(n,t,e){(t=hs(t))!=null&&(kn(n,e,5),n=n.g,Lu(t),Do(n,Ee))})),$M=Hr($0,(function(n,t,e){if((t=Gr(hs,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&(kn(i,s,5),i=i.g,Lu(r),Do(i,Ee))}})),nf=Hr($0,(function(n,t,e){if((t=Gr(hs,t))!=null&&t.length){kn(n,e,2),Go(n.g,4*t.length);for(let i=0;i<t.length;i++)e=n.g,Lu(t[i]),Do(e,Ee)}})),as=gn((function(n,t,e){return n.h===0&&(_n(t,e,Uu(n.g,Iu)),!0)}),q0),Bl=gn((function(n,t,e){return n.h===0&&(_n(t,e,(n=Uu(n.g,Iu))===0?void 0:n),!0)}),q0),JM=gn((function(n,t,e){return n.h===0&&(_n(t,e,Uu(n.g,kh)),!0)}),(function(n,t,e){t:if(t!=null){if(Ac(t)){if(typeof t=="string"){var i=Math.trunc(Number(t));Number.isSafeInteger(i)&&0<=i?t=String(i):((i=t.indexOf("."))!==-1&&(t=t.substring(0,i)),pp(t)||(Ec(t),t=ic(Ee,Ve)));break t}if(typeof t=="number"){t=0<=(t=Math.trunc(t))&&Number.isSafeInteger(t)?t:(function(s){if(0>s){Rs(s);const r=ic(Ee,Ve);return s=Number(r),Number.isSafeInteger(s)?s:r}return pp(String(s))?s:(Rs(s),kh(Ee,Ve))})(t);break t}}t=void 0}t!=null&&(typeof t=="string"&&ap(t),t!=null&&(kn(n,e,0),typeof t=="number"?(n=n.g,Rs(t),sc(n,Ee,Ve)):(e=ap(t),sc(n.g,e.h,e.g))))})),Ne=gn((function(n,t,e){return n.h===0&&(_n(t,e,ss(n.g)),!0)}),Y0),Dc=Hr((function(n,t,e){return(n.h===0||n.h===2)&&(t=Vr(t,le(t),e,2,!1),n.h==2?bc(n,ss,t):t.push(ss(n.g)),!0)}),(function(n,t,e){if((t=Gr(zr,t))!=null&&t.length){e=Ou(n,e);for(let i=0;i<t.length;i++)Tc(n.g,t[i]);Bu(n,e)}})),Ar=gn((function(n,t,e){return n.h===0&&(_n(t,e,(n=ss(n.g))===0?void 0:n),!0)}),Y0),Oe=gn((function(n,t,e){return n.h===0&&(_n(t,e,Nu(n.g)),!0)}),j0),So=gn((function(n,t,e){return n.h===0&&(_n(t,e,(n=Nu(n.g))===!1?void 0:n),!0)}),j0),rn=Hr((function(n,t,e){return n.h===2&&(Xo(t,e,GM,n=Fu(n)),!0)}),(function(n,t,e){if((t=Gr(Ls,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&wc(i,s,c0(r))}})),cs=gn((function(n,t,e){return n.h===2&&(_n(t,e,(n=Fu(n))===""?void 0:n),!0)}),K0),me=gn((function(n,t,e){return n.h===2&&(_n(t,e,Fu(n)),!0)}),K0),QM=Lc((function(n,t,e,i,s){return n.h===2&&(Vo(n,Ju(t,i,e,!0),s),!0)}),Ic),tS=Lc((function(n,t,e,i,s){return n.h===2&&(Vo(n,Ju(t,i,e),s),!0)}),Ic);Ge=new Or((function(n,t,e,i,s){if(n.h!==2)return!1;i=Is(void 0,i);let r=le(t);xi(r);let o=Vr(t,r,e,3);return r=le(t),4&Ue(o)&&(o=Tn(o),Ie(o,-2079&(1|Ue(o))),be(t,r,e,o)),o.push(i),Vo(n,i,s),!0}),(function(n,t,e,i,s){if(Array.isArray(t))for(let r=0;r<t.length;r++)Ic(n,t[r],e,i,s)}),!0,!0);var ge=Lc((function(n,t,e,i,s,r){if(n.h!==2)return!1;let o=le(t);return xi(o),(r=$u(t,o,r))&&e!==r&&be(t,o,r),Vo(n,t=Ju(t,i,e),s),!0}),Ic),J0=gn((function(n,t,e){return n.h===2&&(_n(t,e,E0(n)),!0)}),Z0),eS=Hr((function(n,t,e){return(n.h===0||n.h===2)&&(t=Vr(t,le(t),e,2,!1),n.h==2?bc(n,rs,t):t.push(rs(n.g)),!0)}),(function(n,t,e){if((t=Gr(IM,t))!=null)for(let o=0;o<t.length;o++){var i=n,s=e,r=t[o];r!=null&&(kn(i,s,0),Go(i.g,r))}})),_i=gn((function(n,t,e){return n.h===0&&(_n(t,e,ss(n.g)),!0)}),(function(n,t,e){(t=zr(t))!=null&&(t=parseInt(t,10),kn(n,e,0),Tc(n.g,t))})),nS=Hr((function(n,t,e){return(n.h===0||n.h===2)&&(t=Vr(t,le(t),e,2,!1),n.h==2?bc(n,bM,t):t.push(ss(n.g)),!0)}),(function(n,t,e){if((t=Gr(zr,t))!=null&&t.length){e=Ou(n,e);for(let i=0;i<t.length;i++)Tc(n.g,t[i]);Bu(n,e)}}));class iS{constructor(t,e){this.h=t,this.g=e,this.l=ne,this.m=Dt,this.defaultValue=void 0}}function ti(n,t){return new iS(n,t)}function us(n,t){return(e,i)=>{if(Ra.length){const r=Ra.pop();r.o(i),Il(r.g,e,i),e=r}else e=new class{constructor(r,o){if(op.length){const a=op.pop();Il(a,r,o),r=a}else r=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,Il(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(r,o);this.g=r,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:r=!1}={}){this.ia=r}}(e,i);try{const r=new n,o=r.s;Qu(t)(o,e);var s=r}finally{e.g.clear(),e.m=-1,e.h=-1,100>Ra.length&&Ra.push(e)}return s}}function Uc(n){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};X0(this.s,t,Pc(n)),Tr(t,t.g.end());const e=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];e.set(a,r),r+=a.length}return t.l=[e],e}}var Ep=class extends Et{constructor(n){super(n)}},Q0=[0,cs,gn((function(n,t,e){return n.h===2&&(_n(t,e,(n=E0(n))===Ns()?void 0:n),!0)}),(function(n,t,e){if(t!=null){if(t instanceof Et){const i=t.Qa;return void(i&&(t=i(t),t!=null&&wc(n,e,Ru(t).buffer)))}if(Array.isArray(t))return}Z0(n,t,e)}))],sS=[0,me],tg=[0,Ne,_i,Oe,-1,Dc,_i,-1],rS=[0,Oe,-1],eg=class extends Et{constructor(){super()}};eg.B=[6];var ng=[0,Oe,me,Oe,_i,-1,nS,me,-1,rS,_i],ig=[0,me,-2],bp=class extends Et{constructor(){super()}},sg=[0],rg=[0,Ne,Oe,-4],wn=class extends Et{constructor(n){super(n,2)}},Ae={},oS=[-2,Ae,Oe];Ae[336783863]=[0,me,Oe,-1,Ne,[0,[1,2,3,4,5,6],ge,sg,ge,ng,ge,ig,ge,rg,ge,tg,ge,[0,me]],sS,Oe,[0,[1,3],[2,4],ge,[0,Dc],-1,ge,[0,rn],-1,Ge,[0,me,-1]],me];var aS=[0,cs,So],og=[0,Bl,-1,So,-3,Bl,Dc,cs,Ar,Bl,-1,So,Ar,So,-2,cs],qo=[-1,{}],ag=[0,me,1,qo],cg=[0,me,rn,qo];function An(n,t){Yh(n,2,kr(t),"")}function ye(n,t){Xo(n.s,3,Wo,t)}function Zt(n,t){Xo(n.s,4,Wo,t)}var on=class extends Et{constructor(n){super(n,500)}o(n){return Dt(this,0,7,n)}};on.B=[3,4,5,6,8,13,17,1005];var cS=[-500,cs,-1,rn,-3,oS,Ge,Q0,Ar,-1,ag,cg,Ge,aS,cs,og,Ar,rn,987,rn],lS=[0,cs,-1,qo],hS=[-500,me,-1,[-1,{}],998,me],uS=[-500,me,rn,-1,[-2,{},Oe],997,rn,-1],fS=[-500,me,rn,qo,998,rn];function Cn(n,t){fc(n,1,on,t)}function Te(n,t){Xo(n.s,10,Wo,t)}function re(n,t){Xo(n.s,15,Wo,t)}var hn=class extends Et{constructor(n){super(n,500)}o(n){return Dt(this,0,1001,n)}};hn.B=[1,6,7,9,10,15,16,17,14,1002];var lg=[-500,Ge,cS,4,Ge,hS,Ge,uS,Ar,Ge,fS,rn,Ar,ag,cg,Ge,lS,rn,-2,og,cs,-1,So,979,qo,Ge,Q0],dS=us(hn,lg);hn.prototype.g=Uc(lg);var pS=[0,Ge,[0,Ne,-2]],mS=class extends Et{constructor(n){super(n)}},gS=[0,Ne,qe,me,-1],sf=class extends Et{constructor(n){super(n)}g(){return ki(this,mS,1)}};sf.B=[1];var hg=[0,Ge,gS],Nc=us(sf,hg),_S=[0,Ne,qe],vS=[0,Ne,-1,pS],xS=class extends Et{constructor(n){super(n)}},yS=[0,Ne,-3],MS=[0,qe,-3],SS=class extends Et{constructor(n){super(n)}},ES=[0,qe,-1,me,qe],Xa=class extends Et{constructor(n){super(n)}h(){return ne(this,xS,2)}g(){return ki(this,SS,5)}};Xa.B=[5];var bS=[0,_i,yS,MS,vS,Ge,ES],ug=class extends Et{constructor(n){super(n)}};ug.B=[1,2,3,8,9];var fg=us(ug,[0,rn,Dc,nf,bS,me,-1,as,Ge,_S,rn,as]),dg=class extends Et{constructor(n){super(n)}},TS=[0,qe,-4],pg=class extends Et{constructor(n){super(n)}};pg.B=[1];var gr=us(pg,[0,Ge,TS]),mg=class extends Et{constructor(n){super(n)}},wS=[0,qe,-4],gg=class extends Et{constructor(n){super(n)}};gg.B=[1];var Yo=us(gg,[0,Ge,wS]),_g=class extends Et{constructor(n){super(n)}};_g.B=[3];var AS=[0,Ne,-1,nf,_i],vg=class extends Et{constructor(){super()}};vg.prototype.g=Uc([0,qe,-4,as]);var CS=class extends Et{constructor(n){super(n)}},RS=[0,1,Ne,me,hg],xg=class extends Et{constructor(n){super(n)}};xg.B=[1];var PS=us(xg,[0,Ge,RS,as]),Zh=class extends Et{constructor(n){super(n)}};Zh.B=[1];var LS=class extends Et{constructor(n){super(n)}qa(){const n=D0(this);return n??Ns()}},IS=class extends Et{constructor(n){super(n)}},yg=[1,2],DS=[0,yg,ge,[0,nf],ge,[0,J0],Ne,me],Mg=class extends Et{constructor(n){super(n)}};Mg.B=[1];var US=us(Mg,[0,Ge,DS,as]),Fc=class extends Et{constructor(n){super(n)}};Fc.B=[4,5];var Sg=[0,me,Ne,qe,rn,-1],Tp=class extends Et{constructor(n){super(n)}},NS=[0,Oe,-1],wp=class extends Et{constructor(n){super(n)}},qa=[1,2,3,4,5],dc=class extends Et{constructor(n){super(n)}g(){return D0(this)!=null}h(){return Ls(os(this,2))!=null}},Eg=[0,J0,me,[0,Ne,as,-1],[0,JM,as]],Ce=class extends Et{constructor(n){super(n)}g(){return C0(os(this,2))??!1}},Be=[0,Eg,Oe,[0,qa,ge,rg,ge,ng,ge,tg,ge,sg,ge,ig],_i],Oc=class extends Et{constructor(n){super(n)}},rf=[0,Be,qe,-1,Ne],FS=ti(502141897,Oc);Ae[502141897]=rf;var bg=[0,Eg];Ae[512499200]=bg;var Tg=[0,bg];Ae[515723506]=Tg;var OS=us(class extends Et{constructor(n){super(n)}},[0,[0,_i,-1,$M,eS],AS]),wg=[0,Be];Ae[508981768]=wg;var Ag=class extends Et{constructor(n){super(n)}},of=[0,Be,qe,wg,Oe],Cg=class extends Et{constructor(n){super(n)}},Rg=[0,Be,rf,of,qe,Tg];Ae[508968149]=of;var BS=ti(508968150,Cg);Ae[508968150]=Rg;var Pg=class extends Et{constructor(n){super(n)}},zS=ti(513916220,Pg);Ae[513916220]=[0,Be,Rg,Ne];var ar=class extends Et{constructor(n){super(n)}h(){return ne(this,Fc,2)}g(){xe(this,2)}},Lg=[0,Be,Sg];Ae[478825465]=Lg;var Ig=[0,Be];Ae[478825422]=Ig;var kS=class extends Et{constructor(n){super(n)}},Dg=[0,Be,Ig,Lg,-1],Ug=class extends Et{constructor(n){super(n)}},Ng=[0,Be,qe,Ne],af=class extends Et{constructor(n){super(n)}},cf=[0,Be,qe],lf=class extends Et{constructor(n){super(n)}},Fg=[0,Be,Ng,cf,qe],Og=class extends Et{constructor(n){super(n)}},VS=[0,Be,Fg,Dg];Ae[463370452]=Dg,Ae[464864288]=Ng,Ae[474472470]=cf;var GS=ti(462713202,lf);Ae[462713202]=Fg;var HS=ti(479097054,Og);Ae[479097054]=VS;var WS=class extends Et{constructor(n){super(n)}},XS=[0,Be],Bg=class extends Et{constructor(n){super(n)}},hf=[0,Be,qe,-1,Ne];Ae[514774813]=hf;var zg=class extends Et{constructor(n){super(n)}},uf=[0,Be,qe,Oe];Ae[518928384]=uf;var kg=class extends Et{constructor(){super()}};kg.prototype.g=Uc([0,Be,cf,XS,rf,of,hf,uf]);var Vg=class extends Et{constructor(n){super(n)}},qS=ti(456383383,Vg);Ae[456383383]=[0,Be,Sg];var Gg=class extends Et{constructor(n){super(n)}},YS=ti(476348187,Gg);Ae[476348187]=[0,Be,NS];var Hg=class extends Et{constructor(n){super(n)}},Wg=[0,_i,-1],$h=class extends Et{constructor(n){super(n)}};$h.B=[3];var jS=ti(458105876,class extends Et{constructor(n){super(n)}g(){var n=this.s;const t=le(n);var e=2&t;return n=(function(i,s,r){var o=$h;const a=2&s;let c=!1;if(r==null){if(a)return _p();r=[]}else if(r.constructor===zn){if((2&r.N)==0||a)return r;r=r.Y()}else Array.isArray(r)?c=!!(2&Ue(r)):r=[];if(a){if(!r.length)return _p();c||(c=!0,Br(r))}else c&&(c=!1,r=F0(r));return c||(64&Ue(r)?rc(r,32):32&s&&ku(r,32)),be(i,s,2,o=new zn(r,o,DM,void 0),!1),o})(n,t,yi(n,t,2)),n==null||!e&&$h&&(n.ta=!0),e=n}});Ae[458105876]=[0,Wg,ZM,[!0,as,[0,me,-1,rn]]];var ff=class extends Et{constructor(n){super(n)}},Xg=ti(458105758,ff);Ae[458105758]=[0,Be,me,Wg];var df=class extends Et{constructor(n){super(n)}};df.B=[5,6];var KS=ti(443442058,df);Ae[443442058]=[0,Be,me,Ne,qe,rn,-1];var qg=class extends Et{constructor(n){super(n)}},ZS=ti(516587230,qg);function Jh(n,t){return t=t?t.clone():new Fc,n.displayNamesLocale!==void 0?xe(t,1,kr(n.displayNamesLocale)):n.displayNamesLocale===void 0&&xe(t,1),n.maxResults!==void 0?gi(t,2,n.maxResults):"maxResults"in n&&xe(t,2),n.scoreThreshold!==void 0?wt(t,3,n.scoreThreshold):"scoreThreshold"in n&&xe(t,3),n.categoryAllowlist!==void 0?uc(t,4,n.categoryAllowlist):"categoryAllowlist"in n&&xe(t,4),n.categoryDenylist!==void 0?uc(t,5,n.categoryDenylist):"categoryDenylist"in n&&xe(t,5),t}function pf(n,t=-1,e=""){return{categories:n.map((i=>({index:Jn(Bn(i,1),0)??-1,score:Fe(i,2)??0,categoryName:mi(i,3)??"",displayName:mi(i,4)??""}))),headIndex:t,headName:e}}function Yg(n){var o,a;var t=ur(n,3,hs),e=ur(n,2,zr),i=ur(n,1,Ls),s=ur(n,9,Ls);const r={categories:[],keypoints:[]};for(let c=0;c<t.length;c++)r.categories.push({score:t[c],index:e[c]??-1,categoryName:i[c]??"",displayName:s[c]??""});if((t=(o=ne(n,Xa,4))==null?void 0:o.h())&&(r.boundingBox={originX:Bn(t,1)??0,originY:Bn(t,2)??0,width:Bn(t,3)??0,height:Bn(t,4)??0,angle:0}),(a=ne(n,Xa,4))==null?void 0:a.g().length)for(const c of ne(n,Xa,4).g())r.keypoints.push({x:Ha(c,1)??0,y:Ha(c,2)??0,score:Ha(c,4)??0,label:Ls(os(c,3))??""});return r}function Bc(n){const t=[];for(const e of ki(n,mg,1))t.push({x:Fe(e,1)??0,y:Fe(e,2)??0,z:Fe(e,3)??0,visibility:Fe(e,4)??0});return t}function Eo(n){const t=[];for(const e of ki(n,dg,1))t.push({x:Fe(e,1)??0,y:Fe(e,2)??0,z:Fe(e,3)??0,visibility:Fe(e,4)??0});return t}function Ap(n){return Array.from(n,(t=>127<t?t-256:t))}function Cp(n,t){if(n.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${t.length}).`);let e=0,i=0,s=0;for(let r=0;r<n.length;r++)e+=n[r]*t[r],i+=n[r]*n[r],s+=t[r]*t[r];if(0>=i||0>=s)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(i*s)}let Pa;Ae[516587230]=[0,Be,hf,uf,qe];const $S=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function jg(){if(Pa===void 0)try{await WebAssembly.instantiate($S),Pa=!0}catch{Pa=!1}return Pa}async function so(n,t=""){const e=await jg()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${n}_${e}.js`,wasmBinaryPath:`${t}/${n}_${e}.wasm`}}var Es=class{};function Kg(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=n.length&&17<=Number(n[1])))}async function Rp(n){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=n.toString(),t.crossOrigin="anonymous",new Promise(((e,i)=>{t.addEventListener("load",(()=>{e()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}importScripts(n.toString())}function Zg(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function Lt(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=n.i.stringToNewUTF8(t)),n.i._free(t)}function Pp(n,t,e){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(e?n.i._bindTextureToStream(e):n.i._bindTextureToCanvas(),!(e=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=Zg(t);return!n.l||i===n.i.canvas.width&&s===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=s),[i,s]}function Lp(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=n.i.stringToNewUTF8(t[s]);t=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,t>>2),e(t);for(const s of i)n.i._free(s);n.i._free(t)}function ii(n,t,e){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=e}function Zi(n,t,e){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=(s,r,o)=>{r?(e(i,o),i=[]):i.push(s)}}Es.forVisionTasks=function(n){return so("vision",n)},Es.forTextTasks=function(n){return so("text",n)},Es.forGenAiExperimentalTasks=function(n){return so("genai_experimental",n)},Es.forGenAiTasks=function(n){return so("genai",n)},Es.forAudioTasks=function(n){return so("audio",n)},Es.isSimdSupported=function(){return jg()};async function JS(n,t,e,i){return n=await(async(s,r,o,a,c)=>{if(r&&await Rp(r),!self.ModuleFactory||o&&(await Rp(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(n,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&s.endsWith(".data")?e.assetBinaryPath.toString():s}),await n.o(i),n}function zl(n,t){const e=ne(n.baseOptions,dc,1)||new dc;typeof t=="string"?(xe(e,2,kr(t)),xe(e,1)):t instanceof Uint8Array&&(xe(e,1,Hu(t,!1,!1)),xe(e,2)),Dt(n.baseOptions,0,1,e)}function Ip(n){try{const t=n.K.length;if(t===1)throw Error(n.K[0].message);if(1<t)throw Error("Encountered multiple errors: "+n.K.map((e=>e.message)).join(", "))}finally{n.K=[]}}function vt(n,t){n.J=Math.max(n.J,t)}function zc(n,t){n.C=new on,An(n.C,"PassThroughCalculator"),ye(n.C,"free_memory"),Zt(n.C,"free_memory_unused_out"),Te(t,"free_memory"),Cn(t,n.C)}function Cr(n,t){ye(n.C,t),Zt(n.C,t+"_unused_out")}function kc(n){n.g.addBoolToStream(!0,"free_memory",n.J)}var Ya=class{constructor(n){this.g=n,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(n,t=!0){var e,i,s,r,o,a;if(t){const c=n.baseOptions||{};if((e=n.baseOptions)!=null&&e.modelAssetBuffer&&((i=n.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((s=ne(this.baseOptions,dc,1))!=null&&s.g()||(r=ne(this.baseOptions,dc,1))!=null&&r.h()||(o=n.baseOptions)!=null&&o.modelAssetBuffer||(a=n.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(l,h){let u=ne(l.baseOptions,wp,3);if(!u){var f=u=new wp,p=new bp;yo(f,4,qa,p)}"delegate"in h&&(h.delegate==="GPU"?(h=u,f=new eg,yo(h,2,qa,f)):(h=u,f=new bp,yo(h,4,qa,f))),Dt(l.baseOptions,0,3,u)})(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then((l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)})).then((l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),zl(this,"/model.dat"),this.m(),this.L()}));if(c.modelAssetBuffer instanceof Uint8Array)zl(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return(async function(l){const h=[];for(var u=0;;){const{done:f,value:p}=await l.read();if(f)break;h.push(p),u+=p.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(u),u=0;for(const f of h)l.set(f,u),u+=f.length;return l})(c.modelAssetBuffer).then((l=>{zl(this,l),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let n;if(this.g.fa((t=>{n=dS(t)})),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,t){this.g.attachErrorListener(((e,i)=>{this.K.push(Error(i))})),this.g.Ma(),this.g.setGraph(n,t),this.C=void 0,Ip(this)}finishProcessing(){this.g.finishProcessing(),Ip(this)}close(){this.C=void 0,this.g.closeGraph()}};function Bi(n,t){if(!n)throw Error(`Unable to obtain required WebGL resource: ${t}`);return n}Ya.prototype.close=Ya.prototype.close,(function(n,t){n=n.split(".");var e,i=zo;for((n[0]in i)||i.execScript===void 0||i.execScript("var "+n[0]);n.length&&(e=n.shift());)n.length||t===void 0?i=i[e]&&i[e]!==Object.prototype[e]?i[e]:i[e]={}:i[e]=t})("TaskRunner",Ya);class QS{constructor(t,e,i,s){this.g=t,this.h=e,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Dp(n,t,e){const i=n.g;if(e=Bi(i.createShader(e),"Failed to create WebGL shader"),i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(e)}`);return i.attachShader(n.h,e),e}function Up(n,t){const e=n.g,i=Bi(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(i);const s=Bi(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(n.K),e.vertexAttribPointer(n.K,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);const r=Bi(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(n.J),e.vertexAttribPointer(n.J,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new QS(e,i,s,r)}function mf(n,t){if(n.g){if(t!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=t}function gf(n,t,e,i){return mf(n,t),n.h||(n.m(),n.D()),e?(n.v||(n.v=Up(n,!0)),e=n.v):(n.A||(n.A=Up(n,!1)),e=n.A),t.useProgram(n.h),e.bind(),n.l(),n=i(),e.g.bindVertexArray(null),n}function Vc(n,t,e){return mf(n,t),n=Bi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),n}function Gc(n,t,e){mf(n,t),n.u||(n.u=Bi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,n.u),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function _f(n){var t;(t=n.g)==null||t.bindFramebuffer(n.g.FRAMEBUFFER,null)}var vf=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Bi(n.createProgram(),"Failed to create WebGL program"),this.ba=Dp(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.aa=Dp(this,this.H(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.K=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.ba),n.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function Li(n,t){switch(t){case 0:return n.g.find((e=>e instanceof Uint8Array));case 1:return n.g.find((e=>e instanceof Float32Array));case 2:return n.g.find((e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Qh(n){var t=Li(n,1);if(!t){if(t=Li(n,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(n.width*n.height);const i=Rr(n);var e=xf(n);if(Gc(e,i,$g(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){e=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,e);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=e[r]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,t)}n.g.push(t)}return t}function $g(n){let t=Li(n,2);if(!t){const e=Rr(n);t=Qg(n);const i=Qh(n),s=Jg(n);e.texImage2D(e.TEXTURE_2D,0,s,n.width,n.height,0,e.RED,e.FLOAT,i),tu(n)}return t}function Rr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Bi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Jg(n){if(n=Rr(n),!La)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))La=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");La=n.R16F}return La}function xf(n){return n.l||(n.l=new vf),n.l}function Qg(n){const t=Rr(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Li(n,2);return e||(e=Vc(xf(n),t,n.m?t.LINEAR:t.NEAREST),n.g.push(e),n.j=!0),t.bindTexture(t.TEXTURE_2D,e),e}function tu(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var La,je=class{constructor(n,t,e,i,s,r,o){this.g=n,this.m=t,this.j=e,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--Np===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Li(this,0)}la(){return!!Li(this,1)}R(){return!!Li(this,2)}ka(){return(t=Li(n=this,0))||(t=Qh(n),t=new Uint8Array(t.map((e=>255*e))),n.g.push(t)),t;var n,t}ja(){return Qh(this)}O(){return $g(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=Rr(this),s=xf(this);i.activeTexture(i.TEXTURE1),e=Vc(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,e);const r=Jg(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Gc(s,i,e),gf(s,i,!1,(()=>{Qg(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),tu(this)})),_f(s),tu(this)}}n.push(e)}return new je(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Rr(this).deleteTexture(Li(this,2)),Np=-1}};je.prototype.close=je.prototype.close,je.prototype.clone=je.prototype.clone,je.prototype.getAsWebGLTexture=je.prototype.O,je.prototype.getAsFloat32Array=je.prototype.ja,je.prototype.getAsUint8Array=je.prototype.ka,je.prototype.hasWebGLTexture=je.prototype.R,je.prototype.hasFloat32Array=je.prototype.la,je.prototype.hasUint8Array=je.prototype.Ha;var Np=250;function li(n,t){switch(t){case 0:return n.g.find((e=>e instanceof ImageData));case 1:return n.g.find((e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap));case 2:return n.g.find((e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function t1(n){var t=li(n,0);if(!t){t=Pr(n);const e=Hc(n),i=new Uint8Array(n.width*n.height*4);Gc(e,t,ja(n)),t.readPixels(0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,i),_f(e),t=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(t)}return t}function ja(n){let t=li(n,2);if(!t){const e=Pr(n);t=Ka(n);const i=li(n,1)||t1(n);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),lo(n)}return t}function Pr(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return n.h||(n.h=Bi(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function Hc(n){return n.l||(n.l=new vf),n.l}function Ka(n){const t=Pr(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=li(n,2);return e||(e=Vc(Hc(n),t),n.g.push(e),n.m=!0),t.bindTexture(t.TEXTURE_2D,e),e}function lo(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function Fp(n){const t=Pr(n);return gf(Hc(n),t,!0,(()=>(function(e,i){const s=e.canvas;if(s.width===e.width&&s.height===e.height)return i();const r=s.width,o=s.height;return s.width=e.width,s.height=e.height,e=i(),s.width=r,s.height=o,e})(n,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))))}var Ke=class{constructor(n,t,e,i,s,r,o){this.g=n,this.j=t,this.m=e,this.canvas=i,this.l=s,this.width=r,this.height=o,(this.j||this.m)&&--Op===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!li(this,0)}ma(){return!!li(this,1)}R(){return!!li(this,2)}Ea(){return t1(this)}Da(){var n=li(this,1);return n||(ja(this),Ka(this),n=Fp(this),lo(this),this.g.push(n),this.j=!0),n}O(){return ja(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=Pr(this),s=Hc(this);i.activeTexture(i.TEXTURE1),e=Vc(s,i),i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Gc(s,i,e),gf(s,i,!1,(()=>{Ka(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),lo(this)})),_f(s),lo(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);ja(this),Ka(this),e=Fp(this),lo(this)}n.push(e)}return new Ke(n,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&li(this,1).close(),this.m&&Pr(this).deleteTexture(li(this,2)),Op=-1}};Ke.prototype.close=Ke.prototype.close,Ke.prototype.clone=Ke.prototype.clone,Ke.prototype.getAsWebGLTexture=Ke.prototype.O,Ke.prototype.getAsImageBitmap=Ke.prototype.Da,Ke.prototype.getAsImageData=Ke.prototype.Ea,Ke.prototype.hasWebGLTexture=Ke.prototype.R,Ke.prototype.hasImageBitmap=Ke.prototype.ma,Ke.prototype.hasImageData=Ke.prototype.Ga;var Op=250;function ei(...n){return n.map((([t,e])=>({start:t,end:e})))}const tE=(function(n){return class extends n{Ma(){this.i._registerModelResourcesGraphService()}}})((Bp=class{constructor(n,t){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:Kg()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const t=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(t),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,t){const e=n.length,i=this.i._malloc(e);this.i.HEAPU8.set(n,i),t?this.i._changeBinaryGraph(e,i):this.i._changeTextGraph(e,i),this.i._free(i)}configureAudio(n,t,e,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Lt(this,i||"input_audio",(r=>{Lt(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,n,t,e)}))}))}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}fa(n){ii(this,"__graph_config__",(t=>{n(t)})),Lt(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=t}addAudioToStream(n,t,e){this.addAudioToStreamWithShape(n,0,0,t,e)}addAudioToStreamWithShape(n,t,e,i,s){const r=4*n.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(n,this.g/4),Lt(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,e,o,s)}))}addGpuBufferToStream(n,t,e){Lt(this,t,(i=>{const[s,r]=Pp(this,n,i);this.i._addBoundTextureToStream(i,s,r,e)}))}addBoolToStream(n,t,e){Lt(this,t,(i=>{this.i._addBoolToInputStream(n,i,e)}))}addDoubleToStream(n,t,e){Lt(this,t,(i=>{this.i._addDoubleToInputStream(n,i,e)}))}addFloatToStream(n,t,e){Lt(this,t,(i=>{this.i._addFloatToInputStream(n,i,e)}))}addIntToStream(n,t,e){Lt(this,t,(i=>{this.i._addIntToInputStream(n,i,e)}))}addUintToStream(n,t,e){Lt(this,t,(i=>{this.i._addUintToInputStream(n,i,e)}))}addStringToStream(n,t,e){Lt(this,t,(i=>{Lt(this,n,(s=>{this.i._addStringToInputStream(s,i,e)}))}))}addStringRecordToStream(n,t,e){Lt(this,t,(i=>{Lp(this,Object.keys(n),(s=>{Lp(this,Object.values(n),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(n).length,i,e)}))}))}))}addProtoToStream(n,t,e,i){Lt(this,e,(s=>{Lt(this,t,(r=>{const o=this.i._malloc(n.length);this.i.HEAPU8.set(n,o),this.i._addProtoToInputStream(o,n.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(n,t){Lt(this,n,(e=>{this.i._addEmptyPacketToInputStream(e,t)}))}addBoolVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateBoolVector(n.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,e)}))}addDoubleVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateDoubleVector(n.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,e)}))}addFloatVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateFloatVector(n.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,e)}))}addIntVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateIntVector(n.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,e)}))}addUintVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateUintVector(n.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,e)}))}addStringVectorToStream(n,t,e){Lt(this,t,(i=>{const s=this.i._allocateStringVector(n.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of n)Lt(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,e)}))}addBoolToInputSidePacket(n,t){Lt(this,t,(e=>{this.i._addBoolToInputSidePacket(n,e)}))}addDoubleToInputSidePacket(n,t){Lt(this,t,(e=>{this.i._addDoubleToInputSidePacket(n,e)}))}addFloatToInputSidePacket(n,t){Lt(this,t,(e=>{this.i._addFloatToInputSidePacket(n,e)}))}addIntToInputSidePacket(n,t){Lt(this,t,(e=>{this.i._addIntToInputSidePacket(n,e)}))}addUintToInputSidePacket(n,t){Lt(this,t,(e=>{this.i._addUintToInputSidePacket(n,e)}))}addStringToInputSidePacket(n,t){Lt(this,t,(e=>{Lt(this,n,(i=>{this.i._addStringToInputSidePacket(i,e)}))}))}addProtoToInputSidePacket(n,t,e){Lt(this,e,(i=>{Lt(this,t,(s=>{const r=this.i._malloc(n.length);this.i.HEAPU8.set(n,r),this.i._addProtoToInputSidePacket(r,n.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,e)}))}addDoubleVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,e)}))}addFloatVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,e)}))}addIntVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,e)}))}addUintVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,e)}))}addStringVectorToInputSidePacket(n,t){Lt(this,t,(e=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of n)Lt(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,e)}))}attachBoolListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachBoolListener(e)}))}attachBoolVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachBoolVectorListener(e)}))}attachIntListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachIntListener(e)}))}attachIntVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachIntVectorListener(e)}))}attachUintListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachUintListener(e)}))}attachUintVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachUintVectorListener(e)}))}attachDoubleListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachDoubleListener(e)}))}attachDoubleVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachDoubleVectorListener(e)}))}attachFloatListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachFloatListener(e)}))}attachFloatVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachFloatVectorListener(e)}))}attachStringListener(n,t){ii(this,n,t),Lt(this,n,(e=>{this.i._attachStringListener(e)}))}attachStringVectorListener(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.i._attachStringVectorListener(e)}))}attachProtoListener(n,t,e){ii(this,n,t),Lt(this,n,(i=>{this.i._attachProtoListener(i,e||!1)}))}attachProtoVectorListener(n,t,e){Zi(this,n,t),Lt(this,n,(i=>{this.i._attachProtoVectorListener(i,e||!1)}))}attachAudioListener(n,t,e){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),ii(this,n,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),Lt(this,n,(i=>{this.i._attachAudioListener(i,e||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends Bp{get ha(){return this.i}sa(n,t,e){Lt(this,t,(i=>{const[s,r]=Pp(this,n,i);this.ha._addBoundTextureAsImageToStream(i,s,r,e)}))}W(n,t){ii(this,n,t),Lt(this,n,(e=>{this.ha._attachImageListener(e)}))}da(n,t){Zi(this,n,t),Lt(this,n,(e=>{this.ha._attachImageVectorListener(e)}))}}));var Bp,Vn=class extends tE{};async function Kt(n,t,e){return(async function(i,s,r,o){return JS(i,s,r,o)})(n,e.canvas??(Kg()?void 0:document.createElement("canvas")),t,e)}function e1(n,t,e,i){if(n.V){const r=new vg;if(e!=null&&e.regionOfInterest){if(!n.ra)throw Error("This task doesn't support region-of-interest.");var s=e.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>s.left||0>s.top||1<s.right||1<s.bottom)throw Error("Expected RectF values to be in [0,1].");wt(r,1,(s.left+s.right)/2),wt(r,2,(s.top+s.bottom)/2),wt(r,4,s.right-s.left),wt(r,3,s.bottom-s.top)}else wt(r,1,.5),wt(r,2,.5),wt(r,4,1),wt(r,3,1);if(e!=null&&e.rotationDegrees){if((e==null?void 0:e.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(wt(r,5,-Math.PI*e.rotationDegrees/180),(e==null?void 0:e.rotationDegrees)%180!=0){const[o,a]=Zg(t);e=Fe(r,3)*a/o,s=Fe(r,4)*o/a,wt(r,4,e),wt(r,3,s)}}n.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",n.V,i)}n.g.sa(t,n.ba,i??performance.now()),n.finishProcessing()}function Gn(n,t,e){var i;if((i=n.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");e1(n,t,e,n.J+1)}function Mi(n,t,e,i){var s;if(!((s=n.baseOptions)!=null&&s.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");e1(n,t,e,i)}function Lr(n,t,e,i){var s=t.data;const r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return n=new je([s],e,!1,n.g.i.canvas,n.M,r,t),i?n.clone():n}var mn=class extends Ya{constructor(n,t,e,i){super(n),this.g=n,this.ba=t,this.V=e,this.ra=i,this.M=new vf}l(n,t=!0){if("runningMode"in n&&Uo(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,t)}close(){this.M.close(),super.close()}};mn.prototype.close=mn.prototype.close;var Ln=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Dt(n=this.h=new Oc,0,1,t=new Ce),wt(this.h,2,.5),wt(this.h,3,.3)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&wt(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&wt(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}F(n,t){return this.j={detections:[]},Gn(this,n,t),this.j}G(n,t,e){return this.j={detections:[]},Mi(this,n,e,t),this.j}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect_in"),re(n,"detections");const t=new wn;Qn(t,FS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect_in"),Zt(e,"DETECTIONS:detections"),e.o(t),Cn(n,e),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=fg(r),this.j.detections.push(Yg(i));vt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ln.prototype.detectForVideo=Ln.prototype.G,Ln.prototype.detect=Ln.prototype.F,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=async function(n,t){return Kt(Ln,n,{baseOptions:{modelAssetPath:t}})},Ln.createFromModelBuffer=function(n,t){return Kt(Ln,n,{baseOptions:{modelAssetBuffer:t}})},Ln.createFromOptions=function(n,t){return Kt(Ln,n,t)};var yf=ei([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Mf=ei([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Sf=ei([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),n1=ei([474,475],[475,476],[476,477],[477,474]),Ef=ei([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),bf=ei([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),i1=ei([469,470],[470,471],[471,472],[472,469]),Tf=ei([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),s1=[...yf,...Mf,...Sf,...Ef,...bf,...Tf],r1=ei([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function zp(n){n.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Le=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Dt(n=this.h=new Cg,0,1,t=new Ce),this.H=new Ag,Dt(this.h,0,3,this.H),this.j=new Oc,Dt(this.h,0,2,this.j),gi(this.j,4,1),wt(this.j,2,.5),wt(this.H,2,.5),wt(this.h,4,.5)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return"numFaces"in n&&gi(this.j,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&wt(this.j,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&wt(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&wt(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}F(n,t){return zp(this),Gn(this,n,t),this.u}G(n,t,e){return zp(this),Mi(this,n,e,t),this.u}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"face_landmarks");const t=new wn;Qn(t,BS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"NORM_LANDMARKS:face_landmarks"),e.o(t),Cn(n,e),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=Yo(r),this.u.faceLandmarks.push(Bc(i));vt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{vt(this,i)})),this.outputFaceBlendshapes&&(re(n,"blendshapes"),Zt(e,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Nc(r),this.u.faceBlendshapes.push(pf(i.g()??[]));vt(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{vt(this,i)}))),this.outputFacialTransformationMatrixes&&(re(n,"face_geometry"),Zt(e,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=ne(OS(r),_g,2))&&this.u.facialTransformationMatrixes.push({rows:Jn(Bn(i,1),0)??0,columns:Jn(Bn(i,2),0)??0,data:ur(i,3,hs).slice()??[]});vt(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{vt(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Le.prototype.detectForVideo=Le.prototype.G,Le.prototype.detect=Le.prototype.F,Le.prototype.setOptions=Le.prototype.o,Le.createFromModelPath=function(n,t){return Kt(Le,n,{baseOptions:{modelAssetPath:t}})},Le.createFromModelBuffer=function(n,t){return Kt(Le,n,{baseOptions:{modelAssetBuffer:t}})},Le.createFromOptions=function(n,t){return Kt(Le,n,t)},Le.FACE_LANDMARKS_LIPS=yf,Le.FACE_LANDMARKS_LEFT_EYE=Mf,Le.FACE_LANDMARKS_LEFT_EYEBROW=Sf,Le.FACE_LANDMARKS_LEFT_IRIS=n1,Le.FACE_LANDMARKS_RIGHT_EYE=Ef,Le.FACE_LANDMARKS_RIGHT_EYEBROW=bf,Le.FACE_LANDMARKS_RIGHT_IRIS=i1,Le.FACE_LANDMARKS_FACE_OVAL=Tf,Le.FACE_LANDMARKS_CONTOURS=s1,Le.FACE_LANDMARKS_TESSELATION=r1;var si=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!0),Dt(n=this.j=new Pg,0,1,t=new Ce)}get baseOptions(){return ne(this.j,Ce,1)}set baseOptions(n){Dt(this.j,0,1,n)}o(n){return super.l(n)}Pa(n,t,e){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:e,Gn(this,n,i??{}),!this.h)return this.u}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"stylized_image");const t=new wn;Qn(t,zS,this.j);const e=new on;An(e,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"STYLIZED_IMAGE:stylized_image"),e.o(t),Cn(n,e),this.g.W("stylized_image",((i,s)=>{var r=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=o[3*h],l[4*h+1]=o[3*h+1],l[4*h+2]=o[3*h+2],l[4*h+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Ke([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=r=r?a.clone():a,this.h&&this.h(r),vt(this,s)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.u=null,this.h&&this.h(null),vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};si.prototype.stylize=si.prototype.Pa,si.prototype.setOptions=si.prototype.o,si.createFromModelPath=function(n,t){return Kt(si,n,{baseOptions:{modelAssetPath:t}})},si.createFromModelBuffer=function(n,t){return Kt(si,n,{baseOptions:{modelAssetBuffer:t}})},si.createFromOptions=function(n,t){return Kt(si,n,t)};var wf=ei([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function kp(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function Vp(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function Gp(n,t=!0){const e=[];for(const s of n){var i=Nc(s);n=[];for(const r of i.g())i=t&&Bn(r,1)!=null?Jn(Bn(r,1),0):-1,n.push({score:Fe(r,2)??0,index:i,categoryName:mi(r,3)??"",displayName:mi(r,4)??""});e.push(n)}return e}var Mn=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Dt(n=this.v=new Og,0,1,t=new Ce),this.A=new lf,Dt(this.v,0,2,this.A),this.u=new af,Dt(this.A,0,3,this.u),this.h=new Ug,Dt(this.A,0,2,this.h),this.j=new kS,Dt(this.v,0,3,this.j),wt(this.h,2,.5),wt(this.A,4,.5),wt(this.u,2,.5)}get baseOptions(){return ne(this.v,Ce,1)}set baseOptions(n){Dt(this.v,0,1,n)}o(n){var s,r,o,a;if(gi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&wt(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&wt(this.A,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&wt(this.u,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var t=new ar,e=t,i=Jh(n.cannedGesturesClassifierOptions,(s=ne(this.j,ar,3))==null?void 0:s.h());Dt(e,0,2,i),Dt(this.j,0,3,t)}else n.cannedGesturesClassifierOptions===void 0&&((r=ne(this.j,ar,3))==null||r.g());return n.customGesturesClassifierOptions?(Dt(e=t=new ar,0,2,i=Jh(n.customGesturesClassifierOptions,(o=ne(this.j,ar,4))==null?void 0:o.h())),Dt(this.j,0,4,t)):n.customGesturesClassifierOptions===void 0&&((a=ne(this.j,ar,4))==null||a.g()),this.l(n)}Ka(n,t){return kp(this),Gn(this,n,t),Vp(this)}La(n,t,e){return kp(this),Mi(this,n,e,t),Vp(this)}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"hand_gestures"),re(n,"hand_landmarks"),re(n,"world_hand_landmarks"),re(n,"handedness");const t=new wn;Qn(t,HS,this.v);const e=new on;An(e,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"HAND_GESTURES:hand_gestures"),Zt(e,"LANDMARKS:hand_landmarks"),Zt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Zt(e,"HANDEDNESS:handedness"),e.o(t),Cn(n,e),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=Yo(r);const o=[];for(const a of ki(i,mg,1))o.push({x:Fe(a,1)??0,y:Fe(a,2)??0,z:Fe(a,3)??0,visibility:Fe(a,4)??0});this.landmarks.push(o)}vt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{vt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=gr(r);const o=[];for(const a of ki(i,dg,1))o.push({x:Fe(a,1)??0,y:Fe(a,2)??0,z:Fe(a,3)??0,visibility:Fe(a,4)??0});this.worldLandmarks.push(o)}vt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{vt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(...Gp(i,!1)),vt(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{vt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(...Gp(i)),vt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Hp(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}Mn.prototype.recognizeForVideo=Mn.prototype.La,Mn.prototype.recognize=Mn.prototype.Ka,Mn.prototype.setOptions=Mn.prototype.o,Mn.createFromModelPath=function(n,t){return Kt(Mn,n,{baseOptions:{modelAssetPath:t}})},Mn.createFromModelBuffer=function(n,t){return Kt(Mn,n,{baseOptions:{modelAssetBuffer:t}})},Mn.createFromOptions=function(n,t){return Kt(Mn,n,t)},Mn.HAND_CONNECTIONS=wf;var dn=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Dt(n=this.j=new lf,0,1,t=new Ce),this.u=new af,Dt(this.j,0,3,this.u),this.h=new Ug,Dt(this.j,0,2,this.h),gi(this.h,3,1),wt(this.h,2,.5),wt(this.u,2,.5),wt(this.j,4,.5)}get baseOptions(){return ne(this.j,Ce,1)}set baseOptions(n){Dt(this.j,0,1,n)}o(n){return"numHands"in n&&gi(this.h,3,n.numHands??1),"minHandDetectionConfidence"in n&&wt(this.h,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&wt(this.j,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&wt(this.u,2,n.minHandPresenceConfidence??.5),this.l(n)}F(n,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Gn(this,n,t),Hp(this)}G(n,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Mi(this,n,e,t),Hp(this)}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"hand_landmarks"),re(n,"world_hand_landmarks"),re(n,"handedness");const t=new wn;Qn(t,GS,this.j);const e=new on;An(e,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"LANDMARKS:hand_landmarks"),Zt(e,"WORLD_LANDMARKS:world_hand_landmarks"),Zt(e,"HANDEDNESS:handedness"),e.o(t),Cn(n,e),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=Yo(r),this.landmarks.push(Bc(i));vt(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{vt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=gr(r),this.worldLandmarks.push(Eo(i));vt(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{vt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const c of i){i=Nc(c);const l=[];for(const h of i.g())l.push({score:Fe(h,2)??0,index:Jn(Bn(h,1),0)??-1,categoryName:mi(h,3)??"",displayName:mi(h,4)??""});a.push(l)}o.call(r,...a),vt(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};dn.prototype.detectForVideo=dn.prototype.G,dn.prototype.detect=dn.prototype.F,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(n,t){return Kt(dn,n,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(n,t){return Kt(dn,n,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(n,t){return Kt(dn,n,t)},dn.HAND_CONNECTIONS=wf;var o1=ei([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Wp(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Xp(n){try{if(!n.I)return n.h;n.I(n.h)}finally{kc(n)}}function Ia(n,t){n=Yo(n),t.push(Bc(n))}var we=class extends mn{constructor(n,t){super(new Vn(n,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Dt(n=this.A=new kg,0,1,t=new Ce),this.u=new af,Dt(this.A,0,2,this.u),this.aa=new WS,Dt(this.A,0,3,this.aa),this.j=new Oc,Dt(this.A,0,4,this.j),this.H=new Ag,Dt(this.A,0,5,this.H),this.v=new Bg,Dt(this.A,0,6,this.v),this.D=new zg,Dt(this.A,0,7,this.D),wt(this.j,2,.5),wt(this.j,3,.3),wt(this.H,2,.5),wt(this.v,2,.5),wt(this.v,3,.3),wt(this.D,2,.5),wt(this.u,2,.5)}get baseOptions(){return ne(this.A,Ce,1)}set baseOptions(n){Dt(this.A,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&wt(this.j,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&wt(this.j,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&wt(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&wt(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&wt(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&wt(this.D,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&wt(this.u,2,n.minHandLandmarksConfidence??.5),this.l(n)}F(n,t,e){const i=typeof t!="function"?t:{};return this.I=typeof t=="function"?t:e,Wp(this),Gn(this,n,i),Xp(this)}G(n,t,e,i){const s=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:i,Wp(this),Mi(this,n,s,t),Xp(this)}m(){var n=new hn;Te(n,"input_frames_image"),re(n,"pose_landmarks"),re(n,"pose_world_landmarks"),re(n,"face_landmarks"),re(n,"left_hand_landmarks"),re(n,"left_hand_world_landmarks"),re(n,"right_hand_landmarks"),re(n,"right_hand_world_landmarks");const t=new wn,e=new Ep;Yh(e,1,kr("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(s,r){if(r!=null)if(Array.isArray(r))xe(s,2,Cc(r,Ku,void 0,void 0,!1));else{if(!(typeof r=="string"||r instanceof Fi||ko(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Yh(s,2,Hu(r,!1,!1),Ns())}})(e,this.A.g());const i=new on;An(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),fc(i,8,Ep,e),ye(i,"IMAGE:input_frames_image"),Zt(i,"POSE_LANDMARKS:pose_landmarks"),Zt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Zt(i,"FACE_LANDMARKS:face_landmarks"),Zt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Zt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Zt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Zt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Cn(n,i),zc(this,n),this.g.attachProtoListener("pose_landmarks",((s,r)=>{Ia(s,this.h.poseLandmarks),vt(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{vt(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=gr(s),o.push(Eo(s)),vt(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{vt(this,s)})),this.outputPoseSegmentationMasks&&(Zt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Cr(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[Lr(this,s,!0,!this.I)],vt(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],vt(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{Ia(s,this.h.faceLandmarks),vt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{vt(this,s)})),this.outputFaceBlendshapes&&(re(n,"extra_blendshapes"),Zt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Nc(s),o.push(pf(s.g()??[]))),vt(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{vt(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{Ia(s,this.h.leftHandLandmarks),vt(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{vt(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=gr(s),o.push(Eo(s)),vt(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{vt(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{Ia(s,this.h.rightHandLandmarks),vt(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{vt(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=gr(s),o.push(Eo(s)),vt(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{vt(this,s)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};we.prototype.detectForVideo=we.prototype.G,we.prototype.detect=we.prototype.F,we.prototype.setOptions=we.prototype.o,we.createFromModelPath=function(n,t){return Kt(we,n,{baseOptions:{modelAssetPath:t}})},we.createFromModelBuffer=function(n,t){return Kt(we,n,{baseOptions:{modelAssetBuffer:t}})},we.createFromOptions=function(n,t){return Kt(we,n,t)},we.HAND_CONNECTIONS=wf,we.POSE_CONNECTIONS=o1,we.FACE_LANDMARKS_LIPS=yf,we.FACE_LANDMARKS_LEFT_EYE=Mf,we.FACE_LANDMARKS_LEFT_EYEBROW=Sf,we.FACE_LANDMARKS_LEFT_IRIS=n1,we.FACE_LANDMARKS_RIGHT_EYE=Ef,we.FACE_LANDMARKS_RIGHT_EYEBROW=bf,we.FACE_LANDMARKS_RIGHT_IRIS=i1,we.FACE_LANDMARKS_FACE_OVAL=Tf,we.FACE_LANDMARKS_CONTOURS=s1,we.FACE_LANDMARKS_TESSELATION=r1;var In=class extends mn{constructor(n,t){super(new Vn(n,t),"input_image","norm_rect",!0),this.j={classifications:[]},Dt(n=this.h=new Vg,0,1,t=new Ce)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return Dt(this.h,0,2,Jh(n,ne(this.h,Fc,2))),this.l(n)}ua(n,t){return this.j={classifications:[]},Gn(this,n,t),this.j}va(n,t,e){return this.j={classifications:[]},Mi(this,n,e,t),this.j}m(){var n=new hn;Te(n,"input_image"),Te(n,"norm_rect"),re(n,"classifications");const t=new wn;Qn(t,qS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ye(e,"IMAGE:input_image"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"CLASSIFICATIONS:classifications"),e.o(t),Cn(n,e),this.g.attachProtoListener("classifications",((i,s)=>{this.j=(function(r){const o={classifications:ki(r,CS,1).map((a=>{var c;return pf(((c=ne(a,sf,4))==null?void 0:c.g())??[],Jn(Bn(a,2),0),mi(a,3))}))};return cc(os(r,2))!=null&&(o.timestampMs=Jn(cc(os(r,2)),0)),o})(PS(i)),vt(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};In.prototype.classifyForVideo=In.prototype.va,In.prototype.classify=In.prototype.ua,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(n,t){return Kt(In,n,{baseOptions:{modelAssetPath:t}})},In.createFromModelBuffer=function(n,t){return Kt(In,n,{baseOptions:{modelAssetBuffer:t}})},In.createFromOptions=function(n,t){return Kt(In,n,t)};var Sn=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!0),this.h=new Gg,this.embeddings={embeddings:[]},Dt(n=this.h,0,1,t=new Ce)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){var t=this.h,e=ne(this.h,Tp,2);return e=e?e.clone():new Tp,n.l2Normalize!==void 0?Uo(e,1,n.l2Normalize):"l2Normalize"in n&&xe(e,1),n.quantize!==void 0?Uo(e,2,n.quantize):"quantize"in n&&xe(e,2),Dt(t,0,2,e),this.l(n)}Ba(n,t){return Gn(this,n,t),this.embeddings}Ca(n,t,e){return Mi(this,n,e,t),this.embeddings}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"embeddings_out");const t=new wn;Qn(t,YS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"EMBEDDINGS:embeddings_out"),e.o(t),Cn(n,e),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=US(i),this.embeddings=(function(r){return{embeddings:ki(r,IS,1).map((o=>{var c,l;const a={headIndex:Jn(Bn(o,3),0)??-1,headName:mi(o,4)??""};if(O0(o,Zh,Fl(o,1))!==void 0)o=ur(o=ne(o,Zh,Fl(o,1)),1,hs),a.floatEmbedding=o.slice();else{const h=new Uint8Array(0);a.quantizedEmbedding=((l=(c=ne(o,LS,Fl(o,2)))==null?void 0:c.qa())==null?void 0:l.h())??h}return a})),timestampMs:Jn(cc(os(r,2)),0)}})(i),vt(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Sn.cosineSimilarity=function(n,t){if(n.floatEmbedding&&t.floatEmbedding)n=Cp(n.floatEmbedding,t.floatEmbedding);else{if(!n.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=Cp(Ap(n.quantizedEmbedding),Ap(t.quantizedEmbedding))}return n},Sn.prototype.embedForVideo=Sn.prototype.Ca,Sn.prototype.embed=Sn.prototype.Ba,Sn.prototype.setOptions=Sn.prototype.o,Sn.createFromModelPath=function(n,t){return Kt(Sn,n,{baseOptions:{modelAssetPath:t}})},Sn.createFromModelBuffer=function(n,t){return Kt(Sn,n,{baseOptions:{modelAssetBuffer:t}})},Sn.createFromOptions=function(n,t){return Kt(Sn,n,t)};var eu=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){var n,t;(n=this.confidenceMasks)==null||n.forEach((e=>{e.close()})),(t=this.categoryMask)==null||t.close()}};function qp(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function Yp(n){try{const t=new eu(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return t;n.j(t)}finally{kc(n)}}eu.prototype.close=eu.prototype.close;var fn=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ff,this.v=new Hg,Dt(this.h,0,3,this.v),Dt(n=this.h,0,1,t=new Ce)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xe(this.h,2,kr(n.displayNamesLocale)):"displayNamesLocale"in n&&xe(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}L(){(function(n){var e,i;const t=ki(n.fa(),on,1).filter((s=>mi(s,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(n.u=[],1<t.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(((i=(e=ne(t[0],wn,7))==null?void 0:e.l())==null?void 0:i.g())??new Map).forEach(((s,r)=>{n.u[Number(r)]=mi(s,1)}))})(this)}ga(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,qp(this),Gn(this,n,i),Yp(this)}Na(n,t,e,i){const s=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,qp(this),Mi(this,n,s,t),Yp(this)}Fa(){return this.u}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect");const t=new wn;Qn(t,Xg,this.h);const e=new on;An(e,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),e.o(t),Cn(n,e),zc(this,n),this.outputConfidenceMasks&&(re(n,"confidence_masks"),Zt(e,"CONFIDENCE_MASKS:confidence_masks"),Cr(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lr(this,r,!0,!this.j))),vt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],vt(this,i)}))),this.outputCategoryMask&&(re(n,"category_mask"),Zt(e,"CATEGORY_MASK:category_mask"),Cr(this,"category_mask"),this.g.W("category_mask",((i,s)=>{this.categoryMask=Lr(this,i,!1,!this.j),vt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,vt(this,i)}))),re(n,"quality_scores"),Zt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,vt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};fn.prototype.getLabels=fn.prototype.Fa,fn.prototype.segmentForVideo=fn.prototype.Na,fn.prototype.segment=fn.prototype.ga,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(n,t){return Kt(fn,n,{baseOptions:{modelAssetPath:t}})},fn.createFromModelBuffer=function(n,t){return Kt(fn,n,{baseOptions:{modelAssetBuffer:t}})},fn.createFromOptions=function(n,t){return Kt(fn,n,t)};var nu=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){var n,t;(n=this.confidenceMasks)==null||n.forEach((e=>{e.close()})),(t=this.categoryMask)==null||t.close()}};nu.prototype.close=nu.prototype.close;var eE=class extends Et{constructor(n){super(n)}},Ir=[0,Ne,-2],nE=[0,Oi,-3,Oe],Wc=[0,Oi,-3,Oe,Oi,-1],a1=[0,Wc],iE=[0,a1,Ir],sE=[0,Wc,Ir],c1=[0,Wc,Ne,-1],rE=[0,c1,Ir],oE=[0,Oi,-3,Oe,Ir,-1],aE=[0,Oi,-3,Oe,_i],kl=class extends Et{constructor(n){super(n)}},jp=[0,Oi,-1,Oe],l1=class extends Et{constructor(){super()}};l1.B=[1];var Kp=class extends Et{constructor(n){super(n)}},iu=[1,2,3,4,5,6,7,8,9,10,14,15],cE=[0,iu,ge,Wc,ge,sE,ge,a1,ge,iE,ge,jp,ge,aE,ge,nE,ge,[0,me,Oi,-2,Oe,Ne,Oe,-1,2,Oi,Ir],ge,c1,ge,rE,Oi,Ir,me,ge,oE,ge,[0,Ge,jp]],lE=[0,me,Ne,-1,Oe],su=class extends Et{constructor(){super()}};su.B=[1],su.prototype.g=Uc([0,Ge,cE,me,lE]);var ri=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new ff,this.v=new Hg,Dt(this.h,0,3,this.v),Dt(n=this.h,0,1,t=new Ce)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}ga(n,t,e,i){const s=typeof e!="function"?e:{};this.j=typeof e=="function"?e:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.J+1,i=new su;const r=new Kp;var o=new eE;if(gi(o,1,255),Dt(r,0,12,o),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var a=new kl;Uo(a,3,!0),wt(a,1,t.keypoint.x),wt(a,2,t.keypoint.y),yo(r,5,iu,a)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new l1,t.scribble))Uo(t=new kl,3,!0),wt(t,1,a.x),wt(t,2,a.y),fc(o,1,kl,t);yo(r,15,iu,o)}fc(i,1,Kp,r),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",e),Gn(this,n,s);t:{try{const l=new nu(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break t}this.j(l)}finally{kc(this)}c=void 0}return c}m(){var n=new hn;Te(n,"image_in"),Te(n,"roi_in"),Te(n,"norm_rect_in");const t=new wn;Qn(t,Xg,this.h);const e=new on;An(e,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ye(e,"IMAGE:image_in"),ye(e,"ROI:roi_in"),ye(e,"NORM_RECT:norm_rect_in"),e.o(t),Cn(n,e),zc(this,n),this.outputConfidenceMasks&&(re(n,"confidence_masks"),Zt(e,"CONFIDENCE_MASKS:confidence_masks"),Cr(this,"confidence_masks"),this.g.da("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>Lr(this,r,!0,!this.j))),vt(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],vt(this,i)}))),this.outputCategoryMask&&(re(n,"category_mask"),Zt(e,"CATEGORY_MASK:category_mask"),Cr(this,"category_mask"),this.g.W("category_mask",((i,s)=>{this.categoryMask=Lr(this,i,!1,!this.j),vt(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,vt(this,i)}))),re(n,"quality_scores"),Zt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,vt(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};ri.prototype.segment=ri.prototype.ga,ri.prototype.setOptions=ri.prototype.o,ri.createFromModelPath=function(n,t){return Kt(ri,n,{baseOptions:{modelAssetPath:t}})},ri.createFromModelBuffer=function(n,t){return Kt(ri,n,{baseOptions:{modelAssetBuffer:t}})},ri.createFromOptions=function(n,t){return Kt(ri,n,t)};var Dn=class extends mn{constructor(n,t){super(new Vn(n,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Dt(n=this.h=new df,0,1,t=new Ce)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?xe(this.h,2,kr(n.displayNamesLocale)):"displayNamesLocale"in n&&xe(this.h,2),n.maxResults!==void 0?gi(this.h,3,n.maxResults):"maxResults"in n&&xe(this.h,3),n.scoreThreshold!==void 0?wt(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&xe(this.h,4),n.categoryAllowlist!==void 0?uc(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&xe(this.h,5),n.categoryDenylist!==void 0?uc(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&xe(this.h,6),this.l(n)}F(n,t){return this.j={detections:[]},Gn(this,n,t),this.j}G(n,t,e){return this.j={detections:[]},Mi(this,n,e,t),this.j}m(){var n=new hn;Te(n,"input_frame_gpu"),Te(n,"norm_rect"),re(n,"detections");const t=new wn;Qn(t,KS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.ObjectDetectorGraph"),ye(e,"IMAGE:input_frame_gpu"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"DETECTIONS:detections"),e.o(t),Cn(n,e),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=fg(r),this.j.detections.push(Yg(i));vt(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{vt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Dn.prototype.detectForVideo=Dn.prototype.G,Dn.prototype.detect=Dn.prototype.F,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=async function(n,t){return Kt(Dn,n,{baseOptions:{modelAssetPath:t}})},Dn.createFromModelBuffer=function(n,t){return Kt(Dn,n,{baseOptions:{modelAssetBuffer:t}})},Dn.createFromOptions=function(n,t){return Kt(Dn,n,t)};var ru=class{constructor(n,t,e){this.landmarks=n,this.worldLandmarks=t,this.segmentationMasks=e}close(){var n;(n=this.segmentationMasks)==null||n.forEach((t=>{t.close()}))}};function Zp(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function $p(n){try{const t=new ru(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.j)return t;n.j(t)}finally{kc(n)}}ru.prototype.close=ru.prototype.close;var En=class extends mn{constructor(n,t){super(new Vn(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Dt(n=this.h=new qg,0,1,t=new Ce),this.D=new zg,Dt(this.h,0,3,this.D),this.v=new Bg,Dt(this.h,0,2,this.v),gi(this.v,4,1),wt(this.v,2,.5),wt(this.D,2,.5),wt(this.h,4,.5)}get baseOptions(){return ne(this.h,Ce,1)}set baseOptions(n){Dt(this.h,0,1,n)}o(n){return"numPoses"in n&&gi(this.v,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&wt(this.v,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&wt(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&wt(this.D,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}F(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Zp(this),Gn(this,n,i),$p(this)}G(n,t,e,i){const s=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Zp(this),Mi(this,n,s,t),$p(this)}m(){var n=new hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"normalized_landmarks"),re(n,"world_landmarks"),re(n,"segmentation_masks");const t=new wn;Qn(t,ZS,this.h);const e=new on;An(e,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ye(e,"IMAGE:image_in"),ye(e,"NORM_RECT:norm_rect"),Zt(e,"NORM_LANDMARKS:normalized_landmarks"),Zt(e,"WORLD_LANDMARKS:world_landmarks"),e.o(t),Cn(n,e),zc(this,n),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=Yo(r),this.landmarks.push(Bc(i));vt(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],vt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=gr(r),this.worldLandmarks.push(Eo(i));vt(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],vt(this,i)})),this.outputSegmentationMasks&&(Zt(e,"SEGMENTATION_MASK:segmentation_masks"),Cr(this,"segmentation_masks"),this.g.da("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>Lr(this,r,!0,!this.j))),vt(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],vt(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};En.prototype.detectForVideo=En.prototype.G,En.prototype.detect=En.prototype.F,En.prototype.setOptions=En.prototype.o,En.createFromModelPath=function(n,t){return Kt(En,n,{baseOptions:{modelAssetPath:t}})},En.createFromModelBuffer=function(n,t){return Kt(En,n,{baseOptions:{modelAssetBuffer:t}})},En.createFromOptions=function(n,t){return Kt(En,n,t)},En.POSE_CONNECTIONS=o1;const hE="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm",uE="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",fE=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];class dE{constructor(t,e){O(this,"landmarker",null);O(this,"lastVideoTime",-1);O(this,"result",null);O(this,"ctx");this.video=t,this.debugCanvas=e,this.ctx=e.getContext("2d")}async init(){const t=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});this.video.srcObject=t,await new Promise(i=>{this.video.onloadedmetadata=()=>i()}),await this.video.play(),this.debugCanvas.width=this.video.videoWidth,this.debugCanvas.height=this.video.videoHeight;const e=await Es.forVisionTasks(hE);this.landmarker=await dn.createFromOptions(e,{baseOptions:{modelAssetPath:uE,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minTrackingConfidence:.5})}update(){return this.landmarker?(this.video.currentTime!==this.lastVideoTime&&(this.lastVideoTime=this.video.currentTime,this.result=this.landmarker.detectForVideo(this.video,performance.now()),this.drawDebug()),this.result):null}drawDebug(){const{ctx:t,debugCanvas:e}=this;if(t.clearRect(0,0,e.width,e.height),!!this.result){t.strokeStyle="rgba(46, 230, 255, 0.9)",t.fillStyle="#ffc857",t.lineWidth=2;for(const i of this.result.landmarks){for(const[s,r]of fE)t.beginPath(),t.moveTo(i[s].x*e.width,i[s].y*e.height),t.lineTo(i[r].x*e.width,i[r].y*e.height),t.stroke();for(const s of i)t.beginPath(),t.arc(s.x*e.width,s.y*e.height,3,0,Math.PI*2),t.fill()}}}}const Jp=.4,Vl=.32,Qp=.48,pE=1.1,tm=.08,em=.1,mE=.32;function Da(n,t){return Math.hypot(n.x-t.x,n.y-t.y)}function Ua(){return{present:!1,cursor:{x:.5,y:.5},pinching:!1,pinchStrength:0,openPalm:!1,fist:!1,fingersUp:0,victory:!1,threeFingers:!1,depth:.15}}class gE{constructor(){O(this,"hands",[Ua(),Ua()]);O(this,"prevPinchDist",null);O(this,"prevGrabbing",!1)}update(t){var p,g;const e=this.hands,i=[Ua(),Ua()];if(t)for(let _=0;_<t.landmarks.length&&_<2;_++){let d=(((g=(p=t.handednesses[_])==null?void 0:p[0])==null?void 0:g.categoryName)??"Right")==="Right"?0:1;i[d].present&&(d=d===0?1:0),this.readHand(t.landmarks[_],i[d],e[d])}this.hands=i;const s=i.filter(_=>_.present),r=s[0]??null;let o=0;const a=s.length===2&&s[0].pinching&&s[1].pinching;if(a){const _=Math.max(1e-4,Math.hypot(s[0].cursor.x-s[1].cursor.x,s[0].cursor.y-s[1].cursor.y));this.prevPinchDist!==null&&(o=_E(-Math.log(_/this.prevPinchDist)*pE,-tm,tm)),this.prevPinchDist=_}else this.prevPinchDist=null;let c="idle";a?c="zoom":r!=null&&r.pinching?c="grab":r!=null&&r.openPalm?c="orbit":r!=null&&r.fist?c="fist":r&&(c="hover");const l={x:0,y:0};if(c==="orbit"&&r){const _=r.cursor.x-.5,m=r.cursor.y-.5,d=Math.hypot(_,m);if(d>em){const E=Math.min(1,(d-em)/mE)**2;l.x=_/d*E,l.y=m/d*E}}const h=c==="grab",u=h&&!this.prevGrabbing,f=!h&&this.prevGrabbing;return this.prevGrabbing=h,{hands:i,primary:r,mode:c,joystick:l,zoomVelocity:o,grabStart:u,grabEnd:f}}readHand(t,e,i){e.present=!0;const s=Math.max(Da(t[0],t[9]),1e-4),r=Da(t[4],t[8])/s;e.pinchStrength=Math.min(1,Math.max(0,1-(r-Vl)/(Qp-Vl))),e.pinching=i.pinching?r<Qp:r<Vl;const a=[[8,6],[12,10],[16,14],[20,18]].map(([u,f])=>Da(t[u],t[0])>Da(t[f],t[0])*1.1),c=a.filter(Boolean).length;e.fingersUp=c,e.openPalm=c>=4&&!e.pinching,e.fist=c<=1&&!e.pinching,e.victory=a[0]&&a[1]&&!a[2]&&!a[3]&&!e.pinching,e.threeFingers=a[0]&&a[1]&&a[2]&&!a[3]&&!e.pinching,e.depth=s;const l=1-(t[4].x+t[8].x)/2,h=(t[4].y+t[8].y)/2;i.present?(e.cursor.x=i.cursor.x+(l-i.cursor.x)*Jp,e.cursor.y=i.cursor.y+(h-i.cursor.y)*Jp):(e.cursor.x=l,e.cursor.y=h)}}function _E(n,t,e){return Math.min(e,Math.max(t,n))}const h1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Wr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vE=new _u(-1,1,1,-1,0,1);class xE extends de{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}}const yE=new xE;class Af{constructor(t){this._mesh=new ee(yE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ME extends Wr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ln?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wo.clone(t.uniforms),this.material=new ln({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Af(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class nm extends Wr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class SE extends Wr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Xc{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new J);this._width=i.width,this._height=i.height,e=new Zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ME(h1),this.copyPass.material.blending=Di,this.clock=new Bo}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}nm!==void 0&&(o instanceof nm?i=!0:o instanceof SE&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qc extends Wr{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const EE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vi extends Wr{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new J(t.x,t.y):new J(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Zn(r,o,{type:Ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Zn(r,o,{type:Ui});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Zn(r,o,{type:Ui});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=EE;this.highPassUniforms=wo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new J(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1),new w(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=h1;this.copyUniforms=wo.clone(h.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:is,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new ke,this.fsQuad=new Af(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new J(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Vi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Vi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new ln({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new J(.5,.5)},direction:{value:new J(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new ln({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Vi.BlurDirectionX=new J(1,0);Vi.BlurDirectionY=new J(0,1);const bE={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Yc extends Wr{constructor(){super();const t=bE;this.uniforms=wo.clone(t.uniforms),this.material=new oM({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Af(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ue&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fm?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dm?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pm?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gm?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_m&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ri=3073791,Gl=16762967,im=.035,TE=4,wE=220;class AE{constructor(t){O(this,"composer");O(this,"scene",new vc);O(this,"camera");O(this,"raycaster",new r0);O(this,"clock",new Bo);O(this,"radius",38);O(this,"theta",.6);O(this,"phi",1.25);O(this,"orbitVel",{x:0,y:0});O(this,"zoomVel",0);O(this,"planets",[]);O(this,"comets",[]);O(this,"pulses",[]);O(this,"grabbed",null);O(this,"grabDistance",0);O(this,"grabPrevPos",new w);O(this,"grabVelocity",new w);O(this,"hovered",null);O(this,"stars");O(this,"belt");O(this,"nebulae",[]);O(this,"grid");this.camera=new nn(55,window.innerWidth/window.innerHeight,.1,1200),this.scene.fog=new Fo(132620,.0022),this.buildScene(),this.composer=new Xc(t),this.composer.addPass(new qc(this.scene,this.camera));const e=new Vi(new J(window.innerWidth,window.innerHeight),.45,.5,.35);this.composer.addPass(e),this.composer.addPass(new Yc),this.updateCamera()}buildScene(){const t=new ee(new Cs(3.2,3),new ke({color:Gl}));this.scene.add(t);const e=new ee(new Cs(3.8,2),new ke({color:Gl,wireframe:!0,transparent:!0,opacity:.12}));this.scene.add(e),this.scene.add(new i0(Gl,600,0,1.8)),this.scene.add(new s0(Ri,.15));const i=[{r:1.6,dist:10,color:Ri,name:"KEPLER-7",cls:"TERRESTRIAL"},{r:2.4,dist:17,color:5744895,name:"TITAN-IX",cls:"OCEANIC"},{r:1.2,dist:24,color:10320895,name:"VESTA-3",cls:"CRYOGENIC"},{r:3,dist:34,color:3669956,name:"AURORA PRIME",cls:"GAS GIANT"}];i.forEach((_,m)=>{const d=m/i.length*Math.PI*2+.7,E=new ee(new Cs(_.r,3),new Lo({color:_.color,roughness:.75,metalness:.15,emissive:_.color,emissiveIntensity:.1}));E.position.set(Math.cos(d)*_.dist,(m%2?1:-1)*1.5,Math.sin(d)*_.dist);const M=new ee(new Cs(_.r*1.25,1),new ke({color:_.color,wireframe:!0,transparent:!0,opacity:.08}));E.add(M),this.scene.add(E);const v=this.makePanel(_.name,[`CLASS ........ ${_.cls}`,`RADIUS ....... ${(_.r*4200).toFixed(0)} KM`,`ORBIT ........ ${_.dist} AU`,"STATUS ....... STABLE"]);v.position.copy(E.position).y+=_.r*2.4,v.visible=!1,this.scene.add(v),this.planets.push({mesh:E,spin:.2+Math.random()*.4,home:E.position.clone(),velocity:new w,panel:v});const U=new ee(new nc(_.dist-.04,_.dist+.04,128),new ke({color:Ri,transparent:!0,opacity:.12,side:Fn}));U.rotation.x=Math.PI/2,this.scene.add(U)});const s=450;this.belt=new qm(new Su(.22,0),new Lo({color:9083555,roughness:.9,emissive:3073791,emissiveIntensity:.04,flatShading:!0}),s);const r=new ie,o=new Os,a=new w;for(let _=0;_<s;_++){const m=Math.random()*Math.PI*2,d=28+(Math.random()-.5)*3.5,E=new w(Math.cos(m)*d,(Math.random()-.5)*1.6,Math.sin(m)*d);o.setFromEuler(new $n(Math.random()*3,Math.random()*3,Math.random()*3)),a.setScalar(.4+Math.random()*1.3),r.compose(E,o,a),this.belt.setMatrixAt(_,r)}this.scene.add(this.belt),this.grid=new fM(48,16,12,64,Ri,Ri),this.grid.material.transparent=!0,this.grid.material.opacity=.07,this.grid.position.y=-10,this.scene.add(this.grid);const c=new o0(280,56,Ri,Ri);c.material.transparent=!0,c.material.opacity=.045,c.position.y=-10.05,this.scene.add(c);const l=new ee(new fi(135,36,24),new ke({color:Ri,wireframe:!0,transparent:!0,opacity:.035,depthWrite:!1}));this.scene.add(l);const h=this.makeGlowTexture(),u=[3073791,10320895,2059775,3669956];for(let _=0;_<14;_++){const m=new po(new mr({map:h,color:u[_%u.length],transparent:!0,opacity:.025+Math.random()*.035,blending:is,depthWrite:!1}));m.position.copy(new w().randomDirection().multiplyScalar(140+Math.random()*120));const d=90+Math.random()*140;m.scale.set(d,d,1),this.scene.add(m),this.nebulae.push(m)}const f=4e3,p=new Float32Array(f*3);for(let _=0;_<f;_++){const m=new w().randomDirection().multiplyScalar(150+Math.random()*400);p.set([m.x,m.y,m.z],_*3)}const g=new de;g.setAttribute("position",new De(p,3)),this.stars=new Ao(g,new Er({color:12578815,size:.8,sizeAttenuation:!0,transparent:!0,opacity:.8})),this.scene.add(this.stars);for(let _=0;_<3;_++)this.comets.push(this.makeComet(_*4))}makeGlowTexture(){const t=document.createElement("canvas");t.width=t.height=256;const e=t.getContext("2d"),i=e.createRadialGradient(128,128,0,128,128,128);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.35,"rgba(255,255,255,0.35)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,256,256),new ec(t)}makePanel(t,e){const i=document.createElement("canvas");i.width=512,i.height=288;const s=i.getContext("2d");s.fillStyle="rgba(4, 18, 28, 0.72)",s.fillRect(0,0,i.width,i.height),s.strokeStyle="rgba(46, 230, 255, 0.9)",s.lineWidth=3,s.strokeRect(6,6,i.width-12,i.height-12),s.fillStyle="rgba(46, 230, 255, 0.25)",s.fillRect(6,6,i.width-12,54),s.font="bold 34px monospace",s.fillStyle="#ffc857",s.fillText(`◉ ${t}`,24,46),s.font="26px monospace",s.fillStyle="#2ee6ff",e.forEach((o,a)=>s.fillText(o,24,108+a*42));const r=new po(new mr({map:new ec(i),transparent:!0,depthWrite:!1}));return r.scale.set(9,5,1),r}makeComet(t){const e=new ee(new fi(.35,8,8),new ke({color:15400959}));e.visible=!1,this.scene.add(e);const i=28,s=new de;s.setAttribute("position",new De(new Float32Array(i*3),3));const r=new Float32Array(i*3);for(let a=0;a<i;a++){const c=1-a/i;r.set([.18*c,.9*c,1*c],a*3)}s.setAttribute("color",new De(r,3));const o=new Ym(s,new Fr({vertexColors:!0,blending:is,transparent:!0}));return o.frustumCulled=!1,this.scene.add(o),{head:e,trail:o,history:Array.from({length:i},()=>new w),velocity:new w,respawnIn:t}}respawnComet(t){const e=new w().randomDirection().multiplyScalar(160),i=new w().randomDirection().multiplyScalar(25);t.head.position.copy(e),t.velocity.copy(i.sub(e).normalize().multiplyScalar(45+Math.random()*50)),t.history.forEach(s=>s.copy(e)),t.head.visible=!0,t.trail.visible=!0}applyGestures(t){this.orbitVel.x+=(t.joystick.x*im-this.orbitVel.x)*.08,this.orbitVel.y+=(t.joystick.y*im*.7-this.orbitVel.y)*.08,this.theta+=this.orbitVel.x,this.phi=en.clamp(this.phi+this.orbitVel.y,.2,Math.PI-.2),this.zoomVel+=(t.zoomVelocity-this.zoomVel)*.15,this.radius=en.clamp(this.radius*Math.exp(this.zoomVel),TE,wE),this.updateCamera();const e=t.primary?new J(t.primary.cursor.x*2-1,-(t.primary.cursor.y*2-1)):null;if(t.grabStart&&e&&this.tryGrab(e),t.grabEnd&&this.release(),this.grabbed&&t.mode==="grab"&&e){this.raycaster.setFromCamera(e,this.camera);const i=this.grabbed.mesh;this.grabPrevPos.copy(i.position),i.position.copy(this.raycaster.ray.origin).addScaledVector(this.raycaster.ray.direction,this.grabDistance);const s=i.position.clone().sub(this.grabPrevPos).multiplyScalar(60);this.grabVelocity.lerp(s,.25),this.grabbed.panel.position.copy(i.position).y+=3}if(!this.grabbed&&e){this.raycaster.setFromCamera(e,this.camera);const i=this.raycaster.intersectObjects(this.planets.map(s=>s.mesh),!1);this.setHovered(i.length?this.findPlanet(i[0].object):null)}else this.setHovered(null)}get isHovering(){return this.hovered!==null}get isGrabbing(){return this.grabbed!==null}findPlanet(t){return this.planets.find(e=>e.mesh===t)??null}tryGrab(t){this.raycaster.setFromCamera(t,this.camera);const e=this.raycaster.intersectObjects(this.planets.map(i=>i.mesh),!1);e.length&&(this.grabbed=this.findPlanet(e[0].object),this.grabbed&&(this.grabDistance=e[0].distance,this.grabVelocity.set(0,0,0),this.grabPrevPos.copy(this.grabbed.mesh.position),this.setEmissive(this.grabbed,.45),this.grabbed.panel.visible=!0,this.spawnPulse(this.grabbed.mesh.position)))}release(){this.grabbed&&(this.grabbed.velocity.copy(this.grabVelocity.clampLength(0,40)),this.setEmissive(this.grabbed,.1),this.grabbed.panel.visible=!1,this.grabbed=null)}setHovered(t){t!==this.hovered&&(this.hovered&&(this.setEmissive(this.hovered,.1),this.hovered.panel.visible=!1),this.hovered=t,this.hovered&&(this.setEmissive(this.hovered,.3),this.hovered.panel.visible=!0))}setEmissive(t,e){t.mesh.material.emissiveIntensity=e}spawnPulse(t){const e=new ee(new nc(1,1.12,48),new ke({color:Ri,transparent:!0,opacity:.45,side:Fn}));e.position.copy(t),e.lookAt(this.camera.position),this.scene.add(e),this.pulses.push({mesh:e,age:0})}render(){const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;for(const i of this.planets)if(i.mesh.rotation.y+=i.spin*t,i!==this.grabbed){const s=i.home.clone().sub(i.mesh.position);i.velocity.lengthSq()>1e-4||s.lengthSq()>.001?(i.velocity.addScaledVector(s,2.2*t),i.velocity.multiplyScalar(Math.exp(-1.6*t)),i.mesh.position.addScaledVector(i.velocity,t),i.panel.position.copy(i.mesh.position).y+=3):i.mesh.position.y=i.home.y+Math.sin(e*.7+i.home.x)*.25}this.belt.rotation.y+=t*.02,this.stars.rotation.y+=t*.004,this.grid.rotation.y+=t*.01;for(const i of this.comets){if(!i.head.visible){i.respawnIn-=t,i.respawnIn<=0&&this.respawnComet(i);continue}i.head.position.addScaledVector(i.velocity,t),i.history.pop(),i.history.unshift(i.head.position.clone());const s=i.trail.geometry.getAttribute("position");i.history.forEach((r,o)=>s.setXYZ(o,r.x,r.y,r.z)),s.needsUpdate=!0,i.head.position.length()>230&&(i.head.visible=!1,i.trail.visible=!1,i.respawnIn=3+Math.random()*8)}for(let i=this.pulses.length-1;i>=0;i--){const s=this.pulses[i];s.age+=t;const r=1+s.age*14;s.mesh.scale.set(r,r,r),s.mesh.material.opacity=Math.max(0,.45-s.age*.9),s.age>.55&&(this.scene.remove(s.mesh),s.mesh.geometry.dispose(),this.pulses.splice(i,1))}this.composer.render()}updateCamera(){this.camera.position.setFromSphericalCoords(this.radius,this.phi,this.theta),this.camera.lookAt(0,0,0)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer.setSize(t,e)}}function sm(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new de;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=rm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][f]);const g=rm(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function rm(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new De(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const ro=3073791,ho={paris:{name:"PARIS",lat:48.8584,lon:2.2945},newyork:{name:"NEW YORK",lat:40.7484,lon:-73.9857},tokyo:{name:"TOKYO",lat:35.6595,lon:139.7005},london:{name:"LONDON",lat:51.5007,lon:-.1246},dubai:{name:"DUBAI",lat:25.1972,lon:55.2744}},om=900,CE=45,Hl=2600,oi=1200,RE=.03,PE=.02;class LE{constructor(t){O(this,"scene",new vc);O(this,"camera");O(this,"composer");O(this,"clock",new Bo);O(this,"radius",700);O(this,"theta",.5);O(this,"phi",.95);O(this,"target",new w);O(this,"yawVel",0);O(this,"moveVel",0);O(this,"zoomVel",0);O(this,"panVel",new J);O(this,"lastPinchCursor",null);O(this,"loaded",new Map);O(this,"current",null);O(this,"autoZoomTarget",null);this.camera=new nn(55,window.innerWidth/window.innerHeight,1,12e3),this.scene.fog=new Fo(132620,25e-5);const e=new ee(new Mu(1500,64),new Lo({color:329998,roughness:1}));e.rotation.x=-Math.PI/2,e.position.y=-.5,this.scene.add(e);const i=new o0(3e3,75,ro,ro);i.material.transparent=!0,i.material.opacity=.05,this.scene.add(i);const s=new ee(new fi(8e3,36,24),new ke({color:ro,wireframe:!0,transparent:!0,opacity:.018,depthWrite:!1}));this.scene.add(s),this.scene.add(new aM(6719675,659220,.55));const r=new hM(12572927,1.1);r.position.set(800,1200,400),this.scene.add(r);const o=1500,a=new Float32Array(o*3);for(let l=0;l<o;l++){const h=new w().randomDirection().multiplyScalar(5e3+Math.random()*3e3);h.y=Math.abs(h.y),a.set([h.x,h.y,h.z],l*3)}const c=new de;c.setAttribute("position",new De(a,3)),this.scene.add(new Ao(c,new Er({color:12578815,size:4,transparent:!0,opacity:.5}))),this.composer=new Xc(t),this.composer.addPass(new qc(this.scene,this.camera)),this.composer.addPass(new Vi(new J(window.innerWidth,window.innerHeight),.35,.5,.45)),this.composer.addPass(new Yc),this.updateCamera()}async load(t){const e=ho[t];if(!e)throw new Error(`Ville inconnue : ${t}`);this.current&&(this.current.visible=!1);let i=this.loaded.get(t);if(!i){try{i=await this.fetchAndBuild(e)}catch(s){console.warn("Overpass indisponible, ville procédurale :",s),i=this.buildProceduralCity()}this.loaded.set(t,i),this.scene.add(i)}i.visible=!0,this.current=i,this.resetView()}enterCinematic(){this.resetView(),this.radius=Hl,this.phi=1.05,this.autoZoomTarget=420,this.updateCamera()}get zoomedOut(){return this.radius>Hl-10}resetView(){this.target.set(0,0,0),this.radius=700,this.theta=.5,this.phi=.95,this.yawVel=0,this.moveVel=0,this.zoomVel=0,this.panVel.set(0,0),this.updateCamera()}async fetchAndBuild(t){var p,g;const e=`[out:json][timeout:40];
(
  way["building"](around:${om},${t.lat},${t.lon});
  way["highway"~"^(motorway|trunk|primary|secondary|tertiary|residential|unclassified|pedestrian|living_street)$"](around:${om*1.3},${t.lat},${t.lon});
);
out geom;`,i=await fetch("https://overpass-api.de/api/interpreter",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"data="+encodeURIComponent(e)});if(!i.ok)throw new Error(`Overpass HTTP ${i.status}`);const s=await i.json(),r=111320,o=111320*Math.cos(t.lat*Math.PI/180),a=(_,m)=>[(m-t.lon)*o,-(_-t.lat)*r],c=new lr,l=[],h=[];let u=0;for(const _ of s.elements)if(!(_.type!=="way"||!_.geometry||_.geometry.length<2)){if((p=_.tags)!=null&&p.building&&u<6e3){const m=_.geometry.map(M=>a(M.lat,M.lon));if(m.length>3&&m[0][0]===m[m.length-1][0]&&m[0][1]===m[m.length-1][1]&&m.pop(),m.length<3)continue;const d=new Jm(m.map(([M,v])=>new J(M,-v))),E=new Eu(d,{depth:this.buildingHeight(_.tags),bevelEnabled:!1});E.rotateX(-Math.PI/2),l.push(E),u++}else if((g=_.tags)!=null&&g.highway)for(let m=0;m<_.geometry.length-1;m++){const[d,E]=a(_.geometry[m].lat,_.geometry[m].lon),[M,v]=a(_.geometry[m+1].lat,_.geometry[m+1].lon);h.push(d,.4,E,M,.4,v)}}if(l.length===0)throw new Error("Aucun bâtiment reçu");const f=sm(l,!1);if(l.forEach(_=>_.dispose()),c.add(new ee(f,this.buildingMaterial())),h.length){const _=new de;_.setAttribute("position",new De(new Float32Array(h),3)),c.add(new xc(_,new Fr({color:ro,transparent:!0,opacity:.22})))}return c}buildingHeight(t){const e=parseFloat(t.height??"");if(!Number.isNaN(e)&&e>0)return Math.min(e,600);const i=parseFloat(t["building:levels"]??"");return!Number.isNaN(i)&&i>0?i*3.2+2:8+Math.random()*14}buildingMaterial(){return new Lo({color:1450798,roughness:.85,metalness:.08,emissive:ro,emissiveIntensity:.018,side:Fn})}buildProceduralCity(){const t=new lr,e=[],i=70;for(let s=-oi;s<=oi;s+=i)for(let r=-oi;r<=oi;r+=i){const o=Math.hypot(s,r);if(o>oi||Math.random()<.25)continue;const a=(12+Math.random()*60)*Math.max(.3,1.4-o/oi),c=22+Math.random()*26,l=new ks(c,a,c);l.translate(s+(Math.random()-.5)*18,a/2,r+(Math.random()-.5)*18),e.push(l)}return t.add(new ee(sm(e,!1),this.buildingMaterial())),t}applyGestures(t){this.yawVel+=(t.joystick.x*RE-this.yawVel)*.08,this.theta-=this.yawVel;const e=-t.joystick.y*this.radius*PE;this.moveVel+=(e-this.moveVel)*.08;const i=-Math.sin(this.theta),s=-Math.cos(this.theta);this.target.x+=i*this.moveVel,this.target.z+=s*this.moveVel,this.zoomVel+=(t.zoomVelocity-this.zoomVel)*.15,this.radius=en.clamp(this.radius*Math.exp(this.zoomVel),CE,Hl),this.autoZoomTarget!==null&&(Math.abs(t.zoomVelocity)>.02?this.autoZoomTarget=null:(this.radius+=(this.autoZoomTarget-this.radius)*.035,Math.abs(this.radius-this.autoZoomTarget)<8&&(this.autoZoomTarget=null)));let r=0,o=0;t.mode==="grab"&&t.primary?(this.lastPinchCursor&&(r=t.primary.cursor.x-this.lastPinchCursor.x,o=t.primary.cursor.y-this.lastPinchCursor.y),this.lastPinchCursor={...t.primary.cursor}):this.lastPinchCursor=null,this.panVel.x+=(r-this.panVel.x)*.18,this.panVel.y+=(o-this.panVel.y)*.18;const a=this.radius*1.4,c=Math.sin(this.theta),l=Math.cos(this.theta);this.target.x+=-this.panVel.x*a*l+this.panVel.y*a*c,this.target.z+=-this.panVel.x*a*-c+this.panVel.y*a*l,this.target.x=en.clamp(this.target.x,-oi,oi),this.target.z=en.clamp(this.target.z,-oi,oi),this.updateCamera()}render(){this.clock.getDelta(),this.composer.render()}updateCamera(){this.camera.position.setFromSphericalCoords(this.radius,this.phi,this.theta).add(this.target),this.camera.lookAt(this.target)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer.setSize(t,e)}}const ys=3073791,am=16762967,$i=100,IE=195,DE=800,cm=.05,UE="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";function Wl(n,t,e){const i=(90-n)*en.DEG2RAD,s=(t+180)*en.DEG2RAD;return new w(-e*Math.sin(i)*Math.cos(s),e*Math.cos(i),e*Math.sin(i)*Math.sin(s))}function NE(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}class FE{constructor(t,e){O(this,"state","globe");O(this,"hoveredCity",null);O(this,"scene",new vc);O(this,"camera");O(this,"composer");O(this,"clock",new Bo);O(this,"raycaster",new r0);O(this,"radius",340);O(this,"theta",.9);O(this,"phi",1.1);O(this,"orbitVel",{x:0,y:0});O(this,"zoomVel",0);O(this,"globeMesh");O(this,"markers",[]);O(this,"city");O(this,"trans",null);O(this,"transKey","");O(this,"flashEl",document.getElementById("flash"));O(this,"onStatus");this.onStatus=e,this.city=new LE(t),this.camera=new nn(55,window.innerWidth/window.innerHeight,.5,8e3),this.buildGlobe(),this.loadContinents(),this.composer=new Xc(t),this.composer.addPass(new qc(this.scene,this.camera)),this.composer.addPass(new Vi(new J(window.innerWidth,window.innerHeight),.55,.5,.2)),this.composer.addPass(new Yc),this.updateCamera()}get hoveredCityName(){return this.hoveredCity?ho[this.hoveredCity].name:null}get inTransition(){return this.state==="transition"}buildGlobe(){this.globeMesh=new ee(new fi($i,48,32),new ke({color:403516,transparent:!0,opacity:.32,depthWrite:!1})),this.scene.add(this.globeMesh);const t=new ee(new fi($i*1.001,36,24),new ke({color:ys,wireframe:!0,transparent:!0,opacity:.05,depthWrite:!1}));this.scene.add(t);const e=new po(new mr({map:this.makeGlowTexture(),color:ys,transparent:!0,opacity:.16,blending:is,depthWrite:!1}));e.scale.set($i*3.4,$i*3.4,1),this.scene.add(e);const i=2e3,s=new Float32Array(i*3);for(let o=0;o<i;o++){const a=new w().randomDirection().multiplyScalar(2500+Math.random()*2500);s.set([a.x,a.y,a.z],o*3)}const r=new de;r.setAttribute("position",new De(s,3)),this.scene.add(new Ao(r,new Er({color:12578815,size:2.5,transparent:!0,opacity:.6})));for(const[o,a]of Object.entries(ho)){const c=Wl(a.lat,a.lon,$i*1.01),l=new ee(new fi(1.7,12,12),new ke({color:ys}));l.position.copy(c),this.scene.add(l);const h=new po(new mr({map:this.makeGlowTexture(),color:ys,transparent:!0,opacity:.7,blending:is,depthWrite:!1}));h.position.copy(c),h.scale.set(10,10,1),this.scene.add(h);const u=new ee(new fi(8,8,8),new ke({transparent:!0,opacity:0,depthWrite:!1}));u.position.copy(c),u.userData.cityKey=o,this.scene.add(u);const f=this.makeLabel(a.name);f.position.copy(c.clone().multiplyScalar(1.14)),this.scene.add(f),this.markers.push({key:o,name:a.name,base:c,core:l,halo:h,hit:u})}}async loadContinents(){try{const t=await fetch(UE);if(!t.ok)throw new Error(`HTTP ${t.status}`);const e=await t.json(),i=[],s=o=>{for(let a=0;a<o.length-1;a++){const c=Wl(o[a][1],o[a][0],$i*1.002),l=Wl(o[a+1][1],o[a+1][0],$i*1.002);i.push(c.x,c.y,c.z,l.x,l.y,l.z)}};for(const o of e.features){const a=o.geometry;if(a.type==="Polygon")for(const c of a.coordinates)s(c);else if(a.type==="MultiPolygon")for(const c of a.coordinates)for(const l of c)s(l)}const r=new de;r.setAttribute("position",new De(new Float32Array(i),3)),this.scene.add(new xc(r,new Fr({color:ys,transparent:!0,opacity:.45})))}catch(t){console.warn("Contours des continents indisponibles :",t)}}makeGlowTexture(){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.4,"rgba(255,255,255,0.3)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,128,128),new ec(t)}makeLabel(t){const e=document.createElement("canvas");e.width=256,e.height=64;const i=e.getContext("2d");i.font="26px monospace",i.textAlign="center",i.fillStyle="rgba(46, 230, 255, 0.8)",i.fillText(t,128,42);const s=new po(new mr({map:new ec(e),transparent:!0,opacity:.5,depthWrite:!1}));return s.scale.set(22,5.5,1),s}applyGestures(t){var e;if(this.state==="city"){this.city.applyGestures(t);return}if(this.state!=="transition"){if(this.orbitVel.x+=(t.joystick.x*cm-this.orbitVel.x)*.08,this.orbitVel.y+=(t.joystick.y*cm*.7-this.orbitVel.y)*.08,this.theta+=this.orbitVel.x,this.phi=en.clamp(this.phi+this.orbitVel.y,.15,Math.PI-.15),this.zoomVel+=(t.zoomVelocity-this.zoomVel)*.15,this.radius=en.clamp(this.radius*Math.exp(this.zoomVel),IE,DE),this.updateCamera(),this.hoveredCity=null,t.primary){const i=new J(t.primary.cursor.x*2-1,-(t.primary.cursor.y*2-1));this.raycaster.setFromCamera(i,this.camera);const r=(e=this.raycaster.intersectObjects([this.globeMesh,...this.markers.map(o=>o.hit)],!1)[0])==null?void 0:e.object;r&&r!==this.globeMesh&&(this.hoveredCity=r.userData.cityKey)}t.grabStart&&this.hoveredCity&&this.select(this.hoveredCity)}}select(t){const e=this.markers.find(r=>r.key===t),i=new uM().setFromVector3(e.base);let s=i.theta;for(;s-this.theta>Math.PI;)s-=Math.PI*2;for(;s-this.theta<-Math.PI;)s+=Math.PI*2;this.trans={t:0,dur:2.4,sTheta:this.theta,sPhi:this.phi,sRad:this.radius,eTheta:s,ePhi:en.clamp(i.phi,.15,Math.PI-.15),loaded:!1,failed:!1},this.transKey=t,this.state="transition",this.onStatus(`PLONGÉE VERS ${ho[t].name}…`),this.city.load(t).then(()=>{this.trans&&(this.trans.loaded=!0)}).catch(r=>{console.error(r),this.trans&&(this.trans.failed=!0)})}backToGlobe(){this.state!=="globe"&&(this.state="globe",this.trans=null,this.radius=340,this.zoomVel=0,this.flash(),this.onStatus("ALL SYSTEMS OPERATIONAL","ready"))}flash(){this.flashEl.classList.add("on"),setTimeout(()=>this.flashEl.classList.remove("on"),420)}render(){const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;if(this.state==="city"){this.city.render();return}if(this.markers.forEach((i,s)=>{const r=i.key===this.hoveredCity,o=1+.35*Math.sin(e*3+s*1.3);i.core.scale.setScalar(r?2.1:o),i.core.material.color.setHex(r?am:ys),i.halo.material.color.setHex(r?am:ys),i.halo.material.opacity=r?.95:.35+.35*Math.sin(e*3+s*1.3)}),this.state==="transition"&&this.trans){const i=this.trans;i.t+=t;const s=NE(Math.min(i.t/i.dur,1));if(this.theta=en.lerp(i.sTheta,i.eTheta,s),this.phi=en.lerp(i.sPhi,i.ePhi,s),this.radius=en.lerp(i.sRad,$i+6,s),this.updateCamera(),i.failed)this.trans=null,this.state="globe",this.radius=340,this.onStatus("ÉCHEC DU CHARGEMENT DE LA VILLE","error");else if(i.t>=i.dur&&i.loaded){this.flash(),this.city.enterCinematic(),this.trans=null,this.state="city",this.onStatus(`${ho[this.transKey].name} — EN LIGNE`,"ready"),this.city.render();return}}this.composer.render()}updateCamera(){this.camera.position.setFromSphericalCoords(this.radius,this.phi,this.theta),this.camera.lookAt(0,0,0)}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer.setSize(t,e),this.city.resize(t,e)}}const Na={neon:{fog:655890,palettes:[[12720288,955304],[14248468,11674192],[1353815,955304],[8005321,12720288],[11675945,14256676]],floor:!0,stars:!1},space:{fog:132109,palettes:[[3030968,5907632],[880278,3030968],[9279958,3614860],[1745797,1922211]],floor:!1,stars:!0},minimal:{fog:0,palettes:[[12303291,1214622],[12095805,10066329],[11680314,7829367],[5224586,6710886]],floor:!0,stars:!1}},Xl=64,ai=5e3,lm=.1,OE=.32;function BE(n){const t=n.cursor.x-.5,e=n.cursor.y-.5,i=Math.hypot(t,e);if(i<=lm)return{x:0,y:0};const s=Math.min(1,(i-lm)/OE)**2;return{x:t/i*s,y:e/i*s}}class zE{constructor(t){O(this,"scene",new vc);O(this,"camera");O(this,"composer");O(this,"clock",new Bo);O(this,"mainLight");O(this,"structure");O(this,"shapes",[]);O(this,"gyros",[]);O(this,"particles");O(this,"pPos");O(this,"pRad",new Float32Array(ai));O(this,"pTheta",new Float32Array(ai));O(this,"pPhi",new Float32Array(ai));O(this,"pSpeed",new Float32Array(ai));O(this,"pBaseX",new Float32Array(ai));O(this,"pBaseZ",new Float32Array(ai));O(this,"pY",new Float32Array(ai));O(this,"particleMode",0);O(this,"bars");O(this,"wave");O(this,"waveGeo");O(this,"stars");O(this,"shockwaves",[]);O(this,"ambiance","neon");O(this,"paletteIdx",0);O(this,"shapeIdx",0);O(this,"lightTarget",new w(0,14,0));O(this,"intensityTarget",380);O(this,"flashEnv",0);O(this,"prevBeat",0);O(this,"camTheta",.4);O(this,"camPhi",1.08);O(this,"camRadius",64);O(this,"camThetaVel",0);O(this,"camPhiVel",0);O(this,"camManual",!1);O(this,"zoomVel",0);O(this,"prevVictory",!1);O(this,"prevThree",!1);O(this,"prevFistBeat",!1);O(this,"manBeat",0);this.camera=new nn(60,window.innerWidth/window.innerHeight,.1,600),this.buildScene(),this.applyAmbiance("neon"),this.composer=new Xc(t),this.composer.addPass(new qc(this.scene,this.camera)),this.composer.addPass(new Vi(new J(window.innerWidth,window.innerHeight),.7,.6,.32)),this.composer.addPass(new Yc)}buildScene(){this.scene.add(new s0(16777215,.05)),this.mainLight=new i0(16777215,380,0,1.7),this.mainLight.position.copy(this.lightTarget),this.scene.add(this.mainLight);const t=new ee(new fi(.7,12,12),new ke({color:14540270}));this.mainLight.add(t),this.shapes=[new Cs(9,1),new Tu(6.5,2,110,14),new bu(10,0),new vo(8,2.6,14,64)],this.structure=new ee(this.shapes[0],new Lo({color:12720288,wireframe:!0,emissive:12720288,emissiveIntensity:.16,roughness:.5})),this.structure.position.y=10,this.scene.add(this.structure),[13.5,17,20.5].forEach((a,c)=>{const l=new ee(new vo(a,.1,6,96),new ke({color:12720288,transparent:!0,opacity:.5}));l.position.y=10,l.rotation.x=c*Math.PI/3.2,this.scene.add(l),this.gyros.push(l)}),this.pPos=new Float32Array(ai*3);for(let a=0;a<ai;a++)this.pRad[a]=30+Math.random()*55,this.pTheta[a]=Math.random()*Math.PI*2,this.pPhi[a]=Math.acos(2*Math.random()-1),this.pSpeed[a]=.3+Math.random()*1.2,this.pBaseX[a]=(Math.random()-.5)*140,this.pBaseZ[a]=(Math.random()-.5)*140,this.pY[a]=-14+Math.random()*74;const i=new de;i.setAttribute("position",new De(this.pPos,3)),this.particles=new Ao(i,new Er({color:955304,size:.9,transparent:!0,opacity:.5,blending:is,depthWrite:!1})),this.scene.add(this.particles),this.bars=new qm(new ks(1.4,1,1.4),new ke({color:955304}),Xl),this.scene.add(this.bars),this.waveGeo=new No(240,240,46,46),this.wave=new ee(this.waveGeo,new ke({color:955304,wireframe:!0,transparent:!0,opacity:.13})),this.wave.rotation.x=-Math.PI/2,this.wave.position.y=-12,this.scene.add(this.wave);const s=2500,r=new Float32Array(s*3);for(let a=0;a<s;a++){const c=new w().randomDirection().multiplyScalar(200+Math.random()*300);r.set([c.x,c.y,c.z],a*3)}const o=new de;o.setAttribute("position",new De(r,3)),this.stars=new Ao(o,new Er({color:10467532,size:.8,transparent:!0,opacity:.6})),this.scene.add(this.stars)}setAmbiance(t){this.applyAmbiance(t)}applyAmbiance(t){this.ambiance=t,this.paletteIdx=0;const e=Na[t];this.scene.fog=new Fo(e.fog,.011),this.scene.background=new zt(e.fog),this.wave.visible=e.floor,this.stars.visible=e.stars,this.applyPalette()}applyPalette(){const[t,e]=Na[this.ambiance].palettes[this.paletteIdx];this.mainLight.color.setHex(t);const i=this.structure.material;i.color.setHex(t),i.emissive.setHex(t);for(const s of this.gyros)s.material.color.setHex(t);this.bars.material.color.setHex(e),this.particles.material.color.setHex(e),this.wave.material.color.setHex(e)}nextPalette(){this.paletteIdx=(this.paletteIdx+1)%Na[this.ambiance].palettes.length,this.applyPalette()}nextShape(){this.shapeIdx=(this.shapeIdx+1)%this.shapes.length,this.structure.geometry=this.shapes[this.shapeIdx],this.particleMode=this.shapeIdx%3,this.flashEnv=Math.max(this.flashEnv,.45)}applyGestures(t){const e=t.primary;e!=null&&e.present&&(e.openPalm&&this.lightTarget.set((e.cursor.x-.5)*80,(.5-e.cursor.y)*50+12,en.clamp((e.depth-.14)*320,-30,34)),this.intensityTarget=260+e.pinchStrength*1e3,t.grabStart&&(this.flashEnv=1),e.victory&&!this.prevVictory&&this.nextPalette(),this.prevVictory=e.victory,e.threeFingers&&!this.prevThree&&this.nextShape(),this.prevThree=e.threeFingers);const i=t.hands.find(r=>r.present&&r!==e&&r.openPalm);this.camManual=!!i;const s=i?BE(i):{x:0,y:0};this.camThetaVel+=(s.x*.04-this.camThetaVel)*.08,this.camPhiVel+=(s.y*.028-this.camPhiVel)*.08,this.camTheta+=this.camThetaVel,this.camPhi=en.clamp(this.camPhi+this.camPhiVel,.45,1.45),this.zoomVel+=(t.zoomVelocity-this.zoomVel)*.15,this.camRadius=en.clamp(this.camRadius*Math.exp(this.zoomVel),28,150)}manualFrame(t,e){var r,o;const i=((r=t.primary)==null?void 0:r.fist)===!0;i&&!this.prevFistBeat&&(this.manBeat=1),this.prevFistBeat=i,this.manBeat=Math.max(0,this.manBeat-e*2.4);const s=Math.hypot(t.joystick.x,t.joystick.y);return{bass:this.manBeat*.9,mid:.12+s*.6,high:(((o=t.primary)==null?void 0:o.pinchStrength)??0)*.7,level:.2+this.manBeat*.5,beat:this.manBeat,playing:!0}}render(t){const e=Math.min(this.clock.getDelta(),.05),i=this.clock.elapsedTime;this.flashEnv*=Math.exp(-5.5*e),this.mainLight.position.lerp(this.lightTarget,.12),this.mainLight.intensity+=(this.intensityTarget*(1+t.beat*1.1)+this.flashEnv*2800-this.mainLight.intensity)*.25;const s=1+t.bass*.85+this.flashEnv*.25;this.structure.scale.setScalar(s),this.structure.rotation.y+=e*(.25+t.mid*2.6),this.structure.rotation.x+=e*(.1+t.mid*1.1),this.structure.material.emissiveIntensity=.14+t.beat*.8+this.flashEnv*.9,this.gyros.forEach((h,u)=>{h.rotation.x+=e*(.3+t.mid*1.6)*(u%2?1:-1),h.rotation.y+=e*(.2+t.mid*1.1);const f=1+t.beat*.12;h.scale.setScalar(f),h.material.opacity=.3+t.beat*.5}),t.beat>this.prevBeat+.3&&this.spawnShockwave(),this.prevBeat=t.beat;for(let h=this.shockwaves.length-1;h>=0;h--){const u=this.shockwaves[h];u.age+=e;const f=1+u.age*42;u.mesh.scale.setScalar(f),u.mesh.material.opacity=Math.max(0,.4-u.age*.55),u.age>.75&&(this.scene.remove(u.mesh),u.mesh.geometry.dispose(),this.shockwaves.splice(h,1))}this.animateParticles(e,i,t);const r=new ie,o=new Os,a=new w(0,1,0);for(let h=0;h<Xl;h++){const u=h/Xl,f=u<.33?t.bass:u<.66?t.mid:t.high,p=.75+.25*Math.sin(i*3.2+h*.6),g=.6+f*18*p+t.beat*2.5,_=u*Math.PI*2+i*.05;o.setFromAxisAngle(a,-_),r.compose(new w(Math.cos(_)*26,-12+g/2,Math.sin(_)*26),o,new w(1,g,1)),this.bars.setMatrixAt(h,r)}if(this.bars.instanceMatrix.needsUpdate=!0,this.wave.visible){const h=this.waveGeo.getAttribute("position"),u=1.1+t.bass*5.5;for(let f=0;f<h.count;f++){const p=h.getX(f),g=h.getY(f);h.setZ(f,Math.sin(p*.07+i*1.3)*u*.6+Math.cos(g*.06+i*.9)*u*.6+Math.sin((p+g)*.045+i*.6)*u*.4)}h.needsUpdate=!0}this.stars.visible&&(this.stars.material.opacity=.4+t.high*.5+.08*Math.sin(i*7)),this.camManual||(this.camTheta+=e*(.05+t.mid*.15));const c=this.camRadius-t.beat*2.5,l=new w(0,8,0);this.camera.position.setFromSphericalCoords(c,this.camPhi,this.camTheta).add(l),this.camera.lookAt(l),this.composer.render()}animateParticles(t,e,i){const s=this.particles.material;s.size=.85*(1+i.bass*1.5),s.opacity=.35+i.high*.55;const r=1+i.bass*.35+this.flashEnv*.15;for(let o=0;o<ai;o++){let a,c,l;if(this.particleMode===0){this.pTheta[o]+=t*this.pSpeed[o]*(.25+i.mid*1.8);const h=this.pRad[o]*r;a=h*Math.sin(this.pPhi[o])*Math.cos(this.pTheta[o]),l=h*Math.sin(this.pPhi[o])*Math.sin(this.pTheta[o]),c=h*Math.cos(this.pPhi[o])*.65+10}else if(this.particleMode===1)this.pY[o]-=t*this.pSpeed[o]*(9+i.bass*45),this.pY[o]<-14&&(this.pY[o]=62),a=this.pBaseX[o]+Math.sin(e*.8+o)*1.2,l=this.pBaseZ[o]+Math.cos(e*.7+o)*1.2,c=this.pY[o];else{const h=this.pRad[o]*(1+i.bass*.7+.05*Math.sin(e*2+o));a=h*Math.sin(this.pPhi[o])*Math.cos(this.pTheta[o]+e*.04),l=h*Math.sin(this.pPhi[o])*Math.sin(this.pTheta[o]+e*.04),c=h*Math.cos(this.pPhi[o])*.7+10}this.pPos[o*3]=a,this.pPos[o*3+1]=c,this.pPos[o*3+2]=l}this.particles.geometry.getAttribute("position").needsUpdate=!0}spawnShockwave(){if(this.shockwaves.length>5)return;const[t]=Na[this.ambiance].palettes[this.paletteIdx],e=new ee(new vo(1,.06,6,64),new ke({color:t,transparent:!0,opacity:.4}));e.position.y=10,e.rotation.x=Math.PI/2,this.scene.add(e),this.shockwaves.push({mesh:e,age:0})}resize(t,e){this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.composer.setSize(t,e)}}const kE={bass:0,mid:0,high:0,level:0,beat:0,playing:!1};class VE{constructor(){O(this,"ctx",null);O(this,"analyser",null);O(this,"master",null);O(this,"data",new Uint8Array(512));O(this,"el",null);O(this,"elSource",null);O(this,"demoTimer",null);O(this,"demoPaused",!1);O(this,"bassAvg",0);O(this,"beatEnv",0);O(this,"lastBeatAt",0);O(this,"trackName","")}get playing(){return this.demoTimer!==null?!0:!!this.el&&!this.el.paused}ensure(){return this.ctx||(this.ctx=new AudioContext,this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=1024,this.analyser.smoothingTimeConstant=.78,this.master=this.ctx.createGain(),this.master.gain.value=.9,this.master.connect(this.analyser),this.analyser.connect(this.ctx.destination)),this.ctx.resume(),this.ctx}stopAll(){var t;this.demoTimer!==null&&(clearInterval(this.demoTimer),this.demoTimer=null),this.demoPaused=!1,this.el&&(this.el.pause(),this.el.removeAttribute("src"),this.el=null),(t=this.elSource)==null||t.disconnect(),this.elSource=null}async playFile(t){const e=this.ensure();this.stopAll();const i=new Audio(URL.createObjectURL(t));i.loop=!0,this.elSource=e.createMediaElementSource(i),this.elSource.connect(this.master),this.el=i,this.trackName=t.name.replace(/\.[^.]+$/,"").toUpperCase(),await i.play()}async playUrl(t,e){const i=this.ensure();this.stopAll();const s=new Audio;s.crossOrigin="anonymous",s.src=t,s.loop=!0,this.elSource=i.createMediaElementSource(s),this.elSource.connect(this.master),this.el=s,this.trackName=e,await s.play()}playDemo(){const t=this.ensure();this.stopAll(),this.trackName="SYNTH DEMO 120 BPM";const e=60/120/2;let i=t.currentTime+.1,s=0;this.demoTimer=window.setInterval(()=>{for(;i<t.currentTime+.35;)this.scheduleStep(i,s,e),i+=e,s++},90)}scheduleStep(t,e,i){const s=this.ctx,r=this.master,o=[55,55,65.4,49],a=[220,277.2,329.6,440,329.6,277.2];if(e%2===0){const u=s.createOscillator(),f=s.createGain();u.frequency.setValueAtTime(150,t),u.frequency.exponentialRampToValueAtTime(45,t+.12),f.gain.setValueAtTime(.85,t),f.gain.exponentialRampToValueAtTime(.001,t+.25),u.connect(f).connect(r),u.start(t),u.stop(t+.3);const p=o[Math.floor(e/2)%o.length],g=s.createOscillator();g.type="sawtooth",g.frequency.value=p;const _=s.createBiquadFilter();_.type="lowpass",_.frequency.value=320;const m=s.createGain();m.gain.setValueAtTime(.22,t),m.gain.exponentialRampToValueAtTime(.01,t+i*1.8),g.connect(_).connect(m).connect(r),g.start(t),g.stop(t+i*2)}else{const f=s.createBuffer(1,Math.floor(s.sampleRate*.06),s.sampleRate),p=f.getChannelData(0);for(let d=0;d<p.length;d++)p[d]=(Math.random()*2-1)*(1-d/p.length);const g=s.createBufferSource();g.buffer=f;const _=s.createBiquadFilter();_.type="highpass",_.frequency.value=7e3;const m=s.createGain();m.gain.value=.22,g.connect(_).connect(m).connect(r),g.start(t)}const c=s.createOscillator();c.type="square",c.frequency.value=a[e%a.length]*2;const l=s.createBiquadFilter();l.type="bandpass",l.frequency.value=1800;const h=s.createGain();h.gain.setValueAtTime(.05,t),h.gain.exponentialRampToValueAtTime(.004,t+i),c.connect(l).connect(h).connect(r),c.start(t),c.stop(t+i)}togglePlay(){return this.el?this.el.paused?this.el.play():this.el.pause():this.demoTimer!==null?(clearInterval(this.demoTimer),this.demoTimer=null,this.demoPaused=!0):this.demoPaused&&this.playDemo(),this.playing}frame(){if(!this.analyser||!this.playing)return this.beatEnv*=.9,{...kE,beat:this.beatEnv};this.analyser.getByteFrequencyData(this.data);const t=(a,c)=>{let l=0;for(let h=a;h<c;h++)l+=this.data[h];return l/((c-a)*255)},e=t(1,5),i=t(5,80),s=t(80,256),r=t(1,256);this.bassAvg+=(e-this.bassAvg)*.04;const o=performance.now();return e>this.bassAvg*1.3+.04&&o-this.lastBeatAt>260&&(this.beatEnv=1,this.lastBeatAt=o),this.beatEnv*=.92,{bass:e,mid:i,high:s,level:r,beat:this.beatEnv,playing:!0}}}const ql=["map","lightshow","universe"],GE={map:"MONDE : CARTE",lightshow:"MONDE : LIGHT SHOW",universe:"MONDE : UNIVERS"},HE={universe:{idle:"STANDBY",hover:"TRACKING",orbit:"NAVIGATION",grab:"TARGET LOCKED",zoom:"ZOOM CONTROL",fist:"STANDBY"},globe:{idle:"STANDBY",hover:"SCANNING",orbit:"GLOBE ROTATION",grab:"SELECTING",zoom:"ZOOM CONTROL",fist:"STANDBY"},city:{idle:"STANDBY",hover:"TRACKING",orbit:"ROTATION",grab:"MAP LOCKED — PAN",zoom:"ALTITUDE",fist:"MAINTIENS — RETOUR GLOBE"},lightshow:{idle:"STANDBY",hover:"TRACKING",orbit:"LIGHT CONTROL",grab:"INTENSITY",zoom:"CAMERA",fist:"PULSE"}},WE={universe:"✋ MAIN OUVERTE EXCENTRÉE = TOURNER (CENTRE = STOP) · 🤏🤏 ÉCARTER/RAPPROCHER = ZOOM · 🤏 PINCER = ATTRAPER",globe:"✋ MAIN OUVERTE EXCENTRÉE = TOURNER (CENTRE = STOP) · 🤏 PINCER UN POINT = PLONGER · 🤏🤏 = ZOOM",city:"✋ HAUT/BAS = AVANCER/RECULER · ✋ GAUCHE/DROITE = PIVOTER · 🤏 TIRER = DÉPLACER · 🤏🤏 = ALTITUDE · ✊ = RETOUR GLOBE",lightshow:"✋ = LUMIÈRE (Z = DISTANCE MAIN) · ✋✋ 2E MAIN = CAMÉRA · 🤏 = INTENSITÉ/FLASH · ✌️ = PALETTE · 🤟 = FORME+PARTICULES · ✊ = BEAT"};class XE{constructor(){O(this,"cursor",document.getElementById("cursor"));O(this,"cursor2",document.getElementById("cursor2"));O(this,"modeLabel",document.getElementById("mode-label"));O(this,"status",document.getElementById("status"));O(this,"audioHint",document.getElementById("audio-hint"));O(this,"help",document.getElementById("help"));O(this,"worldButton",document.getElementById("world-toggle"));O(this,"backButton",document.getElementById("globe-back"));O(this,"lsPanel",document.getElementById("ls-panel"));O(this,"lsNow",document.getElementById("ls-now"));O(this,"lsMode",document.getElementById("ls-mode"));O(this,"lsPause",document.getElementById("ls-pause"));O(this,"world","map");O(this,"context","globe");O(this,"onWorldToggle",null);O(this,"onGlobeBack",null);O(this,"onLsDemo",null);O(this,"onLsTrack",null);O(this,"onLsFile",null);O(this,"onLsAmbiance",null);O(this,"onLsRhythm",null);O(this,"onLsPause",null);this.worldButton.addEventListener("click",()=>{var i;const e=ql[(ql.indexOf(this.world)+1)%ql.length];this.setWorld(e),(i=this.onWorldToggle)==null||i.call(this,e)}),this.backButton.addEventListener("click",()=>{var e;return(e=this.onGlobeBack)==null?void 0:e.call(this)}),document.getElementById("ls-demo").addEventListener("click",()=>{var e;return(e=this.onLsDemo)==null?void 0:e.call(this)}),document.querySelectorAll(".ls-track").forEach(e=>{e.addEventListener("click",()=>{var i;return(i=this.onLsTrack)==null?void 0:i.call(this,e.dataset.url,e.dataset.name)})});const t=document.getElementById("ls-file");t.addEventListener("change",()=>{var i,s;const e=(i=t.files)==null?void 0:i[0];e&&((s=this.onLsFile)==null||s.call(this,e))}),document.querySelectorAll("#ls-ambs button").forEach(e=>{e.addEventListener("click",()=>{var i;document.querySelectorAll("#ls-ambs button").forEach(s=>s.classList.toggle("on",s===e)),(i=this.onLsAmbiance)==null||i.call(this,e.dataset.amb)})}),this.lsMode.addEventListener("click",()=>{var e;return(e=this.onLsRhythm)==null?void 0:e.call(this)}),this.lsPause.addEventListener("click",()=>{var e;return(e=this.onLsPause)==null?void 0:e.call(this)}),this.setWorld("map"),this.setContext("globe")}setWorld(t){this.world=t,this.worldButton.textContent=GE[t]}setContext(t){t!==this.context&&(this.context=t,this.help.textContent=WE[t],this.backButton.classList.toggle("hidden",t!=="city"),this.lsPanel.classList.toggle("hidden",t!=="lightshow"))}setLsNow(t){this.lsNow.textContent=t}setLsRhythm(t){this.lsMode.textContent=t==="auto"?"RYTHME : AUTO":"RYTHME : MANUEL ✊"}setLsPlaying(t){this.lsPause.textContent=t?"⏸ PAUSE":"▶ LECTURE"}hideAudioHint(){this.audioHint.classList.add("hidden")}setStatus(t,e="loading"){this.status.textContent=t,this.status.className=e==="loading"?"":e}update(t,e,i=0){this.modeLabel.textContent=e??HE[this.context][t.mode]??"STANDBY",this.placeCursor(this.cursor,t.hands[0]),this.placeCursor(this.cursor2,t.hands[1]);const s=this.cursor.querySelector(".charge");s.style.transform=`translate(-50%, -50%) scale(${i})`,s.style.opacity=String(i*.9)}placeCursor(t,e){if(!e.present){t.classList.add("hidden");return}t.classList.remove("hidden"),t.classList.toggle("pinch",e.pinching);const i=e.cursor.x*window.innerWidth,s=e.cursor.y*window.innerHeight;t.style.transform=`translate(${i}px, ${s}px)`}}class qE{constructor(){O(this,"ctx",null);O(this,"master",null);O(this,"whooshGain",null)}get enabled(){return this.ctx!==null}init(){this.ctx||(this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=.2,this.master.connect(this.ctx.destination),this.startAmbient(),this.startWhoosh(),this.startup())}startAmbient(){const t=this.ctx,e=t.createGain();e.gain.value=.03;const i=t.createBiquadFilter();i.type="lowpass",i.frequency.value=220,i.connect(e).connect(this.master);for(const[o,a]of[["triangle",55],["sine",82.4]]){const c=t.createOscillator();c.type=o,c.frequency.value=a,c.connect(i),c.start()}const s=t.createOscillator();s.frequency.value=.08;const r=t.createGain();r.gain.value=.02,s.connect(r).connect(e.gain),s.start()}startWhoosh(){const t=this.ctx,e=t.sampleRate*2,i=t.createBuffer(1,e,t.sampleRate),s=i.getChannelData(0);for(let a=0;a<e;a++)s[a]=Math.random()*2-1;const r=t.createBufferSource();r.buffer=i,r.loop=!0;const o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=700,o.Q.value=.8,this.whooshGain=t.createGain(),this.whooshGain.gain.value=0,r.connect(o).connect(this.whooshGain).connect(this.master),r.start()}setWhoosh(t){if(!this.ctx||!this.whooshGain)return;const e=Math.min(.07,t*.07);this.whooshGain.gain.setTargetAtTime(e,this.ctx.currentTime,.06)}tone(t,e,i,s,r,o=0){if(!this.ctx)return;const a=this.ctx,c=a.currentTime+o,l=a.createOscillator();l.type=s,l.frequency.setValueAtTime(t,c),l.frequency.exponentialRampToValueAtTime(Math.max(1,e),c+i);const h=a.createGain();h.gain.setValueAtTime(0,c),h.gain.linearRampToValueAtTime(r,c+.012),h.gain.exponentialRampToValueAtTime(1e-4,c+i),l.connect(h).connect(this.master),l.start(c),l.stop(c+i+.05)}blip(){this.tone(1180,1480,.06,"sine",.04)}lock(){this.tone(880,1320,.09,"sine",.05)}releaseSound(){this.tone(740,320,.12,"sine",.04)}startup(){[440,659].forEach((e,i)=>this.tone(e,e,.14,"sine",.04,i*.1))}}async function YE(){const n=document.getElementById("scene"),t=new b3({canvas:n,antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(132620,1);const e=new XE,i=new AE(t),s=new FE(t,(A,L)=>e.setStatus(A,L)),r=new zE(t),o=new VE,a=new qE;let c="map",l="auto";window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),i.resize(window.innerWidth,window.innerHeight),s.resize(window.innerWidth,window.innerHeight),r.resize(window.innerWidth,window.innerHeight)}),e.onWorldToggle=A=>{c=A},e.onGlobeBack=()=>s.backToGlobe();const h=(A,L)=>{A.then(()=>{e.setLsNow(`♪ ${L}`),e.setLsPlaying(!0)}).catch(b=>{console.error(b),e.setLsNow("ERREUR DE LECTURE — RÉESSAIE"),e.setLsPlaying(!1)})};e.onLsDemo=()=>{o.playDemo(),e.setLsNow("♪ SYNTH DEMO 120 BPM"),e.setLsPlaying(!0)},e.onLsTrack=(A,L)=>{e.setLsNow("CHARGEMENT…"),h(o.playUrl(A,L),L)},e.onLsFile=A=>h(o.playFile(A),A.name.toUpperCase()),e.onLsAmbiance=A=>r.setAmbiance(A),e.onLsRhythm=()=>{l=l==="auto"?"manual":"auto",e.setLsRhythm(l)},e.onLsPause=()=>e.setLsPlaying(o.togglePlay());const u=()=>{a.init(),e.hideAudioHint()};window.addEventListener("pointerdown",u),window.addEventListener("keydown",u);const f=document.getElementById("video"),p=document.getElementById("debug"),g=new dE(f,p),_=new gE;let m=!1,d=null,E=!1,M=0,v=performance.now();const U=1.2;function R(){var k;const A=performance.now(),L=Math.min((A-v)/1e3,.05);v=A;const b=m?g.update():null,y=_.update(b);if(M=c==="map"&&s.state==="city"&&((k=y.primary)==null?void 0:k.fist)===!0?Math.min(1,M+L/U):Math.max(0,M-L*3),M>=1&&(M=0,s.backToGlobe(),a.lock()),c==="universe"){e.setContext("universe"),e.update(y);const X=i.isHovering,K=i.isGrabbing;i.applyGestures(y),i.isHovering&&!X&&a.blip(),i.isGrabbing&&!K&&a.lock(),!i.isGrabbing&&K&&a.releaseSound(),i.render()}else if(c==="lightshow"){e.setContext("lightshow"),e.update(y),r.applyGestures(y);const X=l==="auto"?o.frame():r.manualFrame(y,L);r.render(X)}else s.applyGestures(y),e.setContext(s.state==="city"?"city":"globe"),e.update(y,s.state==="globe"&&s.hoveredCityName?`TARGET : ${s.hoveredCityName}`:s.inTransition?"DESCENT IN PROGRESS":null,M),s.hoveredCity&&s.hoveredCity!==d&&a.blip(),d=s.hoveredCity,s.inTransition&&!E&&a.lock(),E=s.inTransition,s.render();const H=Math.min(1,Math.abs(y.zoomVelocity)*8+Math.hypot(y.joystick.x,y.joystick.y)*.6+(c==="map"&&s.inTransition?.55:0));a.setWhoosh(H),requestAnimationFrame(R)}R();try{e.setStatus("INITIALIZING OPTICAL SENSORS…"),await g.init(),m=!0,e.setStatus("ALL SYSTEMS OPERATIONAL","ready")}catch(A){console.error(A),e.setStatus("CAMERA ACCESS DENIED — AUTORISE LA WEBCAM PUIS RECHARGE","error")}}YE();
