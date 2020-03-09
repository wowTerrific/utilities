var aArr = Array.from(document.getElementsByTagName("img"));

aArr.map(
	function(x) {
		x.addEventListener("click",function() {
			var overlay = document.createElement("div");
			overlay.style.cssText = "width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 998; background: rgba(0, 0, 0, 0.8);";
			document.body.insertBefore(overlay, document.body.firstChild);
			
			var modal = document.createElement("div");
			modal.style.cssText = "padding: 10px; background: white; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);z-index:999;";
			overlay.append(modal);
			
			var modImg = document.createElement("img");
			modImg.style.cssText = "max-width: 100%; height: auto;";
			modImg.src = x.src;
			modImg.alt = x.alt;
			modal.append(modImg);
			
			var close = document.createElement("a");
			close.innerHTML = "X";
			close.style.cssText = "position: absolute; right: 1%; top: 1%; color: black;font-family: sans-serif; cursor: pointer;text-decoration: none!important; font-weight: bold;";
			modal.append(close);
			
			close.addEventListener("click", function() {
				document.body.removeChild(overlay);
			})
			overlay.addEventListener("click", function() {
				document.body.removeChild(overlay);
			})
		})
	}
);
