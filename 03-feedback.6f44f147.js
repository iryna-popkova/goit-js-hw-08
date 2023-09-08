const e=document.querySelector(".feedback-form");document.querySelector("input"),document.querySelector("textarea");let t={email:"",message:""};e.addEventListener("input",(function(e){t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault()}));
//# sourceMappingURL=03-feedback.6f44f147.js.map
