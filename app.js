const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


function myfunction(){
			let x = document.getElementById('confirmbox2');
			let y = document.getElementById('kiks1');
			let z = document.getElementById('kiks2');

			if(x.type === 'password'){
				x.type = 'text';
				y.style.display = 'none';
				z.style.display = 'block';
			}else{
				x.type = 'password';
				y.style.display = 'block';
				z.style.display = 'none';
			}
		}
  