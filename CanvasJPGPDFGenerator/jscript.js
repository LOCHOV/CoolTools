function canvas(text, img) {
			var canvas = document.getElementById("canvas");
			var ctx = canvas.getContext("2d");
			ctx.canvas.width = 826;
			ctx.canvas.height = 1169;
			ctx.drawImage(img, 0, 0, 826, 1169);
			ctx.font = "30pt Verdana";
			ctx.fillText(text, 95, 660);
			// return image as dataurl formatted
			img2dataurl = document.getElementById('canvas').toDataURL();
			return img2dataurl;
		}

function message_success(){
			// write a message to the user
			document.getElementById('message').innerHTML = "Text was added to your image";
			document.getElementById('message').style = "color: green;";
			// turn color of the buttons
			document.getElementById('submitpdf').className = "button-success";
			document.getElementById('submitpng').className = "button-success";
		}

function message_failure(){
			// write a message to the user
			document.getElementById('message').innerHTML = "There was an error when loading your file";
			document.getElementById('message').style = "color: red;";
			// turn color of the buttons
			document.getElementById('submitpdf').className = "button-danger";
			document.getElementById('submitpng').className = "button-danger";
		}

function message_noupload(){
			// write a message to the user
			document.getElementById('message').innerHTML = "Please select a file for upload";
			document.getElementById('message').style = "color: red;";
			// turn color of the buttons
			document.getElementById('submitpdf').className = "button-warning";
			document.getElementById('submitpng').className = "button-warning";
		}

		function downloadPNG(){
			var text = document.getElementById("text").value;
			img = generateimagesource();
			img.onload = function () {
				imageAsDataURL = canvas(text, img);
				var link = document.createElement('a');
				link.download = 'file.png';
				link.href = imageAsDataURL;
				link.click();
				message_success();
			}
			img.onerror = function() {
				message_failure();
			}
		}

		function downloadPDF(){
			var text = document.getElementById("text").value;
			img = generateimagesource();
			img.onload = function () {
				imageAsDataURL = canvas(text, img);
				var doc = new jsPDF();
				doc.addImage(imageAsDataURL, 'JPEG', 0, 0);
				doc.save('file.pdf');
				message_success();
			}
			img.onerror = function() {
				message_failure();
			}
		}

		function generateimagesource(){
			if(document.getElementById("myimage").value != "") { // check if a file was selected or not
				var inputElement = document.getElementById('myimage'); //this is the selected file
				var file = inputElement.files[0];
				fileurl = URL.createObjectURL(file);
				preview.src = fileurl;
				img = document.getElementById("preview");
				return img;
			}
			else{
				message_noupload()
			}
		}