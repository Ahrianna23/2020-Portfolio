<style>
	#overlay {
		height: 100vh;
		width: 100%;
		background: white;
		position: fixed;
		top: 0; bottom: 0; left: 0; right: 0;
		overflow:hidden;
		font-family: 'quicksandbold', sans-serif;
		z-index: 1100;
	}
	#overlay h5 {
		text-align: center;
		position: absolute;
		top: 55vh; left: 0; bottom: 0; right: 0;
	}
	.spinner {
		width: 80px;
		height: 80px;

		border:2px solid #00bff3;
		border-top:3px solid #8560a8;
		border-radius: 100%;

		position: absolute;
		top: 0; left: 0; bottom: 0; right: 0;
		margin: auto;
		animation: spin 1s infinite linear;

	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
	
</style>


<div id="overlay">
	<div class="spinner"></div>
	<h5>Loading...</h5>
</div>
<script> 
var overlay = document.getElementById('overlay');

window.addEventListener('load', function()
	{
		overlay.style.display = "none" ;
	})
</script>
