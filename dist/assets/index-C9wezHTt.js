(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();class c{constructor(t,o,n){this.toggleBtn=document.querySelector(t),this.toggleBtnImgs=document.querySelectorAll(o),this.dropDownMenu=document.querySelector(n),this.init()}init(){this.toggleBtn.addEventListener("click",()=>this.toggleMenu()),document.addEventListener("click",t=>this.handleOutsideClick(t))}toggleMenu(){this.dropDownMenu.classList.contains("open")?(this.closeMenu(),this.updateImages("https://img.icons8.com/?size=100&id=36389&format=png&color=000000")):(this.openMenu(),this.updateImages("https://img.icons8.com/?size=100&id=46&format=png&color=000000"))}openMenu(){this.dropDownMenu.classList.add("open"),this.dropDownMenu.classList.remove("close")}closeMenu(){this.dropDownMenu.classList.remove("open"),this.dropDownMenu.classList.add("close")}updateImages(t){this.toggleBtnImgs.forEach(o=>{o.src=t})}handleOutsideClick(t){this.toggleBtn.contains(t.target)||this.dropDownMenu.contains(t.target)||(this.closeMenu(),this.updateImages("./assets/img/icons/nav/nav_bar.svg"))}}class l{constructor(){this.navigation=new c(".toggle_btn",".toggle_btn img",".dropdown_menu")}}document.addEventListener("DOMContentLoaded",()=>{new l});