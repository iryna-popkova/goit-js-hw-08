!function(){var e=document.querySelector(".feedback-form"),t=(document.querySelector("input"),document.querySelector("textarea"),{email:"",message:""});e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault()}))}();
//# sourceMappingURL=03-feedback.8e16bf61.js.map
