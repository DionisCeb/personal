(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=document.querySelector(".toggle_btn"),i=document.querySelectorAll(".toggle_btn img"),s=document.querySelector(".dropdown_menu");a.onclick=function(){s.classList.contains("open")?(s.classList.remove("open"),s.classList.add("close"),i.forEach(o=>{o.src="./assets/img/icons/nav/nav_bar.svg"})):(s.classList.add("open"),s.classList.remove("close"),i.forEach(o=>{o.src="./assets/img/icons/nav/close.svg"}))};document.addEventListener("click",function(o){a.contains(o.target)||s.contains(o.target)||(s.classList.remove("open"),s.classList.add("close"),i.forEach(n=>{n.src="./assets/img/icons/nav/nav_bar.svg"}))});
